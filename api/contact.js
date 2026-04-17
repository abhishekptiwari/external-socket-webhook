const { handleContact } = require('../server/contactHandler');

module.exports = async (req, res) => {
  try {
    const result = await handleContact({
      method: req.method,
      headers: req.headers,
      body: req.body,
    });
    if (result.headers) {
      Object.entries(result.headers).forEach(([key, value]) => {
        res.setHeader(key, value);
      });
    }
    return res.status(result.status).json(result.json);
  } catch (error) {
    console.error('[contact] vercel_wrapper_error', {
      message: error && error.message ? error.message : String(error),
    });
    return res.status(500).json({ ok: false, error: 'Failed to send message' });
  }
};
