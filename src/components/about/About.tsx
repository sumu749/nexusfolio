"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Briefcase, Coffee } from "lucide-react";

const stats = [
    {
        number: "15+",
        label: "Projects Completed",
    },
    {
        number: "20+",
        label: "Technologies",
    },
    {
        number: "1000+",
        label: "Coding Hours",
    },
    {
        number: "100%",
        label: "Passion",
    },
];

export function About() {
    return (
        <section id="about" className="py-20 scroll-mt-24">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-2xl shadow-blue-950/20">
                <div className="absolute -right-28 top-8 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute -left-20 bottom-12 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="relative z-10 space-y-10">
                    <div className="max-w-3xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                            About Me
                        </p>
                        <h2 className="text-4xl font-semibold text-white sm:text-5xl">
                            Crafting Digital Experiences
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                            Passionate about building beautiful, performant, and
                            scalable web applications that solve real-world
                            problems.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7 }}
                            className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8"
                        >
                            <div className="mb-6 flex items-center gap-3 text-cyan-300">
                                <Rocket size={24} />
                                <h3 className="text-2xl font-semibold text-white">
                                    My Journey
                                </h3>
                            </div>

                            <div className="space-y-5 text-slate-300">
                                <p>
                                    I started programming when I was in high
                                    school, fascinated by how websites could
                                    bring ideas to life. That early curiosity
                                    led me to build small apps and learn the
                                    fundamentals of HTML, CSS, and JavaScript.
                                </p>
                                <p>
                                    Web development became my focus because I
                                    love creating interactive experiences that
                                    are both useful and enjoyable. The web gives
                                    me a fast feedback loop where design, logic,
                                    and user interaction come together.
                                </p>
                                <p>
                                    My MERN journey began with React and grew
                                    into building full-stack applications with
                                    Node.js, Express, MongoDB, and TypeScript. I
                                    enjoy turning concepts into polished
                                    products with clean architecture and
                                    responsive interfaces.
                                </p>
                                <p>
                                    My goal is to keep improving as a developer,
                                    build accessible solutions, and contribute
                                    to projects that make a positive impact.
                                    Outside of coding, I recharge with gaming,
                                    reading tech blogs, and enjoying coffee
                                    while exploring new ideas.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid gap-5">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="grid gap-4 rounded-[2rem] border border-white/10 bg-slate-900/80 p-6"
                            >
                                <div className="flex items-start gap-4 rounded-3xl border border-white/5 bg-slate-950/80 p-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-300">
                                        <Code2 size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white">
                                            Development
                                        </h4>
                                        <p className="mt-1 text-sm text-slate-400">
                                            Building modern web applications
                                            using React, Next.js and TypeScript.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-3xl border border-white/5 bg-slate-950/80 p-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                                        <Rocket size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white">
                                            Innovation
                                        </h4>
                                        <p className="mt-1 text-sm text-slate-400">
                                            Exploring new technologies and
                                            pushing creative boundaries.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-3xl border border-white/5 bg-slate-950/80 p-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300">
                                        <Briefcase size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white">
                                            Projects
                                        </h4>
                                        <p className="mt-1 text-sm text-slate-400">
                                            Creating impactful solutions that
                                            solve real-world problems.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-3xl border border-white/5 bg-slate-950/80 p-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-amber-500/10 text-amber-300">
                                        <Coffee size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white">
                                            Learning
                                        </h4>
                                        <p className="mt-1 text-sm text-slate-400">
                                            Constantly improving and adapting to
                                            the evolving tech landscape.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-center"
                            >
                                <p className="text-4xl font-semibold text-white">
                                    {stat.number}
                                </p>
                                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
