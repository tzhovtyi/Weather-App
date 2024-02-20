const colorRange = [
  '#193C5E',
  '#7FCFFF',
  '#BD83FF',
  '#5E2594',
  '#334BFF',
  '#1BDEE2',
  '#A6FF01',
  '#FF79AF',
  '#AF1400',
  '#FF774D'
]

export const createGradientByTemp = (temp: number): string => {
  const idx = Math.max(0, Math.min(8, Math.ceil((temp + 31) / 10)))
  console.log(idx)
  const colors = colorRange.slice(idx, idx + 3)
  console.log(colors)
  return `linear-gradient(130deg, ${colors[0]}  0%, ${colors[1]}  50%, ${colors[2]}  100%)`
}
