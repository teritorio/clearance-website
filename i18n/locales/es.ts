export default defineI18nLocale(async () => ({
  nav: {
    home: 'Clearance',
    docs: '¿Cómo funciona?',
    contact: 'Contacto',
    github: 'GitHub',
    openApp: 'Abrir la app',
    changeLanguage: 'Cambiar idioma',
  },
  footer: {
    product: 'Producto',
    resources: 'Recursos',
    company: 'Empresa',
    copyright: '© {year} {teritorio}. Software libre bajo {license}.',
    licenseLabel: 'licencia AGPL-3.0',
  },
  contact: {
    title: 'Contáctenos',
    description: '¿Tiene alguna pregunta sobre Clearance? ¿Necesita una demo o asistencia?',
    demoTitle: 'Solicitar una demostración',
    demoDescription: 'Durante una demostración, nos tomamos el tiempo para:',
    demoItem1: 'intercambiar sobre su contexto y necesidades',
    demoItem2: 'presentar los conceptos y el funcionamiento de Clearance',
    demoItem3: 'ilustrar casos de uso concretos',
    demoItem4: 'compartir nuestra hoja de ruta',
    ctaLabel: 'Contáctenos',
    externalUrl: 'https://www.teritorio.fr/es/contacto/',
    externalNotice: 'Será redirigido al sitio web de Teritorio.',
  },
  docs: {
    toc: 'En esta página',
  },
  seo: {
    description: 'Filtro de calidad open source para la replicación OpenStreetMap — filtre, valide y asegure su flujo de replicación OSM.',
    ogImageAlt: 'Clearance — Filtro de calidad para la replicación OpenStreetMap',
  },
  error: {
    title: 'Página no encontrada',
    message: 'La página que busca no existe o ha sido movida.',
    backHome: 'Volver al inicio',
  },
  page: {
    empty: 'Esta página aún no tiene contenido.',
    notFound: 'Página no encontrada',
  },
}))
