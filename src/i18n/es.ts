/**
 * Contenido en ESPAÑOL (idioma por defecto, ruta /).
 * Toda cadena visible del sitio vive aquí; en.ts debe tener exactamente la misma forma.
 */
import type { SiteContent } from './types';

const email = 'juanfe.vega@gmail.com';
const mailto = (subject: string, body: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const es: SiteContent = {
  meta: {
    lang: 'es',
    htmlLang: 'es-CO',
    ogLocale: 'es_CO',
    cvFile: 'cv/Juan-Fernando-Vega-CV-ES.pdf',
    cvDownloadName: 'Juan-Fernando-Vega-CV-ES.pdf',
    jobTitle: 'Ingeniero de Sistemas y Computación · Desarrollador Full Stack Senior',
    alumniOf: 'Universidad Pedagógica y Tecnológica de Colombia (UPTC)',
    title: 'Fernando Vega · Ingeniero de Sistemas y Computación, Full Stack',
    description:
      'Ingeniero de Sistemas y Computación, full stack senior en banca digital. Llevo el software de la idea a producción: análisis, arquitectura, desarrollo, pruebas y despliegue con React, Angular, Node.js, Python y AWS. Creador de Trama.',
    portraitAlt: 'Retrato de Fernando Vega',
  },

  ui: {
    skipLink: 'Saltar al contenido',
    navLabel: 'Principal',
    logoLabel: 'Fernando Vega — inicio',
    home: 'Inicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    langSwitch: { short: 'EN', label: 'View this site in English', hreflang: 'en' },
    greeting: 'Hola, soy Fernando Vega',
    lifecycleLabel: 'Etapas que cubro',
    ctaTalk: 'Hablemos',
    ctaProjects: 'Ver proyectos',
    downloadCv: 'Descargar CV',
    scrollCue: 'Desliza para ver más',
    progressLabel: 'Recorriendo',
    present: 'Actualidad',
    showFullCareer: 'Ver trayectoria completa',
    newTab: '(abre en una pestaña nueva)',
    visitTrama: 'Visitar tramafin.com',
    methodology: 'Metodología',
    mockLabel: 'Ejemplo ilustrativo del simulador de crédito de Trama',
    mockCaption: 'Monto de 20 millones de pesos, 18 % efectivo anual a 36 meses: cuota mensual estimada de 709.736 pesos.',
    jobOffer: 'Tengo una oferta laboral',
    copy: 'copiar',
    copied: '¡copiado!',
    copyFailed: 'no se pudo copiar',
    copiedStatus: 'Correo copiado al portapapeles',
    backToTop: 'Volver arriba ↑',
    opensInNewTab: 'abre en una pestaña nueva',
  },

  profile: {
    name: 'Fernando Vega',
    headline: 'Llevo el software de la idea a producción.',
    role: 'Ingeniero de Sistemas y Computación',
    roleTag: 'Full Stack Senior',
    org: 'Banca digital',
    intro:
      'Más de 12 años creando productos web y más de 5 en banca digital. Analizo el problema, diseño la arquitectura, construyo, pruebo y despliego en AWS. Colombia · trabajo remoto.',
    introShort:
      'Más de 12 años creando productos web y más de 5 en banca digital. Del análisis al despliegue. Colombia · trabajo remoto.',
    lifecycle: ['Análisis', 'Planeación', 'Arquitectura', 'Desarrollo', 'Pruebas', 'Despliegue'],
    aiTag: 'Asistido por IA',
    aiTagLabel: 'Todas las etapas asistidas con agentes de IA',
    email,
    social: {
      linkedin: 'https://www.linkedin.com/in/fernando-vega-p/',
      github: 'https://github.com/fernando-vega',
    },
  },

  nav: [
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#stack', label: 'Stack' },
    { href: '#contacto', label: 'Contacto' },
  ],

  heroChips: {
    stats: '12+ años · 5+ en banca',
    availability: 'Abierto a oportunidades',
  },

  about: {
    label: 'Sobre mí',
    title: 'Del pixel a la infraestructura.',
    meta: 'UPTC · desde 2014 · Colombia, remoto',
    paragraphs: [
      'Soy ingeniero de Sistemas y Computación de la UPTC. Empecé en 2014 cofundando un estudio de software y hoy desarrollo en banca digital: plataformas web de alto tráfico con React, Angular y Astro, micro-frontends, servicios en Node.js y Python, e infraestructura en AWS con Terraform y CI/CD.',
      'Hoy trabajo con agentes de IA como Claude Code y OpenCode bajo un método de ingeniería, no de vibe coding: historias de usuario pequeñas, vertical slices, flujo Plan → Build, TDD y revisión de cada cambio según su riesgo. La IA escribe; yo dirijo, defino el contexto y verifico.',
      'Antes de escribir la primera línea, me aseguro de entender el problema completo: el negocio, la arquitectura y quién va a usar el producto. Así nació Trama, un proyecto personal. Fuera del código: bicicleta, senderos, música, lectura y familia.',
    ],
    stats: [
      { value: '12+', label: 'años desarrollando software', short: 'años' },
      { value: '5+', label: 'años en banca digital', short: 'en banca' },
      { value: '10+', label: 'empresas mejoraron sus procesos con mi software', short: 'empresas' },
    ],
  },

  experience: {
    label: 'Experiencia',
    title: 'Trayectoria',
    intro: 'Desde 2014: de cofundar un estudio de software a construir productos digitales para la banca.',
    jobs: [
      {
        start: 'Jun 2022',
        end: 'Actualidad',
        company: 'Banco de Bogotá',
        role: 'Desarrollador Full Stack Senior · Banca digital',
        description:
          'Desarrollo plataformas web de alto tráfico para clientes del banco, con arquitecturas pensadas para escalar: micro-frontends en React, Angular, Astro y Stencil, renderizado SSR/CSR, servicios, librerías y APIs documentadas con OpenAPI (OAS) en Node.js y Python sobre PostgreSQL, e infraestructura como código en AWS serverless con Terraform y CI/CD.',
        tags: ['React', 'Angular', 'Astro', 'Stencil', 'Micro-frontends', 'SSR / CSR', 'Node.js', 'Python', 'OpenAPI', 'PostgreSQL', 'AWS Serverless', 'Terraform', 'CI/CD'],
        current: true,
      },
      { start: 'Ene 2022', end: 'Jun 2022', company: 'RobinFood', role: 'Desarrollador Frontend' },
      {
        start: 'Oct 2020',
        end: 'Ene 2022',
        company: 'AOS & Sophos Solutions',
        role: 'Desarrollador Frontend · para Scotiabank Colpatria',
        description: 'Desarrollé micro-frontends y SPA en Angular para herramientas digitales del banco, con monitoreo en Kibana y Dynatrace.',
      },
      {
        start: 'Feb 2020',
        end: 'Oct 2020',
        company: 'Tita Media',
        role: 'Desarrollador Frontend',
        description: 'Desarrollé el sitio web de Titamedia y colaboré en e-commerce en VTEX para marcas como Mario Hernández, Bata, Prochampions, Panamericana, Samsung Colombia y Totto.',
      },
      {
        start: 'Ago 2019',
        end: 'Dic 2019',
        company: 'Insoftar',
        role: 'Desarrollador Full Stack',
        description: 'Colaboré en el desarrollo full stack de Ciencuadras, portal inmobiliario.',
      },
      {
        start: 'Ago 2018',
        end: 'Jul 2019',
        company: 'Quadi – Sancho BBDO',
        role: 'Desarrollador Frontend',
        description: 'Desarrollé el frontend de Colombia Travel — Birds, sitio de turismo de naturaleza, y colaboré en sitios y campañas para marcas como Bancolombia, Seguros Bolívar y Marca País Colombia.',
      },
      {
        start: 'Nov 2014',
        end: 'Jul 2019',
        company: 'DoD Media Group',
        role: 'Ingeniero de Software',
        description:
          'En paralelo con SIA Software y Quadi: desarrollé Inmobiliaria Contreras, Dromedario y Boyacá se escucha, y colaboré en Hotel Calle Principal.',
      },
      {
        start: 'Ene 2014',
        end: 'Jun 2018',
        company: 'SIA Software',
        role: 'Cofundador e Ingeniero de Software',
        description: 'Cofundé un estudio de software y acompañé a más de 10 empresas a mejorar sus procesos con software a la medida.',
      },
    ],
  },

  projects: {
    label: 'Proyectos',
    title: 'Proyecto personal y trabajo para marcas',
    trama: {
      badge: 'Proyecto personal · Recién lanzado',
      name: 'trama',
      url: 'https://tramafin.com',
      methodologyUrl: 'https://tramafin.com/metodologia',
      description:
        'Calculadoras financieras gratis y sin registro para Colombia, México, Argentina, Perú, Chile y España: créditos, CDT, salario neto, prima, cesantías, IVA y más. Fórmulas citadas y revisadas, y cálculos que corren en tu dispositivo. Es un proyecto personal que desarrollo en mi tiempo libre, con Astro.',
      kpis: [
        { value: '24', label: 'herramientas' },
        { value: '6', label: 'países' },
        { value: 'SIN', label: 'registro' },
      ],
      // Ejemplo ilustrativo: 20.000.000 COP, 18 % E.A., 36 meses (sistema francés).
      mock: {
        title: 'Simulador de crédito',
        country: 'CO · COP',
        fields: [
          { label: 'Monto', value: '$ 20.000.000' },
          { label: 'Tasa efectiva anual', value: '18 %' },
          { label: 'Plazo', value: '36 meses' },
        ],
        resultLabel: 'Cuota mensual estimada',
        result: '$ 709.736',
      },
    },
    /** Enlaces verificados el 2026-11-02. Volver a verificar antes de publicar. */
    pastWork: {
      title: 'Trabajo anterior',
      range: '2015 — 2020 · Agencias y consultoras',
      own: {
        title: 'Desarrollo propio',
        subtitle: 'Diseñados y desarrollados por mí · código en GitHub',
        items: [
          { year: '2017', name: 'Inmobiliaria Contreras', meta: 'DoD Media Group · Sitio inmobiliario', url: 'https://fernando-vega.github.io/inmobiliaria-contreras/dev/' },
          { year: '2017', name: 'Dromedario', meta: 'DoD Media Group', url: 'https://fernando-vega.github.io/dromedario/dev/' },
          { year: '2016', name: 'Boyacá se escucha', meta: 'DoD Media Group', url: 'https://fernando-vega.github.io/boyaca-se-escucha/' },
        ],
      },
      collab: {
        title: 'En colaboración',
        subtitle: 'Parte de equipos de agencia y consultora',
        items: [
          { year: '2020', name: 'Prochampions', meta: 'Colaboración con Tita Media · Tienda deportiva', url: 'https://www.prochampions.com/' },
          { year: '2019', name: 'Ciencuadras', meta: 'Colaboración con Insoftar · Portal inmobiliario', url: 'https://www.ciencuadras.com/' },
          { year: '2015', name: 'Hotel Calle Principal', meta: 'Colaboración con DoD Media Group · Hotel', url: 'http://www.hotelcalleprincipal.com/' },
        ],
      },
    },
  },


  stack: {
    label: 'Stack',
    title: 'Herramientas con las que trabajo',
    intro: 'Elijo la herramienta según el problema, no al revés.',
    groups: [
      { title: 'Frontend', items: ['React', 'Angular', 'Astro', 'Stencil', 'Micro-frontends', 'SSR', 'CSR'] },
      { title: 'Backend y datos', items: ['Node.js', 'Python', 'APIs con OpenAPI (OAS)', 'PostgreSQL'] },
      { title: 'Cloud y DevOps', items: ['AWS', 'Serverless', 'Terraform', 'CI/CD', 'Git'] },
      { title: 'Arquitectura y diseño', items: ['Arquitectura de software', 'Figma'] },
      {
        title: 'Ingeniería con IA',
        featured: true,
        toolsTitle: 'Herramientas',
        items: ['Claude Code', 'OpenCode', 'Codex', 'GitHub Copilot', 'MCP', 'Context7', 'Skills', 'AGENTS.md / CLAUDE.md', 'Modelos locales (LM Studio)'],
        methodsTitle: 'Método',
        methods: ['Plan → Build', 'AI pair programming', 'Historias de usuario atómicas', 'Criterios Dado / Cuando / Entonces', 'Vertical slices', 'TDD rojo-verde-refactor', 'Arquitectura emergente (YAGNI)', 'Revisión de código según riesgo', 'Gestión de contexto'],
      },
    ],
  },

  contact: {
    label: 'Contacto',
    disclaimer: 'Este es un sitio personal; no representa ni tiene respaldo de mis empleadores actuales o anteriores.',
    title: '¿Tienes una oferta laboral? Hablemos.',
    intro: 'Colombia · trabajo remoto. Abierto a nuevas oportunidades full stack.',
    jobMailto: mailto(
      'Oportunidad laboral',
      'Hola Fernando,\n\nEmpresa:\nCargo:\nModalidad (remoto / híbrido):\nRango salarial:\n\nCuéntame un poco más:\n',
    ),
  },
};
