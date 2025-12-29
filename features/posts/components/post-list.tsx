"use client"

import { useState } from "react"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

import { useGetPosts } from "../hooks/use-get-posts"
import type { Post } from "../types"
import EditPostForm from "./edit-post-form"
import PostCard from "./post-card"

export default function PostList() {
  const { data } = useGetPosts()
  const [crrPost, setCrrPost] = useState<Post>()
  const [dialog, setDialog] = useState(false)

  function onEditPost(post: Post) {
    setDialog(true)
    setCrrPost(post)
  }

  function onCancelEdit() {
    setDialog(false)
    setCrrPost(undefined)
  }

  return (
    <div>
      <ul className="space-y-6">
        {data?.results.map((post) => (
          <li key={post.id}>
            <PostCard {...post} onEdit={() => onEditPost(post)} />
          </li>
        ))}
      </ul>

      <Dialog open={dialog} onOpenChange={setDialog}>
        <DialogContent>
          <DialogTitle className="sr-only">Edit Post</DialogTitle>
          <EditPostForm post={crrPost} onCancel={onCancelEdit} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
