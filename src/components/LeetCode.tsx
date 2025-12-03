"use client";

import { motion } from "framer-motion";
import { Trophy, Target, Flame, Sword, Shield, Crown, ChevronRight } from "lucide-react";

export default function LeetCode() {
  return (
    <section id="leetcode" className="min-h-screen w-full py-24 px-6 bg-gow-bg relative flex flex-col justify-center overflow-hidden">
      
      {/* --- ATMOSPHERE --- */}
      {/* 1. Giant Background Crossed Swords Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none z-0">
        <Sword className="w-[800px] h-[800px] text-gow-red rotate-45" />
      </div>
      
      {/* 2. Lava Glow / Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(152,40,40,0.08)_0%,#0c0e12_80%)] pointer-events-none z-0" />

      {/* 3. Floating Embers (Simple CSS Animation) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute bottom-0 left-[20%] w-2 h-2 bg-gow-red rounded-full opacity-50 animate-float-slow" />
         <div className="absolute bottom-0 left-[50%] w-3 h-3 bg-orange-500 rounded-full opacity-30 animate-float-medium" />
         <div className="absolute bottom-0 left-[80%] w-2 h-2 bg-gow-gold rounded-full opacity-40 animate-float-fast" />
      </div>


      {/* --- CONTENT --- */}
      <div className="max-w-6xl mx-auto w-full z-10 relative">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[2px] w-12 bg-gow-gold/50"></span>
            <span className="text-gow-gold font-heading text-xl tracking-widest">IV.</span>
            <span className="h-[2px] w-12 bg-gow-gold/50"></span>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading text-gow-text uppercase tracking-widest drop-shadow-lg">
            Combat Records
          </h2>
          <p className="mt-4 text-gow-muted text-lg font-body uppercase tracking-widest">
            Muspelheim Trials & Arena Stats
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN: The Guardian Card (Hero Stats) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#11141a] border border-gow-gold/30 p-8 overflow-hidden"
          >
            {/* Inner Gold Border (Pulsing) */}
            <div className="absolute inset-[3px] border border-gow-gold/10 group-hover:border-gow-gold/40 transition-colors duration-500" />
            
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-20 pointer-events-none" />

            {/* Rank Header */}
            <div className="relative z-10 flex justify-between items-start mb-10 border-b border-gow-muted/20 pb-6">
              <div>
                <h3 className="text-gow-muted/60 uppercase tracking-[0.2em] text-xs mb-2">Current Rank</h3>
                <h2 className="text-4xl md:text-5xl font-heading text-white font-bold flex items-center gap-3 drop-shadow-[0_0_10px_rgba(200,170,110,0.3)]">
                   Guardian <Crown className="w-8 h-8 text-gow-gold fill-gow-gold/10" />
                </h2>
              </div>
              <div className="text-right">
                <h3 className="text-gow-muted/60 uppercase tracking-[0.2em] text-xs mb-2">Rating</h3>
                <p className="text-4xl font-heading text-gow-gold">2,175</p>
              </div>
            </div>

            {/* Global Ranking Box */}
            <div className="relative z-10 mb-10 p-5 bg-gow-bg border border-gow-muted/30 flex items-center justify-between group-hover:border-gow-gold/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gow-red/10 rounded-full border border-gow-red/20">
                  <Trophy className="text-gow-red w-6 h-6" />
                </div>
                <div>
                  <span className="block text-gow-text font-heading uppercase text-sm tracking-wide">Global Standing</span>
                  <span className="text-xs text-gow-muted">World Rank</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">7,846</p>
                <p className="text-xs font-bold text-green-400">Top 1.04%</p>
              </div>
            </div>

            {/* Badges / Streaks Row */}
            <div className="relative z-10 grid grid-cols-3 gap-4">
              {[
                { label: "200 Days", icon: <Flame className="w-5 h-5" />, color: "text-orange-500" },
                { label: "100 Days", icon: <Flame className="w-5 h-5" />, color: "text-orange-400" },
                { label: "50 Days", icon: <Flame className="w-5 h-5" />, color: "text-orange-300" },
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4 bg-gow-bg/50 border border-gow-muted/20 hover:border-gow-red/50 transition-colors group/badge">
                  <div className={`mb-2 ${badge.color} group-hover/badge:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,100,0,0.5)]`}>
                    {badge.icon}
                  </div>
                  <span className="text-gow-text text-xs font-bold uppercase tracking-wider">{badge.label}</span>
                  <span className="text-gow-muted/50 text-[10px] mt-1">Streak</span>
                </div>
              ))}
            </div>
          </motion.div>


          {/* RIGHT COLUMN: The Arena Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-6"
          >
            {/* Total Solved Header Block */}
            <div className="bg-[#11141a] border border-gow-gold/20 p-8 flex justify-between items-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gow-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-gow-muted uppercase tracking-[0.2em] text-xs mb-1">Total Victories</h3>
                <p className="text-5xl font-heading text-white">668</p>
              </div>
              
              {/* Circular Progress (Visual Representation) */}
              <div className="relative z-10 h-20 w-20 rounded-full border-4 border-gow-muted/20 flex items-center justify-center">
                 <div className="absolute inset-0 border-4 border-gow-gold border-t-transparent border-l-transparent rounded-full rotate-45" />
                 <span className="text-gow-gold font-bold text-xl">65%</span>
              </div>
            </div>

            {/* Difficulty Bars */}
            <div className="flex flex-col gap-4 flex-grow">
              
              {/* Easy */}
              <DifficultyBar 
                label="Easy" 
                sub="Warmup Battles"
                count={177} 
                total={915} 
                icon={<Shield className="w-4 h-4" />} 
                color="text-cyan-400" 
                bg="bg-cyan-400"
                borderColor="border-cyan-400/30"
              />

              {/* Medium */}
              <DifficultyBar 
                label="Medium" 
                sub="Standard Combat"
                count={360} 
                total={1960} 
                icon={<Sword className="w-4 h-4" />} 
                color="text-gow-gold" 
                bg="bg-gow-gold"
                borderColor="border-gow-gold/30"
              />

              {/* Hard */}
              <DifficultyBar 
                label="Hard" 
                sub="Boss Fights"
                count={131} 
                total={888} 
                icon={<Target className="w-4 h-4" />} 
                color="text-gow-red" 
                bg="bg-gow-red"
                borderColor="border-gow-red/30"
              />

            </div>
          </motion.div>

        </div>

        {/* View Profile Button */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
        >
             <a href="https://leetcode.com/u/abdkhaleel/" target="_blank" className="relative inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-gow-red/50 text-gow-red hover:bg-gow-red hover:text-white transition-all duration-300 uppercase tracking-widest font-heading text-sm group">
                Enter The Arena
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </a>
        </motion.div>

      </div>
    </section>
  );
}

