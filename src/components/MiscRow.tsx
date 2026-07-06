import type { MiscItem } from '../data/portfolio'
import { ArrowUpRightIcon } from './icons'

interface MiscRowProps {
  item: MiscItem
}

export default function MiscRow({ item }: MiscRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="min-w-0">
        <span className="text-[15px] font-medium text-ink">{item.title}</span>
        {item.description && (
          <p className="mt-0.5 text-[14px] text-ink-muted">{item.description}</p>
        )}
      </div>
      {item.links && item.links.length > 0 && (
        <div className="flex shrink-0 items-center gap-2.5">
          {item.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-[13px] text-ink-faint transition-colors duration-150 hover:text-ink"
            >
              {link.label}
              <ArrowUpRightIcon className="h-2.5 w-2.5" />
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
