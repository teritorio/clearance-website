import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import { h } from 'vue'
import LandingCta from '~/components/content/LandingCta.vue'
import LandingFeature from '~/components/content/LandingFeature.vue'
import LandingFeatures from '~/components/content/LandingFeatures.vue'
import LandingHero from '~/components/content/LandingHero.vue'
import LandingReferences from '~/components/content/LandingReferences.vue'
import LandingSectionHeader from '~/components/content/LandingSectionHeader.vue'
import LandingServices from '~/components/content/LandingServices.vue'
import LandingSolution from '~/components/content/LandingSolution.vue'
import LandingStep from '~/components/content/LandingStep.vue'
import LandingUseCase from '~/components/content/LandingUseCase.vue'
import LandingUseCases from '~/components/content/LandingUseCases.vue'

describe('landingSectionHeader', () => {
  it('renders headline, title, and description', async () => {
    const component = await mountSuspended(LandingSectionHeader, {
      props: {
        headline: 'My Headline',
        title: 'My Title',
        description: 'My Description',
      },
    })
    expect(component.text()).toContain('My Headline')
    expect(component.text()).toContain('My Title')
    expect(component.text()).toContain('My Description')
  })

  it('renders headline alone when no title is provided', async () => {
    const component = await mountSuspended(LandingSectionHeader, {
      props: {
        headline: 'My Headline',
      },
    })
    expect(component.text()).toContain('My Headline')
    expect(component.find('h2').exists()).toBe(false)
  })

  it('hides when neither title nor headline is provided', async () => {
    const component = await mountSuspended(LandingSectionHeader, {
      props: {},
    })
    expect(component.text()).toBe('')
  })

  it('hides headline when not provided', async () => {
    const component = await mountSuspended(LandingSectionHeader, {
      props: {
        title: 'My Title',
      },
    })
    expect(component.text()).toContain('My Title')
    expect(component.text()).not.toContain('My Headline')
  })

  it('hides description when not provided', async () => {
    const component = await mountSuspended(LandingSectionHeader, {
      props: {
        title: 'My Title',
      },
    })
    expect(component.text()).toContain('My Title')
    // Only title text should be present, no description paragraph
    expect(component.findAll('p').filter(p => p.text().length > 0)).toHaveLength(0)
  })
})

describe('landingHero', () => {
  it('renders title and description', async () => {
    const component = await mountSuspended(LandingHero, {
      props: {
        title: 'Hero Title',
        description: 'Hero Description',
      },
    })
    expect(component.text()).toContain('Hero Title')
    expect(component.text()).toContain('Hero Description')
  })

  it('renders headline when provided', async () => {
    const component = await mountSuspended(LandingHero, {
      props: {
        headline: 'Hero Headline',
        title: 'Hero Title',
        description: 'Hero Description',
      },
    })
    expect(component.text()).toContain('Hero Headline')
  })

  it('hides buttons when no label or to', async () => {
    const component = await mountSuspended(LandingHero, {
      props: {
        title: 'Hero Title',
        description: 'Hero Description',
      },
    })
    // No button text like "Get Started" or "Learn More" should be present
    expect(component.text()).not.toContain('Get Started')
    expect(component.text()).not.toContain('Learn More')
  })

  it('renders primary button with locale-resolved path', async () => {
    const component = await mountSuspended(LandingHero, {
      props: {
        title: 'Hero Title',
        description: 'Hero Description',
        primaryLabel: 'Get Started',
        primaryTo: '/docs',
      },
    })
    expect(component.text()).toContain('Get Started')
  })

  it('renders secondary button', async () => {
    const component = await mountSuspended(LandingHero, {
      props: {
        title: 'Hero Title',
        description: 'Hero Description',
        secondaryLabel: 'Learn More',
        secondaryTo: '/about',
      },
    })
    expect(component.text()).toContain('Learn More')
  })

  it('preserves external URLs', async () => {
    const component = await mountSuspended(LandingHero, {
      props: {
        title: 'Hero Title',
        description: 'Hero Description',
        primaryLabel: 'GitHub',
        primaryTo: 'https://github.com/teritorio/clearance',
      },
    })
    const link = component.find('a[href="https://github.com/teritorio/clearance"]')
    expect(link.exists()).toBe(true)
  })
})

