import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white noise grid-pattern">
      <NavBar />
      <HeroSection />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}