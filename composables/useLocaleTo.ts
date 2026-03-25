export function useLocaleTo(path?: MaybeRef<string | undefined>) {
  const localePath = useLocalePath()

  return computed(() => {
    const value = toValue(path)
    if (!value)
      return undefined
    if (value.startsWith('http'))
      return value
    return localePath(value)
  })
}
