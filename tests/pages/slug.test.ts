import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import SlugPage from '~/pages/[...slug].vue'

describe('slug page', () => {
  it('applies docs layout for docs paths', async () => {
    const component = await mountSuspended(SlugPage, {
      route: '/fr/docs/getting-started/overview',
    })
    // Docs layout wraps content in a sidebar layout with <aside> elements
    expect(component.find('aside').exists()).toBe(true)
  })

  it('applies default layout for non-docs paths', async () => {
    const component = await mountSuspended(SlugPage, {
      route: '/fr/about',
    })
    // Default layout has no sidebar
    expect(component.find('aside').exists()).toBe(false)
  })

  it('renders not found message when no page data', async () => {
    const component = await mountSuspended(SlugPage, {
      route: '/fr/nonexistent-page-that-does-not-exist',
    })
    // When page data is null, the not-found message renders (French locale)
    expect(component.text()).toContain('Page introuvable')
  })
})
