"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { techIcons } from "@/lib/project-icons";
import type { Project } from "@/types/project";

interface Props {
    project: Project;
    featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: Props) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={
                "group overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl " +
                (featured ? "shadow-[0_40px_120px_rgba(109,40,217,0.12)]" : "")
            }
        >
            <div
                className={
                    featured
                        ? "relative h-105 overflow-hidden"
                        : "relative h-72 overflow-hidden"
                }
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={100}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-violet-200">
                            {project.category}
                        </p>
                        <h3
                            className={
                                featured
                                    ? "mt-3 text-3xl font-bold"
                                    : "mt-3 text-2xl font-bold"
                            }
                        >
                            {project.title}
                        </h3>
                        <p className="mt-4 text-slate-400">
                            {project.description}
                        </p>
                    </div>
                    {project.featured ? (
                        <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-violet-200">
                            Featured
                        </span>
                    ) : null}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                        <div
                            key={tech}
                            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                        >
                            <span className="text-lg">{techIcons[tech]}</span>
                            <span>{tech}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-slate-300">
                    <div className="rounded-2xl bg-slate-950/50 p-4">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">
                            Focus
                        </p>
                        <p className="mt-2 text-slate-200">
                            {project.challenges[0] ??
                                "Product clarity and user flow."}
                        </p>
                    </div>
                    <div className="rounded-2xl bg-slate-950/50 p-4">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">
                            Next up
                        </p>
                        <p className="mt-2 text-slate-200">
                            {project.futurePlans[0] ??
                                "Expand capabilities and retention."}
                        </p>
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-violet-500/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500/25"
                    >
                        Live demo
                        <ExternalLink size={16} />
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-violet-400/30 hover:text-violet-200"
                    >
                        GitHub
                        <ExternalLink size={16} />
                    </a>
                </div>

                <Link
                    href={`/projects/${project.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#D78FEE]"
                >
                    View Details
                    <ArrowUpRight size={18} />
                </Link>
            </div>
        </motion.div>
    );
}
