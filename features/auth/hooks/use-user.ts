"use client"

import { useEffect, useState } from "react"

import { getUser } from "../actions"

export function useUser() {
  const [username, setUsername] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getUser()
      .then((user) => setUsername(user))
      .finally(() => setIsLoading(false))
  }, [])

  return { username, isLoading }
}
