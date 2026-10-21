# Handoff: Ace Link Fence Ltd.

## Overview
A rebuild of acelinkfenceltd.ca for a family-owned Surrey fencing company: chain link, steel, cladding, ornamental, gates, sport courts, welded handrails and security. Residential, commercial and emergency repair. The direction is **industrial: steel blue-grey, safety yellow, Oswald**.

## About the design files
The files here are **design references built in HTML**: working prototypes that show the intended look, copy and behaviour. They are not production code to copy directly. Rebuild the site in a real stack. If there's no existing codebase, use **Astro or Next.js (static export) + Tailwind**, deployed on Vercel.

- `Ace Link Fence.dc.html`: source prototype. Open `preview.html` to click through it; it's self-contained. All pages live in one file and switch with JS state. **Build them as real routes.**
- `motion.js`: reference for the scroll-reveal and image-zoom behaviour.
- `support.js`: prototype runtime only. **Do not ship.**

## Fidelity
**High fidelity.** Colours, type, spacing, copy and imagery are final. Match them closely. All exact values are inline in the prototype markup.

## Global requirements
- Mobile-first and responsive. Content max-width is 1440px, with side padding of clamp(20px,4vw,56px).
- Below 1140px, nav collapses to a Menu button with a full-width overlay, and a **sticky bottom bar** appears with two equal buttons (Call / Quote).
- The phone number is in the header on every page and is always a `tel:` link.
- Images use `object-fit: cover` in aspect-ratio boxes and are lazy-loaded. The prototype hot-links images from the client's current site; **download them into `/public/images`**.
- The quote form needs a real handler (Formspree, Resend, or a Vercel function emailing the client). Show the inline thank-you state on success.
- Add per-page title and meta description, Open Graph tags, and LocalBusiness JSON-LD (name, phone, address, area served).

## Motion
- Reveal on scroll: elements go from opacity 0 / translateY(28px) to visible over .9–1s, easing cubic-bezier(.2,.7,.2,1), with a 90ms sibling stagger (max 5).
- A full-bleed hero image eases from scale(1.08) to 1 over 2.8s on load.
- Hover on an image inside an overflow-hidden card scales it to 1.045 over 1.1s.
- Respect `prefers-reduced-motion`.

## Pages / routes
- `/` **Home**:
  - Yellow emergency top bar.
  - Full-height photo hero with the H1 “Fences that hold the line.”
  - Awards strip: TrustedPros Best of 2019, Top 3 Surrey 2023, Res + Com, Emergency.
  - 8 service tiles with mono tags.
  - Yellow emergency section with a big call block.
  - Family-owned section, a 4-step process, service area, CTA and footer.
- `/projects`: 21-image grid.
- `/contact`: form (name, phone, email, property type, need, city, details) plus a panel.

## Design tokens
- Base #1A2229, raised #23303A, line #2F3B45, footer #11171C.
- Yellow #F2C230 (hover #FFD54D), text #EEF1F3, secondary #C7D0D6.
- Fonts: **Oswald** 700, uppercase, for headlines; **IBM Plex Sans** for body; **IBM Plex Mono** for tags and eyebrows.

## Contact
604-825-8777 · sales@acelinkfenceltd.ca

## Notes
**Verify the phone, email and award claims against the client’s current site before launch.**

## Files
- README.md
- Ace Link Fence.dc.html (prototype source)
- preview.html (self-contained clickable preview)
- motion.js (animation reference)
- support.js (prototype runtime only)
