import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "contacts.json");

interface Contact {
    id: number;
    name: string;
    email: string;
    message: string;
    created_at: string;
}

interface Database {
    contacts: Contact[];
}

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const adapter = new JSONFile<Database>(DB_FILE);
const db = new Low<Database>(adapter, { contacts: [] });

async function ensureDB() {
    await db.read();
    if (!db.data) db.data = { contacts: [] };
}

function createTransporter() {
    const host = process.env.SMTP_HOST?.trim();
    const port = process.env.SMTP_PORT
        ? parseInt(process.env.SMTP_PORT, 10)
        : 587;
    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASS?.trim();

    if (!host || !user || !pass) return null;

    return nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
        requireTLS: true,
    });
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body as {
            name?: string;
            email?: string;
            message?: string;
        };

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 },
            );
        }

        await ensureDB();
        const id = Date.now();
        const contacts = db.data?.contacts || [];
        contacts.push({
            id,
            name,
            email,
            message,
            created_at: new Date().toISOString(),
        });
        db.data = { contacts };
        await db.write();

        const transporter = createTransporter();
        const recipient =
            process.env.RECIPIENT_EMAIL?.trim() ||
            process.env.CONTACT_EMAIL?.trim() ||
            "sumaiya.cse.tec@gmail.com";
        const sender =
            process.env.MAIL_FROM?.trim() ||
            process.env.SMTP_USER?.trim() ||
            recipient;

        if (!transporter) {
            return NextResponse.json(
                {
                    error: "Email delivery is not configured on the server. Please set SMTP credentials to enable contact emails.",
                },
                { status: 503 },
            );
        }

        try {
            await transporter.sendMail({
                from: sender,
                replyTo: `${name} <${email}>`,
                to: recipient,
                subject: `New contact form submission from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
                html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
            });
        } catch (mailErr) {
            console.error("Failed to send contact email", mailErr);
            return NextResponse.json(
                {
                    error: "Your message was saved, but the email delivery failed. Please contact the owner directly.",
                },
                { status: 502 },
            );
        }

        return NextResponse.json({ ok: true, id });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}
