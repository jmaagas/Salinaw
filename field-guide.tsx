import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { RotateCcw } from 'lucide-react'

import { actionGroups, allActions } from '@/content/actions'
import { getEssay } from '@/content/essays'
import { Illustration } from '@/components/magazine/illustration'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/field-guide')({
  head: () => ({
    meta: [
      { title: 'Field guide — Salinaw' },
      {
        name: 'description',
        content:
          'Small, unglamorous ways to practice love of country, sorted by how much time they take.',
      },
    ],
  }),
  component: FieldGuide,
})

const STORAGE_KEY = 'muni:field-guide'
type Status = 'chosen' | 'done'

function FieldGuide() {
  const [state, setState] = useState<Record<string, Status>>({})

  useEffect(() => {
    try {
      setState(JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '{}'))
    } catch {
      setState({})
    }
  }, [])

  const update = (next: Record<string, Status>) => {
    setState(next)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }

  const choose = (id: string) => {
    const next = { ...state }
    if (next[id]) delete next[id]
    else next[id] = 'chosen'
    update(next)
  }

  const markDone = (id: string) => {
    update({ ...state, [id]: state[id] === 'done' ? 'chosen' : 'done' })
  }

  const chosen = allActions.filter((a) => state[a.id])
  const done = chosen.filter((a) => state[a.id] === 'done')

  return (
    <>
      <section className="wash-apricot pt-16 pb-24 sm:pt-24">
        <div className="mx-auto grid max-w-content items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="font-ui text-xs tracking-[0.3em] text-muted-foreground uppercase">
              The field guide
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] font-light tracking-tight sm:text-7xl">
              Small patriotisms
            </h1>
            <div className="mt-8 max-w-lg space-y-5 text-xl leading-relaxed text-muted-foreground">
              <p>
                For a long time we were taught that loving a country meant
                being ready to die for it. Very few people are ever asked to.
                Nearly everyone is asked, every week, to do something quieter.
              </p>
              <p>
                None of these will make the news. That’s rather the point. Pick
                three. Come back when you’ve done one.
              </p>
            </div>
          </div>
          <Illustration
            art="table"
            width={1000}
            priority
            className="aspect-[6/5] rounded-[2rem] shadow-[0_40px_80px_-50px_var(--ink)]"
          />
        </div>
      </section>

      <div className="mx-auto grid max-w-content gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-20">
          {actionGroups.map((group) => (
            <section key={group.id} aria-labelledby={`group-${group.id}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4">
                <h2
                  id={`group-${group.id}`}
                  className="font-display text-3xl font-normal sm:text-4xl"
                >
                  {group.label}
                </h2>
                <p className="font-display text-lg text-muted-foreground italic">
                  {group.note}
                </p>
              </div>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {group.actions.map((action) => {
                  const status = state[action.id]
                  const essay = getEssay(action.echoes)
                  return (
                    <li
                      key={action.id}
                      className={cn(
                        'flex flex-col rounded-[1.25rem] border p-5 transition-colors motion-reduce:transition-none sm:p-6',
                        status === 'done'
                          ? 'border-mist-deep bg-mist/70'
                          : status === 'chosen'
                            ? 'border-apricot-deep bg-apricot/40'
                            : 'border-border bg-card',
                      )}
                    >
                      <h3 className="font-display text-xl font-medium">
                        {action.title}
                      </h3>
                      <p className="mt-2 flex-1 text-lg leading-snug text-muted-foreground">
                        {action.detail}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 font-ui text-sm">
                        <label className="flex cursor-pointer items-center gap-2">
                          <Checkbox
                            checked={!!status}
                            onCheckedChange={() => choose(action.id)}
                          />
                          I’ll do this
                        </label>
                        <label
                          className={cn(
                            'flex cursor-pointer items-center gap-2',
                            !status && 'opacity-50',
                          )}
                        >
                          <Checkbox
                            checked={status === 'done'}
                            disabled={!status}
                            onCheckedChange={() => markDone(action.id)}
                          />
                          Done
                        </label>
                        {essay && (
                          <Link
                            to="/essays/$slug"
                            params={{ slug: essay.slug }}
                            className="ml-auto text-xs text-muted-foreground underline-offset-4 hover:underline"
                          >
                            from “{essay.title}”
                          </Link>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </section>
          ))}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[1.5rem] bg-ink p-6 text-paper sm:p-7">
            <p className="font-ui text-xs tracking-widest uppercase opacity-70">
              Your card
            </p>
            {chosen.length === 0 ? (
              <p className="mt-4 font-display text-2xl leading-snug font-light">
                Nothing chosen yet. Three is a good number to start with.
              </p>
            ) : (
              <>
                <p className="mt-4 font-display text-2xl leading-snug font-light">
                  {done.length} of {chosen.length} done
                </p>
                <Progress
                  value={(done.length / chosen.length) * 100}
                  className="mt-4 bg-paper/20 [&>*]:bg-apricot"
                  aria-label="Progress on chosen actions"
                />
                <ul className="mt-6 space-y-2 text-base">
                  {chosen.map((a) => (
                    <li
                      key={a.id}
                      className={cn(
                        state[a.id] === 'done' && 'line-through opacity-60',
                      )}
                    >
                      {a.title}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => update({})}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-paper/30 px-3 py-1.5 font-ui text-xs transition-colors hover:bg-paper/10 motion-reduce:transition-none"
                >
                  <RotateCcw className="size-3.5" /> Start over
                </button>
              </>
            )}
            <p className="mt-6 font-ui text-xs opacity-60">
              Saved only on this device. Nobody is keeping score but you.
            </p>
          </div>
        </aside>
      </div>
    </>
  )
}
