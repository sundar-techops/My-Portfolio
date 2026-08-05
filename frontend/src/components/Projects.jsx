import { useState, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';
import { useAdmin } from '../context/AdminContext';
import API from '../api/axios';

function ProjectCard({ project, onUpdate, onDelete }) {
  const { isEditMode } = useAdmin();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [localProject, setLocalProject] = useState(project);

  const handleMouseMove = useCallback((e) => {
    if (isEditMode) return; // Disable tilt during edit mode
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -15,
      y: (x - 0.5) * 15,
    });
  }, [isEditMode]);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  const handleFieldChange = (field, value) => {
    setLocalProject((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      await API.put(`/projects/${localProject.id}`, localProject);
      onUpdate(localProject);
    } catch (err) {
      console.error('Failed to update project:', err);
    }
  };

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
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          {localProject.imageUrl ? (
            <img
              src={localProject.imageUrl}
              alt={localProject.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent-blue/20 to-accent-emerald/20 flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />

          {isEditMode && (
            <div className="absolute top-3 right-3 flex gap-2">
              <button
                onClick={() => onDelete(project.id)}
                className="delete-btn text-xs"
              >
                🗑️ Delete
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {isEditMode ? (
            <div className="space-y-3">
              <input
                className="admin-input font-display font-bold text-lg"
                value={localProject.title || ''}
                onChange={(e) => handleFieldChange('title', e.target.value)}
                onBlur={handleSave}
                placeholder="Project Title"
              />
              <textarea
                className="admin-textarea text-sm"
                value={localProject.description || ''}
                onChange={(e) => handleFieldChange('description', e.target.value)}
                onBlur={handleSave}
                placeholder="Project description..."
              />
              <input
                className="admin-input text-sm"
                value={localProject.link || ''}
                onChange={(e) => handleFieldChange('link', e.target.value)}
                onBlur={handleSave}
                placeholder="Project URL"
              />
              <input
                className="admin-input text-sm"
                value={localProject.imageUrl || ''}
                onChange={(e) => handleFieldChange('imageUrl', e.target.value)}
                onBlur={handleSave}
                placeholder="Image URL"
              />
            </div>
          ) : (
            <>
              <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-accent-blue transition-colors">
                {localProject.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {localProject.description}
              </p>
              {localProject.link && (
                <a
                  href={localProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-blue text-sm font-medium hover:text-accent-emerald transition-colors inline-flex items-center gap-1"
                >
                  View Project
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ projects, setProjects }) {
  const { isEditMode } = useAdmin();
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    link: '',
    imageUrl: '',
  });

  const handleUpdateProject = (updated) => {
    setProjects((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const handleDeleteProject = async (id) => {
    try {
      await API.delete(`/projects/${id}`);
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error('Failed to delete project:', err);
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    if (!newProject.title) return;
    try {
      const res = await API.post('/projects', newProject);
      setProjects((prev) => [...prev, res.data]);
      setNewProject({ title: '', description: '', link: '', imageUrl: '' });
    } catch (err) {
      console.error('Failed to add project:', err);
    }
  };

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
              <ProjectCard
                project={project}
                onUpdate={handleUpdateProject}
                onDelete={handleDeleteProject}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Add New Project Form */}
        {isEditMode && (
          <ScrollReveal>
            <form onSubmit={handleAddProject} className="add-form mt-10 max-w-2xl">
              <h4 className="text-sm font-semibold text-accent-blue mb-4">
                ➕ Add New Project
              </h4>
              <div className="space-y-3">
                <input
                  className="admin-input"
                  placeholder="Project Title"
                  value={newProject.title}
                  onChange={(e) =>
                    setNewProject({ ...newProject, title: e.target.value })
                  }
                  required
                />
                <textarea
                  className="admin-textarea"
                  placeholder="Project Description"
                  value={newProject.description}
                  onChange={(e) =>
                    setNewProject({ ...newProject, description: e.target.value })
                  }
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    className="admin-input"
                    placeholder="Project URL"
                    value={newProject.link}
                    onChange={(e) =>
                      setNewProject({ ...newProject, link: e.target.value })
                    }
                  />
                  <input
                    className="admin-input"
                    placeholder="Image URL"
                    value={newProject.imageUrl}
                    onChange={(e) =>
                      setNewProject({ ...newProject, imageUrl: e.target.value })
                    }
                  />
                </div>
                <button type="submit" className="btn-primary text-sm">
                  <span>Add Project</span>
                </button>
              </div>
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
