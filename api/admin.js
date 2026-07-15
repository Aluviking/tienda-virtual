const { createClient } = require('@supabase/supabase-js');

// Protección básica contra fuerza bruta en memoria (se reinicia con cada cold start)
const attempts = new Map();
const MAX_ATTEMPTS = 10;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutos

function isRateLimited(ip) {
  const now = Date.now();
  const entry = attempts.get(ip) || { count: 0, start: now };
  if (now - entry.start > WINDOW_MS) { attempts.delete(ip); return false; }
  return entry.count >= MAX_ATTEMPTS;
}

function recordAttempt(ip) {
  const now = Date.now();
  const entry = attempts.get(ip) || { count: 0, start: now };
  if (now - entry.start > WINDOW_MS) { attempts.set(ip, { count: 1, start: now }); return; }
  attempts.set(ip, { count: entry.count + 1, start: entry.start });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();

  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || 'unknown';

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Demasiados intentos. Espera 15 minutos.' });
  }

  const { password } = req.body || {};
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    recordAttempt(ip);
    return res.status(401).json({ error: 'No autorizado' });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  let events = [];
  let dbError = null;
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1000);
    if (error) dbError = error.message;
    else events = data || [];
  } catch (e) {
    dbError = e.message;
  }

  if (dbError && events.length === 0) {
    return res.status(200).json({
      stats: { pagar_producto:0, pagar_carrito:0, pagar_checkout:0, wapp_flotante:0,
               total_wa:0, pedidos_total:0, valor_total:0, hoy_pagar:0, hoy_wa:0 },
      topProductos: [],
      events: [],
      warning: 'Base de datos no disponible: ' + dbError,
    });
  }

  const now   = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const realEvents  = events.filter(e => e.event_type !== 'prueba');
  const todayEvents = realEvents.filter(e => new Date(e.created_at) >= today);

  const count      = (type) => realEvents.filter(e => e.event_type === type).length;
  const countToday = (type) => todayEvents.filter(e => e.event_type === type).length;

  const pedidos    = realEvents.filter(e => e.cart_items && e.cart_items.length > 0);
  const valorTotal = pedidos.reduce((s, e) => s + (e.cart_total || 0), 0);

  const productCount = {};
  pedidos.forEach(e => {
    (e.cart_items || []).forEach(item => {
      const key = `${item.brand ? item.brand + ' ' : ''}${item.name || 'Desconocido'}`.trim();
      productCount[key] = (productCount[key] || 0) + (item.qty || 1);
    });
  });
  const topProductos = Object.entries(productCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, qty]) => ({ name, qty }));

  const totalWA = count('pagar_producto') + count('pagar_carrito') + count('pagar_checkout') + count('wapp_flotante');
  const hoyWA   = countToday('pagar_producto') + countToday('pagar_carrito') + countToday('pagar_checkout') + countToday('wapp_flotante');

  return res.status(200).json({
    stats: {
      pagar_producto: count('pagar_producto'),
      pagar_carrito:  count('pagar_carrito'),
      pagar_checkout: count('pagar_checkout'),
      wapp_flotante:  count('wapp_flotante'),
      total_wa:       totalWA,
      pedidos_total:  pedidos.length,
      valor_total:    valorTotal,
      hoy_pagar:      countToday('pagar_producto') + countToday('pagar_carrito') + countToday('pagar_checkout'),
      hoy_wa:         hoyWA,
    },
    topProductos,
    events,
  });
};
