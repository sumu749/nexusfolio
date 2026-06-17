"use client";

import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";
import { timelineData } from "@/data/timeline";

export default function Timeline() {
    return (
        <section id="education" className="py-20 scroll-mt-24">
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-950/80 p-10 shadow-2xl shadow-blue-950/20">
                <div className="absolute -right-24 top-12 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute -left-24 bottom-12 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative z-10 space-y-10">
                    <div className="max-w-3xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                            Journey
                        </p>
                        <h2 className="text-4xl font-semibold text-white sm:text-5xl">
                            Education & Experience
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                            My learning journey and professional growth through
                            education, projects, and real-world development
                            experience.
                        </p>
                    </div>

                    <div className="relative mt-12">
                        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
                        <div className="space-y-10">
                            {timelineData.map((item, index) => (
                                <TimelineCard
                                    key={`${item.year}-${item.title}`}
                                    item={item}
                                    index={index}
                                    side={index % 2 === 0 ? "left" : "right"}
                                />
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="rounded-[1.75rem] border border-white/10 bg-slate-900/75 p-8 text-center"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                            Building Every Day 🚀
                        </p>
                        <p className="mt-3 text-lg leading-8 text-slate-300">
                            Learning never stops. Every project, challenge, and
                            experience helps me grow as a developer and problem
                            solver.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
