import ScrollReveal from './ScrollReveal';

export default function About({ profile }) {
  return (
    <section id="about" className="relative z-10">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-accent-blue font-medium text-sm uppercase tracking-widest mb-3">
            Get to know me
          </p>
          <h2 className="section-title gradient-text-static">About Me</h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass p-8 sm:p-12 mt-10 max-w-4xl">
            <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-line">
              {profile?.about ||
                'Tell the world about yourself. Your background, passions, and what drives you.'}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
