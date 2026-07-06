import type { ReactNode } from 'react'

interface SectionProps {
  label: string
  children: ReactNode
}

export default function Section({ label, children }: SectionProps) {
  return (
    <section className="mt-16 first-of-type:mt-20">
      <p className="mb-5 font-mono text-[13px] tracking-tight text-label">{label}</p>
      <div className="flex flex-col">{children}</div>
    </section>
  )
}
