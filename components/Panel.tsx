'use client';

import { useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

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

function useTypewriter(text: string, speed = 35) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

export default function Panel({ id, title, onClose, children }: PanelProps) {
  const displayed = useTypewriter(title);

  return (
    <motion.div
      id={id}
      layout
      variants={panelVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="mb-4 border border-outline bg-surface overflow-hidden"
    >
      {/* Header bar */}
      <div data-panel-header className="flex items-center justify-between px-4 py-2 bg-navy border-b border-outline">
        <span className="font-mono text-sm tracking-widest uppercase text-white">
          {displayed}
        </span>
        {onClose && (
          <button
            onClick={onClose}
            className="font-mono text-xs text-white/50 hover:text-sky transition-colors ml-4"
            aria-label="Close panel"
          >
            [ X ]
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
