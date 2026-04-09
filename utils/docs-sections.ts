interface NavigationNode {
  path: string
  children?: NavigationNode[]
}

export function extractDocsSections(navigation: NavigationNode[]): string[] {
  return navigation
    .filter(node => node.children?.length)
    .map(node => node.path.split('/').pop()!)
}
