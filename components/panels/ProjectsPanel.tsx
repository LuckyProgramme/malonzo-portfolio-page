import Image from 'next/image';
import { projects, sectionCopy } from '@/config/content.config';
import { Github, ExternalLink, BookOpen } from 'lucide-react';

export default function ProjectsPanel() {
  const sorted = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <div className="space-y-6">
      <div className="max-w-2xl">
        <p className="font-sans text-lg text-ink leading-relaxed">
          {sectionCopy.projects}
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {sorted.map(project => (
          <div key={project.id} className="border border-outline bg-surface flex flex-col">
            <div className="flex items-center justify-between gap-4 px-5 pt-5">
              <h3 className="font-sans text-xl font-semibold text-ink">
                {project.title}
              </h3>
              {project.featured && (
                <span className="font-mono text-xs text-muted shrink-0">Selected work</span>
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
            <div className="p-5 flex flex-col flex-1 gap-4">
              <p className="font-sans text-base text-muted leading-relaxed flex-1 max-w-prose">
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
                    className="flex items-center gap-1.5 font-mono text-xs border border-outline px-3 py-2 text-ink hover:border-sky hover:text-sky transition-colors">
                    <Github size={11} />
                    View code
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a href={project.liveDemoUrl} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs border border-outline px-3 py-2 text-ink hover:border-sky hover:text-sky transition-colors">
                    <ExternalLink size={11} />
                    Visit project
                  </a>
                )}
                {project.caseStudyUrl && (
                  <a href={project.caseStudyUrl} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs border border-outline px-3 py-2 text-ink hover:border-sky hover:text-sky transition-colors">
                    <BookOpen size={11} />
                    Read case study
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
