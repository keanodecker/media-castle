import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Alle Felder sind erforderlich.' }, { status: 400 });
    }

    const html = `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #0D2144;">Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr style="border-color: #eee;" />
        <p><strong>Nachricht:</strong></p>
        <p style="white-space: pre-line;">${message}</p>
      </div>
    `;

    await resend.emails.send({
      from: 'Media Castle <kontakt@media-castle.com>',
      to: ['info@media-castle.com', 'info@keanodecker.com'],
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend Fehler:', error);
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 500 });
  }
}
