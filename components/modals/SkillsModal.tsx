'use client';

import { useEffect, useState } from 'react';

interface SkillItem { name: string; level: number; }
interface SkillCategory { category: string; label: string; items: SkillItem[]; }

interface Props {
  category: SkillCategory;
  onClose: () => void;
}

export default function SkillsModal({ category, onClose }: Props) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimated(true));
    });
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(15,23,42,0.75)' }}
      onClick={onClose}
    >
      <div
        className="w-[90%] max-w-md border border-outline-subtle bg-white"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-4 py-2 bg-navy border-b border-outline">
          <span className="font-mono text-xs tracking-widest uppercase text-ink">
            {category.label}
          </span>
          <button
            onClick={onClose}
            className="font-mono text-xs text-muted hover:text-sky transition-colors"
          >
            [ X ]
          </button>
        </div>

        {/* Skill rows */}
        <div className="p-5 space-y-4">
          {category.items.map(skill => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between font-mono text-xs text-ink">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-px bg-outline-subtle w-full relative">
                <div
                  className="h-px bg-sky absolute left-0 top-0 skill-bar-fill"
                  style={{ width: animated ? `${skill.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
