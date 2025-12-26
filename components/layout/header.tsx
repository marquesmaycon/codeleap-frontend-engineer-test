import Link from "next/link"

import { getUser } from "@/features/auth/actions"

export default async function Header() {
  const username = getUser()
  
  return (
    <header className="bg-primary px-9.25 py-6.75">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold text-white">CodeLeap Network</h1>
        </Link>
        <div className="flex items-center gap-4">
          {username && (
            <span className="text-white">
              Welcome, <b>{username}</b>
            </span>
          )}
        </div>
      </div>
    </header>
  )
}
