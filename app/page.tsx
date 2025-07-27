import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Work from "@/components/main/Work";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex  flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
        <Work />
        <Encryption />
      </div>
    </main>
  );
}
