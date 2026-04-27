import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "EXISTS" : "MISSING");
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Tanveer Stationery" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 New Contact: ${subject}`,

      html: `
      <div style="background:#f4f6f8;padding:30px 0;font-family:Arial,sans-serif">

        <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08)">

          <!-- HEADER -->
          <div style="background:#b08d3c;padding:20px;text-align:center;color:white">
            <h2 style="margin:0;">Tanveer Stationery</h2>
            <p style="margin:0;font-size:12px;">New Contact Message</p>
          </div>

          <!-- BODY -->
          <div style="padding:25px">

            <table width="100%" style="border-collapse:collapse">

              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#333;">Name:</td>
                <td style="color:#555;">${name}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#333;">Email:</td>
                <td style="color:#555;">${email}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#333;">Subject:</td>
                <td style="color:#555;">${subject}</td>
              </tr>

            </table>

            <div style="margin-top:20px;padding:15px;background:#f9fafb;border-radius:8px">
              <p style="margin:0;color:#444;line-height:1.6">
                ${message}
              </p>
            </div>

          </div>

          <!-- FOOTER -->
          <div style="padding:15px;text-align:center;font-size:12px;color:#999;border-top:1px solid #eee">
            This message was sent from your website contact form.
          </div>

        </div>

      </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
}