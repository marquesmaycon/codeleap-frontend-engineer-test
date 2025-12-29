import PostForm from "@/features/posts/components/post-form"
import { PostsFeed } from "@/features/posts/components/posts-feed"

export default function Home() {
  return (
    <div className="flex-1 pt-20">
      <div className="mx-auto max-w-200 space-y-4 p-4 md:space-y-6 md:p-6">
        <PostForm />

        <PostsFeed />
      </div>
    </div>
  )
}
