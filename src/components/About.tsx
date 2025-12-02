"use client";

import { motion } from "framer-motion";
import { MapPin, Scroll, User, Code } from "lucide-react"; 

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full py-20 px-6 flex items-center justify-center relative overflow-hidden">
      
      {/* Background Texture (Optional subtle noise) */}
      <div className="absolute inset-0 bg-gow-bg opacity-90 z-0" />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
        
        {/* LEFT COLUMN: Character Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center group"
        >
          {/* The Frame - Rotated borders to look like a card */}
          <div className="relative w-72 h-80 md:w-96 md:h-[500px] border-2 border-gow-muted p-2 bg-gow-card/50 rotate-2 transition-transform duration-500 group-hover:rotate-0 group-hover:border-gow-gold">
            <div className="w-full h-full border border-gow-gold/30 relative overflow-hidden bg-black/40">
              
              {/* PLACEHOLDER IMAGE - Change 'src' to your photo later */}
              <img 
                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Kratos&backgroundColor=161b22" 
                alt="Profile" 
                className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
              
              {/* Decorative Corner Runes */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gow-gold" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gow-gold" />
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: The Lore */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-heading text-gow-text mb-8 flex items-center gap-4">
            <span className="text-gow-red">I.</span> The Journey
          </h2>

          <p className="text-gow-muted text-lg font-body leading-relaxed mb-8 border-l-2 border-gow-red pl-6">
            Like a blacksmith forging a weapon, I craft digital experiences with precision and purpose. 
            My journey began in the realm of logic and syntax, where I discovered the arcane arts of Full Stack Development.
            Now, I traverse the web, slaying bugs and building monuments of code.
          </p>

          {/* RPG Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Stat: Class */}
            <div className="flex items-center gap-4 p-4 border border-gow-muted/20 bg-gow-card/40 hover:border-gow-gold transition-colors duration-300">
              <User className="text-gow-gold w-6 h-6" />
              <div>
                <h4 className="text-gow-muted text-xs uppercase tracking-widest">Class</h4>
                <p className="text-gow-text font-heading text-lg">Full Stack Dev</p>
              </div>
            </div>

            {/* Stat: Realm */}
            <div className="flex items-center gap-4 p-4 border border-gow-muted/20 bg-gow-card/40 hover:border-gow-gold transition-colors duration-300">
              <MapPin className="text-gow-gold w-6 h-6" />
              <div>
                <h4 className="text-gow-muted text-xs uppercase tracking-widest">Realm</h4>
                <p className="text-gow-text font-heading text-lg">India (Remote)</p>
              </div>
            </div>

             {/* Stat: Level */}
             <div className="flex items-center gap-4 p-4 border border-gow-muted/20 bg-gow-card/40 hover:border-gow-gold transition-colors duration-300">
              <Scroll className="text-gow-gold w-6 h-6" />
              <div>
                <h4 className="text-gow-muted text-xs uppercase tracking-widest">Experience</h4>
                <p className="text-gow-text font-heading text-lg">Lvl 3 (3 Years)</p>
              </div>
            </div>

            {/* Stat: Weapon */}
            <div className="flex items-center gap-4 p-4 border border-gow-muted/20 bg-gow-card/40 hover:border-gow-gold transition-colors duration-300">
              <Code className="text-gow-gold w-6 h-6" />
              <div>
                <h4 className="text-gow-muted text-xs uppercase tracking-widest">Weapon</h4>
                <p className="text-gow-text font-heading text-lg">Next.js Blade</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}