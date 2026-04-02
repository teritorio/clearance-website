export default defineI18nLocale(async () => ({
  nav: {
    home: 'Clearance',
    docs: 'How it works?',
    contact: 'Contact',
    github: 'GitHub',
    openApp: 'Open App',
    changeLanguage: 'Change language',
  },
  footer: {
    product: 'Product',
    resources: 'Resources',
    company: 'Company',
    copyright: '© {year} {teritorio}. Free software under {license}.',
    licenseLabel: 'AGPL-3.0 License',
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
}))
