import { PostSinglePage } from "@/features/posts/components/post-single-page"

type PostPageProps = {
  params: Promise<{ id: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params

  return (
    <div className="mx-auto flex w-full max-w-200 flex-1 p-4 pt-26 md:p-6 md:pt-26">
      <PostSinglePage id={id} />
    </div>
  )
}
