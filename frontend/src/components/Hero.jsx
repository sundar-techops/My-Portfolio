import { convertDriveUrl } from '../utils/driveUrl';
import EditableField from './EditableField';
import { useAdmin } from '../context/AdminContext';

export default function Hero({ profile, onUpdate }) {
  const { isEditMode } = useAdmin();
  const resumePreviewUrl = convertDriveUrl(profile?.resumeUrl);

  const handleFieldChange = (field, value) => {
    onUpdate({ ...profile, [field]: value });
  };

  const handleSave = () => {
    if (profile?.id) {
      onUpdate(profile, true); // true = persist
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Greeting */}
        <p className="text-accent-blue font-medium text-lg mb-4 animate-fade-in">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6">
          {isEditMode ? (
            <EditableField
              value={profile?.name}
              onChange={(v) => handleFieldChange('name', v)}
              onSave={handleSave}
              className="text-center text-5xl font-black font-display"
              placeholder="Your Name"
            />
          ) : (
            <span className="gradient-text">{profile?.name || 'Your Name'}</span>
          )}
        </h1>

        {/* Title */}
        <div className="mb-6">
          {isEditMode ? (
            <EditableField
              value={profile?.title}
              onChange={(v) => handleFieldChange('title', v)}
              onSave={handleSave}
              className="text-center text-xl"
              placeholder="Your Title"
            />
          ) : (
            <p className="text-xl sm:text-2xl text-slate-300 font-light">
              {profile?.title || 'Full Stack Developer'}
            </p>
          )}
        </div>

        {/* Intro */}
        <div className="mb-10 max-w-2xl mx-auto">
          {isEditMode ? (
            <EditableField
              value={profile?.intro}
              onChange={(v) => handleFieldChange('intro', v)}
              onSave={handleSave}
              type="textarea"
              className="text-center"
              placeholder="A short intro about yourself..."
            />
          ) : (
            <p className="text-lg text-slate-400 leading-relaxed">
              {profile?.intro || 'Passionate about building beautiful digital experiences.'}
            </p>
          )}
        </div>

        {/* Resume URL (admin only) */}
        {isEditMode && (
          <div className="mb-6 max-w-md mx-auto">
            <label className="text-xs text-slate-500 uppercase tracking-wider block mb-2">
              Resume Google Drive URL
            </label>
            <EditableField
              value={profile?.resumeUrl}
              onChange={(v) => handleFieldChange('resumeUrl', v)}
              onSave={handleSave}
              placeholder="Paste Google Drive share link..."
            />
          </div>
        )}

        {/* CTA Buttons */}
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

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-accent-blue rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
