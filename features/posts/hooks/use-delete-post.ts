import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

import { api } from "@/lib/api"

import { getPostsQueryOptions } from "./use-get-posts"

export const useDeletePost = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (postId: number) => {
      const res = await api.delete(`careers/${postId}/`)
      return await res.json()
    },
    onMutate: async (postId: number) => {
      await queryClient.cancelQueries({ queryKey: getPostsQueryOptions.queryKey })
      const previousPosts = queryClient.getQueryData(getPostsQueryOptions.queryKey)

      queryClient.setQueryData(getPostsQueryOptions.queryKey, (oldPosts) => {
        if (!oldPosts) return oldPosts
        return {
          ...oldPosts,
          results: oldPosts.results.filter((post) => post.id !== postId)
        }
      })

      return { previousPosts }
    },
    onError: (err, _, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(getPostsQueryOptions.queryKey, context.previousPosts)
      }
      toast.error("Failed to delete the post. Please try again.", { description: err.message })
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: getPostsQueryOptions.queryKey })
      toast.success("Post deleted successfully.")
    }
  })
}
