import type { ProjectItem } from '../data/portfolio'
import LogoSquare from './LogoSquare'
import BadgePill from './BadgePill'
import { ArrowUpRightIcon } from './icons'

interface ProjectRowProps {
  item: ProjectItem
}

function RowContent({ item }: ProjectRowProps) {
  return (
    <>
      <div className="flex min-w-0 items-center gap-3.5">
        <LogoSquare logo={item.logo} />
        <div className="min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="text-[15px] font-medium text-ink transition-colors group-hover:text-black">
              {item.title}
            </span>
            {item.badge && <BadgePill badge={item.badge} />}
          </div>
          <span className="mt-0.5 block text-[14px] text-ink-muted">{item.description}</span>
        </div>
      </div>
      {item.href && (
        <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 text-datestamp transition-colors duration-150 group-hover:text-ink-muted" />
      )}
    </>
  )
}

export default function ProjectRow({ item }: ProjectRowProps) {
  if (!item.href) {
    return (
      <div className="flex items-center justify-between gap-4 py-3">
        <RowContent item={item} />
      </div>
    )
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group -mx-3 flex items-center justify-between gap-4 rounded-lg px-3 py-3 transition-colors duration-150 hover:bg-hover-wash"
    >
      <RowContent item={item} />
    </a>
  )
}
