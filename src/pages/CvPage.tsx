import { Suspense, lazy, useEffect, useState } from "react";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";

const CvPdfClient = lazy(() => import("../lib/cv/CvPdfClient"));

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setIsDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isDesktop;
}

export default function CvPage() {
  const { lang } = useLang();
  const isDesktop = useIsDesktop();

  return (
    <main className="max-w-6xl mx-auto px-6 pt-28 pb-20">
      <h1 className="text-3xl font-bold text-slate-900">
        {ui.cv.pageTitle[lang]}
      </h1>
      <p className="mt-2 mb-10 text-slate-500">{ui.cv.pageSubtitle[lang]}</p>
      <Suspense
        fallback={<p className="text-slate-500">{ui.cv.generating[lang]}</p>}
      >
        <CvPdfClient lang={lang} showViewer={isDesktop} />
      </Suspense>
    </main>
  );
}
