/**
 * Archival photographs borrowed from Wikimedia Commons.
 *
 * Only real photographs of Rizal or people close to him are borrowed. Each
 * entry carries the citation that is printed inside the corner of the image
 * wherever it appears, plus a fuller reference for the Credits page.
 */
export type ArchivalPhoto = {
  src: string
  alt: string
  width: number
  height: number
  /** Short credit printed in the corner of the photo */
  credit: string
  /** Compact credit for small thumbnails */
  shortCredit: string
  /** Who is in the frame, written for the caption */
  subject: string
  /** Full reference for the credits page */
  reference: string
  sourceUrl: string
  license: string
}

export const photos = {
  teodora: {
    shortCredit: 'Poblete (1909) · Wikimedia Commons, PD',
    src: '/img/archive/teodora-alonso.jpg',
    alt: 'Studio portrait of an elderly woman in spectacles and a lace-trimmed pañuelo.',
    width: 308,
    height: 415,
    subject: 'Teodora Alonso, his mother and first teacher.',
    credit:
      'Photo: in P. H. Poblete, Buhay at mga Ginawa ni Dr. José Rizal (1909) · Public domain · via Wikimedia Commons',
    reference:
      'Portrait of Teodora Alonso y Quintos. Reproduced in Pascual H. Poblete, Buhay at mga Ginawa ni Dr. José Rizal (Manila, 1909). Public domain.',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Theodora_alonzo_quintos.jpg',
    license: 'Public domain',
  },
  madrid: {
    shortCredit: 'Unknown photographer, c. 1890 · Wikimedia Commons, PD',
    src: '/img/archive/rizal-madrid.jpg',
    alt: 'A group portrait of about twenty young men in suits and top hats, standing and seated in rows.',
    width: 584,
    height: 428,
    subject:
      'Madrid, around 1890. Students and writers abroad, Marcelo H. del Pilar among them — the group that ran a newspaper arguing for reform.',
    credit:
      'Photo: unknown photographer, Madrid, c. 1890 · Public domain · via Wikimedia Commons',
    reference:
      'José Rizal with Marcelo H. del Pilar and fellow Filipinos in Madrid, c. 1890. Photographer unknown. Public domain.',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Jos%C3%A9_Rizal_with_Marcelo_del_Pilar_in_Madrid.jpg',
    license: 'Public domain',
  },
  blumentritt: {
    shortCredit: 'In Laubach, Rizal: Man and Martyr · Wikimedia Commons, PD',
    src: '/img/archive/blumentritt.jpg',
    alt: 'A small portrait of a bearded, balding man in spectacles, arms folded.',
    width: 100,
    height: 132,
    subject:
      'Ferdinand Blumentritt, a schoolteacher in Bohemia who never set foot in the islands, and wrote back anyway.',
    credit:
      'Photo: in F. C. Laubach, Rizal: Man and Martyr · Public domain · via Wikimedia Commons',
    reference:
      'Ferdinand Blumentritt, lecturer. Reproduced in Frank C. Laubach, Rizal: Man and Martyr. Public domain.',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Blumentritt,_lecturer.jpg',
    license: 'Public domain',
  },
  leonor: {
    shortCredit: 'Unknown photographer, c. 1880 · Wikimedia Commons, PD',
    src: '/img/archive/leonor-rivera.jpg',
    alt: 'Full-length studio portrait of a young woman in a lace pañuelo and long striped skirt, beside a draped curtain.',
    width: 375,
    height: 541,
    subject:
      'Leonor Rivera, c. 1880. For years, letters crossed an ocean to reach her. Many did not.',
    credit:
      'Photo: unknown photographer, c. 1880 · Public domain · via Wikimedia Commons',
    reference:
      'Leonor Rivera, c. 1880. Photographer unknown; reproduced from a biography of José Rizal. Public domain.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Leonor_Rivera.jpg',
    license: 'Public domain',
  },
  rizal: {
    shortCredit: 'Unknown photographer, c. 1890s · Wikimedia Commons, PD',
    src: '/img/archive/rizal-portrait.jpg',
    alt: 'Studio portrait of a young man in a dark three-piece suit with a mustache and side-parted hair.',
    width: 955,
    height: 1358,
    subject: 'The man whose questions this issue borrows. Shown once.',
    credit:
      'Photo: unknown photographer, c. 1890s · Public domain · via Wikimedia Commons',
    reference:
      'José Rizal, c. 1890s. Photographer unknown; previously published at joserizal.ph. Public domain.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jose_Rizal_full.jpg',
    license: 'Public domain',
  },
} satisfies Record<string, ArchivalPhoto>

export type PhotoKey = keyof typeof photos

/** Illustrations made for this issue (not borrowed). */
export const illustrations = {
  cover: {
    src: '/img/cover.png',
    alt: 'Illustration: a student reads a paperback on a bench at a roadside stop at dusk, traffic lights blurred behind.',
  },
  window: {
    src: '/img/window.png',
    alt: 'Illustration: people wait in a long queue at numbered service windows in a government office.',
  },
  classroom: {
    src: '/img/classroom.png',
    alt: 'Illustration: students copy notes from a board while a padlocked glass cabinet of microscopes and flasks sits unused.',
  },
  feed: {
    src: '/img/feed.png',
    alt: 'Illustration: a person lies in bed at night lit by a phone, with swirls of color drifting across the ceiling.',
  },
  table: {
    src: '/img/table.png',
    alt: 'Illustration: neighbors of different ages take notes around a plastic table under a covered basketball court.',
  },
} as const

export type IllustrationKey = keyof typeof illustrations

export function cdn(src: string, width: number) {
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&fm=webp`
}
