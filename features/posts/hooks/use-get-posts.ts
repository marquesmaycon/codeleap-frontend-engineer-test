import { queryOptions, useQuery } from "@tanstack/react-query"

import { api, type Pagination } from "@/lib/api"

import type { Post } from "../types"

const postsMock: Post[] = [
  {
    id: 1,
    username: "user1",
    title: "First Post",
    content: "This is the content of the first post.",
    created_datetime: "2023-01-01T12:00:00Z"
  }
]

export const getPostsQueryOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: async () => {
    const res = await api.get<Pagination<Post>>("careers/")
    return await res.json()
  },
  initialData: {
    count: postsMock.length,
    next: null,
    previous: null,
    results: postsMock
  }
})

export const useGetPosts = () => {
  return useQuery(getPostsQueryOptions)
}
