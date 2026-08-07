import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import App from '~/app.vue'

describe('app', () => {
  it('renders the application', async () => {
    const component = await mountSuspended(App, { route: '/fr/contact' })
    expect(component.html()).toContain('Clearance')
  })
})
