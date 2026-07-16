export function useNewsFormatting() {
  const { locale } = useI18n()

  function typeColor(type: string | undefined): 'primary' | 'success' | 'info' {
    const map: Record<string, 'primary' | 'success' | 'info'> = {
      release: 'primary',
      post: 'info',
      announcement: 'success',
    }
    return map[type ?? 'announcement'] ?? 'primary'
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString(locale.value, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return { typeColor, formatDate }
}
