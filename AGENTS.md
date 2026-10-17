# AGENTS.md

## Project

**Salinaw**, a slow-reading e-magazine (Issue 01: *Unfinished Business*) about the ideals Rizal held and why they still apply to the Philippines today. It's built with TanStack Start, React 19, and Tailwind 4, deployed on Netlify. There's no backend. Reader state (margins, field-guide checklist) is stored in `localStorage` and read only inside `useEffect`.

## Editorial rules (do not break these)

These came from the product owner and define the product:

1. **The ideas, not the icon.** Rizal is not the focus. Name him rarely: the cover's cold open names him once, so readers know whose questions these are and why his name shows up in the photo credits, and the editor's note shows his photo once. Nowhere else. Don't add hero-worship copy, "national hero" framing, or biography timelines.
2. **Background as subtext.** Every essay opens on a present-day scene. The 19th-century parallel sits beside it as a "Once" scene, without dates or exposition. Factual grounding goes in each essay's `sources` array (shown in a collapsible note and on `/credits`), never in the body.
3. **Breathing room.** Short paragraphs, `pause` blocks with lots of whitespace, and a conversational but formal voice. Cut text before you add it.
4. **No clichés.** No old-paper textures, no sepia or black-and-white design, no colonial symbolism.
5. **RA 8491.** No flag, sun, or star motifs, and no flag-derived palettes. The palette is soft light blue (`mist`), slate-teal ink, apricot, and lilac (see `src/styles.css`).
6. **Images.** Borrow only *real photographs* of Rizal or people related to him, and **always** print the citation inside the image corner (`ArchivalPhoto` does this; thumbnails use `shortCredit`). Any other imagery must be original (the illustrations in `public/img/*.png` were made for this issue and are labelled that way).
7. **Advocacy for action.** Every essay ends with `practice` items. Actions must be small, legal, and doable without heroics, and must be facts you have checked (agency names, laws).

## Layout

```
src/
  content/
    essays.ts      # The five essays as typed blocks: p | pause | mirror(now/once) | photo | question
    actions.ts     # Field guide actions grouped by time commitment; `echoes` links to an essay slug
    photos.ts      # Archival photo registry (credits, references, Commons URLs), illustrations, cdn() helper
  components/magazine/
    archival-photo.tsx  # Borrowed photo with in-image corner citation
    illustration.tsx    # Original illustration with "made for this issue" label
    essay-blocks.tsx    # Renders essay blocks
    reflection.tsx      # Private "margin" textarea (localStorage)
    reading-progress.tsx, reveal.tsx, masthead.tsx, colophon.tsx, tone.ts
  routes/
    __root.tsx           # Shell, fonts (Fraunces / Newsreader / Inter Tight), masthead + colophon
    index.tsx            # Cover, cold open, contents, field-guide teaser, editor's note
    essays.$slug.tsx     # Essay reader
    field-guide.tsx      # Interactive checklist
    credits.tsx          # Photo references and essay sources
public/img/archive/      # Downloaded public-domain photos (Wikimedia Commons)
public/img/*.png         # Original illustrations
```

## Conventions

- Add an essay by appending to `essays` in `src/content/essays.ts`. Give it a `tone` (`mist` | `lilac` | `apricot`), and optionally an `art` key, or a `coverPhoto` for the contents thumbnail.
- Add a photo to `photos.ts` only if it meets rule 6, and fill in every credit field.
- Always serve images through `cdn(src, width)` (Netlify Image CDN).
- Use theme tokens (`bg-mist`, `text-teal`, `bg-ink`, `font-display`, `font-ui`, `max-w-reading`) instead of raw colors.
- Any motion must respect `prefers-reduced-motion`. `Reveal` is only for pauses and mirrors, never for body paragraphs, so the text is visible before hydration.
