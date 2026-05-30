import Image from 'next/image';
import { projects } from '@/config/content.config';
import { Github, ExternalLink, BookOpen } from 'lucide-react';

export default function ProjectsPanel() {
  const sorted = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <div className="space-y-4">
      <p className="font-mono text-xs tracking-widest uppercase text-muted">// PROJECTS</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {sorted.map(project => (
          <div key={project.id} className="border border-outline bg-surface flex flex-col">
            {/* Card header — always navy */}
            <div className="flex items-center justify-between px-4 py-2 bg-navy border-b border-outline">
              <span className="font-mono text-xs tracking-widest uppercase text-white">
                {project.title}
              </span>
              {project.featured && (
                <span className="font-mono text-xs text-sky tracking-widest uppercase">--featured</span>
              )}
            </div>

            {/* Image */}
            {project.imageUrl && (
              <div className="relative h-36 border-b border-outline">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Body */}
            <div className="p-4 flex flex-col flex-1 gap-3">
              <p className="font-sans text-sm text-muted leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="font-mono text-xs bg-surface-alt text-muted px-2 py-1 border border-outline">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase border border-outline px-3 py-1.5 text-muted hover:border-sky hover:text-sky transition-colors">
                    <Github size={11} />
                    VIEW_GITHUB
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a href={project.liveDemoUrl} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase border border-outline px-3 py-1.5 text-muted hover:border-sky hover:text-sky transition-colors">
                    <ExternalLink size={11} />
                    LIVE_DEMO
                  </a>
                )}
                {project.caseStudyUrl && (
                  <a href={project.caseStudyUrl} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase border border-outline px-3 py-1.5 text-muted hover:border-sky hover:text-sky transition-colors">
                    <BookOpen size={11} />
                    READ_CASE_STUDY
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
