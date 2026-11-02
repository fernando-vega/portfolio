/** Forma común del contenido. es.ts y en.ts deben cumplirla exactamente. */

export type Locale = 'es' | 'en';

export interface Job {
  start: string;
  end: string;
  company: string;
  role: string;
  description?: string;
  tags?: string[];
  current?: boolean;
}

export interface PastProject {
  year: string;
  name: string;
  meta: string;
  url: string;
}

export interface ProjectGroup {
  title: string;
  subtitle: string;
  items: PastProject[];
}

export type ServiceIcon = 'architecture' | 'traffic' | 'cloud' | 'ai';

export interface StackGroup {
  title: string;
  items: string[];
  /** Grupo destacado a todo el ancho (Ingeniería con IA), con una segunda lista de métodos. */
  featured?: boolean;
  methodsTitle?: string;
  methods?: string[];
  toolsTitle?: string;
}

export interface SiteContent {
  meta: {
    lang: Locale;
    htmlLang: string;
    ogLocale: string;
    cvFile: string;
    cvDownloadName: string;
    jobTitle: string;
    alumniOf: string;
    title: string;
    description: string;
    portraitAlt: string;
  };
  ui: {
    skipLink: string;
    navLabel: string;
    logoLabel: string;
    home: string;
    openMenu: string;
    closeMenu: string;
    langSwitch: { short: string; label: string; hreflang: Locale };
    greeting: string;
    lifecycleLabel: string;
    ctaTalk: string;
    ctaProjects: string;
    downloadCv: string;
    scrollCue: string;
    progressLabel: string;
    present: string;
    showFullCareer: string;
    newTab: string;
    visitTrama: string;
    methodology: string;
    mockLabel: string;
    mockCaption: string;
    howIWork: string;
    bookCall: string;
    jobOffer: string;
    needAdvisory: string;
    copy: string;
    copied: string;
    copyFailed: string;
    copiedStatus: string;
    backToTop: string;
    opensInNewTab: string;
  };
  profile: {
    name: string;
    headline: string;
    role: string;
    org: string;
    intro: string;
    introShort: string;
    lifecycle: string[];
    aiTag: string;
    aiTagLabel: string;
    email: string;
    social: { linkedin: string; github: string };
  };
  nav: { href: string; label: string }[];
  heroChips: { stats: string; availability: string };
  about: {
    label: string;
    title: string;
    meta: string;
    paragraphs: string[];
    stats: { value: string; label: string; short: string }[];
  };
  experience: {
    label: string;
    title: string;
    intro: string;
    jobs: Job[];
  };
  projects: {
    label: string;
    title: string;
    trama: {
      badge: string;
      name: string;
      url: string;
      methodologyUrl: string;
      description: string;
      kpis: { value: string; label: string }[];
      mock: {
        title: string;
        country: string;
        fields: { label: string; value: string }[];
        resultLabel: string;
        result: string;
      };
    };
    pastWork: {
      title: string;
      range: string;
      own: ProjectGroup;
      collab: ProjectGroup;
    };
  };
  advisory: {
    label: string;
    title: string;
    intro: string;
    services: { icon: ServiceIcon; title: string; text: string }[];
    steps: string[];
  };
  stack: {
    label: string;
    title: string;
    intro: string;
    groups: StackGroup[];
  };
  contact: {
    label: string;
    title: string;
    intro: string;
    jobMailto: string;
    advisoryMailto: string;
  };
}
