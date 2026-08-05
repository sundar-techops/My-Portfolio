import { useAdmin } from '../context/AdminContext';

export default function AdminToolbar() {
  const { isLoggedIn, isEditMode, toggleEditMode, logout } = useAdmin();

  if (!isLoggedIn) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 glass-strong border-t border-accent-blue/20"
      id="admin-toolbar"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left — Status */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
          <span className="text-sm text-slate-300 font-medium">Admin Mode</span>
        </div>

        {/* Center — Edit Mode Toggle */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-400">Edit Mode</span>
          <button
            onClick={toggleEditMode}
            className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
              isEditMode
                ? 'bg-accent-emerald shadow-lg shadow-accent-emerald/30'
                : 'bg-dark-700'
            }`}
            id="edit-mode-toggle"
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                isEditMode ? 'translate-x-6' : ''
              }`}
            />
          </button>
          {isEditMode && (
            <span className="text-xs text-accent-emerald font-medium animate-pulse">
              EDITING
            </span>
          )}
        </div>

        {/* Right — Logout */}
        <button
          onClick={logout}
          className="text-sm text-slate-400 hover:text-red-400 transition-colors font-medium"
          id="admin-logout-btn"
        >
          Logout →
        </button>
      </div>
    </div>
  );
}
