"use client";

import { motion } from "framer-motion";
import { Trophy, Target, Flame, Sword, Shield, Crown } from "lucide-react";

export default function LeetCode() {
  return (
    <section id="leetcode" className="min-h-screen w-full py-24 px-6 bg-gow-bg relative flex flex-col justify-center">
      
      {/* Background Decorative Runes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gow-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-gow-text mb-4 flex items-center justify-center gap-3">
            <span className="text-gow-red">IV.</span> Combat Records
          </h2>
          <div className="h-[2px] w-24 bg-gow-gold mx-auto mb-4" />
          <p className="text-gow-muted text-lg font-body uppercase tracking-widest">
            Muspelheim Trials & Arena Stats
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN: The Guardian Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gow-card to-gow-bg border-2 border-gow-gold/30 p-8 relative overflow-hidden group hover:border-gow-gold transition-colors duration-500"
          >
            {/* Guardian Badge Glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-gow-gold/10 blur-[80px] rounded-full" />

            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-gow-muted uppercase tracking-widest text-sm mb-1">Current Rank</h3>
                <h2 className="text-4xl md:text-5xl font-heading text-gow-gold font-bold flex items-center gap-3">
                   Guardian <Crown className="w-8 h-8 text-gow-gold fill-gow-gold/20" />
                </h2>
              </div>
              <div className="text-right">
                <h3 className="text-gow-muted uppercase tracking-widest text-sm mb-1">Rating</h3>
                <p className="text-3xl font-heading text-gow-text">2,175</p>
              </div>
            </div>

            {/* Global Rank Stat */}
            <div className="mb-8 p-4 bg-gow-bg/50 border border-gow-muted/20 rounded flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Trophy className="text-gow-red w-6 h-6" />
                <span className="text-gow-text font-heading uppercase">Global Rank</span>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gow-text">7,846</p>
                <p className="text-xs text-gow-green-400 text-gow-gold">Top 1.04%</p>
              </div>
            </div>

            {/* Badges / Streaks */}
            <div className="grid grid-cols-3 gap-4 mt-auto">
              {[
                { label: "200 Days", icon: <Flame className="w-5 h-5" />, year: "2025" },
                { label: "100 Days", icon: <Flame className="w-5 h-5" />, year: "2025" },
                { label: "50 Days", icon: <Flame className="w-5 h-5" />, year: "2025" },
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-3 bg-gow-card border border-gow-muted/30 text-center hover:bg-gow-gold/10 transition-colors">
                  <div className="text-gow-red mb-2">{badge.icon}</div>
                  <span className="text-gow-text text-xs font-bold">{badge.label}</span>
                  <span className="text-gow-muted text-[10px]">{badge.year}</span>
                </div>
              ))}
            </div>
          </motion.div>


          {/* RIGHT COLUMN: The Solved Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-6"
          >
            {/* Total Solved Header */}
            <div className="bg-gow-card border border-gow-muted/20 p-6 flex justify-between items-center">
              <div>
                <h3 className="text-gow-muted uppercase tracking-widest text-xs">Total Solved</h3>
                <p className="text-4xl font-heading text-gow-text">668</p>
              </div>
              <div className="h-12 w-12 rounded-full border-2 border-gow-gold flex items-center justify-center text-gow-gold font-bold text-sm">
                65%
              </div>
            </div>

            {/* Problems Grid */}
            <div className="grid grid-rows-3 gap-4 flex-grow">
              
              {/* Easy */}
              <div className="bg-gow-card/50 border border-gow-muted/20 p-5 flex items-center justify-between group hover:border-gow-blue transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gow-blue/10 rounded">
                    <Shield className="w-5 h-5 text-gow-blue" />
                  </div>
                  <div>
                    <h4 className="text-gow-blue font-heading uppercase text-sm">Easy</h4>
                    <p className="text-gow-muted text-xs">Warmup Battles</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gow-text">177</p>
                  <p className="text-xs text-gow-muted">/ 915</p>
                </div>
              </div>

              {/* Medium */}
              <div className="bg-gow-card/50 border border-gow-muted/20 p-5 flex items-center justify-between group hover:border-gow-gold transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gow-gold/10 rounded">
                    <Sword className="w-5 h-5 text-gow-gold" />
                  </div>
                  <div>
                    <h4 className="text-gow-gold font-heading uppercase text-sm">Medium</h4>
                    <p className="text-gow-muted text-xs">Standard Combat</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gow-text">360</p>
                  <p className="text-xs text-gow-muted">/ 1960</p>
                </div>
              </div>

              {/* Hard */}
              <div className="bg-gow-card/50 border border-gow-muted/20 p-5 flex items-center justify-between group hover:border-gow-red transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gow-red/10 rounded">
                    <Target className="w-5 h-5 text-gow-red" />
                  </div>
                  <div>
                    <h4 className="text-gow-red font-heading uppercase text-sm">Hard</h4>
                    <p className="text-gow-muted text-xs">Boss Fights</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gow-text">131</p>
                  <p className="text-xs text-gow-muted">/ 888</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* View Profile Link */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
        >
             <a href="https://leetcode.com/u/abdkhaleel/" target="_blank" className="text-gow-muted hover:text-gow-red font-heading border-b border-gow-muted hover:border-gow-red pb-1 transition-all">
                Enter The Arena (View Profile) →
             </a>
        </motion.div>

      </div>
    </section>
  );
}