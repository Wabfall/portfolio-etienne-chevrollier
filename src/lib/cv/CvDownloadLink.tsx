import { PDFDownloadLink } from "@react-pdf/renderer";
import type { ReactNode } from "react";
import type { Lang } from "../lang";
import CvDocument from "./CvDocument";

/**
 * Lazy-loaded client-side PDF download button.
 *
 * Used by Hero / About — render-prop child receives the current `loading`
 * state so the caller can swap label / icon while the PDF generates.
 */
export default function CvDownloadLink({
  lang,
  className,
  children,
}: {
  lang: Lang;
  className?: string;
  children: (loading: boolean) => ReactNode;
}) {
  const fileName = `CV-Etienne-Chevrollier-${lang.toUpperCase()}.pdf`;
  return (
    <PDFDownloadLink
      document={<CvDocument lang={lang} />}
      fileName={fileName}
      className={className}
    >
      {({ loading }) => children(loading)}
    </PDFDownloadLink>
  );
}
