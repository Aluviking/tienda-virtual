const attempts = new Map();
const MAX_ATTEMPTS = 10;
const WINDOW_MS = 15 * 60 * 1000;

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

async function gistRead() {
  const res = await fetch(`https://api.github.com/gists/${process.env.GIST_ID}`, {
    headers: {
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (!res.ok) return [];
  const gist = await res.json();
  try { return JSON.parse(gist.files['events.json']?.content || '[]'); }
  catch { return []; }
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

  let events = [];
  try { events = await gistRead(); } catch {}

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
