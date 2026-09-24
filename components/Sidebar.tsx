'use client';

import Image from 'next/image';
import { useStack } from '@/components/StackContext';
import { useTheme } from '@/components/ThemeProvider';
import { personal, siteIdentity, contact } from '@/config/content.config';
import {
  Sun, Moon, Download,
  User, FolderOpen, Package, HelpCircle, Mail,
} from 'lucide-react';

const PRIMARY_NAV = [
  { id: 'ROOT',     label: 'About',    icon: User },
  { id: 'PROJECTS', label: 'Projects', icon: FolderOpen },
  { id: 'STACK',    label: 'Skills',   icon: Package },
  { id: 'FAQ',      label: 'Questions', icon: HelpCircle },
  { id: 'CONTACT',  label: 'Contact',  icon: Mail },
] as const;

export default function Sidebar() {
  const { activeStack, push } = useStack();
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-[220px] shrink-0 border-r border-outline bg-surface h-screen overflow-y-auto">

        {/* Brand */}
        <div className="px-4 py-3 border-b border-outline">
          <span className="font-mono text-sm font-bold tracking-widest text-muted uppercase">
            {siteIdentity.brandId}
          </span>
        </div>

        {/* User block */}
        <div className="px-3 pt-3 pb-2 border-b border-outline flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-navy border border-outline flex items-center justify-center shrink-0 overflow-hidden relative">
            {personal.avatarUrl ? (
              <Image src={personal.avatarUrl} alt={personal.name} fill className="object-cover" />
            ) : (
              <span className="font-mono text-xs text-sky uppercase">
                {personal.name.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <p className="font-mono text-[12px] tracking-widest text-muted uppercase">
              {siteIdentity.sysUser}
            </p>
            <p className="font-mono text-xs text-muted">{personal.role}</p>
          </div>
        </div>

        {/* Download CV — under user block */}
        <div className="px-4 pt-2 pb-2 border-b border-outline">
          <a
            href={personal.cvUrl}
            download
            className="flex items-center gap-2 w-full px-3 py-2 border border-[#334155] font-mono text-[12px] tracking-[0.06em] uppercase text-slate-400 hover:border-sky hover:text-sky transition-colors"
          >
            <Download size={14} />
            <span>DOWNLOAD RESUME</span>
          </a>

          {/* Theme toggle switch — under Download CV */}
          <div className="pt-2">
            <p className="font-mono text-xs text-muted mb-1.5">Theme</p>
            <button
              onClick={toggle}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="relative w-full h-7 border border-[#334155] bg-surface-alt flex items-center cursor-pointer overflow-hidden"
            >
              <span className="flex-1 flex items-center justify-center z-10 pointer-events-none">
                <Sun size={11} className="text-slate-500" />
              </span>
              <span className="flex-1 flex items-center justify-center z-10 pointer-events-none">
                <Moon size={11} className="text-slate-500" />
              </span>
              <div
                className={`absolute top-0 bottom-0 w-1/2 bg-navy flex items-center justify-center transition-all duration-200 ease-in-out ${
                  isDark ? 'left-1/2' : 'left-0'
                }`}
              >
                {isDark
                  ? <Moon size={12} className="text-sky" />
                  : <Sun size={12} className="text-sky" />
                }
              </div>
            </button>
          </div>
        </div>

        {/* Primary nav */}
        <nav className="py-2">
          {PRIMARY_NAV.map(({ id, label, icon: Icon }) => {
            const active = activeStack[0] === id;
            return (
              <button
                key={id}
                onClick={() => push(id)}
                aria-pressed={active}
                className={`w-full text-left px-4 py-2 font-mono text-sm border-l-2 transition-colors flex items-center gap-2.5 ${
                  active
                    ? 'border-sky bg-navy text-white font-semibold hover:bg-white hover:text-navy'
                    : 'border-transparent text-slate-500 hover:bg-navy hover:text-white'
                }`}
              >
                <Icon size={14} className="shrink-0" />
                {label}
              </button>
            );
          })}
        </nav>

        {/* Spacer — pushes secondary nav to bottom */}
        <div className="flex-1" />

        {/* Secondary nav — REPOS + STATUS */}
        <div className="border-t border-outline">
          <div className="flex">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2 px-4 font-mono text-[13px] tracking-[0.06em] uppercase text-slate-500 hover:text-sky transition-colors text-center"
            >
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2 px-4 font-mono text-[13px] tracking-[0.06em] uppercase text-slate-500 hover:text-sky transition-colors text-center"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </aside>

      {/* Mobile bottom tab bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-nav border-t border-outline flex">
        {PRIMARY_NAV.map(({ id, label }) => {
          const active = activeStack[0] === id;
          return (
            <button
              key={id}
              onClick={() => push(id)}
              aria-pressed={active}
              className={`flex-1 py-3 font-mono text-xs transition-colors ${
                active ? 'text-sky border-t-2 border-sky' : 'text-muted border-t-2 border-transparent'
              }`}
            >
              {label}
            </button>
          );
        })}
      </nav>
    </>
  );
}
