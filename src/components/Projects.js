"use client";
import React, { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger client-side
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  const projects = [
    {
      number: "001",
      title: "AU-BloodConnect",
      description: "A comprehensive blood donation platform connecting donors and recipients with intelligent matching and real-time notifications.",
      highlight: "1000+ active users · Role-based access control",
      stack: ["React", "Node.js", "MongoDB", "Express"],
      live: "https://blood-donation-web-five.vercel.app",
      github: "https://github.com/BollareddyPranoyRaj/BloodDonationWeb",
    },
    {
      number: "002",
      title: "Online Compiler",
      description: "Browser-based multi-language code execution environment with sandboxed runtime, I/O handling, and syntax highlighting.",
      highlight: "Multi-language · Sandboxed execution",
      stack: ["React", "Node.js", "Docker", "Monaco Editor"],
      live: "https://bprcodelab.dev/",
      github: "https://github.com/BollareddyPranoyRaj/onine-compiler",
    },
    {
      number: "003",
      title: "Lemma ZK Tracer",
      description: "Verifiable due diligence platform that anchors AI-extracted financial metrics to exact PDF source passages using cryptographic provenance.",
      highlight: "SHA-256 provenance · Lemma + ChromaDB fallback",
      stack: ["FastAPI", "Streamlit", "GPT-4o", "ChromaDB", "OpenTelemetry"],
      live: "https://lemma-zk-tracer.streamlit.app/",
      github: "https://github.com/BollareddyPranoyRaj/lemma-zk-tracer",
    },
    {
      number: "004",
      title: "GBR Schools Website",
      description: "Official web platform for GBR Group of Schools featuring campus visual tours, admissions portals, and academic curriculum resources.",
      highlight: "Multi-campus navigation · CDN video streaming",
      stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      live: "https://gbr-schools.vercel.app/",
      github: "https://github.com/BollareddyPranoyRaj/gbr-schools",
    },
    {
      number: "005",
      title: "Voice Alarm Negotiator",
      description: "Built a cross-platform React Native SaaS app that drives task accountability using a conversational Generative AI (Gemini) voice negotiator, Stripe billing, and a premium productivity dashboard.",
      highlight: "Gemini AI Voice Agent · Stripe Integration",
      stack: ["React Native", "Gemini AI", "Stripe", "Node.js"],
      live: "https://github.com/BollareddyPranoyRaj/voice-alarm-negotiator",
      github: "https://github.com/BollareddyPranoyRaj/voice-alarm-negotiator",
    },
  ];

  useEffect(() => {
    let mm = gsap.matchMedia();

    // Only run GSAP horizontal scroll pinning on desktop viewports (> 768px)
    mm.add("(min-width: 769px)", () => {
      const pin = gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: () => -(sectionRef.current.scrollWidth - window.innerWidth + 100),
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            // Make the scroll duration proportional to the width of the horizontal track
            end: () => `+=${sectionRef.current.scrollWidth - window.innerWidth + 300}`,
            invalidateOnRefresh: true,
          },
        }
      );
      return () => pin.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={triggerRef} className="relative">
      <section
        id="projects"
        className="h-auto md:h-screen md:flex items-center overflow-hidden py-24 px-6 md:py-0 relative z-10"
      >
        <div className="w-full">
          {/* Cards Track Container */}
          <div
            ref={sectionRef}
            className="horizontal-scroll-container gap-8 md:gap-12 px-0 md:px-24"
          >
            {/* Section Info Left Panel */}
            <div className="horizontal-panel flex flex-col justify-center px-6 md:px-0 md:max-w-[350px]">
              <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block mb-2">
                05 — Projects
              </span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
                Selected Work
              </h2>
              <div className="w-12 h-[2px] bg-white/20 mb-6" />
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                A curated collection of web applications, AI integrations, and developer tools built to solve practical challenges. Scroll down to see them shift.
              </p>
            </div>
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={(e) => {
                  if (e.target.closest("a")) return;
                  window.open(project.live, "_blank", "noopener,noreferrer");
                }}
                className="horizontal-panel cursor-pointer bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 hover:border-white/15 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 min-h-[420px] md:min-h-[460px] relative group overflow-hidden"
              >
                {/* Visual grid line accents */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-indigo-500/20 to-teal-400/20 group-hover:from-indigo-500 group-hover:to-teal-400 transition-all duration-500" />
                
                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs text-gray-600 group-hover:text-indigo-400 transition-colors">
                      {project.number}
                    </span>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                        title="GitHub Code"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                        title="Live Preview"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Project Details */}
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-200 group-hover:to-teal-100 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Highlight */}
                  <div className="bg-white/5 border border-white/5 rounded-lg px-4 py-2 text-[10px] md:text-xs font-mono text-indigo-300 mb-6">
                    {project.highlight}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] md:text-[10px] text-gray-500 border border-white/5 px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
