import { TagList } from './TagList'
import Image from 'next/image'

type PostMetadataProps = {
  title: string
  date: string
  description: string
  author: string
  tags: string[]
  image?: string
}

export function PostMetadata({
  title,
  date,
  description,
  author,
  tags,
  image,
}: PostMetadataProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-display text-white mb-4">{title}</h1>
      <div className="flex items-center gap-4 text-white/80 mb-4">
        <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}</time>
        <span>•</span>
        <span>{author}</span>
      </div>
      {image && (
        <div className="mb-4">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      )}
      <p className="text-white/90 mb-4">{description}</p>
      <TagList tags={tags} />
    </div>
  )
} 