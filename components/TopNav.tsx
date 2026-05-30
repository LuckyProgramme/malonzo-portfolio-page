'use client';

import { useStack } from '@/components/StackContext';
import { personal, siteIdentity } from '@/config/content.config';
import ThemeToggle from '@/components/ThemeToggle';

const NAV_ITEMS = [
  { id: 'ROOT',     label: 'DEVELOPER INFO' },
  { id: 'STACK',    label: 'STACK' },
  { id: 'PROJECTS', label: 'PROJECTS' },
  { id: 'CONTACT',  label: 'CONTACT' },
] as const;

export default function TopNav() {
  const { activeStack, push } = useStack();

  return (
    <header className="w-full border-b border-outline bg-nav flex items-center justify-between px-6 h-10 shrink-0 z-30 sticky top-0">
      <span className="font-mono text-xs tracking-widest text-muted uppercase">
        {siteIdentity.brandId}
      </span>

      <nav className="hidden md:flex items-center gap-6">
        {NAV_ITEMS.map(({ id, label }) => {
          const active = activeStack.includes(id);
          return (
            <button
              key={id}
              onClick={() => push(id)}
              className={`font-mono text-[13px] tracking-[0.08em] font-semibold uppercase pb-px border-b-2 transition-colors ${
                active
                  ? 'border-sky text-ink'
                  : 'border-transparent text-muted hover:text-ink'
              }`}
            >
              {label}
            </button>
          );
        })}
      </nav>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <a
          href={personal.cvUrl}
          download
          className="hidden sm:block font-mono text-xs font-bold tracking-widest uppercase px-4 py-2 bg-surface border border-outline text-ink hover:border-sky transition-colors"
        >
          DOWNLOAD_CV
        </a>
      </div>
    </header>
  );
}
