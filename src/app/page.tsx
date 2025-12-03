"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import LeetCode from "@/components/LeetCode";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-[#0c0e12] relative selection:bg-gow-red selection:text-white overflow-x-hidden">
      
      {/* --- ENHANCED SPARTAN RAGE METER --- */}
      {/* Optimization: Removed complex internal Framer animations to reduce main-thread load */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-black/50 z-[100] shadow-lg">
        <motion.div
          className="h-full bg-gradient-to-r from-gow-red via-red-500 to-orange-500 origin-left relative overflow-hidden"
          style={{ scaleX }}
        >
          {/* CSS Animation for Shine (Lighter on CPU) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2 h-full skew-x-[-20deg] animate-shine" />
        </motion.div>
        
        {/* Static Glow (No animation needed) */}
        <motion.div
          className="absolute top-0 left-0 h-full w-full bg-gow-red blur-md opacity-40"
          style={{ scaleX }}
        />
      </div>

      {/* --- CONSOLIDATED ATMOSPHERE LAYERS (Performance Fix) --- */}
      
      {/* 
         1. Combined Texture & Vignette Layer 
         We combine multiple gradients into one CSS rule to reduce DOM nodes.
         Added 'transform-gpu' to force hardware acceleration.
      */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transform-gpu"
        style={{
          backgroundImage: `
            url('https://www.transparenttextures.com/patterns/dark-leather.png'),
            radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%),
            radial-gradient(ellipse at top, rgba(152,40,40,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, rgba(200,170,110,0.03) 0%, transparent 50%)
          `,
          backgroundBlendMode: 'overlay, normal, normal, normal',
          opacity: 0.8
        }}
      />

      {/* 2. Scanlines (Static, low opacity) */}
      <div 
        className="fixed inset-0 pointer-events-none z-[5] opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#ffffff_2px,#ffffff_4px)]"
      />

      {/* 3. Particles (Only render if client-side to prevent hydration mismatch) */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "110vh", x: `${10 + i * 20}%`, opacity: 0 }}
              animate={{ y: "-10vh", opacity: [0, 0.3, 0] }}
              transition={{
                duration: 20 + i * 5, // Slower duration = less CPU updates
                repeat: Infinity,
                delay: i * 3,
                ease: "linear"
              }}
              className="absolute w-1 h-1 bg-gow-gold/20 rounded-full blur-[1px]"
            />
          ))}
        </div>
      )}

      {/* --- CONTENT SECTIONS --- */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LeetCode />
        <Contact />
      </div>

      {/* Bottom Fade (Static) */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-[5]" />

    </main>
  );
}