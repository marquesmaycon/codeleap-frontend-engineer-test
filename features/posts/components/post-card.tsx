import { EditIcon, TrashIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Post } from "@/features/posts/types"
import { capitalizeWords } from "@/lib/utils"

import { Card, CardAction, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"

type PostCardProps = Post

export default function PostCard({ username, title, content, created_datetime }: PostCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardAction className="flex items-center gap-6">
          <Button size="icon-lg" variant="ghost">
            <TrashIcon className="size-7.5 text-white" />
          </Button>
          <Button size="icon-lg" variant="ghost">
            <EditIcon className="size-7.5 text-white" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#777777]">@{capitalizeWords(username)}</h3>
          <span className="text-right text-[#777777]">{created_datetime}</span>
        </div>
        <p className="whitespace-pre-line">{content}</p>
      </CardContent>
    </Card>
  )
}
