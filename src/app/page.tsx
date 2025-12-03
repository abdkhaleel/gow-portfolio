"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import LeetCode from "@/components/LeetCode";

export default function Home() {
  // 1. Hook into scroll progress
  const { scrollYProgress } = useScroll();
  
  // 2. Smooth out the progress bar animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-[#0c0e12] relative selection:bg-gow-red selection:text-white">
      
      {/* --- GLOBAL UI ELEMENTS --- */}

      {/* 1. Spartan Rage Meter (Scroll Progress Bar) */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gow-bg z-[100]">
        <motion.div
          className="h-full bg-gradient-to-r from-gow-red via-red-500 to-orange-500 origin-left shadow-[0_0_10px_rgba(220,38,38,0.7)]"
          style={{ scaleX }}
        />
      </div>

      {/* 2. Global Atmosphere (Fixed Texture) */}
      {/* This makes the whole site feel like old parchment/leather instead of flat color */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-[0.04] pointer-events-none z-0 mix-blend-overlay" />
      
      {/* 3. Global Vignette (Darkens edges of the screen at all times) */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none z-0" />


      {/* --- CONTENT SECTIONS --- */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LeetCode />
        <Contact />
      </div>

    </main>
  );
}