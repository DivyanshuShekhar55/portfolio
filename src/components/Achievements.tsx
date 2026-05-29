import { useState } from 'react';
import AchievementItem from './AchievementItem';
import { achievements } from '../data/achievements';

export default function Achievements() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="achievements" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 md:mb-12">
          <div className="inline-flex rounded-full border border-slate-800 bg-[#071026] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Milestones
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-7xl">Achievements</h2>
        </div>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <AchievementItem 
              key={index} 
              {...achievement}
              isHighlighted={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}