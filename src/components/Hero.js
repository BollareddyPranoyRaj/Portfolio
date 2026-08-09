"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-24 pb-16"
    >
      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Availability Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono text-gray-400 tracking-wider mb-8"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-black text-5xl md:text-8xl text-white tracking-tight leading-none mb-6"
          >
            Bollareddy <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-violet-200 to-teal-100">
              Pranoy Raj
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            variants={itemVariants}
            className="text-sm md:text-lg font-mono text-gray-400 tracking-[0.2em] uppercase mb-6 flex items-center gap-3"
          >
            Full Stack Developer
            <span className="text-white/20">|</span>
            Problem Solver
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="w-12 h-[1px] bg-white/20 mb-8" 
          />

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base md:text-xl font-body max-w-xl leading-relaxed mb-10 text-center"
          >
            B.Tech Computer Science student specializing in building scalable web applications, robust backend systems, and crafting responsive user interfaces.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="/BollareddyPranoyRaj-5.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-transparent hover:text-white border border-white px-6 py-3 rounded text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_12px_24px_rgba(255,255,255,0.06)] hover:shadow-[0_12px_32px_rgba(255,255,255,0.12)] hover:-translate-y-0.5"
            >
              <FileText size={16} />
              View Resume ↗
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-transparent text-gray-300 hover:text-white border border-white/20 hover:border-white px-6 py-3 rounded text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            <a
              href="https://github.com/BollareddyPranoyRaj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors duration-200 px-4 py-2 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pranoy-raj-bollareddy-8b62b6279/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors duration-200 px-4 py-2 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[9px] font-mono tracking-[0.2em]">
        <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-white animate-scroll-down" />
        </div>
        SCROLL
      </div>
    </section>
  );
}
