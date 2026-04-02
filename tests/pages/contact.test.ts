import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import ContactPage from '~/pages/contact.vue'

describe('contact page', () => {
  it('renders the page title and description', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })
    const text = component.text()
    expect(text).toContain('Contactez-nous')
  })

  it('renders the demo info block', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })
    const text = component.text()
    expect(text).toContain('Demander une démonstration')
  })

  it('renders the external contact CTA button', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })
    const html = component.html()
    expect(html).toContain('https://www.teritorio.fr/fr/contact/')
    expect(html).toContain('target="_blank"')
  })

  it('renders the external redirect notice', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })
    const text = component.text()
    expect(text).toContain('Vous serez redirigé vers le site de Teritorio')
  })

  it('does not render a form', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })
    expect(component.find('form').exists()).toBe(false)
  })
})
