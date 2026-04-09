import { describe, expect, it } from 'vitest'
import { extractDocsSections, findNavigationNode } from '~/utils/docs-sections'

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

describe('findNavigationNode', () => {
  const navigation = [
    {
      path: '/fr',
      children: [
        { path: '/fr/how-it-works', children: [{ path: '/fr/how-it-works/replication' }] },
        { path: '/fr/contact' },
      ],
    },
  ]

  it('finds a node nested in the tree by slug', () => {
    const node = findNavigationNode(navigation, 'how-it-works')
    expect(node).toBeDefined()
    expect(node!.path).toBe('/fr/how-it-works')
  })

  it('finds a deeply nested node', () => {
    const node = findNavigationNode(navigation, 'replication')
    expect(node).toBeDefined()
    expect(node!.path).toBe('/fr/how-it-works/replication')
  })

  it('returns undefined when slug does not match', () => {
    expect(findNavigationNode(navigation, 'unknown')).toBeUndefined()
  })

  it('returns undefined for empty navigation', () => {
    expect(findNavigationNode([], 'how-it-works')).toBeUndefined()
  })
})
