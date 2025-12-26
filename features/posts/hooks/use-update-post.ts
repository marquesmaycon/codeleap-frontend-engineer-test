import { useMutation, useQueryClient } from "@tanstack/react-query"

import { api } from "@/lib/api"

import { getPostsQueryOptions } from "./use-get-posts"

type UpdatePostData = {
  id: number
  title: string
  content: string
}

export const useUpdatePost = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ id, ...data }: UpdatePostData) => {
      const res = await api.patch(`careers/${id}/`, { json: data })
      return await res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries(getPostsQueryOptions)
    }
  })
}
