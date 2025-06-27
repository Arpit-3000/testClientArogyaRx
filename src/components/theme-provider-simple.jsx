import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children, defaultTheme = 'system', storageKey = 'theme' }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(storageKey) || defaultTheme;
    }
    return defaultTheme;
  });

  const applyTheme = useCallback((themeToApply) => {
    const root = window.document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('light', 'dark');
    
    // Apply the selected theme
    if (themeToApply === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
      root.setAttribute('data-theme', systemTheme);
      return systemTheme;
    } else {
      root.classList.add(themeToApply);
      root.setAttribute('data-theme', themeToApply);
      return themeToApply;
    }
  }, []);

  // Initialize theme on mount and listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    // Set initial theme
    const appliedTheme = applyTheme(theme);
    
    // Listen for system theme changes
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme, applyTheme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem(storageKey, newTheme);
    applyTheme(newTheme);
  };

  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme);
      localStorage.setItem(storageKey, newTheme);
      applyTheme(newTheme);
    },
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
