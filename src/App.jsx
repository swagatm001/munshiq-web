import Mark from './components/Mark.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import Waitlist from './components/Waitlist.jsx'

const POINTS = [
  {
    title: 'See your business in minutes',
    body: 'Upload your Tally Day Book — get client-wise profitability, cash flow and spend. No migration, no re-entry.',
  },
  {
    title: 'Never miss a deadline',
    body: 'GST, TDS, PF, PT and ROC on one calendar — with deposits verified from your own books.',
  },
  {
    title: 'People, paid properly',
    body: 'Payroll with statutory deductions, employee self-service, reimbursements and contractor TDS in one place.',
  },
  {
    title: 'Your CA, superpowered',
    body: 'Your CA gets a workspace, ready-to-review filings and the full audit trail. Assisted, never replaced.',
  },
]

export default function App() {
  return (
    <>
      <ThemeToggle />
      <main className="wrap">
        <div className="mark"><Mark /></div>
        <div className="name">Munshi</div>
        <div className="tag">Your firm, in order.</div>

        <div className="thread-rule" role="presentation"><span className="knot" /></div>

        <h1>Running a boutique firm shouldn't take five tools and a hundred WhatsApp messages.</h1>
        <p className="sub">
          Munshi turns one upload of your books into the answers you actually need —
          which client makes you money, what's due this month, who hasn't paid, and
          payroll that files itself right. Built for India's small services firms and
          the CAs who look after them.
        </p>

        <div className="points">
          {POINTS.map((p) => (
            <div className="pt" key={p.title}>
              <b>{p.title}</b>
              <span>{p.body}</span>
            </div>
          ))}
        </div>

        <Waitlist />
        <p className="cta-note">
          Early firms get white-glove setup — we load your books and run payroll in
          parallel until it matches, twice.
        </p>

        <p className="ca">
          Are you a <b>Chartered Accountant</b>? We're inviting a small group of
          practices to shape the CA workspace — one dashboard across all your clients,
          filings prepared for your review.{' '}
          <a href="mailto:hello@munshihq.com?subject=CA%20partner%20programme">Write to us →</a>
        </p>
      </main>

      <footer className="foot">
        © 2026 Munshi · <a href="mailto:hello@munshihq.com">hello@munshihq.com</a> · Made in India
      </footer>
    </>
  )
}
