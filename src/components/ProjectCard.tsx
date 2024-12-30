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
  return (
    <a
      key={number}
      href={href}
      target="_blank"
      className="group cursor-pointer min-w-[280px]"
    >
      <div className="relative overflow-hidden rounded-3xl">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <ArrowUpRight size={48} className="text-white" />
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        <span className="text-4xl font-bold text-[#FF4D4D]">{number}</span>
        <div>
          <div className="text-sm text-[#FF4D4D] font-medium mb-2">
            {category}
          </div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </a>
  );
}