// Sub-component for the Difficulty Bars
function DifficultyBar({ label, sub, count, total, icon, color, bg, borderColor }: any) {
  const percentage = (count / total) * 100;
  
  return (
    <div className={`bg-[#11141a] border ${borderColor} p-4 flex items-center justify-between group hover:bg-white/5 transition-colors relative overflow-hidden`}>
      {/* Progress Bar Background fill (opacity low) */}
      <div className={`absolute left-0 top-0 bottom-0 ${bg} opacity-[0.03] w-[${percentage}%] transition-all duration-1000`} style={{ width: `${percentage}%` }} />

      <div className="flex items-center gap-4 relative z-10">
        <div className={`p-2 rounded bg-gow-bg border border-gow-muted/20 ${color}`}>
          {icon}
        </div>
        <div>
          <h4 className={`${color} font-heading uppercase text-sm tracking-wide`}>{label}</h4>
          <p className="text-gow-muted text-[10px] uppercase tracking-wider">{sub}</p>
        </div>
      </div>
      
      <div className="text-right relative z-10">
        <p className="text-xl font-bold text-white">{count}</p>
        <div className="flex items-center justify-end gap-1">
           <div className={`h-1 w-12 bg-gow-muted/20 rounded-full overflow-hidden`}>
              <div className={`h-full ${bg}`} style={{ width: `${percentage}%` }} />
           </div>
        </div>
      </div>
    </div>
  );
}