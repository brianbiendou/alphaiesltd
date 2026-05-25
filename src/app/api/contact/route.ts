import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, company, message } = await request.json();

  const { error } = await resend.emails.send({
    from: "Alpha IES Contact <onboarding@resend.dev>",
    to: "brianbiendou@gmail.com",
    replyTo: email,
    subject: `Nouveau message de ${name}${company ? ` — ${company}` : ""}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <h2 style="color:#111;margin-bottom:16px">Nouveau message de contact — Alpha IES</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#666;width:120px">Nom</td><td style="padding:8px 0;color:#111"><strong>${name}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0;color:#111"><a href="mailto:${email}">${email}</a></td></tr>
          ${company ? `<tr><td style="padding:8px 0;color:#666">Entreprise</td><td style="padding:8px 0;color:#111">${company}</td></tr>` : ""}
        </table>
        <hr style="margin:16px 0;border:none;border-top:1px solid #eee"/>
        <p style="color:#666;margin-bottom:8px">Message</p>
        <p style="color:#111;white-space:pre-wrap">${message}</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
