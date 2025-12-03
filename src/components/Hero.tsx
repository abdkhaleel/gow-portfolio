"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Generate random particles for Snow/Ash effect
const generateParticles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // Random Horizontal %
    y: Math.random() * 100, // Random Vertical %
    size: Math.random() * 3 + 1, // Random size
    duration: Math.random() * 10 + 10, // Random slow speed
    delay: Math.random() * 5,
  }));
};

export default function Hero() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setParticles(generateParticles(25)); // Create 25 flakes
  }, []);

  const scrollToJourney = () => {
    const element = document.getElementById("about");
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden text-center z-10 px-4">
      
      {/* --- ATMOSPHERE LAYERS --- */}

      {/* 1. Background Runes (Faint & Huge) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        {/* Rotating Runic Circles */}
        <motion.div 
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 360, opacity: 0.15 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          className="w-[900px] h-[900px] border-[3px] border-gow-gold/20 rounded-full flex items-center justify-center absolute"
          style={{ 
            boxShadow: "inset 0 0 80px rgba(200, 170, 110, 0.1), 0 0 80px rgba(200, 170, 110, 0.05)" 
          }}
        >
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="w-[700px] h-[700px] border-[2px] border-gow-red/20 rounded-full flex items-center justify-center"
          >
            <div className="w-[500px] h-[500px] border-[1px] border-gow-blue/30 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Large Background Runes with Glow */}
        <div className="absolute top-1/4 left-1/4 text-9xl font-heading text-gow-gold/10 blur-[2px] animate-pulse">
          ᚦ
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-8xl font-heading text-gow-red/10 blur-[2px] animate-pulse" style={{ animationDelay: "1s" }}>
          ᛟ
        </div>
        
        {/* Central Ragnarok Text */}
        <div className="text-[18vw] font-heading text-gow-muted/8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm tracking-widest">
          ᚱᚨᚷᚾᚨᚱᛟᚲ
        </div>
      </div>
      {/* 2. Floating Snow / Ash Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: -10, opacity: 0 }}
            animate={{ 
              y: ["0vh", "100vh"], 
              opacity: [0, 0.8, 0],
              x: [0, Math.random() * 50 - 25] // Slight wind drift
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
            style={{
              left: `${p.x}%`,
              width: p.size,
              height: p.size,
            }}
            className="absolute bg-gow-text/30 rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* 3. Frost Vignette (Dark Edges) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0c0e12_100%)] pointer-events-none z-0" />


      {/* --- CONTENT LAYERS --- */}

      <div className="z-10 relative">
        {/* Intro Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gow-gold font-body tracking-[0.3em] text-xs md:text-sm uppercase mb-4 opacity-80"
        >
          The Portfolio of
        </motion.p>

        {/* Name - Metallic & Cinematic */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-5xl md:text-9xl font-heading font-bold uppercase tracking-widest relative"
        >
          {/* Main Text with Metallic Gradient */}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gow-text to-gow-muted drop-shadow-2xl">
            ABDUL KHALEEL
          </span>
        </motion.h1>

        {/* Norse Divider Line - More ornate */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="flex items-center justify-center my-8 max-w-2xl mx-auto relative"
        >
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gow-gold/50 to-transparent" />
          
          {/* Central Rune */}
          <div className="absolute px-4 bg-gow-bg text-gow-gold text-2xl font-heading animate-pulse">
            ᛟ
          </div>
        </motion.div>

        {/* Job Title */}
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-lg md:text-2xl font-body text-gow-muted uppercase tracking-[0.4em]"
        >
          Full Stack Developer
        </motion.h2>

        {/* CTA Button - QTE Style */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-16"
        >
          <button 
            onClick={scrollToJourney}
            className="group relative px-12 py-5 bg-transparent overflow-hidden"
          >
            {/* Custom Border using SVGs or CSS Borders for rugged look */}
            <div className="absolute inset-0 border border-gow-muted/40 group-hover:border-gow-gold/60 transition-colors duration-300" />
            <div className="absolute inset-[3px] border border-gow-muted/20 group-hover:border-gow-gold/30 transition-colors duration-300" />
            
            {/* Corner Runes */}
            <span className="absolute top-0 left-0 -mt-1 -ml-1 text-gow-gold text-xs">ᛏ</span>
            <span className="absolute bottom-0 right-0 -mb-1 -mr-1 text-gow-gold text-xs">ᛏ</span>

            <span className="relative z-10 text-gow-text font-heading uppercase tracking-[0.2em] text-sm group-hover:text-white transition-colors duration-300">
              Begin Journey
            </span>

            {/* Background Hover Sweep */}
            <div className="absolute inset-0 bg-gow-red/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          </button>
        </motion.div>
      </div>

    </section>
  );
}