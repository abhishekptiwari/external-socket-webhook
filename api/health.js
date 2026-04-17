module.exports = async (req, res) => {
  if ((req.method || 'GET') !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  return res.status(200).json({
    ok: true,
    service: 'gausa-website',
    time: new Date().toISOString(),
  });
};

