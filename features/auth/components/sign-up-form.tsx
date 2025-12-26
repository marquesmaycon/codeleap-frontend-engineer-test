"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { signUp } from "../actions"

export default function SignUpForm() {
  const [username, setUsername] = useState("")

  return (
    <div className="w-full max-w-125 rounded-[16px] border border-[#CCCCCC] bg-white py-6 shadow-none">
      <div className="flex flex-col px-6">
        <h1 className="mb-6 text-[22px] font-bold">Welcome to CodeLeap network!</h1>

        <div className="mb-4 space-y-2">
          <Label className="text-base font-normal">Please enter your username</Label>
          <Input
            placeholder="John doe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <Button
          className="ml-auto min-w-27.75 text-base font-bold uppercase"
          onClick={() => signUp(username)}
        >
          Enter
        </Button>
      </div>
    </div>
  )
}