describe('landingCta', () => {
  it('renders title', async () => {
    const component = await mountSuspended(LandingCta, {
      props: {
        title: 'CTA Title',
      },
    })
    expect(component.text()).toContain('CTA Title')
  })

  it('renders description when provided', async () => {
    const component = await mountSuspended(LandingCta, {
      props: {
        title: 'CTA Title',
        description: 'CTA Description',
      },
    })
    expect(component.text()).toContain('CTA Description')
  })

  it('hides description when not provided', async () => {
    const component = await mountSuspended(LandingCta, {
      props: {
        title: 'CTA Title',
      },
    })
    expect(component.html()).not.toContain('CTA Description')
  })

  it('renders primary and secondary buttons', async () => {
    const component = await mountSuspended(LandingCta, {
      props: {
        title: 'CTA Title',
        primaryLabel: 'Primary',
        primaryTo: '/start',
        secondaryLabel: 'Secondary',
        secondaryTo: '/learn',
      },
    })
    expect(component.text()).toContain('Primary')
    expect(component.text()).toContain('Secondary')
  })

  it('hides buttons when no label', async () => {
    const component = await mountSuspended(LandingCta, {
      props: {
        title: 'CTA Title',
      },
    })
    // No button labels should be present
    expect(component.text()).not.toContain('Primary')
    expect(component.text()).not.toContain('Secondary')
  })
})

describe('landingFeature', () => {
  it('renders title', async () => {
    const component = await mountSuspended(LandingFeature, {
      props: {
        title: 'Feature Title',
      },
    })
    expect(component.text()).toContain('Feature Title')
  })

  it('renders icon when provided', async () => {
    const component = await mountSuspended(LandingFeature, {
      props: {
        icon: 'i-lucide-check',
        title: 'Feature Title',
      },
    })
    expect(component.html()).toContain('i-lucide:check')
  })

  it('hides icon container when not provided', async () => {
    const component = await mountSuspended(LandingFeature, {
      props: {
        title: 'Feature Title',
      },
    })
    expect(component.html()).not.toContain('iconify')
  })

  it('renders slot content', async () => {
    const component = await mountSuspended(LandingFeature, {
      props: {
        title: 'Feature Title',
      },
      slots: {
        default: () => h('span', 'Slot Content'),
      },
    })
    expect(component.text()).toContain('Slot Content')
  })
})

describe('landingFeatures', () => {
  it('renders section header props', async () => {
    const component = await mountSuspended(LandingFeatures, {
      props: {
        headline: 'Features Headline',
        title: 'Features Title',
        description: 'Features Description',
      },
    })
    expect(component.text()).toContain('Features Headline')
    expect(component.text()).toContain('Features Title')
    expect(component.text()).toContain('Features Description')
  })

  it('renders slot children', async () => {
    const component = await mountSuspended(LandingFeatures, {
      props: {
        title: 'Features Title',
      },
      slots: {
        default: () => h('div', 'Child Content'),
      },
    })
    expect(component.text()).toContain('Child Content')
  })
})

describe('landingStep', () => {
  it('renders icon when provided', async () => {
    const component = await mountSuspended(LandingStep, {
      props: {
        icon: 'i-lucide-rocket',
        title: 'Step Title',
      },
    })
    expect(component.text()).toContain('Step Title')
    expect(component.html()).toContain('i-lucide:rocket')
  })

  it('hides icon when not provided', async () => {
    const component = await mountSuspended(LandingStep, {
      props: {
        title: 'Step Title',
      },
    })
    expect(component.text()).toContain('Step Title')
    expect(component.html()).not.toContain('iconify')
  })

  it('renders slot content', async () => {
    const component = await mountSuspended(LandingStep, {
      props: {
        title: 'Step Title',
      },
      slots: {
        default: () => h('span', 'Step details'),
      },
    })
    expect(component.text()).toContain('Step details')
  })
})

