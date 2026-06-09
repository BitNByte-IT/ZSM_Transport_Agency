import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, email, service, category, message } = req.body || {};

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }

  // SMTP credentials from environment variables (.env.local)
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    MAIL_TO,
  } = process.env;

  console.log("SMTP check:", !!SMTP_HOST, !!SMTP_USER, !!SMTP_PASS, !!SMTP_PORT);
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    // In dev without SMTP configured, log and still succeed so UI can be tested.
    console.log("[contact] SMTP not configured. Submission:", { name, phone, email, service, category, message });
    return res.status(200).json({ ok: true, note: "SMTP not configured - logged only" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465, // true for 465, false for 587
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden">
        <div style="background:#0D47A1;color:#fff;padding:18px 24px">
          <h2 style="margin:0">New Shipment Request - ZSM Transport Agency</h2>
        </div>
        <div style="padding:24px;color:#1e293b">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email || "—")}</p>
          <p><strong>Service Requested:</strong> ${escapeHtml(service || "—")}</p>
          <p><strong>Product Category:</strong> ${escapeHtml(category || "—")}</p>
          <p><strong>Message:</strong><br/>${escapeHtml(message || "—").replace(/\n/g, "<br/>")}</p>
        </div>
        <div style="background:#f1f5f9;padding:12px 24px;font-size:12px;color:#64748b">
          Sent from ZSM Transport Agency's Website.
        </div>
      </div>`;

    await transporter.sendMail({
      from: `"ZSM Transport Agency Website" <${SMTP_USER}>`,
      to: MAIL_TO || SMTP_USER,
      replyTo: email || undefined,
      subject: `New Delivery Request from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nProduct Category: ${category}\nMessage: ${message}`,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[contact] send error:", err);
    // return res.status(500).json({ error: "Failed to send" });
      return res.status(500).json({ error: err.message }); // expose it temporarily
  }
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
