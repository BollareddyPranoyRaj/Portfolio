"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Trophy, Cpu, Star } from "lucide-react";

export default function About() {
  const stats = [
    { number: "1700+", label: "Problems Solved", icon: <Trophy size={16} className="text-indigo-400" /> },
    { number: "5", label: "Projects Built", icon: <Cpu size={16} className="text-teal-400" /> },
    { number: "8.0", label: "Current GPA", icon: <Star size={16} className="text-violet-400" /> },
  ];

  const education = [
    {
      degree: "B.Tech Computer Science & Engineering",
      institution: "Aditya University",
      period: "2023 – Present",
      grade: "8/10 CGPA",
    },
    {
      degree: "Intermediate MPC",
      institution: "Sasi New Gen Junior College",
      period: "2021 – 2023",
      grade: "97.7%",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block mb-2">
            01 — About
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
            Who I Am
          </h2>
          <div className="w-12 h-[2px] bg-white/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image wrapper */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-2 shadow-2xl">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/Pranoy_Linkedin.png"
                  alt="Bollareddy Pranoy Raj"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md border border-white/10 text-white text-xs font-mono px-4 py-2 rounded-full whitespace-nowrap shadow-lg">
                Full Stack Developer
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Stats */}
          <div className="md:col-span-7 space-y-8">
            <p className="text-gray-400 font-body text-base md:text-lg leading-relaxed">
              I am a B.Tech Computer Science student at Aditya University who enjoys turning complex problems into clean, high-performance web products. I work across Java, Python, and modern JavaScript stacks, constantly refining my DSA skills and competitive programming strategies to build optimal solutions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-xl p-4 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/[0.04]"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mb-2">
                    {stat.icon}
                  </div>
                  <span className="font-display font-bold text-lg md:text-2xl text-white block">
                    {stat.number}
                  </span>
                  <span className="font-mono text-[9px] md:text-xs text-gray-500 uppercase tracking-wide block mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Education Timeline */}
            <div className="space-y-4">
              <h3 className="text-white text-sm font-mono tracking-wider uppercase flex items-center gap-2">
                <GraduationCap size={16} className="text-indigo-400" />
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 transition-all duration-300"
                  >
                    <div>
                      <h4 className="text-white text-sm md:text-base font-semibold font-body">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-500 text-xs md:text-sm mt-1">
                        {edu.institution} &nbsp;·&nbsp; {edu.period}
                      </p>
                    </div>
                    <div className="self-start sm:self-center font-mono text-xs font-semibold text-white bg-white/5 border border-white/10 px-3 py-1 rounded-md">
                      {edu.grade}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
