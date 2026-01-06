import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

import { api } from "@/lib/api"

import { getPostsInfiniteQueryOptions } from "./use-get-posts"

type EditPostData = {
  id: number
  title: string
  content: string
}

export const useEditPost = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["post", "edit"],
    mutationFn: async ({ id, ...data }: EditPostData) => {
      const res = await api.patch(`careers/${id}/`, { json: data })
      return await res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries(getPostsInfiniteQueryOptions)
      toast.success("Post edited successfully")
    },
    onError: (err) => {
      toast.error("Failed to edit the post. Please try again.", { description: err.message })
    }
  })
}
