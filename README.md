# Portfolio

A recreation of the layout and interaction design of
[davidlawrence.onrender.com](https://davidlawrence.onrender.com/), rebuilt from
scratch on the same stack (React + Tailwind + framer-motion) with all of the
personal content pulled out into a single config file.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

## Make it yours

Everything personal lives in **`src/data/content.js`** — name, roles, bio, stats,
services, projects, skills, socials, contact form endpoint, footer. Edit that one
file and the whole site updates. Nothing else needs touching.

Every content block is filled in with real values. What still needs your input:

- `contact.action` is still `https://getform.io/f/YOUR-FORM-ID`. While that
  placeholder is in place, `Contact.jsx` intercepts the submit and opens the
  visitor's mail client pre-filled with their message instead of POSTing to a
  dead URL. Swap in a real endpoint and the normal POST takes over, no code
  change needed.
Nothing else is a placeholder. The resume served at `/resume.pdf` is generated,
not hand-dropped: edit `resume/resume.html` and run `resume/build.sh`, which
prints it through headless Chrome to `public/resume.pdf`. It is written to fit
one A4 page, so check the page count after adding to it.

Then swap the placeholder art:

| What | Where | Notes |
| --- | --- | --- |
| Hero image | `src/assets/greyat-labs-logo.jpg` | The GreYat Labs mark, shown in both themes (larger in light, smaller in dark) |
| About image | `src/assets/about.jpg` | Tall portrait art, `bg-center` so the figure stays in frame; capped at 320px on phones |
| Services background | `src/assets/service.jpg` | Compass-and-arrow art, shown full colour on desktop only; the heading sits on a dark gradient scrim so it stays readable over it |
| Project thumbnails | `public/projects/` | One per project, named after it; referenced by path from `content.js`. Projects with a live URL use a real screenshot of the site (`.jpg`); code-only projects use a generated editor card (`.svg`) carrying a genuine excerpt from that repo's source. Re-shoot a screenshot when a site changes |
| Skill logos | `public/skills/` | Lettermarks in each tech's brand colour; swap for real brand SVGs (simple-icons / devicon) when you want |
| Favicon | `public/favicon.svg` | |

You can use `.jpg`/`.png` instead of `.svg` — just update the filename in
`content.js`. The two background images are wired through `tailwind.config.js`
(`about_new`, `service_new`), so change the extension there if you swap those.

The contact form posts to whatever `contact.action` points at. Set it to your own
[Getform](https://getform.io) / [Formspree](https://formspree.io) endpoint, or
your own API route.

## Structure

```
src/
  App.jsx              section order + the dark-mode class toggle
  variants.js          the shared framer-motion entrance animation
  data/content.js      <- all copy, links and images
  components/
    Header.jsx         signature logo, light/dark toggle, Hire Me
    Banner.jsx         hero: name, rotating job title, bio, CTA, portrait
    Socials.jsx        fixed left rail that slides out on hover (desktop only)
    Nav.jsx            floating bottom dock, scroll-spy active state
    About.jsx          bio + animated stat counters
    Services.jsx       "What I Do" capability cards
    Portfolio.jsx      project grid with per-card coloured glow
    Experience.jsx     skill tiles
    Contact.jsx        dark contact panel + form
    Footer.jsx
    ScrollToTop.jsx
```

## Design notes

- Accent colour is Tailwind's `teal-500` (`#14b8a6`), exposed as `primary`.
  Page background is `#eceeed`.
- Fonts: Raleway for body, Great Vibes for the signature logo.
- **Dark is the default.** Dark mode is class-based (`darkMode: 'class'`): the
  header moon/sun toggles it, and `App.jsx` puts the `dark` class on `<html>` so
  the page background follows the theme too. `index.html` ships with
  `class="dark"` already set, so the first paint is dark with no flash.
  To default to light instead, flip `useState(true)` in `App.jsx` and drop the
  class from `index.html`.
- Sections animate in on scroll with `fadeIn(direction, delay)` from
  `variants.js`, replaying each time they re-enter the viewport.
- Section ids (`home`, `about`, `service`, `portfolio`, `experience`, `contact`)
  are what `react-scroll` uses for smooth scrolling and the dock's active state.

## Deploying

`npm run build` produces a static `dist/`. It deploys as-is to Render, Vercel,
Netlify, or GitHub Pages.

**Render** is what this repo is set up for. `render.yaml` is a blueprint: in the
Render dashboard choose **New > Blueprint**, pick this repo, and it creates a
static site with the right build command (`npm ci && npm run build`), publish
path (`dist`), SPA rewrite and asset caching. Every push to `main` redeploys.
