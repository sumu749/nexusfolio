export default function Footer() {
    return (
        <footer className="border-t border-white/10">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <h3 className="text-2xl font-bold bg-linear-to-r from-[#4E56C0] via-[#9B5DE0] to-[#D78FEE] bg-clip-text text-transparent">
                        Nexusfolio
                    </h3>
                    <p className="text-slate-400">
                        © 2026 All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
