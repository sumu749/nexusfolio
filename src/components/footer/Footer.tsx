import Link from "next/link";

import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const lastUpdated = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
    });

    return (
        <footer className="relative mt-20 overflow-hidden border-t border-white/10">
            {/* Background Glow */}

            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#9B5DE0]/10 blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="lg:flex lg:items-start lg:justify-between">
                    <div>
                        <Link
                            href="#home"
                            className="text-2xl font-bold tracking-tight bg-linear-to-r from-[#A78BFA] via-[#C084FC] to-[#F9A8D4] bg-clip-text text-transparent"
                        >
                            Sumaiya Alam
                        </Link>
                        <p className="mt-3 text-sm text-slate-400">
                            MERN Stack Developer · Open to opportunities
                        </p>

                        <div className="mt-6 flex gap-4">
                            <Link
                                href="https://github.com/sumu749"
                                target="_blank"
                                aria-label="GitHub"
                                rel="noopener noreferrer"
                                className="rounded-xl border border-white/10 bg-white/5 p-3 transition-transform hover:border-[#9B5DE0]/50 hover:-translate-y-1 focus-visible:outline-none"
                            >
                                <FaGithub size={18} />
                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/sumaiya-alam749/"
                                target="_blank"
                                aria-label="LinkedIn"
                                rel="noopener noreferrer"
                                className="rounded-xl border border-white/10 bg-white/5 p-3 transition-transform hover:border-[#9B5DE0]/50 hover:-translate-y-1 focus-visible:outline-none"
                            >
                                <FaLinkedin size={18} />
                            </Link>

                            <Link
                                href="mailto:sumaiya.cse.tec@gmail.com"
                                aria-label="Email"
                                className="rounded-xl border border-white/10 bg-white/5 p-3 transition-transform hover:border-[#9B5DE0]/50 hover:-translate-y-1 focus-visible:outline-none"
                            >
                                <Mail size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-10 lg:mt-0 lg:text-right">
                        <h3 className="text-xl font-semibold">Quick Links</h3>

                        <div className="mt-5 flex flex-wrap gap-4 lg:justify-end">
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                        </div>

                        <div className="mt-8">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex rounded-full bg-linear-to-r from-[#4E56C0] to-[#9B5DE0] px-5 py-3 text-sm font-medium"
                            >
                                View Resume
                            </a>
                        </div>
                    </div>
                </div>

                <div className="my-8 h-px bg-white/10" />

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm text-slate-400">
                            © 2026 Sumaiya Alam. All Rights Reserved.
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                            Last Updated: {lastUpdated}
                        </p>
                    </div>

                    <a
                        href="#home"
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition-all hover:border-[#9B5DE0]/50"
                    >
                        Back to Top
                        <ArrowUp size={16} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
