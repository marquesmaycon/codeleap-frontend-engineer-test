import { AlertCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function PostNotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
      <AlertCircle className="text-primary" />
      <h3 className="flex items-center gap-2">Post not found</h3>
      <Button variant="link" asChild>
        <Link href="/" className="flex items-center gap-2 text-sm">
          <ChevronLeft />
          Go back to home page
        </Link>
      </Button>
    </div>
  )
}
