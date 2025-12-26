import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import EditIcon from "@/public/edit-pen.svg"
import TrashIcon from "@/public/trash-bin.svg"

export default function Home() {
  return (
    <div>
      <div className="mx-auto max-w-200">
        <header className="bg-primary px-9.25 py-6.75">
          <h1 className="text-xl font-bold text-white">CodeLeap Network</h1>
        </header>
        <div className="space-y-6 bg-white p-6">
          <Card>
            <CardContent className="space-y-6 pt-6">
              <h2 className="text-[22px] font-bold">What’s on your mind?</h2>

              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Hello world" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" placeholder="Content here" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto text-base">Create</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>My First Post at CodeLeap Network!</CardTitle>
              <CardAction>
                <Button size="icon-lg" variant="ghost">
                  <TrashIcon className="size-7.5" />
                </Button>
                <Button size="icon-lg" variant="ghost">
                  <EditIcon className="size-7.5" />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#777777]">@Maycon</h3>
                <span className="text-right text-[#777777]">25 minutes ago</span>
              </div>
              <p className="whitespace-pre-line">
                Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Maecenas egestas arcu quis ligula mattis placerat.
                {"\n"}
                Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam.
                Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin
                urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
