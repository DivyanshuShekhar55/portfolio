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
      className={`flex items-center gap-6 p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
        isHighlighted ? 'bg-white shadow-xl scale-[1.02]' : 'hover:bg-white/5'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className={`text-xl font-medium transition-colors duration-300 ${
        isHighlighted ? 'text-[#ff5943]' : 'text-white/80'
      }`}>{year}</span>
      
      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl">
        <img src={logo} alt={title} className="w-full h-full object-contain p-2" />
      </div>
      
      <div className="flex-1">
        <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
          isHighlighted ? 'text-[#ff5943]' : 'text-white'
        }`}>{title}</h3>
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <div className={`flex items-center gap-2 transition-colors duration-300 ${
            isHighlighted ? 'text-[#ff5943]' : 'text-yellow-300'
          }`}>
            <MapPin size={18} />
            <span>{location}</span>
          </div>
          <div className={`flex items-center gap-2 transition-colors duration-300 ${
            isHighlighted ? 'text-[#ff5943]' : 'text-yellow-300'
          }`}>
            <MessageCircle size={18} />
            <span>{category}</span>
          </div>
        </div>
      </div>
      
      <ArrowRight className={`transition-colors duration-300 ${
        isHighlighted ? 'text-[#ff5943]' : 'text-yellow-300'
      }`} size={24} />
    </div>
  );
}