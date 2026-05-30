'use client';

import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import Panel from '@/components/Panel';
import RootPanel from '@/components/panels/RootPanel';
import ProjectsPanel from '@/components/panels/ProjectsPanel';
import StackPanel from '@/components/panels/StackPanel';
import FaqPanel from '@/components/panels/FaqPanel';
import ContactPanel from '@/components/panels/ContactPanel';
import { useStack, PanelId } from '@/components/StackContext';

const PANEL_CONTENT: Record<PanelId, { title: string; content: ReactNode }> = {
  ROOT:     { title: '// DEVELOPER INFO',    content: <RootPanel /> },
  PROJECTS: { title: '// PROJECTS',          content: <ProjectsPanel /> },
  STACK:    { title: '// LIB — TECH STACK',  content: <StackPanel /> },
  FAQ:      { title: '// FAQ — Q&A',         content: <FaqPanel /> },
  CONTACT:  { title: '// STATUS — CONTACT',  content: <ContactPanel /> },
};

export default function StackManager() {
  const { activeStack, remove, clear } = useStack();

  if (activeStack.length === 0) {
    return (
      <div className="pt-3 px-4 md:px-6 pb-4">
        <div className="relative min-h-[60vh]">
          <div className="panel-grid absolute inset-0 pointer-events-none" />
          <div className="relative z-10">
            <p className="font-mono text-[12px] tracking-[0.12em] uppercase text-[#64748b] pt-3 px-5 pb-2">
              ACTIVE_STACK
            </p>
            <div className="mt-3 border border-dashed border-outline flex flex-col items-center justify-center py-16 gap-[10px]">
              <p className="font-mono text-lg font-semibold tracking-[0.15em] uppercase text-slate-600">
                AWAITING_INPUT
              </p>
              <p className="font-mono text-[13px] tracking-[0.05em] text-slate-500">
                Select items from side nav.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-0 pt-3 px-4 md:px-6 pb-4">
      {/* Close all button — only visible when panels are open */}
      <div className="flex justify-end mb-3">
        <button
          onClick={clear}
          className="font-mono text-xs tracking-widest uppercase border border-red-500/40 text-red-400 hover:border-red-500 hover:text-red-500 transition-colors px-3 py-1.5"
        >
          [ CLOSE ]
        </button>
      </div>

      <AnimatePresence initial={false}>
        {activeStack.map(id => {
          const { title, content } = PANEL_CONTENT[id];
          return (
            <Panel
              key={id}
              id={id}
              title={title}
              onClose={() => remove(id)}
            >
              {content}
            </Panel>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
