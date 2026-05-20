import { Suspense, lazy } from "react";
import { personal, stats } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import { MapPin, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const CvDownloadLink = lazy(() => import("../lib/cv/CvDownloadLink"));
const cvBtnClass =
  "inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white text-slate-700 font-semibold text-sm transition-colors";

function Sparkline() {
  const points = [40, 55, 45, 60, 52, 68, 62, 75, 70, 82, 78, 90];
  const w = 180, h = 48;
  const max = Math.max(...points), min = Math.min(...points);
  const coords = points.map((v, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - ((v - min) / (max - min)) * (h - 8) - 4;
    return `${x},${y}`;
  });
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke="#6366f1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={coords.join(" ")}
      />
      <polygon
        fill="url(#sg)"
        points={`0,${h} ${coords.join(" ")} ${w},${h}`}
      />
    </svg>
  );
}

function PipelineCard() {
  const steps = [
    { label: "raw → staging", time: "1.2s" },
    { label: "staging → mart", time: "3.8s" },
    { label: "data contracts", time: "passed" },
    { label: "dbt tests", time: "42 / 42" },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden w-[300px] select-none">
      {/* Chrome bar */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="ml-2 text-[11px] text-slate-400 font-mono tracking-tight">pipeline_monitor.py</span>
      </div>

      <div className="p-4 space-y-3">
        {/* Pipeline steps */}
        {steps.map((s, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              <span className="font-mono text-[11px] text-slate-600">{s.label}</span>
            </div>
            <span className="font-mono text-[11px] text-slate-400">{s.time}</span>
          </div>
        ))}

        {/* Metrics */}
        <div className="border-t border-slate-100 pt-3 grid grid-cols-3 gap-2">
          {[
            { label: "Freshness", value: "99.2%", color: "text-emerald-600 bg-emerald-50" },
            { label: "Rows/day", value: "2.4M",  color: "text-indigo-600 bg-indigo-50" },
            { label: "Alerts",   value: "0",      color: "text-slate-600 bg-slate-100" },
          ].map((m) => (
            <div key={m.label} className={`rounded-lg px-2 py-1.5 text-center ${m.color}`}>
              <p className="text-[13px] font-bold">{m.value}</p>
              <p className="text-[9px] font-medium opacity-70 uppercase tracking-wide">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Sparkline */}
        <div className="border-t border-slate-100 pt-2">
          <p className="text-[10px] text-slate-400 mb-1 font-mono uppercase tracking-wider">rows processed / week</p>
          <Sparkline />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { lang } = useLang();

  return (
    <section className="min-h-screen bg-white pt-16 flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">

          {/* Left — text */}
          <div>
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 mb-8 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {personal.badge[lang]}
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 leading-[0.9] tracking-tight mb-6">
              {personal.name.split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-indigo-500 flex-shrink-0" />
              <p className="text-indigo-600 font-bold text-lg">{personal.title[lang]}</p>
            </div>

            <p className="text-slate-500 text-base max-w-xl mb-4 leading-relaxed">
              {personal.subtitle[lang]}
            </p>

            <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-10">
              <MapPin size={13} />
              <span>{personal.location}</span>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mb-14">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors shadow-sm shadow-indigo-200">
                <LinkedinIcon size={16} /> LinkedIn
              </a>
              <Suspense
                fallback={
                  <span className={cvBtnClass}>
                    <Download size={15} /> {ui.hero.downloadCV[lang]}
                  </span>
                }
              >
                <CvDownloadLink lang={lang} className={cvBtnClass}>
                  {(loading) => (
                    <>
                      <Download size={15} />
                      {loading ? ui.cv.generating[lang] : ui.hero.downloadCV[lang]}
                    </>
                  )}
                </CvDownloadLink>
              </Suspense>
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-700 font-semibold text-sm transition-colors">
                <GithubIcon size={16} /> GitHub
              </a>
              <a href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-700 font-semibold text-sm transition-colors">
                <Mail size={15} /> {ui.hero.contact[lang]}
              </a>
            </div>

            {/* Stats as KPI cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
              {stats.map((s, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                  <p className="text-2xl font-extrabold text-slate-900">{s.value}</p>
                  <p className="text-slate-400 text-[11px] uppercase tracking-wider font-medium mt-0.5">{s.label[lang]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Pipeline card */}
          <div className="hidden lg:block">
            <PipelineCard />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-start">
          <a href="#about" className="text-slate-300 hover:text-slate-400 transition-colors">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
