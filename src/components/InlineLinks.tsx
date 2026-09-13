import type { LinkItem } from '../data/portfolio'
import { ArrowUpRightIcon } from './icons'

interface InlineLinksProps {
  links: LinkItem[]
}

export default function InlineLinks({ links }: InlineLinksProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 text-[13px] text-ink-muted transition-colors duration-150 hover:text-ink"
        >
          {link.label}
          <ArrowUpRightIcon className="h-2.5 w-2.5" />
        </a>
      ))}
    </span>
  )
}
