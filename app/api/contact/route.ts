import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: any) {
  try {
    // 🔍 Debug logs
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log(
      "EMAIL_PASS:",
      process.env.EMAIL_PASS ? "EXISTS" : "MISSING"
    );

    const { name, email, subject, message } = await req.json();

    // ✅ Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ Create transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Send email
    await transporter.sendMail({
      from: `"${name} via Tanveer Stationery" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 ${name} (${email}) - ${subject}`,

      html: `
      <div style="background:#eef1f5;padding:40px 0;font-family:Arial,Helvetica,sans-serif">

        <div style="max-width:620px;margin:auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 15px 40px rgba(0,0,0,0.08)">

          <!-- HERO / LOGO -->
          <div style="background:#ffffff;padding:25px;text-align:center;border-bottom:1px solid #eee">
            <img 
              src="https://tanveer-stationary-gvc9.vercel.app/hero-logo.png" 
              alt="Tanveer Stationery" 
              style="max-height:100px;margin-bottom:10px;"
            />
            <h2 style="margin:5px 0 0 0;color:#b08d3c;font-size:25px;">
              Tanveer Stationery Trading Co. L.L.C
            </h2>
            <p style="margin:4px 0 0 0;font-size:16px;color:#888;">
              New Contact Form Submission
            </p>
          </div>

          <!-- BODY -->
          <div style="padding:30px">

            <h3 style="margin-bottom:20px;color:#b08d3c;">
              Contact Details
            </h3>

            <table width="100%" style="border-collapse:collapse;font-size:14px">

              <tr>
                <td style="padding:8px 0;font-weight:bold;color:#333;width:120px;">Name:</td>
                <td style="color:#555;">${name}</td>
              </tr>

              <tr>
                <td style="padding:8px 0;font-weight:bold;color:#333;">Email:</td>
                <td style="color:#555;">${email}</td>
              </tr>

              <tr>
                <td style="padding:8px 0;font-weight:bold;color:#333;">Subject:</td>
                <td style="color:#555;">${subject}</td>
              </tr>

            </table>

            <!-- MESSAGE BOX -->
            <div style="margin-top:25px;background:#f8f9fb;padding:18px;border-radius:10px;border-left:4px solid #b08d3c">
              <p style="margin:0;color:#444;line-height:1.7;font-size:14px;">
                ${message}
              </p>
            </div>

            <!-- CTA BUTTON -->
            <div style="margin-top:30px;text-align:center">
              <a href="mailto:${email}" 
                 style="display:inline-block;background:#b08d3c;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:500;">
                 Reply to ${name}
              </a>
            </div>

          </div>

          <!-- FOOTER -->
          <div style="background:#fafafa;padding:18px;text-align:center;font-size:12px;color:#999;border-top:1px solid #eee">
            <p style="margin:0;">
              This message was sent via your website contact form.
            </p>
            <p style="margin:5px 0 0 0;">
              © ${new Date().getFullYear()} Tanveer Stationery Trading Co. L.L.C
            </p>
          </div>

        </div>

      </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.log("EMAIL ERROR:", error);

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}