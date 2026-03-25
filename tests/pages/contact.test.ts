import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it, vi } from 'vitest'
import ContactPage from '~/pages/contact.vue'

describe('contact page', () => {
  it('renders the contact form with all fields', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })
    const inputs = component.findAll('input')
    const textareas = component.findAll('textarea')

    // name, email, organization = 3 inputs + 1 textarea (message)
    expect(inputs.length).toBeGreaterThanOrEqual(3)
    expect(textareas.length).toBeGreaterThanOrEqual(1)
  })

  it('has required attribute on name, email, and message fields', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })
    const inputs = component.findAll('input')
    const textareas = component.findAll('textarea')

    // Find by placeholder or model - name and email inputs are required
    const requiredInputs = inputs.filter(i => i.attributes('required') !== undefined)
    expect(requiredInputs.length).toBeGreaterThanOrEqual(2)

    // Message textarea is required
    const requiredTextareas = textareas.filter(t => t.attributes('required') !== undefined)
    expect(requiredTextareas.length).toBeGreaterThanOrEqual(1)
  })

  it('organization field is not required', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })
    const inputs = component.findAll('input')
    // Organization is the third input (after name and email) and should not be required
    const optionalInputs = inputs.filter(i => i.attributes('required') === undefined)
    expect(optionalInputs.length).toBeGreaterThanOrEqual(1)
  })

  it('renders i18n labels', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })
    const text = component.text()
    // French locale labels from fr.ts
    expect(text).toContain('Nom')
    expect(text).toContain('Email')
    expect(text).toContain('Message')
  })

  it('constructs mailto URL on submit', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })

    // Mock window.location.href
    const hrefSpy = vi.spyOn(window, 'location', 'get').mockReturnValue({
      ...window.location,
      href: '',
    } as Location)

    let capturedHref = ''
    Object.defineProperty(window, 'location', {
      value: {
        ...window.location,
        get href() { return capturedHref },
        set href(val: string) { capturedHref = val },
      },
      writable: true,
      configurable: true,
    })

    // Fill form fields
    const inputs = component.findAll('input')
    const textarea = component.find('textarea')

    await inputs[0].setValue('John Doe')
    await inputs[1].setValue('john@example.com')
    await inputs[2].setValue('ACME Corp')
    await textarea.setValue('Hello, I need help.')

    // Submit
    await component.find('form').trigger('submit')

    expect(capturedHref).toContain('mailto:contact@teritorio.fr')
    expect(capturedHref).toContain('subject=')
    expect(capturedHref).toContain('John%20Doe')
    expect(capturedHref).toContain('body=')

    hrefSpy.mockRestore()
  })

  it('resets form after submission', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })

    // Prevent actual navigation
    Object.defineProperty(window, 'location', {
      value: { ...window.location, href: '' },
      writable: true,
      configurable: true,
    })

    const inputs = component.findAll('input')
    const textarea = component.find('textarea')

    await inputs[0].setValue('John Doe')
    await inputs[1].setValue('john@example.com')
    await textarea.setValue('Hello')

    await component.find('form').trigger('submit')
    await component.vm.$nextTick()

    // After submission, the reactive form should be reset
    // Check the component's internal state via the DOM
    expect((inputs[0].element as HTMLInputElement).value).toBe('')
    expect((inputs[1].element as HTMLInputElement).value).toBe('')
    expect((textarea.element as HTMLTextAreaElement).value).toBe('')
  })
})
