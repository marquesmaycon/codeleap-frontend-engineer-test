import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

import { api } from "@/lib/api"

import { getPostsInfiniteQueryOptions } from "./use-get-posts"

type CreatePostData = {
  username: string
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
      toast.success("Post created successfully")
      queryClient.invalidateQueries({ queryKey: getPostsInfiniteQueryOptions.queryKey })
    },
    onError: (err) => {
      toast.error("Failed to create the post. Please try again.", { description: err.message })
    }
  })
}
