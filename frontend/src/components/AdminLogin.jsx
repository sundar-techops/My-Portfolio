import { useState } from 'react';
import { useAdmin } from '../context/AdminContext';

export default function AdminLogin() {
  const { showLogin, closeLogin, login } = useAdmin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!showLogin) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(username, password);
    setLoading(false);

    if (!result.success) {
      setError(result.message);
    } else {
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="modal-overlay" onClick={closeLogin}>
      <div
        className="glass-strong p-8 sm:p-10 w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">🔐</div>
          <h2 className="font-display text-2xl font-bold text-white">Admin Login</h2>
          <p className="text-slate-400 text-sm mt-2">
            Enter your credentials to manage the portfolio.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-slate-400 uppercase tracking-wider block mb-2">
              Username
            </label>
            <input
              type="text"
              className="admin-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              required
              autoFocus
              id="admin-username"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400 uppercase tracking-wider block mb-2">
              Password
            </label>
            <input
              type="password"
              className="admin-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              id="admin-password"
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center bg-red-400/10 rounded-lg p-3 border border-red-400/20">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn-primary w-full justify-center"
            disabled={loading}
            id="admin-login-submit"
          >
            <span>{loading ? 'Authenticating...' : 'Login'}</span>
          </button>
        </form>

        <button
          onClick={closeLogin}
          className="mt-4 w-full text-center text-sm text-slate-500 hover:text-slate-300 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
