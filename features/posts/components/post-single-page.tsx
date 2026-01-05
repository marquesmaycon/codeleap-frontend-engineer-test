"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { EditIcon, ThumbsUp, TrashIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useUser } from "@/features/auth/hooks/use-user"

import { useConfirmDeletePost } from "../hooks/use-confirm-delete-post"
import { useEditPostDialog } from "../hooks/use-edit-post-dialog"
import { getPostsInfiniteQueryOptions } from "../hooks/use-get-posts"
import { useLikePost } from "../hooks/use-like-post"
import { PostComments } from "./post-comments"
import { PostNotFound } from "./post-not-found"

export function PostSinglePage({ id }: { id: string }) {
  const { username: crrUsername } = useUser()
  const { mutateAsync: likePost } = useLikePost()

  const { ConfirmDialog, handleDeletePost } = useConfirmDeletePost(id)
  const { onEditPost, EditPostDialog } = useEditPostDialog()

  const { data } = useInfiniteQuery(getPostsInfiniteQueryOptions)

  const post = data?.pages.flatMap((page) => page.results).find((post) => String(post.id) === id)

  if (!post) return <PostNotFound />

  const postLiked = post.likes?.some((like) => like.username === crrUsername)
  const isPostAuthor = crrUsername?.toLowerCase() === post.username?.toLowerCase()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4">
        <div className="bg-primary flex w-full items-center justify-between p-4">
          <h1 className="text-4xl font-bold text-white">{post.title}</h1>
          {true && (
            <div className="flex gap-4">
              <Button
                size="icon"
                variant="ghost"
                className="group"
                onClick={() => handleDeletePost()}
              >
                <TrashIcon className="group-hover:text-destructive size-6 text-white transition-colors md:size-7.5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="group"
                onClick={() => onEditPost(post)}
              >
                <EditIcon className="size-6 text-white transition-colors group-hover:text-sky-400 md:size-7.5" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">{post.content}</div>

      <div className="flex items-center gap-2">
        <Button
          variant={postLiked ? "default" : "outline"}
          className="dark:text-white"
          size="sm"
          onClick={() => likePost({ id: +id })}
        >
          <ThumbsUp /> {post.likes?.length ?? 0}
        </Button>
        <ul className="text-muted-foreground flex items-center gap-2 text-sm">
          {post.likes?.map((l) => (
            <li key={l.username}>{l.username}</li>
          ))}
        </ul>
      </div>

      <PostComments {...post} className="mt-auto" />

      <ConfirmDialog />
      <EditPostDialog />
    </div>
  )
}
