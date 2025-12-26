"use client"

import { useGetPosts } from "../hooks/use-get-posts"
import PostCard from "./post-card"

export default function PostList() {
  const { data } = useGetPosts()
  return (
    <div>
      <ul>
        {data?.results.map((post) => (
          <li key={post.id}>
            <PostCard {...post} />
          </li>
        ))}
      </ul>
    </div>
  )
}
