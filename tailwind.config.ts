import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Semantic tokens — automatically switch via CSS vars
        page:            'var(--c-bg)',
        surface:         'var(--c-surface)',
        'surface-alt':   'var(--c-surface-alt)',
        nav:             'var(--c-nav)',
        outline:         'var(--c-border)',
        'outline-subtle':'var(--c-border-subtle)',
        ink:             'var(--c-text)',
        muted:           'var(--c-text-muted)',
        // Fixed tokens — same in both themes
        navy:     '#0f172a',
        sky:      '#38bdf8',
        'sky-dim':'#0284c7',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none:    '0px',
        full:    '9999px',
      },
      spacing: {
        section: '96px',
        gutter:  '24px',
      },
    },
  },
  plugins: [],
};

export default config;
