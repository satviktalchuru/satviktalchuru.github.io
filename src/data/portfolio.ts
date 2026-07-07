// ============================================================================
//  PORTFOLIO CONTENT — edit everything on the site from this one file.
//  Every section of the page reads from `portfolioData` below.
// ============================================================================

export type SocialPlatform = 'linkedin' | 'github' | 'phone'

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
  /** Image path (e.g. '/logos/workiva.png'), single letter, or emoji. */
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

export interface ThoughtItem {
  title: string
  date?: string
  href?: string
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
  thoughts: ThoughtItem[]
  /** Shown under Thoughts when the list above is empty. */
  thoughtsPlaceholder: string
  misc: MiscItem[]
}

export const portfolioData: PortfolioData = {
  name: 'Satvik Talchuru',
  tagline: 'New grad. I build reliable systems.',
  bio: 'Statistics & Data Science + Economics at UC Santa Barbara.',
  email: 'satvik.talchuru@gmail.com',

  socials: [
    { platform: 'linkedin', href: 'https://www.linkedin.com/in/satviktalchuru/' },
    { platform: 'github', href: 'https://github.com/satviktalchuru' },
    { platform: 'phone', href: 'tel:9259185702' },
  ],

  experience: [
    {
      logo: '/logos/workiva.png',
      company: 'Workiva',
      role: 'Software Engineer Intern, Product SRE',
      dates: 'Jun 2026 –',
      badge: { text: 'Current', color: 'green' },
    },
    {
      logo: '/logos/siemens.png',
      company: 'Siemens',
      role: 'AI Solutions Engineer Intern',
      dates: 'Jun 2025 – Dec 2025',
    },
    {
      logo: '/logos/ucsb.png',
      company: 'UCSB Information Technology',
      role: 'Cloud Solutions Architect Intern',
      dates: 'Mar 2025 – Mar 2026',
    },
    {
      logo: '/logos/ucsb.png',
      company: 'UCSB Information Technology',
      role: 'ServiceNow Developer',
      dates: 'Aug 2024 –',
    },
  ],

  projects: [
    {
      logo: '☕',
      title: 'brew',
      description: 'Coffee ranking iOS app with ELO-based taste profiles',
      href: 'https://github.com/satviktalchuru/brew',
    },
    {
      logo: '👁️',
      title: 'perceptionops',
      description: 'Ship/no-ship release gating for AV perception models',
      href: 'https://github.com/satviktalchuru/perceptionops',
    },
    {
      logo: '📜',
      title: 'certflow.ai',
      description: 'TLS certificate reliability & ownership platform for SRE teams',
      href: 'https://github.com/satviktalchuru/certflow-ai',
    },
    {
      logo: '📊',
      title: 'maturitykit',
      description: 'Digital maturity assessments with LLM-generated roadmaps',
      href: 'https://github.com/satviktalchuru/maturity-kit',
    },
  ],

  thoughts: [],
  thoughtsPlaceholder: 'More to come.',

  misc: [{ title: '📚 🏍️ 📸 🏃' }],
}
