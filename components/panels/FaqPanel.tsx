'use client';

import { useState } from 'react';
import { faq } from '@/config/content.config';

export default function FaqPanel() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      <h2 className="font-sans text-2xl font-semibold text-ink mb-4">A little more about my work</h2>

      {faq.map((entry, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border border-outline">
            {/* Header — always navy bg, always white text */}
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between px-4 py-3 bg-surface-alt hover:bg-surface transition-colors text-left cursor-pointer group"
            >
              <span className="font-sans text-base font-medium text-ink pr-4">
                {entry.question}
              </span>
              <span className="font-mono text-sm text-muted shrink-0" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {/* Collapsible body */}
            <div
              style={{
                maxHeight: isOpen ? '300px' : '0',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.3s ease, opacity 0.3s ease',
              }}
            >
              <div className="px-4 py-4 bg-surface border-t border-outline">
                <p className="font-sans text-base text-muted leading-relaxed max-w-prose">{entry.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
