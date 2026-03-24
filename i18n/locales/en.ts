export default defineI18nLocale(async () => ({
  nav: {
    home: 'Clearance',
    docs: 'Documentation',
    contact: 'Contact',
    github: 'GitHub',
    changeLanguage: 'Change language',
  },
  footer: {
    product: 'Product',
    resources: 'Resources',
    company: 'Company',
    copyright: '© {year} Teritorio. Open source under MIT License.',
  },
  contact: {
    title: 'Contact us',
    description: 'Have a question about Clearance? Need a demo or support? Write to us.',
    name: 'Name',
    email: 'Email',
    organization: 'Organization',
    message: 'Message',
    send: 'Send',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your{\'@\'}email.com',
    organizationPlaceholder: 'Your organization',
    messagePlaceholder: 'Describe your project or question...',
  },
  docs: {
    toc: 'On this page',
  },
}))
