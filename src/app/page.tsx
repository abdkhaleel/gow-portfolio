import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import LeetCode from "@/components/LeetCode";

export default function Home() {
  return (
    <main className="min-h-screen bg-gow-bg">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LeetCode />
      <Contact />
    </main>
  );
}