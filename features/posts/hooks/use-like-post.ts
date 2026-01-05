import { useMutation, useQueryClient } from "@tanstack/react-query"

import { useUser } from "@/features/auth/hooks/use-user"

import { getPostsInfiniteQueryOptions } from "./use-get-posts"

type LikePostData = {
  id: number
}

export const useLikePost = () => {
  const queryClient = useQueryClient()
  const { username } = useUser()
  return useMutation({
    mutationKey: ["post", "like"],
    mutationFn: async ({ id }: LikePostData) => {
      queryClient.setQueryData(getPostsInfiniteQueryOptions.queryKey, (oldData) => {
        if (!oldData || !username) return oldData
        return {
          ...oldData,
          pages: oldData.pages.map((page) => ({
            ...page,
            results: page.results.map((p) => {
              if (p.id === id) {
                const hasLiked = p.likes?.some(
                  (like) => like.username.toLowerCase() === username.toLowerCase()
                )
                return {
                  ...p,
                  likes: hasLiked
                    ? p.likes?.filter(
                        (like) => like.username.toLowerCase() !== username.toLowerCase()
                      )
                    : [...(p.likes ?? []), { username }]
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
