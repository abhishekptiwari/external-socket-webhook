const http = require('http');
const { handleContact } = require('./contactHandler');

try {
  require('dotenv').config({ path: '.env.local' });
  require('dotenv').config({ path: '.env' });
} catch (error) {
  // optional in case dotenv isn't installed
}

const port = Number(process.env.DEV_API_PORT || 4000);

function sendJson(res, status, json, extraHeaders = {}) {
  const body = JSON.stringify(json);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    ...extraHeaders,
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
      if (data.length > 1_000_000) {
        reject(new Error('Payload too large'));
        req.destroy();
      }
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const url = req.url || '/';

  if (url === '/health' || url === '/api/health') {
    return sendJson(res, 200, { ok: true });
  }

  if (url.startsWith('/api/contact')) {
    try {
      const raw = await readBody(req);
      const body = raw ? JSON.parse(raw) : {};
      const result = await handleContact({
        method: req.method,
        headers: req.headers,
        body,
      });
      return sendJson(res, result.status, result.json, result.headers || {});
    } catch (error) {
      return sendJson(res, 500, { ok: false, error: 'Dev API error' });
    }
  }

  return sendJson(res, 404, { ok: false, error: 'Not found' });
});

server.listen(port, () => {
  console.log(`[dev-api] listening on http://localhost:${port}`);
  console.log('[dev-api] POST /api/contact');
});
