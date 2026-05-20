import { Suspense, lazy } from "react";
import { about, personal } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import { ArrowRight, Download } from "lucide-react";

const CvDownloadLink = lazy(() => import("../lib/cv/CvDownloadLink"));
const aboutBtnClass =
  "inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-indigo-600 transition-colors group";

export default function About() {
  const { lang } = useLang();

  return (
    <section id="about" className="py-28 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-500 text-xs font-bold uppercase tracking-[0.2em] mb-12">
          {ui.about.sectionLabel[lang]}
        </p>

        <div className="grid md:grid-cols-[5fr_7fr] gap-16 items-start">
          {/* Left */}
          <div className="md:sticky md:top-28">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
              {about.hook[0][lang]}
            </h2>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-indigo-600">
              {about.hook[1][lang]}
            </h2>

            <div className="mt-10 space-y-3">
              <Suspense
                fallback={
                  <span className={aboutBtnClass}>
                    <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center">
                      <Download size={13} className="text-indigo-500" />
                    </div>
                    {ui.about.downloadCV[lang]}
                  </span>
                }
              >
                <CvDownloadLink lang={lang} className={aboutBtnClass}>
                  {(loading) => (
                    <>
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                        <Download size={13} className="text-indigo-500" />
                      </div>
                      {loading ? ui.cv.generating[lang] : ui.about.downloadCV[lang]}
                      <ArrowRight size={13} className="opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all text-indigo-500" />
                    </>
                  )}
                </CvDownloadLink>
              </Suspense>
              <a href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-600 transition-colors font-mono">
                {personal.email}
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={`text-base leading-relaxed ${i === 0 ? "text-slate-700 font-medium" : "text-slate-500"}`}>
                {p[lang]}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
