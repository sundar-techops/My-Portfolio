import { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import EditableField from './EditableField';
import { useAdmin } from '../context/AdminContext';
import API from '../api/axios';

export default function Skills({ skills, setSkills }) {
  const { isEditMode } = useAdmin();
  const [newSkill, setNewSkill] = useState({ name: '', category: '', proficiency: 50 });
  const barsRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  // Animate skill bars on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (barsRef.current) observer.observe(barsRef.current);
    return () => observer.disconnect();
  }, [animated]);

  // Group skills by category
  const grouped = skills.reduce((acc, skill) => {
    const cat = skill.category || 'Other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  const handleUpdateSkill = async (skill, field, value) => {
    const updated = { ...skill, [field]: value };
    setSkills((prev) => prev.map((s) => (s.id === skill.id ? updated : s)));
    try {
      await API.put(`/skills/${skill.id}`, updated);
    } catch (err) {
      console.error('Failed to update skill:', err);
    }
  };

  const handleDeleteSkill = async (id) => {
    try {
      await API.delete(`/skills/${id}`);
      setSkills((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error('Failed to delete skill:', err);
    }
  };

  const handleAddSkill = async (e) => {
    e.preventDefault();
    if (!newSkill.name) return;
    try {
      const res = await API.post('/skills', newSkill);
      setSkills((prev) => [...prev, res.data]);
      setNewSkill({ name: '', category: '', proficiency: 50 });
    } catch (err) {
      console.error('Failed to add skill:', err);
    }
  };

  return (
    <section id="skills" className="relative z-10">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-accent-emerald font-medium text-sm uppercase tracking-widest mb-3">
            What I work with
          </p>
          <h2 className="section-title gradient-text-static">Skills & Technologies</h2>
          <p className="section-subtitle mt-2">
            A comprehensive overview of my technical proficiency across different domains.
          </p>
        </ScrollReveal>

        <div ref={barsRef} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(grouped).map(([category, categorySkills]) => (
            <ScrollReveal key={category}>
              <div className="glass p-6 sm:p-8">
                <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-blue" />
                  {category}
                </h3>

                <div className="space-y-5">
                  {categorySkills.map((skill) => (
                    <div key={skill.id} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 flex-1">
                          {isEditMode ? (
                            <input
                              className="admin-input text-sm flex-1"
                              value={skill.name}
                              onChange={(e) =>
                                handleUpdateSkill(skill, 'name', e.target.value)
                              }
                              onBlur={() => handleUpdateSkill(skill, 'name', skill.name)}
                            />
                          ) : (
                            <span className="text-sm font-medium text-slate-300">
                              {skill.name}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {isEditMode ? (
                            <input
                              type="number"
                              min="0"
                              max="100"
                              className="admin-input text-sm w-16 text-center"
                              value={skill.proficiency}
                              onChange={(e) =>
                                handleUpdateSkill(
                                  skill,
                                  'proficiency',
                                  parseInt(e.target.value) || 0
                                )
                              }
                            />
                          ) : (
                            <span className="text-xs text-accent-blue font-semibold">
                              {skill.proficiency}%
                            </span>
                          )}
                          {isEditMode && (
                            <button
                              onClick={() => handleDeleteSkill(skill.id)}
                              className="delete-btn text-xs px-2 py-1"
                              title="Delete skill"
                            >
                              🗑️
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="skill-bar-bg">
                        <div
                          className={`skill-bar-fill ${animated ? 'animate' : ''}`}
                          style={{ '--skill-width': `${skill.proficiency}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Add New Skill Form */}
        {isEditMode && (
          <ScrollReveal>
            <form onSubmit={handleAddSkill} className="add-form mt-8 max-w-2xl">
              <h4 className="text-sm font-semibold text-accent-blue mb-4">➕ Add New Skill</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  className="admin-input"
                  placeholder="Skill name"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                  required
                />
                <input
                  className="admin-input"
                  placeholder="Category"
                  value={newSkill.category}
                  onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                />
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    className="admin-input flex-1"
                    placeholder="Proficiency (0-100)"
                    value={newSkill.proficiency}
                    onChange={(e) =>
                      setNewSkill({ ...newSkill, proficiency: parseInt(e.target.value) || 0 })
                    }
                  />
                  <button type="submit" className="btn-primary text-sm whitespace-nowrap">
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
