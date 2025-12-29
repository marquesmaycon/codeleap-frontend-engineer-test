"use client"

import type { ReactNode } from "react"

import { useEditPostDialog } from "../hooks/use-edit-post-dialog"
import { useGetPosts } from "../hooks/use-get-posts"
import type { Post } from "../types"
import { PostCard } from "./post-card"
import { PostsSkeleton } from "./posts-skeleton"

type PostsFeedProps = {
  filter?: (post: Post) => boolean
  emptyState?: ReactNode
}

export function PostsFeed({ filter }: PostsFeedProps) {
  const { data: posts, isLoading } = useGetPosts()
  const { onEditPost, EditPostDialog } = useEditPostDialog()

  const filteredPosts = posts?.results.filter((post) => (filter ? filter(post) : true))

  if (isLoading) {
    return <PostsSkeleton />
  }

  if (!filteredPosts?.length) {
    return <p className="text-muted-foreground py-6 text-center text-sm">No posts found.</p>
  }

  return (
    <>
      <div className="space-y-4 py-4 md:space-y-6 md:py-6">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} {...post} onEdit={() => onEditPost(post)} />
        ))}
      </div>

      <EditPostDialog />
    </>
  )
}
