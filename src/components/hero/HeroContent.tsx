import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroContent() {
  return (
    <div className="space-y-4">
      <h1 className="text-6xl lg:text-8xl font-bold text-white">
        SOFTWARE 
        <div className="flex items-center gap-4">
        DEVELOPER
          <img 
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" 
            alt="Small profile" 
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        <div className="bg-[#ff4d4d] p-8 rounded-2xl">
          <h3 className="text-white text-xl font-bold mb-2">Chill Developer  🖥️</h3>
          <p className="text-white/80">MERN, React Native, TS, Tailwind</p>
          <ArrowRight className="text-white mt-4" />
        </div>

        <div className="bg-[#c8ff00] p-8 rounded-2xl">
          <h3 className="text-black text-xl font-bold mb-2">Building the Future 🚀</h3>
          <p className="text-black/80">Go, Rust, C++, ML</p>
          <ArrowRight className="text-black mt-4" />
        </div>
      </div>
    </div>
  );
}