import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { essays } from '@/content/essays'
import { cdn, photos } from '@/content/photos'
import { ArchivalPhoto } from '@/components/magazine/archival-photo'
import { Illustration } from '@/components/magazine/illustration'
import { Reveal } from '@/components/magazine/reveal'
import { toneChip } from '@/components/magazine/tone'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      {/* Cover */}
      <section className="relative">
        <div className="mx-auto grid max-w-content gap-10 px-4 pt-12 pb-16 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:pt-20">
          <div>
            <p className="font-ui text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Salinaw · 1st Issue · Oct. 16, 2026
            </p>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] font-light tracking-tight sm:text-7xl lg:text-8xl">
              Unfinished <em className="font-normal text-teal">Business</em>
            </h1>
            <p className="mt-8 max-w-lg text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              On schooling, power, indifference, memory, and leaving — questions
              asked a long time ago that nobody has quite finished answering.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 font-ui text-sm">
              <Link
                to="/essays/$slug"
                params={{ slug: essays[0].slug }}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-paper transition-opacity hover:opacity-90 motion-reduce:transition-none"
              >
                Begin reading <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/field-guide"
                className="rounded-full px-4 py-3 text-ink underline-offset-4 hover:underline"
              >
                Skip to what you can do
              </Link>
            </div>
          </div>
          <Illustration
            art="cover"
            priority
            className="aspect-[16/10] rounded-[2rem] shadow-[0_40px_80px_-50px_var(--ink)]"
          />
        </div>
      </section>

      {/* Cold open */}
      <section className="wash-mist py-28 sm:py-36">
        <div className="mx-auto max-w-reading px-4 prose-salinaw sm:px-0">
          <p className="mb-8">
            This issue is about a handful of questions. They were first asked
            in the 1880s — in novels, letters, a small newspaper printed
            far from home — by people who were young, restless, and tired of
            being told to wait.
          </p>
          <p className="mb-8">
            One of them, José Rizal, put the questions more sharply than most.
            His name turns up in the photo credits, beside the people around
            him. In the essays, we let the questions speak for themselves.
          </p>
          <p className="mb-8">
            Who is school really for? Why does power so rarely have to explain
            itself? Is a people indifferent by nature, or were they taught to
            be? Can you love a country honestly? And what do you owe a place
            you had to leave?
          </p>
          <Reveal>
            <p className="my-20 text-center font-display text-3xl leading-snug font-light sm:text-4xl">
              None of them have been fully answered.
              <br />
              <span className="text-teal italic">That part is up to us.</span>
            </p>
          </Reveal>
          <p>
            You won't find a biography here or a list of dates to memorize.
            Each piece starts with something you might see this week and lets
            the older story sit quietly beside it. Read slowly, as there is room in
            the margins.
          </p>
        </div>
      </section>

      {/* Contents */}
      <section
        aria-labelledby="contents"
        className="mx-auto max-w-content px-4 py-24 sm:px-6"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2
            id="contents"
            className="font-display text-4xl font-light sm:text-5xl"
          >
            In this issue
          </h2>
          <p className="font-ui text-sm text-muted-foreground">
            Five essays · Expected reading time: 10-20 minutes
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {essays.map((essay, i) => {
            const wide = i < 2
            return (
              <li
                key={essay.slug}
                className={cn(wide ? 'lg:col-span-3' : 'lg:col-span-2')}
              >
                <Link
                  to="/essays/$slug"
                  params={{ slug: essay.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card transition-shadow hover:shadow-[0_30px_60px_-40px_var(--ink)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none motion-reduce:transition-none"
                >
                  <EssayThumb essay={essay} />
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-center gap-3 font-ui text-xs">
                      <span
                        className={cn(
                          'rounded-full px-2.5 py-1',
                          toneChip[essay.tone],
                        )}
                      >
                        {essay.number}
                      </span>
                      <span className="text-muted-foreground">
                        {essay.kicker}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-3xl font-normal">
                      {essay.title}
                    </h3>
                    <p className="mt-3 text-lg text-muted-foreground">
                      {essay.dek}
                    </p>
                    <p className="mt-auto pt-6 font-ui text-xs text-muted-foreground">
                      {essay.minutes} min read
                      <ArrowRight className="ml-1 inline size-3.5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                    </p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ol>
      </section>

      {/* Field guide teaser */}
      <section className="wash-apricot py-24">
        <div className="mx-auto grid max-w-content items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Illustration
            art="table"
            width={1000}
            className="aspect-[6/5] rounded-[2rem]"
          />
          <div>
            <p className="font-ui text-xs tracking-[0.3em] text-muted-foreground uppercase">
              The field guide
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight font-light sm:text-5xl">
              You don't have to die for your country.
              <span className="block text-teal italic">
                You do have to live in it.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-xl leading-relaxed text-muted-foreground">
              Thirteen small, unglamorous ways to practice love of country —
              sorted by how much time they take. Pick three. Keep track
              privately.
            </p>
            <Link
              to="/field-guide"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-ui text-sm text-paper transition-opacity hover:opacity-90 motion-reduce:transition-none"
            >
              Open the field guide <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Editor's note */}
      <section
        aria-labelledby="missing"
        className="mx-auto max-w-content px-4 py-28 sm:px-6"
      >
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_20rem]">
          <div className="max-w-reading prose-salinaw">
            <p className="font-ui text-xs tracking-[0.3em] text-muted-foreground uppercase">
              A note before you go
            </p>
            <h2
              id="missing"
              className="mt-5 mb-10 font-display text-4xl font-light sm:text-5xl"
            >
              On who's missing from these pages:
            </h2>
            <p className="mb-8">
              You may notice that this issue rarely says his name. That was
              intentional.
            </p>
            <p className="mb-8">
              Statues are easy to admire and easier to ignore. A man on a
              pedestal asks nothing of you.
            </p>
            <p className="mb-8">
              But the ideas he argued for — that schooling should free people
              rather than sort them; that power should answer to those it governs;
              that indifference is learned and can be unlearned —
              were never his alone, and they were never
              meant to be admired from a distance.
            </p>
            <p>
              So here is his photograph, so you know whose questions we
              borrowed. Then set it aside.{' '}
              <em>The questions are yours now.</em>
            </p>
          </div>
          <ArchivalPhoto photo="rizal" size="sm" className="lg:mt-24" />
        </div>
      </section>
    </>
  )
}

function EssayThumb({ essay }: { essay: (typeof essays)[number] }) {
  if (essay.art) {
    return (
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={cdn(`/img/${essay.art}.png`, 900)}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
    )
  }
  const p = essay.coverPhoto ? photos[essay.coverPhoto] : null
  return (
    <div
      className={cn(
        'flex aspect-[16/9] items-center justify-center bg-gradient-to-br',
        essay.tone === 'apricot'
          ? 'from-apricot via-paper to-lilac'
          : 'from-mist via-paper to-lilac',
      )}
    >
      {p && (
        <div className="relative h-[78%] overflow-hidden rounded-lg shadow-md">
          <img
            src={cdn(p.src, 400)}
            alt=""
            loading="lazy"
            className="h-full w-auto"
          />
          <span className="absolute right-1 bottom-1 left-1 rounded bg-ink/75 px-1.5 py-0.5 text-right font-ui text-[0.5rem] leading-tight text-paper">
            {p.shortCredit}
          </span>
        </div>
      )}
    </div>
  )
}
