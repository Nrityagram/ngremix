export interface SiteMetadata {
  title: string
  url: string
  language: string
  description: string
  author: {
    name: string
    email: string
    url: string
  }
  OGImage: string
}

export interface MastheadImage {
  imgSource: string
  credit?: string
  alt?: string
}

export interface ContentBlock {
  content: string
  bgcolour?: string
  anchorId?: string
}

export interface PageSettings {
  slider: boolean
  youtube: boolean
  marquee: boolean
  scrollToTop: boolean
  vanillaSlider: boolean
  gismap: boolean
  radio: boolean
  timeline: boolean
}

export interface SanityPage {
  title: string
  slug: string
  mastheadImageDesk?: SanityImageAsset
  mastheadImageDeskCredit?: string
  mastheadImageDeskAlt?: string
  mastheadImagesCredit?: string[]
  mastheadImagesScreenTypes?: string[]
  mastheadImageSources?: SanityImageAsset[]
  contentBlocks?: SanityContentBlock[]
}

export interface SanityImageAsset {
  _type: string
  asset: {
    _ref: string
    _type: string
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface SanityContentBlock {
  bgColour?: string
  anchorId?: string
  content: SanityBlockContent[]
}

export interface SanityBlockContent {
  _type: string
  _key: string
  children?: SanityBlockChild[]
  markDefs?: SanityMarkDef[]
  style?: string
  level?: number
  listItem?: string
  cards?: SanityCard[]
  slug?: { current: string }
  modalId?: string
  modalWindow?: SanityModalWindow
  options?: SanityRadioOption[]
}

export interface SanityBlockChild {
  _type: string
  _key: string
  marks?: string[]
  text?: string
}

export interface SanityMarkDef {
  _type: string
  _key: string
  href?: string
  slug?: { current: string }
  modalId?: string
  modalWindow?: SanityModalWindow
}

export interface SanityCard {
  credit?: string
  alt?: string
  slug?: { current: string }
  cardTitle?: string
  cardSubtitle?: string
}

export interface SanityModalWindow {
  modalTitle?: string
  content?: SanityBlockContent[]
}

export interface SanityRadioOption {
  slug?: { current: string }
}

export interface NavigationItem {
  name: string
  href: string
  children?: NavigationSubItem[]
}

export interface NavigationSubItem {
  name: string
  href: string
  children?: NavigationSubItem[]
}
