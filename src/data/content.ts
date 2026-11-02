/**
 * Fuente única de contenido del portafolio.
 * Editar aquí actualiza todas las secciones (antes estaba duplicado en 3 componentes).
 */

export const profile = {
  name: 'Fernando Vega',
  headline: 'Llevo el software de la idea a producción.',
  role: 'Ingeniero de Sistemas · Full Stack',
  org: 'Área Digital del Banco de Bogotá',
  intro:
    'Más de 12 años creando productos web y más de 5 en banca digital. Analizo el problema, diseño la arquitectura, construyo, pruebo y despliego en AWS. Colombia · trabajo remoto.',
  introShort:
    'Más de 12 años creando productos web y más de 5 en banca digital. Del análisis al despliegue. Colombia · trabajo remoto.',
  lifecycle: ['Análisis', 'Planeación', 'Arquitectura', 'Desarrollo', 'Pruebas', 'Despliegue'],
  email: 'juanfe.vega@gmail.com',
  location: 'Colombia · trabajo remoto',
  social: {
    linkedin: 'https://www.linkedin.com/in/fernando-vega-p/',
    github: 'https://github.com/fernando-vega',
  },
  seo: {
    title: 'Fernando Vega · Ingeniero de Software Full Stack | De la idea a producción',
    description:
      'Ingeniero de sistemas full stack en banca digital. Llevo el software de la idea a producción: análisis, arquitectura, desarrollo, pruebas y despliegue con React, Angular, Node.js, Python y AWS. Creador de Trama.',
  },
} as const;

export const nav = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#asesoria', label: 'Asesoría' },
  { href: '#stack', label: 'Stack' },
  { href: '#contacto', label: 'Contacto' },
] as const;

export const heroChips = {
  stats: '12+ años · 5+ en banca',
  availability: 'Disponible para asesoría',
} as const;

export const about = {
  title: 'Del pixel a la infraestructura.',
  meta: 'UPTC · desde 2014 · Colombia, remoto',
  paragraphs: [
    'Soy ingeniero de Sistemas y Computación de la UPTC. Empecé en 2014 cofundando un estudio de software y hoy desarrollo en el área digital del Banco de Bogotá: plataformas web de alto tráfico con React, Angular y Astro, micro-frontends, servicios en Node.js y Python, e infraestructura en AWS con Terraform y CI/CD.',
    'Antes de escribir la primera línea, me aseguro de entender el problema completo: el negocio, la arquitectura y quién va a usar el producto. Así nació Trama, mi producto propio. Fuera del código: bicicleta, senderos, música, lectura y familia.',
  ],
  stats: [
    { value: '12+', label: 'años desarrollando software', short: 'años' },
    { value: '5+', label: 'años en banca digital', short: 'en banca' },
    { value: '10+', label: 'empresas mejoraron sus procesos con mi software', short: 'empresas' },
  ],
} as const;

export interface Job {
  start: string;
  end: string;
  company: string;
  role: string;
  description?: string;
  tags?: string[];
  current?: boolean;
}

