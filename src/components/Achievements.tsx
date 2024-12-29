import { useState } from 'react';
import AchievementItem from './AchievementItem';
import { achievements } from '../data/achievements';

export default function Achievements() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="achievements" className="bg-[#ff5943] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 md:mb-12">ACHIEVEMENTS</h2>
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