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
    <div className="flex items-center justify-between mt-12 border-t border-gray-200 pt-8">
      <div className="text-2xl font-bold">
        {currentPage.toString().padStart(2, '0')}
        <span className="text-gray-400 text-lg">/{totalPages.toString().padStart(2, '0')}</span>
      </div>
      
      <div className="flex gap-4">
        <button 
          onClick={onPrev}
          className="p-3 rounded-full border border-gray-200 hover:border-[#FF4D4D] hover:text-[#FF4D4D] transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <button 
          onClick={onNext}
          className="p-3 rounded-full border border-gray-200 hover:border-[#FF4D4D] hover:text-[#FF4D4D] transition-colors"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}