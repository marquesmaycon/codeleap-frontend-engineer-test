import { infiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query"

import { api, type Pagination } from "@/lib/api"
import { delay } from "@/lib/utils"

import { generateMockPosts } from "../generate-mock-posts"
import type { Post } from "../types"

const USE_MOCK = true

export const getPostsInfiniteQueryOptions = infiniteQueryOptions({
  queryKey: ["posts", "infinite"],
  queryFn: async ({ pageParam }) => {
    if (USE_MOCK) {
      await delay(500)

      const currentPage = +pageParam
      const postsPerPage = 5
      const totalPages = 4
      const mockResults = generateMockPosts(currentPage, postsPerPage)

      const data: Pagination<Post> = {
        count: totalPages * postsPerPage,
        next: currentPage < totalPages - 1 ? String(currentPage + 1) : null,
        previous: currentPage > 0 ? String(currentPage - 1) : null,
        results: mockResults
      }

      return data
    }

    const res = await api.get<Pagination<Post>>("careers/", {
      searchParams: { cursor: pageParam }
    })

    return await res.json()
  },
  initialPageParam: "",
  getNextPageParam: (lastPage) => lastPage.next
})

export const useGetPostsInfinite = () => {
  return useInfiniteQuery(getPostsInfiniteQueryOptions)
}
