"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Layout, Database, Code, Cpu, ChevronDown } from "lucide-react";

export default function Skills() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      import("gsap/dist/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.refresh();
      });
    }, 400);
  };

  useEffect(() => {
    const handleOpen = (e) => {
      if (e.detail === "skills") {
        setIsOpen(true);
      }
    };
    const handleHashChange = () => {
      if (window.location.hash === "#skills") {
        setIsOpen(true);
      }
    };
    window.addEventListener("open-section", handleOpen);
    window.addEventListener("hashchange", handleHashChange);
    if (window.location.hash === "#skills") {
      setIsOpen(true);
    }
    return () => {
      window.removeEventListener("open-section", handleOpen);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

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
    <section id="skills" className="py-4 md:py-6 border-b border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Accordion Toggle Header */}
        <button
          onClick={toggleOpen}
          className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
        >
          <div>
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block mb-2 transition-colors group-hover:text-indigo-400">
              02 — Skills
            </span>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white tracking-tight group-hover:text-white/90 transition-colors">
              Technical Arsenal
            </h2>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/15 transition-all duration-300">
            <ChevronDown 
              size={18} 
              className={`text-gray-400 group-hover:text-white transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`} 
            />
          </div>
        </button>

        {/* Collapsible Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-8 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
