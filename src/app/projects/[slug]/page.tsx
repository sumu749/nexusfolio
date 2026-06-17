import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

type PageProps = {
    params: {
        slug: string;
    };
};

export function generateMetadata({ params }: PageProps): Metadata {
    const project = projects.find((entry) => entry.slug === params.slug);

    return {
        title: project?.title ?? "Project not found",
        description:
            project?.description ?? "Project details for this project.",
    };
}

export default function ProjectPage({ params }: PageProps) {
    const project = projects.find((entry) => entry.slug === params.slug);

    if (!project) {
        return notFound();
    }

    return (
        <section className="mx-auto max-w-5xl space-y-8 py-12">
            <Link href="/" className="text-sm text-white/70 hover:text-white">
                ← Back to home
            </Link>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/5">
                <div className="space-y-4">
                    <h1 className="text-4xl font-semibold">{project.title}</h1>
                    <p className="text-slate-300">{project.description}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4 rounded-3xl border border-white/10 bg-black/20 p-6">
                        <h2 className="text-xl font-semibold">Tech stack</h2>
                        <ul className="space-y-2 text-slate-200">
                            {project.techStack.map((tech) => (
                                <li key={tech}>• {tech}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4 rounded-3xl border border-white/10 bg-black/20 p-6">
                        <h2 className="text-xl font-semibold">Links</h2>
                        <div className="space-y-2 text-slate-200">
                            <p>
                                GitHub:{" "}
                                <a
                                    className="text-white underline"
                                    href={project.github}
                                >
                                    {project.github}
                                </a>
                            </p>
                            <p>
                                Live:{" "}
                                <a
                                    className="text-white underline"
                                    href={project.live}
                                >
                                    {project.live}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                        <h2 className="text-xl font-semibold">Challenges</h2>
                        <ul className="list-disc space-y-2 pl-5 text-slate-200">
                            {project.challenges.map((challenge) => (
                                <li key={challenge}>{challenge}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                        <h2 className="text-xl font-semibold">Future plans</h2>
                        <ul className="list-disc space-y-2 pl-5 text-slate-200">
                            {project.futurePlans.map((plan) => (
                                <li key={plan}>{plan}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
