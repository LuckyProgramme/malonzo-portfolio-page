import { contact, personal } from '@/config/content.config';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-outline bg-nav min-h-12 flex items-center shrink-0 z-20 px-6 py-3">
      <div className="flex flex-wrap items-center gap-4">
        <span className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {personal.name}
        </span>
        <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"
          className="text-muted hover:text-sky transition-colors">
          <Github size={14} />
        </a>
        {contact.linkedin && (
          <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"
            className="text-muted hover:text-sky transition-colors">
            <Linkedin size={14} />
          </a>
        )}
      </div>
    </footer>
  );
}
