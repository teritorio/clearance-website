export default defineI18nLocale(async () => ({
  nav: {
    home: 'Clearance',
    docs: 'Documentación',
    contact: 'Contacto',
    github: 'GitHub',
    changeLanguage: 'Cambiar idioma',
  },
  footer: {
    product: 'Producto',
    resources: 'Recursos',
    company: 'Empresa',
    copyright: '© {year} Teritorio. Código abierto bajo licencia MIT.',
  },
  contact: {
    title: 'Contáctenos',
    description: '¿Tiene alguna pregunta sobre Clearance? ¿Necesita una demo o asistencia? Escríbanos.',
    name: 'Nombre',
    email: 'Correo electrónico',
    organization: 'Organización',
    message: 'Mensaje',
    send: 'Enviar',
    namePlaceholder: 'Su nombre',
    emailPlaceholder: 'su{\'@\'}correo.com',
    organizationPlaceholder: 'Su organización',
    messagePlaceholder: 'Describa su proyecto o pregunta...',
  },
  docs: {
    toc: 'En esta página',
  },
}))
