# munshiq-web — Munshi coming-soon site (React)

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

## Go live at munshihq.com

A React app can't be hosted *on* Squarespace (it only embeds HTML/CSS code
blocks). The standard path — Squarespace can still be the **registrar**:

1. **Register the domain.** `munshihq.com` (verified available 20 Jul 2026).
   Squarespace Domains, Namecheap, GoDaddy — any registrar works.
2. **Host the app** (all free-tier, pick one):
   - **Vercel** — `npm i -g vercel && vercel --prod` from this folder, or
     import the repo at vercel.com. Framework auto-detected (Vite).
   - **Netlify** — `netlify deploy --prod` (config in `netlify.toml`), or
     drag-and-drop the `dist/` folder at app.netlify.com/drop.
   - **Cloudflare Pages** — connect repo, build command `npm run build`,
     output `dist`.
3. **Point the domain.** In the host's dashboard add `munshihq.com` — it
   shows you the exact DNS records (an A/ALIAS for the apex plus a CNAME for
   `www`). Add them at the registrar. SSL is automatic. Propagation up to
   24–48 h, usually minutes.
4. **Set the waitlist env var** (above) and redeploy.
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
