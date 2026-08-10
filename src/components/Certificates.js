"use client";
import React, { useState, useEffect } from "react";
import { Award, Eye, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Certificates() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePdf, setActivePdf] = useState(null);

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
      if (e.detail === "certificates") {
        setIsOpen(true);
      }
    };
    const handleHashChange = () => {
      if (window.location.hash === "#certificates") {
        setIsOpen(true);
      }
    };
    window.addEventListener("open-section", handleOpen);
    window.addEventListener("hashchange", handleHashChange);
    if (window.location.hash === "#certificates") {
      setIsOpen(true);
    }
    return () => {
      window.removeEventListener("open-section", handleOpen);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const certs = [
    {
      provider: "MongoDB",
      year: "2026",
      title: "MongoDB Associate Developer",
      desc: "Official MongoDB credential recognizing developer-level understanding of MongoDB application development and document database concepts.",
      tags: ["MongoDB", "Databases", "NoSQL"],
      link: "/certificates/23p31a0508.pdf",
    },
    {
      provider: "Microsoft Learn",
      year: "2026",
      title: "GitHub Foundations",
      desc: "Online-verifiable credential covering GitHub fundamentals, repository workflows, collaboration, and core version control practices.",
      tags: ["GitHub", "Git", "Version Control"],
      link: "/certificates/Credentials - PranoyRajBollareddy-1167 _ Microsoft Learn copy.pdf",
    },
    {
      provider: "Oracle University",
      year: "2025",
      title: "Java Certified Foundations Associate",
      desc: "Oracle certification validating foundational Java programming knowledge, object-oriented concepts, and core language fundamentals.",
      tags: ["Java", "OOP", "Programming"],
      link: "/certificates/eCertificate-3.pdf",
    },
    {
      provider: "NPTEL · IIT Guwahati",
      year: "2025",
      title: "Human-Computer Interfaces",
      desc: "NPTEL certification in HCI covering interface design, usability, interaction principles, and user-centered software experience.",
      tags: ["HCI", "UX", "UI Design"],
      link: "/certificates/Design & Implementation of Human-Computer Interfaces.pdf",
    },
    {
      provider: "Cisco Academy",
      year: "2026",
      title: "JavaScript Essentials 2",
      desc: "Student-level credential covering JavaScript objects, asynchronous programming, advanced functions, and problem solving.",
      tags: ["JavaScript", "Frontend", "Algorithms"],
      link: "/certificates/JavaScriptEssentials2Update20260515-31-p3jx0b.pdf",
    },
    {
      provider: "Cisco Academy",
      year: "2026",
      title: "Python Essentials 1",
      desc: "Credential focused on Python 3 fundamentals, basic problem solving, debugging, and programming workflow foundations.",
      tags: ["Python", "Programming", "Debugging"],
      link: "/certificates/PythonEssentials1Update20260410-31-u9itxg.pdf",
    },
    {
      provider: "Certiport · Pearson VUE",
      year: "2024",
      title: "IT Specialist: HTML and CSS",
      desc: "Industry certification validating the ability to structure, style, and build standards-based web pages using HTML and CSS.",
      tags: ["HTML", "CSS", "Web Development"],
      link: "/certificates/HTML and CSS.pdf",
    },
  ];

  return (
    <section id="certificates" className="py-4 md:py-6 border-b border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Accordion Toggle Header */}
        <button
          onClick={toggleOpen}
          className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
        >
          <div>
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block mb-2 transition-colors group-hover:text-indigo-400">
              04 — Learning & Credentials
            </span>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white tracking-tight group-hover:text-white/90 transition-colors">
              Verified Learning
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
              <div className="pt-8 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((cert, index) => (
                  <div
                    key={index}
                    className="group bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 hover:border-white/12 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">
                          {cert.provider} · {cert.year}
                        </span>
                        <Award size={14} className="text-gray-600 group-hover:text-indigo-400 transition-colors" />
                      </div>
                      <h3 className="text-white text-base font-bold font-body leading-snug mb-3">
                        {cert.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed mb-6">
                        {cert.desc}
                      </p>
                    </div>

                    <div>
                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1 mb-6">
                        {cert.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[9px] text-gray-500 border border-white/5 px-2.5 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setActivePdf({ title: cert.title, link: cert.link })}
                        className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white text-gray-300 hover:text-black border border-white/10 hover:border-white rounded-lg py-2.5 text-xs font-mono tracking-wide transition-all duration-300 cursor-pointer"
                      >
                        <Eye size={12} />
                        View Certificate ↗
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Inline Certificate Modal Viewer */}
      {activePdf && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setActivePdf(null)}
        >
          <div 
            className="relative flex flex-col w-full max-w-lg md:max-w-2xl lg:w-[40vw] h-[80vh] lg:h-[70vh] bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-neutral-950/80 border-b border-white/5">
              <h3 className="text-white text-xs font-mono tracking-wider truncate max-w-[75%]">
                {activePdf.title}
              </h3>
              <button
                onClick={() => setActivePdf(null)}
                className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5 cursor-pointer flex items-center justify-center"
                aria-label="Close PDF viewer"
              >
                <X size={16} />
              </button>
            </div>
            
            {/* IFrame Viewer */}
            <div className="flex-1 bg-black relative">
              <iframe
                src={`${activePdf.link}#toolbar=0`}
                className="w-full h-full border-none"
                title={activePdf.title}
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end px-6 py-3.5 bg-neutral-950/50 border-t border-white/5">
              <button
                onClick={() => setActivePdf(null)}
                className="px-4 py-2 text-xs font-mono text-gray-400 hover:text-white hover:bg-white/5 border border-white/10 rounded-lg transition-all cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
