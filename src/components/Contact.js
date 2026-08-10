"use client";
import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, FileText, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
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
      if (e.detail === "contact") {
        setIsOpen(true);
      }
    };
    const handleHashChange = () => {
      if (window.location.hash === "#contact") {
        setIsOpen(true);
      }
    };
    window.addEventListener("open-section", handleOpen);
    window.addEventListener("hashchange", handleHashChange);
    if (window.location.hash === "#contact") {
      setIsOpen(true);
    }
    return () => {
      window.removeEventListener("open-section", handleOpen);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      handle: "BollareddyPranoyRaj",
      link: "https://github.com/BollareddyPranoyRaj",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      handle: "pranoy-raj-bollareddy",
      link: "https://www.linkedin.com/in/pranoy-raj-bollareddy-8b62b6279/",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Gmail",
      handle: "bollareddypranoyraj@gmail.com",
      link: "mailto:bollareddypranoyraj@gmail.com",
      icon: <Mail size={16} />,
    },
    {
      name: "Instagram",
      handle: "@bprzoomin_",
      link: "https://www.instagram.com/bprzoomin_/",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-4 md:py-6 border-b border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Accordion Toggle Header */}
        <button
          onClick={toggleOpen}
          className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
        >
          <div>
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block mb-2 transition-colors group-hover:text-indigo-400">
              07 — Contact
            </span>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white tracking-tight group-hover:text-white/90 transition-colors">
              Get in Touch
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
              <div className="pt-8 pb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Info Card */}
                <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
                  <div>
                    <h3 className="text-white text-lg md:text-xl font-bold font-body">
                      Bollareddy Pranoy Raj
                    </h3>
                    <p className="text-gray-500 text-xs font-mono mt-1">
                      Full Stack Developer · Problem Solver
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <MapPin size={14} className="text-indigo-400" />
                      </div>
                      <span>Anaparthi, Andhra Pradesh, India</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <Mail size={14} className="text-teal-400" />
                      </div>
                      <a href="mailto:bollareddypranoyraj@gmail.com" className="hover:text-white transition-colors">
                        bollareddypranoyraj@gmail.com
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <Phone size={14} className="text-violet-400" />
                      </div>
                      <a href="tel:+919392645322" className="hover:text-white transition-colors">
                        +91 93926 45322
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 text-center sm:text-left">
                    <p className="text-xs text-gray-500 font-mono mb-4">Interested in working together?</p>
                    <a
                      href="/BollareddyPranoyRaj-5.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-black hover:bg-transparent hover:text-white border border-white px-5 py-2.5 rounded-lg text-xs font-mono tracking-wide transition-all duration-300"
                    >
                      <FileText size={12} />
                      View Resume ↗
                    </a>
                  </div>
                </div>

                {/* Social Links Card */}
                <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
                  <div>
                    <h3 className="text-white text-lg md:text-xl font-bold font-body">
                      Connect With Me
                    </h3>
                    <p className="text-gray-500 text-xs font-mono mt-1">
                      Professional & social networks
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                          {social.icon}
                        </div>
                        <div>
                          <h4 className="text-white text-xs font-semibold font-body">
                            {social.name}
                          </h4>
                          <p className="text-gray-500 text-[10px] font-mono mt-0.5 truncate max-w-[120px]">
                            {social.handle}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
