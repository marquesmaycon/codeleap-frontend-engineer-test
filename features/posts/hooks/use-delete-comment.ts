import { useMutation, useQueryClient } from "@tanstack/react-query"

import { getPostsQueryOptions } from "./use-get-posts"

type CommentPostData = {
  id: number
  username: string
  comment: string
}

export const useDeleteComment = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["post", "delete-comment"],
    mutationFn: async ({ id, comment, username }: CommentPostData) => {
      queryClient.setQueryData(getPostsQueryOptions.queryKey, (oldData) => {
        if (!oldData) return oldData

        return {
          ...oldData,
          results: oldData.results.map((p) => {
            if (p.id === id) {
              return {
                ...p,
                comments: p.comments?.filter((c) => {
                  const isSameComment = c.comment === comment && c.username === username
                  return !isSameComment
                })
              }
            }
            return p
          })
        }
      })
    }
  })
}
