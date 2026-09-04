import { useParams, Link } from "react-router-dom";
import { projects, liveDemos } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import { projectCategoryConfig } from "../components/Experience";
import { ExternalLink } from "lucide-react";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-slate-400 text-lg">{ui.projectPage.notFound[lang]}</p>
          <Link to="/" className="mt-4 inline-block text-indigo-600 hover:text-indigo-700 transition-colors font-medium">
            {ui.projectPage.back[lang]}
          </Link>
        </div>
      </div>
    );
  }

  const sortedCategories = [...project.categories].sort((a, b) => (a === "data" ? -1 : b === "data" ? 1 : 0));
  const content = project.content;
  const others = projects
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0))
    .slice(0, 3);

  return (
    <main className="pt-24 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <Link to="/#projects"
          className="inline-flex items-center text-slate-400 hover:text-indigo-600 text-sm transition-colors mb-10 font-medium">
          {ui.projectPage.back[lang]}
        </Link>

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            {sortedCategories.map((c) => {
              const cfg = projectCategoryConfig(c);
              return cfg ? (
                <span key={c} className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs font-semibold ${cfg.badge}`}>
                  {cfg.icon} {cfg.label}
                </span>
              ) : null;
            })}
            <span className="text-slate-400 text-xs font-medium">{project.date}</span>
            <span className="text-slate-400 text-xs">· {project.company}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            {project.title[lang]}
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            {project.description[lang]}
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_260px] gap-12 items-start">

          {/* Content */}
          <div className="space-y-10">
            <ContentSection title={ui.projectPage.context[lang]}>
              <p className="text-slate-600 leading-relaxed">{content.context[lang]}</p>
            </ContentSection>

            <ContentSection title={ui.projectPage.approach[lang]}>
              <ul className="space-y-3">
                {content.approach[lang].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600">
                    <span className="text-indigo-400 mt-1 flex-shrink-0 font-bold">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ContentSection>

            <ContentSection title={ui.projectPage.solution[lang]}>
              <p className="text-slate-600 leading-relaxed">{content.solution[lang]}</p>
            </ContentSection>

            {/* Key outcome callout */}
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
              <p className="text-indigo-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                {ui.projectPage.keyOutcome[lang]}
              </p>
              <p className="text-slate-900 text-base leading-relaxed font-semibold">
                {content.keyOutcome[lang]}
              </p>
            </div>

            {content.applications && (
              <ContentSection title={ui.projectPage.applications[lang]}>
                <ul className="space-y-2">
                  {content.applications[lang].map((app, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 text-sm">
                      <span className="text-indigo-400 mt-0.5 flex-shrink-0 font-bold">·</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </ContentSection>
            )}

            {content.link && (
              <a href={content.link} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors text-sm">
                <ExternalLink size={15} />
                {lang === "fr" ? "Visiter le projet →" : "Visit project →"}
              </a>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:sticky md:top-28 bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-5 shadow-sm">
            <h3 className="text-slate-900 font-bold text-sm">{ui.projectPage.details[lang]}</h3>

            <div className="space-y-3 text-sm">
              <DetailRow label={ui.projectPage.type[lang]} value={project.type[lang]} />
              <DetailRow label={ui.projectPage.date[lang]} value={project.date} />
              <DetailRow label={ui.projectPage.role[lang]} value={project.role[lang]} />
            </div>

            <div className="border-t border-slate-200 pt-4">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-3 font-semibold">{ui.projectPage.stack[lang]}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {liveDemos[project.slug] && (
                <a href={liveDemos[project.slug]} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-700 transition-colors">
                  {ui.projects.tryLive[lang]}
                  <ExternalLink size={12} />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-slate-400 hover:text-indigo-600 transition-colors font-medium">
                  <ExternalLink size={12} /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* More projects */}
        {others.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-extrabold text-slate-900">{ui.projects.moreProjects[lang]}</h2>
              <Link to="/#projects" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors font-medium">
                {ui.projects.viewAll[lang]}
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {others.map((p) => (
                <Link key={p.slug} to={`/projects/${p.slug}`}
                  className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-indigo-200 hover:shadow-md transition-all duration-200 shadow-sm">
                  <h3 className="text-slate-900 font-bold text-sm mb-2 group-hover:text-indigo-700 transition-colors leading-snug">
                    {p.title[lang]}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">
                    {p.description[lang]}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {p.tech.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[11px] font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}

function ContentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-slate-900 font-bold text-lg mb-4 flex items-center gap-2">
        <span className="w-1 h-5 rounded-full bg-indigo-400 inline-block" />
        {title}
      </h2>
      {children}
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-slate-400 text-xs font-semibold uppercase tracking-wide">{label}</span>
      <span className="text-slate-700 text-xs font-medium text-right">{value}</span>
    </div>
  );
}
