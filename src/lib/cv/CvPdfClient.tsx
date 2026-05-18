import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import type { Lang } from "../lang";
import { ui } from "../../data/ui";
import CvDocument from "./CvDocument";

export default function CvPdfClient({
  lang,
  showViewer,
}: {
  lang: Lang;
  showViewer: boolean;
}) {
  const fileName = `CV-Etienne-Chevrollier-${lang.toUpperCase()}.pdf`;

  return (
    <div className="flex flex-col items-center gap-6">
      <PDFDownloadLink
        document={<CvDocument lang={lang} />}
        fileName={fileName}
        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
      >
        {({ loading }) =>
          loading ? ui.cv.generating[lang] : ui.cv.download[lang]
        }
      </PDFDownloadLink>

      {showViewer ? (
        <PDFViewer
          className="w-full max-w-3xl h-[80vh] rounded-lg border border-slate-200"
          showToolbar
        >
          <CvDocument lang={lang} />
        </PDFViewer>
      ) : (
        <p className="text-sm text-slate-500">
          {ui.cv.previewDesktopOnly[lang]}
        </p>
      )}
    </div>
  );
}
