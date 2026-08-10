"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Profiles() {
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
      if (e.detail === "profiles") {
        setIsOpen(true);
      }
    };
    const handleHashChange = () => {
      if (window.location.hash === "#profiles") {
        setIsOpen(true);
      }
    };
    window.addEventListener("open-section", handleOpen);
    window.addEventListener("hashchange", handleHashChange);
    if (window.location.hash === "#profiles") {
      setIsOpen(true);
    }
    return () => {
      window.removeEventListener("open-section", handleOpen);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const profiles = [
    {
      platform: "LeetCode",
      details: "Solved 200+ problems across core data structures and algorithms, building consistency in interview-style problem solving.",
      link: "https://leetcode.com/u/PranoyRaj/",
      icon: "◈",
      color: "hover:border-amber-500/30 group-hover:text-amber-400",
    },
    {
      platform: "CodeChef",
      details: "Current rating 1189 in Division 4, with regular contest participation and steady competitive programming practice.",
      link: "https://www.codechef.com/users/reddypranoyraj",
      icon: "◻",
      color: "hover:border-emerald-500/30 group-hover:text-emerald-400",
    },
    {
      platform: "HackerRank",
      details: "Practice profile covering coding challenges and programming fundamentals across interview-focused tracks.",
      link: "https://www.hackerrank.com/profile/bollareddyprano1",
      icon: "⊡",
      color: "hover:border-green-500/30 group-hover:text-green-400",
    },
    {
      platform: "Codeforces",
      details: "Competitive programming profile focused on improving speed, accuracy, and contest-level problem solving.",
      link: "https://codeforces.com/profile/BollareddyPranoyRaj",
      icon: "◎",
      color: "hover:border-blue-500/30 group-hover:text-blue-400",
    },
  ];

  return (
    <section id="profiles" className="py-4 md:py-6 border-b border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Accordion Toggle Header */}
        <button
          onClick={toggleOpen}
          className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
        >
          <div>
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block mb-2 transition-colors group-hover:text-indigo-400">
              06 — Coding Profiles
            </span>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white tracking-tight group-hover:text-white/90 transition-colors">
              Problem Solving Journey
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
              <div className="pt-8 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {profiles.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between min-h-[220px] ${profile.color}`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="text-2xl transition-colors">
                          {profile.icon}
                        </div>
                        <ArrowUpRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-white text-base font-bold font-body mb-2 group-hover:text-white transition-colors">
                        {profile.platform}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {profile.details}
                      </p>
                    </div>

                    <div className="mt-4 font-mono text-[10px] text-gray-500 group-hover:text-white transition-colors">
                      View Profile →
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
