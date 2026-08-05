import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { useAdmin } from '../context/AdminContext';
import API from '../api/axios';

export default function Experience({ experiences, setExperiences }) {
  const { isEditMode } = useAdmin();
  const [newExp, setNewExp] = useState({
    role: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleUpdateExp = async (exp, field, value) => {
    const updated = { ...exp, [field]: value };
    setExperiences((prev) => prev.map((e) => (e.id === exp.id ? updated : e)));
    try {
      await API.put(`/experiences/${exp.id}`, updated);
    } catch (err) {
      console.error('Failed to update experience:', err);
    }
  };

  const handleDeleteExp = async (id) => {
    try {
      await API.delete(`/experiences/${id}`);
      setExperiences((prev) => prev.filter((e) => e.id !== id));
    } catch (err) {
      console.error('Failed to delete experience:', err);
    }
  };

  const handleAddExp = async (e) => {
    e.preventDefault();
    if (!newExp.role || !newExp.company) return;
    try {
      const res = await API.post('/experiences', newExp);
      setExperiences((prev) => [...prev, res.data]);
      setNewExp({ role: '', company: '', startDate: '', endDate: '', description: '' });
    } catch (err) {
      console.error('Failed to add experience:', err);
    }
  };

  // Sort by start date descending (most recent first)
  const sorted = [...experiences].sort((a, b) => {
    if (!a.startDate) return 1;
    if (!b.startDate) return -1;
    return b.startDate.localeCompare(a.startDate);
  });

  return (
    <section id="experience" className="relative z-10">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-accent-emerald font-medium text-sm uppercase tracking-widest mb-3">
            My Journey
          </p>
          <h2 className="section-title gradient-text-static">Experience</h2>
          <p className="section-subtitle mt-2">
            A timeline of my professional career and the roles that shaped me.
          </p>
        </ScrollReveal>

        <div className="mt-12 relative max-w-3xl">
          {/* Timeline line */}
          <div className="timeline-line" />

          <div className="space-y-10">
            {sorted.map((exp) => (
              <ScrollReveal key={exp.id}>
                <div className="relative pl-14">
                  {/* Timeline dot */}
                  <div className="timeline-dot" />

                  <div className="glass p-6 sm:p-8">
                    {/* Date badge */}
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-xs font-semibold text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">
                        {isEditMode ? (
                          <input
                            className="admin-input text-xs bg-transparent border-none p-0 w-20"
                            value={exp.startDate || ''}
                            onChange={(e) => handleUpdateExp(exp, 'startDate', e.target.value)}
                            placeholder="Start"
                          />
                        ) : (
                          exp.startDate || 'Start'
                        )}
                        {' — '}
                        {isEditMode ? (
                          <input
                            className="admin-input text-xs bg-transparent border-none p-0 w-20"
                            value={exp.endDate || ''}
                            onChange={(e) => handleUpdateExp(exp, 'endDate', e.target.value)}
                            placeholder="End"
                          />
                        ) : (
                          exp.endDate || 'Present'
                        )}
                      </span>

                      {isEditMode && (
                        <button
                          onClick={() => handleDeleteExp(exp.id)}
                          className="delete-btn text-xs"
                        >
                          🗑️ Delete
                        </button>
                      )}
                    </div>

                    {/* Role & Company */}
                    {isEditMode ? (
                      <div className="space-y-2 mb-3">
                        <input
                          className="admin-input font-display font-bold text-lg"
                          value={exp.role || ''}
                          onChange={(e) => handleUpdateExp(exp, 'role', e.target.value)}
                          placeholder="Job Title"
                        />
                        <input
                          className="admin-input text-accent-emerald"
                          value={exp.company || ''}
                          onChange={(e) => handleUpdateExp(exp, 'company', e.target.value)}
                          placeholder="Company Name"
                        />
                      </div>
                    ) : (
                      <>
                        <h3 className="font-display font-bold text-lg text-white">
                          {exp.role}
                        </h3>
                        <p className="text-accent-emerald font-medium text-sm mb-3">
                          {exp.company}
                        </p>
                      </>
                    )}

                    {/* Description */}
                    {isEditMode ? (
                      <textarea
                        className="admin-textarea text-sm"
                        value={exp.description || ''}
                        onChange={(e) =>
                          handleUpdateExp(exp, 'description', e.target.value)
                        }
                        placeholder="Describe your role and achievements..."
                      />
                    ) : (
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Add New Experience Form */}
        {isEditMode && (
          <ScrollReveal>
            <form onSubmit={handleAddExp} className="add-form mt-10 max-w-3xl ml-14">
              <h4 className="text-sm font-semibold text-accent-blue mb-4">
                ➕ Add New Experience
              </h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    className="admin-input"
                    placeholder="Job Title"
                    value={newExp.role}
                    onChange={(e) => setNewExp({ ...newExp, role: e.target.value })}
                    required
                  />
                  <input
                    className="admin-input"
                    placeholder="Company"
                    value={newExp.company}
                    onChange={(e) => setNewExp({ ...newExp, company: e.target.value })}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    className="admin-input"
                    placeholder="Start Date (e.g. Jan 2023)"
                    value={newExp.startDate}
                    onChange={(e) => setNewExp({ ...newExp, startDate: e.target.value })}
                  />
                  <input
                    className="admin-input"
                    placeholder="End Date (e.g. Present)"
                    value={newExp.endDate}
                    onChange={(e) => setNewExp({ ...newExp, endDate: e.target.value })}
                  />
                </div>
                <textarea
                  className="admin-textarea"
                  placeholder="Description of your role..."
                  value={newExp.description}
                  onChange={(e) => setNewExp({ ...newExp, description: e.target.value })}
                />
                <button type="submit" className="btn-primary text-sm">
                  <span>Add Experience</span>
                </button>
              </div>
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
