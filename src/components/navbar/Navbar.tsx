"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { navLinks } from "@/data/nav-links";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [activeHref, setActiveHref] = useState("#home");

    useEffect(() => {
        const sections = navLinks
            .map((item) => document.querySelector(item.href))
            .filter(Boolean) as HTMLElement[];

        if (!sections.length) {
            return;
        }

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

        let rafId = 0;
        const handleScroll = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                updateActiveSection();
                rafId = 0;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-full max-w-6xl px-4"
        >
            <div className="flex flex-wrap items-center justify-between gap-4 ">
                {/* Logo */}
                <Link
                    href="#home"
                    className="text-2xl font-bold tracking-tight bg-linear-to-r from-[#A78BFA] via-[#C084FC] to-[#F9A8D4] bg-clip-text text-transparent"
                >
                    Nexusfolio
                </Link>

                {/* Navigation Dock */}

                <nav className="relative flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5/20 px-3 py-3 backdrop-blur-2xl shadow-[0_0_40px_rgba(155,93,224,0.15)]">
                    {navLinks.map((item) => {
                        const active = activeHref === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setActiveHref(item.href)}
                                className="
                  relative
                  px-5
                  py-2
                  text-sm
                  font-medium
                  transition-all
                "
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
                </nav>

                {/* Hire Me Button */}

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#4E56C0]/20 bg-[#0B1020] px-6 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(78,86,192,0.25)] transition-all hover:border-[#9B5DE0]/40 hover:bg-[#111827]"
                >
                    <Download size={16} />
                    Hire Me
                </a>
            </div>
        </motion.header>
    );
}
