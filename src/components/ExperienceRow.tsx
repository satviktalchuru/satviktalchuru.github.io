import type { ExperienceItem } from '../data/portfolio'
import LogoSquare from './LogoSquare'
import BadgePill from './BadgePill'
import InlineLinks from './InlineLinks'

interface ExperienceRowProps {
  item: ExperienceItem
}

export default function ExperienceRow({ item }: ExperienceRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="flex min-w-0 items-center gap-3.5">
        <LogoSquare logo={item.logo} />
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="text-[15px] font-medium text-ink">{item.company}</span>
            {item.badge && <BadgePill badge={item.badge} />}
            {item.links && <InlineLinks links={item.links} />}
          </div>
          <span className="mt-0.5 block text-[14px] text-ink-soft">{item.role}</span>
        </div>
      </div>
      {item.dates && (
        <span className="shrink-0 font-mono text-[12px] tabular-nums text-datestamp">
          {item.dates}
        </span>
      )}
    </div>
  )
}
