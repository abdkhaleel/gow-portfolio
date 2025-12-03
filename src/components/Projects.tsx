"use client";

import { motion } from "framer-motion";
import { Github, Folder, Cpu, Brain, Database, Shield, Link2, Gamepad2, ExternalLink } from "lucide-react";

// YOUR REAL PROJECTS
const projects = [
  {
    title: "RAG QnA System",
    category: "AI & GenAI",
    description: "A Retrieval-Augmented Generation system allowing LLMs to answer questions using private data context.",
    tags: ["LLM", "Python", "Vector DB"],
    github: "https://github.com/abdkhaleel/RAG-QnA-System",
    icon: <Brain className="w-5 h-5 text-white" />,
    color: "blue",
    rune: "ᛗ"
  },
  {
    title: "GameBoy Emulator",
    category: "Systems Engineering",
    description: "Low-level console emulation. Handles CPU opcode interpretation, memory mapping, and interrupts.",
    tags: ["C", "CMake", "Emulation", "Arch"],
    github: "https://github.com/abdkhaleel/GameBoy-Emulator",
    icon: <Cpu className="w-5 h-5 text-white" />,
    color: "red",
    rune: "ᚦ"
  },
  {
    title: "Blockchain Voting",
    category: "Web3 & Security",
    description: "Decentralized voting platform ensuring immutable elections via smart contracts.",
    tags: ["Java", "JWT", "Hashing"],
    github: "https://github.com/abdkhaleel/blockchain-voting-application",
    icon: <Shield className="w-5 h-5 text-white" />,
    color: "gold",
    rune: "ᛟ"
  },
  {
    title: "NoSQL DBMS Impl",
    category: "Database Internals",
    description: "Custom NoSQL engine built from scratch. Implements storage, indexing, and query parsing.",
    tags: ["Java", "DSA"],
    github: "https://github.com/abdkhaleel/no-sql-dbms-impl",
    icon: <Database className="w-5 h-5 text-white" />,
    color: "red",
    rune: "ᚲ"
  },
  {
    title: "Image Denoiser",
    category: "Computer Vision",
    description: "Deep learning model to remove noise and grain from images using convolutional networks.",
    tags: ["Math", "Python", "CV"],
    github: "https://github.com/abdkhaleel/Image-Denoiser",
    icon: <Folder className="w-5 h-5 text-white" />,
    color: "blue",
    rune: "ᛞ"
  },
  {
    title: "Reddit Analysis",
    category: "Data Science",
    description: "Analytical tool scraping Reddit to identify emerging trends and sentiment shifts.",
    tags: ["Apache Beam", "Spacy"],
    github: "https://github.com/abdkhaleel/reddit-trend-analysis",
    icon: <Folder className="w-5 h-5 text-white" />,
    color: "blue",
    rune: "ᚱ"
  },
  {
    title: "Tic-Tac-Toe AI",
    category: "Game AI",
    description: "Unbeatable game agent utilizing the Minimax algorithm and recursive state search.",
    tags: ["Angular", "Game Theory", "Minimax"],
    github: "https://github.com/abdkhaleel/tic-tac-toe-wth-ai",
    icon: <Gamepad2 className="w-5 h-5 text-white" />,
    color: "gold",
    rune: "ᚷ"
  },
  {
    title: "shrtlnk",
    category: "Web Utility",
    description: "Robust URL shortening service with redirection logic, tracking, and efficient retrieval.",
    tags: ["Redis", "Kafka"],
    github: "https://github.com/abdkhaleel/shrtlnk",
    icon: <Link2 className="w-5 h-5 text-white" />,
    color: "gold",
    rune: "ᛚ"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen w-full py-24 px-6 bg-gow-bg relative overflow-hidden">
      
      {/* --- ENHANCED ATMOSPHERE --- */}
      
      {/* Multiple Rotating Runes */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
        className="absolute -left-[200px] top-[10%] text-[35rem] text-gow-gold/6 font-heading pointer-events-none select-none z-0"
        style={{ textShadow: "0 0 100px rgba(200, 170, 110, 0.1)" }}
      >
        ᚺ
      </motion.div>

      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute -right-[150px] bottom-[15%] text-[30rem] text-gow-red/6 font-heading pointer-events-none select-none z-0"
      >
        ᛉ
      </motion.div>

      {/* Floating Decorative Runes */}
      <div className="absolute left-[8%] top-[30%] text-6xl text-gow-blue/10 font-heading pointer-events-none select-none z-0 animate-pulse">
        ᛟ
      </div>
      <div className="absolute right-[12%] top-[50%] text-7xl text-gow-gold/8 font-heading pointer-events-none select-none z-0 animate-pulse" style={{ animationDelay: "2s" }}>
        ᚱ
      </div>

      {/* Leather Texture & Gradients */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(152,40,40,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-gow-bg via-transparent to-gow-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center relative"
        >
          {/* Decorative Top Ornament */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              className="h-[1px] bg-gradient-to-r from-transparent to-gow-muted/50"
            />
            <motion.div 
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 45 }}
              viewport={{ once: true }}
              className="w-3 h-3 border-2 border-gow-gold bg-gow-bg relative"
            >
              <div className="absolute inset-0 bg-gow-gold/20 blur-sm" />
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              className="h-[1px] bg-gradient-to-l from-transparent to-gow-muted/50"
            />
          </div>

          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-heading text-gow-text mb-6 relative inline-block"
          >
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="text-gow-red mr-4 inline-block drop-shadow-[0_0_15px_rgba(152,40,40,0.6)]"
            >
              III.
            </motion.span>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-white via-gow-text to-gow-muted"
                  style={{ filter: "drop-shadow(0 0 20px rgba(200, 170, 110, 0.15))" }}>
              The Labors
            </span>

            {/* Floating Accent Runes */}
            <motion.span 
              animate={{ opacity: [0.3, 0.7, 0.3], y: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 -left-6 text-2xl text-gow-red/40"
            >
              ᛏ
            </motion.span>
            <motion.span 
              animate={{ opacity: [0.3, 0.7, 0.3], y: [3, -3, 3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="absolute -bottom-8 -right-6 text-2xl text-gow-gold/40"
            >
              ᛋ
            </motion.span>
          </motion.h2>

          {/* Subtitle with Frame */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto relative"
          >
            <p className="text-gow-muted text-lg font-body italic px-8 py-4 border-y border-gow-muted/20 relative">
              Feats of engineering completed in the digital realm.
              
              {/* Corner Accents */}
              <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gow-gold/30" />
              <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gow-gold/30" />
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <QuestCard key={index} project={project} index={index} />
          ))}
        </div>
        
        {/* Enhanced Footer Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28 text-center relative"
        >
          {/* Decorative Divider Above */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gow-gold/40 to-transparent" />
            <span className="text-gow-gold/40 text-sm font-heading">᛭</span>
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent via-gow-gold/40 to-transparent" />
          </div>

          <a 
            href="https://github.com/abdkhaleel?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 py-3 px-6"
          >
            {/* Animated Border Lines */}
            <motion.span 
              className="absolute bottom-0 left-0 h-[2px] bg-gow-muted group-hover:bg-gow-gold transition-colors"
              initial={{ width: "100%" }}
              whileHover={{ width: "100%" }}
            />
            <motion.span 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-gow-red transition-all duration-500"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
            />

            {/* Corner Decorations */}
            <span className="absolute -top-1 -left-1 text-gow-gold/40 text-xs group-hover:text-gow-gold transition-colors">ᛏ</span>
            <span className="absolute -bottom-1 -right-1 text-gow-gold/40 text-xs group-hover:text-gow-gold transition-colors">ᛏ</span>

            {/* Text */}
            <span className="text-gow-muted font-heading uppercase tracking-widest text-sm group-hover:text-gow-gold transition-colors relative z-10">
              View All Repositories
            </span>

            {/* Arrow */}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gow-gold opacity-0 group-hover:opacity-100 transition-opacity"
            >
              →
            </motion.span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

// Enhanced Sub-Component for Quest Cards
function QuestCard({ project, index }: { project: any, index: number }) {
  
  // Theme colors with enhanced gradients
  const getBorderColor = () => {
    switch(project.color) {
      case 'red': return 'border-gow-red/50';
      case 'blue': return 'border-gow-blue/50';
      default: return 'border-gow-gold/50';
    }
  };

  const getGlowColor = () => {
    switch(project.color) {
      case 'red': return 'shadow-gow-red/20';
      case 'blue': return 'shadow-gow-blue/20';
      default: return 'shadow-gow-gold/20';
    }
  };

  const iconBg = 
    project.color === 'red' ? 'bg-gradient-to-br from-gow-red via-red-800 to-red-950' :
    project.color === 'blue' ? 'bg-gradient-to-br from-gow-blue via-blue-800 to-blue-950' :
    'bg-gradient-to-br from-gow-gold via-yellow-700 to-yellow-900';

  const topBarColor = 
    project.color === 'red' ? 'bg-gow-red' : 
    project.color === 'blue' ? 'bg-gow-blue' : 'bg-gow-gold';

  const accentColor = 
    project.color === 'red' ? 'text-gow-red' : 
    project.color === 'blue' ? 'text-gow-blue' : 'text-gow-gold';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-gradient-to-br from-[#13161d] to-[#0e1015] h-full flex flex-col overflow-hidden shadow-2xl"
      style={{ clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)" }}
    >
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none" />

      {/* Giant Watermark Rune - Enhanced */}
      <motion.div 
        animate={{ 
          opacity: [0.04, 0.08, 0.04],
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className={`absolute -right-6 -bottom-10 text-[10rem] font-heading pointer-events-none select-none ${accentColor} opacity-5`}
      >
        {project.rune}
      </motion.div>

      {/* Top Status Bar - Glowing */}
      <div className={`h-[3px] w-full ${topBarColor} relative`}>
        <div className={`absolute inset-0 ${topBarColor} blur-sm`} />
      </div>

      {/* Main Border - Angled */}
      <div className={`absolute inset-0 border-2 border-gow-muted/15 transition-all duration-500 group-hover:${getBorderColor()} group-hover:${getGlowColor()}`}
           style={{ clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)" }} />

      {/* Inner Border */}
      <div className={`absolute inset-[4px] border border-gow-muted/10 transition-colors duration-500 group-hover:border-gow-gold/20`}
           style={{ clipPath: "polygon(0 0, calc(100% - 13px) 0, 100% 13px, 100% 100%, 0 100%)" }} />

      {/* Gradient Lighting on Hover */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${
          project.color === 'red' ? 'from-gow-red/15 via-transparent to-transparent' : 
          project.color === 'blue' ? 'from-gow-blue/15 via-transparent to-transparent' : 
          'from-gow-gold/15 via-transparent to-transparent'
        } opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
      />

      {/* Corner Accent - Animated */}
      <motion.div 
        className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ 
          borderColor: project.color === 'red' ? '#982828' : project.color === 'blue' ? '#688594' : '#c8aa6e',
          clipPath: "polygon(0 0, 100% 0, 100% 100%)"
        }}
      />

      <div className="p-7 relative z-10 flex flex-col flex-grow">
        
        {/* Header: Enhanced Icon & Category */}
        <div className="flex justify-between items-start mb-5">
          {/* Icon Container with Multiple Layers */}
          <div className="relative">
            <div className={`p-3 rounded shadow-2xl border-2 border-white/20 ${iconBg} group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
              {project.icon}
              {/* Inner Glow */}
              <div className={`absolute inset-0 ${iconBg} blur-md opacity-0 group-hover:opacity-60 transition-opacity`} />
            </div>
            {/* Outer Glow Ring */}
            <motion.div 
              className={`absolute inset-0 rounded border-2 opacity-0 group-hover:opacity-100 ${
                project.color === 'red' ? 'border-gow-red' :
                project.color === 'blue' ? 'border-gow-blue' : 'border-gow-gold'
              }`}
              animate={{ scale: [1, 1.3, 1.3], opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          
          {/* Category Badge - Enhanced */}
          <span className="text-[9px] font-bold uppercase tracking-widest text-gow-muted border-2 border-gow-muted/20 px-2.5 py-1.5 rounded bg-gow-bg/50 backdrop-blur-sm group-hover:text-gow-text group-hover:border-gow-gold/40 transition-all">
            {project.category}
          </span>
        </div>

        {/* Title with Hover Effect */}
        <h3 className="text-xl font-heading text-gow-text mb-4 group-hover:text-white transition-colors relative">
          {project.title}
          {/* Small decorative line */}
          <motion.div 
            className={`h-[2px] mt-1 ${topBarColor}`}
            initial={{ width: 0 }}
            whileInView={{ width: "2rem" }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + 0.3 }}
          />
        </h3>

        {/* Description */}
        <p className="text-gow-muted/80 text-sm font-body mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Divider - Animated */}
        <motion.div 
          className={`h-[1px] w-full bg-gow-muted/10 mb-5 group-hover:bg-gradient-to-r group-hover:${
            project.color === 'red' ? 'from-gow-red/50' :
            project.color === 'blue' ? 'from-gow-blue/50' : 'from-gow-gold/50'
          } group-hover:to-transparent transition-all duration-500`}
        />

        {/* Footer: Enhanced Tags & Link */}
        <div className="flex items-center justify-between mt-auto">
          {/* Tags */}
          <div className="flex gap-2">
            {project.tags.slice(0, 2).map((tag: string, i: number) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + 0.4 + (i * 0.1) }}
                className={`text-[10px] font-heading uppercase tracking-wider px-2 py-1 border border-gow-muted/20 rounded-sm ${
                  project.color === 'red' ? 'text-gow-red/70' :
                  project.color === 'blue' ? 'text-gow-blue/70' : 'text-gow-gold/70'
                } group-hover:border-gow-gold/40 transition-colors`}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* GitHub Link - Enhanced */}
          <motion.a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`p-2.5 rounded-full border-2 border-gow-muted/20 hover:border-gow-gold/60 transition-all relative ${accentColor} bg-gow-bg/50 backdrop-blur-sm`}
          >
            <Github className="w-5 h-5 relative z-10" />
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-full ${
              project.color === 'red' ? 'bg-gow-red' :
              project.color === 'blue' ? 'bg-gow-blue' : 'bg-gow-gold'
            } opacity-0 group-hover:opacity-20 blur-md transition-opacity`} />
          </motion.a>
        </div>

      </div>

      {/* Scan Line Effect - Subtle */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent h-full pointer-events-none"
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}