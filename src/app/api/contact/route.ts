import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import nodemailer from "nodemailer";

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
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT
        ? parseInt(process.env.SMTP_PORT, 10)
        : undefined;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !port || !user || !pass) return null;

    return nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
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
        if (transporter) {
            const recipient =
                process.env.RECIPIENT_EMAIL || process.env.SMTP_USER;
            try {
                await transporter.sendMail({
                    from: `${name} <${email}>`,
                    to: recipient,
                    subject: `New contact form submission from ${name}`,
                    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
                    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
                });
            } catch (mailErr) {
                console.error("Failed to send contact email", mailErr);
            }
        }

        return NextResponse.json({ ok: true, id });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}
