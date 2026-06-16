export default function Footer() {
    return (
        <footer className="border-t border-slate-200 py-10">
            <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} Nexusfolio. Built with Next.js.
            </div>
        </footer>
    );
}
