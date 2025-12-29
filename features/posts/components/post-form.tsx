"use client"

import { Collapsible } from "@radix-ui/react-collapsible"
import { Pencil } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { useCreatePost } from "../hooks/use-create-post"

export default function PostForm() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  
  const { mutateAsync: createPost, isPending } = useCreatePost()

  async function handleSubmit() {
    await createPost({ title, content })
  }

  const disableSubmit = title.length === 0 || content.length === 0

  return (
    <form
      onSubmit={async (ev) => {
        ev.preventDefault()
        await handleSubmit()
      }}
    >
      <Card>
        <Collapsible className="group">
          <CollapsibleTrigger className="px-4 pt-4 md:px-6 md:pt-6">
            <h2 className="flex cursor-text items-center gap-2 text-[22px] font-bold group-data-[state=open]:cursor-pointer">
              What’s on your mind? <Pencil />
            </h2>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 md:space-y-6">
            <CardContent className="space-y-4 pt-4 md:space-y-6 md:pt-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Hello world"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Content here"
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="ml-auto text-base"
                type="submit"
                loading={isPending}
                disabled={disableSubmit}
              >
                Create
              </Button>
            </CardFooter>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </form>
  )
}
