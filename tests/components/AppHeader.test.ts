import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import AppHeader from '~/components/AppHeader.vue'

describe('appHeader', () => {
  it('renders locale dropdown trigger with language icon and current locale', async () => {
    const component = await mountSuspended(AppHeader)
    const localeButton = component.find('button[aria-label="Change language"]')
    expect(localeButton.exists()).toBe(true)
    expect(localeButton.html()).toContain('i-lucide:languages')
    // Test environment defaults to en locale
    expect(localeButton.text()).toContain('EN')
  })

  it('renders docs and contact navigation items', async () => {
    const component = await mountSuspended(AppHeader)
    const html = component.html()
    expect(html).toContain('/en/docs')
    expect(html).toContain('/en/contact')
  })

  it('renders GitHub link', async () => {
    const component = await mountSuspended(AppHeader)
    const html = component.html()
    expect(html).toContain('https://github.com/teritorio/clearance')
  })

  it('renders See Clearance CTA button with correct URL', async () => {
    const component = await mountSuspended(AppHeader)
    const html = component.html()
    expect(html).toContain('https://clearance.teritorio.xyz')
    expect(html).toContain('See Clearance')
  })

  it('does not show home nav item in navigation menu', async () => {
    const component = await mountSuspended(AppHeader)
    const html = component.html()
    const homeIconCount = (html.match(/i-lucide:home/g) || []).length
    expect(homeIconCount).toBe(0)
  })
})
