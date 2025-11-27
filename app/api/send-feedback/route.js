import nodemailer from "nodemailer";

export async function POST(req) {
  const { message } = await req.json();

  if (!message || !message.trim()) {
    return new Response(JSON.stringify({ message: "Message is required" }), { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Feedback" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVING_EMAIL,
      subject: "New Feedback from Portfolio",
      html: `<p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    return new Response(JSON.stringify({ message: "Feedback sent successfully" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to send feedback" }), { status: 500 });
  }
}
