"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SkillBadge from "./SkillBadge";

export function Skills() {
    return (
        <section id="skills" className="py-20 scroll-mt-24">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-2xl shadow-blue-950/20">
                <div className="absolute -right-24 top-8 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute -left-24 bottom-12 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative z-10 space-y-10">
                    <div className="max-w-3xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                            Skills
                        </p>
                        <h2 className="text-4xl font-semibold text-white sm:text-5xl">
                            Technologies I Work With
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                            A collection of technologies, frameworks, and tools
                            I use to design, develop, and deploy modern web
                            applications.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.08,
                                }}
                                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
                            >
                                <h3 className="mb-4 text-xl font-semibold text-white">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill) => (
                                        <SkillBadge key={skill} skill={skill} />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/75 p-8 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                            Always Learning 🚀
                        </p>
                        <p className="mt-3 text-lg leading-8 text-slate-300">
                            Continuously exploring new technologies, best
                            practices, and modern development workflows to build
                            better digital products.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
