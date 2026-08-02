# Happy Friendship Day, Bubu 🌷

A cinematic, interactive Friendship Day website — React + TypeScript + Vite,
with Tailwind CSS, Framer Motion, GSAP, Lenis smooth scroll, and a subtle
Three.js sparkle layer.

## 1. Install dependencies

You'll need [Node.js](https://nodejs.org) (v18 or newer) installed. Then, in
this folder, run:

```bash
npm install
```

## 2. Run it locally

```bash
npm run dev
```

This starts a local dev server (usually `http://localhost:5173`) — open that
in your browser to see the site live, with hot-reload as you edit files.

## 3. Put it on GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username
and the repo you created.

## 4. Update the base path

Open `vite.config.ts` and make sure the `base` value matches your repo name
exactly:

```ts
base: '/YOUR-REPO-NAME/',
```

This is required for GitHub Pages — without it, images/scripts won't load
correctly once deployed.

## 5. Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the site and pushes it to a `gh-pages` branch automatically
(via the `gh-pages` package already included in `package.json`).

Then in your GitHub repo:

- Go to **Settings → Pages**
- Under "Branch," select `gh-pages` and `/ (root)`
- Save

Your site will be live at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

(It can take a minute or two to go live after the first deploy.)

## Project structure

```
src/
  components/     — every section of the site (Hero, Envelope, Garden, etc.)
  data/quotes.ts   — all the rotating quotes/messages, easy to add more to
  lib/useLenis.ts  — smooth-scroll setup
  App.tsx          — wires all sections together in order
  main.tsx         — React entry point
  index.css        — global styles + Tailwind
```

## Customizing content

- **Photos**: swap the emoji placeholders in `src/components/MemoryWall.tsx`
  for real `<img>` tags pointing at photos you add to a `public/` folder.
- **Quotes/messages**: add more lines to the arrays in `src/data/quotes.ts` —
  everything downstream picks them up automatically.
- **Colors**: adjust the palette in `tailwind.config.js` under `theme.colors`.
