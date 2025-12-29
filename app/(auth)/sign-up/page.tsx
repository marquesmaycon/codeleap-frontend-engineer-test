import { redirect } from "next/navigation"

import { getUser } from "@/features/auth/actions"
import SignUpForm from "@/features/auth/components/sign-up-form"

export default async function SignUpPage() {
  const username = await getUser()

  if (username) {
    redirect("/")
  }

  return (
    <div className="bg-primary/20 flex min-h-screen items-center justify-center p-4">
      <SignUpForm />
    </div>
  )
}
