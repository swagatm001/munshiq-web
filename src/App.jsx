import Mark from './components/Mark.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'

export default function App() {
  return (
    <>
      <ThemeToggle />
      <main className="wrap">
        <div className="mark"><Mark /></div>
        <div className="name">Munshi</div>

        <div className="thread-rule" role="presentation"><span className="knot" /></div>

        <h1>Coming soon.</h1>
      </main>

      <footer className="foot">
        © 2026 Munshi · <a href="mailto:hello@munshihq.com">hello@munshihq.com</a> · Made in India
      </footer>
    </>
  )
}
