"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "The Journey", id: "about", rune: "ᚹ" },
  { name: "Arsenal", id: "skills", rune: "ᛏ" },
  { name: "Labors", id: "projects", rune: "ᛟ" },
  { name: "Trials", id: "leetcode", rune: "ᛋ" },
  { name: "Ravens", id: "contact", rune: "ᚺ" },
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
            ? "bg-[#0c0e12]/95 backdrop-blur-xl py-3 shadow-[0_8px_40px_rgba(0,0,0,0.7)]" 
            : "bg-transparent py-6"
        )}
      >
        {/* Enhanced Decorative Bottom Border */}
        <div className={clsx(
            "absolute bottom-0 left-0 w-full h-[2px] transition-opacity duration-500",
            isScrolled ? "opacity-100" : "opacity-0"
        )}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gow-gold/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gow-gold/30 to-transparent blur-sm" />
        </div>

        {/* Top subtle border when scrolled */}
        <div className={clsx(
            "absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gow-red/30 to-transparent transition-opacity duration-500",
            isScrolled ? "opacity-100" : "opacity-0"
        )} />

        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          
          {/* Enhanced LOGO: Glowing Omega with Runes */}
          <div 
            className="group relative cursor-pointer z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
             {/* Multiple glow layers */}
             <div className="absolute inset-0 bg-gow-red/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <motion.div 
               animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="absolute inset-0 bg-gow-red/20 blur-xl rounded-full opacity-0 group-hover:opacity-100"
             />
             
             {/* Main Omega symbol */}
             <div className="text-4xl md:text-5xl font-heading font-bold text-gow-red relative z-10 drop-shadow-[0_0_10px_rgba(152,40,40,0.9)] group-hover:scale-110 transition-transform duration-300">
                Ω
             </div>

             {/* Small floating runes around logo */}
             <motion.span 
               animate={{ opacity: [0.3, 0.7, 0.3], y: [-2, 2, -2] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute -top-3 -left-3 text-xs text-gow-gold/50 font-heading"
             >
               ᛟ
             </motion.span>
             <motion.span 
               animate={{ opacity: [0.3, 0.7, 0.3], y: [2, -2, 2] }}
               transition={{ duration: 2, repeat: Infinity, delay: 1 }}
               className="absolute -bottom-3 -right-3 text-xs text-gow-gold/50 font-heading"
             >
               ᚦ
             </motion.span>
          </div>

          {/* Enhanced DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12 relative">
            {navItems.map((item) => (
              <li key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={clsx(
                    "font-heading uppercase tracking-widest text-xs lg:text-sm transition-all duration-300 relative z-10 py-2",
                    activeTab === item.id 
                      ? "text-gow-gold scale-105" 
                      : "text-gow-muted hover:text-white"
                  )}
                >
                  {/* Enhanced Rune above text */}
                  <span className={clsx(
                      "absolute -top-4 left-1/2 -translate-x-1/2 text-sm font-heading transition-all duration-300",
                      activeTab === item.id 
                        ? "opacity-100 text-gow-gold drop-shadow-[0_0_8px_rgba(200,170,110,0.8)]" 
                        : "opacity-0 text-gow-muted group-hover:opacity-60 group-hover:-top-5"
                  )}>
                    {item.rune}
                  </span>
                  {item.name}
                </button>
                
                {/* Enhanced Active Indicator (Glowing Line with animation) */}
                {activeTab === item.id && (
                  <>
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gow-gold rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    <motion.div
                      layoutId="underline-glow"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gow-gold blur-sm rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  </>
                )}

                {/* Hover indicator (subtle) */}
                <div className={clsx(
                  "absolute -bottom-2 left-0 right-0 h-[1px] bg-gow-muted/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                  activeTab === item.id && "scale-x-0"
                )} />
              </li>
            ))}
          </ul>

          {/* Enhanced MOBILE MENU TOGGLE */}
          <button 
            className="md:hidden z-50 text-gow-text p-2 hover:text-gow-gold transition-colors relative group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gow-gold/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative z-10"
            >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </motion.div>
          </button>

        </div>
      </nav>

      {/* Enhanced MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#0c0e12] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Enhanced Texture Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-25 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,170,110,0.05)_0%,transparent_70%)] pointer-events-none" />

            {/* Floating Background Runes */}
            <motion.div 
              animate={{ opacity: [0.03, 0.06, 0.03], rotate: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-20 left-10 text-[8rem] text-gow-gold/5 font-heading pointer-events-none select-none"
            >
              ᛟ
            </motion.div>
            <motion.div 
              animate={{ opacity: [0.03, 0.06, 0.03], rotate: [0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity, delay: 2 }}
              className="absolute bottom-20 right-10 text-[10rem] text-gow-red/5 font-heading pointer-events-none select-none"
            >
              ᚦ
            </motion.div>

            {/* Enhanced Decorative Border Frame */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-gow-gold/40"
            />
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-gow-gold/40"
            />
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-gow-gold/40"
            />
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-gow-gold/40"
            />

            {/* Small corner runes */}
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-2 left-2 text-xs text-gow-gold/50 font-heading"
            >
              ᛏ
            </motion.span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-2 right-2 text-xs text-gow-gold/50 font-heading"
            >
              ᛏ
            </motion.span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-2 left-2 text-xs text-gow-gold/50 font-heading"
            >
              ᛏ
            </motion.span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-2 right-2 text-xs text-gow-gold/50 font-heading"
            >
              ᛏ
            </motion.span>

            {/* Enhanced Navigation */}
            <nav className="flex flex-col items-center gap-6 relative z-10 w-full px-6 max-w-md">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection(item.id)}
                  className={clsx(
                     "w-full py-5 border-b-2 border-gow-muted/10 text-2xl font-heading uppercase tracking-[0.25em] transition-all duration-300 relative group",
                     activeTab === item.id ? "text-gow-gold border-gow-gold/30" : "text-gow-muted border-gow-muted/10"
                  )}
                >
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gow-gold/5 via-gow-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className="relative z-10 group-hover:text-white transition-colors flex items-center justify-center gap-4">
                    {/* Left Rune */}
                    <motion.span 
                      className={clsx(
                        "text-base font-heading transition-all duration-300",
                        activeTab === item.id 
                          ? "text-gow-gold opacity-100" 
                          : "text-gow-red opacity-0 group-hover:opacity-60"
                      )}
                      animate={activeTab === item.id ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {item.rune}
                    </motion.span>

                    {item.name}

                    {/* Right Rune */}
                    <motion.span 
                      className={clsx(
                        "text-base font-heading transition-all duration-300",
                        activeTab === item.id 
                          ? "text-gow-gold opacity-100" 
                          : "text-gow-red opacity-0 group-hover:opacity-60"
                      )}
                      animate={activeTab === item.id ? { rotate: [0, -10, 10, 0] } : {}}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      {item.rune}
                    </motion.span>
                  </span>

                  {/* Active indicator line */}
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="mobile-active"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full bg-gradient-to-b from-transparent via-gow-gold to-transparent"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Enhanced Decorative Footer */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center gap-4"
            >
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gow-gold/60 to-transparent" />
              <span className="text-gow-gold/50 text-sm font-heading">᛭</span>
              <div className="w-16 h-[2px] bg-gradient-to-l from-transparent via-gow-gold/60 to-transparent" />
            </motion.div>

            {/* Small footer text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-gow-muted/40 text-xs font-body uppercase tracking-widest"
            >
              Choose Your Path
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}