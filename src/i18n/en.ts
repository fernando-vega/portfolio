/**
 * ENGLISH content (route /en/).
 * Mirrors es.ts exactly in shape; es.ts is the source of truth for facts.
 */
import type { SiteContent } from './types';

const email = 'juanfe.vega@gmail.com';
const mailto = (subject: string, body: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const en: SiteContent = {
  meta: {
    lang: 'en',
    htmlLang: 'en-US',
    ogLocale: 'en_US',
    cvFile: 'CV-en.pdf',
    cvDownloadName: 'Juan-Fernando-Vega-CV-EN.pdf',
    jobTitle: 'Systems and Computer Engineer · Full Stack Developer',
    alumniOf: 'Universidad Pedagógica y Tecnológica de Colombia (UPTC)',
    title: 'Fernando Vega · Systems and Computer Engineer, Full Stack',
    description:
      'Systems and Computer Engineer, full stack, in digital banking. I take software from idea to production: analysis, architecture, development, testing, and deployment with React, Angular, Node.js, Python, and AWS. Creator of Trama.',
    portraitAlt: 'Portrait of Fernando Vega',
  },

  ui: {
    skipLink: 'Skip to content',
    navLabel: 'Main',
    logoLabel: 'Fernando Vega — home',
    home: 'Home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    langSwitch: { short: 'ES', label: 'Ver este sitio en español', hreflang: 'es' },
    greeting: "Hi, I'm Fernando Vega",
    lifecycleLabel: 'Stages I cover',
    ctaTalk: "Let's talk",
    ctaProjects: 'View projects',
    downloadCv: 'Download CV',
    scrollCue: 'Scroll to see more',
    progressLabel: 'Now viewing',
    present: 'Present',
    showFullCareer: 'View full career',
    newTab: '(opens in a new tab)',
    visitTrama: 'Visit tramafin.com',
    methodology: 'Methodology',
    mockLabel: "Illustrative example of Trama's loan simulator",
    mockCaption:
      'COP 20,000,000 at an 18% effective annual rate over 36 months: estimated monthly payment of COP 709,736.',
    howIWork: 'How I work',
    bookCall: 'Book a conversation',
    jobOffer: 'I have a job offer',
    needAdvisory: 'I need consulting',
    copy: 'copy',
    copied: 'copied!',
    copyFailed: "couldn't copy",
    copiedStatus: 'Email copied to clipboard',
    backToTop: 'Back to top ↑',
    opensInNewTab: 'opens in a new tab',
  },

  profile: {
    name: 'Fernando Vega',
    headline: 'I take software from idea to production.',
    role: 'Systems and Computer Engineer\u00A0·\u00A0Full\u00A0Stack',
    org: 'Digital Division, Banco de Bogotá',
    intro:
      '12+ years building web products and 5+ in digital banking. I analyze the problem, design the architecture, then build, test, and deploy on AWS. Colombia · Remote.',
    introShort:
      '12+ years building web products and 5+ in digital banking. From analysis to deployment. Colombia · Remote.',
    lifecycle: ['Analysis', 'Planning', 'Architecture', 'Development', 'Testing', 'Deployment'],
    aiTag: 'AI-assisted',
    aiTagLabel: 'Every stage assisted by AI agents',
    email,
    social: {
      linkedin: 'https://www.linkedin.com/in/fernando-vega-p/',
      github: 'https://github.com/fernando-vega',
    },
  },

  nav: [
    { href: '#sobre-mi', label: 'About' },
    { href: '#experiencia', label: 'Experience' },
    { href: '#proyectos', label: 'Projects' },
    { href: '#asesoria', label: 'Consulting' },
    { href: '#stack', label: 'Stack' },
    { href: '#contacto', label: 'Contact' },
  ],

  heroChips: {
    stats: '12+ years · 5+ in banking',
    availability: 'Available for consulting',
  },

  about: {
    label: 'About',
    title: 'From pixel to infrastructure.',
    meta: 'UPTC · since 2014 · Colombia, remote',
    paragraphs: [
      "I'm a Systems and Computer Engineer from UPTC. I started in 2014 by co-founding a software studio, and today I work in Banco de Bogotá's Digital Division: high-traffic web platforms with React, Angular, and Astro, micro-frontends, Node.js and Python services, and AWS infrastructure with Terraform and CI/CD.",
      'Today I work with AI agents such as Claude Code and OpenCode using an engineering method, not vibe coding: small user stories, vertical slices, a Plan → Build workflow, TDD, and risk-based review of every change. The AI writes; I lead, set the context, and verify.',
      "Before I write the first line of code, I make sure I understand the whole problem: the business, the architecture, and who will use the product. That's how Trama, my own product, came to be. Away from the keyboard: cycling, trail hiking, music, reading, and family.",
    ],
    stats: [
      { value: '12+', label: 'years building software', short: 'years' },
      { value: '5+', label: 'years in digital banking', short: 'in banking' },
      { value: '10+', label: 'companies improved their processes with my software', short: 'companies' },
    ],
  },

  experience: {
    label: 'Experience',
    title: 'Career',
    intro: 'Since 2014: from co-founding a software studio to building digital products for banking.',
    jobs: [
      {
        start: 'Jun 2022',
        end: 'Present',
        company: 'Banco de Bogotá',
        role: 'Full Stack Developer · Digital Division (Analyst I)',
        description:
          "I build high-traffic web platforms for the bank's customers, with architectures designed to scale: micro-frontends in React, Angular, and Astro, SSR/CSR rendering, Node.js and Python services on PostgreSQL, and infrastructure as code on AWS with Terraform and CI/CD.",
        tags: ['React', 'Angular', 'Astro', 'Micro-frontends', 'SSR / CSR', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Terraform', 'CI/CD'],
        current: true,
      },
      { start: 'Jan 2022', end: 'May 2022', company: 'RobinFood', role: 'Frontend Developer' },
      {
        start: 'Oct 2020',
        end: 'Jan 2022',
        company: 'AOS & Sophos Solutions',
        role: 'Frontend Developer · for Scotiabank Colpatria',
        description:
          "Built Angular micro-frontends and SPAs for the bank's pre-approved loans product, monitored with Kibana and Dynatrace.",
      },
      {
        start: 'Feb 2020',
        end: 'Sep 2020',
        company: 'Tita Media',
        role: 'Frontend Developer',
        description: 'Built the Titamedia website and contributed to VTEX e-commerce stores for brands such as Mario Hernández, Bata, Prochampions, Panamericana, Samsung Colombia, and Totto.',
      },
      {
        start: 'Aug 2019',
        end: 'Dec 2019',
        company: 'Insoftar',
        role: 'Full Stack Developer',
        description: 'Contributed to the full stack development of Ciencuadras, a real estate portal.',
      },
      {
        start: 'Aug 2018',
        end: 'Jul 2019',
        company: 'Quadi – Sancho BBDO',
        role: 'Frontend Developer',
        description: 'Built the frontend of Colombia Travel — Birds, a nature tourism website, and contributed to websites and campaigns for brands such as Bancolombia, Seguros Bolívar, and Marca País Colombia.',
      },
      {
        start: 'Nov 2015',
        end: 'Jul 2018',
        company: 'DoD Media Group',
        role: 'Software Engineer',
        description:
          'Alongside SIA Software: built Inmobiliaria Contreras, Dromedario, and Boyacá se escucha, and contributed to Hotel Calle Principal.',
      },
      {
        start: 'Feb 2014',
        end: 'Dec 2017',
        company: 'SIA Software',
        role: 'Co-founder & Software Engineer',
        description: 'Co-founded a software studio and helped 10+ companies improve their processes with custom software.',
      },
    ],
  },

  projects: {
    label: 'Projects',
    title: 'My own product and work for brands',
    trama: {
      badge: 'Personal project · Just launched',
      name: 'trama',
      url: 'https://tramafin.com',
      methodologyUrl: 'https://tramafin.com/metodologia',
      description:
        'A Spanish-language platform with free financial calculators for Colombia, Mexico, Argentina, Peru, Chile, and Spain, no sign-up required: loans, CDTs (term deposits), take-home pay, service bonus (prima), severance (cesantías), VAT, and more. Formulas are cited and reviewed, and calculations run on your device. I designed, built, and run it on my own, with Astro.',
      kpis: [
        { value: '24', label: 'tools' },
        { value: '6', label: 'countries' },
        { value: '0', label: 'sign-ups' },
      ],
      // Illustrative example: COP 20,000,000, 18% effective annual rate, 36 months (French amortization).
      // Values stay in Spanish format because they mirror the real Spanish-language product.
      mock: {
        title: 'Loan simulator',
        country: 'CO · COP',
        fields: [
          { label: 'Amount', value: '$ 20.000.000' },
          { label: 'Effective annual rate', value: '18 %' },
          { label: 'Term', value: '36 meses' },
        ],
        resultLabel: 'Estimated monthly payment',
        result: '$ 709.736',
      },
    },
    /** Links verified on 2026-11-02. Re-check before publishing. */
    pastWork: {
      title: 'Previous work',
      range: '2015 — 2020 · Agencies and consultancies',
      own: {
        title: 'Built by me',
        subtitle: 'Designed and developed by me · code on GitHub',
        items: [
          { year: '2017', name: 'Inmobiliaria Contreras', meta: 'DoD Media Group · Real estate website', url: 'https://fernando-vega.github.io/inmobiliaria-contreras/dev/' },
          { year: '2017', name: 'Dromedario', meta: 'DoD Media Group', url: 'https://fernando-vega.github.io/dromedario/dev/' },
          { year: '2016', name: 'Boyacá se escucha', meta: 'DoD Media Group', url: 'https://fernando-vega.github.io/boyaca-se-escucha/' },
        ],
      },
      collab: {
        title: 'Collaborations',
        subtitle: 'As part of agency and consultancy teams',
        items: [
          { year: '2020', name: 'Prochampions', meta: 'Collaboration with Tita Media · Sports store', url: 'https://www.prochampions.com/' },
          { year: '2019', name: 'Ciencuadras', meta: 'Collaboration with Insoftar · Real estate portal', url: 'https://www.ciencuadras.com/' },
          { year: '2015', name: 'Hotel Calle Principal', meta: 'Collaboration with DoD Media Group · Hotel', url: 'http://www.hotelcalleprincipal.com/' },
        ],
      },
    },
  },

  advisory: {
    label: 'Consulting',
    title: 'Does your platform need to grow without breaking?',
    intro:
      'Alongside my role at Banco de Bogotá, I help teams and companies through focused technical consulting, with the same rigor banking demands: stability, security, and scale.',
    services: [
      {
        icon: 'architecture',
        title: 'Architecture built to scale',
        text: 'I review your architecture and propose a clear path to support more users and more teams: micro-frontends, SSR/CSR, and well-separated services.',
      },
      {
        icon: 'traffic',
        title: 'High-traffic platforms',
        text: 'A diagnosis of frontend and backend bottlenecks, plus a prioritized plan so your platform holds up when demand peaks.',
      },
      {
        icon: 'cloud',
        title: 'Cloud & deployments',
        text: 'Infrastructure as code on AWS with Terraform, plus CI/CD pipelines so you can ship often, with control and without surprises.',
      },
      {
        icon: 'ai',
        title: 'AI engineering for teams',
        text: 'I bring AI agents into your development workflow with a method: AGENTS.md, skills, MCP, Plan → Build, TDD, and code review, so you gain speed without losing quality.',
      },
    ],
    steps: [
      'An initial conversation to understand your business',
      'Diagnosis and proposal with scope and timeline',
      'Hands-on sessions with your team',
    ],
  },

  stack: {
    label: 'Stack',
    title: 'Tools I work with',
    intro: 'I choose the tool for the problem, not the other way around.',
    groups: [
      { title: 'Frontend', items: ['React', 'Angular', 'Astro', 'Micro-frontends', 'SSR', 'CSR'] },
      { title: 'Backend & Data', items: ['Node.js', 'Python', 'PostgreSQL'] },
      { title: 'Cloud & DevOps', items: ['AWS', 'Terraform', 'CI/CD', 'Git'] },
      { title: 'Architecture & Design', items: ['Software architecture', 'Figma'] },
      {
        title: 'AI Engineering',
        featured: true,
        toolsTitle: 'Tools',
        items: ['Claude Code', 'OpenCode', 'Codex', 'GitHub Copilot', 'MCP', 'Context7', 'Skills', 'AGENTS.md / CLAUDE.md', 'Local models (LM Studio)'],
        methodsTitle: 'Method',
        methods: ['Plan → Build', 'AI pair programming', 'Atomic user stories', 'Given / When / Then criteria', 'Vertical slices', 'Red-green-refactor TDD', 'Emergent architecture (YAGNI)', 'Risk-based code review', 'Context management'],
      },
    ],
  },

  contact: {
    label: 'Contact',
    title: 'Shall we build something together?',
    intro: 'Colombia · Remote. Open to full stack roles and focused technical consulting.',
    jobMailto: mailto(
      'Job opportunity',
      'Hi Fernando,\n\nCompany:\nRole:\nWork arrangement (remote / hybrid):\nSalary range:\n\nTell me a bit more:\n',
    ),
    advisoryMailto: mailto(
      'Technical consulting',
      'Hi Fernando,\n\nCompany or project:\nWhat we need (architecture / high traffic / cloud & deployments):\nTimeline:\n\nContext:\n',
    ),
  },
};
