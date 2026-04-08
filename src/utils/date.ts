type DateFormat = 'long' | 'short'

export function calculateReadingTime(
  text: string,
  wordsPerMinute = 200
): number {
  const wordCount = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}

export function formatDate(
  dateValue: Date | number | string,
  format: DateFormat = 'long'
) {
  const d = new Date(dateValue)
  if (Number.isNaN(d.getTime())) return ''

  const formats: Record<DateFormat, Intl.DateTimeFormatOptions> = {
    long: { day: 'numeric', month: 'long', year: 'numeric' },
    short: { day: 'numeric', month: 'short' },
  }

  return new Intl.DateTimeFormat('en-US', formats[format]).format(d)
}

export function getSlug(id: string): string {
  return id.replace(/\.md$/, '')
}
