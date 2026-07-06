const { createClient } = require('@supabase/supabase-js');

const ALLOWED_ORIGINS = [
  'https://undershoes.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000',
];

const VALID_EVENTS = new Set([
  'pagar_producto', 'pagar_carrito', 'pagar_checkout', 'wapp_flotante', 'prueba',
]);

const MAX_STR = 200;
const clamp = (v) => (typeof v === 'string' ? v.slice(0, MAX_STR) : v);

module.exports = async (req, res) => {
  const origin = req.headers.origin || '';
  const allowed = ALLOWED_ORIGINS.includes(origin);

  res.setHeader('Access-Control-Allow-Origin', allowed ? origin : ALLOWED_ORIGINS[0]);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Vary', 'Origin');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

  const {
    event_type,
    product_id, product_name, product_brand,
    size, qty, unit_price,
    cart_items, cart_total,
  } = req.body || {};

  if (!event_type) return res.status(400).json({ error: 'event_type requerido' });
  if (!VALID_EVENTS.has(event_type)) return res.status(400).json({ error: 'event_type inválido' });

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { error } = await supabase.from('events').insert([{
    event_type,
    product_id:    product_id    ? String(product_id).slice(0, 50)  : null,
    product_name:  product_name  ? clamp(product_name)              : null,
    product_brand: product_brand ? clamp(product_brand)             : null,
    size:          size != null  ? String(size).slice(0, 20)        : null,
    qty:           qty           ? Number(qty)                      : null,
    unit_price:    unit_price    ? Number(unit_price)               : null,
    cart_items:    Array.isArray(cart_items) ? cart_items.slice(0, 50) : null,
    cart_total:    cart_total    ? Number(cart_total)               : null,
  }]);

  if (error) {
    console.error('track error:', error.message);
    return res.status(500).json({ error: 'Error al registrar evento' });
  }
  return res.status(200).json({ ok: true });
};
