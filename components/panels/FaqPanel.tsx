'use client';

import { useState } from 'react';
import { faq } from '@/config/content.config';

export default function FaqPanel() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-1">
      <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
        // FAQ — FREQUENTLY ASKED QUESTIONS
      </p>

      {faq.map((entry, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border border-outline">
            {/* Header — always navy bg, always white text */}
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between px-4 py-3 bg-surface-alt hover:bg-surface transition-colors text-left cursor-pointer group"
            >
              <span className="font-mono text-xs tracking-widest uppercase text-navy dark:text-white pr-4">
                // Q: {entry.question}
              </span>
              <span className="font-mono text-xs text-sky shrink-0">
                {isOpen ? '[ — ]' : '[ + ]'}
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
                <p className="font-mono text-sm text-muted leading-relaxed">{entry.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
