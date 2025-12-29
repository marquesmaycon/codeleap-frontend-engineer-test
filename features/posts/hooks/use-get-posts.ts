import { queryOptions, useQuery } from "@tanstack/react-query"

import { api, type Pagination } from "@/lib/api"

import type { Post } from "../types"

const postsMock: Post[] = [
  {
    id: 1,
    username: "maycon",
    title: "This is a long post title to test how the UI handles long titles",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    created_datetime: "2023-01-01T12:00:00Z"
  },
  {
    id: 2,
    username: "user2",
    title: "This is another post title",
    content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
    
    It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc`,
    created_datetime: "2023-01-02T15:30:00Z"
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
