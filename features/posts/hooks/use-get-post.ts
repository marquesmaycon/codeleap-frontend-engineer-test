import { queryOptions, useQuery } from "@tanstack/react-query"

import { getQueryClient } from "@/lib/tanstack-query"

import { getPostsInfiniteQueryOptions } from "./use-get-posts"

export const getPostQueryOptions = (postId: number) =>
  queryOptions({
    queryKey: ["posts", postId],
    queryFn: async () => {
      const queryClient = getQueryClient()
      const data = queryClient.getQueryData(getPostsInfiniteQueryOptions.queryKey)
      if (data) {
        return data.pages.flatMap((page) => page.results).find((p) => p.id === postId)
      }
    }
  })

export const useGetPost = (postId: number) => {
  return useQuery(getPostQueryOptions(postId))
}
