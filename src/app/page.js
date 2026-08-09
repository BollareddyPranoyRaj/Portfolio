import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Profiles from "@/components/Profiles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundGradient from "@/components/BackgroundGradient";

export default function Home() {
  return (
    <>
      {/* Moving Ambient Glow Background */}
      <BackgroundGradient />
      
      {/* Navigation */}
      <Header />
      
      {/* Content Layout */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certificates />
        <Projects />
        <Profiles />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
