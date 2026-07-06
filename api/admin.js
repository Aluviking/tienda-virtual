const { createClient } = require('@supabase/supabase-js');

module.exports = async (req, res) => {
  // Acepta POST para no exponer la clave en la URL ni en logs del servidor
  if (req.method !== 'POST') return res.status(405).end();

  const { password } = req.body || {};
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'No autorizado' });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1000);

  if (error) return res.status(500).json({ error: error.message });

  const now   = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // Excluir pruebas de todas las métricas reales
  const realEvents  = events.filter(e => e.event_type !== 'prueba');
  const todayEvents = realEvents.filter(e => new Date(e.created_at) >= today);

  const count      = (type) => realEvents.filter(e => e.event_type === type).length;
  const countToday = (type) => todayEvents.filter(e => e.event_type === type).length;

  // Pedidos = eventos reales con artículos en el carrito
  const pedidos   = realEvents.filter(e => e.cart_items && e.cart_items.length > 0);
  const valorTotal = pedidos.reduce((s, e) => s + (e.cart_total || 0), 0);

  // Top productos: sumar qty de cada producto en todos los pedidos
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

  // total_wa = todas las aperturas de WA (todos los eventos disparan openWA)
  const totalWA   = count('pagar_producto') + count('pagar_carrito') + count('pagar_checkout') + count('wapp_flotante');
  const hoyWA     = countToday('pagar_producto') + countToday('pagar_carrito') + countToday('pagar_checkout') + countToday('wapp_flotante');

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
