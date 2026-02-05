export function initTheme() {
  // Only run in browser
  if (typeof window === 'undefined') return

  const getTheme = () => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
  }

  const setTheme = (theme: 'light' | 'dark') => {
    const html = document.documentElement
    const iconLight = document.getElementById('theme-icon-light')
    const iconDark = document.getElementById('theme-icon-dark')

    html.classList.remove('light', 'dark')
    html.classList.add(theme)

    if (theme === 'dark') {
      iconLight?.classList.remove('hidden')
      iconDark?.classList.add('hidden')
    } else {
      iconLight?.classList.add('hidden')
      iconDark?.classList.remove('hidden')
    }

    localStorage.setItem('theme', theme)
  }

  // Initialize theme immediately
  setTheme(getTheme())

  // Toggle theme on button click
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const currentTheme = getTheme()
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  })
}

// Run on page load
initTheme()
