"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowUpRight, Code2, Globe, Sparkles } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { techIcons } from "@/lib/project-icons";

import { projects } from "@/data/projects";

export default function Projects() {
    const featuredProject = projects[0];
    const otherProjects = projects.slice(1);

    return (
        <section
            id="projects"
            className="relative pt-20 scroll-mt-32 overflow-hidden"
        >
            {/* Background Glow */}

            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#9B5DE0]/10 blur-[150px] sm:h-72 sm:w-72 md:h-96 md:w-96" />

                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#4E56C0]/10 blur-[120px] sm:h-56 sm:w-56 md:h-72 md:w-72" />
            </div>

            <div className="container mx-auto px-6">
                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
                        <Sparkles size={16} />
                        <span className="text-sm">Featured Work</span>
                    </div>

                    <h2 className="mt-6 text-5xl font-bold">
                        Selected Projects
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-slate-400">
                        A collection of real-world applications crafted with
                        modern technologies, beautiful user experiences and
                        scalable architecture.
                    </p>
                </motion.div>

                {/* Featured Project */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="group relative"
                >
                    <div className="relative rounded-[40px] p-px">
                        <div className="absolute inset-0 rounded-[40px] bg-linear-to-r from-[#4E56C0] via-[#9B5DE0] to-[#D78FEE] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="relative rounded-[40px] bg-[#0B1020]">
                            <div className="grid lg:grid-cols-2">
                                {/* IMAGE - Browser Mockup with Tilt */}

                                <div className="relative aspect-4/3 w-full p-6">
                                    <Tilt
                                        glareEnable
                                        glareMaxOpacity={0.2}
                                        scale={1.02}
                                    >
                                        <div className="relative h-full w-full bg-[#0d1117] rounded-lg overflow-hidden">
                                            {/* Browser Bar */}
                                            <div className="flex h-12 items-center gap-2 border-b border-white/10 px-4">
                                                <div className="h-3 w-3 rounded-full bg-red-500" />
                                                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                                <div className="h-3 w-3 rounded-full bg-green-500" />
                                                <div className="ml-4 rounded-full bg-white/5 px-4 py-1 text-xs text-slate-400">
                                                    nexusfolio.dev
                                                </div>
                                            </div>

                                            <div className="relative aspect-video w-full">
                                                <Image
                                                    src={featuredProject.image}
                                                    alt={featuredProject.title}
                                                    fill
                                                    quality={100}
                                                    priority
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </Tilt>

                                    {/* Overlay Button */}
                                    <div className="absolute bottom-6 left-10">
                                        <Link
                                            href={`/projects/${featuredProject.slug}`}
                                            className="rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl"
                                        >
                                            View Case Study →
                                        </Link>
                                    </div>
                                </div>

                                {/* CONTENT */}

                                <div className="flex flex-col justify-center p-8 lg:p-12">
                                    <span className="mb-3 text-sm text-[#D78FEE]">
                                        FEATURED PROJECT
                                    </span>

                                    <h3 className="text-4xl font-bold">
                                        {featuredProject.title}
                                    </h3>

                                    <p className="mt-6 leading-8 text-slate-400">
                                        {featuredProject.description}
                                    </p>

                                    {/* Tech Stack (with icons) */}

                                    <div className="mt-8 flex flex-wrap gap-3">
                                        {featuredProject.techStack.map(
                                            (tech) => (
                                                <div
                                                    key={tech}
                                                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl"
                                                >
                                                    <span className="text-lg text-slate-200">
                                                        {techIcons[tech]}
                                                    </span>
                                                    <span className="text-slate-200">
                                                        {tech}
                                                    </span>
                                                </div>
                                            ),
                                        )}
                                    </div>

                                    {/* Highlights */}

                                    <div className="mt-8 grid grid-cols-2 gap-4">
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            🔐 Authentication
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            📊 Dashboard
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            ⚡ API Integration
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            📱 Responsive
                                        </div>
                                    </div>

                                    {/* Featured Project Metrics */}

                                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            🔐 JWT Auth
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            👨‍🏫 Tutor System
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            💳 Stripe
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            📊 Dashboard
                                        </div>
                                    </div>

                                    {/* Buttons */}

                                    <div className="mt-8 flex flex-wrap gap-4">
                                        <Link
                                            href={featuredProject.live}
                                            target="_blank"
                                            className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-linear-to-r
                    from-[#4E56C0]
                    to-[#9B5DE0]
                    px-6
                    py-3
                  "
                                        >
                                            <Globe size={18} />
                                            Live Demo
                                        </Link>

                                        <Link
                                            href={featuredProject.github}
                                            target="_blank"
                                            className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-6
                    py-3
                  "
                                        >
                                            <Code2 size={18} />
                                            Source Code
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Other Projects */}

                <div className="mt-12 grid gap-8">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -80 : 80,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: index * 0.1,
                            }}
                            className="
                group
                overflow-hidden
                rounded-4xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-[#9B5DE0]/50
              "
                        >
                            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
                                {/* IMAGE */}

                                <div className="relative aspect-video md:aspect-4/3 w-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        quality={100}
                                        className="
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-105
                    "
                                    />
                                </div>

                                {/* CONTENT */}

                                <div className="flex flex-col justify-center p-8">
                                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold">
                                                {project.title}
                                            </h3>

                                            <p className="mt-2 text-slate-400">
                                                {project.description}
                                            </p>
                                        </div>

                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="
                        inline-flex
                        items-center
                        gap-2
                        text-[#D78FEE]
                      "
                                        >
                                            Details
                                            <ArrowUpRight size={18} />
                                        </Link>
                                    </div>

                                    {/* STACK */}

                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}

                <div className="mt-16 rounded-[40px] border border-white/10 bg-linear-to-r from-[#4E56C0]/10 via-[#9B5DE0]/10 to-[#D78FEE]/10 p-8 sm:p-10 text-center backdrop-blur-xl">
                    <h3 className="text-3xl font-bold">
                        Interested in working together?
                    </h3>

                    <p className="mt-4 text-slate-400">
                        I&apos;m always open to discussing new projects,
                        creative ideas and exciting opportunities.
                    </p>

                    <a
                        href="#contact"
                        className="mt-6 inline-flex rounded-full bg-linear-to-r from-[#4E56C0] to-[#9B5DE0] px-6 py-3 font-medium"
                    >
                        Let&apos;s Talk
                    </a>
                </div>
            </div>
        </section>
    );
}
