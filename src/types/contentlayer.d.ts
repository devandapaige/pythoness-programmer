declare module 'contentlayer/generated' {
  export interface Post {
    _id: string
    _raw: {
      sourceFilePath: string
      sourceFileName: string
      sourceFileDir: string
      contentType: string
      flattenedPath: string
    }
    title: string
    date: string
    description: string
    author: string
    tags: string[]
    image?: string
    slug: string
    body: {
      code: string
    }
  }

  export const allPosts: Post[]
} 