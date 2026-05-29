import { ArrowUpRight } from "lucide-react";
import { Project } from "../types/project";

export default function ProjectCard({
  number,
  title,
  description,
  image,
  category,
  href,
}: Project) {
  const tags = (category || '').split('•').map(t => t.trim()).filter(Boolean);
  return (
    <a
      key={number}
      href={href}
      target="_blank"
      className="group min-w-[280px] cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[#071026] shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:-translate-y-2">
        <img
          src={image}
          alt={title}
          className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute right-4 top-4 rounded-full bg-[#0b1220] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-sm">
          {number}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full border border-slate-800 bg-[#0b1220] px-3 py-1 text-xs font-medium uppercase tracking-[0.28em] text-white/70">Open project</span>
          <ArrowUpRight size={28} />
        </div>
      </div>
 
        <div className="mt-5 space-y-3 px-1">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-[#f47c57]">{title}</h3>
            <p className="leading-7 text-white/70">{description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full border border-slate-700/50 bg-[#0b1220] px-3 py-1 text-xs font-semibold text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
    </a>
  );
}
