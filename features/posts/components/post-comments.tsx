import { Trash } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { capitalizeWords } from "@/lib/utils"

import { useCommentPost } from "../hooks/use-comment-post"
import { useDeleteComment } from "../hooks/use-delete-comment"
import type { Post } from "../types"

type PostCommentsProps = Pick<Post, "id" | "comments">

export default function PostComments({ id, comments }: PostCommentsProps) {
  const [comment, setComment] = useState("")

  const { mutateAsync: commentPost, isPending } = useCommentPost()
  const { mutateAsync: deleteComment } = useDeleteComment()

  async function handleCommentPost() {
    await commentPost({ id, comment })
    setComment("")
  }

  return (
    <div>
      <ul className="pt-8">
        {comments?.map((c, index) => (
          <li key={index} className="relative mb-8 border-b border-gray-200 pb-2">
            <p className="text-muted-foreground text-sm font-semibold">
              @{capitalizeWords(c.username)}
            </p>
            <p className="pr-12 text-sm whitespace-pre-line">{c.comment}</p>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => deleteComment({ id, comment: c.comment, username: c.username })}
            >
              <Trash />
            </Button>
          </li>
        ))}
      </ul>
      <form
        className="mt-4 flex flex-col gap-2"
        onSubmit={async (e) => {
          e.preventDefault()
          await handleCommentPost()
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="comment">Send a comment</Label>
          <Textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-fit" loading={isPending} disabled={!comment.trim()}>
          Send
        </Button>
      </form>
    </div>
  )
}
