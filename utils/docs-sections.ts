export interface NavigationNode {
  path: string
  children?: NavigationNode[]
}

export function extractDocsSections(navigation: NavigationNode[]): string[] {
  // Navigation tree has a locale root node (e.g. /fr) with sections as children
  const sections = navigation.flatMap(node => node.children ?? [])
  return sections
    .filter(node => node.children?.length)
    .map(node => node.path.split('/').pop()!)
}

export function findNavigationNode<T extends NavigationNode>(items: T[], slug: string): T | undefined {
  for (const item of items) {
    if (item.path.split('/').pop() === slug)
      return item
    if (item.children) {
      const found = findNavigationNode(item.children as T[], slug)
      if (found)
        return found
    }
  }
}
