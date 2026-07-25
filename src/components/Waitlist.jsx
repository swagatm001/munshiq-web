import { useState } from 'react'

// Set VITE_WAITLIST_ENDPOINT (e.g. a Formspree form URL) to collect signups.
// Without it, the form falls back to opening a pre-filled email.
const ENDPOINT = import.meta.env.VITE_WAITLIST_ENDPOINT

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle') // idle | sending | done | error

  async function submit(e) {
    e.preventDefault()
    if (!ENDPOINT) {
      location.href = `mailto:hello@munshihq.com?subject=${encodeURIComponent('Early list')}&body=${encodeURIComponent(`Please add me to the Munshi early list: ${email}`)}`
      return
    }
    setState('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setState('done')
    } catch (err) {
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <div className="cta">
        <span className="done">✓ You're on the list — we'll write when the first firms go in.</span>
      </div>
    )
  }

  return (
    <div className="cta">
      <form onSubmit={submit}>
        <input
          type="email"
          name="email"
          placeholder="you@yourfirm.in"
          aria-label="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? 'Joining…' : 'Join the early list'}
        </button>
      </form>
      {state === 'error' && (
        <span className="err">
          That didn't go through — please retry, or write to hello@munshihq.com.
        </span>
      )}
    </div>
  )
}
