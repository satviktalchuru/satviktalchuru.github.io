import type { Badge } from '../data/portfolio'

const badgeColors: Record<Badge['color'], string> = {
  green: 'text-[#34785A] bg-[#E8F5EE]',
  yellow: 'text-[#946800] bg-[#fef3cd]',
  gray: 'text-[#888] bg-square',
}

interface BadgePillProps {
  badge: Badge
}

export default function BadgePill({ badge }: BadgePillProps) {
  return (
    <span
      className={`rounded-full px-2 py-[2px] text-[11px] font-medium leading-none ${badgeColors[badge.color]}`}
    >
      {badge.text}
    </span>
  )
}
