import { useEffect, useRef } from 'react';

const technologies = [
  "React", "CassandraDB", "Node.js", "JavaScript", "C++", 
  "MongoDB", "PostgreSQL", "Redis",
  "Elasticsearch", "TailwindCSS", "Git", "Golang", "C", "UI", "Docker", "React Native"
];

const palette = ["#23cc71", "#ddc1fe", "#f4cad2", "#fd850b", "#5e31be", "#ffeb3b", "#007fff", "#ff0100", "#a1ff85"];

function hexToRgb(hex: string) {
  const h = hex.replace('#', '');
  const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function luminance(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  const srgb = [r, g, b].map(v => v / 255).map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

function textColorForBg(hex: string) {
  // return white for dark backgrounds, dark slate for light backgrounds
  return luminance(hex) < 0.5 ? '#ffffff' : '#0b1220';
}

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
    <div className="overflow-hidden border-y border-slate-800 bg-[#03020b] py-8 text-[#f8f4ee] shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
      <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
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
        `}</style>
      <div className="relative">
        <div className="mx-auto max-w-7xl" style={{ transform: 'rotate(-2.3deg)', transformOrigin: 'center' }}>
          <div ref={row1Ref} className="tech-banner">
            {[...technologies, ...technologies].map((tech, i) => {
              const bg = palette[Math.floor(Math.random() * palette.length)];
              const fg = textColorForBg(bg);
              return (
                <span
                  key={i}
                  style={{ backgroundColor: bg, color: fg }}
                  className="mx-4 inline-flex items-center rounded-full border border-slate-800 px-4 py-2 text-base font-semibold transition-all md:mx-6 md:text-xl"
                >
                  {tech}
                </span>
              );
            })}
          </div>

          <div className="relative mt-4">
              <div ref={row2Ref} className="tech-banner">
                {[...reversedTechnologies, ...reversedTechnologies].map((tech, i) => {
                const bg = palette[Math.floor(Math.random() * palette.length)];
                const fg = textColorForBg(bg);
                return (
                  <span
                    key={i}
                    style={{ backgroundColor: bg, color: fg }}
                    className="mx-4 inline-flex items-center rounded-full border border-slate-800 px-4 py-2 text-base font-semibold transition-all md:mx-6 md:text-xl"
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}