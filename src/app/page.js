import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b040c] text-white">
      <header className="bg-transparent">
        <div className="container mx-auto px-5">
          <NavBar />
        </div>
      </header>

      <section className="container mx-auto py-16 px-6 lg:px-12">
        <HeroSection />
        <Services />
      </section>

      <section className="bg-[#2c0f4d19] py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <Project />
        </div>
        <div className="container mx-auto py-10 px-6 lg:px-12">
          <Skills />
        </div>
      </section>
      <div className="container mx-auto py-10 px-6 lg:px-12">
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
