# munshiq-web — Munshi coming-soon site (React)

**Live:** https://swagatm001.github.io/munshiq-web/ (GitHub Pages, `gh-pages`
branch). Redeploy after changes with `npm run deploy`. Repo:
https://github.com/swagatm001/munshiq-web

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

## Moving to munshihq.com

The site is live on GitHub Pages today. To put it on the real domain:

1. **Register the domain.** `munshihq.com` (verified available 20 Jul 2026).
   Squarespace Domains, Namecheap, GoDaddy — any registrar works. (A React
   app can't be hosted *on* Squarespace; it can still be the registrar.)
2. **Option A — stay on GitHub Pages (free):** repo Settings → Pages →
   Custom domain → `munshihq.com`; add the four GitHub Pages A records +
   `www` CNAME at the registrar; tick "Enforce HTTPS".
   **Option B — Vercel/Netlify/Cloudflare Pages:** import the repo (build
   `npm run build`, output `dist`), add the domain in their dashboard, copy
   the DNS records it shows to the registrar.
3. **After the domain connects:** swap the two `og:` URLs in `index.html`
   back to `https://munshihq.com/` and redeploy (`npm run deploy`).
4. **Set the waitlist env var** (above) and redeploy. On plain GitHub Pages
   there's no env-var UI — either hardcode the Formspree URL when building
   (`VITE_WAITLIST_ENDPOINT=... npm run deploy`) or move to Option B.
5. **Create `hello@munshihq.com`** — both mailto links point at it. Google
   Workspace, Zoho Mail (free tier), or an alias on an existing Workspace.

Pre-flight (from `../landing/GO-LIVE.md`, still applies): run a trademark
search for "Munshi" in Classes 9 & 42 before going public, and settle the
public label — the page says **Munshi**; the folder/app name `munshiq-web`
is just the package name.

## Brand

Tokens from [`../ui-mock/brand/brand.css`](../ui-mock/brand/brand.css)
(paper/ink/thread). Rules: brand red only for the thread rule, primary
button and logo knot; both themes always ship; system font stack.
