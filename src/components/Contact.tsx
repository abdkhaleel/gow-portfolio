"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, ArrowUp, Feather } from "lucide-react";

export default function Contact() {
  const [feathers, setFeathers] = useState<any[]>([]);

  // Generate random values ONLY on the client side to prevent Hydration Mismatch
  useEffect(() => {
    const generatedFeathers = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      duration: Math.random() * 12 + 15,
      delay: i * 1.5,
    }));
    setFeathers(generatedFeathers);
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="min-h-screen w-full py-24 px-6 bg-gow-bg relative flex flex-col justify-between overflow-hidden">
      
      {/* --- ENHANCED ATMOSPHERE --- */}
      
      {/* 1. Multiple Giant Background Ravens & Feathers */}
      <motion.div 
        animate={{ rotate: [0, 10, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[8%] opacity-[0.04] pointer-events-none select-none"
      >
         <Feather className="w-[450px] h-[450px] text-gow-gold -rotate-45" style={{ filter: "blur(2px)" }} />
      </motion.div>
      <motion.div 
        animate={{ rotate: [0, -10, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-40 right-[8%] opacity-[0.04] pointer-events-none select-none"
      >
         <Feather className="w-[550px] h-[550px] text-gow-text rotate-[135deg]" style={{ filter: "blur(2px)" }} />
      </motion.div>

      {/* Giant Background Runes */}
      <div className="absolute left-[15%] top-[25%] text-[10rem] text-gow-gold/5 font-heading pointer-events-none select-none z-0 animate-pulse">
        ᚺ
      </div>
      <div className="absolute right-[12%] top-[50%] text-[12rem] text-gow-red/5 font-heading pointer-events-none select-none z-0 rotate-12">
        ᛟ
      </div>

      {/* Rotating Runic Circle */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-gow-gold/10 rounded-full pointer-events-none z-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gow-red/10 rounded-full" />
      </motion.div>

      {/* 2. Enhanced Falling Feathers Particle Effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {feathers.map((feather) => (
          <motion.div
            key={feather.id}
            initial={{ y: -100, x: `${feather.x}%`, opacity: 0, rotate: 0 }}
            animate={{ 
              y: "120vh", 
              opacity: [0, 0.5, 0.3, 0], 
              rotate: [0, 45, -45, 90],
              x: `+=${30 + Math.random() * 40}px`,
              scale: [0.8, 1.2, 1]
            }}
            transition={{
              duration: feather.duration,
              repeat: Infinity,
              delay: feather.delay,
              ease: "easeInOut",
            }}
            className={`absolute ${feather.id % 2 === 0 ? 'text-gow-muted/30' : 'text-gow-gold/20'}`}
          >
            <Feather className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      {/* 3. Enhanced Gradient Vignettes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,170,110,0.08)_0%,transparent_50%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gow-bg/80 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0c0e12_100%)] pointer-events-none z-0" />


      {/* --- CONTENT --- */}
      <div className="max-w-5xl mx-auto w-full z-10 flex flex-col items-center text-center flex-grow justify-center relative">
        
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 relative"
        >
          {/* Decorative Top Ornament */}
          <div className="flex items-center justify-center gap-4 mb-6">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "3rem" }}
               viewport={{ once: true }}
               className="h-[1px] bg-gradient-to-r from-transparent to-gow-gold"
             />
             <motion.div 
               initial={{ scale: 0, rotate: 0 }}
               whileInView={{ scale: 1, rotate: 45 }}
               viewport={{ once: true }}
               className="w-3 h-3 bg-gow-gold relative"
             >
               <div className="absolute inset-0 bg-gow-gold blur-md" />
             </motion.div>
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "3rem" }}
               viewport={{ once: true }}
               className="h-[1px] bg-gradient-to-l from-transparent to-gow-gold"
             />
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl font-heading text-gow-text mb-8 relative inline-block">
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="text-gow-red mr-4 inline-block drop-shadow-[0_0_20px_rgba(152,40,40,0.6)]"
            >
              V.
            </motion.span>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-white via-gow-text to-gow-muted"
                  style={{ 
                    filter: "drop-shadow(0 0 25px rgba(200, 170, 110, 0.2)) drop-shadow(0 4px 15px rgba(0, 0, 0, 0.8))"
                  }}>
              Release the Ravens
            </span>

            {/* Floating Accent Runes */}
            <motion.span 
              animate={{ opacity: [0.3, 0.7, 0.3], y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 -left-10 text-3xl text-gow-gold/40"
            >
              ᚺ
            </motion.span>
            <motion.span 
              animate={{ opacity: [0.3, 0.7, 0.3], y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="absolute -bottom-8 -right-10 text-3xl text-gow-red/40"
            >
              ᛟ
            </motion.span>
          </h2>

          {/* Enhanced Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto relative"
          >
            <p className="text-gow-muted text-lg md:text-xl font-body leading-relaxed px-8 py-6 border-y-2 border-gow-muted/20 italic relative">
              The journey does not end here. Whether you seek to forge an alliance or simply exchange tales, my realm is open.
              
              {/* Corner Accents */}
              <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gow-gold/30" />
              <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gow-gold/30" />
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Action Buttons Grid (Realm Stones) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          
          <RealmButton 
            href="mailto:abdkhaleel16@gmail.com"
            icon={<Mail className="w-6 h-6" />}
            title="Send a Raven"
            subtitle="Direct Message"
            color="gold"
            rune="ᚺ"
            delay={0}
          />

          <RealmButton 
            href="https://in.linkedin.com/in/abdul-khaleel"
            icon={<Linkedin className="w-6 h-6" />}
            title="Forge Alliance"
            subtitle="LinkedIn Profile"
            color="blue"
            rune="ᛏ"
            delay={0.1}
          />

          <RealmButton 
            href="https://github.com/abdkhaleel"
            icon={<Github className="w-6 h-6" />}
            title="Inspect The Code"
            subtitle="GitHub Repositories"
            color="white"
            rune="ᛉ"
            delay={0.2}
          />

          <RealmButton 
            href="https://leetcode.com/u/abdkhaleel/"
            icon={<FileText className="w-6 h-6" />}
            title="Combat Log"
            subtitle="LeetCode Stats"
            color="red"
            rune="ᛗ"
            delay={0.3}
          />

        </div>

      </div>

      {/* Enhanced Footer / Scroll to Top */}
      <div className="w-full flex flex-col items-center gap-8 z-10 pt-28 pb-8 relative">
        
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gow-gold/40 to-transparent" />
          <span className="text-gow-gold/40 text-sm font-heading">᛭</span>
          <div className="h-[1px] w-32 bg-gradient-to-l from-transparent via-gow-gold/40 to-transparent" />
        </div>

        {/* Enhanced Realm Travel Crystal (Scroll Up) */}
        <motion.button 
          onClick={scrollToTop}
          whileHover={{ scale: 1.15, rotate: 180 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="p-5 border-2 border-gow-muted/30 rounded-full hover:border-gow-gold hover:bg-gow-gold/10 text-gow-muted hover:text-gow-gold transition-all duration-300 group relative"
          aria-label="Return to Summit"
        >
          {/* Multiple glow layers */}
          <div className="absolute inset-0 rounded-full bg-gow-gold blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-gow-gold opacity-0 group-hover:opacity-100"
          />
          <ArrowUp className="w-7 h-7 relative z-10" />
        </motion.button>
        
        {/* Enhanced Footer Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center relative"
        >
            <p className="text-gow-muted/60 text-xs font-heading uppercase tracking-[0.35em] mb-3 flex items-center justify-center gap-2">
              <span className="text-gow-gold/40">᛫</span>
              Forged in the Realm of Next.js & Tailwind
              <span className="text-gow-gold/40">᛫</span>
            </p>
            <p className="text-gow-muted/40 text-[11px] font-body tracking-wider">
              © {new Date().getFullYear()} Abdul Khaleel. All Rights Reserved.
            </p>
        </motion.div>
      </div>

    </section>
  );
}

// Enhanced Sub-component for the "Realm Stones" (Buttons)
function RealmButton({ href, icon, title, subtitle, color, rune, delay }: any) {
  
  const getColorClasses = () => {
    switch(color) {
      case 'gold':
        return {
          text: 'text-gow-gold',
          border: 'border-gow-gold/40',
          hoverBorder: 'group-hover:border-gow-gold',
          bg: 'bg-gow-gold/5',
          glow: 'from-gow-gold/10 via-gow-gold/5 to-transparent'
        };
      case 'blue':
        return {
          text: 'text-gow-blue',
          border: 'border-gow-blue/40',
          hoverBorder: 'group-hover:border-gow-blue',
          bg: 'bg-gow-blue/5',
          glow: 'from-gow-blue/10 via-gow-blue/5 to-transparent'
        };
      case 'red':
        return {
          text: 'text-gow-red',
          border: 'border-gow-red/40',
          hoverBorder: 'group-hover:border-gow-red',
          bg: 'bg-gow-red/5',
          glow: 'from-gow-red/10 via-gow-red/5 to-transparent'
        };
      default:
        return {
          text: 'text-gow-text',
          border: 'border-gow-text/40',
          hoverBorder: 'group-hover:border-gow-text',
          bg: 'bg-gow-text/5',
          glow: 'from-gow-text/10 via-gow-text/5 to-transparent'
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <motion.a 
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.6 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className={`group relative flex items-center gap-5 p-7 border-2 bg-gradient-to-br from-[#13161d] to-[#0f1117] overflow-hidden transition-all duration-300 ${colorClasses.border} ${colorClasses.hoverBorder} shadow-lg`}
      style={{ clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)" }}
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-15 pointer-events-none" />

      {/* Inner border */}
      <div className={`absolute inset-[4px] border ${colorClasses.border} opacity-30 group-hover:opacity-60 transition-opacity`}
           style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }} />

      {/* Animated Internal Glow */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-r ${colorClasses.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* Large Background Rune */}
      <motion.div 
        animate={{ opacity: [0.03, 0.08, 0.03], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className={`absolute -right-8 -bottom-8 text-[12rem] font-heading pointer-events-none select-none ${colorClasses.text} opacity-5`}
      >
        {rune}
      </motion.div>

      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 ${colorClasses.border} opacity-30 group-hover:opacity-100 transition-opacity`}
           style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }} />
      
      {/* Enhanced Icon Container */}
      <div className={`p-4 rounded-md border-2 ${colorClasses.border} ${colorClasses.bg} group-hover:scale-110 transition-all duration-300 relative z-10 overflow-hidden`}>
        <div className={`${colorClasses.text} relative z-10`}>
          {icon}
        </div>
        {/* Inner glow */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`absolute inset-0 ${colorClasses.bg} blur-md opacity-0 group-hover:opacity-100 transition-opacity`}
        />
      </div>

      {/* Text */}
      <div className="text-left relative z-10 flex-1">
        <h3 className={`text-gow-text font-heading uppercase tracking-widest text-base group-hover:text-white transition-colors mb-1 ${colorClasses.text} group-hover:text-white`}>
          {title}
        </h3>
        <p className="text-gow-muted text-xs font-body tracking-wider group-hover:text-gow-gold transition-colors">
          {subtitle}
        </p>
      </div>

      {/* Arrow indicator */}
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className={`${colorClasses.text} opacity-0 group-hover:opacity-100 transition-opacity relative z-10`}
      >
        →
      </motion.div>

      {/* Hover border pulse */}
      <motion.div
        className={`absolute inset-0 border-2 ${colorClasses.border} opacity-0 group-hover:opacity-30 pointer-events-none`}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)" }}
      />
    </motion.a>
  );
}