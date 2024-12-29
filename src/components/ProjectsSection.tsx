import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectNavigation from './ProjectNavigation';
import SectionHeader from './common/SectionHeader';
import { projects } from '../data/projects';
import { useWindowSize } from '../hooks/useWindowSize';

export default function ProjectsSection() {
  const { width } = useWindowSize();
  const [currentPage, setCurrentPage] = useState(0);
  
  // Determine number of projects per page based on screen size
  const projectsPerPage = width < 768 ? 1 : width < 1024 ? 2 : 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  const visibleProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="projects" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader 
          title="SELECTED"
          subtitle="PROJECTS"
          accentColor="text-[#FF4D4D]"
        />
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto scrollbar-hide">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>

        <ProjectNavigation 
          currentPage={currentPage + 1}
          totalPages={totalPages}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </section>
  );
}