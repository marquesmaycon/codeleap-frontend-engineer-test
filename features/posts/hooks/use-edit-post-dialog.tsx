import { useState } from "react"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

import EditPostForm from "../components/edit-post-form"
import type { Post } from "../types"

export function useEditPostDialog() {
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

  const EditPostDialog = () => (
    <Dialog open={dialog} onOpenChange={setDialog}>
      <DialogContent>
        <DialogTitle className="sr-only">Edit Post</DialogTitle>
        <EditPostForm post={crrPost} onCancel={onCancelEdit} />
      </DialogContent>
    </Dialog>
  )

  return {
    onEditPost,
    EditPostDialog
  }
}
