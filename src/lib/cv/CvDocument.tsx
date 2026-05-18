import { Document, Page, View, Text, Link } from "@react-pdf/renderer";
import type { Lang } from "../lang";
import { personal, experiences, education, skills, cvExtra } from "../../data/portfolio";
import { cvStyles as s } from "./cvStyles";

const labels = {
  personalInfo: { en: "Personal Info", fr: "Informations" },
  work: { en: "Work History", fr: "Expérience" },
  education: { en: "Education", fr: "Formation" },
  skills: { en: "Skills", fr: "Compétences" },
  languages: { en: "Languages", fr: "Langues" },
  hobbies: { en: "Hobby / Interest", fr: "Loisirs / Intérêts" },
} as const;

function Bullet({ children }: { children: string }) {
  return (
    <View style={s.bullet}>
      <Text style={s.bulletDot}>›</Text>
      <Text style={s.bulletText}>{children}</Text>
    </View>
  );
}

export default function CvDocument({ lang }: { lang: Lang }) {
  return (
    <Document title={`CV ${personal.name}`} author={personal.name}>
      <Page size="A4" style={s.page}>
        <Text style={s.name}>{personal.name}</Text>
        <Text style={s.title}>{personal.title[lang]}</Text>
        <Text style={s.summary}>{personal.tagline[lang]}</Text>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{labels.personalInfo[lang]}</Text>
          <View style={s.infoRow}>
            <Text style={s.infoItem}>
              <Text style={s.infoLabel}>Email: </Text>
              {personal.email}
            </Text>
            <Text style={s.infoItem}>
              <Text style={s.infoLabel}>Tel: </Text>
              {cvExtra.phone}
            </Text>
            <Text style={s.infoItem}>
              <Text style={s.infoLabel}>Location: </Text>
              {personal.location}
            </Text>
          </View>
          <View style={s.infoRow}>
            <Text style={s.infoItem}>
              <Text style={s.infoLabel}>LinkedIn: </Text>
              <Link src={personal.linkedin} style={s.link}>
                {personal.linkedin}
              </Link>
            </Text>
          </View>
          <View style={s.infoRow}>
            <Text style={s.infoItem}>
              <Text style={s.infoLabel}>GitHub: </Text>
              <Link src={personal.github} style={s.link}>
                {personal.github}
              </Link>
            </Text>
            <Text style={s.infoItem}>{personal.badge[lang]}</Text>
          </View>
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{labels.work[lang]}</Text>
          {experiences.map((e) => (
            <View style={s.entry} key={e.company + e.period} wrap={false}>
              <View style={s.entryHeader}>
                <Text style={s.entryRole}>
                  {e.role[lang]} — {e.company}
                </Text>
                <Text style={s.entryMeta}>{e.period}</Text>
              </View>
              <Text style={s.entrySub}>
                {e.type[lang]} · {e.location}
              </Text>
              {e.highlights[lang].map((h, i) => (
                <Bullet key={i}>{h}</Bullet>
              ))}
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{labels.education[lang]}</Text>
          {education.map((ed) => (
            <View style={s.entry} key={ed.school[lang] + ed.period} wrap={false}>
              <View style={s.entryHeader}>
                <Text style={s.entryRole}>{ed.degree[lang]}</Text>
                <Text style={s.entryMeta}>{ed.period}</Text>
              </View>
              <Text style={s.entrySub}>{ed.school[lang]}</Text>
              {ed.details[lang].map((d, i) => (
                <Bullet key={i}>{d}</Bullet>
              ))}
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{labels.skills[lang]}</Text>
          {skills.map((sk) => (
            <View style={s.skillGroup} key={sk.name[lang]}>
              <Text style={s.skillName}>{sk.name[lang]}</Text>
              <Text style={s.skillText}>{sk.capabilities[lang].join(" · ")}</Text>
              <Text style={s.skillText}>{sk.tools.join(", ")}</Text>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{labels.languages[lang]}</Text>
          {cvExtra.languages.map((l) => (
            <Text style={s.skillText} key={l.name.en}>
              {l.name[lang]} — {l.level[lang]}
            </Text>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{labels.hobbies[lang]}</Text>
          {cvExtra.hobbies.map((h) => (
            <Text style={s.skillText} key={h.category.en}>
              <Text style={s.skillName}>{h.category[lang]}: </Text>
              {h.text[lang]}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
}
