export function DotPulse() {
  return (
    <span className="relative -left-2 -top-[2px] flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
    </span>
  )
}
