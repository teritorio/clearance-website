import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import SlugPage from '~/pages/[...slug].vue'

describe('slug page', () => {
  it('does not show home icon in navigation on docs pages', async () => {
    const component = await mountSuspended(SlugPage, {
      route: '/fr/docs/getting-started/overview',
    })
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
