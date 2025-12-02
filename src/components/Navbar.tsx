"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react"; // Icons for the mobile menu

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

  // Detect scroll to darken the background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false); // Close mobile menu on click
    const element = document.getElementById(id);
    if (element) {
      // Offset for the fixed header
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-gow-bg/95 backdrop-blur-md border-gow-muted/20 py-4 shadow-lg" 
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo - Omega Symbol */}
          <div 
            className="text-2xl font-heading font-bold text-gow-red cursor-pointer hover:scale-110 transition-transform z-50 relative"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
             Ω
          </div>

          {/* DESKTOP MENU (Hidden on Mobile) */}
          <ul className="hidden md:flex space-x-12 relative">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={clsx(
                    "font-heading uppercase tracking-widest text-sm transition-colors duration-300 hover:text-gow-text",
                    activeTab === item.id ? "text-gow-gold" : "text-gow-muted"
                  )}
                >
                  {item.name}
                </button>
                
                {/* Desktop Active Indicator */}
                {activeTab === item.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gow-gold shadow-[0_0_10px_#c8aa6e]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button 
            className="md:hidden z-50 text-gow-text p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gow-bg/98 backdrop-blur-xl flex flex-col items-center justify-center space-y-8"
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-20 pointer-events-none" />

            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl font-heading uppercase tracking-widest text-gow-text hover:text-gow-gold transition-colors relative group"
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Mobile Hover Line */}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gow-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </motion.button>
            ))}

            <div className="mt-8 w-16 h-1 bg-gow-gold rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}