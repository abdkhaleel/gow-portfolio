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

  // Ensure client-side only rendering for animations
  useEffect(() => {
    setMounted(true);
  }, []);

  // 1. Hook into scroll progress
  const { scrollYProgress } = useScroll();
  
  // 2. Smooth out the progress bar animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-[#0c0e12] relative selection:bg-gow-red selection:text-white overflow-x-hidden">
      
      {/* --- ENHANCED GLOBAL UI ELEMENTS --- */}
      
      {/* 1. Enhanced Spartan Rage Meter (Scroll Progress Bar) */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-black/50 z-[100] shadow-lg">
        {mounted && (
          <>
            {/* Main progress bar */}
            <motion.div
              className="h-full bg-gradient-to-r from-gow-red via-red-500 to-orange-500 origin-left relative"
              style={{ scaleX }}
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gow-red via-red-400 to-orange-400 blur-sm" />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Outer glow under the bar */}
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-gow-red via-red-500 to-orange-500 origin-left blur-md opacity-60"
              style={{ scaleX, width: "100%" }}
            />
          </>
        )}
      </div>

      {/* 2. Enhanced Global Atmosphere Layers */}
      
      {/* Leather texture overlay */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-[0.06] pointer-events-none z-0 mix-blend-overlay" />
      
      {/* Subtle noise/grain for cinematic feel */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"
           style={{
             backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')"
           }} 
      />

      {/* 3. Enhanced Multi-layered Vignettes */}
      
      {/* Primary dark vignette */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none z-0" />
      
      {/* Subtle red tint at edges */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(152,40,40,0.03)_0%,transparent_50%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,170,110,0.02)_0%,transparent_50%)] pointer-events-none z-0" />

      {/* 4. Floating Atmospheric Particles (Optional - subtle) */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                y: "100vh", 
                x: `${20 + i * 20}%`,
                opacity: 0 
              }}
              animate={{ 
                y: "-20vh",
                opacity: [0, 0.15, 0.1, 0],
                scale: [0.5, 1, 0.8]
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear"
              }}
              className="absolute w-1 h-1 bg-gow-gold/30 rounded-full blur-[1px]"
            />
          ))}
        </div>
      )}

      {/* 5. Subtle Scanlines for CRT/Ancient Screen Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-[5] opacity-[0.02]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)"
        }}
      />

      {/* --- CONTENT SECTIONS --- */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LeetCode />
        <Contact />
      </div>

      {/* 6. Bottom fade to black (cinematic ending) */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-[5]" />

    </main>
  );
}