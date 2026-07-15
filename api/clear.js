module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();

  const { password } = req.body || {};
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'No autorizado' });
  }

  try {
    await fetch(`https://api.github.com/gists/${process.env.GIST_ID}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({ files: { 'events.json': { content: '[]' } } }),
    });
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Error al limpiar datos' });
  }
};
