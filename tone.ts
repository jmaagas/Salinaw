import type { Tone } from '@/content/essays'

export const toneWash: Record<Tone, string> = {
  mist: 'wash-mist',
  lilac: 'wash-lilac',
  apricot: 'wash-apricot',
}

export const toneChip: Record<Tone, string> = {
  mist: 'bg-mist text-ink',
  lilac: 'bg-lilac text-ink',
  apricot: 'bg-apricot text-ink',
}

export const toneBorder: Record<Tone, string> = {
  mist: 'border-mist-deep',
  lilac: 'border-lilac-deep',
  apricot: 'border-apricot-deep',
}
