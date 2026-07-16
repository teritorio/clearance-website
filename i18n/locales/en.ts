export default defineI18nLocale(async () => ({
  nav: {
    home: 'Clearance',
    docs: 'How it works?',
    contact: 'Contact',
    news: 'News',
    github: 'GitHub',
    seeClearance: 'See Clearance',
    changeLanguage: 'Change language',
  },
  footer: {
    product: 'Product',
    resources: 'Resources',
    company: 'Company',
  },
  contact: {
    title: 'Contact us',
    description: 'Have a question about Clearance? Need a demo or support?',
    demoTitle: 'Request a demonstration',
    demoDescription: 'During a demonstration, we take the time to:',
    demoItem1: 'discuss your context and needs',
    demoItem2: 'present the concepts and how Clearance works',
    demoItem3: 'illustrate concrete use cases',
    demoItem4: 'share our roadmap',
    ctaLabel: 'Contact us',
    externalUrl: 'https://www.teritorio.fr/en/contact-en/',
    externalNotice: 'You will be redirected to the Teritorio website.',
  },
  docs: {
    toc: 'On this page',
  },
  seo: {
    description: 'Open source quality filter for OpenStreetMap replication — filter, validate, and secure your OSM replication feed.',
    ogImageAlt: 'Clearance — Quality filter for OpenStreetMap replication',
  },
  error: {
    title: 'Page not found',
    message: 'The page you\'re looking for doesn\'t exist or has been moved.',
    backHome: 'Back to home',
  },
  page: {
    empty: 'This page has no content yet.',
    notFound: 'Page not found',
  },
  news: {
    headline: 'News',
    pageTitle: 'Latest news',
    seoTitle: 'News — Releases, Articles and Announcements',
    pageDescription: 'Follow Clearance updates: new releases, articles and announcements.',
    seeAll: 'All news',
    readMore: 'Read article',
    empty: 'No news yet.',
    types: {
      release: 'Release',
      post: 'Article',
      announcement: 'Announcement',
    },
  },
  faq: {
    headline: 'FAQ',
    title: 'Frequently asked questions',
    items: [
      {
        question: 'What is Clearance?',
        answer: 'Clearance is an open-source tool that filters OpenStreetMap data before it reaches your systems. It automatically validates valid changes and holds suspicious ones for review, ensuring the quality of your local OSM data copy.',
      },
      {
        question: 'Is Clearance free and open source?',
        answer: 'Yes, Clearance is free software released under the AGPL-3.0 license. The source code is available on GitHub. Teritorio also offers SaaS hosting and support services for organisations that need professional assistance.',
      },
      {
        question: 'What types of OSM changes does Clearance filter?',
        answer: 'Clearance detects suspicious geometric changes (object displacement, deletions, invalid geometries), delayed changes on sensitive data, and any modification that could affect your business use cases according to rules you define per project.',
      },
      {
        question: 'Who is Clearance for?',
        answer: 'Clearance is designed for organisations that use OpenStreetMap in critical contexts: mobility and transport operators, emergency services, local authorities, nature park managers, tourism offices, and territorial data platforms.',
      },
      {
        question: 'How does Clearance differ from a simple OSM mirror or replication tool?',
        answer: 'Traditional replication tools (osmosis, osm2pgsql, etc.) integrate changes without quality control. Clearance adds an intelligent filtering layer: valid data passes through immediately, while problematic changes are held until they are validated or corrected in OpenStreetMap at the source.',
      },
    ],
  },
}))
