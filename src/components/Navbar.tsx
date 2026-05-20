import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const anchorHref = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  const links = [
    { label: ui.nav.about[lang],        href: anchorHref("#about") },
    { label: ui.nav.experience[lang],   href: anchorHref("#experience") },
    { label: ui.nav.projects[lang],     href: anchorHref("#projects") },
    { label: ui.nav.skills[lang],       href: anchorHref("#skills") },
    { label: ui.nav.education[lang],    href: anchorHref("#education") },
    { label: ui.nav.testimonials[lang], href: anchorHref("#testimonials") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-blue-600 font-bold text-lg tracking-tight hover:text-blue-700 transition-colors">
          EC
        </a>

        {/* Desktop links + lang toggle */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 bg-slate-100 border border-slate-200 rounded-lg p-1">
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                lang === "en" ? "bg-blue-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("fr")}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                lang === "fr" ? "bg-blue-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              FR
            </button>
          </div>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-0.5 bg-slate-100 border border-slate-200 rounded-lg p-1">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded text-xs font-semibold transition-all ${lang === "en" ? "bg-blue-600 text-white" : "text-slate-500"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("fr")}
              className={`px-2 py-0.5 rounded text-xs font-semibold transition-all ${lang === "fr" ? "bg-blue-600 text-white" : "text-slate-500"}`}
            >
              FR
            </button>
          </div>
          <button
            className="text-slate-500 hover:text-slate-900"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-slate-500 hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
