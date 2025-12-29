"use client"

import { useEditPostDialog } from "../hooks/use-edit-post-dialog"
import { useGetPosts } from "../hooks/use-get-posts"
import PostCard from "./post-card"

export default function PostList() {
  const { data } = useGetPosts()
  const { onEditPost, EditPostDialog } = useEditPostDialog()

  return (
    <div>
      <ul className="space-y-6">
        {data?.results.map((post) => (
          <li key={post.id}>
            <PostCard {...post} onEdit={() => onEditPost(post)} />
          </li>
        ))}
      </ul>

      <EditPostDialog />
    </div>
  )
}
