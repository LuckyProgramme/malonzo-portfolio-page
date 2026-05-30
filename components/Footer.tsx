import { contact, personal } from '@/config/content.config';
import { Github, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-outline bg-nav h-12 flex items-center justify-center shrink-0 z-20 px-6">
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs tracking-wide uppercase text-muted">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </span>
        <a href={contact.github} target="_blank" rel="noreferrer"
          className="text-muted hover:text-sky transition-colors">
          <Github size={14} />
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer"
          className="text-muted hover:text-sky transition-colors">
          <Linkedin size={14} />
        </a>
        <a href={contact.facebook} target="_blank" rel="noreferrer"
          className="text-muted hover:text-sky transition-colors">
          <Facebook size={14} />
        </a>
      </div>
    </footer>
  );
}
