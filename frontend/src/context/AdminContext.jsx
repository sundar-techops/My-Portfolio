import { createContext, useContext, useState, useCallback } from 'react';
import API from '../api/axios';

const AdminContext = createContext(null);

export function AdminProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const login = useCallback(async (username, password) => {
    try {
      const response = await API.post('/auth/login', { username, password });
      if (response.data.authenticated) {
        setIsLoggedIn(true);
        setShowLogin(false);
        return { success: true };
      }
      return { success: false, message: 'Invalid credentials' };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed',
      };
    }
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setIsEditMode(false);
  }, []);

  const toggleEditMode = useCallback(() => {
    setIsEditMode((prev) => !prev);
  }, []);

  const openLogin = useCallback(() => setShowLogin(true), []);
  const closeLogin = useCallback(() => setShowLogin(false), []);

  return (
    <AdminContext.Provider
      value={{
        isLoggedIn,
        isEditMode,
        showLogin,
        login,
        logout,
        toggleEditMode,
        openLogin,
        closeLogin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
}
