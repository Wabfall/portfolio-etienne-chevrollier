import { Document, Page, View, Text, Link } from "@react-pdf/renderer";
import type { ReactNode } from "react";
import type { Lang } from "../lang";
import { personal, experiences, education, skills, cvExtra } from "../../data/portfolio";
import { cvStyles as s } from "./cvStyles";
import { registerCvFonts } from "./cvFonts";

registerCvFonts();

const labels = {
  contact: { en: "Contact", fr: "Coordonnées" },
  work: { en: "Experience", fr: "Expérience" },
  education: { en: "Education", fr: "Études" },
  skills: { en: "Skills", fr: "Compétences" },
  languages: { en: "Languages", fr: "Langues" },
  hobbies: { en: "Interests", fr: "Centres d'intérêt" },
  email: { en: "Email", fr: "E-mail" },
  phone: { en: "Phone", fr: "Téléphone" },
  location: { en: "Location", fr: "Localisation" },
  certification: { en: "Certification", fr: "Certification" },
} as const;

function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/** Replace glyphs absent from the embedded latin fonts (e.g. the ➜ arrow). */
function clean(t: string): string {
  return t.replace(/[➜→]/g, "—");
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={s.section}>
      <Text style={s.sectionTitle}>{title}</Text>
      <View style={s.sectionRule} />
      {children}
    </View>
  );
}

function InfoCol({ label, children }: { label: string; children: ReactNode }) {
  return (
    <View style={s.infoCol}>
      <Text style={s.infoLabel}>{label}</Text>
      {children}
    </View>
  );
}

function Bullet({ children }: { children: string }) {
  return (
    <View style={s.bullet}>
      <Text style={s.bulletDot}>•</Text>
      <Text style={s.bulletText}>{clean(children)}</Text>
    </View>
  );
}

/** One entry on the vertical timeline rail (continuous navy line + square marker). */
function TimelineEntry({
  title,
  date,
  sub,
  intro,
  points,
}: {
  title: string;
  date: string;
  sub: string;
  intro?: string;
  points: string[];
}) {
  return (
    <View style={s.entryRow} wrap={false}>
      <View style={s.rail}>
        <View style={s.marker} />
      </View>
      <View style={s.entryBody}>
        <View style={s.entryHeader}>
          <Text style={s.entryRole}>{title}</Text>
          <Text style={s.entryDate}>{date}</Text>
        </View>
        <Text style={s.entryCompany}>{sub}</Text>
        {intro ? <Text style={s.entryIntro}>{clean(intro)}</Text> : null}
        {points.map((p, i) => (
          <Bullet key={i}>{p}</Bullet>
        ))}
      </View>
    </View>
  );
}

export default function CvDocument({ lang }: { lang: Lang }) {
  return (
    <Document title={`CV ${personal.name}`} author={personal.name}>
      <Page size="A4" style={s.page}>
        {/* Header */}
        <View style={s.header}>
          <View style={s.monogram}>
            <Text style={s.monogramText}>{initials(personal.name)}</Text>
          </View>
          <View style={s.headerText}>
            <Text style={s.name}>{personal.name}</Text>
            <Text style={s.subtitle}>{personal.title[lang]}</Text>
          </View>
        </View>
        <Text style={s.summary}>{clean(personal.tagline[lang])}</Text>

        {/* Contact */}
        <Section title={labels.contact[lang]}>
          <View style={s.infoRow}>
            <InfoCol label={labels.email[lang]}>
              <Text style={s.infoValue}>{personal.email}</Text>
            </InfoCol>
            <InfoCol label={labels.phone[lang]}>
              <Text style={s.infoValue}>{cvExtra.phone}</Text>
            </InfoCol>
            <InfoCol label={labels.location[lang]}>
              <Text style={s.infoValue}>{personal.location}</Text>
            </InfoCol>
          </View>
          <View style={s.infoRow}>
            <InfoCol label="LinkedIn">
              <Link src={personal.linkedin} style={s.infoLink}>
                {personal.linkedin.replace(/^https?:\/\//, "")}
              </Link>
            </InfoCol>
            <InfoCol label="GitHub">
              <Link src={personal.github} style={s.infoLink}>
                {personal.github.replace(/^https?:\/\//, "")}
              </Link>
            </InfoCol>
            <InfoCol label={labels.certification[lang]}>
              <Text style={s.infoValue}>{personal.badge[lang]}</Text>
            </InfoCol>
          </View>
        </Section>

        {/* Experience */}
        <Section title={labels.work[lang]}>
          {experiences.map((e) => (
            <TimelineEntry
              key={e.company + e.period}
              title={e.role[lang]}
              date={e.period}
              sub={`${e.company} · ${e.location}`}
              intro={e.type[lang]}
              points={e.highlights[lang]}
            />
          ))}
        </Section>

        {/* Education */}
        <Section title={labels.education[lang]}>
          {education.map((ed) => (
            <TimelineEntry
              key={ed.school[lang] + ed.period}
              title={ed.degree[lang]}
              date={ed.period}
              sub={ed.school[lang]}
              points={ed.details[lang]}
            />
          ))}
        </Section>

        {/* Skills */}
        <Section title={labels.skills[lang]}>
          {skills.map((sk) => (
            <View style={s.listItem} key={sk.name[lang]} wrap={false}>
              <View style={s.listMarker} />
              <Text style={s.listText}>
                <Text style={s.listLabel}>{sk.name[lang]} : </Text>
                {sk.tools.join(", ")}
              </Text>
            </View>
          ))}
        </Section>

        {/* Languages */}
        <Section title={labels.languages[lang]}>
          {cvExtra.languages.map((l) => (
            <View style={s.listItem} key={l.name.en} wrap={false}>
              <View style={s.listMarker} />
              <Text style={s.listText}>
                <Text style={s.listLabel}>{l.name[lang]}</Text> — {l.level[lang]}
              </Text>
            </View>
          ))}
        </Section>

        {/* Interests */}
        <Section title={labels.hobbies[lang]}>
          {cvExtra.hobbies.map((h) => (
            <View style={s.listItem} key={h.category.en} wrap={false}>
              <View style={s.listMarker} />
              <Text style={s.listText}>
                <Text style={s.listLabel}>{h.category[lang]} : </Text>
                {h.text[lang]}
              </Text>
            </View>
          ))}
        </Section>
      </Page>
    </Document>
  );
}
