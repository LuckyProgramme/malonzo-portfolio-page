import { moreTools, projects, sectionCopy, skills } from '@/config/content.config';

export default function StackPanel() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <p className="font-sans text-lg leading-relaxed text-ink">
          {sectionCopy.skills}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(category => (
          <section key={category.category} className="border-t-2 border-outline pt-4">
            <h3 className="font-sans text-lg font-semibold text-ink mb-3">{category.label}</h3>
            <ul className="space-y-2">
              {category.items.map(name => (
                <li key={name} className="font-mono text-sm text-muted border-b border-outline-subtle pb-2">
                  {name}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="border border-outline bg-surface p-5 max-w-3xl">
        <h3 className="font-sans text-lg font-semibold text-ink">Where I’ve used them</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
          {projects.slice(0, 2).map(project => (
            <div key={project.id}>
              <h4 className="font-sans text-base font-semibold text-ink">{project.title}</h4>
              <p className="font-sans text-sm leading-relaxed text-muted mt-1">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      <details className="max-w-3xl border-t border-outline pt-4">
        <summary className="font-mono text-sm text-ink cursor-pointer hover:text-sky">
          More tools I’ve used
        </summary>
        <ul className="flex flex-wrap gap-2 mt-4">
          {moreTools.map(name => (
            <li key={name} className="font-mono text-xs text-muted border border-outline bg-surface px-3 py-2">
              {name}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
