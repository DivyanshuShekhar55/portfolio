import React from 'react';
import ProfileCard from './hero/ProfileCard';
import HeroContent from './hero/HeroContent';
import Navigation from './hero/Navigation';

export default function HeroSection() {
  return (
    <div id="home" className="min-h-screen bg-[#111111] relative overflow-hidden px-4 pb-12">
      <Navigation />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 mt-12">
        <div className="relative order-2 lg:order-1">
          <ProfileCard />
        </div>

        <div className="pt-8 lg:pt-20 order-1 lg:order-2">
          <HeroContent />
        </div>
      </div>
    </div>
  );
}