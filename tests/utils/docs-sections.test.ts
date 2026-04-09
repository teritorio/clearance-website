import { describe, expect, it } from 'vitest'
import { extractDocsSections } from '~/utils/docs-sections'

describe('extractDocsSections', () => {
  it('returns slugs of nodes that have children', () => {
    const navigation = [
      { path: '/fr/how-it-works', children: [{ path: '/fr/how-it-works/replication' }] },
      { path: '/fr/contact' },
    ]
    expect(extractDocsSections(navigation)).toEqual(['how-it-works'])
  })

  it('returns multiple sections when several have children', () => {
    const navigation = [
      { path: '/fr/how-it-works', children: [{ path: '/fr/how-it-works/replication' }] },
      { path: '/fr/guides', children: [{ path: '/fr/guides/setup' }] },
      { path: '/fr/contact' },
    ]
    expect(extractDocsSections(navigation)).toEqual(['how-it-works', 'guides'])
  })

  it('returns an empty array when no nodes have children', () => {
    const navigation = [
      { path: '/fr/contact' },
      { path: '/fr/about' },
    ]
    expect(extractDocsSections(navigation)).toEqual([])
  })

  it('returns an empty array for empty navigation', () => {
    expect(extractDocsSections([])).toEqual([])
  })

  it('ignores nodes with empty children arrays', () => {
    const navigation = [
      { path: '/fr/how-it-works', children: [] },
      { path: '/fr/contact' },
    ]
    expect(extractDocsSections(navigation)).toEqual([])
  })
})
