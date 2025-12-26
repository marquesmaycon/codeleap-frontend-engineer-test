import { EditIcon, TrashIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Post } from "@/features/posts/types"
import { useConfirm } from "@/hooks/use-confirm"
import { capitalizeWords } from "@/lib/utils"

import { Card, CardAction, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { useDeletePost } from "../hooks/use-delete-post"

type PostCardProps = Post & {
  onEdit: () => void
}

export default function PostCard({
  id,
  username,
  title,
  content,
  created_datetime,
  onEdit
}: PostCardProps) {
  const { mutateAsync: deletePost } = useDeletePost()

  const [ConfirmDialog, confirm] = useConfirm({
    title: "Are you sure you want to delete this item?",
    actionLabel: "Delete",
    variant: "destructive"
  })

  async function handleDeletePost() {
    const ok = await confirm()
    if (!ok) return
    await deletePost(id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardAction className="flex items-center gap-6">
          <Button
            size="icon-lg"
            variant="ghost"
            className="group"
            onClick={() => handleDeletePost()}
          >
            <TrashIcon className="group-hover:text-destructive size-7.5 text-white transition-colors" />
          </Button>
          <Button size="icon-lg" variant="ghost" className="group" onClick={() => onEdit()}>
            <EditIcon className="size-7.5 text-white transition-colors group-hover:text-sky-400" />
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
      <ConfirmDialog />
    </Card>
  )
}
