"use client";

import { motion } from "framer-motion";
import { MapPin, Scroll, User, Code, Sword } from "lucide-react"; 

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full py-20 px-6 flex items-center justify-center relative overflow-hidden bg-gow-bg">
      
      {/* --- ENHANCED ATMOSPHERE LAYERS --- */}
      
      {/* 1. Multiple Layered Background Symbols */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute -left-[250px] top-[5%] text-[45rem] text-gow-gold/8 font-heading pointer-events-none select-none z-0 opacity-50"
        style={{ textShadow: "0 0 100px rgba(200, 170, 110, 0.2)" }}
      >
        Ω
      </motion.div>

      {/* Rotating Runic Circle */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="absolute right-[10%] top-[20%] w-[600px] h-[600px] border-2 border-gow-red/10 rounded-full pointer-events-none z-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gow-gold/10 rounded-full" />
      </motion.div>

      {/* Multiple Rune Decorations */}
      <div className="absolute left-[5%] top-[15%] text-8xl text-gow-red/10 font-heading pointer-events-none select-none z-0 animate-pulse">
        ᚦ
      </div>
      <div className="absolute right-[8%] bottom-[15%] text-[22rem] text-gow-muted/5 font-heading pointer-events-none select-none z-0 rotate-12">
        ᛟ
      </div>
      <div className="absolute left-[15%] bottom-[25%] text-7xl text-gow-blue/10 font-heading pointer-events-none select-none z-0" style={{ animationDelay: "2s" }}>
        ᛉ
      </div>

      {/* Enhanced Fog/Vignette with Color Tints */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(152,40,40,0.08)_0%,transparent_50%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(104,133,148,0.06)_0%,transparent_50%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0c0e12_100%)] pointer-events-none z-0" />


      {/* --- MAIN CONTENT --- */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
        
        {/* LEFT COLUMN: Character Image - Enhanced Frame */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center group"
        >
          {/* Multi-layered God Ray Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gow-gold/15 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gow-red/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* The Frame - Battle-Worn Metallic Border */}
          <div className="relative w-72 h-80 md:w-96 md:h-[500px] p-4 bg-gradient-to-br from-gow-muted via-gow-card to-gow-muted rotate-2 transition-transform duration-500 group-hover:rotate-0 shadow-2xl">
            
            {/* Outer Decorative Border */}
            <div className="absolute inset-0 border-2 border-gow-gold/40 opacity-50" 
                 style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }} />
            
            {/* Inner Container (Gold Accents) */}
            <div className="w-full h-full border-2 border-gow-gold/30 bg-black relative overflow-hidden">
              
              {/* Corner Runes - More Prominent */}
              <motion.div 
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-3 -left-3 text-3xl text-gow-gold z-20 drop-shadow-[0_0_10px_rgba(200,170,110,0.8)]"
              >
                ᛏ
              </motion.div>
              <motion.div 
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-3 -right-3 text-3xl text-gow-red z-20 drop-shadow-[0_0_10px_rgba(152,40,40,0.8)]"
              >
                ᛏ
              </motion.div>

              {/* IMAGE */}
              <img 
                src="/khaleel.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
              />
              
              {/* Enhanced Overlay Texture */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-40 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Animated Expanding Corner Borders */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gow-gold transition-all duration-500 group-hover:w-[calc(100%-24px)] group-hover:h-[calc(100%-24px)] group-hover:border-gow-gold/20" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gow-gold transition-all duration-500 group-hover:w-[calc(100%-24px)] group-hover:h-[calc(100%-24px)] group-hover:border-gow-gold/20" />
            </div>
          </div>

          {/* Battle Scar Lines - Decorative */}
          <motion.div 
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-gow-red/50 to-transparent"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>


        {/* RIGHT COLUMN: The Lore - Enhanced Typography */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Section Header with Runic Number */}
          <div className="flex items-center gap-4 mb-8 relative">
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="text-gow-red font-heading text-7xl opacity-80 drop-shadow-[0_0_20px_rgba(152,40,40,0.6)]"
            >
              I.
            </motion.span>
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-heading text-gow-text uppercase tracking-wide relative">
                The Journey
                {/* Subtitle Rune */}
                <span className="absolute -top-6 -right-8 text-gow-gold/40 text-2xl animate-pulse">ᛉ</span>
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[2px] bg-gradient-to-r from-gow-gold via-gow-red/50 to-transparent mt-2"
              />
            </div>
          </div>

          {/* Story Text - Parchment Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative mb-10"
          >
            {/* Decorative Quote Mark */}
            <span className="absolute -left-6 -top-2 text-gow-red text-6xl font-heading opacity-40">"</span>
            
            <p className="text-gow-muted text-lg font-body leading-relaxed pl-8 border-l-2 border-gow-red/50 italic relative">
              Like a blacksmith forging a weapon, I craft digital experiences with precision and purpose. 
              My journey began in the realm of logic and syntax, where I discovered the arcane arts of Full Stack Development.
              Now, I traverse the web, slaying bugs and building monuments of code.
            </p>

            {/* Closing Rune */}
            <motion.span 
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 right-0 text-gow-gold/30 text-3xl font-heading"
            >
              ᛗ
            </motion.span>
          </motion.div>

          {/* RPG Stats Grid - Enhanced Stone Tablets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Stat 1 */}
            <StatsCard 
              icon={<User className="w-6 h-6 text-gow-gold" />} 
              label="Class" 
              value="Full Stack Dev" 
              rune="ᚹ"
              delay={0}
            />

            {/* Stat 2 */}
            <StatsCard 
              icon={<MapPin className="w-6 h-6 text-gow-blue" />} 
              label="Realm" 
              value="India (Remote)" 
              rune="ᛟ"
              delay={0.1}
            />

             {/* Stat 3 */}
             <StatsCard 
              icon={<Scroll className="w-6 h-6 text-gow-red" />} 
              label="Experience" 
              value="Lvl 1 (Fresher)" 
              rune="ᛋ"
              delay={0.2}
            />

            {/* Stat 4 */}
            <StatsCard 
              icon={<Sword className="w-6 h-6 text-gow-text" />} 
              label="Weapon" 
              value="Next.js Blade" 
              rune="ᛏ"
              delay={0.3}
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

// Enhanced Reusable Component for Stat Cards
function StatsCard({ icon, label, value, rune, delay }: { icon: any, label: string, value: string, rune: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      whileHover={{ scale: 1.03, translateY: -8 }}
      className="flex items-center gap-4 p-5 bg-gradient-to-br from-gow-card/60 to-gow-card/30 border-2 border-gow-muted/20 relative overflow-hidden group hover:border-gow-gold/60 transition-all duration-300 shadow-lg"
      style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}
    >
      {/* Animated Glow Effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-gow-gold/10 via-gow-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none" />

      {/* Icon Box - Enhanced */}
      <div className="p-3 bg-gow-bg border-2 border-gow-muted/40 rounded-full group-hover:border-gow-gold group-hover:shadow-[0_0_20px_rgba(200,170,110,0.3)] transition-all z-10 relative">
        {icon}
        {/* Inner Glow */}
        <div className="absolute inset-0 bg-gow-gold/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      {/* Text */}
      <div className="z-10 flex-1">
        <h4 className="text-gow-muted text-xs uppercase tracking-widest group-hover:text-gow-gold transition-colors font-heading">{label}</h4>
        <p className="text-gow-text font-heading text-lg group-hover:text-white transition-colors">{value}</p>
      </div>

      {/* Large Rune Decor in Corner - More Prominent */}
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-2 -right-2 text-gow-gold/10 font-heading text-6xl group-hover:text-gow-gold/30 transition-colors"
      >
        {rune}
      </motion.div>

      {/* Corner Accent Lines */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gow-gold/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}