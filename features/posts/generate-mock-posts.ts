import type { Post } from "./types"

export const generateMockPosts = (
  page: number,
  postsPerPage: number = 5,
  loggedUsername?: string | null
): Post[] => {
  return Array.from({ length: postsPerPage }, (_, i) => {
    const postIndex = page * postsPerPage + i
    const isUserPost = loggedUsername && postIndex < 2

    return {
      id: postIndex + 1,
      username: isUserPost ? loggedUsername : `user_${postIndex + 1}`,
      title: `Post ${postIndex + 1}: This is a post title`,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is page ${page + 1}, post ${i + 1}. 
    
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
      created_datetime: new Date(2023, 0, 1 + page * 5 + i).toISOString()
    }
  })
}
