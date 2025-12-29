import { redirect } from "next/navigation"
import React from "react"

import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { getUser } from "@/features/auth/actions"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const username = await getUser()

  if (!username) {
    redirect("/sign-up")
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
