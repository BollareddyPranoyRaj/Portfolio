"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Certificates", href: "#certificates" },
    { name: "Projects", href: "#projects" },
    { name: "Profiles", href: "#profiles" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Setup intersection observer for scrollspy
    const sections = navLinks.map(link => document.querySelector(link.href));
    
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          setActiveSection(id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#07070a]/75 backdrop-blur-md border-b border-white/5 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a 
          href="#hero" 
          className="font-display font-bold text-lg text-white tracking-tight hover:opacity-80 transition-opacity"
        >
          BPR
        </a>

        {/* Desktop nav menu */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  activeSection === link.href.substring(1)
                    ? "text-white font-medium border-b border-white/40 pb-1"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/BollareddyPranoyRaj-5.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-transparent text-black hover:text-white border border-white px-4 py-1.5 rounded text-xs font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] block"
            >
              View Resume ↗
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger menu icon */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden text-white p-1 focus:outline-none z-50 cursor-pointer"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      <div
        className={`fixed inset-0 bg-[#07070a]/98 backdrop-blur-lg z-40 flex flex-col justify-center items-center gap-6 transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-4"
        }`}
      >
        <ul className="text-center flex flex-col gap-6 list-none p-0 m-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={closeMenu}
                className={`text-xl font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-white font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="/BollareddyPranoyRaj-5.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="bg-white text-black border border-white px-6 py-3 rounded text-sm font-semibold tracking-wide transition-all"
            >
              View Resume ↗
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
