# Portfolio (Static, No Backend)

This is a static React + Vite portfolio. It has **no backend, no database, and no admin login** —
all your content lives in one plain file:

    src/data/portfolioData.js

## How to edit your content

1. Open `src/data/portfolioData.js`
2. Update the `profile`, `skills`, `projects`, and `experiences` objects with your details
   (search for `TODO` comments — those are the fields still needing your real info:
   GitHub repo links, LinkedIn, email, resume link, dates).
3. Save the file.

That's it. No server to restart, no database to seed, no CORS/auth issues.

## Run locally

    npm install
    npm run dev

## Build for production

    npm run build

This outputs a `dist/` folder — plain HTML/CSS/JS, ready to deploy anywhere as a static site.

## Deploy (recommended: Vercel)

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → Import your repo.
3. Framework preset: Vite. Build command: `npm run build`. Output dir: `dist`.
4. Deploy — you get a free `yourname.vercel.app` URL (or connect a custom domain).

Any time you edit `portfolioData.js` and push to GitHub, Vercel redeploys automatically.

Alternatives: Netlify (same workflow) or GitHub Pages (needs `base` set in `vite.config.js`).
