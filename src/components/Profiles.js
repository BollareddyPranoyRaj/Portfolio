"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Profiles() {
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
    <section id="profiles" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block mb-2">
            06 — Coding Profiles
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
            Problem Solving Journey
          </h2>
          <div className="w-12 h-[2px] bg-white/20" />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
}
