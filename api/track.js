const { createClient } = require('@supabase/supabase-js');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const {
    event_type,
    product_id, product_name, product_brand,
    size, qty, unit_price,
    cart_items, cart_total
  } = req.body || {};

  if (!event_type) return res.status(400).json({ error: 'event_type requerido' });

  const { error } = await supabase.from('events').insert([{
    event_type,
    product_id:    product_id    ? String(product_id)   : null,
    product_name:  product_name  || null,
    product_brand: product_brand || null,
    size:          size != null  ? String(size)         : null,
    qty:           qty           ? Number(qty)          : null,
    unit_price:    unit_price    ? Number(unit_price)   : null,
    cart_items:    cart_items    || null,
    cart_total:    cart_total    ? Number(cart_total)   : null,
  }]);

  if (error) {
    console.error('track error:', error.message);
    return res.status(500).json({ error: error.message });
  }
  return res.status(200).json({ ok: true });
};
