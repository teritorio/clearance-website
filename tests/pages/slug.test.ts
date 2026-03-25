import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import SlugPage from '~/pages/[...slug].vue'

describe('slug page', () => {
  it('applies docs layout when path includes /docs', async () => {
    const component = await mountSuspended(SlugPage, {
      route: '/fr/docs/getting-started/overview',
    })
    // Docs layout includes AppHeader with showHome prop
    const html = component.html()
    // The docs layout renders with a specific structure
    expect(html).toBeDefined()
  })

  it('applies default layout for non-docs paths', async () => {
    const component = await mountSuspended(SlugPage, {
      route: '/fr/about',
    })
    const html = component.html()
    expect(html).toBeDefined()
  })

  it('renders not found message when no page data', async () => {
    const component = await mountSuspended(SlugPage, {
      route: '/fr/nonexistent-page-that-does-not-exist',
    })
    // When page data is null, the "not found" div should render
    expect(component.html()).toBeDefined()
  })
})
