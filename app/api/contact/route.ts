import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: "muhammad.amin1406@gmail.com",
      replyTo: email,
      subject: `[Portfolio Contact] New message from ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #060918; color: #f0f6ff; padding: 32px; border-radius: 12px; border: 1px solid rgba(59,130,246,0.2);">
          <h2 style="color: #22d3ee; margin-bottom: 8px;">New Contact Message</h2>
          <p style="color: #94a3b8; margin-bottom: 24px; font-size: 14px;">From your portfolio contact form</p>
          <hr style="border-color: rgba(59,130,246,0.2); margin-bottom: 24px;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; width: 100px;">Name</td>
              <td style="padding: 8px 0; color: #f0f6ff; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Email</td>
              <td style="padding: 8px 0; color: #3b82f6;">${email}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="color: #94a3b8; font-size: 13px; margin-bottom: 8px;">Message</p>
            <div style="background: rgba(59,130,246,0.05); border: 1px solid rgba(59,130,246,0.15); border-radius: 8px; padding: 16px; color: #f0f6ff; line-height: 1.7;">
              ${message.replace(/\n/g, "<br/>")}
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
