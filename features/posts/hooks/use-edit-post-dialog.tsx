import { useState } from "react"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

import EditPostForm from "../components/edit-post-form"
import type { Post } from "../types"

export function useEditPostDialog() {
  const [crrPost, setCrrPost] = useState<Post>()
  const [dialog, setDialog] = useState(false)

  function onEditPost(post: Post) {
    setCrrPost(post)
    setDialog(true)
  }

  function onCancelEdit() {
    setDialog(false)
  }

  function handleOpenChange(open: boolean) {
    setDialog(open)
    if (!open) {
      setTimeout(() => setCrrPost(undefined), 300)
    }
  }

  const EditPostDialog = (
    <Dialog open={dialog} onOpenChange={handleOpenChange}>
      <DialogContent className="md:max-w-165">
        <DialogTitle className="sr-only">Edit Post</DialogTitle>
        {crrPost && <EditPostForm post={crrPost} onCancel={onCancelEdit} />}
      </DialogContent>
    </Dialog>
  )

  return { onEditPost, EditPostDialog }
}