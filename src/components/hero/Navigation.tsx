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
    <nav className="max-w-7xl mx-auto flex justify-between items-center py-6 relative z-50">
      <div className="flex items-center">
        <span className="text-[#c8ff00] text-2xl font-bold">Fragile.</span>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-12">
        <button 
          onClick={() => handleClick('home')}
          className="text-white hover:text-[#c8ff00] transition-colors"
        >
          Home
        </button>
        <button 
          onClick={() => handleClick('projects')}
          className="text-white hover:text-[#c8ff00] transition-colors"
        >
          Projects
        </button>
        <button 
          onClick={() => handleClick('achievements')}
          className="text-white hover:text-[#c8ff00] transition-colors"
        >
          Achievements
        </button>
        <button 
          onClick={() => handleClick('socials')}
          className="text-white hover:text-[#c8ff00] transition-colors"
        >
          Connect
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#111111] border-t border-gray-800 p-4 lg:hidden">
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => handleClick('home')}
              className="text-white hover:text-[#c8ff00] transition-colors text-left"
            >
              Home
            </button>
            <button 
              onClick={() => handleClick('projects')}
              className="text-white hover:text-[#c8ff00] transition-colors text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => handleClick('achievements')}
              className="text-white hover:text-[#c8ff00] transition-colors text-left"
            >
              Achievements
            </button>
            <button 
              onClick={() => handleClick('socials')}
              className="text-white hover:text-[#c8ff00] transition-colors text-left"
            >
              Connect
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}