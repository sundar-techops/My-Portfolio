export default function Footer({ profile }) {
  const year = new Date().getFullYear();

  const links = [
    profile?.githubUrl && { label: 'GitHub', href: profile.githubUrl },
    profile?.linkedinUrl && { label: 'LinkedIn', href: profile.linkedinUrl },
    profile?.email && { label: 'Email', href: `mailto:${profile.email}` },
  ].filter(Boolean);

  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {year} — Built with passion & precision.
        </p>

        {links.length > 0 && (
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="text-sm text-slate-400 hover:text-accent-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
