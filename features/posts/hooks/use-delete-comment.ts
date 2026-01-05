import { useMutation, useQueryClient } from "@tanstack/react-query"

import { getPostsInfiniteQueryOptions } from "./use-get-posts"

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
      queryClient.setQueryData(getPostsInfiniteQueryOptions.queryKey, (oldData) => {
        if (!oldData) return oldData
        return {
          ...oldData,
          pages: oldData.pages.map((page) => ({
            ...page,
            results: page.results.map((post) => {
              if (post.id === id) {
                return {
                  ...post,
                  comments: post.comments?.filter(
                    (c) => !(c.username === username && c.comment === comment)
                  )
                }
              }
              return post
            })
          }))
        }
      })
    }
  })
}
