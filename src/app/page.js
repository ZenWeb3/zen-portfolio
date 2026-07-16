import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import SelectedWork from "@/components/home/SelectedWork";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SelectedWork />
      <ExperienceTimeline />
      <Contact />
    </main>
  );
}
