import Link from "next/link";
import { projects } from "@/data/projects";

export function ProjectsSection() {
    return (
        <section id="projects" className="py-16 scroll-mt-24">
            <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-10">
                    <h2 className="text-3xl font-semibold">Projects</h2>
                    <p className="mt-4 text-slate-300">
                        Portfolio projects with links to details and live demos.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                        >
                            <h3 className="text-2xl font-semibold">
                                {project.title}
                            </h3>
                            <p className="mt-3 text-slate-300">
                                {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-400">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-white/5 px-3 py-1"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
