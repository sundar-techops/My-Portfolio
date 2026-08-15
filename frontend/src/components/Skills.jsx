import { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Skills({ skills }) {
  const barsRef = useRef(null);
  const [animated, setAnimated] = useState(false);

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

  const grouped = skills.reduce((acc, skill) => {
    const cat = skill.category || 'Other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

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
                        <span className="text-sm font-medium text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-accent-blue font-semibold">
                          {skill.proficiency}%
                        </span>
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
      </div>
    </section>
  );
}
