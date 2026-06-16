import Footer from "../sections/Footer/Footer";
import Contact from "../sections/Contact/Contact";
import Navbar from "../sections/Navbar/Navbar";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Journey from "../sections/Journey/Journey";
import Skills from "../sections/Skills/Skills";
import Education from "../sections/Education/Education";
import Experience from "../sections/Experience/Experience";
import Projects from "../sections/Projects/Projects";

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50">
            <Navbar />
            <main className="pt-28 flex min-h-screen flex-col">
                <Hero />
                <About />
                <Journey />
                <Skills />
                <Education />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
