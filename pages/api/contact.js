export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, email, service, category, message } = req.body || {};

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }

  const { EMAIL_SERVICE_URL, EMAIL_SERVICE_SECRET, MAIL_TO } = process.env;

  if (!EMAIL_SERVICE_URL || !EMAIL_SERVICE_SECRET) {
    console.log("[contact] Email service not configured. Submission:", { name, phone, email, service, category, message });
    return res.status(200).json({ ok: true, note: "Email service not configured - logged only" });
  }

  try {
    const response = await fetch(`${EMAIL_SERVICE_URL}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": EMAIL_SERVICE_SECRET,
      },
      body: JSON.stringify({ name, phone, email, service, category, message, mailTo: MAIL_TO }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("[contact] Email service error:", data);
      return res.status(500).json({ error: data.error || "Failed to send email" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[contact] Failed to reach email service:", err.message);
    return res.status(500).json({ error: "Email service unreachable" });
  }
}
