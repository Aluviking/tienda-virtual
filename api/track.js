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

async function gistAppend(event) {
  const events = await gistRead();
  events.unshift(event); // más recientes primero
  const trimmed = events.slice(0, 2000); // máximo 2000 eventos
  await fetch(`https://api.github.com/gists/${process.env.GIST_ID}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({ files: { 'events.json': { content: JSON.stringify(trimmed) } } }),
  });
}

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
    event_type, product_id, product_name, product_brand,
    size, qty, unit_price, cart_items, cart_total,
  } = req.body || {};

  if (!event_type) return res.status(400).json({ error: 'event_type requerido' });
  if (!VALID_EVENTS.has(event_type)) return res.status(400).json({ error: 'event_type inválido' });

  const event = {
    event_type,
    product_id:    product_id    ? String(product_id).slice(0, 50)  : null,
    product_name:  product_name  ? clamp(product_name)              : null,
    product_brand: product_brand ? clamp(product_brand)             : null,
    size:          size != null  ? String(size).slice(0, 20)        : null,
    qty:           qty           ? Number(qty)                      : null,
    unit_price:    unit_price    ? Number(unit_price)               : null,
    cart_items:    Array.isArray(cart_items) ? cart_items.slice(0, 50) : null,
    cart_total:    cart_total    ? Number(cart_total)               : null,
    created_at:    new Date().toISOString(),
  };

  try {
    await gistAppend(event);
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Error al registrar evento' });
  }
};
