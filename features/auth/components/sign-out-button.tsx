"use client"

import { useQueryClient } from "@tanstack/react-query"
import { LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { signOut } from "@/features/auth/actions"

export function LogoutButton() {
  const queryClient = useQueryClient()

  const handleLogout = async () => {
    await signOut()
    queryClient.clear()
  }

  return (
    <Button variant="outline" onClick={handleLogout}>
      Logout <LogOut />
    </Button>
  )
}
