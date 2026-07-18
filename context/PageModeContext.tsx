'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PageMode } from '@/types';
import { isAppsHost } from '@/hooks/useIsAppsDomain';

interface PageModeContextType {
  mode: PageMode;
  setMode: React.Dispatch<React.SetStateAction<PageMode>>;
  toggleMode: () => void;
}

interface PageModeProviderProps {
  children: ReactNode;
}

const PageModeContext = createContext<PageModeContextType | null>(null);

const STORAGE_KEY = 'pageMode';

export const PageModeProvider: React.FC<PageModeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<PageMode>('professional');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize from URL params and localStorage on client
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const kindParam = urlParams.get('kind');

    let initialMode: PageMode = 'professional';

    if (kindParam === 'poetry' || kindParam === 'personal') {
      initialMode = 'personal';
    } else if (kindParam === 'professional' || kindParam === 'pro') {
      initialMode = 'professional';
    } else {
      // Fall back to localStorage
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'personal') {
        initialMode = 'personal';
      }
    }

    setMode(initialMode);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    localStorage.setItem(STORAGE_KEY, mode);

    // The apps subdomain has no mode switcher, so leave its URL untouched
    if (isAppsHost()) return;

    // Reflect only the non-default mode in the URL; professional needs no param
    const url = new URL(window.location.href);
    if (mode === 'personal') {
      url.searchParams.set('kind', 'poetry');
    } else {
      url.searchParams.delete('kind');
    }
    window.history.replaceState({}, '', url);
  }, [mode, isInitialized]);

  const toggleMode = () => {
    const goingToPersonal = mode === 'professional';
    setMode(prev => prev === 'professional' ? 'personal' : 'professional');

    if (goingToPersonal) {
      // Small delay needed when switching to personal/poetry mode
      setTimeout(() => window.scrollTo(0, 0), 10);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <PageModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </PageModeContext.Provider>
  );
};

export const usePageMode = (): PageModeContextType => {
  const context = useContext(PageModeContext);
  if (!context) {
    throw new Error('usePageMode must be used within a PageModeProvider');
  }
  return context;
};
