export default defineI18nLocale(async () => ({
  nav: {
    home: 'Clearance',
    docs: 'Comment ça marche ?',
    contact: 'Contact',
    news: 'Actualités',
    github: 'GitHub',
    seeClearance: 'Voir Clearance',
    changeLanguage: 'Changer de langue',
  },
  footer: {
    product: 'Produit',
    resources: 'Ressources',
    company: 'Entreprise',
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
  news: {
    headline: 'Actualités',
    pageTitle: 'Dernières nouvelles',
    seoTitle: 'Actualités — Versions, articles et annonces',
    pageDescription: 'Suivez l\'évolution de Clearance : nouvelles versions, articles et annonces.',
    seeAll: 'Toutes les actualités',
    readMore: 'Lire l\'article',
    empty: 'Aucune actualité pour le moment.',
  },
  faq: {
    headline: 'FAQ',
    title: 'Questions fréquentes',
    items: [
      {
        question: 'Qu\'est-ce que Clearance ?',
        answer: 'Clearance est un logiciel libre qui filtre les données OpenStreetMap avant qu\'elles n\'intègrent vos systèmes. Il valide automatiquement les modifications valides et met en attente les changements suspects pour vérification, garantissant ainsi la qualité de votre copie locale des données OSM.',
      },
      {
        question: 'Clearance est-il gratuit et open source ?',
        answer: 'Oui, Clearance est un logiciel libre publié sous licence AGPL-3.0. Le code source est disponible sur GitHub. Teritorio propose également des services d\'hébergement SaaS et d\'accompagnement pour les organisations qui souhaitent un support professionnel.',
      },
      {
        question: 'Quels types de modifications OSM Clearance filtre-t-il ?',
        answer: 'Clearance détecte les modifications géométriques suspectes (déplacements d\'objets, suppressions, géométries invalides), les changements tardifs sur des données sensibles, ainsi que toute modification susceptible d\'affecter vos usages métier selon des règles que vous définissez par projet.',
      },
      {
        question: 'À qui s\'adresse Clearance ?',
        answer: 'Clearance s\'adresse aux organisations qui utilisent OpenStreetMap dans un contexte critique : opérateurs de mobilité et de transport, services de secours, collectivités territoriales, gestionnaires de parcs naturels, offices de tourisme et plateformes de données territoriales.',
      },
      {
        question: 'En quoi Clearance diffère-t-il d\'un simple miroir ou outil de réplication OSM ?',
        answer: 'Les outils de réplication classiques (osmosis, osm2pgsql, etc.) intègrent les modifications sans contrôle de qualité. Clearance ajoute une couche de filtrage intelligente : les données valides passent immédiatement, les changements problématiques sont retenus jusqu\'à validation ou correction dans OpenStreetMap à la source.',
      },
    ],
  },
}))
