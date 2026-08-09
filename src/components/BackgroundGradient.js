"use client";
import React from "react";

export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#07070a]">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 opacity-[0.45] mix-blend-screen filter blur-[110px] md:blur-[150px]">
        {/* Blob 1 - Deep Indigo */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/60 animate-float-1" />
        
        {/* Blob 2 - Deep Violet */}
        <div className="absolute bottom-[5%] right-[-10%] w-[65vw] h-[65vw] rounded-full bg-violet-900/60 animate-float-2" />
        
        {/* Blob 3 - Deep Dark Teal */}
        <div className="absolute top-[20%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-teal-950/60 animate-float-3" />
        
        {/* Blob 4 - Purple */}
        <div className="absolute bottom-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-purple-900/50 animate-float-4" />
      </div>
      
      {/* Subtle Noise / Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      
      {/* Ambient vignetting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#07070a_80%)] pointer-events-none" />
    </div>
  );
}
