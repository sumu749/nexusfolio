import Navbar from "@/components/navbar/Navbar";
import { About } from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";
import Timeline from "@/components/timeline/Timeline";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
                <Hero />
                <About />
                <Skills />
                <Timeline />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
