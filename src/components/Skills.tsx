"use client";

import { motion } from "framer-motion";
import { Server, Database, Brain, Code2, Layers, Cpu } from "lucide-react";

// CATEGORIZED SKILLS
const skillCategories = [
  {
    title: "Core & Frameworks", // The Foundation
    icon: <Code2 className="w-6 h-6 text-gow-gold" />,
    description: "Languages and frameworks forged for stability.",
    skills: [
      { name: "Java / SpringBoot", level: 90 },
      { name: "C / C++", level: 85 },
      { name: "Python / Django", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "PrimeFaces", level: 75 },
    ],
  },
  {
    title: "Data & Infrastructure", // Heavy Lifting
    icon: <Server className="w-6 h-6 text-gow-red" />,
    description: "Scalable architecture to hold the weight of the world.",
    skills: [
      { name: "SQL (MySQL, Postgres)", level: 90 },
      { name: "NoSQL (Mongo, Cassandra)", level: 85 },
      { name: "Kafka / Redis", level: 80 },
      { name: "Docker / Git", level: 85 },
      { name: "Apache Beam", level: 70 },
    ],
  },
  {
    title: "Intelligence (AI/ML)", // Runic Magic
    icon: <Brain className="w-6 h-6 text-gow-blue" />,
    description: "Algorithms that see and learn like Mimir.",
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
    <section id="skills" className="min-h-screen w-full py-24 px-6 flex flex-col items-center justify-center bg-gow-bg relative">
      
      {/* Background Decorative Runes */}
      <div className="absolute top-20 right-10 text-[10rem] text-gow-muted/5 font-heading pointer-events-none select-none">Ω</div>
      <div className="absolute bottom-20 left-10 text-[10rem] text-gow-muted/5 font-heading pointer-events-none select-none">ᚱ</div>

      <div className="max-w-7xl w-full z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-gow-text mb-4">
            <span className="text-gow-red">II.</span> The Arsenal
          </h2>
          <div className="h-[2px] w-24 bg-gow-gold mx-auto" />
          <p className="mt-4 text-gow-muted text-lg font-body max-w-2xl mx-auto">
            A vast array of weapons. From heavy backend systems to sharp AI algorithms.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gow-card/40 border border-gow-muted/20 p-6 relative group hover:border-gow-gold transition-colors duration-300 flex flex-col"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gow-muted group-hover:border-gow-gold transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gow-muted group-hover:border-gow-gold transition-colors" />

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 border-b border-gow-muted/20 pb-4">
                {category.icon}
                <div>
                    <h3 className="text-xl font-heading text-gow-text uppercase tracking-wider">
                    {category.title}
                    </h3>
                </div>
              </div>
              
              <p className="text-gow-muted/70 text-sm font-body mb-6 italic">
                {category.description}
              </p>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gow-text font-body text-sm font-bold tracking-wide">{skill.name}</span>
                    </div>
                    {/* XP Bar Background */}
                    <div className="h-1.5 w-full bg-gow-bg border border-gow-muted/30 rounded-full overflow-hidden">
                      {/* XP Bar Fill */}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                        className={`h-full ${
                          index === 0 ? "bg-gow-gold" : 
                          index === 1 ? "bg-gow-red" : "bg-gow-blue"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        {/* LeetCode Special Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://leetcode.com/u/abdkhaleel/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center gap-2"
          >
            <span className="text-gow-muted group-hover:text-gow-gold transition-colors font-heading uppercase tracking-widest text-sm border-b border-transparent group-hover:border-gow-gold pb-1">
              View Combat Records (LeetCode)
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}