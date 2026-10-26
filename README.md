# Salinaw — 1st Issue: *Unfinished Business*

A slow-reading e-magazine about the ideas Rizal argued for: education that frees people instead of sorting them, power that has to answer to the people it governs, indifference as something learned (so it can be unlearned), honest memory, and love for a country you may have had to leave. The magazine is about the ideas, not the man. His life only shows up as subtext, set quietly beside scenes from the Philippines today, and every essay ends with small civic actions a reader can actually take.

## What's inside

- **Cover** (`/`): the issue cover, a cold open, the table of contents, a teaser for the field guide, and an editor's note that shows his portrait exactly once.
- **Five essays** (`/essays/:slug`): *The Window* (corruption), *The Cabinet* (education), *The Feed* (civic indifference), *The Footnotes* (history and memory), and *The Distance* (migration). Each one pairs a "Now" scene with a "Once" scene and gives the reader a private margin to answer a reflection question, plus a short "Try this" list. Sources sit in a collapsible note so they stay out of the way.
- **Field guide** (`/field-guide`): thirteen small acts of civic nationalism, grouped by how much time they take. Readers mark what they'll do and what they've done, and this is saved only on their own device.
- **Credits** (`/credits`): full photo references, the sources behind each essay, and a design note on RA 8491.

## Images

- **Archival photographs** are real public-domain photos from Wikimedia Commons, showing Rizal and people close to him (his mother, Leonor Rivera, Ferdinand Blumentritt, and the Madrid circle). Each one has its citation printed inside the bottom-right corner of the image and links back to its Commons page.
- **Illustrations** of present-day scenes were made for this issue and are labelled that way. Nothing else was borrowed.
- Every image is served through the Netlify Image CDN (`/.netlify/images`).

## Tech

TanStack Start (React 19, TanStack Router), Tailwind CSS 4, and shadcn/ui primitives, deployed on Netlify. All content lives in typed TypeScript modules under `src/content/`. There's no backend. Reader margins and field-guide progress use `localStorage`.

## Running locally

```bash
pnpm install
pnpm dev            # Vite on http://localhost:3000
# or, with Netlify emulation:
netlify dev
```
