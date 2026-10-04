import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const SYSTEM_QUERY = '(prefers-color-scheme: light)';

const readTheme = (): Theme =>
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

const applyTheme = (theme: Theme) => {
  document.documentElement.setAttribute('data-theme', theme);
};

/**
 * Current colour theme plus a toggle. The initial value is set on <html> by
 * the inline script in layout.tsx; this hook only reads and changes it. Until
 * the visitor picks a theme explicitly, it keeps following the system setting.
 */
const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme(readTheme());

    const media = window.matchMedia(SYSTEM_QUERY);
    const onSystemChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem(STORAGE_KEY);
      } catch {
        // Storage blocked: keep following the system setting
      }
      if (saved === 'light' || saved === 'dark') return;
      const next: Theme = e.matches ? 'light' : 'dark';
      applyTheme(next);
      setTheme(next);
    };
    media.addEventListener('change', onSystemChange);
    return () => media.removeEventListener('change', onSystemChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = readTheme() === 'light' ? 'dark' : 'light';
    applyTheme(next);
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked: the choice lasts for this page view only
    }
  }, []);

  return { theme, toggleTheme };
};

export default useTheme;
