export default function Navbar() {
    return (
        <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200/70 py-4">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
                <div className="text-lg font-semibold">Nexusfolio</div>
                <nav className="flex items-center gap-4 text-sm font-medium text-slate-700">
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}
