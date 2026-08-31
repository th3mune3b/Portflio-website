import nodemailer from "nodemailer"

export const runtime = "nodejs"

type ContactPayload = {
    name?: unknown
    email?: unknown
    subject?: unknown
    message?: unknown
}

const clean = (value: unknown) =>
    typeof value === "string" ? value.trim() : ""

const escapeHtml = (value: string) =>
    value.replace(
        /[&<>'"]/g,
        (character) =>
            ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;",
            })[character] ?? character,
    )

export async function POST(request: Request) {
    try {
        const payload = (await request.json()) as ContactPayload
        const name = clean(payload.name)
        const email = clean(payload.email)
        const subject = clean(payload.subject)
        const message = clean(payload.message)

        if (!name || !email || !subject || message.length < 20) {
            return Response.json(
                { error: "Please complete every field." },
                { status: 400 },
            )
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return Response.json(
                { error: "Please enter a valid email address." },
                { status: 400 },
            )
        }

        if (
            name.length > 100 ||
            email.length > 254 ||
            subject.length > 150 ||
            message.length > 5000
        ) {
            return Response.json(
                { error: "One or more fields are too long." },
                { status: 400 },
            )
        }

        const gmailUser = process.env.GMAIL_USER
        const gmailAppPassword = process.env.GMAIL_APP_PASSWORD
        const recipient = process.env.CONTACT_TO_EMAIL || gmailUser

        if (!gmailUser || !gmailAppPassword || !recipient) {
            console.error("Contact email environment variables are missing.")
            return Response.json(
                { error: "Email service is not configured yet." },
                { status: 500 },
            )
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: gmailUser,
                pass: gmailAppPassword,
            },
        })

        await transporter.sendMail({
            from: `Portfolio contact <${gmailUser}>`,
            to: recipient,
            replyTo: email,
            subject: `[Portfolio] ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            html: `
                <h2>New portfolio message</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
            `,
        })

        return Response.json({ message: "Message sent successfully." })
    } catch (error) {
        console.error("Failed to send contact email:", error)
        return Response.json(
            { error: "Unable to send your message. Please try again." },
            { status: 500 },
        )
    }
}
