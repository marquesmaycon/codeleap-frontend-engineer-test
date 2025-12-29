"use client"

import { type ReactNode, useState } from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

import { useEditPostDialog } from "../hooks/use-edit-post-dialog"
import { useGetPosts } from "../hooks/use-get-posts"
import type { Post } from "../types"
import { PostCard } from "./post-card"
import { PostsSkeleton } from "./posts-skeleton"

type SortOption = "newest" | "oldest"

type PostsFeedProps = {
  filter?: (post: Post) => boolean
  emptyState?: ReactNode
}

export function PostsFeed({ filter }: PostsFeedProps) {
  const { data: posts, isLoading } = useGetPosts()
  const { onEditPost, EditPostDialog } = useEditPostDialog()
  const [sortBy, setSortBy] = useState<SortOption>("newest")

  const filteredPosts = posts?.results.filter((post) => (filter ? filter(post) : true))

  const sortedPosts = filteredPosts
    ? [...filteredPosts].sort((a, b) => {
        const dateA = new Date(a.created_datetime).getTime()
        const dateB = new Date(b.created_datetime).getTime()
        return sortBy === "newest" ? dateB - dateA : dateA - dateB
      })
    : []

  if (isLoading) {
    return <PostsSkeleton />
  }

  if (!filteredPosts?.length) {
    return <p className="text-muted-foreground py-6 text-center text-sm">No posts found.</p>
  }

  return (
    <>
      <div className="mb-4 flex justify-end">
        <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
          <SelectTrigger>
            <SelectValue placeholder="Order" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Order</SelectLabel>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4 py-4 md:space-y-6 md:py-6">
        {sortedPosts.map((post) => (
          <PostCard key={post.id} {...post} onEdit={() => onEditPost(post)} />
        ))}
      </div>

      <EditPostDialog />
    </>
  )
}
