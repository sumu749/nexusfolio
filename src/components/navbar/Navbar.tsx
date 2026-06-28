"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav-links";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [activeHref, setActiveHref] = useState("#home");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = (href: string) => {
        setActiveHref(href);
        setMenuOpen(false);
    };

    useEffect(() => {
        const sections = navLinks
            .map((item) => document.querySelector(item.href))
            .filter(Boolean) as HTMLElement[];

        if (!sections.length) return;

        const updateActiveSection = () => {
            const targetPosition = window.scrollY + window.innerHeight * 0.35;

            let currentSection = sections[0];

            for (const section of sections) {
                if (section.offsetTop <= targetPosition) {
                    currentSection = section;
                } else {
                    break;
                }
            }

            setActiveHref(`#${currentSection.id}`);
        };

        updateActiveSection();

        window.addEventListener("scroll", updateActiveSection);
        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", updateActiveSection);

            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0, y: -25 }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            className="
        fixed
        top-5
        left-1/2
        z-50
        w-full
        -translate-x-1/2
        px-4
        sm:px-6
    "
        >
            <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4  md:px-6 ">
                {/* Logo */}
                <Link
                    href="#home"
                    className="text-2xl font-bold tracking-tight bg-linear-to-r from-[#A78BFA] via-[#C084FC] to-[#F9A8D4] bg-clip-text text-transparent"
                >
                    Sumaiya Alam
                </Link>

                {/* Navigation Dock */}

                <div className="flex items-center gap-2">
                    <div className="hidden md:flex relative flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5/20 px-3 py-3 backdrop-blur-2xl shadow-[0_0_40px_rgba(155,93,224,0.15)]">
                        {navLinks.map((item) => {
                            const active = activeHref === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => handleLinkClick(item.href)}
                                    className="relative px-5 py-2 text-sm font-medium transition-all"
                                >
                                    {active && (
                                        <motion.div
                                            layoutId="active-pill"
                                            transition={{
                                                type: "spring",
                                                stiffness: 350,
                                                damping: 30,
                                            }}
                                            className="absolute inset-0 rounded-full bg-[#0B1020]/95 shadow-[0_0_20px_rgba(78,86,192,0.25)] border border-[#4E56C0]/20"
                                        />
                                    )}

                                    <span
                                        className={`relative z-10 ${
                                            active
                                                ? "text-white"
                                                : "text-slate-300 hover:text-white"
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    <button
                        type="button"
                        onClick={() => setMenuOpen((value) => !value)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 md:hidden"
                        aria-label="Toggle navigation"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Hire Me Button */}

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#4E56C0]/20 bg-[#0B1020] px-4 py-2 text-sm font-medium text-white shadow-[0_0_25px_rgba(78,86,192,0.25)] transition-all hover:border-[#9B5DE0]/40 hover:bg-[#111827] sm:px-5 sm:py-3"
                >
                    <Download size={16} />
                    Hire Me
                </a>
            </div>

            {menuOpen && (
                <div className="absolute inset-x-4 top-full z-40 mt-3 rounded-4xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl md:hidden">
                    <div className="space-y-2">
                        {navLinks.map((item) => {
                            const active = activeHref === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => handleLinkClick(item.href)}
                                    className={`block rounded-3xl px-4 py-3 text-sm font-medium transition ${
                                        active
                                            ? "bg-white/10 text-white"
                                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </motion.header>
    );
}
