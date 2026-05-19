import { StyleSheet } from "@react-pdf/renderer";

// Palette sampled from the reference CV (clean steel-blue accents on navy text)
export const ACCENT = "#5a7a96"; // section titles, markers
export const ACCENT_LINE = "#cdd9e3"; // thin rule under section titles
const TEXT_DARK = "#1c2b39"; // name, entry titles, values
const TEXT_BODY = "#4b5563"; // paragraphs, bullets
const TEXT_MUTED = "#6b7280"; // company / school, subtitle
const TEXT_FAINT = "#9aa3ad"; // dates

export const cvStyles = StyleSheet.create({
  page: {
    paddingVertical: 40,
    paddingHorizontal: 44,
    fontSize: 9,
    fontFamily: "Helvetica",
    color: TEXT_BODY,
    lineHeight: 1.45,
  },

  // ── Header ──────────────────────────────────────────────────────────────
  header: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  monogram: {
    width: 46,
    height: 46,
    borderWidth: 1.5,
    borderColor: TEXT_DARK,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  monogramText: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: TEXT_DARK,
  },
  name: { fontSize: 26, fontFamily: "Helvetica-Bold", color: TEXT_DARK },
  subtitle: {
    fontSize: 9.5,
    color: TEXT_MUTED,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginTop: 3,
  },
  summary: { fontSize: 9, color: TEXT_BODY, marginBottom: 4 },

  // ── Section ─────────────────────────────────────────────────────────────
  section: { marginTop: 16 },
  sectionTitle: {
    fontSize: 12,
    color: ACCENT,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 4,
  },
  sectionRule: { height: 1, backgroundColor: ACCENT_LINE, marginBottom: 9 },

  // ── Contact ─────────────────────────────────────────────────────────────
  infoRow: { flexDirection: "row", marginBottom: 8 },
  infoCol: { flex: 1, paddingRight: 10 },
  infoLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: ACCENT,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  infoValue: { fontSize: 9, color: TEXT_DARK },
  infoLink: { fontSize: 9, color: TEXT_DARK, textDecoration: "none" },

  // ── Entry (experience / education) ──────────────────────────────────────
  entry: { marginBottom: 11 },
  entryHeader: { flexDirection: "row", alignItems: "center" },
  marker: {
    width: 5,
    height: 5,
    backgroundColor: ACCENT,
    marginRight: 7,
  },
  entryRole: {
    flex: 1,
    fontSize: 11.5,
    fontFamily: "Helvetica-Bold",
    color: TEXT_DARK,
  },
  entryDate: { fontSize: 8.5, color: TEXT_FAINT },
  entryCompany: {
    fontSize: 8.5,
    color: TEXT_MUTED,
    marginLeft: 12,
    marginTop: 2,
  },
  entryIntro: {
    fontSize: 9,
    color: TEXT_BODY,
    marginLeft: 12,
    marginTop: 4,
    marginBottom: 2,
  },

  // ── Bullets ─────────────────────────────────────────────────────────────
  bullet: {
    flexDirection: "row",
    marginLeft: 12,
    marginBottom: 1.5,
    paddingRight: 8,
  },
  bulletDot: { width: 9, fontSize: 9, color: ACCENT },
  bulletText: { flex: 1, fontSize: 9, color: TEXT_BODY },

  // ── Simple marked list (skills / languages) ─────────────────────────────
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  listMarker: {
    width: 4,
    height: 4,
    backgroundColor: ACCENT,
    marginRight: 7,
    marginTop: 3.5,
  },
  listText: { flex: 1, fontSize: 9, color: TEXT_BODY },
  listLabel: { fontFamily: "Helvetica-Bold", color: TEXT_DARK },
});
