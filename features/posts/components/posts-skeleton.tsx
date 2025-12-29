import { Skeleton } from "@/components/ui/skeleton"

export function PostsSkeleton() {
  return (
    <div className="max-h-full space-y-6 overflow-hidden py-6">
      <Skeleton className="h-74 w-full" />
      <Skeleton className="h-74 w-full" />
    </div>
  )
}
