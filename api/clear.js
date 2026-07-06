const { createClient } = require('@supabase/supabase-js');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();

  const { password } = req.body || {};
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'No autorizado' });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { error } = await supabase
    .from('events')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // borrar todos los registros

  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json({ ok: true });
};
