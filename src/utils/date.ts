type DateFormat = 'short' | 'long' | 'full'

export function formatDate(
  dateValue: Date | string | number,
  format: DateFormat = 'long'
) {
  const d = new Date(dateValue)
  if (isNaN(d.getTime())) return ''

  const formats: Record<DateFormat, Intl.DateTimeFormatOptions> = {
    short: { month: 'short', day: 'numeric' },
    long: { month: 'long', day: 'numeric', year: 'numeric' },
    full: { year: 'numeric', month: 'long', day: 'numeric' },
  }

  return new Intl.DateTimeFormat('en-US', formats[format]).format(d)
}
