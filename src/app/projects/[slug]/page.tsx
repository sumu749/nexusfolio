import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Globe, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetails({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((project) => project.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6">
                {/* Back */}
                <Link
                    href="/"
                    className="mb-8 inline-flex items-center gap-2 text-slate-400"
                >
                    <ArrowLeft size={18} />
                    Back to Home
                </Link>

                {/* Hero */}
                <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            quality={100}
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="mt-12">
                    <span className="text-[#D78FEE]">CASE STUDY</span>
                    <h1 className="mt-4 text-5xl font-bold">{project.title}</h1>
                    <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
                        {project.overview}
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                        href={project.live}
                        target="_blank"
                        className="flex items-center gap-2 rounded-full bg-linear-to-r from-[#4E56C0] to-[#9B5DE0] px-6 py-3"
                    >
                        <Globe size={18} />
                        Live Site
                    </Link>
                    <Link
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3"
                    >
                        <ExternalLink size={18} />
                        Github
                    </Link>
                </div>

                {/* Tech Stack */}
                <section className="mt-20">
                    <h2 className="mb-8 text-3xl font-bold">
                        Technology Stack
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {project.techStack.map((tech) => (
                            <div
                                key={tech}
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features */}
                <section className="mt-20">
                    <h2 className="mb-8 text-3xl font-bold">Key Features</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {project.features?.map((feature) => (
                            <div
                                key={feature}
                                className="rounded-3xl border border-white/10 bg-white/5 p-5"
                            >
                                ✓ {feature}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Challenges */}
                <section className="mt-20">
                    <h2 className="mb-8 text-3xl font-bold">
                        Challenges Faced
                    </h2>
                    <div className="space-y-4">
                        {project.challenges.map((challenge) => (
                            <div
                                key={challenge}
                                className="rounded-3xl border border-white/10 bg-white/5 p-5"
                            >
                                {challenge}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Future Plans */}
                <section className="mt-20">
                    <h2 className="mb-8 text-3xl font-bold">
                        Future Improvements
                    </h2>
                    <div className="space-y-4">
                        {project.futurePlans.map((plan) => (
                            <div
                                key={plan}
                                className="rounded-3xl border border-white/10 bg-white/5 p-5"
                            >
                                🚀 {plan}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
