import { Font } from "@react-pdf/renderer";

// Exact fonts extracted from the reference CV (all SIL OFL licensed).
// Static-weight TTFs vendored under /public/fonts.
let registered = false;

export function registerCvFonts() {
  if (registered) return;
  registered = true;

  Font.register({
    family: "Quicksand",
    fonts: [
      { src: "/fonts/Quicksand-Regular.ttf", fontWeight: "normal" },
      { src: "/fonts/Quicksand-Bold.ttf", fontWeight: "bold" },
    ],
  });
  Font.register({
    family: "Poppins",
    fonts: [
      { src: "/fonts/Poppins-Regular.ttf", fontWeight: "normal" },
      { src: "/fonts/Poppins-Medium.ttf", fontWeight: "medium" },
    ],
  });
  Font.register({
    family: "Open Sans",
    fonts: [{ src: "/fonts/OpenSans-SemiBold.ttf", fontWeight: "semibold" }],
  });

  // Keep long URLs / words from being hyphenated mid-string.
  Font.registerHyphenationCallback((word) => [word]);
}
