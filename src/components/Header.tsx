interface HeaderProps {
  name: string
  tagline: string
  headshot?: string
}

export default function Header({ name, tagline, headshot }: HeaderProps) {
  return (
    <header>
      <div className="flex items-center gap-4 sm:gap-5">
        {headshot && (
          <img
            src={headshot}
            alt={`Photo of ${name}`}
            width="64"
            height="64"
            fetchPriority="high"
            className="h-14 w-14 shrink-0 rounded-full object-cover ring-1 ring-black/[0.06] sm:h-16 sm:w-16"
          />
        )}
        <h1 className="text-[33px] font-bold leading-[1.05] tracking-[-0.035em] text-black sm:text-[42px]">
          {name}
        </h1>
      </div>
      <p className="mt-3 text-[16px] leading-[1.5] tracking-[-0.005em] text-ink">{tagline}</p>
    </header>
  )
}