export const experience = {
  title: 'Trayectoria',
  intro: 'Desde 2014: de cofundar un estudio de software a construir productos digitales para la banca.',
  jobs: [
    {
      start: 'Jun 2022',
      end: 'Actual',
      company: 'Banco de Bogotá',
      role: 'Desarrollador Full Stack · Área Digital (Analista I)',
      description:
        'Desarrollo plataformas web de alto tráfico para clientes del banco, con arquitecturas pensadas para escalar: micro-frontends en React, Angular y Astro, renderizado SSR/CSR, servicios en Node.js y Python sobre PostgreSQL, e infraestructura como código en AWS con Terraform y CI/CD.',
      tags: ['React', 'Angular', 'Astro', 'Micro-frontends', 'SSR / CSR', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Terraform', 'CI/CD'],
      current: true,
    },
    { start: 'Ene 2022', end: 'May 2022', company: 'RobinFood', role: 'Frontend Developer' },
    { start: 'Oct 2020', end: 'Ene 2022', company: 'Scotiabank Colpatria', role: 'Frontend Developer' },
    {
      start: 'Feb 2020',
      end: 'Sep 2020',
      company: 'Tita Media',
      role: 'Frontend Developer',
      description: 'Colaboré en e-commerce y sitios para marcas como Bata Colombia, Prochampions y Titamedia.',
    },
    {
      start: 'Ago 2019',
      end: 'Dic 2019',
      company: 'Insoftar',
      role: 'Full Stack Developer',
      description: 'Colaboré en el desarrollo full stack de Ciencuadras, portal inmobiliario.',
    },
    {
      start: 'Ago 2018',
      end: 'Jul 2019',
      company: 'Quadi',
      role: 'Frontend Developer',
      description: 'Colaboré en el frontend de Colombia Travel — Birds, sitio de turismo de naturaleza.',
    },
    {
      start: 'Nov 2015',
      end: 'Jul 2018',
      company: 'DoD Media Group',
      role: 'Ingeniero de Software',
      description:
        'En paralelo con SIA Software: desarrollé Inmobiliaria Contreras, Dromedario y Boyacá se escucha, y colaboré en Hotel Calle Principal.',
    },
    {
      start: 'Feb 2014',
      end: 'Dic 2017',
      company: 'SIA Software',
      role: 'Cofundador e Ingeniero de Software',
      description: 'Cofundé un estudio de software y acompañé a más de 10 empresas a mejorar sus procesos con software a la medida.',
    },
  ] satisfies Job[],
};

export const trama = {
  badge: 'Proyecto personal · Recién lanzado',
  name: 'trama',
  url: 'https://tramafin.com',
  methodologyUrl: 'https://tramafin.com/metodologia',
  description:
    'Calculadoras financieras gratis y sin registro para Colombia, México, Argentina, Perú, Chile y España: créditos, CDT, salario neto, prima, cesantías, IVA y más. Fórmulas citadas y revisadas, y cálculos que corren en tu dispositivo. La diseñé, construí y opero yo solo, con Astro.',
  kpis: [
    { value: '24', label: 'herramientas' },
    { value: '6', label: 'países' },
    { value: '0', label: 'registros' },
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
} as const;

export interface PastProject {
  year: string;
  name: string;
  meta: string;
  url: string;
}

/** Enlaces verificados el 2026-11-02. Volver a verificar antes de publicar. */
export const pastWork = {
  title: 'Trabajo anterior',
  range: '2015 — 2020 · Agencias y consultoras',
  own: {
    title: 'Desarrollo propio',
    subtitle: 'Diseñados y desarrollados por mí · código en GitHub',
    items: [
      { year: '2017', name: 'Inmobiliaria Contreras', meta: 'DoD Media Group · Sitio inmobiliario', url: 'https://fernando-vega.github.io/inmobiliaria-contreras/dev/' },
      { year: '2017', name: 'Dromedario', meta: 'DoD Media Group', url: 'https://fernando-vega.github.io/dromedario/dev/' },
      { year: '2016', name: 'Boyacá se escucha', meta: 'DoD Media Group', url: 'https://fernando-vega.github.io/boyaca-se-escucha/' },
    ] satisfies PastProject[],
  },
  collab: {
    title: 'En colaboración',
    subtitle: 'Parte de equipos de agencia y consultora',
    items: [
      { year: '2020', name: 'Prochampions', meta: 'Colaboración con Tita Media · Tienda deportiva', url: 'https://www.prochampions.com/' },
      { year: '2019', name: 'Ciencuadras', meta: 'Colaboración con Insoftar · Portal inmobiliario', url: 'https://www.ciencuadras.com/' },
      { year: '2015', name: 'Hotel Calle Principal', meta: 'Colaboración con DoD Media Group · Hotel', url: 'http://www.hotelcalleprincipal.com/' },
    ] satisfies PastProject[],
  },
};

export const advisory = {
  title: '¿Tu plataforma necesita crecer sin romperse?',
  intro:
    'Además de mi rol en el Banco de Bogotá, acompaño a equipos y empresas con asesoría técnica puntual, con la misma exigencia de la banca: estabilidad, seguridad y escala.',
  services: [
    {
      icon: 'architecture',
      title: 'Arquitectura para escalar',
      text: 'Reviso tu arquitectura y te propongo un camino claro para soportar más usuarios y más equipos: micro-frontends, SSR/CSR y servicios bien separados.',
    },
    {
      icon: 'traffic',
      title: 'Plataformas de alto tráfico',
      text: 'Diagnóstico de cuellos de botella en frontend y backend, y un plan priorizado para que tu plataforma responda cuando más se usa.',
    },
    {
      icon: 'cloud',
      title: 'Nube y despliegues',
      text: 'Infraestructura como código en AWS con Terraform y pipelines de CI/CD para desplegar seguido, con control y sin sobresaltos.',
    },
  ],
  steps: [
    'Conversación inicial para entender tu negocio',
    'Diagnóstico y propuesta con alcance y tiempos',
    'Sesiones de acompañamiento con tu equipo',
  ],
} as const;

export const stack = {
  title: 'Herramientas con las que trabajo',
  intro: 'Elijo la herramienta según el problema, no al revés.',
  groups: [
    { title: 'Frontend', items: ['React', 'Angular', 'Astro', 'Micro-frontends', 'SSR', 'CSR'] },
    { title: 'Backend y datos', items: ['Node.js', 'Python', 'PostgreSQL'] },
    { title: 'Cloud y DevOps', items: ['AWS', 'Terraform', 'CI/CD', 'Git'] },
    { title: 'Arquitectura y diseño', items: ['Arquitectura de software', 'Figma'] },
  ],
} as const;

const mailto = (subject: string, body: string) =>
  `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const contact = {
  title: '¿Construimos algo juntos?',
  intro: 'Colombia · trabajo remoto. Abierto a oportunidades full stack y a asesorías técnicas puntuales.',
  job: mailto(
    'Oportunidad laboral',
    'Hola Fernando,\n\nEmpresa:\nCargo:\nModalidad (remoto / híbrido):\nRango salarial:\n\nCuéntame un poco más:\n',
  ),
  advisory: mailto(
    'Asesoría técnica',
    'Hola Fernando,\n\nEmpresa o proyecto:\nQué necesitamos (arquitectura / alto tráfico / nube y despliegues):\nPlazo:\n\nContexto:\n',
  ),
} as const;
