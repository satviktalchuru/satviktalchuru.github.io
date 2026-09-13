import type { MiscItem } from '../data/portfolio'
import InlineLinks from './InlineLinks'

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
        <div className="shrink-0">
          <InlineLinks links={item.links} />
        </div>
      )}
    </div>
  )
}
