"use client"

import { EditIcon, MessageSquare, ThumbsUp, TrashIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useUser } from "@/features/auth/hooks/use-user"
import type { Post } from "@/features/posts/types"
import { useConfirm } from "@/hooks/use-confirm"
import { capitalizeWords } from "@/lib/utils"

import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../../components/ui/card"
import { useDeletePost } from "../hooks/use-delete-post"
import { useLikePost } from "../hooks/use-like-post"
import PostComments from "./post-comments"

type PostCardProps = Post & {
  onEdit: () => void
}

export function PostCard({
  id,
  username,
  title,
  content,
  created_datetime,
  likes,
  comments,
  onEdit
}: PostCardProps) {
  const { mutateAsync: deletePost } = useDeletePost()
  const { mutateAsync: likePost } = useLikePost()

  const { username: crrUsername } = useUser()

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

  const isAuthorPost = crrUsername?.toLowerCase() === username?.toLowerCase()
  const postLiked = likes?.some((like) => like.username === crrUsername)

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardAction className="flex items-center gap-6">
          {isAuthorPost && (
            <>
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
            </>
          )}
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center justify-between">
          <Link href={`/profile/${username}`}>
            <h3 className="text-lg font-bold text-[#777777]">@{capitalizeWords(username)}</h3>
          </Link>
          <span className="text-right text-[#777777]">{created_datetime}</span>
        </div>
        <p className="whitespace-pre-line">{content}</p>
      </CardContent>
      <CardFooter>
        <Collapsible className="flex w-full flex-col">
          <div className="ml-auto space-x-2">
            <Button
              variant={postLiked ? "default" : "outline"}
              className="ml-auto"
              size="sm"
              onClick={() => likePost({ id })}
            >
              <ThumbsUp /> {likes?.length ?? 0}
            </Button>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => {}}>
                <MessageSquare /> {comments?.length ?? 0}
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <PostComments id={id} comments={comments} />
          </CollapsibleContent>
        </Collapsible>
      </CardFooter>
      <ConfirmDialog />
    </Card>
  )
}
