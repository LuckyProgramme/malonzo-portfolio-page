'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type PanelId = 'ROOT' | 'PROJECTS' | 'STACK' | 'FAQ' | 'CONTACT';

interface StackContextValue {
  activeStack: PanelId[];
  push: (id: string) => void;
  remove: (id: PanelId) => void;
  clear: () => void;
}

const StackContext = createContext<StackContextValue | null>(null);

export function useStack() {
  const ctx = useContext(StackContext);
  if (!ctx) throw new Error('useStack must be used inside StackProvider');
  return ctx;
}

const VALID_IDS: PanelId[] = ['ROOT', 'PROJECTS', 'STACK', 'FAQ', 'CONTACT'];

export function StackProvider({ children }: { children: ReactNode }) {
  const [activeStack, setActiveStack] = useState<PanelId[]>(['ROOT']);

  const push = useCallback((id: string) => {
    if (!VALID_IDS.includes(id as PanelId)) return;
    const pid = id as PanelId;
    setActiveStack(prev => [pid, ...prev.filter(panel => panel !== pid)]);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelector('main')?.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  }, []);

  const remove = useCallback((id: PanelId) => {
    if (id === 'ROOT') return;
    setActiveStack(prev => prev.filter(p => p !== id));
  }, []);

  const clear = useCallback(() => {
    setActiveStack(['ROOT']);
  }, []);

  return (
    <StackContext.Provider value={{ activeStack, push, remove, clear }}>
      {children}
    </StackContext.Provider>
  );
}
