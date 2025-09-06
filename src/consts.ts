import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'context',
  description:
    'homepage for my thoughts and things I find interesting.',
  href: 'https://n1rna.net',
  author: 'nima',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [

]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/n1rna',
    label: 'GitHub',
  },
  {
    href: 'https://x.com/_n1rna',
    label: 'Twitter',
  },
  {
    href: 'mailto:hello@n1rna.net',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
