"use client";

import { motion } from "framer-motion";
import { Trophy, Target, Flame, Sword, Shield, Crown, ChevronRight } from "lucide-react";

export default function LeetCode() {
  return (
    <section id="leetcode" className="min-h-screen w-full py-24 px-6 bg-gow-bg relative flex flex-col justify-center overflow-hidden">
      
      {/* --- ENHANCED ATMOSPHERE --- */}
      
      {/* 1. Multiple Giant Background Swords - Dramatic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none z-0">
        <Sword className="w-[900px] h-[900px] text-gow-red rotate-45" style={{ filter: "blur(3px)" }} />
      </div>
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 opacity-[0.03] pointer-events-none select-none z-0"
      >
        <Shield className="w-[400px] h-[400px] text-gow-gold" />
      </motion.div>

      {/* Giant Background Runes */}
      <div className="absolute left-[10%] top-[15%] text-[12rem] text-gow-red/5 font-heading pointer-events-none select-none z-0 animate-pulse">
        ᚦ
      </div>
      <div className="absolute right-[8%] bottom-[20%] text-[15rem] text-gow-gold/5 font-heading pointer-events-none select-none z-0 rotate-12">
        ᛟ
      </div>
      
      {/* 2. Enhanced Lava Glow with Multiple Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(152,40,40,0.12)_0%,transparent_50%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(152,40,40,0.08)_0%,#0c0e12_80%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,170,110,0.06)_0%,transparent_60%)] pointer-events-none z-0" />

      {/* 3. Enhanced Floating Embers */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
         {[...Array(8)].map((_, i) => (
           <motion.div
             key={i}
             initial={{ y: "100vh", x: `${(i + 1) * 12}%`, opacity: 0 }}
             animate={{ 
               y: "-20vh", 
               opacity: [0, 0.6, 0.3, 0],
               scale: [0.8, 1.2, 1, 0.8]
             }}
             transition={{
               duration: 8 + i * 1.5,
               repeat: Infinity,
               delay: i * 1.2,
               ease: "easeInOut"
             }}
             className={`absolute w-2 h-2 rounded-full ${
               i % 3 === 0 ? "bg-gow-red" : i % 3 === 1 ? "bg-orange-500" : "bg-gow-gold"
             }`}
             style={{ filter: "blur(1px)" }}
           />
         ))}
      </div>


      {/* --- CONTENT --- */}
      <div className="max-w-6xl mx-auto w-full z-10 relative">
        
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          {/* Roman Numeral with Decorative Lines */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              className="h-[2px] bg-gradient-to-r from-transparent to-gow-gold/60"
            />
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="text-gow-gold font-heading text-2xl tracking-widest drop-shadow-[0_0_15px_rgba(200,170,110,0.6)]"
            >
              IV.
            </motion.span>
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              className="h-[2px] bg-gradient-to-l from-transparent to-gow-gold/60"
            />
          </div>

          {/* Main Title with Effects */}
          <h2 className="text-5xl md:text-7xl font-heading uppercase tracking-widest relative inline-block mb-4">
            <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-white via-gow-text to-gow-muted"
                  style={{ 
                    filter: "drop-shadow(0 0 25px rgba(200, 170, 110, 0.2)) drop-shadow(0 4px 15px rgba(0, 0, 0, 0.8))"
                  }}>
              Combat Records
            </span>
            {/* Flanking Runes */}
            <motion.span 
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -left-12 top-1/2 -translate-y-1/2 text-3xl text-gow-red/40"
            >
              ᛋ
            </motion.span>
            <motion.span 
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -right-12 top-1/2 -translate-y-1/2 text-3xl text-gow-gold/40"
            >
              ᛏ
            </motion.span>
          </h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gow-muted text-lg font-body uppercase tracking-widest relative"
          >
            <p className="mb-3">Muspelheim Trials & Arena Stats</p>
            {/* Small decorative line */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-gow-red/50 via-gow-gold/50 to-transparent mx-auto"
            />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN: Enhanced Guardian Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative bg-gradient-to-br from-[#13161d] to-[#0f1117] border-2 border-gow-gold/40 p-8 overflow-hidden shadow-2xl"
            style={{ clipPath: "polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 0 100%)" }}
          >
            {/* Inner Border - Animated */}
            <div className="absolute inset-[5px] border border-gow-gold/15 group-hover:border-gow-gold/50 transition-colors duration-500"
                 style={{ clipPath: "polygon(0 0, calc(100% - 23px) 0, 100% 23px, 100% 100%, 0 100%)" }} />
            
            {/* Background Texture & Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-25 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-gow-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Large Background Rune */}
            <motion.div 
              animate={{ opacity: [0.03, 0.06, 0.03], rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-10 -right-10 text-[20rem] text-gow-gold/5 font-heading pointer-events-none select-none"
            >
              ᚹ
            </motion.div>

            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gow-gold/50"
                 style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }} />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gow-gold/30" />

            {/* Rank Header */}
            <div className="relative z-10 flex justify-between items-start mb-10 border-b-2 border-gow-muted/20 pb-6">
              <div>
                <h3 className="text-gow-muted/60 uppercase tracking-[0.25em] text-xs mb-3 font-heading">Current Rank</h3>
                <h2 className="text-4xl md:text-5xl font-heading text-white font-bold flex items-center gap-3 relative">
                   Guardian 
                   <motion.div
                     animate={{ rotate: [0, 10, -10, 0], y: [0, -3, 0] }}
                     transition={{ duration: 4, repeat: Infinity }}
                   >
                     <Crown className="w-9 h-9 text-gow-gold fill-gow-gold/20 drop-shadow-[0_0_15px_rgba(200,170,110,0.6)]" />
                   </motion.div>
                </h2>
              </div>
              <div className="text-right">
                <h3 className="text-gow-muted/60 uppercase tracking-[0.25em] text-xs mb-3 font-heading">Rating</h3>
                <motion.p 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="text-5xl font-heading text-gow-gold drop-shadow-[0_0_20px_rgba(200,170,110,0.4)]"
                >
                  2,175
                </motion.p>
              </div>
            </div>

            {/* Enhanced Global Ranking Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative z-10 mb-10 p-6 bg-gow-bg border-2 border-gow-muted/30 flex items-center justify-between group-hover:border-gow-gold/40 transition-all duration-500 hover:translate-y-[-2px]"
            >
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-gow-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-3 bg-gow-red/15 rounded-full border-2 border-gow-red/30 relative">
                  <Trophy className="text-gow-red w-6 h-6 relative z-10" />
                  {/* Glow effect */}
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-gow-red/30 rounded-full blur-md"
                  />
                </div>
                <div>
                  <span className="block text-gow-text font-heading uppercase text-sm tracking-wide">Global Standing</span>
                  <span className="text-xs text-gow-muted uppercase tracking-wider">World Rank</span>
                </div>
              </div>
              <div className="text-right relative z-10">
                <p className="text-3xl font-bold text-white mb-1">7,846</p>
                <p className="text-xs font-bold text-green-400 uppercase tracking-widest">Top 1.04%</p>
              </div>
            </motion.div>

            {/* Enhanced Badges / Streaks Row */}
            <div className="relative z-10 grid grid-cols-3 gap-4">
              {[
                { label: "200 Days", icon: <Flame className="w-5 h-5" />, color: "text-orange-500", delay: 0.4 },
                { label: "100 Days", icon: <Flame className="w-5 h-5" />, color: "text-orange-400", delay: 0.5 },
                { label: "50 Days", icon: <Flame className="w-5 h-5" />, color: "text-orange-300", delay: 0.6 },
              ].map((badge, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: badge.delay }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group/badge flex flex-col items-center justify-center p-5 bg-gow-bg/70 border-2 border-gow-muted/20 hover:border-gow-red/50 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Glow background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity" />
                  
                  <motion.div 
                    className={`mb-2 ${badge.color} relative z-10`}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      filter: ["drop-shadow(0 0 8px rgba(255,100,0,0.5))", "drop-shadow(0 0 15px rgba(255,100,0,0.8))", "drop-shadow(0 0 8px rgba(255,100,0,0.5))"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {badge.icon}
                  </motion.div>
                  <span className="text-gow-text text-xs font-bold uppercase tracking-wider relative z-10">{badge.label}</span>
                  <span className="text-gow-muted/50 text-[10px] mt-1 uppercase tracking-widest relative z-10">Streak</span>
                </motion.div>
              ))}
            </div>
          </motion.div>


          {/* RIGHT COLUMN: Enhanced Arena Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between gap-6"
          >
            {/* Enhanced Total Solved Header Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#13161d] to-[#0f1117] border-2 border-gow-gold/30 p-8 flex justify-between items-center relative overflow-hidden group hover:border-gow-gold/60 transition-all duration-500"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }}
            >
              {/* Animated background glow */}
              <motion.div 
                className="absolute inset-0 bg-gow-gold/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none" />

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gow-gold/40"
                   style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />

              <div className="relative z-10">
                <h3 className="text-gow-muted uppercase tracking-[0.25em] text-xs mb-2 font-heading">Total Victories</h3>
                <motion.p 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-6xl font-heading text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  671
                </motion.p>
              </div>
              
              {/* Enhanced Circular Progress */}
              <div className="relative z-10 h-24 w-24">
                {/* Outer rotating ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-4 border-gow-muted/20"
                />
                
                {/* Progress arc */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-gow-gold border-r-gow-gold"
                     style={{ transform: "rotate(45deg)" }} />
                
                {/* Center display */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gow-gold font-bold text-2xl drop-shadow-[0_0_10px_rgba(200,170,110,0.6)]">65%</span>
                </div>

                {/* Glow effect */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-gow-gold/20 blur-lg"
                />
              </div>
            </motion.div>

            {/* Enhanced Difficulty Bars */}
            <div className="flex flex-col gap-5 flex-grow">
              
              {/* Easy */}
              <DifficultyBar 
                label="Easy" 
                sub="Warmup Battles"
                count={178} 
                total={915} 
                icon={<Shield className="w-5 h-5" />} 
                color="text-cyan-400" 
                bg="bg-cyan-400"
                borderColor="border-cyan-400/40"
                delay={0.3}
              />

              {/* Medium */}
              <DifficultyBar 
                label="Medium" 
                sub="Standard Combat"
                count={361} 
                total={1960} 
                icon={<Sword className="w-5 h-5" />} 
                color="text-gow-gold" 
                bg="bg-gow-gold"
                borderColor="border-gow-gold/40"
                delay={0.4}
              />

              {/* Hard */}
              <DifficultyBar 
                label="Hard" 
                sub="Boss Fights"
                count={132} 
                total={889} 
                icon={<Target className="w-5 h-5" />} 
                color="text-gow-red" 
                bg="bg-gow-red"
                borderColor="border-gow-red/40"
                delay={0.5}
              />

            </div>
          </motion.div>

        </div>

        {/* Enhanced View Profile Button */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center relative"
        >
             {/* Decorative line above */}
             <div className="flex items-center justify-center gap-4 mb-8">
               <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gow-red/40 to-transparent" />
               <span className="text-gow-red/40 text-sm font-heading">᛭</span>
               <div className="h-[1px] w-24 bg-gradient-to-l from-transparent via-gow-red/40 to-transparent" />
             </div>

             <a 
               href="https://leetcode.com/u/abdkhaleel/" 
               target="_blank"
               rel="noopener noreferrer"
               className="relative inline-flex items-center gap-3 px-10 py-4 bg-transparent overflow-hidden group"
             >
                {/* Outer border - angled */}
                <div className="absolute inset-0 border-2 border-gow-red/50 group-hover:border-gow-red transition-all duration-500"
                     style={{ clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))" }} />
                
                {/* Inner border */}
                <div className="absolute inset-[3px] border border-gow-red/20 group-hover:border-gow-gold/40 transition-all duration-500"
                     style={{ clipPath: "polygon(0 0, calc(100% - 13px) 0, 100% 13px, 100% 100%, 13px 100%, 0 calc(100% - 13px))" }} />

                {/* Animated background fill */}
                <div className="absolute inset-0 bg-gow-red translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />

                {/* Corner runes */}
                <span className="absolute -top-2 -left-2 text-gow-red group-hover:text-gow-gold text-sm transition-colors">ᛏ</span>
                <span className="absolute -bottom-2 -right-2 text-gow-red group-hover:text-gow-gold text-sm transition-colors">ᛏ</span>

                {/* Text */}
                <span className="relative z-10 text-gow-red group-hover:text-white transition-colors uppercase tracking-widest font-heading text-sm">
                  Enter The Arena
                </span>
                
                {/* Arrow */}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <ChevronRight className="w-5 h-5 text-gow-red group-hover:text-white transition-colors" />
                </motion.div>

                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ boxShadow: "inset 0 0 40px rgba(152, 40, 40, 0.3)" }} />
             </a>
        </motion.div>

      </div>
    </section>
  );
}

// Enhanced Sub-component for Difficulty Bars
function DifficultyBar({ label, sub, count, total, icon, color, bg, borderColor, delay }: any) {
  const percentage = (count / total) * 100;
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.02, x: 5 }}
      className={`bg-gradient-to-r from-[#13161d] to-[#0f1117] border-2 ${borderColor} p-5 flex items-center justify-between group hover:border-opacity-100 transition-all duration-300 relative overflow-hidden shadow-lg`}
      style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)" }}
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-15 pointer-events-none" />

      {/* Animated Progress Background */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
        className={`absolute left-0 top-0 bottom-0 ${bg} opacity-[0.08]`}
      />

      <div className="flex items-center gap-4 relative z-10">
        {/* Enhanced Icon Container */}
        <div className={`p-3 rounded bg-gow-bg border-2 border-gow-muted/30 ${color} relative overflow-hidden group-hover:border-opacity-100 group-hover:scale-110 transition-all duration-300`}>
          {icon}
          {/* Icon glow */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`absolute inset-0 ${bg} opacity-20 blur-sm rounded`}
          />
        </div>
        
        <div>
          <h4 className={`${color} font-heading uppercase text-base tracking-wide group-hover:text-white transition-colors`}>{label}</h4>
          <p className="text-gow-muted text-[11px] uppercase tracking-wider">{sub}</p>
        </div>
      </div>
      
      <div className="text-right relative z-10">
        <p className="text-2xl font-bold text-white mb-1 group-hover:text-gow-gold transition-colors">{count}</p>
        <div className="flex items-center justify-end gap-2">
           {/* Mini progress bar */}
           <div className={`h-1.5 w-16 bg-gow-muted/20 rounded-full overflow-hidden border border-gow-muted/30`}>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
                className={`h-full ${bg} relative`}
                style={{ boxShadow: `0 0 10px currentColor` }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </motion.div>
           </div>
           <span className={`text-xs font-heading ${color} font-bold`}>{Math.round(percentage)}%</span>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 opacity-40 group-hover:opacity-100 transition-opacity"
           style={{ 
             borderColor: label === 'Easy' ? '#22d3ee' : label === 'Medium' ? '#c8aa6e' : '#982828',
             clipPath: "polygon(100% 0, 100% 100%, 0 100%)"
           }} />
    </motion.div>
  );
}