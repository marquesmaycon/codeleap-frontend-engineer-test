import { useMutation, useQueryClient } from "@tanstack/react-query"

import { api } from "@/lib/api"

import { getPostsQueryOptions } from "./use-get-posts"

type CreatePostData = {
  title: string
  content: string
}

export const useCreatePost = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["post", "create"],
    mutationFn: async (data: CreatePostData) => {
      const res = await api.post("careers/", { json: data })
      return await res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getPostsQueryOptions.queryKey })
    }
  })
}
