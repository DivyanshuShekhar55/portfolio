interface SectionHeaderProps {
  title: string;
  subtitle: string;
  accentColor: string;
}

export default function SectionHeader({ title, subtitle, accentColor }: SectionHeaderProps) {
  return (
    <div className="mb-10 flex items-end justify-between md:mb-14">
      <div className="space-y-3">
        <div className="inline-flex rounded-full border border-slate-800 bg-[#071026] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
          Section
        </div>
        <div className="space-y-1">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-7xl">{title}</h2>
          <h2 className={`text-4xl font-bold tracking-tight md:text-7xl ${accentColor}`}>{subtitle}</h2>
        </div>
      </div>
    </div>
  );
}