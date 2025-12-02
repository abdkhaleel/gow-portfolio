"use client";

import { motion } from "framer-motion";
import { Github, Folder, Cpu, Brain, Database, Shield, Link as LinkIcon, Gamepad2 } from "lucide-react";

// YOUR REAL PROJECTS
const projects = [
  {
    title: "RAG QnA System",
    category: "AI & GenAI",
    description: "A Retrieval-Augmented Generation system that allows LLMs to answer questions based on custom private data. Enhances AI accuracy with context.",
    tags: ["LLM", "Python", "Vector DB", "LangChain"],
    github: "https://github.com/abdkhaleel/RAG-QnA-System",
    icon: <Brain className="w-6 h-6 text-gow-blue" />,
    color: "blue"
  },
  {
    title: "GameBoy Emulator",
    category: "Systems Engineering",
    description: "A low-level emulation of the classic console. Handles CPU opcode interpretation, memory mapping, and hardware interrupt simulation.",
    tags: ["C++", "Emulation", "Computer Arch", "Low-Level"],
    github: "https://github.com/abdkhaleel/GameBoy-Emulator",
    icon: <Cpu className="w-6 h-6 text-gow-red" />,
    color: "red"
  },
  {
    title: "Blockchain Voting App",
    category: "Web3 & Security",
    description: "A decentralized voting platform ensuring immutable and transparent elections. Built with smart contracts to prevent tampering.",
    tags: ["Blockchain", "Solidity", "Web3", "Cryptography"],
    github: "https://github.com/abdkhaleel/blockchain-voting-application",
    icon: <Shield className="w-6 h-6 text-gow-gold" />,
    color: "gold"
  },
  {
    title: "NoSQL DBMS Implementation",
    category: "Database Internals",
    description: "A custom-built NoSQL database engine from scratch. Implements storage, indexing, and query parsing mechanisms.",
    tags: ["Database Design", "Data Structures", "Storage", "C++/Java"],
    github: "https://github.com/abdkhaleel/no-sql-dbms-impl",
    icon: <Database className="w-6 h-6 text-gow-red" />,
    color: "red"
  },
  {
    title: "Image Denoiser",
    category: "Computer Vision",
    description: "A deep learning model designed to remove noise and grain from images, restoring visual clarity using convolutional networks.",
    tags: ["Deep Learning", "TensorFlow", "Computer Vision", "Python"],
    github: "https://github.com/abdkhaleel/Image-Denoiser",
    icon: <Folder className="w-6 h-6 text-gow-blue" />,
    color: "blue"
  },
  {
    title: "Reddit Trend Analysis",
    category: "Data Science",
    description: "An analytical tool that scrapes and processes Reddit data to identify emerging trends and sentiment shifts in communities.",
    tags: ["Pandas", "Data Mining", "APIs", "Visualization"],
    github: "https://github.com/abdkhaleel/reddit-trend-analysis",
    icon: <Folder className="w-6 h-6 text-gow-blue" />,
    color: "blue"
  },
  {
    title: "Tic-Tac-Toe AI",
    category: "Game AI",
    description: "An unbeatable game agent utilizing the Minimax algorithm. Demonstrates recursive decision-making and state-space search.",
    tags: ["AI", "Algorithms", "Game Dev", "Logic"],
    github: "https://github.com/abdkhaleel/tic-tac-toe-wth-ai",
    icon: <Gamepad2 className="w-6 h-6 text-gow-gold" />,
    color: "gold"
  },
  {
    title: "shrtlnk",
    category: "Web Utility",
    description: "A robust URL shortening service. Handles redirection logic, link tracking, and database mapping for efficient retrieval.",
    tags: ["Full Stack", "Web Dev", "API", "Database"],
    github: "https://github.com/abdkhaleel/shrtlnk",
    icon: <LinkIcon className="w-6 h-6 text-gow-gold" />,
    color: "gold"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen w-full py-24 px-6 bg-gow-bg relative">
      
      {/* Background Separator Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gow-muted/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-gow-text mb-4 flex items-center gap-3">
            <span className="text-gow-red">III.</span> Labors
          </h2>
          <p className="text-gow-muted text-lg font-body border-l-2 border-gow-gold pl-4 max-w-2xl">
            Eight great feats of engineering. From the depths of system memory to the peaks of Artificial Intelligence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-gow-card/60 border border-gow-muted/20 hover:border-gow-gold transition-all duration-300 flex flex-col h-full hover:-translate-y-2"
            >
              
              {/* Top Colored Bar based on category type */}
              <div className={`h-1 w-full ${
                project.color === "red" ? "bg-gow-red" : 
                project.color === "blue" ? "bg-gow-blue" : "bg-gow-gold"
              }`} />

              <div className="p-6 flex flex-col flex-grow">
                
                {/* Title & Icon */}
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-gow-bg p-2 rounded-lg border border-gow-muted/30">
                    {project.icon}
                  </div>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gow-muted hover:text-gow-text transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-lg font-heading text-gow-text group-hover:text-gow-gold transition-colors mb-2">
                  {project.title}
                </h3>
                
                <p className="text-xs text-gow-muted font-bold uppercase tracking-widest mb-3">
                  {project.category}
                </p>

                <p className="text-gow-muted/80 text-sm font-body mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-heading text-gow-text bg-gow-muted/10 px-2 py-1 rounded border border-gow-muted/20">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer Link */}
        <div className="mt-16 text-center">
             <a href="https://github.com/abdkhaleel?tab=repositories" target="_blank" className="text-gow-muted hover:text-gow-gold font-heading border-b border-gow-muted hover:border-gow-gold pb-1 transition-all">
                View All Repositories →
             </a>
        </div>

      </div>
    </section>
  );
}