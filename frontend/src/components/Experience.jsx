import ScrollReveal from './ScrollReveal';

export default function Experience({ experiences }) {
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
          <div className="timeline-line" />

          <div className="space-y-10">
            {sorted.map((exp) => (
              <ScrollReveal key={exp.id}>
                <div className="relative pl-14">
                  <div className="timeline-dot" />

                  <div className="glass p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-xs font-semibold text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">
                        {exp.startDate || 'Start'} — {exp.endDate || 'Present'}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white">
                      {exp.role}
                    </h3>
                    <p className="text-accent-emerald font-medium text-sm mb-3">
                      {exp.company}
                    </p>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
