"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, ChevronDown } from "lucide-react";

export default function Experience() {
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
      if (e.detail === "experience") {
        setIsOpen(true);
      }
    };
    const handleHashChange = () => {
      if (window.location.hash === "#experience") {
        setIsOpen(true);
      }
    };
    window.addEventListener("open-section", handleOpen);
    window.addEventListener("hashchange", handleHashChange);
    if (window.location.hash === "#experience") {
      setIsOpen(true);
    }
    return () => {
      window.removeEventListener("open-section", handleOpen);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const experiences = [
    {
      role: "Software Development Intern",
      company: "Technical Hub Pvt. Ltd.",
      period: "May 2025 — May 2026 (Part-time)",
      points: [
        "Shipped full-stack MERN modules for a live campus ecosystem platform, working in an Agile team with Git feature-branch workflows, code reviews, and sprint planning.",
        "Eliminated N+1 query patterns on high-traffic routes by redesigning MongoDB aggregation pipelines and refactoring REST endpoints, measurably reducing average response time.",
        "Delivered real-time notification and analytics dashboards via WebSockets, replacing manual refreshes so organizers could track event registrations and system metrics live."
      ],
      tech: ["JavaScript", "Python", "Java", "MongoDB", "WebSockets", "REST APIs", "Agile", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-4 md:py-6 border-b border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Accordion Toggle Header */}
        <button
          onClick={toggleOpen}
          className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
        >
          <div>
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block mb-2 transition-colors group-hover:text-indigo-400">
              03 — Experience
            </span>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white tracking-tight group-hover:text-white/90 transition-colors">
              Work Experience
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
              <div className="pt-8 pb-12 space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative group bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-xl overflow-hidden"
                  >
                    {/* Highlight top border accent */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-violet-500 to-teal-400 opacity-50 group-hover:opacity-100 transition-opacity" />

                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                      <div>
                        <h3 className="text-white text-lg md:text-xl font-bold font-body flex items-center gap-2">
                          <Briefcase size={18} className="text-indigo-400" />
                          {exp.role}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">{exp.company}</p>
                      </div>
                      <div className="inline-flex items-center gap-2 font-mono text-xs text-gray-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
                        <Calendar size={12} className="text-teal-400" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Points */}
                    <ul className="space-y-3 list-none p-0 mb-6">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-3 text-sm md:text-base text-gray-400 leading-relaxed">
                          <span className="text-indigo-400 font-mono select-none mt-1">→</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies used */}
                    <div className="border-t border-white/5 pt-6 flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] md:text-xs text-gray-400 bg-white/5 border border-white/5 px-3 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
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
