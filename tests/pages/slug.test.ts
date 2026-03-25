import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import SlugPage from '~/pages/[...slug].vue'

describe('slug page', () => {
  it('applies docs layout when path includes /docs', async () => {
    const component = await mountSuspended(SlugPage, {
      route: '/fr/docs/getting-started/overview',
    })
    // Docs layout passes showHome to AppHeader, rendering the home icon
    expect(component.html()).toContain('i-lucide:home')
  })

  it('applies default layout for non-docs paths', async () => {
    const component = await mountSuspended(SlugPage, {
      route: '/fr/about',
    })
    // Default layout does not pass showHome, so no home icon in nav
    expect(component.html()).not.toContain('i-lucide:home')
  })

  it('renders not found message when no page data', async () => {
    const component = await mountSuspended(SlugPage, {
      route: '/fr/nonexistent-page-that-does-not-exist',
    })
    // When page data is null, the not-found message renders (French locale)
    expect(component.text()).toContain('Page introuvable')
  })
})
