import type { Social, SocialPlatform } from '../data/portfolio'
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, PhoneIcon } from './icons'

const platformIcons: Record<SocialPlatform, { icon: typeof GitHubIcon; label: string }> = {
  linkedin: { icon: LinkedInIcon, label: 'LinkedIn' },
  github: { icon: GitHubIcon, label: 'GitHub' },
  phone: { icon: PhoneIcon, label: 'Call' },
}

interface DockProps {
  email: string
  socials: Social[]
}

export default function Dock({ email, socials }: DockProps) {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-full max-w-[540px] -translate-x-1/2 px-6">
      <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-3 py-2 shadow-[0_2px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] backdrop-blur-xl">
        <div className="flex items-center gap-0.5">
          {socials.map((social) => {
            const { icon: Icon, label } = platformIcons[social.platform]
            const isExternal = social.href.startsWith('http')
            return (
              <a
                key={social.platform}
                href={social.href}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-xl text-ink-faint transition-all duration-150 hover:bg-black/[0.04] hover:text-ink"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
        <a
          href={`mailto:${email}`}
          className="flex h-9 items-center gap-1.5 rounded-xl px-4 text-[13px] font-medium text-ink-muted transition-all duration-150 hover:bg-black/[0.04] hover:text-ink"
        >
          Let&apos;s chat
          <ArrowUpRightIcon className="h-3 w-3" />
        </a>
      </div>
    </div>
  )
}
