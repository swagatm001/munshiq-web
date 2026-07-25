# munshiq-web — Munshi coming-soon site (React)

**Live:** https://munshihq.com (GitHub Pages, `gh-pages` branch, custom
domain set — see DNS below). Redeploy after changes with `npm run deploy`.
Repo: https://github.com/swagatm001/munshiq-web

The public coming-soon page as a real React app (Vite). Same design as
[`../landing/coming-soon.html`](../landing/coming-soon.html), componentized,
plus what static HTML couldn't do: a theme toggle with persistence and a
working waitlist form.

```
munshiq-web/
├── index.html              # meta, OG tags, favicon, pre-paint theme script
├── public/
│   ├── logo.svg            # Bound Ledger v2 mark (favicon + shareable)
│   └── og.png              # 1200×630 social share card
├── src/
│   ├── main.jsx
│   ├── App.jsx             # page content (headline, USP points, CA section)
│   ├── styles.css          # brand tokens, light+dark (OS pref + toggle override)
│   └── components/
│       ├── Mark.jsx        # logo SVG component
│       ├── ThemeToggle.jsx # ◐ toggle, persisted in localStorage
│       └── Waitlist.jsx    # email capture form
├── netlify.toml
└── package.json
```

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production bundle in dist/
npm run preview    # serve dist/ locally
```

## Waitlist form

`src/components/Waitlist.jsx` posts JSON `{email}` to the URL in the
`VITE_WAITLIST_ENDPOINT` env var. **Without it, the button falls back to a
pre-filled mailto** — fine for a soft launch, but set a real endpoint before
sharing widely:

1. Easiest: create a free [Formspree](https://formspree.io) form → copy its
   endpoint (`https://formspree.io/f/xxxx`).
2. Set it at the host (Vercel/Netlify → environment variables):
   `VITE_WAITLIST_ENDPOINT=https://formspree.io/f/xxxx`
3. Redeploy (env vars are baked in at build time).

Alternatives: Netlify Forms, a Google Form endpoint, or your own API later.

## DNS — connecting munshihq.com

The GitHub Pages side is done (`public/CNAME` + repo Pages settings both say
`munshihq.com`). The one remaining step is in **Squarespace**, where the
domain is registered (Squarespace Domains, Squarespace nameservers):

Squarespace → **Domains** → `munshihq.com` → **DNS settings** (or "Advanced
DNS") → delete the default Squarespace website records for `@` and `www`,
then add:

| Type | Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `swagatm001.github.io` |

(The defaults being replaced point at Squarespace's own hosting —
`198.185.159.x` / `198.49.23.x` — which currently serves a parking page.)

After propagation (minutes to a few hours):

1. Repo → Settings → Pages shows the DNS check passing; tick **Enforce
   HTTPS** once the certificate is issued (automatic, a few minutes more).
2. **Waitlist endpoint:** create a free Formspree form, then bake it in:
   `VITE_WAITLIST_ENDPOINT=https://formspree.io/f/xxxx npm run deploy`.
3. **Create `hello@munshihq.com`** — all mailto links point at it.
   Squarespace sells Google Workspace for the domain, or use Zoho Mail's
   free tier; MX records go in the same DNS panel.

Until DNS flips, https://swagatm001.github.io/munshiq-web/ 301-redirects to
munshihq.com (which still serves the Squarespace parking page) — expected
in-between state, not an outage.

Note: `munshiq.com` (no "h") is a different domain owned by a third party
(Network Solutions, Apr 2026) — not usable for this site.

Pre-flight (from `../landing/GO-LIVE.md`, still applies): run a trademark
search for "Munshi" in Classes 9 & 42 before going public, and settle the
public label — the page says **Munshi**; the folder/app name `munshiq-web`
is just the package name.

## Brand

Tokens from [`../ui-mock/brand/brand.css`](../ui-mock/brand/brand.css)
(paper/ink/thread). Rules: brand red only for the thread rule, primary
button and logo knot; both themes always ship; system font stack.
