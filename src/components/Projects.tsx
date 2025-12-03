"use client";

import { motion } from "framer-motion";
import { Github, Folder, Cpu, Brain, Database, Shield, Link as LinkIcon, Gamepad2, ExternalLink } from "lucide-react";

// YOUR REAL PROJECTS
const projects = [
  {
    title: "RAG QnA System",
    category: "AI & GenAI",
    description: "A Retrieval-Augmented Generation system allowing LLMs to answer questions using private data context.",
    tags: ["LLM", "Python", "Vector DB"],
    github: "https://github.com/abdkhaleel/RAG-QnA-System",
    icon: <Brain className="w-5 h-5 text-white" />,
    color: "blue", // Ice
    rune: "ᛗ" // Mannaz (Man/Mind)
  },
  {
    title: "GameBoy Emulator",
    category: "Systems Engineering",
    description: "Low-level console emulation. Handles CPU opcode interpretation, memory mapping, and interrupts.",
    tags: ["C", "CMake", "Emulation", "Arch"],
    github: "https://github.com/abdkhaleel/GameBoy-Emulator",
    icon: <Cpu className="w-5 h-5 text-white" />,
    color: "red", // Fire
    rune: "ᚦ" // Thurisaz (Giant/Force)
  },
  {
    title: "Blockchain Voting",
    category: "Web3 & Security",
    description: "Decentralized voting platform ensuring immutable elections via smart contracts.",
    tags: ["Java", "JWT", "Hashing"],
    github: "https://github.com/abdkhaleel/blockchain-voting-application",
    icon: <Shield className="w-5 h-5 text-white" />,
    color: "gold", // Light
    rune: "ᛟ" // Othala (Heritage)
  },
  {
    title: "NoSQL DBMS Impl",
    category: "Database Internals",
    description: "Custom NoSQL engine built from scratch. Implements storage, indexing, and query parsing.",
    tags: ["Java", "DSA"],
    github: "https://github.com/abdkhaleel/no-sql-dbms-impl",
    icon: <Database className="w-5 h-5 text-white" />,
    color: "red",
    rune: "ᚲ" // Kaunan (Torch)
  },
  {
    title: "Image Denoiser",
    category: "Computer Vision",
    description: "Deep learning model to remove noise and grain from images using convolutional networks.",
    tags: ["Math", "Python", "CV"],
    github: "https://github.com/abdkhaleel/Image-Denoiser",
    icon: <Folder className="w-5 h-5 text-white" />,
    color: "blue",
    rune: "ᛞ" // Dagaz (Day/Light)
  },
  {
    title: "Reddit Analysis",
    category: "Data Science",
    description: "Analytical tool scraping Reddit to identify emerging trends and sentiment shifts.",
    tags: ["Apache Beam", "Spacy"],
    github: "https://github.com/abdkhaleel/reddit-trend-analysis",
    icon: <Folder className="w-5 h-5 text-white" />,
    color: "blue",
    rune: "ᚱ" // Raido (Journey)
  },
  {
    title: "Tic-Tac-Toe AI",
    category: "Game AI",
    description: "Unbeatable game agent utilizing the Minimax algorithm and recursive state search.",
    tags: ["Angular", "Game Theory", "Minimax"],
    github: "https://github.com/abdkhaleel/tic-tac-toe-wth-ai",
    icon: <Gamepad2 className="w-5 h-5 text-white" />,
    color: "gold",
    rune: "ᚷ" // Gebo (Gift)
  },
  {
    title: "shrtlnk",
    category: "Web Utility",
    description: "Robust URL shortening service with redirection logic, tracking, and efficient retrieval.",
    tags: ["Redis", "Kafka"],
    github: "https://github.com/abdkhaleel/shrtlnk",
    icon: <LinkIcon className="w-5 h-5 text-white" />,
    color: "gold",
    rune: "ᛚ" // Laguz (Water)
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen w-full py-24 px-6 bg-gow-bg relative overflow-hidden">
      
      {/* Atmosphere: Faint Map Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-gow-bg via-transparent to-gow-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4 opacity-70">
            <div className="w-12 h-[1px] bg-gow-muted" />
            <div className="w-2 h-2 rotate-45 border border-gow-gold bg-gow-bg" />
            <div className="w-12 h-[1px] bg-gow-muted" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading text-gow-text mb-4">
            <span className="text-gow-red">III.</span> The Labors
          </h2>
          <p className="text-gow-muted text-lg font-body max-w-2xl mx-auto">
            Feats of engineering completed in the digital realm.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <QuestCard key={index} project={project} index={index} />
          ))}
        </div>
        
        {/* Footer Link */}
        <div className="mt-24 text-center">
             <a href="https://github.com/abdkhaleel?tab=repositories" target="_blank" className="relative group inline-block py-2">
                <span className="text-gow-muted font-heading uppercase tracking-widest text-sm group-hover:text-gow-gold transition-colors">View All Repositories</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gow-muted group-hover:bg-gow-gold transition-colors" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gow-red group-hover:w-full transition-all duration-500" />
             </a>
        </div>

      </div>
    </section>
  );
}

