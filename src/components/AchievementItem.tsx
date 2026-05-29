import { MapPin, MessageCircle, ArrowRight } from 'lucide-react';

interface AchievementItemProps {
  year: string;
  logo: string;
  title: string;
  location: string;
  category: string;
  isHighlighted: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function AchievementItem({
  year,
  logo,
  title,
  location,
  category,
  isHighlighted,
  onMouseEnter,
  onMouseLeave
}: AchievementItemProps) {
  return (
    <div 
      className={`flex cursor-pointer items-center gap-5 rounded-[2rem] border border-slate-800 p-5 transition-all duration-300 md:gap-6 md:p-6 ${
        isHighlighted ? 'bg-[#0b1220] shadow-[0_20px_60px_rgba(0,0,0,0.6)] md:translate-x-2' : 'bg-[#071026] hover:bg-[#0b1220]'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className={`text-xl font-medium transition-colors duration-300 ${
        isHighlighted ? 'text-[#f47c57]' : 'text-white/70'
      }`}>{year}</span>
      
      <div className="flex-1">
        <h3 className={`mb-2 text-xl font-bold transition-colors duration-300 md:text-2xl ${
          isHighlighted ? 'text-white' : 'text-white'
        }`}>{title}</h3>
        <div className="flex flex-wrap items-center gap-3 md:gap-5">
          <div className={`flex items-center gap-2 transition-colors duration-300 ${
            isHighlighted ? 'text-[#f47c57]' : 'text-white/70'
          }`}>
            <MapPin size={18} />
            <span>{location}</span>
          </div>
          <div className={`flex items-center gap-2 transition-colors duration-300 ${
            isHighlighted ? 'text-[#f47c57]' : 'text-white/70'
          }`}>
            <MessageCircle size={18} />
            <span>{category}</span>
          </div>
        </div>
      </div>
      
      <ArrowRight className={`transition-colors duration-300 ${
        isHighlighted ? 'text-[#f47c57]' : 'text-slate-400'
      }`} size={24} />
    </div>
  );
}