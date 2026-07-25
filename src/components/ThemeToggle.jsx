export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement
    const dark = root.dataset.theme
      ? root.dataset.theme === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches
    const next = dark ? 'light' : 'dark'
    root.dataset.theme = next
    try { localStorage.setItem('munshi-theme', next) } catch (e) {}
  }
  return (
    <button className="theme-btn" type="button" onClick={toggle} aria-label="Toggle theme">◐</button>
  )
}
