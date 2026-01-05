import { useMutation, useQueryClient } from "@tanstack/react-query"

import { useUser } from "@/features/auth/hooks/use-user"

import { getPostsInfiniteQueryOptions } from "./use-get-posts"

type CommentPostData = {
  id: number
  comment: string
}

export const useCommentPost = () => {
  const queryClient = useQueryClient()
  const { username } = useUser()
  return useMutation({
    mutationKey: ["post", "comment"],
    mutationFn: async ({ id, comment }: CommentPostData) => {
      return { id, comment }
    },
    onSuccess: (_, { id, comment }) => {
      queryClient.setQueryData(getPostsInfiniteQueryOptions.queryKey, (oldData) => {
        if (!oldData || !username) return oldData
        return {
          ...oldData,
          pages: oldData.pages.map((page) => ({
            ...page,
            results: page.results.map((p) => {
              if (p.id === id) {
                return {
                  ...p,
                  comments: [...(p.comments ?? []), { username, comment }]
                }
              }
              return p
            })
          }))
        }
      })
    }
  })
}
