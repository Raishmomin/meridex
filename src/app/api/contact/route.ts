import { NextResponse } from 'next/server';

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
    } = body;

    // Validate required fields
    if (!fullName || !email || !firmName) {
      return NextResponse.json(
        { error: 'Full name, email, and firm name are required.' },
        { status: 400 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'info@meridexsolutions.com';
    const resendApiKey = process.env.RESEND_API_KEY;

    // Log the contact inquiry for persistence
    console.log('[NEW INQUIRY RECEIVED]', {
      timestamp: new Date().toISOString(),
      fullName,
      email,
      phone: phone || 'Not provided',
      firmName,
      country,
      firmType,
      priorityTask,
      estimatedVolume,
      message: message || 'No extra message',
      target: receiverEmail,
    });

    // If Resend API key is configured, send the email directly
    if (resendApiKey) {
      const emailContent = `
New Pilot Request from Meridex Solutions Website:
--------------------------------------------------
Full Name: ${fullName}
Work Email: ${email}
Contact Phone: ${phone || 'Not provided'}
Firm Name: ${firmName}
Country / Jurisdiction: ${country}
Firm Type: ${firmType}
Priority Task: ${priorityTask}
Estimated Volume: ${estimatedVolume}

Message / Specific Requirements:
${message || 'None provided'}
--------------------------------------------------
Sent from meridexsolutions.com
      `.trim();

      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-ID': 'resend-email',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || 'Meridex Inquiries <onboarding@resend.dev>',
          to: [receiverEmail],
          reply_to: email,
          subject: `[New Pilot Request] ${firmName} - ${priorityTask}`,
          text: emailContent,
        }),
      });

      if (!res.ok) {
        const errorData = await res.text();
        console.error('[RESEND API ERROR]', errorData);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Inquiry received successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[CONTACT API ERROR]', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
