import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    // 🔒 Ensure API key exists
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // 📥 Parse request body
    const body = await req.json();
    const { name, email, message } = body;

    // ✅ Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // ✉️ Initialize Resend (runtime only)
    const resend = new Resend(apiKey);

    // 🧼 Sanitize message (basic)
    const cleanMessage = message
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br>");

    // 📤 Send email
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // change after domain verification
      to: ["naimurrahman79127@gmail.com"],
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${cleanMessage}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("Email send error:", error);

    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}