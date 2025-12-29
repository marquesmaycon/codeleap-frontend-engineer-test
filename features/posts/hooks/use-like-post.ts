import { useMutation, useQueryClient } from "@tanstack/react-query"

import { useUser } from "@/features/auth/hooks/use-user"

import { getPostsQueryOptions } from "./use-get-posts"

type LikePostData = {
  id: number
}

export const useLikePost = () => {
  const queryClient = useQueryClient()
  const { username } = useUser()
  return useMutation({
    mutationFn: async ({ id }: LikePostData) => {
      queryClient.setQueryData(getPostsQueryOptions.queryKey, (oldData) => {
        if (!oldData || !username) return oldData

        return {
          ...oldData,
          results: oldData.results.map((p) => {
            if (p.id === id) {
              const hasLiked = p.likes?.some((like) => like.username === username)
              return {
                ...p,
                likes: hasLiked
                  ? p.likes?.filter((like) => like.username !== username)
                  : [...(p.likes ?? []), { username }]
              }
            }
            return p
          })
        }
      })
    }
  })
}
