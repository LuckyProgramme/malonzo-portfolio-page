'use client';

import { useState } from 'react';
import { skills } from '@/config/content.config';
import SkillsModal from '@/components/modals/SkillsModal';

type SkillCategory = typeof skills[number];

export default function StackPanel() {
  const [selected, setSelected] = useState<SkillCategory | null>(null);

  return (
    <div className="space-y-6">
      <p className="font-mono text-xs tracking-widest uppercase text-muted">// TECH STACK — CORE COMPETENCIES</p>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2">
        {skills.map(cat => (
          <button
            key={cat.category}
            onClick={() => setSelected(cat)}
            className="font-mono text-xs tracking-widest uppercase px-3 py-1.5 border border-outline text-muted hover:border-sky hover:text-sky transition-colors"
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Inline skill grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(cat => (
          <div key={cat.category} className="space-y-3">
            <p className="font-mono text-xs tracking-widest uppercase text-sky">{cat.label}</p>
            {cat.items.map(skill => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <SkillsModal category={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between font-mono text-xs text-muted">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-px bg-outline w-full relative">
        <div
          className="h-px bg-sky skill-bar-fill absolute left-0 top-0"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
