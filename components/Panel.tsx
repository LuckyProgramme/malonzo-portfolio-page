'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface PanelProps {
  id: string;
  title: string;
  onClose?: () => void;
  children: ReactNode;
}

const panelVariants = {
  initial: { opacity: 0, y: -20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit:    { opacity: 0, y: 10, transition: { duration: 0.2 } },
};

export default function Panel({ id, title, onClose, children }: PanelProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      layout={!reducedMotion}
      variants={reducedMotion ? undefined : panelVariants}
      initial={reducedMotion ? false : 'initial'}
      animate={reducedMotion ? undefined : 'animate'}
      exit={reducedMotion ? undefined : 'exit'}
      className="mb-4 border border-outline bg-surface overflow-hidden"
    >
      {/* Header bar */}
      <div data-panel-header className="flex items-center justify-between px-4 py-2 bg-navy border-b border-outline">
        <span className="font-mono text-sm text-white">
          {title}
        </span>
        {onClose && (
          <button
            onClick={onClose}
            className="font-mono text-sm text-white/80 hover:text-sky transition-colors ml-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky"
            aria-label={'Close ' + title}
          >
            Close
          </button>
        )}
      </div>

      {/* Body with grid overlay */}
      <div className="relative">
        <div className="panel-grid absolute inset-0 pointer-events-none" />
        <div className="relative z-10 p-6">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
