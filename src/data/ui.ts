import type { Bil } from "../lib/lang";

export const ui = {
  nav: {
    about:        { en: "About",        fr: "À propos"     } as Bil,
    experience:   { en: "Experience",   fr: "Expérience"   } as Bil,
    projects:     { en: "Projects",     fr: "Projets"      } as Bil,
    skills:       { en: "Skills",       fr: "Compétences"  } as Bil,
    education:    { en: "Education",    fr: "Formation"    } as Bil,
    testimonials: { en: "Testimonials", fr: "Témoignages"  } as Bil,
    tools:        { en: "Tools",        fr: "Outils"       } as Bil,
  },
  cv: {
    generating: { en: "Generating PDF…", fr: "Génération du PDF…" } as Bil,
  },
  hero: {
    viewWork:   { en: "View my work",  fr: "Voir mes projets"     } as Bil,
    downloadCV: { en: "Download CV",   fr: "Télécharger le CV"    } as Bil,
    contact:    { en: "Contact",       fr: "Contact"              } as Bil,
  },
  about: {
    sectionLabel: { en: "About",           fr: "À propos"              } as Bil,
    downloadCV:   { en: "Download CV",     fr: "Télécharger le CV"     } as Bil,
  },
  sections: {
    experience:   { en: "Experience",    fr: "Expérience"   } as Bil,
    projects:     { en: "Projects",      fr: "Projets"      } as Bil,
    skills:       { en: "Skills",        fr: "Compétences"  } as Bil,
    education:    { en: "Education",     fr: "Formation"    } as Bil,
    testimonials: { en: "Testimonials",  fr: "Témoignages"  } as Bil,
    posts:        { en: "LinkedIn Posts", fr: "Posts LinkedIn" } as Bil,
  },
  projects: {
    toolsHubLead:  {
      en: "Some of these run in production and can be tried at",
      fr: "Certains tournent en production et s'essaient sur",
    } as Bil,
    featured:      { en: "Featured",             fr: "En vedette"         } as Bil,
    others:        { en: "Other projects",        fr: "Autres projets"     } as Bil,
    viewGithub:    { en: "View on GitHub",        fr: "Voir sur GitHub"    } as Bil,
    viewProject:   { en: "View project →",        fr: "Voir le projet →"   } as Bil,
    internal:      { en: "Internal – code private", fr: "Interne – code privé" } as Bil,
    moreProjects:  { en: "More projects",         fr: "Autres projets"     } as Bil,
    viewAll:       { en: "View all →",            fr: "Voir tout →"        } as Bil,
    filterAll:      { en: "All",             fr: "Tous"           } as Bil,
    filterFullstack:{ en: "Full-Stack",      fr: "Full-Stack"     } as Bil,
    filterApi:      { en: "API & Backend",   fr: "API & Backend"  } as Bil,
    filterData:     { en: "Data",            fr: "Data"           } as Bil,
  },
  projectPage: {
    back:         { en: "← Back to projects",  fr: "← Retour aux projets" } as Bil,
    context:      { en: "Context",             fr: "Contexte"             } as Bil,
    approach:     { en: "Approach",            fr: "Approche"             } as Bil,
    solution:     { en: "Solution",            fr: "Solution"             } as Bil,
    keyOutcome:   { en: "Key outcome",         fr: "Résultat clé"         } as Bil,
    applications: { en: "Applications",        fr: "Applications"         } as Bil,
    details:      { en: "Project details",     fr: "Détails du projet"    } as Bil,
    type:         { en: "Type",                fr: "Type"                 } as Bil,
    date:         { en: "Date",                fr: "Date"                 } as Bil,
    role:         { en: "Role",                fr: "Rôle"                 } as Bil,
    stack:        { en: "Technologies",        fr: "Technologies"         } as Bil,
    notFound:     { en: "Project not found.",  fr: "Projet introuvable."  } as Bil,
  },
  footer: {
    copy: { en: "All rights reserved.", fr: "Tous droits réservés." } as Bil,
  },
} as const;
