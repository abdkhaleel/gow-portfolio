"use client";

import { motion } from "framer-motion";

export default function Hero() {
  
  // Function to scroll to the "About" section
  const scrollToJourney = () => {
    const element = document.getElementById("about");
    if (element) {
      const yOffset = -80; // Offset to account for the fixed Navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden text-center z-10 px-4">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gow-blue/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Intro Text */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-gow-gold font-body tracking-[0.2em] text-sm md:text-base uppercase mb-6"
      >
        The Portfolio of
      </motion.p>

      {/* Name - HUGE Cinematic Title */}
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-6xl md:text-8xl font-heading font-bold text-gow-text uppercase tracking-widest drop-shadow-2xl"
      >
        ABDUL KHALEEL
      </motion.h1>

      {/* Norse Divider Line */}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.2, delay: 1 }}
        className="h-[2px] bg-gradient-to-r from-transparent via-gow-gold to-transparent my-8 max-w-2xl mx-auto relative"
      >
        {/* The Diamond Rune in the center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gow-bg border-2 border-gow-gold rotate-45" />
      </motion.div>

      {/* Job Title */}
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-lg md:text-3xl font-body text-gow-muted uppercase tracking-[0.3em]"
      >
        Full Stack Developer
      </motion.h2>

      {/* CTA Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="mt-16"
      >
        <button 
          onClick={scrollToJourney} // <--- Added the click handler here
          className="group relative px-10 py-4 bg-transparent border border-gow-muted/50 hover:border-gow-red transition-all duration-300 cursor-pointer"
        >
          <span className="relative z-10 text-gow-text font-heading uppercase tracking-widest group-hover:text-white transition-colors">
            Begin Journey
          </span>
          {/* Hover Red Fill Effect */}
          <div className="absolute inset-0 bg-gow-red/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
        </button>
      </motion.div>

    </section>
  );
}