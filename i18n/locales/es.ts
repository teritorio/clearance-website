export default defineI18nLocale(async () => ({
  nav: {
    home: 'Clearance',
    docs: '¿Cómo funciona?',
    contact: 'Contacto',
    news: 'Noticias',
    github: 'GitHub',
    seeClearance: 'Ver Clearance',
    changeLanguage: 'Cambiar idioma',
  },
  footer: {
    product: 'Producto',
    resources: 'Recursos',
    company: 'Empresa',
  },
  contact: {
    title: 'Contáctenos',
    description: '¿Tiene alguna duda sobre Clearance? ¿Necesita una demo o asistencia?',
    demoTitle: 'Solicitar una demostración',
    demoDescription: 'Durante una demostración, tomamos el tiempo de:',
    demoItem1: 'intercambiar sobre su contexto y necesidades',
    demoItem2: 'presentar los conceptos y el funcionamiento de Clearance',
    demoItem3: 'mostrar casos de uso concretos',
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
    message: 'La página que busca no existe o se mudó.',
    backHome: 'Volver al inicio',
  },
  page: {
    empty: 'Esta página aún no tiene contenido.',
    notFound: 'Página no encontrada',
  },
  news: {
    headline: 'Noticias',
    pageTitle: 'Últimas noticias',
    seoTitle: 'Noticias — Versiones, artículos y anuncios',
    pageDescription: 'Siga la evolución de Clearance: nuevas versiones, artículos y anuncios.',
    seeAll: 'Todas las noticias',
    readMore: 'Leer artículo',
    empty: 'Sin noticias por el momento.',
    types: {
      release: 'Versión',
      post: 'Artículo',
      announcement: 'Anuncio',
    },
  },
  faq: {
    headline: 'FAQ',
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Qué es Clearance?',
        answer: 'Clearance es una herramienta de código abierto que filtra los datos de OpenStreetMap antes de que lleguen a sus sistemas. Valida automáticamente los cambios válidos y retiene los sospechosos para su revisión, garantizando la calidad de su copia local de datos OSM.',
      },
      {
        question: '¿Clearance es gratuito y de código abierto?',
        answer: 'Sí, Clearance es software libre publicado bajo la licencia AGPL-3.0. El código fuente está disponible en GitHub. Teritorio también ofrece servicios de alojamiento SaaS y soporte para organizaciones que necesitan asistencia profesional.',
      },
      {
        question: '¿Qué tipos de cambios OSM filtra Clearance?',
        answer: 'Clearance detecta cambios geométricos sospechosos (desplazamiento de objetos, eliminaciones, geometrías inválidas), cambios tardíos en datos sensibles y cualquier modificación que pueda afectar sus usos empresariales según las reglas que defina por proyecto.',
      },
      {
        question: '¿Para quién es Clearance?',
        answer: 'Clearance está diseñado para organizaciones que usan OpenStreetMap en contextos críticos: operadores de movilidad y transporte, servicios de emergencias, administraciones locales, gestores de parques naturales, oficinas de turismo y plataformas de datos territoriales.',
      },
      {
        question: '¿En qué se diferencia Clearance de un simple espejo o herramienta de replicación OSM?',
        answer: 'Las herramientas de replicación tradicionales (osmosis, osm2pgsql, etc.) integran cambios sin control de calidad. Clearance añade una capa de filtrado inteligente: los datos válidos pasan de inmediato, mientras que los cambios problemáticos se retienen hasta que se validen o corrijan en OpenStreetMap en el origen.',
      },
    ],
  },
}))
