"use client"

import { getQueryClient } from "@/lib/tanstack-query"

import { getPostsQueryOptions } from "../hooks/use-get-posts"
import PostCard from "./post-card"

type UserPostsProps = {
  username: string | null
}

export default function UserPosts({ username }: UserPostsProps) {
  const queryClient = getQueryClient()

  const posts = queryClient.getQueryData(getPostsQueryOptions.queryKey)
  const postList = posts?.results.filter(
    (p) => p.username.toLowerCase() === username?.toLowerCase()
  )

  return (
    <div className="space-y-6 p-6">
      {postList?.map((p) => (
        <PostCard key={p.id} {...p} onEdit={() => {}} />
      ))}
    </div>
  )
}
