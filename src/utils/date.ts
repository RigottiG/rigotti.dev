type DateFormat = 'short' | 'long'

export function formatDate(
  dateValue: Date | string | number,
  format: DateFormat = 'long'
) {
  const d = new Date(dateValue)
  if (isNaN(d.getTime())) return ''

  const formats: Record = {
    short: { month: 'short', day: 'numeric' },
    long: { month: 'long', day: 'numeric', year: 'numeric' },
  }

  return new Intl.DateTimeFormat('en-US', formats[format]).format(d)
}

export function getSlug(id: string): string {
  return id.replace(/\.md$/, '')
}

export function calculateReadingTime(
  text: string,
  wordsPerMinute = 200
): number {
  const wordCount = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}
