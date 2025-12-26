import { useMutation, useQueryClient } from "@tanstack/react-query"

import { api } from "@/lib/api"

import { getPostsQueryOptions } from "./use-get-posts"

export const useCreatePost = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: { title: string; content: string }) => {
      const res = await api.post("careers/", { json: data })
      return await res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getPostsQueryOptions.queryKey })
    }
  })
}
