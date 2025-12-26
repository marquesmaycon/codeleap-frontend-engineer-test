"use server"

import { cookies } from "next/headers"

import { COOKIE_NAME } from "./constants"

export const getUser = async () => {
  const cookieStore = await cookies()
  return cookieStore.get(COOKIE_NAME)?.value || null
}

export const signUp = async (username: string) => {
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, username)
}

export const signOut = async () => {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}
