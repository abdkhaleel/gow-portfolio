"use client";

import { motion } from "framer-motion";
import { Server, Database, Brain, Code2, Layers, Cpu } from "lucide-react";

// CATEGORIZED SKILLS
const skillCategories = [
  {
    title: "Core & Frameworks",
    icon: <Code2 className="w-6 h-6 text-gow-gold" />,
    description: "Languages and frameworks forged for stability.",
    theme: "gold",
    rune: "ᚹ",
    skills: [
      { name: "Java / SpringBoot", level: 90 },
      { name: "C / C++", level: 85 },
      { name: "Python / Django", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "PrimeFaces", level: 75 },
    ],
  },
  {
    title: "Data & Infrastructure",
    icon: <Server className="w-6 h-6 text-gow-red" />,
    description: "Scalable architecture to hold the weight of the world.",
    theme: "red",
    rune: "ᛏ",
    skills: [
      { name: "SQL (MySQL, Postgres)", level: 90 },
      { name: "NoSQL (Mongo, Cassandra)", level: 85 },
      { name: "Kafka / Redis", level: 80 },
      { name: "Docker / Git", level: 85 },
      { name: "Apache Beam", level: 70 },
    ],
  },
  {
    title: "Intelligence (AI/ML)",
    icon: <Brain className="w-6 h-6 text-gow-blue" />,
    description: "Algorithms that see and learn like Mimir.",
    theme: "blue",
    rune: "ᛉ",
    skills: [
      { name: "TensorFlow", level: 75 },
      { name: "Scikit-learn", level: 80 },
      { name: "Pandas / Numpy", level: 85 },
      { name: "Tesseract OCR", level: 70 },
      { name: "Data Structures", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen w-full py-24 px-6 flex flex-col items-center justify-center bg-gow-bg relative overflow-hidden">
      
      {/* --- ENHANCED ATMOSPHERE --- */}
      
      {/* Multiple Rotating Runic Circles */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 220, repeat: Infinity, ease: "linear" }}
        className="absolute -right-[350px] top-[15%] text-[45rem] text-gow-gold/8 font-heading pointer-events-none select-none z-0"
        style={{ textShadow: "0 0 100px rgba(200, 170, 110, 0.15)" }}
      >
        ᚱ
      </motion.div>

      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="absolute -left-[200px] bottom-[5%] text-[28rem] text-gow-red/8 font-heading pointer-events-none select-none z-0"
      >
        ᛟ
      </motion.div>

      {/* Floating Scattered Runes */}
      <div className="absolute left-[10%] top-[25%] text-7xl text-gow-blue/10 font-heading pointer-events-none select-none z-0 animate-pulse">
        ᚦ
      </div>
      <div className="absolute right-[15%] top-[60%] text-6xl text-gow-gold/10 font-heading pointer-events-none select-none z-0 animate-pulse" style={{ animationDelay: "1.5s" }}>
        ᛗ
      </div>

      {/* Rotating Geometric Circles */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
        className="absolute left-[20%] top-[15%] w-[500px] h-[500px] border-2 border-gow-gold/10 rounded-full pointer-events-none z-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-gow-red/10 rounded-full" />
      </motion.div>

      {/* Enhanced Fog Overlays with Color Tints */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,170,110,0.06)_0%,transparent_50%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(152,40,40,0.05)_0%,transparent_50%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0c0e12_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl w-full z-10">
        
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          {/* Roman Numeral with Glow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              className="h-[2px] bg-gradient-to-r from-transparent to-gow-red/60"
            />
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="text-gow-red font-heading text-2xl tracking-widest drop-shadow-[0_0_15px_rgba(152,40,40,0.6)]"
            >
              II.
            </motion.span>
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              className="h-[2px] bg-gradient-to-l from-transparent to-gow-red/60"
            />
          </div>

          {/* Main Title with Enhanced Effects */}
          <h2 className="text-5xl md:text-7xl font-heading text-gow-text uppercase tracking-widest relative inline-block">
            <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-white via-gow-text to-gow-muted"
                  style={{ 
                    filter: "drop-shadow(0 0 25px rgba(200, 170, 110, 0.2)) drop-shadow(0 4px 15px rgba(0, 0, 0, 0.8))"
                  }}>
              The Arsenal
            </span>
            {/* Decorative Runes */}
            <motion.span 
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -left-8 text-3xl text-gow-gold/50"
            >
              ᛋ
            </motion.span>
            <motion.span 
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-6 -right-8 text-3xl text-gow-red/50"
            >
              ᚦ
            </motion.span>
          </h2>

          {/* Subtitle with Decorative Border */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-2xl mx-auto relative"
          >
            <p className="text-gow-muted text-lg font-body italic px-6 py-4 border-y border-gow-muted/20 relative">
              A vast array of weapons. From heavy backend systems to sharp AI algorithms.
              {/* Corner Decorations */}
              <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gow-gold/30" />
              <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gow-gold/30" />
            </p>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Enhanced LeetCode Link - Epic Quest Prompt */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center relative"
        >
          {/* Decorative Line Above */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gow-gold/50 to-transparent" />
            <span className="text-gow-gold/50 text-xl font-heading">᛭</span>
            <div className="h-[1px] w-32 bg-gradient-to-l from-transparent via-gow-gold/50 to-transparent" />
          </div>

          <a 
            href="https://leetcode.com/u/abdkhaleel/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden"
          >
            {/* Outer Border - Angled Corners */}
            <div className="absolute inset-0 border-2 border-gow-muted/40 group-hover:border-gow-gold transition-all duration-500"
                 style={{ clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))" }} />
            
            {/* Inner Border */}
            <div className="absolute inset-[3px] border border-gow-muted/20 group-hover:border-gow-red/40 transition-all duration-500"
                 style={{ clipPath: "polygon(0 0, calc(100% - 13px) 0, 100% 13px, 100% 100%, 13px 100%, 0 calc(100% - 13px))" }} />

            {/* Animated Background Sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-gow-gold/10 via-gow-red/10 to-gow-gold/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

            {/* Corner Runes */}
            <span className="absolute -top-2 -left-2 text-gow-gold text-sm group-hover:text-gow-red transition-colors">ᛏ</span>
            <span className="absolute -bottom-2 -right-2 text-gow-gold text-sm group-hover:text-gow-red transition-colors">ᛏ</span>

            {/* Button Text */}
            <span className="font-heading uppercase tracking-widest text-sm text-gow-muted group-hover:text-gow-text transition-colors relative z-10 flex items-center gap-3">
              View Combat Records
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-gow-gold text-lg"
              >
                →
              </motion.span>
            </span>

            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style={{ boxShadow: "inset 0 0 30px rgba(200, 170, 110, 0.1)" }} />
          </a>

          <p className="mt-4 text-gow-muted/60 text-xs font-body uppercase tracking-widest">
            LeetCode Profile
          </p>
        </motion.div>

      </div>
    </section>
  );
}

// Enhanced Sub-Component for Skill Cards
function SkillCard({ category, index }: { category: any, index: number }) {
  
  // Enhanced gradient based on theme
  const getBarGradient = () => {
    switch (category.theme) {
      case "gold": return "bg-gradient-to-r from-yellow-900/80 via-gow-gold to-yellow-200";
      case "red": return "bg-gradient-to-r from-red-900/80 via-gow-red to-orange-400";
      case "blue": return "bg-gradient-to-r from-blue-900/80 via-gow-blue to-cyan-300";
      default: return "bg-gow-gold";
    }
  };

  const getThemeColor = () => {
    switch (category.theme) {
      case "gold": return "text-gow-gold";
      case "red": return "text-gow-red";
      case "blue": return "text-gow-blue";
      default: return "text-gow-gold";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      className="group relative p-8 bg-gradient-to-br from-[#13161d] to-[#0f1117] overflow-hidden hover:-translate-y-3 transition-all duration-500 shadow-2xl"
      style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)" }}
    >
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none" />

      {/* Double Border Effect */}
      <div className="absolute inset-0 border-2 border-gow-muted/25 pointer-events-none" 
           style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)" }} />
      <div className="absolute inset-[5px] border border-gow-muted/15 pointer-events-none group-hover:border-gow-gold/40 transition-colors duration-500"
           style={{ clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)" }} />

      {/* Dramatic Inner Glow on Hover */}
      <motion.div 
        className={`absolute inset-0 ${
          category.theme === 'red' ? 'bg-gradient-to-br from-gow-red/10 via-transparent to-transparent' : 
          category.theme === 'blue' ? 'bg-gradient-to-br from-gow-blue/10 via-transparent to-transparent' : 
          'bg-gradient-to-br from-gow-gold/10 via-transparent to-transparent'
        } opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
      />

      {/* Corner Accent Lines - Animated */}
      <motion.div 
        initial={{ width: "0.75rem", height: "0.75rem" }}
        whileInView={{ width: "0.75rem", height: "0.75rem" }}
        className="absolute top-0 right-0 border-t-2 border-r-2 border-gow-gold/40 group-hover:border-gow-gold transition-all duration-500"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gow-muted/40 group-hover:border-gow-gold transition-colors" />

      {/* Large Background Rune */}
      <motion.div 
        animate={{ opacity: [0.03, 0.08, 0.03], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className={`absolute -top-8 -right-8 text-[12rem] font-heading ${getThemeColor()} opacity-5 pointer-events-none select-none`}
      >
        {category.rune}
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-6 pb-5 border-b-2 border-gow-muted/20 group-hover:border-gow-gold/40 transition-colors duration-500">
          {/* Icon Container with Enhanced Glow */}
          <div className={`p-3 rounded-md bg-gow-bg border-2 border-gow-muted/40 shadow-lg group-hover:border-${category.theme === 'gold' ? 'gow-gold' : category.theme === 'red' ? 'gow-red' : 'gow-blue'} transition-all duration-500 relative overflow-hidden`}>
            {category.icon}
            {/* Inner Glow */}
            <div className={`absolute inset-0 ${
              category.theme === 'gold' ? 'bg-gow-gold/20' :
              category.theme === 'red' ? 'bg-gow-red/20' :
              'bg-gow-blue/20'
            } rounded-md blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-heading text-gow-text uppercase tracking-wider group-hover:text-white transition-colors relative">
              {category.title}
              {/* Small Accent Rune */}
              <motion.span 
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute -right-6 -top-1 text-sm ${getThemeColor()} opacity-50`}
              >
                {category.rune}
              </motion.span>
            </h3>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gow-muted text-sm font-body mb-8 italic opacity-80 min-h-[50px] leading-relaxed">
          {category.description}
        </p>

        {/* Skills List with Enhanced Bars */}
        <div className="space-y-5">
          {category.skills.map((skill: any, i: number) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span className="text-gow-text font-body text-sm font-semibold tracking-wide group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  className={`text-xs font-heading ${getThemeColor()} font-bold`}
                >
                  {skill.level}%
                </motion.span>
              </div>
              
              {/* Enhanced XP Bar Background */}
              <div className="h-2 w-full bg-black/80 border-2 border-gow-muted/30 rounded-full overflow-hidden relative">
                {/* Inner Shadow */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
                
                {/* XP Bar Fill with Glow */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: 0.5 + (i * 0.12), ease: "easeOut" }}
                  className={`h-full relative ${getBarGradient()}`}
                  style={{ 
                    boxShadow: category.theme === 'gold' 
                      ? "0 0 15px rgba(200, 170, 110, 0.6), inset 0 1px 0 rgba(255,255,255,0.3)"
                      : category.theme === 'red'
                      ? "0 0 15px rgba(152, 40, 40, 0.6), inset 0 1px 0 rgba(255,255,255,0.3)"
                      : "0 0 15px rgba(104, 133, 148, 0.6), inset 0 1px 0 rgba(255,255,255,0.3)"
                  }}
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Border Pulse */}
      <motion.div
        className="absolute inset-0 border-2 border-gow-gold opacity-0 group-hover:opacity-30 pointer-events-none"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)" }}
      />
    </motion.div>
  );
}