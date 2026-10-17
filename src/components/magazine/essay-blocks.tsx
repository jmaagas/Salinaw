import type { Block, Tone } from '@/content/essays'
import { cn } from '@/lib/utils'
import { ArchivalPhoto } from './archival-photo'
import { Reveal } from './reveal'
import { toneBorder } from './tone'

export function EssayBlocks({ blocks, tone }: { blocks: Block[]; tone: Tone }) {
  return (
    <div className="prose-salinaw">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case 'p':
            return (
              <p key={i} className="mx-auto mb-8 max-w-reading">
                {block.text}
              </p>
            )
          case 'pause':
            return (
              <Reveal key={i} className="mx-auto my-24 max-w-2xl px-2 text-center sm:my-32">
                <p className="font-display text-3xl leading-tight font-light text-balance sm:text-4xl">
                  {block.text}
                </p>
              </Reveal>
            )
          case 'mirror':
            return (
              <Reveal key={i} className="mx-auto my-20 max-w-4xl">
                <div className="grid overflow-hidden rounded-[1.5rem] border border-border bg-card/70 md:grid-cols-2">
                  <div className="p-6 sm:p-9">
                    <p className="font-ui text-xs tracking-widest text-teal uppercase">
                      Now
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">{block.now}</p>
                  </div>
                  <div
                    className={cn(
                      'border-t-2 bg-muted/60 p-6 sm:p-9 md:border-t-0 md:border-l-2',
                      toneBorder[tone],
                    )}
                  >
                    <p className="font-ui text-xs tracking-widest text-muted-foreground uppercase">
                      Once
                    </p>
                    <p className="mt-4 text-lg leading-relaxed italic">
                      {block.once}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          case 'photo':
            return (
              <div key={i} className="my-20 px-2">
                <ArchivalPhoto photo={block.photo} />
              </div>
            )
          case 'question':
            return (
              <p
                key={i}
                className="mx-auto my-16 max-w-reading font-display text-2xl italic"
              >
                {block.text}
              </p>
            )
        }
      })}
    </div>
  )
}
