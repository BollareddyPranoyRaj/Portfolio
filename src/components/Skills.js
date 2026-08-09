"use client";
import React from "react";
import { Terminal, Layout, Database, Code, Cpu } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frameworks",
      icon: <Layout size={18} className="text-teal-400" />,
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "React Native", "FastAPI", "Streamlit", "Vite"],
      color: "group-hover:border-teal-500/20 group-hover:bg-teal-500/[0.01]",
      tagColor: "hover:border-teal-500/30 hover:bg-teal-500/[0.03] hover:text-teal-300",
    },
    {
      title: "Programming Languages",
      icon: <Terminal size={18} className="text-indigo-400" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "C", "C++", "HTML", "CSS"],
      color: "group-hover:border-indigo-500/20 group-hover:bg-indigo-500/[0.01]",
      tagColor: "hover:border-indigo-500/30 hover:bg-indigo-500/[0.03] hover:text-indigo-300",
    },
    {
      title: "Cloud & Databases",
      icon: <Database size={18} className="text-violet-400" />,
      skills: ["AWS (EC2, S3)", "MongoDB (Certified)", "MySQL"],
      color: "group-hover:border-violet-500/20 group-hover:bg-violet-500/[0.01]",
      tagColor: "hover:border-violet-500/30 hover:bg-violet-500/[0.03] hover:text-violet-300",
    },
    {
      title: "DevOps",
      icon: <Cpu size={18} className="text-emerald-400" />,
      skills: ["Docker", "NGINX", "GitHub Actions", "CI/CD pipelines", "Linux"],
      color: "group-hover:border-emerald-500/20 group-hover:bg-emerald-500/[0.01]",
      tagColor: "hover:border-emerald-500/30 hover:bg-emerald-500/[0.03] hover:text-emerald-300",
    },
    {
      title: "Core Concepts",
      icon: <Code size={18} className="text-pink-400" />,
      skills: ["REST APIs", "JWT Authentication", "OAuth", "WebSockets", "System Design", "OOP", "Data Structures & Algorithms"],
      color: "group-hover:border-pink-500/20 group-hover:bg-pink-500/[0.01]",
      tagColor: "hover:border-pink-500/30 hover:bg-pink-500/[0.03] hover:text-pink-300",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block mb-2">
            02 — Skills
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
            Technical Arsenal
          </h2>
          <div className="w-12 h-[2px] bg-white/20" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className={`group flex flex-col justify-between bg-white/[0.01] border border-white/5 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] ${cat.color} ${
                index === 4 ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="text-white text-sm font-semibold tracking-wide font-body">
                    {cat.title}
                  </h3>
                </div>

                {/* Tags container */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`font-mono text-[10px] md:text-xs text-gray-400 bg-white/5 border border-white/5 px-3 py-1 rounded-full transition-all duration-300 ${cat.tagColor}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
