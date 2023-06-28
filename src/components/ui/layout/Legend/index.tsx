interface LegendProps {
  active: string
  color: string
  id: string
  handleSelectLegend: (id: string) => void
  label: string
  value: number
  total: number
}

export function Legend({
  active,
  color,
  id,
  handleSelectLegend,
  label,
  value,
  total,
}: LegendProps) {
  return (
    <div
      className={`active-legend flex w-full rounded-md ${
        id === active ? 'border-l-24' : 'border-l-4'
      } bg-gray-100/50 transition-all duration-150 ease-out hover:border-l-24`}
      style={{
        borderLeftColor: `${color}`,
      }}
      data-state={id === active ? 'active' : 'inactive'}
    >
      <button
        className={`flex w-full rounded-md bg-gray-100/50 p-5`}
        onClick={() => handleSelectLegend(id)}
      >
        <div className="flex w-full items-center justify-between">
          <span className="text-base">{label}</span>
          <span className="text-sm">{Math.round((value / total) * 100)}%</span>
        </div>
      </button>
    </div>
  )
}
