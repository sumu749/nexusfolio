import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:px-8 lg:px-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold">Resume</h1>
                        <p className="mt-1 text-sm text-slate-400">
                            View my resume in the browser tab.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href="https://drive.google.com/file/d/1YY47wfGJC_LKuK_9wpXfYjQzjwoBfWCJ/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                        >
                            <Download size={16} />
                            Open PDF
                        </a>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500/20"
                        >
                            <ArrowLeft size={16} />
                            Back Home
                        </Link>
                    </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
                    <iframe
                        src="https://drive.google.com/file/d/1YY47wfGJC_LKuK_9wpXfYjQzjwoBfWCJ/view?usp=drive_link"
                        title="Resume PDF"
                        className="h-[80vh] w-full"
                    />
                </div>
            </div>
        </main>
    );
}
