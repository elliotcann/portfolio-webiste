import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
  name:    z.string().min(2).max(200),
  email:   z.string().email().max(200),
  subject: z.string().min(3).max(300),
  message: z.string().min(10).max(5000),
});

// Simple in-memory rate limiter: max 5 requests per IP per 10 minutes
const rateMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_REQUESTS) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { status: "error", message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // Parse + validate body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { status: "error", message: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { status: "error", message: "Please fill in all fields correctly." },
      { status: 422 }
    );
  }

  const { name, email, subject, message } = parsed.data;

  function escapeHtml(str: string): string {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;");
  }

  const safeName    = escapeHtml(name);
  const safeEmail   = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  // Send email via Nodemailer (same SMTP as the old PHP backend)
  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   Number(process.env.SMTP_PORT ?? 465),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from:    `"Elliot Cann" <${process.env.SMTP_FROM}>`,
      to:      process.env.SMTP_TO,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h3>New message from your website:</h3>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong><br>${safeMessage}</p>
      `,
    });

    return NextResponse.json({
      status: "success",
      message: "Your message has been sent successfully!",
    });
  } catch (err) {
    console.error("Nodemailer error:", err);
    return NextResponse.json(
      {
        status: "error",
        message: "Message could not be sent. Please try again later.",
      },
      { status: 500 }
    );
  }
}
