"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, ArrowUp } from "lucide-react";

export default function Contact() {
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="min-h-screen w-full py-24 px-6 bg-gow-bg relative flex flex-col justify-between">
      
      {/* Background Gradient to close the page darkly */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gow-bg to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full z-10 flex flex-col items-center text-center flex-grow justify-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-heading text-gow-text mb-6">
            <span className="text-gow-red">IV.</span> Release the Ravens
          </h2>
          <div className="h-[2px] w-32 bg-gow-gold mx-auto mb-6" />
          <p className="text-gow-muted text-lg md:text-xl font-body max-w-xl mx-auto leading-relaxed">
            The journey does not end here. Whether you seek to forge an alliance or simply exchange tales, my realm is open.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
          
          {/* Email Button (Send Raven) */}
          <motion.a 
            href="mailto:abdkhaleel16@gmail.com" // REPLACE THIS WITH YOUR EMAIL
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative flex items-center justify-center gap-4 p-6 border border-gow-muted/30 hover:border-gow-gold bg-gow-card/50 transition-all duration-300"
          >
            <Mail className="w-6 h-6 text-gow-gold group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <h3 className="text-gow-text font-heading uppercase tracking-widest text-sm">Send a Raven</h3>
              <p className="text-gow-muted text-xs">Direct Message</p>
            </div>
          </motion.a>

          {/* LinkedIn Button */}
          <motion.a 
            href="https://in.linkedin.com/in/abdul-khaleel" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative flex items-center justify-center gap-4 p-6 border border-gow-muted/30 hover:border-gow-blue bg-gow-card/50 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6 text-gow-blue group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <h3 className="text-gow-text font-heading uppercase tracking-widest text-sm">Forge Alliance</h3>
              <p className="text-gow-muted text-xs">LinkedIn Profile</p>
            </div>
          </motion.a>

          {/* GitHub Button */}
          <motion.a 
            href="https://github.com/abdkhaleel" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative flex items-center justify-center gap-4 p-6 border border-gow-muted/30 hover:border-white bg-gow-card/50 transition-all duration-300"
          >
            <Github className="w-6 h-6 text-gow-text group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <h3 className="text-gow-text font-heading uppercase tracking-widest text-sm">Inspect The Code</h3>
              <p className="text-gow-muted text-xs">GitHub Repositories</p>
            </div>
          </motion.a>

          {/* Resume/LeetCode Button */}
          <motion.a 
            href="https://leetcode.com/u/abdkhaleel/" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative flex items-center justify-center gap-4 p-6 border border-gow-muted/30 hover:border-gow-red bg-gow-card/50 transition-all duration-300"
          >
            <FileText className="w-6 h-6 text-gow-red group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <h3 className="text-gow-text font-heading uppercase tracking-widest text-sm">Combat Log</h3>
              <p className="text-gow-muted text-xs">LeetCode Stats</p>
            </div>
          </motion.a>

        </div>

      </div>

      {/* Footer / Scroll to Top */}
      <div className="w-full flex flex-col items-center gap-6 z-10 pt-20">
        <button 
          onClick={scrollToTop}
          className="p-3 border border-gow-muted/30 rounded-full hover:border-gow-gold hover:text-gow-gold text-gow-muted transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
        
        <p className="text-gow-muted/40 text-xs font-heading uppercase tracking-[0.2em]">
          Crafted in the Realm of Next.js & Tailwind
        </p>
      </div>

    </section>
  );
}