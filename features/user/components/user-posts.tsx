"use client"

import { PostsFeed } from "../../posts/components/posts-feed"

type UserPostsProps = {
  username: string | null
}

export function UserPosts({ username }: UserPostsProps) {
  return <PostsFeed filter={(p) => p.username?.toLowerCase() === username?.toLowerCase()} />
}
