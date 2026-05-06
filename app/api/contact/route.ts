import { NextResponse } from "next/server";

/**
 * Lead capture endpoint.
 *
 * Right now this just validates and logs. For production, swap in:
 *  - Resend / Postmark / SendGrid for transactional email
 *  - Or a CRM webhook (HubSpot, Pipedrive, Zapier, GoHighLevel)
 *  - Or a database write (Supabase, Postgres, etc.)
 *
 * Don't forget to:
 *  - Add a honeypot or hCaptcha to fight spam
 *  - Rate-limit by IP (Upstash Ratelimit + Vercel KV is the easy path)
 *  - Send a notification (SMS via Twilio is high-leverage for booking confirmations)
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, zip, message } = body ?? {};

    // Minimal validation
    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email format quick-check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    // TODO: send email + write to CRM here.
    // For now we log to the server console so you can confirm submissions arrive.
    console.log("[lead]", {
      receivedAt: new Date().toISOString(),
      name,
      phone,
      email,
      service,
      zip,
      message,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead-error]", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