describe('landingSolution', () => {
  it('renders section header props', async () => {
    const component = await mountSuspended(LandingSolution, {
      props: {
        headline: 'Solution Headline',
        title: 'Solution Title',
        description: 'Solution Description',
      },
    })
    expect(component.text()).toContain('Solution Headline')
    expect(component.text()).toContain('Solution Title')
    expect(component.text()).toContain('Solution Description')
  })

  it('renders intro and conclusion paragraphs', async () => {
    const component = await mountSuspended(LandingSolution, {
      props: {
        title: 'Solution Title',
        intro: 'Intro paragraph text',
        conclusion: 'Conclusion paragraph text',
      },
    })
    expect(component.text()).toContain('Intro paragraph text')
    expect(component.text()).toContain('Conclusion paragraph text')
  })

  it('hides intro and conclusion when not provided', async () => {
    const component = await mountSuspended(LandingSolution, {
      props: {
        title: 'Solution Title',
      },
    })
    expect(component.text()).not.toContain('Intro')
    expect(component.text()).not.toContain('Conclusion')
  })

  it('renders slot children', async () => {
    const component = await mountSuspended(LandingSolution, {
      props: {
        title: 'Solution Title',
      },
      slots: {
        default: () => h('div', 'Solution Child'),
      },
    })
    expect(component.text()).toContain('Solution Child')
  })
})

describe('landingUseCase', () => {
  it('renders icon and title via LandingFeature', async () => {
    const component = await mountSuspended(LandingUseCase, {
      props: {
        icon: 'i-lucide-map',
        title: 'Use Case Title',
      },
    })
    expect(component.text()).toContain('Use Case Title')
    expect(component.html()).toContain('i-lucide:map')
  })

  it('renders slot content', async () => {
    const component = await mountSuspended(LandingUseCase, {
      props: {
        title: 'Use Case Title',
      },
      slots: {
        default: () => h('span', 'Use case description'),
      },
    })
    expect(component.text()).toContain('Use case description')
  })
})

describe('landingUseCases', () => {
  it('renders section header via LandingFeatures', async () => {
    const component = await mountSuspended(LandingUseCases, {
      props: {
        headline: 'UseCases Headline',
        title: 'UseCases Title',
        description: 'UseCases Description',
      },
    })
    expect(component.text()).toContain('UseCases Headline')
    expect(component.text()).toContain('UseCases Title')
    expect(component.text()).toContain('UseCases Description')
  })

  it('renders slot children', async () => {
    const component = await mountSuspended(LandingUseCases, {
      props: {
        title: 'UseCases Title',
      },
      slots: {
        default: () => h('div', 'UseCase Child'),
      },
    })
    expect(component.text()).toContain('UseCase Child')
  })
})

describe('landingServices', () => {
  it('renders section header props', async () => {
    const component = await mountSuspended(LandingServices, {
      props: {
        headline: 'Services Headline',
        title: 'Services Title',
      },
    })
    expect(component.text()).toContain('Services Headline')
    expect(component.text()).toContain('Services Title')
  })

  it('renders slot content', async () => {
    const component = await mountSuspended(LandingServices, {
      props: {
        title: 'Services Title',
      },
      slots: {
        default: () => h('span', 'Service details'),
      },
    })
    expect(component.text()).toContain('Service details')
  })

  it('renders CTA button when label and link are provided', async () => {
    const component = await mountSuspended(LandingServices, {
      props: {
        title: 'Services Title',
        ctaLabel: 'See roadmap',
        ctaTo: '/docs/how-it-works/roadmap',
      },
    })
    expect(component.text()).toContain('See roadmap')
  })

  it('hides CTA button when no label', async () => {
    const component = await mountSuspended(LandingServices, {
      props: {
        title: 'Services Title',
      },
    })
    expect(component.text()).not.toContain('See roadmap')
  })

  it('uses white background for visual alternation with References', async () => {
    const component = await mountSuspended(LandingServices, {
      props: {
        title: 'Services Title',
      },
    })
    expect(component.find('section').classes()).toContain('bg-zinc-100')
  })
})

describe('landingReferences', () => {
  it('renders section header props', async () => {
    const component = await mountSuspended(LandingReferences, {
      props: {
        headline: 'References Headline',
        title: 'References Title',
        description: 'References Description',
      },
    })
    expect(component.text()).toContain('References Headline')
    expect(component.text()).toContain('References Title')
    expect(component.text()).toContain('References Description')
  })

  it('renders slot content', async () => {
    const component = await mountSuspended(LandingReferences, {
      props: {
        title: 'References Title',
      },
      slots: {
        default: () => h('span', 'Reference content'),
      },
    })
    expect(component.text()).toContain('Reference content')
  })
})
