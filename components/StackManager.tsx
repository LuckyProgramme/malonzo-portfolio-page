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
  ROOT:     { title: 'About me',         content: <RootPanel /> },
  PROJECTS: { title: 'Projects',         content: <ProjectsPanel /> },
  STACK:    { title: 'Technical skills', content: <StackPanel /> },
  FAQ:      { title: 'Questions',        content: <FaqPanel /> },
  CONTACT:  { title: 'Contact',          content: <ContactPanel /> },
};

export default function StackManager() {
  const { activeStack, remove, clear } = useStack();

  return (
    <div className="flex flex-col flex-1 pt-6 px-4 md:px-6 pb-4">
      {activeStack.length > 1 && (
        <div className="flex justify-end mb-3">
          <button onClick={clear} className="font-mono text-sm text-muted hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky">
            Close other sections
          </button>
        </div>
      )}

      <AnimatePresence initial={false}>
        {activeStack.map(id => {
          const { title, content } = PANEL_CONTENT[id];
          return (
            <Panel
              key={id}
              id={id}
              title={title}
              onClose={id === 'ROOT' ? undefined : () => remove(id)}
            >
              {content}
            </Panel>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
