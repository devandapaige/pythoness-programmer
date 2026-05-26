import { sessionComparison } from '../data/siteCopy'

export default function SessionComparison() {
  const { rows, prices } = sessionComparison

  return (
    <div className="mb-8 md:mb-10 overflow-x-auto">
      <h3 className="text-2xl font-display text-center mb-4 md:mb-6 text-brand-cream">{sessionComparison.title}</h3>
      <table className="w-full min-w-[640px] text-left border-collapse">
        <thead>
          <tr className="border-b border-white/20">
            <th className="py-3 pr-4 text-brand-cream/70 font-normal w-[28%]" scope="col" />
            <th className="py-3 px-4 text-brand-green-accent font-display" scope="col">
              Async {prices.async}
            </th>
            <th className="py-3 px-4 text-brand-cream font-display" scope="col">
              Live 20 {prices.live20}
            </th>
            <th className="py-3 pl-4 text-brand-cream font-display" scope="col">
              Deep 60 {prices.deep60}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-white/10">
              <th className="py-3 md:py-4 pr-4 text-brand-cream/80 font-medium" scope="row">
                {row.label}
              </th>
              <td className="py-3 md:py-4 px-4 text-brand-cream/90">{row.async}</td>
              <td className="py-3 md:py-4 px-4 text-brand-cream/90">{row.live20}</td>
              <td className="py-3 md:py-4 pl-4 text-brand-cream/90">{row.deep60}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
