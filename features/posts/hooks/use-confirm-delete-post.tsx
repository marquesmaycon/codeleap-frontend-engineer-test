import { useConfirm } from "@/hooks/use-confirm"

import { useDeletePost } from "./use-delete-post"

export function useConfirmDeletePost(id: number | string) {
  const { mutateAsync: deletePost } = useDeletePost()

  const [ConfirmDialog, confirm] = useConfirm({
    title: "Are you sure you want to delete this item?",
    actionLabel: "Delete",
    variant: "destructive"
  })

  async function handleDeletePost() {
    const ok = await confirm()
    if (!ok) return
    await deletePost(+id)
  }

  return { handleDeletePost, ConfirmDialog }
}
