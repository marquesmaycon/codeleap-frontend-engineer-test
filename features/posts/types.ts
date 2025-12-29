export type Post = {
  id: number
  username: string
  title: string
  content: string
  created_datetime: string

  likes?: Array<{
    username: string
  }>
  comments?: Array<{
    username: string
    comment: string
  }>
}
