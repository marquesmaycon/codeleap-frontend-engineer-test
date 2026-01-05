import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

import { api } from "@/lib/api"

import { getPostsInfiniteQueryOptions } from "./use-get-posts"

export const useDeletePost = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["post", "delete"],
    mutationFn: async (postId: number) => {
      const res = await api.delete(`careers/${postId}/`)
      return await res.json()
    },
    onMutate: async (postId: number) => {
      await queryClient.cancelQueries(getPostsInfiniteQueryOptions)
      const previousPosts = queryClient.getQueryData(getPostsInfiniteQueryOptions.queryKey)

      queryClient.setQueryData(getPostsInfiniteQueryOptions.queryKey, (oldPosts) => {
        if (!oldPosts) return oldPosts
        return {
          ...oldPosts,
          pages: oldPosts.pages.map((page) => ({
            ...page,
            results: page.results.filter((post) => post.id !== postId)
          }))
        }
      })

      return { previousPosts }
    },
    onError: (err, _, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(getPostsInfiniteQueryOptions.queryKey, context.previousPosts)
      }
      toast.error("Failed to delete the post. Please try again.", { description: err.message })
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: getPostsInfiniteQueryOptions.queryKey })
      toast.success("Post deleted successfully.")
    }
  })
}
