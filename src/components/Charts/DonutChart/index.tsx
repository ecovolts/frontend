import { VictoryPie } from 'victory'

interface DonutChartProps {
  data: {
    id: string
    label: string
    value: number
    color: string
  }[]
  colors: string[]
  selectedLegend: string
  total: number
}

export function DonutChart({
  data,
  colors,
  selectedLegend,
  total,
}: DonutChartProps) {
  return (
    <div id="chart" className="relative flex max-h-max w-full max-w-[55rem]">
      <VictoryPie
        innerRadius={90}
        animate={{
          easing: 'elastic',
          onLoad: { duration: 1000 },
        }}
        padAngle={data[0].value > 0 ? 2 : 0}
        data={data}
        x="label"
        y="value"
        colorScale={colors}
        style={{
          labels: {
            display: 'none',
          },
          data: {
            strokeOpacity: 0.5,
            strokeWidth: 10,
            fillOpacity: ({ datum }) =>
              datum.id === selectedLegend || selectedLegend === '' ? 1 : 0.3,
            stroke: ({ datum }) =>
              datum.id === selectedLegend ? datum.color : 'none',
          },
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2
        -translate-y-1/2 flex-col items-center"
      >
        <span className="text-2xl laptop:text-3xl desktop:text-3xl">Total</span>
        <span className="text-md text-gray-400 laptop:text-xl desktop:text-xl">
          {total}
        </span>
      </div>
    </div>
  )
}
