import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate Limiter: Map of IP -> array of request timestamps (epoch ms)
// Limit: Maximum 5 inquiries per IP every 10 minutes (600,000 ms)
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequestTimestamps = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (ipRequestTimestamps.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    ipRequestTimestamps.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  ipRequestTimestamps.set(ip, timestamps);

  // Periodically clean up old IPs if map grows too large
  if (ipRequestTimestamps.size > 1000) {
    for (const [key, list] of ipRequestTimestamps.entries()) {
      const active = list.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (active.length === 0) {
        ipRequestTimestamps.delete(key);
      } else {
        ipRequestTimestamps.set(key, active);
      }
    }
  }

  return false;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      firmName,
      country,
      firmType,
      priorityTask,
      estimatedVolume,
      message,
      _hp, // Honeypot field (hidden from human users, filled by bots)
    } = body;

    // 1. Identify Client IP for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = (forwardedFor ? forwardedFor.split(',')[0].trim() : realIp) || '127.0.0.1';

    // 2. Honeypot check: If the hidden honeypot field is filled, silently discard without error
    if (_hp) {
      console.warn('[SPAM BOT PREVENTED]', { ip: clientIp, honeypotValue: _hp });
      return NextResponse.json(
        { success: true, message: 'Inquiry received successfully.' },
        { status: 200 }
      );
    }

    // 3. Validate required fields
    if (!fullName || !email || !firmName) {
      return NextResponse.json(
        { error: 'Full name, work email, and firm name are required.' },
        { status: 400 }
      );
    }

    // 4. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid work email address.' },
        { status: 400 }
      );
    }

    // 5. Rate Limiting Check on valid submissions
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          error:
            'You have submitted multiple inquiries recently. Please wait a few minutes before submitting another request.',
        },
        { status: 429 }
      );
    }

    // Sanitize string lengths to prevent payload abuse
    const cleanFullName = String(fullName).trim().slice(0, 100);
    const cleanEmail = String(email).trim().slice(0, 100);
    const cleanPhone = phone ? String(phone).trim().slice(0, 50) : 'Not provided';
    const cleanFirmName = String(firmName).trim().slice(0, 100);
    const cleanCountry = country ? String(country).trim().slice(0, 50) : 'Not specified';
    const cleanFirmType = firmType ? String(firmType).trim().slice(0, 80) : 'Not specified';
    const cleanPriorityTask = priorityTask ? String(priorityTask).trim().slice(0, 80) : 'Not specified';
    const cleanEstimatedVolume = estimatedVolume ? String(estimatedVolume).trim().slice(0, 80) : 'Not specified';
    const cleanMessage = message ? String(message).trim().slice(0, 3000) : 'No additional message provided';

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'info@meridexsolutions.com';
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM_EMAIL || smtpUser || 'info@meridexsolutions.com';

    // Log the contact inquiry for persistence
    console.log('[NEW INQUIRY RECEIVED]', {
      timestamp: new Date().toISOString(),
      clientIp,
      fullName: cleanFullName,
      email: cleanEmail,
      phone: cleanPhone,
      firmName: cleanFirmName,
      country: cleanCountry,
      firmType: cleanFirmType,
      priorityTask: cleanPriorityTask,
      estimatedVolume: cleanEstimatedVolume,
      target: receiverEmail,
    });

    // 5. Send via SMTP if configured
    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for 587 (STARTTLS)
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const plainTextContent = `
NEW PILOT REQUEST - MERIDEX SOLUTIONS
=====================================
Submitted at: ${new Date().toUTCString()}

CONTACT DETAILS:
- Full Name: ${cleanFullName}
- Work Email: ${cleanEmail}
- Contact Phone: ${cleanPhone}
- Firm Name: ${cleanFirmName}
- Jurisdiction: ${cleanCountry}
- Firm Type: ${cleanFirmType}

OPERATIONAL SCOPE:
- Priority Task: ${cleanPriorityTask}
- Estimated Weekly Volume: ${cleanEstimatedVolume}

MESSAGE / BACKLOG:
${cleanMessage}

=====================================
Direct reply: You can reply directly to this email to contact ${cleanFullName} (${cleanEmail}).
      `.trim();

      const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Pilot Request - Meridex Solutions</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
    
    <!-- Header -->
    <div style="background-color: #0b0f14; padding: 28px 32px; border-bottom: 3px solid #00c9a7;">
      <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 700; letter-spacing: -0.5px;">
        Meridex Solutions
      </h1>
      <p style="color: #94a3b8; font-size: 13px; margin: 4px 0 0 0;">
        New Client Pilot &amp; Inquiry Request
      </p>
    </div>

    <!-- Body -->
    <div style="padding: 32px;">
      <div style="background-color: #f1f5f9; border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
        <p style="margin: 0; font-size: 14px; color: #334155;">
          <strong>${cleanFullName}</strong> from <strong>${cleanFirmName}</strong> has requested a tailored pilot proposal.
        </p>
      </div>

      <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-top: 0; margin-bottom: 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">
        Client Information
      </h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; color: #64748b; width: 140px;">Full Name:</td>
          <td style="padding: 8px 0; font-weight: 600; color: #0f172a;">${cleanFullName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">Work Email:</td>
          <td style="padding: 8px 0; font-weight: 600; color: #0284c7;">
            <a href="mailto:${cleanEmail}" style="color: #0284c7; text-decoration: none;">${cleanEmail}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">Phone:</td>
          <td style="padding: 8px 0; color: #0f172a;">${cleanPhone}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">Firm Name:</td>
          <td style="padding: 8px 0; font-weight: 600; color: #0f172a;">${cleanFirmName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">Jurisdiction:</td>
          <td style="padding: 8px 0; color: #0f172a;">${cleanCountry}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">Firm Type:</td>
          <td style="padding: 8px 0; color: #0f172a;">${cleanFirmType}</td>
        </tr>
      </table>

      <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-top: 0; margin-bottom: 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">
        Operational Scope
      </h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; color: #64748b; width: 140px;">Priority Task:</td>
          <td style="padding: 8px 0; font-weight: 600; color: #0f172a;">${cleanPriorityTask}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">Estimated Volume:</td>
          <td style="padding: 8px 0; color: #0f172a;">${cleanEstimatedVolume}</td>
        </tr>
      </table>

      <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-top: 0; margin-bottom: 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">
        Requirements &amp; Backlog
      </h3>
      <div style="background-color: #f8fafc; border-left: 3px solid #00c9a7; padding: 14px 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">
${cleanMessage}
      </div>

      <!-- Action Button -->
      <div style="margin-top: 32px; text-align: center;">
        <a href="mailto:${cleanEmail}?subject=Re:%20Meridex%20Solutions%20Pilot%20Proposal%20for%20${encodeURIComponent(cleanFirmName)}" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 9999px; font-weight: 600; font-size: 14px;">
          Reply to ${cleanFullName}
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 16px 32px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;">
      Inquiry received via meridexsolutions.com · Meridex Solutions Operations
    </div>
  </div>
</body>
</html>
      `.trim();

      await transporter.sendMail({
        from: `Meridex Inquiries <${smtpFrom}>`,
        to: receiverEmail,
        replyTo: cleanEmail,
        subject: `[New Pilot Request] ${cleanFirmName} - ${cleanPriorityTask}`,
        text: plainTextContent,
        html: htmlContent,
      });

      console.log('[SMTP EMAIL SENT SUCCESSFULLY]', {
        to: receiverEmail,
        replyTo: cleanEmail,
      });
    }

    return NextResponse.json(
      { success: true, message: 'Inquiry received successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[CONTACT API ERROR]', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while sending your inquiry. Please try again later.' },
      { status: 500 }
    );
  }
}
