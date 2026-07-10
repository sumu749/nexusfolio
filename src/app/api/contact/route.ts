import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

interface ContactPayload {
    name?: string;
    email?: string;
    message?: string;
}

interface ValidationResult {
    valid: boolean;
    fieldErrors: Record<string, string>;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;

function validateContactPayload(body: ContactPayload): ValidationResult {
    const fieldErrors: Record<string, string> = {};

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name) {
        fieldErrors.name = "Name is required.";
    } else if (name.length > MAX_NAME_LENGTH) {
        fieldErrors.name = "Name is too long.";
    }

    if (!email) {
        fieldErrors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(email)) {
        fieldErrors.email = "Please provide a valid email address.";
    }

    if (!message) {
        fieldErrors.message = "Message is required.";
    } else if (message.length > MAX_MESSAGE_LENGTH) {
        fieldErrors.message = "Message is too long.";
    }

    return { valid: Object.keys(fieldErrors).length === 0, fieldErrors };
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function buildEmailHtml(params: {
    name: string;
    email: string;
    message: string;
    submittedAt: string;
}): string {
    const { name, email, message, submittedAt } = params;
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    return `
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto; background: #0B1020; padding: 32px; border-radius: 16px; color: #f8fafc;">
      <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: #9B5DE0;">New Contact Form Submission</p>
      <h2 style="margin: 0 0 24px; font-size: 22px; color: #ffffff;">Nexusfolio</h2>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; width: 100px;">Name</td>
          <td style="padding: 8px 0; color: #f8fafc; font-size: 14px;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Email</td>
          <td style="padding: 8px 0; color: #f8fafc; font-size: 14px;">
            <a href="mailto:${safeEmail}" style="color: #D78FEE; text-decoration: none;">${safeEmail}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Submitted</td>
          <td style="padding: 8px 0; color: #f8fafc; font-size: 14px;">${escapeHtml(submittedAt)}</td>
        </tr>
      </table>

      <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px;">
        <p style="margin: 0 0 8px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
        <p style="margin: 0; color: #e2e8f0; font-size: 15px; line-height: 1.6;">${safeMessage}</p>
      </div>

      <p style="margin-top: 24px; color: #64748b; font-size: 12px;">Reply directly to this email to respond to ${safeName}.</p>
    </div>
  `;
}

let resendClient: Resend | null = null;

function getResendClient(): Resend | null {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) return null;
    if (!resendClient) {
        resendClient = new Resend(apiKey);
    }
    return resendClient;
}

export async function POST(req: Request) {
    let body: ContactPayload;

    try {
        body = await req.json();
    } catch {
        return NextResponse.json(
            { error: "Invalid request body." },
            { status: 400 },
        );
    }

    const { valid, fieldErrors } = validateContactPayload(body);
    if (!valid) {
        return NextResponse.json(
            { error: "Please correct the highlighted fields.", fieldErrors },
            { status: 400 },
        );
    }

    const name = body.name!.trim();
    const email = body.email!.trim();
    const message = body.message!.trim();

    const resend = getResendClient();
    if (!resend) {
        console.error("RESEND_API_KEY is not configured on the server.");
        return NextResponse.json(
            {
                error: "Email delivery is not configured on the server. Please set RESEND_API_KEY to enable contact emails.",
            },
            { status: 503 },
        );
    }

    const recipient =
        process.env.CONTACT_RECIPIENT_EMAIL?.trim() ||
        "sumaiya.cse.tec@gmail.com";
    const sender =
        process.env.CONTACT_SENDER_EMAIL?.trim() ||
        "Nexusfolio Contact Form <onboarding@resend.dev>";
    const submittedAt = new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "long",
    });

    try {
        const response = await resend.emails.send({
            from: sender,
            to: recipient,
            subject: `New portfolio message from ${name}`,
            html: buildEmailHtml({ name, email, message, submittedAt }),
            text: `Name: ${name}\nEmail: ${email}\nSubmitted: ${submittedAt}\n\n${message}`,
        });

        if (response.error) {
            console.error(
                "Resend failed to send contact email",
                response.error,
            );
            return NextResponse.json(
                {
                    error:
                        response.error.message ||
                        "Failed to send your message. Please try again later.",
                },
                { status: response.error.statusCode ?? 502 },
            );
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Unexpected error sending contact email", err);
        return NextResponse.json(
            { error: "Something went wrong. Please try again later." },
            { status: 500 },
        );
    }
}
