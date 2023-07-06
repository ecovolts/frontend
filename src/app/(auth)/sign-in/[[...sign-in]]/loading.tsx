import { Skeleton } from '@/components/ui/feedback/Skeleton'

export default function Loading() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center p-6">
      <Skeleton className="h-[30px] w-[334px] rounded-md bg-zinc-300" />
    </div>
  )
}
