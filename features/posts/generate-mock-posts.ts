import type { Post } from "./types"

export const generateMockPosts = (page: number, postsPerPage: number = 5): Post[] => {
  return Array.from({ length: postsPerPage }, (_, i) => ({
    id: page * postsPerPage + i + 1,
    username: `user_${page * postsPerPage + i + 1}`,
    title: `Post ${page * postsPerPage + i + 1}: This is a post title`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is page ${page + 1}, post ${i + 1}. 
    
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
    created_datetime: new Date(2023, 0, 1 + page * 5 + i).toISOString()
  }))
}
