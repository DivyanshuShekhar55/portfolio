interface SectionHeaderProps {
  title: string;
  subtitle: string;
  accentColor: string;
}

export default function SectionHeader({ title, subtitle, accentColor }: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-end mb-12">
      <div>
        <h2 className="text-4xl md:text-7xl font-bold text-gray-900">{title}</h2>
        <h2 className={`text-4xl md:text-7xl font-bold ${accentColor}`}>{subtitle}</h2>
      </div>
      <button className="hidden md:flex items-center gap-2 text-lg font-medium hover:text-[#FF4D4D] transition-colors">
        VIEW ALL
        <span className="text-2xl">→</span>
      </button>
    </div>
  );
}