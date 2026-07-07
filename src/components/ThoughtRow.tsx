import type { ThoughtItem } from '../data/portfolio'
import { ArrowUpRightIcon } from './icons'

interface ThoughtRowProps {
  item: ThoughtItem
}

export default function ThoughtRow({ item }: ThoughtRowProps) {
  const content = (
    <>
      <div className="min-w-0">
        <span className="text-[15px] font-medium text-ink transition-colors group-hover:text-black">
          {item.title}
        </span>
        {item.date && <span className="ml-2 text-[13px] text-ink-muted">{item.date}</span>}
      </div>
      {item.href && (
        <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 text-datestamp transition-colors duration-150 group-hover:text-ink-muted" />
      )}
    </>
  )

  if (!item.href) {
    return <div className="flex items-center justify-between gap-4 py-3">{content}</div>
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group -mx-3 flex items-center justify-between gap-4 rounded-lg px-3 py-3 transition-colors duration-150 hover:bg-hover-wash"
    >
      {content}
    </a>
  )
}
