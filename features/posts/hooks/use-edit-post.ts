import { useMutation, useQueryClient } from "@tanstack/react-query"

import { api } from "@/lib/api"

import { getPostsQueryOptions } from "./use-get-posts"

type EditPostData = {
  id: number
  title: string
  content: string
}

export const useEditPost = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ id, ...data }: EditPostData) => {
      const res = await api.patch(`careers/${id}/`, { json: data })
      return await res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries(getPostsQueryOptions)
    }
  })
}
