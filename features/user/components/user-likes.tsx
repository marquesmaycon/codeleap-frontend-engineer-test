"use client"

import { PostsFeed } from "../../posts/components/posts-feed"

type UserLikesProps = {
  username: string | null
}

export function UserLikes({ username }: UserLikesProps) {
  return (
    <PostsFeed
      filter={(p) =>
        p.likes?.some((l) => l.username.toLowerCase() === username?.toLowerCase()) ?? false
      }
    />
  )
}
