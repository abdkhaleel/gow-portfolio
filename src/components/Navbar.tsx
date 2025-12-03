"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "The Journey", id: "about" },
  { name: "Arsenal", id: "skills" },
  { name: "Labors", id: "projects" },
  { name: "Trials", id: "leetcode" },
  { name: "Ravens", id: "contact" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. Detect scroll to darken the background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. ACTIVE SCROLL SPY
  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.id));
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", 
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false); 
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 w-full max-w-[100vw] z-50 transition-all duration-500 box-border",
          isScrolled 
            ? "bg-[#0c0e12]/95 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
            : "bg-transparent py-6"
        )}
      >
        {/* Decorative Bottom Border (Fades out at edges) */}
        <div className={clsx(
            "absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gow-gold/50 to-transparent transition-opacity duration-500",
            isScrolled ? "opacity-100" : "opacity-0"
        )} />

        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          
          {/* LOGO: Glowing Omega */}
          <div 
            className="group relative cursor-pointer z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
             <div className="absolute inset-0 bg-gow-red/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="text-4xl md:text-5xl font-heading font-bold text-gow-red relative z-10 drop-shadow-[0_0_5px_rgba(152,40,40,0.8)] group-hover:scale-105 transition-transform duration-300">
                Ω
             </div>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12 relative">
            {navItems.map((item) => (
              <li key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={clsx(
                    "font-heading uppercase tracking-widest text-xs lg:text-sm transition-all duration-300 relative z-10",
                    activeTab === item.id 
                      ? "text-gow-gold scale-105" 
                      : "text-gow-muted hover:text-white"
                  )}
                >
                  {/* Tiny Rune above text on Hover/Active */}
                  <span className={clsx(
                      "absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] text-gow-gold transition-opacity duration-300 font-heading",
                      activeTab === item.id || activeTab === "hover" ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  )}>
                    ᛟ
                  </span>
                  {item.name}
                </button>
                
                {/* Active Indicator (Glowing Line) */}
                {activeTab === item.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gow-gold shadow-[0_0_10px_#c8aa6e] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="md:hidden z-50 text-gow-text p-2 hover:text-gow-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </motion.div>
          </button>

        </div>
      </nav>

      {/* MOBILE MENU OVERLAY (The Pause Screen) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#0c0e12] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Texture Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />

            {/* Decorative Border Frame */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-gow-gold/30" />
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-gow-gold/30" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-gow-gold/30" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-gow-gold/30" />

            <nav className="flex flex-col items-center gap-8 relative z-10 w-full px-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => scrollToSection(item.id)}
                  className={clsx(
                     "w-full py-4 border-b border-gow-muted/10 text-2xl font-heading uppercase tracking-[0.2em] transition-all duration-300 relative group",
                     activeTab === item.id ? "text-gow-gold" : "text-gow-muted"
                  )}
                >
                  <span className="relative z-10 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                  
                  {/* Left/Right Runes on Active/Hover */}
                  <span className={clsx(
                      "absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gow-red opacity-0 transition-all duration-300",
                      activeTab === item.id ? "opacity-100 left-8" : "group-hover:opacity-50 group-hover:left-8"
                  )}>ᚲ</span>
                   <span className={clsx(
                      "absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gow-red opacity-0 transition-all duration-300",
                      activeTab === item.id ? "opacity-100 right-8" : "group-hover:opacity-50 group-hover:right-8"
                  )}>ᚲ</span>
                </motion.button>
              ))}
            </nav>

            {/* Decorative Footer Line */}
            <div className="mt-12 w-32 h-[2px] bg-gradient-to-r from-transparent via-gow-gold/50 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}