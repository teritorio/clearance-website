export default defineI18nLocale(async () => ({
  nav: {
    home: 'Clearance',
    docs: 'Comment ça marche ?',
    contact: 'Contact',
    github: 'GitHub',
    seeClearance: 'Voir Clearance',
    changeLanguage: 'Changer de langue',
  },
  footer: {
    product: 'Produit',
    resources: 'Ressources',
    company: 'Entreprise',
    copyright: '© {year} {teritorio}.',
  },
  contact: {
    title: 'Contactez-nous',
    description: 'Une question sur Clearance ? Besoin d\'une démo ou d\'un accompagnement ?',
    demoTitle: 'Demander une démonstration',
    demoDescription: 'Lors d\'une démonstration, nous prenons le temps :',
    demoItem1: 'd\'échanger sur votre contexte et vos besoins',
    demoItem2: 'de vous présenter les concepts et le fonctionnement de Clearance',
    demoItem3: 'd\'illustrer des cas d\'usage concrets',
    demoItem4: 'de vous partager notre feuille de route',
    ctaLabel: 'Nous contacter',
    externalUrl: 'https://www.teritorio.fr/fr/contact/',
    externalNotice: 'Vous serez redirigé vers le site de Teritorio.',
  },
  docs: {
    toc: 'Sur cette page',
  },
  seo: {
    description: 'Filtre qualité open source pour la réplication OpenStreetMap — filtrez, validez et sécurisez votre flux de réplication OSM.',
    ogImageAlt: 'Clearance — Filtre qualité pour la réplication OpenStreetMap',
  },
  error: {
    title: 'Page introuvable',
    message: 'La page que vous cherchez n\'existe pas ou a été déplacée.',
    backHome: 'Retour à l\'accueil',
  },
  page: {
    empty: 'Cette page n\'a pas encore de contenu.',
    notFound: 'Page introuvable',
  },
}))
