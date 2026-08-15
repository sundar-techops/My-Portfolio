import { convertDriveUrl } from '../utils/driveUrl';

export default function Hero({ profile }) {
  const resumePreviewUrl = convertDriveUrl(profile?.resumeUrl);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <p className="text-accent-blue font-medium text-lg mb-4 animate-fade-in">
          Hello, I'm
        </p>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6">
          <span className="gradient-text">{profile?.name || 'Your Name'}</span>
        </h1>

        <div className="mb-6">
          <p className="text-xl sm:text-2xl text-slate-300 font-light">
            {profile?.title || 'DevOps & Cloud Engineer'}
          </p>
        </div>

        <div className="mb-10 max-w-2xl mx-auto">
          <p className="text-lg text-slate-400 leading-relaxed">
            {profile?.intro || 'Passionate about building beautiful digital experiences.'}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {resumePreviewUrl && (
            <a
              href={resumePreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="hero-resume-btn"
            >
              <span>📄 View Resume</span>
            </a>
          )}
          <a href="#projects" className="btn-outline">
            View Projects →
          </a>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mt-8">
          {profile?.githubUrl && (
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-accent-blue transition-colors"
            >
              GitHub
            </a>
          )}
          {profile?.linkedinUrl && (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-accent-blue transition-colors"
            >
              LinkedIn
            </a>
          )}
          {profile?.email && (
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-slate-400 hover:text-accent-blue transition-colors"
            >
              Email
            </a>
          )}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-accent-blue rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
