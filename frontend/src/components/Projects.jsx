import { useState, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';

function ProjectCard({ project }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -15,
      y: (x - 0.5) * 15,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div
      className="tilt-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="tilt-card-inner glass overflow-hidden group"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <div className="relative h-48 overflow-hidden">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent-blue/20 to-accent-emerald/20 flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
        </div>

        <div className="p-6">
          <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-accent-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue text-sm font-medium hover:text-accent-emerald transition-colors inline-flex items-center gap-1"
            >
              View Project
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className="relative z-10">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-accent-blue font-medium text-sm uppercase tracking-widest mb-3">
            My Work
          </p>
          <h2 className="section-title gradient-text-static">Featured Projects</h2>
          <p className="section-subtitle mt-2">
            A selection of projects that showcase my skills and passion for development.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ScrollReveal key={project.id}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
