"use client"

import { PostsFeed } from "../../posts/components/posts-feed"

type UserCommentsProps = {
  username: string | null
}

export function UserComments({ username }: UserCommentsProps) {
  return (
    <PostsFeed
      filter={(p) =>
        p.comments?.some((c) => c.username.toLowerCase() === username?.toLowerCase()) ?? false
      }
    />
  )
}
