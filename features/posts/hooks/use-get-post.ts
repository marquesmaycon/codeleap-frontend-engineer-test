import { queryOptions, useQuery } from "@tanstack/react-query"

import { getQueryClient } from "@/lib/tanstack-query"

import { getPostsQueryOptions } from "./use-get-posts"

export const getPostQueryOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: async () => {
    const queryClient = getQueryClient()
    const posts = queryClient.getQueryData(getPostsQueryOptions.queryKey)
    if (posts) {
      const post = posts.results.find((p) => p.id === 1)
      return post
    }
  }
})

export const useGetPost = () => {
  return useQuery(getPostQueryOptions)
}
