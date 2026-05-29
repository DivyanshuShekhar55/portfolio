import { useEffect, useRef } from 'react';

const technologies = [
  "React", "CassandraDB", "Node.js", "JavaScript", "C++", 
  "MongoDB", "PostgreSQL", "Redis",
  "Elasticsearch", "TailwindCSS", "Git", "Golang", "C", "UI", "Docker", "React Native"
];

export default function TechBanner() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const reversedTechnologies = [...technologies].reverse();

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    
    if (!row1 || !row2) return;

    row1.style.animation = 'scroll 80s linear infinite';
    row2.style.animation = 'scroll 60s linear infinite reverse';

    return () => {
      if (row1) row1.style.animation = '';
      if (row2) row2.style.animation = '';
    };
  }, []);

  return (
    <div className="overflow-hidden border-y border-slate-800 bg-[#0b0b0b] py-8 text-[#f8f4ee] shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .tech-banner {
            display: inline-flex;
            white-space: nowrap;
            will-change: transform;
          }
          .tech-banner > * {
            animation-play-state: running;
          }
          .tech-banner:hover > * {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="relative">
        <div ref={row1Ref} className="tech-banner">
          {[...technologies, ...technologies].map((tech, i) => (
            <span 
              key={i} 
              className="mx-4 inline-flex items-center rounded-full border border-slate-800 bg-[#071026] px-4 py-2 text-base font-semibold text-white/70 transition-colors hover:bg-[#0b1220] md:mx-6 md:text-xl"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="relative mt-4">
        <div ref={row2Ref} className="tech-banner">
          {[...reversedTechnologies, ...technologies].map((tech, i) => (
            <span 
              key={i} 
              className="mx-4 inline-flex items-center rounded-full border border-slate-800 bg-[#071026] px-4 py-2 text-base font-semibold text-white/70 transition-colors hover:bg-[#0b1220] md:mx-6 md:text-xl"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}