import { useAdmin } from '../context/AdminContext';

export default function Footer() {
  const { openLogin, isLoggedIn } = useAdmin();
  const year = new Date().getFullYear();

  const handleDoubleClick = () => {
    if (!isLoggedIn) {
      openLogin();
    }
  };

  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          © {year} — Built with passion & precision.
        </p>

        {/* Faint lock icon — double click to open admin login */}
        <button
          onDoubleClick={handleDoubleClick}
          className="text-slate-700 hover:text-slate-500 transition-colors cursor-default select-none"
          title=""
          aria-label="Admin access"
          id="admin-lock-btn"
        >
          🔒
        </button>
      </div>
    </footer>
  );
}
