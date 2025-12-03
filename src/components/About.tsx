"use client";

import { motion } from "framer-motion";
import { MapPin, Scroll, User, Code, Sword } from "lucide-react"; 

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full py-20 px-6 flex items-center justify-center relative overflow-hidden bg-gow-bg">
      
      {/* --- ATMOSPHERE LAYERS --- */}
      
      {/* 1. Giant Background Omega Symbol (Rotating slowly) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute -left-[200px] top-[10%] text-[40rem] text-gow-muted/5 font-heading pointer-events-none select-none z-0"
      >
        Ω
      </motion.div>

      {/* 2. Right Side Rune Background */}
      <div className="absolute -right-[100px] bottom-[10%] text-[20rem] text-gow-muted/5 font-heading pointer-events-none select-none z-0 rotate-12">
        ᛟ
      </div>

      {/* 3. Fog/Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0c0e12_100%)] pointer-events-none z-0" />


      {/* --- MAIN CONTENT --- */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
        
        {/* LEFT COLUMN: Character Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center group"
        >
          {/* God Ray Glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gow-gold/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* The Frame - Outer Metallic Border */}
          <div className="relative w-72 h-80 md:w-96 md:h-[500px] p-3 bg-gradient-to-br from-gow-muted to-gow-card rotate-2 transition-transform duration-500 group-hover:rotate-0 shadow-2xl">
            
            {/* Inner Border (Gold Accents) */}
            <div className="w-full h-full border-2 border-gow-gold/30 bg-black relative">
              
              {/* IMAGE */}
              <img 
                src="/khaleel.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
              />
              
              {/* Overlay Texture (Scratches/Noise) - Optional detail */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-30 mix-blend-overlay pointer-events-none" />

              {/* Decorative Corner Runes (Animated) */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gow-gold transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-gow-gold/10" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gow-gold transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-gow-gold/10" />
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
          <div className="flex items-center gap-4 mb-8">
            <span className="text-gow-red font-heading text-6xl opacity-80">I.</span>
            <div>
              <h2 className="text-4xl md:text-5xl font-heading text-gow-text uppercase tracking-wide">
                The Journey
              </h2>
              <div className="h-[2px] w-full bg-gradient-to-r from-gow-gold to-transparent mt-2" />
            </div>
          </div>

          <p className="text-gow-muted text-lg font-body leading-relaxed mb-10 pl-6 border-l-2 border-gow-red/50 italic relative">
            <span className="absolute -left-[5px] top-0 text-gow-red text-2xl">“</span>
            Like a blacksmith forging a weapon, I craft digital experiences with precision and purpose. 
            My journey began in the realm of logic and syntax, where I discovered the arcane arts of Full Stack Development.
            Now, I traverse the web, slaying bugs and building monuments of code.
          </p>

          {/* RPG Stats Grid - Styled as Rune Stones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Stat 1 */}
            <StatsCard 
              icon={<User className="w-6 h-6 text-gow-gold" />} 
              label="Class" 
              value="Full Stack Dev" 
              delay={0}
            />

            {/* Stat 2 */}
            <StatsCard 
              icon={<MapPin className="w-6 h-6 text-gow-blue" />} 
              label="Realm" 
              value="India (Remote)" 
              delay={0.1}
            />

             {/* Stat 3 */}
             <StatsCard 
              icon={<Scroll className="w-6 h-6 text-gow-red" />} 
              label="Experience" 
              value="Lvl 1 (Fresher)" 
              delay={0.2}
            />

            {/* Stat 4 */}
            <StatsCard 
              icon={<Sword className="w-6 h-6 text-gow-text" />} 
              label="Weapon" 
              value="Next.js Blade" 
              delay={0.3}
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

// Reusable Component for the Stat Cards
function StatsCard({ icon, label, value, delay }: { icon: any, label: string, value: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, translateY: -5 }}
      className="flex items-center gap-4 p-4 bg-gow-card/40 border border-gow-muted/20 relative overflow-hidden group hover:border-gow-gold/50 transition-all duration-300"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-gow-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon Box */}
      <div className="p-3 bg-gow-bg border border-gow-muted/30 rounded-full group-hover:border-gow-gold transition-colors z-10">
        {icon}
      </div>
      
      {/* Text */}
      <div className="z-10">
        <h4 className="text-gow-muted text-xs uppercase tracking-widest group-hover:text-gow-gold transition-colors">{label}</h4>
        <p className="text-gow-text font-heading text-lg">{value}</p>
      </div>

      {/* Tiny Rune Decor in Corner */}
      <div className="absolute top-2 right-2 text-gow-muted/10 font-heading text-xl group-hover:text-gow-gold/20 transition-colors">
        ᛗ
      </div>
    </motion.div>
  );
}