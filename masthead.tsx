import { Link } from '@tanstack/react-router'

const nav = [
  { to: '/', label: 'This issue' },
  { to: '/field-guide', label: 'Field guide' },
  { to: '/credits', label: 'Credits' },
] as const

export function Masthead() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="group flex items-baseline gap-2 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <span className="font-display text-2xl font-semibold tracking-tight">
            Salinaw
          </span>
          <span className="hidden font-ui text-xs text-muted-foreground sm:inline">
            Issue 01 · Unfinished Business
          </span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 font-ui text-sm">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-2.5 py-1.5 text-muted-foreground sm:px-3 transition-colors hover:bg-mist/60 hover:text-ink motion-reduce:transition-none data-[status=active]:bg-mist data-[status=active]:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
