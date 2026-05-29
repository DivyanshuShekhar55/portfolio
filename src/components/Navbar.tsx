import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#03020b] px-4 py-3 backdrop-blur-sm md:px-5 md:py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <button
          className="inline-flex items-center justify-center rounded-full border border-white/15 p-2 text-white/80 transition-colors hover:bg-white/5 hover:text-[#f47c57] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className="hidden items-center gap-8 md:flex md:justify-end md:gap-10">
          <button onClick={() => handleClick('home')} className="text-lg font-semibold tracking-wide text-white/85 transition-colors hover:text-[#a1ff85]">Home</button>
          <button onClick={() => handleClick('projects')} className="text-lg font-semibold tracking-wide text-white/85 transition-colors hover:text-[#ffeb3b]">Projects</button>
          <button onClick={() => handleClick('achievements')} className="text-lg font-semibold tracking-wide text-white/85 transition-colors hover:text-[#ddc1fe]">Achievements</button>
          <button onClick={() => handleClick('socials')} className="text-lg font-semibold tracking-wide text-white/85 transition-colors hover:text-[#007fff]">Connect</button>
        </div>

        <div className="md:hidden" />
      </div>

      {isMenuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-[#03020b] px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.6)] md:hidden">
          <div className="flex flex-col gap-4">
            <button onClick={() => handleClick('home')} className="text-left text-base font-semibold tracking-wide text-white/85 transition-colors hover:text-[#f47c57]">Home</button>
            <button onClick={() => handleClick('projects')} className="text-left text-base font-semibold tracking-wide text-white/85 transition-colors hover:text-[#f47c57]">Projects</button>
            <button onClick={() => handleClick('achievements')} className="text-left text-base font-semibold tracking-wide text-white/85 transition-colors hover:text-[#f47c57]">Achievements</button>
            <button onClick={() => handleClick('socials')} className="text-left text-base font-semibold tracking-wide text-white/85 transition-colors hover:text-[#f47c57]">Connect</button>
          </div>
        </div>
      )}
    </nav>
  );
}