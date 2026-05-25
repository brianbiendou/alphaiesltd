import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, company, message } = await request.json();

  const { error } = await resend.emails.send({
    from: "Alpha IES Ltd <happielvira@alphaiesltd.com>",
    to: "happielvira@alphaiesltd.com",
    replyTo: email,
    subject: `Nouveau message de ${name}${company ? ` — ${company}` : ""}`,
    html: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
</head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif">
  <div style="max-width:580px;margin:32px auto;background:#fff;border-radius:6px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.08)">
    <div style="background:#111114;padding:24px 32px">
      <p style="margin:0;color:#c9a553;font-size:18px;font-weight:700;letter-spacing:1px">ALPHA IES LTD</p>
      <p style="margin:4px 0 0;color:#fff;font-size:13px;opacity:.7">Nouveau message de contact</p>
    </div>
    <div style="padding:32px">
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr>
          <td style="padding:10px 0;color:#888;width:110px;border-bottom:1px solid #f0f0f0">Nom</td>
          <td style="padding:10px 0;color:#111;font-weight:600;border-bottom:1px solid #f0f0f0">${name}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#888;border-bottom:1px solid #f0f0f0">Email</td>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0"><a href="mailto:${email}" style="color:#c9a553;text-decoration:none">${email}</a></td>
        </tr>
        ${company ? `<tr>
          <td style="padding:10px 0;color:#888;border-bottom:1px solid #f0f0f0">Entreprise</td>
          <td style="padding:10px 0;color:#111;border-bottom:1px solid #f0f0f0">${company}</td>
        </tr>` : ""}
      </table>
      <div style="margin-top:24px">
        <p style="margin:0 0 8px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px">Message</p>
        <p style="margin:0;color:#111;font-size:14px;line-height:1.7;white-space:pre-wrap">${message}</p>
      </div>
      <div style="margin-top:32px;text-align:center">
        <a href="mailto:${email}" style="display:inline-block;background:#c9a553;color:#fff;text-decoration:none;padding:12px 28px;border-radius:4px;font-size:13px;font-weight:600;letter-spacing:1px">R&eacute;pondre &agrave; ${name}</a>
      </div>
    </div>
    <div style="background:#f9f9f9;padding:16px 32px;text-align:center">
      <p style="margin:0;color:#aaa;font-size:11px">Alpha IES Ltd &mdash; alphaiesltd.com</p>
    </div>
  </div>
</body>
</html>`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
