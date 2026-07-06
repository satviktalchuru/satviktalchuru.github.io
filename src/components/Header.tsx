interface HeaderProps {
  name: string
  tagline: string
  bio: string
}

export default function Header({ name, tagline, bio }: HeaderProps) {
  return (
    <header>
      <h1 className="text-[33px] font-bold leading-[1.05] tracking-[-0.035em] text-black sm:text-[42px]">
        {name}
      </h1>
      <p className="mt-3 text-[16px] leading-[1.5] tracking-[-0.005em] text-ink">{tagline}</p>
      <p className="mt-1 text-[13px] leading-[1.55] text-ink-muted">{bio}</p>
    </header>
  )
}
