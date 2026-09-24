import { contact, personal, sectionCopy } from '@/config/content.config';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const ROWS = [
  { icon: Mail,  label: 'EMAIL',    value: personal.availability.open ? contact.email : '—', href: `mailto:${contact.email}` },
  { icon: Phone, label: 'PHONE',    value: contact.phone, href: `tel:${contact.phone}` },
  ...(contact.github ? [{ icon: Github, label: 'GITHUB', value: contact.github, href: contact.github }] : []),
  ...(contact.linkedin ? [{ icon: Linkedin, label: 'LINKEDIN', value: contact.linkedin, href: contact.linkedin }] : []),
  { icon: MapPin, label: 'LOCATION', value: contact.location, href: null },
];

export default function ContactPanel() {
  return (
    <div className="space-y-6">
      <div className="max-w-2xl">
        <h2 className="font-sans text-2xl font-semibold text-ink">Let’s talk</h2>
        <p className="font-sans text-base text-muted leading-relaxed mt-2">
          {sectionCopy.contact}
        </p>
      </div>

      {/* Availability badge */}
      {personal.availability.open && (
        <div className="inline-flex items-center gap-2 border border-outline text-muted font-mono text-xs px-3 py-2">
          <span className="w-2 h-2 bg-sky" />
          {personal.availability.label}
        </div>
      )}

      {/* Contact grid */}
      <div className="divide-y divide-outline border border-outline">
        {ROWS.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-center gap-4 px-4 py-3">
            <Icon size={14} className="text-muted shrink-0" />
            <span className="font-mono text-xs text-muted w-20 shrink-0">
              {label}
            </span>
            {href ? (
              <a href={href} target={href.startsWith('mailto') ? '_self' : '_blank'} rel="noreferrer"
                className="font-mono text-sm text-ink hover:text-sky transition-colors break-all">
                {value}
              </a>
            ) : (
              <span className="font-mono text-sm text-ink">{value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
