import { useState } from "react";
import { projects, liveDemos, type ProjectCategory } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import { SectionHeader, projectCategoryConfig } from "./Experience";
import { FolderOpen, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Link } from "react-router-dom";

type Filter = "all" | ProjectCategory;

const filters: { key: Filter; labelKey: keyof typeof ui.projects }[] = [
  { key: "all",       labelKey: "filterAll"       },
  { key: "data",      labelKey: "filterData"      },
  { key: "fullstack", labelKey: "filterFullstack" },
  { key: "api",       labelKey: "filterApi"       },
];

export default function Projects() {
  const { lang } = useLang();
  const [active, setActive] = useState<Filter>("data");

  const filtered = active === "all"
    ? projects
    : projects.filter((p) => p.categories.includes(active as ProjectCategory));

  const featured = filtered.filter((p) => p.highlight);
  const others   = filtered.filter((p) => !p.highlight);

  return (
    <section id="projects" className="py-28 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto">
        <SectionHeader icon={<FolderOpen size={18} />} title={ui.sections.projects[lang]} />

        <p className="-mt-4 mb-8 text-sm text-slate-500">
          {ui.projects.toolsHubLead[lang]}{" "}
          <a
            href="https://tools.chevrollier.dev"
            className="inline-flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-700"
          >
            tools.chevrollier.dev
            <ArrowUpRight size={13} />
          </a>
        </p>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(({ key, labelKey }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all duration-150 ${
                active === key
                  ? "bg-indigo-500 border-indigo-500 text-white shadow-sm"
                  : "bg-white border-slate-200 text-slate-500 hover:border-indigo-300 hover:text-indigo-500"
              }`}
            >
              {ui.projects[labelKey][lang]}
            </button>
          ))}
        </div>

        {featured.length > 0 && (
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {featured.map((p, i) => (
              <ProjectCard key={i} project={p} featured />
            ))}
          </div>
        )}

        {others.length > 0 && (
          <>
            <p className="text-slate-400 font-semibold text-xs uppercase tracking-[0.2em] mb-5">
              {ui.projects.others[lang]}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((p, i) => (
                <ProjectCard key={i} project={p} />
              ))}
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <p className="text-slate-400 text-sm text-center py-16">—</p>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, featured = false }: { project: (typeof projects)[0]; featured?: boolean }) {
  const { lang } = useLang();

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 border ${
        featured ? "border-indigo-200 hover:border-indigo-300" : "border-slate-200 hover:border-slate-300"
      }`}
    >
      {/* Top accent stripe */}
      <div className={`h-1 w-full ${featured ? "bg-gradient-to-r from-indigo-400 to-violet-400" : "bg-slate-100"}`} />

      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <div className={`p-2 rounded-lg ${featured ? "bg-indigo-50 border border-indigo-100" : "bg-slate-50 border border-slate-100"}`}>
              <FolderOpen size={18} className={featured ? "text-indigo-500" : "text-slate-400"} />
            </div>
            {[...project.categories].sort((a, b) => (a === "data" ? -1 : b === "data" ? 1 : 0)).map((c) => {
              const cfg = projectCategoryConfig(c);
              return cfg ? (
                <span key={c} className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-semibold ${cfg.badge}`}>
                  {cfg.icon} {cfg.label}
                </span>
              ) : null;
            })}
          </div>
          <ArrowUpRight size={16} className="text-slate-300 group-hover:text-indigo-500 transition-colors flex-shrink-0" />
        </div>

        <h3 className="text-slate-900 font-bold text-base mb-2 leading-snug">
          {project.title[lang]}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
          {project.description[lang]}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-400 text-[11px]">+{project.tech.length - 4}</span>
          )}
        </div>

        {(project.github || liveDemos[project.slug]) && (
          <div className="flex items-center gap-3 text-xs text-slate-400 mt-auto pt-3 border-t border-slate-100">
            {project.github && (
              <span className="flex items-center gap-1.5">
                <GithubIcon size={12} /> Code
              </span>
            )}
            {liveDemos[project.slug] && (
              <span className="flex items-center gap-1.5 font-semibold text-emerald-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {ui.projects.liveBadge[lang]}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
