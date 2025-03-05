import NavBar from "@/components/NavBar";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      
      <header className="px-5">
        <NavBar />
      </header>
      <div className=" container mx-auto py-10 lg:py-15 px-10 lg:px-12 ">
        <HeroSection />
      </div>
    </main>
  );
}
