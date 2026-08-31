"use client"

import React, { useState } from "react"
import { motion, type Variants } from "framer-motion"
import {
    ArrowUpRight,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
} from "lucide-react"

const contactEmail = "zmuneeb733@gmail.com"

const contactDetails = [
    {
        label: "Email",
        value: contactEmail,
        href: `mailto:${contactEmail}`,
        icon: Mail,
    },
    {
        label: "Phone / WhatsApp",
        value: "+92 326 6893868",
        href: "https://wa.me/923266893868",
        icon: Phone,
    },
    {
        label: "Location",
        value: "Lahore, Pakistan",
        href: null,
        icon: MapPin,
    },
]

const socialLinks = [
    {
        name: "GitHub",
        username: "@th3mune3b",
        href: "https://github.com/th3mune3b",
    },
    {
        name: "LinkedIn",
        username: "Muhammad Muneeb Zafar",
        href: "https://www.linkedin.com/in/muhammad-muneeb-zafar-79b6223b4",
    },
    {
        name: "Instagram",
        username: "@th3.mune3b",
        href: "https://instagram.com/th3.mune3b",
    },
]

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 45,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: "easeOut",
        },
    },
}

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
    const [feedback, setFeedback] = useState("")

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = event.currentTarget
        const formData = new FormData(form)
        const name = String(formData.get("name") || "")
        const email = String(formData.get("email") || "")
        const subject = String(formData.get("subject") || "Portfolio enquiry")
        const message = String(formData.get("message") || "")

        setStatus("sending")
        setFeedback("")

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, subject, message }),
            })
            const result = (await response.json()) as {
                message?: string
                error?: string
            }

            if (!response.ok) {
                throw new Error(result.error || "Unable to send your message.")
            }

            setStatus("success")
            setFeedback(result.message || "Message sent successfully.")
            form.reset()
        } catch (error) {
            setStatus("error")
            setFeedback(
                error instanceof Error
                    ? error.message
                    : "Unable to send your message. Please try again.",
            )
        }
    }

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#050506] px-5 py-6 sm:px-8 lg:px-14"
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.045]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(200,255,62,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,62,0.35) 1px, transparent 1px)",
                    backgroundSize: "58px 58px",
                }}
            />

            <div className="pointer-events-none absolute -right-32 top-12 h-80 w-80 rounded-full bg-[#C8FF3E]/[0.07] blur-[120px]" />
            <div className="pointer-events-none absolute -left-36 bottom-0 h-72 w-72 rounded-full bg-[#58D9FF]/[0.05] blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-3xl"
                >
                    <motion.p
                        variants={itemVariants}
                        className="text-xs font-medium tracking-[0.28em] text-[#C8FF3E] sm:text-sm"
                    >
                        CONTACT
                    </motion.p>

                    <motion.h2
                        variants={itemVariants}
                        className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        Have an idea? Let&apos;s build something useful.
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="mt-5 max-w-2xl text-sm font-normal leading-7 text-[#A1A1AA] sm:text-base"
                    >
                        Tell me about your project, collaboration or opportunity. Share
                        the essential details and I&apos;ll continue the conversation with
                        you directly.
                    </motion.p>
                </motion.div>

                <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.18 }}
                        className="flex flex-col gap-5"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="rounded-2xl border border-white/10 bg-[#0C1015] p-5 sm:p-6"
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C8FF3E]/20 bg-[#C8FF3E]/[0.07] text-[#C8FF3E]">
                                    <MessageCircle size={19} />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        Start a conversation
                                    </p>
                                    <p className="mt-0.5 text-xs text-[#A1A1AA]">
                                        Web development, AI and automation
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="overflow-hidden rounded-2xl border border-white/10 bg-[#0C1015]"
                        >
                            {contactDetails.map((detail, index) => {
                                const Icon = detail.icon
                                const content = (
                                    <>
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-[#C8FF3E]">
                                            <Icon size={18} />
                                        </span>

                                        <span className="min-w-0">
                                            <span className="block font-mono text-[10px] tracking-[0.18em] text-white/40">
                                                {detail.label.toUpperCase()}
                                            </span>
                                            <span className="mt-1 block break-words text-sm font-medium text-white sm:text-base">
                                                {detail.value}
                                            </span>
                                        </span>

                                        {detail.href && (
                                            <ArrowUpRight
                                                size={17}
                                                className="ml-auto shrink-0 text-white/35 transition-colors duration-200 group-hover:text-[#C8FF3E]"
                                            />
                                        )}
                                    </>
                                )

                                return detail.href ? (
                                    <a
                                        key={detail.label}
                                        href={detail.href}
                                        target={
                                            detail.href.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            detail.href.startsWith("http")
                                                ? "noreferrer"
                                                : undefined
                                        }
                                        className={`group flex items-center gap-4 p-5 transition-colors duration-200 hover:bg-white/[0.035] sm:p-6 ${index !== contactDetails.length - 1
                                            ? "border-b border-white/10"
                                            : ""
                                            }`}
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    <div
                                        key={detail.label}
                                        className={`flex items-center gap-4 p-5 sm:p-6 ${index !== contactDetails.length - 1
                                            ? "border-b border-white/10"
                                            : ""
                                            }`}
                                    >
                                        {content}
                                    </div>
                                )
                            })}
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
                        >
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group rounded-xl border border-[#C8FF3E]/55 bg-[#0C1015] p-4 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-sm font-semibold text-white">
                                            {social.name}
                                        </span>
                                        <ArrowUpRight
                                            size={15}
                                            className="text-white/35 transition-colors duration-200 group-hover:text-[#C8FF3E]"
                                        />
                                    </div>
                                    <p className="mt-2 truncate text-xs text-[#A1A1AA]">
                                        {social.username}
                                    </p>
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.form
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        onSubmit={handleSubmit}
                        className="rounded-2xl border border-white/10 bg-[#0C1015] p-5 sm:p-7 lg:p-8"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="flex items-start justify-between gap-5 border-b border-white/10 pb-6"
                        >
                            <div>
                                <p className="text-xl font-bold text-white">
                                    Send me a message
                                </p>
                                <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">
                                    Give me enough context to understand what you need.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2"
                        >
                            <label className="block">
                                <span className="mb-2 block font-mono text-[10px] tracking-[0.18em] text-white/45">
                                    YOUR NAME
                                </span>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    autoComplete="name"
                                    placeholder="Muhammad Ali"
                                    className="h-12 w-full rounded-xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-white/25 focus:border-[#C8FF3E]/70 focus:ring-2 focus:ring-[#C8FF3E]/10"
                                />
                            </label>

                            <label className="block">
                                <span className="mb-2 block font-mono text-[10px] tracking-[0.18em] text-white/45">
                                    EMAIL ADDRESS
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    className="h-12 w-full rounded-xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-white/25 focus:border-[#C8FF3E]/70 focus:ring-2 focus:ring-[#C8FF3E]/10"
                                />
                            </label>
                        </motion.div>

                        <motion.label
                            variants={itemVariants}
                            className="mt-5 block"
                        >
                            <span className="mb-2 block font-mono text-[10px] tracking-[0.18em] text-white/45">
                                SUBJECT
                            </span>
                            <input
                                type="text"
                                name="subject"
                                required
                                placeholder="Project collaboration"
                                className="h-12 w-full rounded-xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-white/25 focus:border-[#C8FF3E]/70 focus:ring-2 focus:ring-[#C8FF3E]/10"
                            />
                        </motion.label>

                        <motion.label
                            variants={itemVariants}
                            className="mt-5 block"
                        >
                            <span className="mb-2 block font-mono text-[10px] tracking-[0.18em] text-white/45">
                                MESSAGE
                            </span>
                            <textarea
                                name="message"
                                required
                                minLength={20}
                                rows={7}
                                placeholder="Tell me about your idea, requirements and timeline..."
                                className="w-full resize-none rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm leading-6 text-white outline-none transition-all duration-200 placeholder:text-white/25 focus:border-[#C8FF3E]/70 focus:ring-2 focus:ring-[#C8FF3E]/10"
                            />
                        </motion.label>

                        <motion.div
                            variants={itemVariants}
                            className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                        >
                            <p
                                aria-live="polite"
                                className={`max-w-xs text-xs leading-5 ${status === "success"
                                    ? "text-[#C8FF3E]"
                                    : status === "error"
                                        ? "text-red-400"
                                        : "text-white/35"
                                    }`}
                            >
                                {feedback || "Your message will be sent directly to my inbox."}
                            </p>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#C8FF3E] px-6 text-sm font-semibold text-[#050506] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D5FF6B] hover:shadow-[0_12px_35px_rgba(200,255,62,0.18)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                            >
                                {status === "sending" ? "Sending..." : "Send message"}
                                <Send size={16} />
                            </button>
                        </motion.div>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
