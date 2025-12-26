import PostForm from "@/features/posts/components/post-form"
import PostList from "@/features/posts/components/post-list"

export default function Home() {
  return (
    <div className="flex-1 bg-white">
      <div className="mx-auto max-w-200 space-y-6 bg-white p-6">
        <PostForm />

        <PostList />
      </div>
    </div>
  )
}
