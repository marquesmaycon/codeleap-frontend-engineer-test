"use client"

import { useEditPostDialog } from "../hooks/use-edit-post-dialog"
import { useGetPosts } from "../hooks/use-get-posts"
import PostCard from "./post-card"

type UserPostsProps = {
  username: string | null
}

export default function UserPosts({ username }: UserPostsProps) {
  const { data: posts } = useGetPosts()
  const { onEditPost, EditPostDialog } = useEditPostDialog()

  const postList = posts?.results.filter(
    (p) => p.username.toLowerCase() === username?.toLowerCase()
  )

  return (
    <>
      <div className="space-y-6 py-6">
        {postList?.map((p) => (
          <PostCard key={p.id} {...p} onEdit={() => onEditPost(p)} />
        ))}
      </div>

      <EditPostDialog />
    </>
  )
}
