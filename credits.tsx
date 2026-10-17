import { createFileRoute, Link } from '@tanstack/react-router'
import { ExternalLink } from 'lucide-react'

import { essays } from '@/content/essays'
import { cdn, photos } from '@/content/photos'

export const Route = createFileRoute('/credits')({
  head: () => ({
    meta: [
      { title: 'Credits & sources — Salinaw' },
      {
        name: 'description',
        content:
          'Photo references and the sources behind each essay in Salinaw, Issue 01.',
      },
    ],
  }),
  component: Credits,
})

function Credits() {
  return (
    <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-24">
      <header className="max-w-2xl">
        <p className="font-ui text-xs tracking-[0.3em] text-muted-foreground uppercase">
          Credits &amp; sources
        </p>
        <h1 className="mt-6 font-display text-5xl font-light tracking-tight sm:text-6xl">
          Where everything came from
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
          The essays keep their history in the background on purpose. This
          page brings it forward, for anyone who wants to check our work —
          which, given the fourth essay, we’d encourage.
        </p>
      </header>

      <section aria-labelledby="photos" className="mt-20">
        <h2 id="photos" className="font-display text-3xl font-normal">
          Archival photographs
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Only real photographs of the writer or people close to him were
          borrowed. Each is in the public domain, hosted by Wikimedia Commons,
          and credited inside the image wherever it appears.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.values(photos).map((p) => (
            <li
              key={p.src}
              className="flex gap-5 rounded-[1.25rem] border border-border bg-card p-5"
            >
              <div className="relative w-24 shrink-0 self-start overflow-hidden rounded-lg">
                <img
                  src={cdn(p.src, 200)}
                  alt={p.alt}
                  loading="lazy"
                  className="block h-auto w-full"
                />
                <span className="absolute inset-x-0 bottom-0 bg-ink/75 px-1 py-0.5 text-center font-ui text-[0.5rem] leading-tight text-paper">
                  Wikimedia Commons, PD
                </span>
              </div>
              <div className="min-w-0 space-y-2">
                <p className="text-base leading-snug">{p.reference}</p>
                <p className="font-ui text-xs text-muted-foreground">
                  License: {p.license}
                </p>
                <a
                  href={p.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-ui text-xs text-teal underline-offset-4 hover:underline"
                >
                  View on Wikimedia Commons{' '}
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="art" className="mt-20 max-w-2xl">
        <h2 id="art" className="font-display text-3xl font-normal">
          Illustrations
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          The present-day scenes — the queue, the classroom, the phone at
          midnight, the bench, the community table — are illustrations made
          specifically for this issue. They are not photographs, and they
          depict no real person.
        </p>
      </section>

      <section aria-labelledby="sources" className="mt-20">
        <h2 id="sources" className="font-display text-3xl font-normal">
          Behind each essay
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {essays.map((e) => (
            <div key={e.slug}>
              <Link
                to="/essays/$slug"
                params={{ slug: e.slug }}
                className="font-display text-2xl hover:underline"
              >
                {e.number} · {e.title}
              </Link>
              <ul className="mt-4 space-y-3 text-lg leading-snug text-muted-foreground">
                {e.sources.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="flag" className="mt-20 max-w-2xl">
        <h2 id="flag" className="font-display text-3xl font-normal">
          A note on design
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          This issue deliberately avoids national symbols. No flag, sun, or
          stars appear in it, and its colors were chosen to stand apart from
          the flag’s, in keeping with the respect for those symbols set out in
          Republic Act No. 8491. Love of country, here, is something you do —
          not something you wear.
        </p>
      </section>
    </div>
  )
}
