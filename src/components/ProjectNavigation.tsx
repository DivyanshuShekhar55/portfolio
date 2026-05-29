import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ProjectNavigationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function ProjectNavigation({ 
  currentPage, 
  totalPages, 
  onPrev, 
  onNext 
}: ProjectNavigationProps) {
  return (
    <div className="mt-12 flex items-center justify-between rounded-[2rem] px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.6)]">
      <div className="text-2xl font-bold text-white">
        {currentPage.toString().padStart(2, '0')}
        <span className="text-lg text-white/70">/{totalPages.toString().padStart(2, '0')}</span>
      </div>
      
      <div className="flex gap-4">
        <button 
          onClick={onPrev}
          className="rounded-full border border-slate-800 bg-[#071026] p-3 text-white/70 transition-all hover:-translate-y-0.5 hover:bg-[#0b1220] hover:text-white"
        >
          <ArrowLeft size={24} />
        </button>
        <button 
          onClick={onNext}
          className="rounded-full border border-slate-800 bg-[#ff7c57e6] p-3 text-white/70 transition-all hover:-translate-y-0.5 hover:bg-[#0b1220] hover:text-white"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}