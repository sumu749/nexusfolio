"use client";

import Link from "next/link";
import { Menu, Download, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/nav-links";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeHref, setActiveHref] = useState("#home");

    useEffect(() => {
        const sections = navLinks
            .map((item) => document.querySelector(item.href))
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    setActiveHref(`#${visible[0].target.id}`);
                }
            },
            {
                rootMargin: "-40% 0px -55% 0px",
                threshold: [0.1, 0.4, 0.75],
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080a14]/90 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link
                    href="#home"
                    className="text-lg font-semibold tracking-tight text-white"
                >
                    Nexusfolio
                </Link>

                <nav className="hidden items-center gap-4 md:flex">
                    {navLinks.map((item) => {
                        const active = activeHref === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`rounded-full px-4 py-2 text-sm transition ${
                                    active
                                        ? "bg-white/10 text-white"
                                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                                }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="hidden items-center gap-2 md:flex">
                    <a
                        href="/resume.pdf"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Download className="h-4 w-4" />
                        Resume
                    </a>
                </div>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10 md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>
            </div>

            {open ? (
                <div className="border-t border-white/10 bg-[#080a14]/95 px-6 py-4 md:hidden">
                    <div className="space-y-3">
                        {navLinks.map((item) => {
                            const active = activeHref === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className={`block rounded-2xl px-4 py-3 text-sm transition ${
                                        active
                                            ? "bg-white/10 text-white"
                                            : "text-slate-300 hover:bg-white/10 hover:text-white"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            ) : null}
        </header>
    );
}