// Sub-Component for the Quest Card
function QuestCard({ project, index }: { project: any, index: number }) {
  
  // Theme Logic
  const themeColor = 
    project.color === 'red' ? 'border-gow-red shadow-gow-red/20' : 
    project.color === 'blue' ? 'border-gow-blue shadow-gow-blue/20' : 
    'border-gow-gold shadow-gow-gold/20';

  const iconBg = 
    project.color === 'red' ? 'bg-gradient-to-br from-gow-red to-red-900' :
    project.color === 'blue' ? 'bg-gradient-to-br from-gow-blue to-blue-900' :
    'bg-gradient-to-br from-gow-gold to-yellow-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-[#11141a] h-full flex flex-col overflow-hidden"
    >
      {/* 1. Giant Watermark Rune (Faint background) */}
      <div className="absolute -right-4 -bottom-8 text-[8rem] text-gow-muted/5 font-heading pointer-events-none group-hover:text-gow-muted/10 transition-colors duration-500">
        {project.rune}
      </div>

      {/* 2. Top colored border (Status Bar) */}
      <div className={`h-[2px] w-full ${
        project.color === 'red' ? 'bg-gow-red' : 
        project.color === 'blue' ? 'bg-gow-blue' : 'bg-gow-gold'
      }`} />

      {/* 3. Main Border (Appears on Hover) */}
      <div className={`absolute inset-0 border border-gow-muted/20 transition-colors duration-300 group-hover:border-opacity-100 group-hover:${
         project.color === 'red' ? 'border-gow-red/50' : 
         project.color === 'blue' ? 'border-gow-blue/50' : 'border-gow-gold/50'
      }`} />

      {/* 4. Lighting/Sheen Effect on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-b ${
         project.color === 'red' ? 'from-gow-red/10' : 
         project.color === 'blue' ? 'from-gow-blue/10' : 'from-gow-gold/10'
      } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      <div className="p-6 relative z-10 flex flex-col flex-grow">
        
        {/* Header: Icon & Category */}
        <div className="flex justify-between items-start mb-4">
          {/* Gemstone Icon Container */}
          <div className={`p-2 rounded shadow-lg border border-white/10 ${iconBg} group-hover:scale-110 transition-transform duration-300`}>
            {project.icon}
          </div>
          
          <span className="text-[10px] font-bold uppercase tracking-widest text-gow-muted border border-gow-muted/20 px-2 py-1 rounded">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading text-gow-text mb-3 group-hover:text-white transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gow-muted/80 text-sm font-body mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gow-muted/10 mb-4 group-hover:bg-gow-muted/30 transition-colors" />

        {/* Footer: Tags & Link */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex gap-2">
            {project.tags.slice(0, 2).map((tag: string, i: number) => (
              <span key={i} className="text-[10px] text-gow-muted font-heading uppercase">
                {tag}
              </span>
            ))}
          </div>

          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-2 rounded-full hover:bg-white/10 transition-colors ${
                project.color === 'red' ? 'text-gow-red' : 
                project.color === 'blue' ? 'text-gow-blue' : 'text-gow-gold'
            }`}
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

      </div>
    </motion.div>
  );
}