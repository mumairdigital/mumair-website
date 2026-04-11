import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate with Zod
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, businessType, city, serviceInterest, message } = result.data;

    // Build WhatsApp message
    const waText = `Hi Muhammad! I found you through your website.

Name: ${name}
Email: ${email}
Phone: ${phone ?? "Not provided"}
Business Type: ${businessType}
City: ${city ?? "Not provided"}
Service Interest: ${serviceInterest}

Message: ${message}

I'd love to discuss how you can help my business!`;

    const whatsappUrl = `https://wa.me/${process.env.WHATSAPP_NUMBER ?? "923209943057"}?text=${encodeURIComponent(waText)}`;

    // Save lead to JSON file
    try {
      const leadsPath = path.join(process.cwd(), "leads.json");
      let leads: unknown[] = [];
      if (fs.existsSync(leadsPath)) {
        const raw = fs.readFileSync(leadsPath, "utf-8");
        leads = JSON.parse(raw);
      }
      leads.push({
        id: Date.now(),
        timestamp: new Date().toISOString(),
        name,
        email,
        phone: phone ?? null,
        businessType,
        city: city ?? null,
        serviceInterest,
        message,
      });
      fs.writeFileSync(leadsPath, JSON.stringify(leads, null, 2));
    } catch {
      // Non-fatal — lead still processed even if file write fails
      console.error("Failed to write lead to file");
    }

    // Send email via Nodemailer (if SMTP env vars are set)
    if (
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
    ) {
      try {
        const nodemailer = await import("nodemailer");
        const transporter = nodemailer.default.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT ?? 587),
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"${name}" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
          to: process.env.CONTACT_TO_EMAIL ?? "info@mumairdigital.com",
          replyTo: email,
          subject: `🔥 New Lead: ${serviceInterest} — ${name} (${businessType})`,
          html: `
<!DOCTYPE html>
<html>
<head><style>body{font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#333;} .header{background:linear-gradient(135deg,#7C3AED,#9333EA);padding:24px;border-radius:12px;margin-bottom:20px;} .header h1{color:white;margin:0;font-size:20px;} .field{margin-bottom:16px;} .label{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#666;font-weight:bold;} .value{font-size:15px;color:#111;margin-top:4px;} .badge{display:inline-block;background:#7C3AED;color:white;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:bold;margin-top:8px;} .message{background:#f9f7ff;border-left:4px solid #7C3AED;padding:16px;border-radius:4px;} .footer{margin-top:24px;padding-top:16px;border-top:1px solid #eee;font-size:12px;color:#999;}</style></head>
<body>
  <div class="header">
    <h1>🔥 New Lead from mumairdigital.com</h1>
    <div style="color:rgba(255,255,255,0.8);font-size:14px;margin-top:4px;">${serviceInterest} inquiry</div>
  </div>
  <div class="field"><div class="label">Full Name</div><div class="value">${name}</div></div>
  <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${email}">${email}</a></div></div>
  <div class="field"><div class="label">Phone</div><div class="value">${phone ?? "Not provided"}</div></div>
  <div class="field"><div class="label">Business Type</div><div class="value"><span class="badge">${businessType}</span></div></div>
  <div class="field"><div class="label">City / Location</div><div class="value">${city ?? "Not provided"}</div></div>
  <div class="field"><div class="label">Service Interest</div><div class="value"><span class="badge">${serviceInterest}</span></div></div>
  <div class="field"><div class="label">Message</div><div class="message">${message.replace(/\n/g, "<br>")}</div></div>
  <div style="margin-top:20px;">
    <a href="${whatsappUrl}" style="background:#25D366;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:14px;">Reply on WhatsApp</a>
  </div>
  <div class="footer">Received on ${new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" })} PKT</div>
</body>
</html>`,
        });
      } catch (emailError) {
        console.error("Email send failed:", emailError);
        // Non-fatal — return success anyway, lead is saved
      }
    }

    return NextResponse.json({ success: true, whatsappUrl });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
