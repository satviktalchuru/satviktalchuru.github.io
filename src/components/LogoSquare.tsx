interface LogoSquareProps {
  /** Image path (starts with '/' or 'http'), single letter, or emoji. */
  logo: string
}

const isImage = (logo: string) => logo.startsWith('/') || logo.startsWith('http')

export default function LogoSquare({ logo }: LogoSquareProps) {
  return (
    <div
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-square text-[15px] font-semibold text-ink-muted"
    >
      {isImage(logo) ? (
        <img src={logo} alt="" width="36" height="36" className="h-full w-full object-contain p-1" />
      ) : (
        logo
      )}
    </div>
  )
}
