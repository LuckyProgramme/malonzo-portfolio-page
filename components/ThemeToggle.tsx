'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex items-center gap-1 font-mono text-xs tracking-widest uppercase text-muted hover:text-sky border border-outline hover:border-sky transition-colors px-2 py-1.5"
    >
      <span className="opacity-50">[</span>
      {isDark
        ? <Sun size={11} strokeWidth={1.5} />
        : <Moon size={11} strokeWidth={1.5} />
      }
      <span className="ml-0.5">{isDark ? 'LIGHT' : 'DARK'}</span>
      <span className="opacity-50">]</span>
    </button>
  );
}
