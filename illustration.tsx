import { cdn, illustrations, type IllustrationKey } from '@/content/photos'
import { cn } from '@/lib/utils'

export function Illustration({
  art,
  width = 1400,
  className,
  priority = false,
}: {
  art: IllustrationKey
  width?: number
  className?: string
  priority?: boolean
}) {
  const a = illustrations[art]
  return (
    <figure className={cn('relative overflow-hidden', className)}>
      <img
        src={cdn(a.src, width)}
        alt={a.alt}
        loading={priority ? 'eager' : 'lazy'}
        className="block h-full w-full object-cover"
      />
      <figcaption className="absolute right-3 bottom-3 rounded-full bg-paper/80 px-2.5 py-1 font-ui text-[0.62rem] tracking-wide text-ink/70 backdrop-blur-sm">
        Illustration made for this issue
      </figcaption>
    </figure>
  )
}
