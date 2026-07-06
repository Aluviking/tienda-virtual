const { createClient } = require('@supabase/supabase-js');

module.exports = async (req, res) => {
  if (req.method !== 'GET') return res.status(405).end();

  const { password } = req.query;
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

  const todayEvents = events.filter(e => new Date(e.created_at) >= today);

  // Contar tipos
  const count = (type) => events.filter(e => e.event_type === type).length;
  const countToday = (type) => todayEvents.filter(e => e.event_type === type).length;

  // Pedidos = eventos con cart_items (tienen productos)
  const pedidos = events.filter(e => e.cart_items && e.cart_items.length > 0);

  // Valor total estimado (suma de cart_total de todos los pedidos)
  const valorTotal = pedidos.reduce((s, e) => s + (e.cart_total || 0), 0);

  // Top productos: desplegar cart_items y agrupar por nombre
  const productCount = {};
  pedidos.forEach(e => {
    (e.cart_items || []).forEach(item => {
      const key = item.name || item.product_name || 'Desconocido';
      productCount[key] = (productCount[key] || 0) + (item.qty || 1);
    });
  });
  const topProductos = Object.entries(productCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, qty]) => ({ name, qty }));

  return res.status(200).json({
    stats: {
      pagar_producto:  count('pagar_producto'),
      pagar_carrito:   count('pagar_carrito'),
      pagar_checkout:  count('pagar_checkout'),
      wapp_flotante:   count('wapp_flotante'),
      total_wa:        events.length,
      pedidos_total:   pedidos.length,
      valor_total:     valorTotal,
      // hoy
      hoy_pagar:       countToday('pagar_producto') + countToday('pagar_carrito') + countToday('pagar_checkout'),
      hoy_wa:          todayEvents.length,
    },
    topProductos,
    events,
  });
};
