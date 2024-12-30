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
    </div>
  );
}