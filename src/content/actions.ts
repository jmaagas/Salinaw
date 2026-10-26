export type Action = {
  id: string
  title: string
  detail: string
  /** Slug of the essay this action answers */
  echoes: string
}

export type ActionGroup = {
  id: string
  label: string
  note: string
  actions: Action[]
}

export const actionGroups: ActionGroup[] = [
  {
    id: 'minutes',
    label: 'In five minutes',
    note: 'Things you can do before your coffee gets cold.',
    actions: [
      {
        id: 'receipt',
        title: 'Ask for the official receipt',
        detail:
          'Every fee, every office, every time. It is the smallest possible audit, and it is yours to request.',
        echoes: 'the-queue',
      },
      {
        id: 'ten-minutes',
        title: 'Wait ten minutes before you share',
        detail:
          'Then check one other source. Outrage that survives ten minutes is usually worth something.',
        echoes: 'the-feed',
      },
      {
        id: 'teacher',
        title: 'Thank a public school teacher by name',
        detail:
          'Not a post about teachers in general. A message to one person who taught you how to think.',
        echoes: 'the-cabinet',
      },
      {
        id: 'lgu-page',
        title: 'Follow your barangay and city pages',
        detail:
          'Notices for assemblies, budget hearings, and consultations are usually posted there first — and seen by very few.',
        echoes: 'the-feed',
      },
    ],
  },
  {
    id: 'afternoon',
    label: 'In an afternoon',
    note: 'One errand, one meeting, one free Saturday.',
    actions: [
      {
        id: 'assembly',
        title: 'Sit through a barangay assembly',
        detail:
          'Held at least twice a year and open to every resident. Bring a notebook. Ask one question, even a small one.',
        echoes: 'the-feed',
      },
      {
        id: 'foi',
        title: 'File a Freedom of Information request',
        detail:
          'Executive agencies accept requests at foi.gov.ph. Ask how something near you was funded, and see what comes back.',
        echoes: 'the-queue',
      },
      {
        id: 'register',
        title: 'Register, or check your registration',
        detail:
          'With COMELEC at home, or through overseas voting if you live abroad. Then put the election date in your calendar.',
        echoes: 'the-distance',
      },
      {
        id: 'library',
        title: 'Get a public library card',
        detail:
          'And borrow something nobody assigned you. Reading by choice is the opposite of the locked cabinet.',
        echoes: 'the-cabinet',
      },
      {
        id: 'primary',
        title: 'Read one primary source',
        detail:
          'A diary, a court record, a newspaper from the time. Notice how different it sounds from the summary you were given.',
        echoes: 'the-footnotes',
      },
    ],
  },
  {
    id: 'season',
    label: 'Over a season',
    note: 'Slower commitments. These are the ones that compound.',
    actions: [
      {
        id: 'tutor',
        title: 'Tutor one child in reading',
        detail:
          'An hour a week, for a term. A sibling, a neighbor, or through a barangay or school reading program.',
        echoes: 'the-cabinet',
      },
      {
        id: 'elder',
        title: 'Record an elder’s story',
        detail:
          'Ask what they actually lived through. Write it down or record it, with dates and places. Keep it somewhere safe.',
        echoes: 'the-footnotes',
      },
      {
        id: 'watcher',
        title: 'Volunteer as a poll watcher',
        detail:
          'Accredited citizens’ groups train volunteers before every election. A watched count is a more honest count.',
        echoes: 'the-queue',
      },
      {
        id: 'hometown',
        title: 'Adopt one hometown cause',
        detail:
          'A local library, a cooperative, a scholarship fund. Small and close, so you can see where your effort goes.',
        echoes: 'the-distance',
      },
    ],
  },
]

export const allActions = actionGroups.flatMap((g) => g.actions)
