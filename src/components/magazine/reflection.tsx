import { useEffect, useState } from 'react'
import { Textarea } from '@/components/ui/textarea'

/** A private margin for the reader's answer. Saved only on this device. */
export function Reflection({ slug, prompt }: { slug: string; prompt: string }) {
  const key = `muni:margin:${slug}`
  const [text, setText] = useState('')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setText(window.localStorage.getItem(key) ?? '')
  }, [key])

  useEffect(() => {
    if (!saved) return
    const t = window.setTimeout(() => setSaved(false), 1600)
    return () => window.clearTimeout(t)
  }, [saved])

  return (
    <section
      aria-labelledby={`margin-${slug}`}
      className="rounded-[1.5rem] border border-border bg-card/80 p-6 sm:p-8"
    >
      <p className="font-ui text-xs tracking-widest text-muted-foreground uppercase">
        Your margin
      </p>
      <h2
        id={`margin-${slug}`}
        className="mt-3 font-display text-2xl leading-snug font-normal italic sm:text-3xl"
      >
        {prompt}
      </h2>
      <Textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          window.localStorage.setItem(key, e.target.value)
          setSaved(true)
        }}
        rows={5}
        placeholder="Take your time. There is no right answer, and no one else will read this."
        aria-label="Your answer"
        className="mt-6 resize-y border-border bg-paper font-body text-lg leading-relaxed"
      />
      <p className="mt-3 h-4 font-ui text-xs text-muted-foreground" aria-live="polite">
        {saved ? 'Kept on this device.' : 'Stays on this device only.'}
      </p>
    </section>
  )
}
