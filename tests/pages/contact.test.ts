import { mountSuspended } from '@nuxt/test-utils/runtime'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import ContactPage from '~/pages/contact.vue'

describe('contact page', () => {
  let originalLocation: Location

  beforeEach(() => {
    originalLocation = window.location
  })

  afterEach(() => {
    // Restore window.location to prevent cross-test pollution
    Object.defineProperty(window, 'location', {
      value: originalLocation,
      writable: true,
      configurable: true,
    })
  })

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

    // Target fields by type/placeholder rather than index
    const emailInput = component.find('input[type="email"]')
    expect(emailInput.attributes('required')).toBeDefined()

    // Name input: text input with the name placeholder
    const textInputs = component.findAll('input:not([type="email"])')
    const nameInput = textInputs.find(i => i.attributes('placeholder')?.includes('nom') || i.attributes('placeholder')?.includes('name'))
    expect(nameInput?.attributes('required')).toBeDefined()

    // Message textarea is required
    const textarea = component.find('textarea')
    expect(textarea.attributes('required')).toBeDefined()
  })

  it('organization field is not required', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })

    // Organization input: find by placeholder
    const inputs = component.findAll('input')
    const orgInput = inputs.find(i => i.attributes('placeholder')?.includes('organisation') || i.attributes('placeholder')?.includes('organization'))
    expect(orgInput).toBeDefined()
    expect(orgInput!.attributes('required')).toBeUndefined()
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

    // Mock window.location with proper cleanup via afterEach
    let capturedHref = ''
    Object.defineProperty(window, 'location', {
      value: {
        ...originalLocation,
        get href() { return capturedHref },
        set href(val: string) { capturedHref = val },
      },
      writable: true,
      configurable: true,
    })

    // Fill form fields by targeting specific inputs
    const emailInput = component.find('input[type="email"]')
    const textarea = component.find('textarea')
    const textInputs = component.findAll('input:not([type="email"])')
    const nameInput = textInputs.find(i => i.attributes('placeholder')?.includes('nom') || i.attributes('placeholder')?.includes('name'))
    const orgInput = textInputs.find(i => i.attributes('placeholder')?.includes('organisation') || i.attributes('placeholder')?.includes('organization'))

    await nameInput!.setValue('John Doe')
    await emailInput.setValue('john@example.com')
    await orgInput!.setValue('ACME Corp')
    await textarea.setValue('Hello, I need help.')

    // Submit
    await component.find('form').trigger('submit')

    expect(capturedHref).toContain('mailto:contact@teritorio.fr')
    expect(capturedHref).toContain('subject=')
    expect(capturedHref).toContain('John%20Doe')
    expect(capturedHref).toContain('body=')
  })

  it('resets form after submission', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })

    // Mock window.location with proper cleanup via afterEach
    Object.defineProperty(window, 'location', {
      value: { ...originalLocation, href: '' },
      writable: true,
      configurable: true,
    })

    const emailInput = component.find('input[type="email"]')
    const textarea = component.find('textarea')
    const textInputs = component.findAll('input:not([type="email"])')
    const nameInput = textInputs.find(i => i.attributes('placeholder')?.includes('nom') || i.attributes('placeholder')?.includes('name'))

    await nameInput!.setValue('John Doe')
    await emailInput.setValue('john@example.com')
    await textarea.setValue('Hello')

    await component.find('form').trigger('submit')
    await component.vm.$nextTick()

    // After submission, the reactive form should be reset
    expect((nameInput!.element as HTMLInputElement).value).toBe('')
    expect((emailInput.element as HTMLInputElement).value).toBe('')
    expect((textarea.element as HTMLTextAreaElement).value).toBe('')
  })
})
