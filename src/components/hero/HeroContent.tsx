import React from 'react';
import { ArrowRight } from 'lucide-react';
import me from "../../assests/main.png"

export default function HeroContent() {
  return (
    <div className="space-y-8">

      <div className="space-y-5">
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
          Software
          <span className="mt-2 block text-[#f47c57]">developer</span>
        </h1>
        <p className="max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
          I build calm, high-performance interfaces and the systems behind them. Clean structure, playful motion, and enough edge to feel memorable.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-800 bg-[#071026] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.6)]">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Frontend systems</h3>
            <ArrowRight className="text-slate-400" />
          </div>
          <p className="text-slate-300">React, React Native, and interface architecture that stays readable as the product grows.</p>
          <div className="mt-5 flex flex-wrap gap-2 text-sm font-medium text-white/80">
            <span className="rounded-full bg-[#3a2b22] px-3 py-1">MERN</span>
            <span className="rounded-full bg-[#12323a] px-3 py-1">React Native</span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800/30 bg-[#071026] p-6 text-[#f8f4ee] shadow-[0_18px_50px_rgba(0,0,0,0.6)]">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold">Systems and data</h3>
            <ArrowRight className="text-[#f8f4ee]" />
          </div>
          <p className="text-white/75">Go, database internals, and the kind of backend design that makes products feel fast and reliable.</p>
          <div className="mt-5 flex flex-wrap gap-2 text-sm font-medium text-white/70">
            <span className="rounded-full bg-[#2a1b14] px-3 py-1">Go</span>
            <span className="rounded-full bg-[#2a1b14] px-3 py-1">System design</span>
          </div>
        </div>
      </div>
    </div>
  );
}