import Link from "next/link"

import { getUser } from "@/features/auth/actions"

export default async function Header() {
  const username = await getUser()

  return (
    <header className="bg-primary fixed top-0 z-10 w-full px-4 py-6 md:px-9.25 md:py-6.75">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/">
          <h1 className="text-lg font-bold text-white md:text-xl">CodeLeap Network</h1>
        </Link>
        <div className="flex items-center gap-4">
          {username && (
            <span className="text-sm text-white md:text-base">
              Welcome,{" "}
              <Link href={`/profile/${username}`} className="font-semibold underline">
                @{username}
              </Link>
            </span>
          )}
        </div>
      </div>
    </header>
  )
}
