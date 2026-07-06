interface LogoSquareProps {
  /** Single letter or emoji. */
  logo: string
}

export default function LogoSquare({ logo }: LogoSquareProps) {
  return (
    <div
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-square text-[15px] font-semibold text-ink-muted"
    >
      {logo}
    </div>
  )
}
