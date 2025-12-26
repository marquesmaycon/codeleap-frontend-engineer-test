"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { useEditPost } from "../hooks/use-edit-post"

type EditPostFormProps = {
  onCancel: () => void
  post?: {
    id: number
    title: string
    content: string
  }
}

export default function EditPostForm({ post, onCancel }: EditPostFormProps) {
  const [title, setTitle] = useState(post?.title ?? "")
  const [content, setContent] = useState(post?.content ?? "")

  const { mutateAsync: editPost, isPending } = useEditPost()

  async function handleSubmit() {
    if (!post?.id) return
    await editPost({ id: post.id, title, content })
  }

  return (
    <form
      onSubmit={async (ev) => {
        ev.preventDefault()
        await handleSubmit()
      }}
    >
      <div className="space-y-6">
        <h2 className="text-[22px] font-bold">Edit item</h2>

        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Hello world"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            placeholder="Content here"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </div>

        <div className="ml-auto flex items-center gap-4">
          <Button
            variant="outline"
            className="border-black text-base"
            type="button"
            disabled={isPending}
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            className="hover:bg-success/90 bg-success text-base"
            type="submit"
            loading={isPending}
          >
            Save
          </Button>
        </div>
      </div>
    </form>
  )
}
