"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, ArrowUp, Feather } from "lucide-react";

export default function Contact() {
  const [feathers, setFeathers] = useState<any[]>([]);

  // Fix: Generate random values ONLY on the client side to prevent Hydration Mismatch
  useEffect(() => {
    const generatedFeathers = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // Random percentage
      duration: Math.random() * 10 + 15,
      delay: i * 2,
    }));
    setFeathers(generatedFeathers);
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="min-h-screen w-full py-24 px-6 bg-gow-bg relative flex flex-col justify-between overflow-hidden">
      
      {/* --- ATMOSPHERE --- */}
      
      {/* 1. Giant Background Ravens (Odin's Eyes) */}
      <div className="absolute top-20 left-[10%] opacity-[0.03] pointer-events-none select-none">
         <Feather className="w-[400px] h-[400px] text-gow-text -rotate-45" />
      </div>
      <div className="absolute bottom-40 right-[10%] opacity-[0.03] pointer-events-none select-none">
         <Feather className="w-[500px] h-[500px] text-gow-text rotate-[135deg]" />
      </div>

      {/* 2. Falling Feathers Particle Effect (Client Only) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {feathers.map((feather) => (
          <motion.div
            key={feather.id}
            initial={{ y: -100, x: `${feather.x}%`, opacity: 0, rotate: 0 }}
            animate={{ 
              y: "120vh", 
              opacity: [0, 0.4, 0], 
              rotate: [0, 45, -45, 90],
              x: "+=50px"
            }}
            transition={{
              duration: feather.duration,
              repeat: Infinity,
              delay: feather.delay,
              ease: "linear",
            }}
            className="absolute text-gow-muted/20"
          >
            <Feather className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      {/* 3. Gradient Vignette (Closing the page) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gow-bg/80 to-transparent pointer-events-none z-0" />


      {/* --- CONTENT --- */}
      <div className="max-w-5xl mx-auto w-full z-10 flex flex-col items-center text-center flex-grow justify-center relative">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="h-[1px] w-12 bg-gow-gold" />
             <div className="w-2 h-2 rotate-45 bg-gow-gold" />
             <div className="h-[1px] w-12 bg-gow-gold" />
          </div>
          <h2 className="text-5xl md:text-7xl font-heading text-gow-text mb-6 drop-shadow-2xl">
            <span className="text-gow-red mr-4">V.</span> 
            Release the Ravens
          </h2>
          <p className="text-gow-muted text-lg md:text-xl font-body max-w-xl mx-auto leading-relaxed border-t border-gow-muted/20 pt-6">
            The journey does not end here. Whether you seek to forge an alliance or simply exchange tales, my realm is open.
          </p>
        </motion.div>

        {/* Action Buttons Grid (Realm Stones) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          
          <RealmButton 
            href="mailto:abdkhaleel16@gmail.com"
            icon={<Mail className="w-6 h-6" />}
            title="Send a Raven"
            subtitle="Direct Message"
            color="gold"
            delay={0}
          />

          <RealmButton 
            href="https://in.linkedin.com/in/abdul-khaleel"
            icon={<Linkedin className="w-6 h-6" />}
            title="Forge Alliance"
            subtitle="LinkedIn Profile"
            color="blue"
            delay={0.1}
          />

          <RealmButton 
            href="https://github.com/abdkhaleel"
            icon={<Github className="w-6 h-6" />}
            title="Inspect The Code"
            subtitle="GitHub Repositories"
            color="white"
            delay={0.2}
          />

          <RealmButton 
            href="https://leetcode.com/u/abdkhaleel/"
            icon={<FileText className="w-6 h-6" />}
            title="Combat Log"
            subtitle="LeetCode Stats"
            color="red"
            delay={0.3}
          />

        </div>

      </div>

      {/* Footer / Scroll to Top */}
      <div className="w-full flex flex-col items-center gap-8 z-10 pt-24 pb-8">
        
        {/* Realm Travel Crystal (Scroll Up) */}
        <motion.button 
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, rotate: 180 }}
          transition={{ duration: 0.5 }}
          className="p-4 border-2 border-gow-muted/30 rounded-full hover:border-gow-gold hover:bg-gow-gold/10 text-gow-muted hover:text-gow-gold transition-all duration-300 group relative"
          aria-label="Return to Summit"
        >
          <div className="absolute inset-0 rounded-full bg-gow-gold blur-[10px] opacity-0 group-hover:opacity-50 transition-opacity" />
          <ArrowUp className="w-6 h-6 relative z-10" />
        </motion.button>
        
        <div className="text-center">
            <p className="text-gow-muted/60 text-xs font-heading uppercase tracking-[0.3em] mb-2">
            Forged in the Realm of Next.js & Tailwind
            </p>
            <p className="text-gow-muted/30 text-[10px] font-body">
            © {new Date().getFullYear()} Abdul Khaleel. All Rights Reserved.
            </p>
        </div>
      </div>

    </section>
  );
}

// Sub-component for the "Realm Stones" (Buttons)
function RealmButton({ href, icon, title, subtitle, color, delay }: any) {
  
  const colors: any = {
    gold: "text-gow-gold border-gow-gold/30 group-hover:border-gow-gold bg-gow-gold/5",
    blue: "text-gow-blue border-gow-blue/30 group-hover:border-gow-blue bg-gow-blue/5",
    red: "text-gow-red border-gow-red/30 group-hover:border-gow-red bg-gow-red/5",
    white: "text-gow-text border-gow-text/30 group-hover:border-gow-text bg-gow-text/5",
  };

  return (
    <motion.a 
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      className={`group relative flex items-center gap-5 p-6 border bg-[#11141a] overflow-hidden transition-all duration-300 ${colors[color].split(" ")[1]}`}
    >
      {/* Internal Glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-${color === 'white' ? 'gray-200' : color === 'gold' ? 'yellow-500' : color === 'red' ? 'red-500' : 'blue-500'} to-transparent`} />
      
      {/* Icon Container */}
      <div className={`p-3 rounded-md border ${colors[color]} group-hover:scale-110 transition-transform duration-300 relative z-10`}>
        {icon}
      </div>

      {/* Text */}
      <div className="text-left relative z-10">
        <h3 className="text-gow-text font-heading uppercase tracking-widest text-sm group-hover:text-white transition-colors">{title}</h3>
        <p className="text-gow-muted text-xs font-bold mt-1 group-hover:text-gow-gold transition-colors">{subtitle}</p>
      </div>

      {/* Corner Runes */}
      <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-heading text-gow-muted">ᛗ</span>
      </div>

    </motion.a>
  )
}