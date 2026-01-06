"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { signUp } from "../actions"

export default function SignUpForm() {
  const [username, setUsername] = useState("")

  const isEmpty = username.trim().length === 0

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value)
  }

  return (
    <form
      className="bg-card w-full max-w-125 rounded-[16px] border border-[#CCCCCC] py-6 shadow-none"
      action={signUp}
    >
      <div className="flex flex-col px-6">
        <h1 className="mb-6 text-[22px] font-bold">Welcome to CodeLeap network!</h1>

        <div className="mb-4 space-y-2">
          <Label className="text-base font-normal">Please enter your username</Label>
          <Input
            placeholder="John doe"
            name="username"
            value={username}
            onChange={handleInputChange}
            required
          />
        </div>

        <Button
          type="submit"
          className="ml-auto min-w-27.75 text-base font-bold uppercase"
          disabled={isEmpty}
        >
          Enter
        </Button>
      </div>
    </form>
  )
}
