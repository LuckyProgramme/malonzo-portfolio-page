'use client';

import Image from 'next/image';
import { personal, experience, contact, education } from '@/config/content.config';
import { useStack } from '@/components/StackContext';
import { MapPin } from 'lucide-react';

export default function RootPanel() {
  const { push } = useStack();

  return (
    <div className="space-y-10">
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {personal.avatarUrl && (
          <div className="w-24 h-24 rounded-full border border-outline overflow-hidden shrink-0 relative">
            <Image src={personal.avatarUrl} alt={personal.name} fill className="object-cover" />
          </div>
        )}
        <div className="flex-1 space-y-3">
          <p className="font-mono text-xs text-muted">{personal.greeting}</p>
          <h1 className="font-sans text-4xl md:text-5xl font-semibold tracking-tight text-ink leading-tight">
            {personal.name}
          </h1>
          <p className="font-mono text-sm text-muted">{personal.role}</p>
          <p className="font-sans text-xl leading-relaxed text-ink max-w-2xl">{personal.tagline}</p>
          {personal.availability.open && (
            <div className="inline-flex items-center gap-2 border border-outline text-muted font-mono text-xs px-3 py-2">
              <span className="w-2 h-2 bg-sky" />
              {personal.availability.label}
            </div>
          )}
          <div className="flex flex-wrap gap-3 pt-2">
            <button onClick={() => push('PROJECTS')} className="border border-navy bg-navy text-white font-mono text-sm px-4 py-2 hover:border-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky">
              View projects
            </button>
            <a href={'mailto:' + contact.email} className="border border-outline bg-surface text-ink font-mono text-sm px-4 py-2 hover:border-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky">
              Email me
            </a>
          </div>
        </div>
      </div>

      {/* ── Bio ───────────────────────────────────────────── */}
      <div className="border-l-2 border-outline pl-5 max-w-3xl">
        <p className="font-sans text-base md:text-lg leading-relaxed text-ink">{personal.bio}</p>
      </div>

      {/* ── Location ──────────────────────────────────────── */}
      <div className="flex items-center gap-2 text-muted font-mono text-sm">
        <MapPin size={12} />
        <span>{contact.location}</span>
      </div>

      {/* ── Experience ────────────────────────────────────── */}
      <section>
        <h2 className="font-sans text-2xl font-semibold text-ink mb-4">Experience</h2>
        <div className="space-y-4">
          {experience.map((entry, i) => (
            <div key={i} className="border border-outline">
              <div className="flex items-center justify-between px-4 py-2 bg-navy border-b border-outline">
                <span className="font-mono text-sm text-white">{entry.company}</span>
                <span className="font-mono text-xs text-white/80">{entry.period}</span>
              </div>
              <div className="p-4 space-y-2 bg-surface">
                <h3 className="font-sans text-lg font-semibold text-ink">{entry.role}</h3>
                <p className="font-sans text-base leading-relaxed text-muted max-w-3xl">{entry.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {entry.tags.map(tag => (
                    <span key={tag} className="font-mono text-xs bg-surface-alt text-muted px-2 py-1 border border-outline">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ─────────────────────────────────────── */}
      <section>
        <h2 className="font-sans text-2xl font-semibold text-ink mb-4">Education</h2>
        <div className="space-y-4">
          {education.map((entry, i) => (
            <div key={i} className="border border-outline">
              <div className="flex items-center justify-between px-4 py-2 bg-navy border-b border-outline">
                <span className="font-mono text-sm text-white">{entry.institution}</span>
                <span className="font-mono text-xs text-white/80">{entry.period}</span>
              </div>
              <div className="p-4 space-y-2 bg-surface">
                <h3 className="font-sans text-lg font-semibold text-ink">{entry.degree}</h3>
                {entry.description && (
                  <p className="font-sans text-base leading-relaxed text-muted">{entry.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
