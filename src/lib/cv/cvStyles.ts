import { StyleSheet } from "@react-pdf/renderer";

// Exact palette extracted from the reference CV — only three inks are used.
export const NAVY = "#002e58"; // section titles, monogram, timeline, markers, labels
const INK = "#363d49"; // name, entry titles, body text, dates, company
export const RULE = "#dfdfdf"; // thin full-width line under section titles

// Scale reference: reference layout is 980u wide → 612pt (×0.6245 pt/unit).
export const cvStyles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 44,
    paddingHorizontal: 45,
    fontSize: 9,
    fontFamily: "Poppins",
    color: INK,
    lineHeight: 1.45,
  },

  // ── Header ──────────────────────────────────────────────────────────────
  header: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  monogram: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: NAVY,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
  },
  monogramText: {
    fontFamily: "Open Sans",
    fontWeight: "semibold",
    fontSize: 18,
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
  summary: { fontSize: 8.5, color: INK, marginBottom: 2, lineHeight: 1.5 },

  // ── Section ─────────────────────────────────────────────────────────────
  section: { marginTop: 16 },
  sectionTitle: {
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: 12,
    color: NAVY,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 5,
  },
  sectionRule: { height: 0.6, backgroundColor: RULE, marginBottom: 10 },

  // ── Contact ─────────────────────────────────────────────────────────────
  infoRow: { flexDirection: "row", marginBottom: 9 },
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
  rail: {
    width: 16,
    borderLeftWidth: 1.25,
    borderLeftColor: NAVY,
    position: "relative",
  },
  marker: {
    position: "absolute",
    left: -3.5,
    top: 2.5,
    width: 6,
    height: 6,
    backgroundColor: NAVY,
  },
  entryBody: { flex: 1, paddingBottom: 13 },
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
  entryIntro: { fontSize: 8.5, color: INK, marginTop: 4, marginBottom: 2 },

  // ── Bullets ─────────────────────────────────────────────────────────────
  bullet: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 2.5,
    paddingRight: 6,
  },
  bulletDot: { width: 10, fontSize: 8.5, color: NAVY, lineHeight: 1.45 },
  bulletText: { flex: 1, fontSize: 8.5, color: INK, lineHeight: 1.45 },

  // ── Simple marked list (skills / languages / interests) ─────────────────
  listItem: { flexDirection: "row", alignItems: "flex-start", marginBottom: 6 },
  listMarker: {
    width: 6,
    height: 6,
    backgroundColor: NAVY,
    marginRight: 8,
    marginTop: 2.5,
  },
  listText: { flex: 1, fontSize: 8.5, color: INK },
  listLabel: { fontFamily: "Poppins", fontWeight: "medium", color: INK },
});
