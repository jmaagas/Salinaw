import { cdn, photos, type PhotoKey } from '@/content/photos'
import { cn } from '@/lib/utils'

/**
 * A borrowed archival photograph. The citation is printed inside the
 * bottom-right corner of the image itself, as the issue requires.
 */
export function ArchivalPhoto({
  photo,
  size = 'md',
  showSubject = true,
  className,
}: {
  photo: PhotoKey
  size?: 'sm' | 'md' | 'lg'
  showSubject?: boolean
  className?: string
}) {
  const p = photos[photo]
  const width = Math.min(p.width, size === 'lg' ? 1100 : 720)
  const maxW = {
    sm: 'max-w-[15rem]',
    md: p.width < 200 ? 'max-w-[18rem]' : 'max-w-md',
    lg: 'max-w-2xl',
  }[size]

  return (
    <figure className={cn('mx-auto w-full', maxW, className)}>
      <div className="rounded-[1.25rem] bg-gradient-to-br from-mist via-paper to-lilac p-3 shadow-[0_30px_60px_-40px_var(--ink)] sm:p-4">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={cdn(p.src, width)}
            alt={p.alt}
            width={p.width}
            height={p.height}
            loading="lazy"
            className="block h-auto w-full"
          />
          <a
            href={p.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute right-1.5 bottom-1.5 left-auto max-w-[92%] rounded-md bg-ink/75 px-2 py-1 text-right font-ui text-[0.6rem] leading-snug text-paper backdrop-blur-sm transition-colors hover:bg-ink/90 sm:text-[0.66rem]"
          >
            {p.credit}
          </a>
        </div>
      </div>
      {showSubject && (
        <figcaption className="mt-4 px-1 font-display text-base text-muted-foreground italic">
          {p.subject}
        </figcaption>
      )}
    </figure>
  )
}
