export function useNewsFormatting() {
  const { locale } = useI18n()

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString(locale.value, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return { formatDate }
}
