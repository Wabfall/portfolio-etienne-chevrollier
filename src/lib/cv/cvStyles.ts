import { StyleSheet } from "@react-pdf/renderer";

// Exact palette extracted from the reference CV — only three inks are used.
export const NAVY = "#002e58"; // section titles, monogram, timeline, markers, labels
const INK = "#363d49"; // name, entry titles, body text, dates, company
export const RULE = "#dfdfdf"; // thin full-width line under section titles

// Scale reference: reference layout is 980u wide → 612pt (×0.6245 pt/unit).
export const cvStyles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 45,
    fontSize: 9,
    fontFamily: "Poppins",
    fontWeight: "light",
    color: INK,
    lineHeight: 1.4,
  },

  // ── Header ──────────────────────────────────────────────────────────────
  header: { flexDirection: "row", alignItems: "center", marginBottom: 13 },
  // Reference: 78u square stroked navy, "EC" in OpenSans-SemiBold ≈ 25pt navy.
  monogram: {
    width: 48,
    height: 48,
    borderWidth: 0.8,
    borderColor: NAVY,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
  },
  monogramText: {
    fontFamily: "Open Sans",
    fontWeight: "semibold",
    fontSize: 22,
    color: NAVY,
  },
  headerText: { flex: 1, justifyContent: "center" },
  name: {
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: 24,
    color: INK,
    lineHeight: 1.2,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: "Quicksand",
    fontSize: 9.5,
    color: INK,
    textTransform: "uppercase",
    letterSpacing: 0.6,
    lineHeight: 1.2,
  },
  summary: { fontSize: 8.5, color: INK, marginBottom: 2, lineHeight: 1.4 },

  // ── Section ─────────────────────────────────────────────────────────────
  section: { marginTop: 12 },
  sectionTitle: {
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: 12,
    color: NAVY,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  sectionRule: { height: 0.6, backgroundColor: RULE, marginBottom: 8 },

  // ── Contact ─────────────────────────────────────────────────────────────
  infoRow: { flexDirection: "row", marginBottom: 7 },
  infoCol: { flex: 1, paddingRight: 10 },
  infoLabel: {
    fontFamily: "Open Sans",
    fontWeight: "semibold",
    fontSize: 7.5,
    color: NAVY,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  infoValue: { fontSize: 8.5, color: INK },
  infoLink: { fontSize: 8.5, color: INK, textDecoration: "none" },

  // ── Timeline entry (experience / education) ─────────────────────────────
  entryRow: { flexDirection: "row" },
  rail: { width: 16, position: "relative" },
  // The continuous navy line is rendered as an absolutely-positioned View so we
  // can trim its top on the first entry and its bottom on the last entry,
  // ending exactly at the first / last marker like the reference.
  railLineBase: {
    position: "absolute",
    left: 0,
    width: 1.25,
    backgroundColor: NAVY,
  },
  railFull: { top: 0, bottom: 0 }, // middle entry: full row height
  railFromMarker: { top: 3, bottom: 0 }, // first entry: starts at marker
  railToMarker: { top: 0, height: 8 }, // last entry: stops at marker bottom
  railOnlyMarker: { top: 3, height: 5 }, // single-entry section
  marker: {
    // 5pt square centred on the 1.25pt rail line → left = -(5-1.25)/2 = -1.875
    position: "absolute",
    left: -1.9,
    top: 3,
    width: 5,
    height: 5,
    backgroundColor: NAVY,
  },
  entryBody: { flex: 1, paddingBottom: 14 },
  entryBodyLast: { flex: 1, paddingBottom: 0 },
  entryHeader: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  entryRole: {
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: 11.5,
    color: INK,
    flex: 1,
    paddingRight: 8,
  },
  entryDate: { fontSize: 8, color: INK },
  entryCompany: { fontSize: 8, color: INK, marginTop: 2 },
  entryIntro: { fontSize: 8.5, color: INK, marginTop: 5, marginBottom: 4, lineHeight: 1.5 },

  // ── Bullets (round dots for a lighter feel) ─────────────────────────────
  bullet: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 2,
    paddingRight: 6,
  },
  bulletDot: { width: 9, fontSize: 9, color: NAVY, lineHeight: 1.4 },
  bulletText: { flex: 1, fontSize: 8.5, color: INK, lineHeight: 1.45 },

  // ── Simple marked list (skills / languages / interests) ─────────────────
  listItem: { flexDirection: "row", alignItems: "flex-start", marginBottom: 4 },
  listMarker: {
    width: 5,
    height: 5,
    backgroundColor: NAVY,
    marginRight: 8,
    marginTop: 2.5,
  },
  listText: { flex: 1, fontSize: 8.5, color: INK },
  listLabel: { fontFamily: "Poppins", fontWeight: "medium", color: INK },
});
