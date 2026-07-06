// ============================================================================
//  PORTFOLIO CONTENT — edit everything on the site from this one file.
//  Every section of the page reads from `portfolioData` below.
// ============================================================================

export type SocialPlatform = 'linkedin' | 'github' | 'x'

export interface Social {
  platform: SocialPlatform
  href: string
}

export interface Badge {
  text: string
  /** green = active/new, yellow = milestone (e.g. Acquired), gray = neutral */
  color: 'green' | 'yellow' | 'gray'
}

export interface ExperienceItem {
  /** Single letter or emoji shown in the small rounded square. */
  logo: string
  company: string
  role: string
  dates: string
  badge?: Badge
}

export interface ProjectItem {
  /** Emoji shown in the small rounded square. */
  logo: string
  title: string
  description: string
  href?: string
  badge?: Badge
}

export interface MiscItem {
  title: string
  description?: string
  links?: { label: string; href: string }[]
}

export interface PortfolioData {
  name: string
  tagline: string
  bio: string
  email: string
  socials: Social[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  misc: MiscItem[]
}

export const portfolioData: PortfolioData = {
  name: 'Satvik Talchuru',
  tagline: 'I build AI and cloud systems that ship.',
  bio: 'Statistics & Data Science + Economics at UC Santa Barbara.',
  email: 'satvik.talchuru@gmail.com',

  socials: [
    { platform: 'linkedin', href: 'https://www.linkedin.com/in/satviktalchuru/' },
    { platform: 'github', href: 'https://github.com/satviktalchuru' },
  ],

  experience: [
    {
      logo: 'S',
      company: 'Siemens',
      role: 'AI Solutions Engineer Intern',
      dates: '2025',
    },
    {
      logo: 'U',
      company: 'UCSB Information Technology',
      role: 'Cloud Solutions Architect Intern',
      dates: '2025 – 26',
    },
    {
      logo: 'U',
      company: 'UCSB Information Technology',
      role: 'ServiceNow Developer',
      dates: '2024 –',
      badge: { text: 'Current', color: 'green' },
    },
  ],

  projects: [
    {
      logo: '🏭',
      title: 'MES Digital Maturity Assessment',
      description: 'AI-assisted maturity scoring for manufacturing orgs',
      href: 'https://github.com/satviktalchuru',
    },
    {
      logo: '📦',
      title: 'Inventory Demand Forecasting',
      description: 'Time-series pipeline for SKU restock decisions',
      href: 'https://github.com/satviktalchuru',
    },
    {
      logo: '🔐',
      title: 'IAM Risk Scoring',
      description: 'Anomaly detection over 100k+ login events',
      href: 'https://github.com/satviktalchuru',
    },
  ],

  misc: [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      description: 'Plus AWS Cloud Practitioner · 2025',
    },
    {
      title: 'President, Gaucho Sports Analytics',
      description: 'Student-run sports analytics org at UC Santa Barbara',
    },
    {
      title: 'Director of Operations, Data Science Club',
      description: 'UC Santa Barbara',
    },
  ],
}
