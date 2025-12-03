"use client";

import { motion } from "framer-motion";
import { Server, Database, Brain, Code2, Layers, Cpu } from "lucide-react";

// CATEGORIZED SKILLS
const skillCategories = [
  {
    title: "Core & Frameworks",
    icon: <Code2 className="w-6 h-6 text-gow-gold" />,
    description: "Languages and frameworks forged for stability.",
    theme: "gold", // For gradient logic
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
      
      {/* --- ATMOSPHERE --- */}
      {/* Giant Rotating Runes */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute -right-[300px] top-[20%] text-[40rem] text-gow-muted/5 font-heading pointer-events-none select-none z-0"
      >
        ᚱ
      </motion.div>
      <div className="absolute -left-[100px] bottom-[10%] text-[25rem] text-gow-muted/5 font-heading pointer-events-none select-none z-0 rotate-12">
        ᛟ
      </div>
      
      {/* Fog Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0c0e12_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl w-full z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[2px] w-12 bg-gow-red/50"></span>
            <span className="text-gow-red font-heading text-xl tracking-widest">II.</span>
            <span className="h-[2px] w-12 bg-gow-red/50"></span>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading text-gow-text uppercase tracking-widest shadow-black drop-shadow-lg">
            The Arsenal
          </h2>
          <p className="mt-6 text-gow-muted text-lg font-body max-w-2xl mx-auto border-b border-gow-muted/20 pb-6">
            A vast array of weapons. From heavy backend systems to sharp AI algorithms.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* LeetCode Special Link - Styled as a Prompt */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <a 
            href="https://leetcode.com/u/abdkhaleel/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden border border-gow-muted/30 hover:border-gow-gold transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-gow-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="font-heading uppercase tracking-widest text-sm text-gow-muted group-hover:text-gow-text transition-colors relative z-10 flex items-center gap-2">
              View Combat Records (LeetCode) <span className="text-gow-gold">→</span>
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

// Sub-Component for cleaner code
function SkillCard({ category, index }: { category: any, index: number }) {
  
  // Determine gradient based on theme
  const getBarGradient = () => {
    switch (category.theme) {
      case "gold": return "bg-gradient-to-r from-yellow-900 via-gow-gold to-yellow-200";
      case "red": return "bg-gradient-to-r from-red-900 via-gow-red to-orange-500";
      case "blue": return "bg-gradient-to-r from-blue-900 via-gow-blue to-cyan-300";
      default: return "bg-gow-gold";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group relative p-6 bg-[#11141a] overflow-hidden hover:-translate-y-2 transition-transform duration-500"
    >
      {/* 1. Double Border Effect (Rugged Look) */}
      <div className="absolute inset-0 border border-gow-muted/20 pointer-events-none" />
      <div className="absolute inset-[4px] border border-gow-muted/10 pointer-events-none group-hover:border-gow-gold/30 transition-colors duration-500" />

      {/* 2. Inner Glow on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-b ${
        category.theme === 'red' ? 'from-gow-red/5' : 
        category.theme === 'blue' ? 'from-gow-blue/5' : 'from-gow-gold/5'
      } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* 3. Corner Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gow-muted/40 group-hover:border-gow-gold transition-colors" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gow-muted/40 group-hover:border-gow-gold transition-colors" />

      {/* CONTENT */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6 border-b border-gow-muted/20 pb-4 group-hover:border-gow-gold/30 transition-colors">
          <div className={`p-2 rounded-md bg-gow-bg border border-gow-muted/30 shadow-lg group-hover:border-${category.theme}-500 transition-colors`}>
            {category.icon}
          </div>
          <div>
            <h3 className="text-xl font-heading text-gow-text uppercase tracking-wider group-hover:text-white transition-colors">
              {category.title}
            </h3>
          </div>
        </div>
        
        <p className="text-gow-muted text-sm font-body mb-8 italic opacity-80 min-h-[40px]">
          {category.description}
        </p>

        {/* Skills List */}
        <div className="space-y-6">
          {category.skills.map((skill: any, i: number) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span className="text-gow-text font-body text-sm font-bold tracking-wide">{skill.name}</span>
                <span className={`text-xs font-heading opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-${category.theme === 'gold' ? 'gow-gold' : category.theme === 'red' ? 'gow-red' : 'gow-blue'}`}>
                  {skill.level}%
                </span>
              </div>
              
              {/* XP Bar Background */}
              <div className="h-1.5 w-full bg-black border border-gow-muted/20 rounded-full overflow-hidden">
                {/* XP Bar Fill (Magical Gradient) */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                  className={`h-full shadow-[0_0_10px_currentColor] ${getBarGradient()}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}