# Ace Link Fence Ltd. — website

The website for Ace Link Fence Ltd., a family-owned fencing company in Surrey, BC
(chain link, steel, cladding, ornamental, gates, sport courts, welded handrails and security fencing).

It's built with [Astro](https://astro.build) and turns into plain, fast HTML pages.

## Pages

| Address     | File                        |
| ----------- | --------------------------- |
| `/`         | `src/pages/index.astro`     |
| `/projects` | `src/pages/projects.astro`  |
| `/contact`  | `src/pages/contact.astro`   |

The header, menu, footer and mobile Call/Quote bar shared by every page are in `src/layouts/Base.astro`.

## Run it on your computer

You need [Node.js](https://nodejs.org) 22 or newer.

```bash
npm install      # first time only
npm run dev      # open http://localhost:4321
```

Edits show up in the browser as soon as you save.

## Build

```bash
npm run build    # creates the finished site in dist/
npm run preview  # look at the built site locally
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com), click **Add New → Project** and import the repo.
3. Framework preset: **Astro**. No other settings needed. Click **Deploy**.

Every push to `main` will redeploy automatically.

## Where to change things

Almost everything you'll want to change is in **`src/data/site.js`**:

- business name, phone number, email, social links
- the list of cities served
- the contact form endpoint (`formEndpoint`)
- every image URL (hero, services, projects gallery)

Page wording lives in the page files listed above. Scroll/hover animation is in `public/motion.js`.

## Images

Right now images load directly from the old website (`acelinkfenceltd.ca/wp-content/uploads/...`).
To host them yourself (recommended, so the site keeps working if the old one goes away):

1. Download each image listed in `src/data/site.js` into `public/images/`.
2. Change its URL in `site.js`, e.g. `U + '2019/08/15.jpg'` → `'/images/15.jpg'`.

Anything in `public/images/` is served at `/images/...`.

## TODO before launch

- [ ] **Contact form:** create a free form at [formspree.io](https://formspree.io) and put its ID in
      `formEndpoint` in `src/data/site.js` (replace `YOUR_FORM_ID`). Until then the form will show an error.
- [ ] **Images:** download them into `public/images/` (see above).
- [ ] **Check the facts** against the client's current site: phone 604-825-8777, email
      sales@acelinkfenceltd.ca, the awards ("TrustedPros Best of 2019", "Top 3 fencing contractors in Surrey 2023"),
      "certified experience", "welding in-house", and the list of service cities.

## Reference

`docs/` holds the original design handoff notes and prototype for reference. They are not part of the site.
