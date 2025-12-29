import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getUser, signOut } from "@/features/auth/actions"
import { UserComments } from "@/features/user/components/user-comments"
import { UserLikes } from "@/features/user/components/user-likes"
import { UserPosts } from "@/features/user/components/user-posts"
import { capitalizeWords } from "@/lib/utils"

type ProfilePageProps = {
  params: Promise<{ username: string }>
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = await params
  const currentUser = await getUser()

  const isMyProfile = currentUser?.toLowerCase() === username.toLowerCase()

  return (
    <div className="mx-auto w-full max-w-200 flex-1 p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="bg-primary w-fit px-4 py-2">
          <h1 className="text-4xl font-bold text-white">@{capitalizeWords(username)}</h1>
        </div>
        {isMyProfile && (
          <form action={signOut}>
            <Button variant="outline" type="submit">
              Logout
            </Button>
          </form>
        )}
      </div>

      <Tabs defaultValue="posts" className="mt-8">
        <TabsList className="w-full">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
          <TabsTrigger value="likes">Likes</TabsTrigger>
        </TabsList>
        <TabsContent value="posts">
          <UserPosts username={username} />
        </TabsContent>
        <TabsContent value="comments">
          <UserComments username={username} />
        </TabsContent>
        <TabsContent value="likes">
          <UserLikes username={username} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
