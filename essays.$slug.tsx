import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { essays, getEssay } from '@/content/essays'
import { EssayBlocks } from '@/components/magazine/essay-blocks'
import { Illustration } from '@/components/magazine/illustration'
import { ReadingProgress } from '@/components/magazine/reading-progress'
import { Reflection } from '@/components/magazine/reflection'
import { toneChip, toneWash } from '@/components/magazine/tone'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/essays/$slug')({
  loader: ({ params }) => {
    const essay = getEssay(params.slug)
    if (!essay) throw notFound()
    return { slug: essay.slug }
  },
  head: ({ params }) => {
    const essay = getEssay(params.slug)
    return {
      meta: essay
        ? [
            { title: `${essay.title} — Salinaw` },
            { name: 'description', content: essay.dek },
            { property: 'og:title', content: `${essay.title} — Salinaw` },
            { property: 'og:description', content: essay.dek },
          ]
        : [],
    }
  },
  component: EssayPage,
})

function EssayPage() {
  const { slug } = Route.useLoaderData()
  const essay = getEssay(slug)!
  const index = essays.findIndex((e) => e.slug === slug)
  const next = essays[index + 1]
  const prev = essays[index - 1]

  return (
    <article>
      <ReadingProgress />

      {/* Opening */}
      <header className={cn('pt-16 pb-20 sm:pt-24', toneWash[essay.tone])}>
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="flex items-center justify-center gap-3 font-ui text-xs">
              <span
                className={cn(
                  'rounded-full px-2.5 py-1',
                  toneChip[essay.tone],
                )}
              >
                {essay.number}
              </span>
              <span className="tracking-widest text-muted-foreground uppercase">
                {essay.kicker}
              </span>
            </p>
            <h1 className="mt-8 font-display text-6xl font-light tracking-tight sm:text-8xl">
              {essay.title}
            </h1>
            <p className="mx-auto mt-8 max-w-xl font-display text-2xl leading-snug text-muted-foreground italic sm:text-3xl">
              {essay.dek}
            </p>
            <p className="mt-8 font-ui text-xs text-muted-foreground">
              {essay.minutes} min read · take longer
            </p>
          </div>

          {essay.art && (
            <Illustration
              art={essay.art}
              priority
              className="mx-auto mt-16 aspect-[16/9] max-w-5xl rounded-[2rem] shadow-[0_40px_80px_-50px_var(--ink)]"
            />
          )}
        </div>
      </header>

      {/* Body */}
      <div className="px-4 pt-20 sm:px-6">
        <EssayBlocks blocks={essay.blocks} tone={essay.tone} />
      </div>

      {/* Margin + practice */}
      <div className="mx-auto mt-24 grid max-w-5xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
        <Reflection slug={essay.slug} prompt={essay.reflection} />
        <section
          aria-labelledby="try-this"
          className={cn(
            'rounded-[1.5rem] p-6 sm:p-8',
            toneChip[essay.tone],
          )}
        >
          <p className="font-ui text-xs tracking-widest uppercase opacity-70">
            Try this
          </p>
          <h2 id="try-this" className="mt-3 font-display text-2xl font-normal">
            Small, and entirely doable
          </h2>
          <ul className="mt-6 space-y-4 text-lg leading-snug">
            {essay.practice.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-ink/60" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/field-guide"
            className="mt-8 inline-flex items-center gap-2 font-ui text-sm underline-offset-4 hover:underline"
          >
            More in the field guide <ArrowRight className="size-4" />
          </Link>
        </section>
      </div>

      {/* Where this comes from */}
      <div className="mx-auto mt-16 max-w-reading px-4 sm:px-0">
        <Accordion type="single" collapsible>
          <AccordionItem value="sources" className="border-border">
            <AccordionTrigger className="font-ui text-sm text-muted-foreground hover:no-underline">
              Where the “once” in this piece comes from
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                {essay.sources.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Pager */}
      <nav
        aria-label="More essays"
        className="mx-auto mt-24 grid max-w-5xl gap-4 px-4 sm:grid-cols-2 sm:px-6"
      >
        {prev ? (
          <Link
            to="/essays/$slug"
            params={{ slug: prev.slug }}
            className="group rounded-[1.5rem] border border-border p-6 transition-colors hover:bg-card motion-reduce:transition-none"
          >
            <p className="flex items-center gap-2 font-ui text-xs text-muted-foreground">
              <ArrowLeft className="size-3.5" /> Previous
            </p>
            <p className="mt-2 font-display text-2xl">{prev.title}</p>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/essays/$slug"
            params={{ slug: next.slug }}
            className="group rounded-[1.5rem] border border-border p-6 text-right transition-colors hover:bg-card motion-reduce:transition-none"
          >
            <p className="flex items-center justify-end gap-2 font-ui text-xs text-muted-foreground">
              Next <ArrowRight className="size-3.5" />
            </p>
            <p className="mt-2 font-display text-2xl">{next.title}</p>
          </Link>
        ) : (
          <Link
            to="/field-guide"
            className="group rounded-[1.5rem] bg-ink p-6 text-right text-paper transition-opacity hover:opacity-90 motion-reduce:transition-none"
          >
            <p className="flex items-center justify-end gap-2 font-ui text-xs opacity-70">
              You’ve finished the essays <ArrowRight className="size-3.5" />
            </p>
            <p className="mt-2 font-display text-2xl">Now, the field guide</p>
          </Link>
        )}
      </nav>
    </article>
  )
}
