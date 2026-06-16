export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-24"
        >
            <div className="mx-auto max-w-5xl px-6 text-center">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                    Welcome to my portfolio
                </p>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                    I build thoughtful digital experiences.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                    I&apos;m a product-focused developer crafting modern
                    websites, applications, and brand stories.
                </p>
            </div>
        </section>
    );
}
