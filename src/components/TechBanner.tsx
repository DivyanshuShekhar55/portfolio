import { useEffect, useRef } from 'react';

const technologies = [
  "React", "TypeScript", "Node.js", "Python", "JavaScript", "C++", 
  "MongoDB", "PostgreSQL", "Redis",
  "Next.js", "TailwindCSS", "Git", "Golang", "Rust", "Machine Learning", "C", "UI", "Docker", "React Native"
];

export default function TechBanner() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

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
    <div className="overflow-hidden py-8 bg-gray-900">
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
              className="inline-block mx-8 text-base md:text-xl font-bold text-white/80 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="relative mt-4">
        <div ref={row2Ref} className="tech-banner">
          {[...technologies.reverse(), ...technologies].map((tech, i) => (
            <span 
              key={i} 
              className="inline-block mx-8 text-base md:text-xl font-bold text-white/80 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}