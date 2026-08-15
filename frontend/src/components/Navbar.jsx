import { useState, useEffect } from 'react';
import { convertDriveUrl } from '../utils/driveUrl';

export default function Navbar({ profile }) {
  const [scrolled, setScrolled] = useState(false);
  const resumePreviewUrl = convertDriveUrl(profile?.resumeUrl);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-display font-bold gradient-text-static">
          {profile?.name || 'Portfolio'}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-emerald group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {resumePreviewUrl && (
            <a
              href={resumePreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
              id="navbar-resume-btn"
            >
              <span>📄 View Resume</span>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
