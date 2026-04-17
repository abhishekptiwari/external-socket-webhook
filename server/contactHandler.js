const nodemailer = require('nodemailer');

function readEnv(name, { required = false, fallback = undefined } = {}) {
  const value = process.env[name] ?? fallback;
  if (required && (!value || String(value).trim() === '')) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

function safeString(value, maxLen = 2000) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLen);
}

function isProduction() {
  return String(process.env.NODE_ENV || '').toLowerCase() === 'production';
}

async function sendContactEmail({ requestId, fullName, companyEmail, projectScope }) {
  const smtpHost = readEnv('SMTP_HOST', { required: true });
  const smtpPort = Number(readEnv('SMTP_PORT', { required: true }));
  const smtpUser = readEnv('SMTP_USER', { required: true });
  const smtpPass = readEnv('SMTP_PASS', { required: true });
  const contactTo = readEnv('CONTACT_TO', { fallback: smtpUser });

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const subject = `New inquiry — ${fullName}`;
  const text = [
    'New project inquiry received:',
    '',
    `Full name: ${fullName}`,
    `Company email: ${companyEmail}`,
    '',
    'Project scope:',
    projectScope,
    '',
    `Request ID: ${requestId}`,
  ].join('\n');

  return transporter.sendMail({
    from: `Gausa Technology <${smtpUser}>`,
    to: contactTo,
    replyTo: companyEmail,
    subject,
    text,
  });
}

async function handleContact({ method, headers, body }) {
  const requestId =
    (headers && (headers['x-vercel-id'] || headers['x-request-id'])) ||
    `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  const startedAt = Date.now();

  if ((method || 'GET') !== 'POST') {
    return {
      status: 405,
      json: { ok: false, error: 'Method not allowed' },
      headers: { Allow: 'POST' },
    };
  }

  const payload = body || {};
  const fullName = safeString(payload.fullName);
  const companyEmail = safeString(payload.companyEmail);
  const projectScope = safeString(payload.projectScope, 6000);

  const missing = [];
  if (!fullName) missing.push('fullName');
  if (!companyEmail) missing.push('companyEmail');
  if (!projectScope) missing.push('projectScope');
  if (missing.length > 0) {
    console.info('[contact] invalid_payload', {
      requestId,
      missing,
    });
    return {
      status: 400,
      json: { ok: false, error: 'Missing required fields' },
    };
  }

  console.info('[contact] request_received', {
    requestId,
    fullNameLen: fullName.length,
    companyEmailDomain: companyEmail.includes('@') ? companyEmail.split('@').slice(-1)[0] : null,
    projectScopeLen: projectScope.length,
  });

  try {
    console.info('[contact] smtp_config', {
      requestId,
      smtpHost: process.env.SMTP_HOST ? String(process.env.SMTP_HOST) : null,
      smtpPort: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : null,
      secure: Number(process.env.SMTP_PORT) === 465,
      hasUser: Boolean(process.env.SMTP_USER),
      hasPass: Boolean(process.env.SMTP_PASS),
      to: process.env.CONTACT_TO ? String(process.env.CONTACT_TO) : null,
    });

    const info = await sendContactEmail({
      requestId,
      fullName,
      companyEmail,
      projectScope,
    });

    console.info('[contact] mail_sent', {
      requestId,
      messageId: info && info.messageId ? info.messageId : null,
      tookMs: Date.now() - startedAt,
    });

    return {
      status: 200,
      json: { ok: true },
    };
  } catch (error) {
    const message = error && error.message ? error.message : String(error);
    const isMissingEnv = message.startsWith('Missing required env var:');

    console.error('[contact] error', {
      requestId,
      message,
      tookMs: Date.now() - startedAt,
    });

    return {
      status: 500,
      json: isProduction()
        ? { ok: false, error: 'Failed to send message' }
        : {
            ok: false,
            error: isMissingEnv ? 'Server email is not configured' : 'Failed to send message',
            code: isMissingEnv ? 'CONFIG_MISSING' : 'SMTP_ERROR',
          },
    };
  }
}

module.exports = { handleContact };
