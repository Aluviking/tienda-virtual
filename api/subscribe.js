// api/subscribe.js — Vercel Serverless Function
// Guarda suscriptores del modal "Mantenerme informado" en Supabase

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = async (req, res) => {
  // Solo aceptar POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { name, email, phone } = req.body || {};

  // Validaciones básicas
  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'El nombre es requerido' });
  }
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Correo inválido' });
  }
  if (!phone || !phone.trim()) {
    return res.status(400).json({ error: 'El teléfono es requerido' });
  }

  const { error } = await supabase.from('subscribers').insert([
    {
      name:  name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
    },
  ]);

  if (error) {
    // Correo duplicado (unique constraint)
    if (error.code === '23505') {
      return res.status(409).json({ error: 'Este correo ya está registrado' });
    }
    console.error('Supabase error:', error.message);
    return res.status(500).json({ error: 'Error interno. Intenta de nuevo.' });
  }

  return res.status(200).json({ ok: true });
};
