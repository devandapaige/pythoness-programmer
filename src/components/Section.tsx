interface SectionProps {
  id?: string
  title: string
  children: React.ReactNode
  className?: string
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 md:px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
        {children}
      </div>
    </section>
  )
} 