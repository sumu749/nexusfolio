"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<
        "idle" | "sending" | "success" | "error"
    >("idle");
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg(null);
        if (!name || !email || !message) {
            setErrorMsg("Please fill in all fields.");
            return;
        }

        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                setStatus("success");
                setName("");
                setEmail("");
                setMessage("");
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                const data = (await res.json().catch(() => ({
                    error: "Submission failed",
                }))) as { error?: string };
                setErrorMsg(data?.error || "Submission failed");
                setStatus("error");
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            setErrorMsg("Network error — please try again later.");
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-100 w-100 -translate-x-1/2 rounded-full bg-[#9B5DE0]/10 blur-[150px]" />
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="text-[#D78FEE]">CONTACT</span>
                    <h2 className="mt-4 text-5xl font-bold">
                        Let&apos;s Build Something Amazing
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-slate-400">
                        Have a project in mind or want to collaborate? I&apos;d
                        love to hear from you.
                    </p>
                </motion.div>

                <div className="mt-20 grid gap-10 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                    >
                        <h3 className="text-2xl font-bold">Get In Touch</h3>
                        <p className="mt-4 text-slate-400">
                            Feel free to reach out for freelance opportunities,
                            collaborations, or just a friendly chat.
                        </p>

                        <div className="mt-10 space-y-5">
                            <a
                                href="mailto:sumaiya.cse.tec@gmail.com"
                                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#9B5DE0]/50"
                            >
                                <FiMail size={22} />
                                <div>
                                    <p>Email</p>
                                    <span className="text-sm text-slate-400">
                                        sumaiya.cse.tec@gmail.com
                                    </span>
                                </div>
                            </a>

                            <a
                                href="https://github.com/sumu749"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#9B5DE0]/50"
                            >
                                <FiGithub size={22} />
                                <div>
                                    <p>Github</p>
                                    <span className="text-sm text-slate-400">
                                        https://github.com/sumu749
                                    </span>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/sumaiya-alam749/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#9B5DE0]/50"
                            >
                                <FiLinkedin size={22} />
                                <div>
                                    <p>LinkedIn</p>
                                    <span className="text-sm text-slate-400">
                                        https://www.linkedin.com/in/sumaiya-alam749/
                                    </span>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                    >
                        <div className="space-y-5">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name"
                                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none"
                                aria-label="Your name"
                            />
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none"
                                aria-label="Email address"
                            />
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={6}
                                placeholder="Write your message..."
                                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none"
                                aria-label="Message"
                            />

                            {errorMsg && (
                                <p className="text-sm text-red-400">
                                    {errorMsg}
                                </p>
                            )}
                            {status === "success" && (
                                <p className="text-sm text-emerald-400">
                                    Message sent — thank you!
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full rounded-full bg-linear-to-r from-[#4E56C0] to-[#9B5DE0] py-4 font-medium disabled:opacity-60"
                            >
                                {status === "sending"
                                    ? "Sending..."
                                    : "Send Message"}
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
