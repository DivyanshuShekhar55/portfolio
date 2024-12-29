import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroContent() {
  return (
    <div className="space-y-4">
      <h1 className="text-6xl lg:text-8xl font-bold text-white">
        PRODUCT
        <div className="flex items-center gap-4">
          DESIGNER
          <img 
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" 
            alt="Small profile" 
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
      </h1>
      <p className="text-gray-400 max-w-md">
        Contrary To Popular Belief, Lorem Ipsum is Not Simply Random Text. It has Roots in Piece of Classical Latin
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        <div className="bg-[#ff4d4d] p-8 rounded-2xl">
          <h3 className="text-white text-xl font-bold mb-2">DIRECTION ART DIRECTION,C++</h3>
          <p className="text-white/80">MOTION</p>
          <ArrowRight className="text-white mt-4" />
        </div>

        <div className="bg-[#c8ff00] p-8 rounded-2xl">
          <h3 className="text-black text-xl font-bold mb-2">WORDPRESS,BUSINESS REACTS, IOS,LARAVEL</h3>
          <p className="text-black/80">ANDROID,</p>
          <ArrowRight className="text-black mt-4" />
        </div>
      </div>
    </div>
  );
}