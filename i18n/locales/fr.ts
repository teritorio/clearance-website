export default defineI18nLocale(async () => ({
  nav: {
    home: 'Clearance',
    docs: 'Documentation',
    contact: 'Contact',
    github: 'GitHub',
    changeLanguage: 'Changer de langue',
  },
  footer: {
    product: 'Produit',
    resources: 'Ressources',
    company: 'Entreprise',
    copyright: '© {year} Teritorio. Open source sous licence MIT.',
  },
  contact: {
    title: 'Contactez-nous',
    description: 'Une question sur Clearance ? Besoin d\'une démo ou d\'un accompagnement ? Écrivez-nous.',
    name: 'Nom',
    email: 'Email',
    organization: 'Organisation',
    message: 'Message',
    send: 'Envoyer',
    namePlaceholder: 'Votre nom',
    emailPlaceholder: 'votre{\'@\'}email.com',
    organizationPlaceholder: 'Votre organisation',
    messagePlaceholder: 'Décrivez votre projet ou votre question...',
  },
  docs: {
    toc: 'Sur cette page',
  },
}))
