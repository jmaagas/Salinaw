import type { IllustrationKey, PhotoKey } from './photos'

export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'pause'; text: string }
  | { kind: 'mirror'; now: string; once: string }
  | { kind: 'photo'; photo: PhotoKey }
  | { kind: 'question'; text: string }

export type Tone = 'mist' | 'lilac' | 'apricot'

export type Essay = {
  slug: string
  number: string
  kicker: string
  title: string
  dek: string
  tone: Tone
  art: IllustrationKey | null
  coverPhoto?: PhotoKey
  minutes: number
  blocks: Block[]
  reflection: string
  practice: string[]
  /** Quiet notes on where each "once" comes from, kept out of the main text */
  sources: string[]
}

export const essays: Essay[] = [
  {
    slug: 'the-queue',
    number: '01',
    kicker: 'Corruption that feels… \'normal\'',
    title: 'The Queue',
    dek: 'No one in the queue is a villain.\nThat is the problem.',
    tone: 'mist',
    art: 'window',
    minutes: 6,
    blocks: [
      {
        kind: 'p',
        text: 'It is 7:40 AM. The line already folded back on itself twice.',
      },
      {
        kind: 'p',
        text: 'You have your documents in an envelope: the original, two photocopies, and the photocopy of the photocopy someone told you to bring, just in case.',
      },
      {
        kind: 'p',
        text: 'Your number? 214. The screen says 61.',
      },
      {
        kind: 'p',
        text: 'A man in a polo shirt drifts along the queue. He isn\'t wearing an ID. He doesn\'t need to. He asks, quietly, whether you\'d like to be done before lunch.',
      },
      {
        kind: 'pause',
        text: 'You know what he\'s offering. So does everyone else.',
      },
      {
        kind: 'p',
        text: 'Nothing about this moment feels like corruption. It feels like convenience. The fixer is polite. The fee is small. The clerk who will move your papers to the top of the pile is probably underpaid. Everyone is just trying to get through the day.',
      },
      {
        kind: 'p',
        text: 'Corruption is rarely a single act of evil. More often it\'s an arrangement. Hundreds to thousands of small accommodations that become so ordinary that nobody remembers they were ever a choice.',
      },
      {
        kind: 'mirror',
        now: 'A permit that takes six weeks unless you know someone. A road repaved every election year. A scholarship list where the surnames sound oddly familiar.',
        once: 'A young man comes home from abroad wanting to build a school in his town. Everyone smiles. Everyone agrees. And somewhere between the blessing and the cornerstone, the project quietly comes apart. Not from anyone opposing it out loud, but because the people who did well under things as they were never needed to.',
      },
      {
        kind: 'p',
        text: 'That story was written down more than a century ago, in a novel that was banned for telling it. What the novel understood, and what we still struggle to admit, is that the people in charge were only half of it. The other half was the town: the ones who knew, who whispered, and who went to the fiesta anyway.',
      },
      { kind: 'photo', photo: 'teodora' },
      {
        kind: 'p',
        text: 'Picture a woman in her forties made to walk some fifty kilometers to a provincial jail on an accusation that would not hold, and kept there for more than two years. No one in that province would have called it injustice out loud. It was simply how things went when a family had displeased the wrong people.',
      },
      {
        kind: 'p',
        text: 'Her son was ten. You can draw a straight line from that road to nearly everything he later wrote about power that answers to no one.',
      },
      {
        kind: 'pause',
        text: 'Systems that punish the powerless don\'t run on cruelty. They run on silence.',
      },
      {
        kind: 'p',
        text: 'So what does refusing look like, just as a person standing in a line?',
      },
      {
        kind: 'p',
        text: 'It looks smaller than you\'d expect. It looks like asking for the official receipt, every time, even when it\'s awkward. It looks like saying no to the man in the polo shirt, and saying no again next year. It looks like filing the complaint instead of only telling the story over dinner.',
      },
      {
        kind: 'p',
        text: 'None of this ends corruption on its own. But an arrangement only survives as long as enough people keep agreeing to it. Every refusal is one less signature.',
      },
    ],
    reflection:
      'Think of the last time you paid to make something go faster. Who paid the difference?',
    practice: [
      'Ask for an official receipt for every fee, from the government or not, every time.',
      'Decline fixers, and report them through the 8888 Citizens\' Complaint Hotline or the Anti-Red Tape Authority.',
      'Before the next election, look up how your incumbent\'s favorite projects were actually funded.',
    ],
    sources: [
      'The school that never gets built: Noli Me Tángere (Berlin, 1887), the chapters on Ibarra\'s schoolhouse.',
      'The walk to the provincial jail: Teodora Alonso was arrested in 1871 and walked from Calamba to Santa Cruz, Laguna; she was released about two and a half years later.',
    ],
  },
  {
    slug: 'the-cabinet',
    number: '02',
    kicker: 'Learning, as just memorizing',
    title: 'The Cabinet',
    dek: 'The instruments were never broken.\nThey were just never used.',
    tone: 'apricot',
    art: 'classroom',
    minutes: 6,
    blocks: [
      {
        kind: 'p',
        text: 'Somewhere in a public school, there\'s a cabinet. You may have seen one. Glass doors, a padlock, microscopes still sitting in the foam they arrived in. It gets unlocked when visitors come.',
      },
      {
        kind: 'p',
        text: 'Meanwhile, on the board, the lesson is written out in full, and forty students, more or less, copy it down word-for-word. Tomorrow, there will be a quiz on what they copied. Most of them will pass.',
      },
      {
        kind: 'pause',
        text: 'Passing and learning are not the same thing.\nWe just grade them as if they were.',
      },
      {
        kind: 'p',
        text: 'In 2022, the World Bank estimated that roughly nine in ten Filipino ten-year-olds could not read and understand a simple text written for their age.',
      },
      {
        kind: 'p',
        text: 'Sit with that number for a moment. It is not a story about lazy children.',
      },
      {
        kind: 'p',
        text: 'It is tempting to blame students, or teachers, or phones. The cabinet tells a different story. It\'s what happens when a system is built to look like it educates rather than to make people think.',
      },
      {
        kind: 'mirror',
        now: 'A review session promising the exact questions. A thesis formed without engagement. A graduate who can recite the definition of democracy and has never once been asked what she thinks of it.',
        once: 'A physics class, in a novel, where the apparatus sat behind glass for visitors to admire. The professor lectured, the students recited, and the one student who answered in his own words was mocked until he walked out. The writer had sat in rooms like that. He knew the difference between being schooled and being taught.',
      },
      {
        kind: 'p',
        text: 'What that writer kept insisting in much of what he wrote was that education was not an ornament for the comfortable. It was the very thing that let a person stop accepting what they were told. Which is exactly why some people preferred it rationed.',
      },
      {
        kind: 'p',
        text: 'He once wrote to a group of young ladies in Malolos who had asked, against no small resistance, for a school where they could study at night. He didn\'t flatter them. He told them, more or less, that thinking for themselves was the whole point; that obedience without understanding is only another kind of sleep.',
      },
      {
        kind: 'pause',
        text: 'A people that only memorizes can be told anything.',
      },
      {
        kind: 'p',
        text: 'Loving education, then, is not the same as loving school. It is loving the moment a thing stops being a fact you were handed and becomes something you actually understand. You can choose that moment at any age, in any room, and you can make it possible for someone else.',
      },
    ],
    reflection:
      'Can you recall something you were taught to memorize that you have never actually questioned?',
    practice: [
      'Tutor one child in reading for an hour a week. It could be a sibling, a neighbor, or a learner in your barangay\'s reading program.',
      'Read one long thing this month that nobody assigned you.',
      'Whenever you learn a fact, ask who decided this, and why.',
    ],
    sources: [
      'The physics class: El Filibusterismo (Ghent, 1891), the chapter on the class in physics and the student Plácido Penitente.',
      'The night school: the letter to the young women of Malolos, written in 1889 after they petitioned for a school to study at night.',
      'Learning poverty: World Bank, "The State of Global Learning Poverty: 2022 Update," Philippines estimate.',
    ],
  },
  {
    slug: 'the-feed',
    number: '03',
    kicker: 'Caring too loud, actions not found',
    title: 'The Feed',
    dek: 'Outrage is cheap. Attention is expensive.\nWe keep mixing them up too much.',
    tone: 'lilac',
    art: 'feed',
    minutes: 6,
    blocks: [
      {
        kind: 'p',
        text: 'It is past midnight. You have read eleven posts about a flood, four about a senator, one about a missing student, and something about a celebrity you will have forgotten by morning.',
      },
      {
        kind: 'p',
        text: 'You felt something for each of them. Genuinely. Anger, then sadness, then a small, tired laugh at a meme about the anger.',
      },
      {
        kind: 'pause',
        text: 'Then you put the phone down, and the night went on exactly as before.',
      },
      {
        kind: 'p',
        text: 'Indifference used to look like not knowing. Now it looks like knowing what needs to be known, yet doing nothing about it. We scroll past the country the way we walk past someone we\'ve decided not to see.',
      },
      {
        kind: 'mirror',
        now: 'A comment under a news clip: "This is why we can\'t progress. Walang disiplina. Tamad kasi." Two thousand likes.',
        once: 'A young essayist abroad, hearing the same verdict from people who had never set foot on the islands. Instead of denying it or agreeing, he asked a better question: if a people seem to have stopped trying, what made trying pointless? Effort that was taxed, seized, or mocked. Rewards that never came. Apathy, he argued, is not a trait. It is a response.',
      },
      {
        kind: 'p',
        text: 'That shift matters more than it seems. If indifference is in the blood, there is nothing to be done. But if it\'s learned through each broken promise and each effort that went nowhere, then it can be unlearned. Slowly. Locally. One habit at a time.',
      },
      { kind: 'photo', photo: 'madrid' },
      {
        kind: 'p',
        text: 'Look at them: young men in coats in a cold city, putting out a small newspaper that few people back home were allowed to read. They argued constantly — with the authorities, and eventually with one another. Their own circle split over who ought to lead it. It was not tidy. It was civic life: noisy, petty, and real.',
      },
      {
        kind: 'p',
        text: 'That\'s the part we skip. Engagement isn\'t a feeling you have about the news. It is the slower, boring work of showing up in the rooms where the decisions actually get made.',
      },
      {
        kind: 'pause',
        text: 'The feed asks how you feel. An assembly, even a barangay\'s, asks what you\'ll do.',
      },
    ],
    reflection:
      'What issues made you angry this month? What is the smallest thing you could physically show up for because of any of them?',
    practice: [
      'Attend your barangay assembly. It meets at least twice a year and is open to every resident.',
      'If you are 15 to 30, you belong to your Katipunan ng Kabataan. Find out what your SK spent last year.',
      'Before sharing a post, wait ten minutes and check one other source.',
    ],
    sources: [
      'The question about "indolence": the essay "Sobre la indolencia de los filipinos," serialized in La Solidaridad in 1890.',
      'The newspaper and the split: La Solidaridad (1889–1895), published by Filipino reformists in Barcelona and Madrid.',
      'Barangay assemblies: Local Government Code of 1991 (RA 7160). Katipunan ng Kabataan membership: SK Reform Act of 2015 (RA 10742).',
    ],
  },
  {
    slug: 'the-footnotes',
    number: '04',
    kicker: 'The ways to love a country',
    title: 'The Footnotes',
    dek: 'Flattery isn\'t patriotism.\nNeither is forgetting.',
    tone: 'mist',
    art: null,
    coverPhoto: 'blumentritt',
    minutes: 5,
    blocks: [
      {
        kind: 'p',
        text: 'A video is going around. Slick, confident, set to swelling music. It tells you that a certain era was golden, that the people who say they suffered through it are lying, and that everything you learned in school was propaganda.',
      },
      {
        kind: 'p',
        text: 'It has millions of views. The historian who disagrees has a thread with forty likes.',
      },
      {
        kind: 'pause',
        text: 'Whoever tells the story of the past gets to decide what the present thinks it deserves.',
      },
      {
        kind: 'p',
        text: 'There is an old instinct, still very much alive, that says a nation\'s past should make us proud, and so anything unflattering must be an attack. That instinct has it backwards.',
      },
      {
        kind: 'p',
        text: 'A country you can only love by lying about it is not one you love. It is one you are performing.',
      },
      {
        kind: 'mirror',
        now: 'Group chats forwarding history that are inaccurate or never even happened. Lessons rewritten by whoever is in office. A generation unsure which of their grandparents\' stories were true.',
        once: 'A man in a London reading room, copying out by hand a Spanish account of the islands written almost three centuries before, then filling the margins with his own notes, page after page, arguing with it. The people before the ships, he insisted, had writing, trade, law, and music. They were not blank pages waiting to be filled.',
      },
      {
        kind: 'p',
        text: 'He overcorrected, sometimes. A few of his notes were more hopeful than the evidence allowed. That is worth saying plainly, because it is the point: the goal was never a perfect, flattering past. It was a past that belonged to the people who had lived it — argued over, checked, and corrected again.',
      },
      { kind: 'photo', photo: 'blumentritt' },
      {
        kind: 'p',
        text: 'His closest reader was a schoolteacher in Bohemia who had never seen the islands, and never would. They wrote to each other for a decade. The foreigner wrote the preface; the native wrote the notes. Neither pretended to be the other. It is a decent model for how truth gets made: across distance, through disagreement, in writing that anyone can check.',
      },
      {
        kind: 'pause',
        text: 'Love that cannot survive a footnote isn\'t love. It\'s loyalty to a narrative.',
      },
    ],
    reflection:
      'What do you believe about your country\'s past that you have never checked with a primary source?',
    practice: [
      'When a viral history claim reaches your feed, look it up with an established fact-checker such as VERA Files before reacting.',
      'Ask an elder in your family what they actually lived through and write it down.',
      'Read one primary source this month: a diary, a letter, a court record, a newspaper from the time.',
    ],
    sources: [
      'The annotated book: Antonio de Morga, Sucesos de las Islas Filipinas (Mexico, 1609), annotated and republished in Paris in 1890, with a preface by Ferdinand Blumentritt.',
      'The correspondence: letters exchanged between 1886 and 1896, later collected and published by the José Rizal National Centennial Commission.',
    ],
  },
  {
    slug: 'the-distance',
    number: '05',
    kicker: 'Loving a place you had to leave',
    title: 'The Distance',
    dek: 'Some people serve a country by staying.\nOthers by coming back changed.',
    tone: 'apricot',
    art: null,
    coverPhoto: 'leonor',
    minutes: 5,
    blocks: [
      {
        kind: 'p',
        text: 'A phone is propped against the rice dispenser. On the screen, a woman in scrubs is eating what, for her, is breakfast at the end of a night shift. Her children are getting ready for school. She is helping with a math problem across six time zones.',
      },
      {
        kind: 'p',
        text: 'Nobody in that kitchen would call what she does patriotism. She would laugh at the word. She is keeping a family afloat in the only way the economy offered her.',
      },
      {
        kind: 'pause',
        text: 'And yet.' 
      },
      {
        kind: 'p',
        text: 'By most estimates, around ten million Filipinos live or work abroad. The country trains nurses for other countries\' hospitals. It sends out all sorts of professionals: engineers, seafarers, caregivers, teachers, and much, much more. Then it wonders aloud why things at home don\'t get better.',
      },
      {
        kind: 'mirror',
        now: 'A nursing graduate weighing a contract abroad against a salary at home that won\'t cover rent. Guilt either way.',
        once: 'A young man, 20, boarding a ship without telling his parents, carrying a plan only his older brother knew. He would spend most of his adult life abroad — studying, writing, arguing — and nearly all of it thinking about home. He never confused leaving with abandoning.',
      },
      { kind: 'photo', photo: 'leonor' },
      {
        kind: 'p',
        text: 'Distance has its costs, and some of them never get repaid. There was a young woman in the province whose letters, for years, were intercepted before they could reach him, and vice versa. By the time either understood, she had married someone else. No ideal makes up for that kind of loss, and it would be dishonest to pretend otherwise.',
      },
      {
        kind: 'p',
        text: 'What distance can do is let you see home clearly. Many of the sharpest critiques of this country were written by people who had left it, because from far away, the things everyone at home had learned to stop noticing became impossible to ignore.',
      },
      {
        kind: 'pause',
        text: 'Loving your country means working with what you\'ve seen, regardless of where you stand.',
      },
    ],
    reflection:
      'If you have left, or have plans to, what would it mean to bring something back that isn\'t money?',
    practice: [
      'If you live abroad, register as an overseas voter with COMELEC — and then actually vote.',
      'Mentor one student back home, online, in a field you\'ve learned abroad.',
      'Give to or volunteer with an organization in your hometown, not only a national one.',
    ],
    sources: [
      'The quiet departure: he sailed for Spain in May 1882, with only his brother Paciano and a few relatives aware of the plan.',
      'The intercepted letters: the correspondence with Leonor Rivera in the 1880s; she married Henry Kipping in 1890.',
      'The figure of ten million: stock estimates of overseas Filipinos by the Commission on Filipinos Overseas.',
    ],
  },
]

export function getEssay(slug: string) {
  return essays.find((e) => e.slug === slug)
}
