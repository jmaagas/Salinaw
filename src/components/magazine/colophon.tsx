import { Link } from '@tanstack/react-router'

export function Colophon() {
  return (
    <footer className="mt-24 bg-gradient-to-b from-paper to-mist/70">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-3">
          <p className="font-display text-3xl font-semibold">Salinaw</p>
          <p className="max-w-md text-lg text-muted-foreground">
            <em>Salinaw</em> joins <em>sali</em> ("to take part") and{' '}
            <em>linaw</em> ("clarity"). This magazine is about ideas worth seeing
            clearly and joining in on — not the people who are remembered for
            them.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 font-ui text-sm">
          <div className="space-y-2">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Read
            </p>
            <Link to="/" className="block hover:underline">
              This issue
            </Link>
            <Link to="/field-guide" className="block hover:underline">
              Field guide
            </Link>
          </div>
          <div className="space-y-2">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              About
            </p>
            <Link to="/credits" className="block hover:underline">
              Credits &amp; sources
            </Link>
          </div>
        </div>
      </div>
      <p className="mx-auto max-w-content px-4 pb-10 font-ui text-xs text-muted-foreground sm:px-6">
        Archival photographs are public domain, via Wikimedia Commons, and
        credited inside each image. Illustrations were made for this issue
        by anonymous artists.
      </p>
    </footer>
  )
}
