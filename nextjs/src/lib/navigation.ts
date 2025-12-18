import type { NavigationItem } from '@/types'

export const navigationItems: NavigationItem[] = [
  {
    name: 'About',
    href: '#',
    children: [
      { name: 'About Us', href: '/about' },
      { name: 'History', href: '/history' },
      {
        name: 'Space',
        href: '/space',
        children: [
          { name: 'Temple', href: '/space/#temple' },
          { name: 'Yoga Centre', href: '/space/#yoga' },
          { name: 'Odissi Gurukul', href: '/space/#odissi' },
          { name: 'Dining Hall', href: '/space/#dining' },
          { name: 'Cottages', href: '/space/#cottages' },
          { name: 'Kula', href: '/space/#kula' },
          { name: 'Amphitheatre', href: '/space/#amphitheatre' },
        ],
      },
      {
        name: 'Future',
        href: '/future',
        children: [
          { name: 'Performing Arts Centre', href: '/future/#arts-centre' },
          { name: 'Nrityagyān Resource Centre', href: '/future/#resource-centre' },
        ],
      },
      { name: 'Board of Trustees', href: '/board' },
    ],
  },
  {
    name: 'Visit',
    href: '#',
    children: [
      { name: 'Visit Us', href: '/visit' },
      { name: 'Find Your Way', href: '/findyourway' },
      { name: 'Virtual Tour', href: '/virtualtour' },
    ],
  },
  {
    name: 'Support',
    href: '#',
    children: [
      { name: 'Support Us', href: '/support' },
      { name: 'Donate', href: '/donate' },
      { name: 'Support the Corpus Fund', href: '/corpusfund' },
      { name: 'Other Ways to Give', href: '/otherwaystogive' },
      { name: 'Sponsorship', href: '/sponsorship' },
    ],
  },
  {
    name: 'Press',
    href: '/press',
  },
  {
    name: 'Newsletter',
    href: '/subscribe',
  },
]

export const navigationItemsSecondRow: NavigationItem[] = [
  {
    name: 'Ensemble',
    href: '#',
    children: [
      { name: 'Nrityagram Ensemble', href: '/ensemble' },
      {
        name: 'Répertoire',
        href: '/repertoire',
        children: [
          { name: 'Śrī: In Search of the Goddess', href: '/repertoire/#sri' },
          { name: 'Ansh', href: '/repertoire/#ansh' },
          { name: 'Sacred Space', href: '/repertoire/#sspace' },
          { name: 'Pratimā: Reflection', href: '/repertoire/#pratima' },
          { name: 'Śriyaḥ', href: '/repertoire/#sriyah' },
          { name: 'Saṃhāra', href: '/repertoire/#samhara' },
          { name: 'Saṃyoga', href: '/repertoire/#samyoga' },
          { name: 'Songs of Love and Longing', href: '/repertoire/#lovelong' },
          { name: 'Yadunandana', href: '/repertoire/#yadu' },
          { name: 'Āhuti', href: '/repertoire/#ahuti' },
          { name: 'Vinati: Songs from the Gita Govinda', href: '/repertoire/#vinati' },
          { name: 'Āhuti Relived', href: '/repertoire/#ahutirelived' },
        ],
      },
      { name: 'Performances', href: '/performancemap' },
    ],
  },
  {
    name: 'School',
    href: '#',
    children: [
      { name: 'Nrityagram Gurukula', href: '/gurukula' },
      { name: 'Dance Professionals', href: '/danceprofessional' },
      {
        name: 'Dance Unlimited',
        href: '/danceunlimited',
        children: [
          { name: 'Residential Workshops', href: '/danceunlimited/#residential' },
          { name: 'Non-Residential Training', href: '/danceunlimited/#parttime' },
        ],
      },
      { name: 'Fellowships', href: '/fellowships' },
    ],
  },
  {
    name: 'Community',
    href: '#',
    children: [
      { name: 'Nrityagram Community', href: '/community' },
      { name: 'Village Outreach', href: '/village-outreach' },
      {
        name: 'Popularising the Arts',
        href: '/popularising-the-arts',
        children: [
          { name: 'Dance Awareness', href: '/popularising-the-arts/#danceaware' },
          { name: 'Informance', href: '/popularising-the-arts/#informance' },
          { name: 'Ajji Kathegalu', href: '/popularising-the-arts/#ajji' },
          { name: 'Vasantahabba', href: '/popularising-the-arts/#vasantahabba' },
        ],
      },
      { name: "Kula: Artistes' Residence", href: '/kula-artistes-residence' },
      { name: 'Building a Dance Community', href: '/building-a-dance-community' },
    ],
  },
  {
    name: 'People',
    href: '#',
    children: [
      { name: 'Protima Gauri', href: '/protima' },
      { name: 'Surupa Sen', href: '/surupa' },
      { name: 'Pavithra Reddy', href: '/pavithra' },
      { name: 'Lynne Fernandez', href: '/lynne' },
    ],
  },
]
