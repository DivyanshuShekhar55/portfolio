import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="relative z-40 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-800 bg-[#071026] px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-[#f8f4ee]">DS</span>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-white/70">Portfolio</div>
          <span className="font-medium text-white">Live. Build. Repeat.</span>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="rounded-full border border-slate-800 p-2 text-white/70 transition-colors hover:bg-slate-900 hover:text-white lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
        <button 
          onClick={() => handleClick('home')}
          className="text-sm font-medium text-white/70 transition-colors hover:text-white"
        >
          Home
        </button>
        <button 
          onClick={() => handleClick('projects')}
          className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
        >
          Projects
        </button>
        <button 
          onClick={() => handleClick('achievements')}
          className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
        >
          Achievements
        </button>
        <button 
          onClick={() => handleClick('socials')}
          className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
        >
          Connect
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full mt-3 rounded-3xl border border-slate-800 bg-[#071026] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.6)] lg:hidden">
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => handleClick('home')}
              className="text-left text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Home
            </button>
            <button 
              onClick={() => handleClick('projects')}
              className="text-left text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
            >
              Projects
            </button>
            <button 
              onClick={() => handleClick('achievements')}
              className="text-left text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
            >
              Achievements
            </button>
            <button 
              onClick={() => handleClick('socials')}
              className="text-left text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
            >
              Connect
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}