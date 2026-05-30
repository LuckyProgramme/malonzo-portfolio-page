import Image from 'next/image';
import { personal, experience, contact, certifications, education, achievements } from '@/config/content.config';
import { MapPin } from 'lucide-react';

export default function RootPanel() {
  return (
    <div className="space-y-8">
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {personal.avatarUrl && (
          <div className="w-20 h-20 rounded-full border border-outline overflow-hidden shrink-0 relative">
            <Image src={personal.avatarUrl} alt={personal.name} fill className="object-cover" />
          </div>
        )}
        <div className="flex-1 space-y-2">
          <h1 className="font-mono text-5xl md:text-6xl font-bold tracking-tighter text-ink leading-none">
            {personal.name}
          </h1>
          <p className="font-mono text-xs tracking-widest uppercase text-sky">{personal.role}</p>
          <p className="font-mono text-base leading-relaxed text-muted max-w-xl">{personal.tagline}</p>
          {personal.availability.open && (
            <div className="inline-flex items-center gap-2 border border-sky text-sky font-mono text-xs tracking-widest uppercase px-3 py-2 mt-2">
              <span className="w-2 h-2 bg-sky pulse-dot" />
              {personal.availability.label}
            </div>
          )}
        </div>
      </div>

      {/* ── Bio ───────────────────────────────────────────── */}
      <div className="border border-outline bg-surface-alt p-4">
        <p className="font-mono text-xs tracking-widest uppercase text-muted mb-2">// BIO</p>
        <p className="font-mono text-base leading-relaxed text-ink whitespace-pre-line">{personal.bio}</p>
      </div>

      {/* ── Location ──────────────────────────────────────── */}
      <div className="flex items-center gap-2 text-muted font-mono text-xs tracking-widest uppercase">
        <MapPin size={12} />
        <span>{contact.location}</span>
      </div>

      {/* ── 01 Experience ─────────────────────────────────── */}
      <section>
        <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">// 01_EXPERIENCE</p>
        <div className="space-y-4">
          {experience.map((entry, i) => (
            <div key={i} className="border border-outline">
              <div className="flex items-center justify-between px-4 py-2 bg-navy border-b border-outline">
                <span className="font-mono text-sm font-bold tracking-widest uppercase text-white">{entry.company}</span>
                <span className="font-mono text-xs text-sky/70">{entry.period}</span>
              </div>
              <div className="p-4 space-y-2 bg-surface">
                <p className="font-mono text-lg font-bold text-sky">{entry.role}</p>
                <p className="font-mono text-base leading-relaxed text-muted">{entry.description}</p>
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

      {/* ── 02 Certifications ─────────────────────────────── */}
      <section>
        <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">// 02_CERTIFICATIONS</p>
        <div className="space-y-4">
          {certifications.map((cert, i) => (
            <div key={i} className="border border-outline">
              <div className="flex items-center justify-between px-4 py-2 bg-navy border-b border-outline">
                <span className="font-mono text-sm font-bold tracking-widest uppercase text-white">{cert.name}</span>
                <span className="font-mono text-xs text-sky/70">{cert.year}</span>
              </div>
              <div className="p-4 space-y-2 bg-surface">
                <p className="font-mono text-xs tracking-widest uppercase text-sky">{cert.issuer}</p>
                {cert.description && (
                  <p className="font-mono text-sm leading-relaxed text-muted">{cert.description}</p>
                )}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cert.tags.map(tag => (
                    <span key={tag} className="font-mono text-xs bg-surface-alt text-muted px-2 py-1 border border-outline">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 03 Education ──────────────────────────────────── */}
      <section>
        <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">// 03_EDUCATION</p>
        <div className="space-y-4">
          {education.map((entry, i) => (
            <div key={i} className="border border-outline">
              <div className="flex items-center justify-between px-4 py-2 bg-navy border-b border-outline">
                <span className="font-mono text-sm font-bold tracking-widest uppercase text-white">{entry.institution}</span>
                <span className="font-mono text-xs text-sky/70">{entry.period}</span>
              </div>
              <div className="p-4 space-y-2 bg-surface">
                <p className="font-mono text-xs tracking-widest uppercase text-sky">{entry.degree}</p>
                {entry.description && (
                  <p className="font-mono text-sm leading-relaxed text-muted">{entry.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 04 Achievements ───────────────────────────────── */}
      <section>
        <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">// 04_ACHIEVEMENTS</p>
        <div className="border border-outline bg-surface">
          {achievements.map((item, i) => (
            <div key={i} className="flex items-start justify-between gap-4 px-4 py-3 border-b border-outline last:border-0">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <span className="text-sky font-mono text-sm shrink-0 mt-0.5">{'>'}</span>
                <div>
                  <p className="font-mono text-sm font-semibold text-ink">{item.title}</p>
                  <p className="font-mono text-xs text-muted mt-0.5 leading-relaxed">{item.description}</p>
                </div>
              </div>
              <span className="font-mono text-xs text-muted shrink-0 mt-0.5">{item.year}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
