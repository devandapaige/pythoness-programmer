import { TagPill } from './Tag'

type TagListProps = {
  tags: string[]
  className?: string
}

export function TagList({ tags, className }: TagListProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className || ''}`}>
      {tags.map((tag) => (
        <TagPill key={tag} tag={tag} />
      ))}
    </div>
  )
} 