import { MDXRemote } from 'next-mdx-remote/rsc'
import { getMDXContent } from '@/lib/mdx'
import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Terms of Service | Pythoness Programmer',
  description: 'Terms of service for Pythoness Programmer website and services',
}

export default async function TermsOfService() {
  const { source, frontmatter } = await getMDXContent('legal/terms-of-service.mdx')
  const lastUpdated = typeof frontmatter.lastUpdated === 'string' 
    ? frontmatter.lastUpdated 
    : new Date(frontmatter.lastUpdated).toISOString()

  return (
    <LegalLayout 
      title={frontmatter.title} 
      lastUpdated={lastUpdated}
    >
      <MDXRemote source={source} />
    </LegalLayout>
  )
} 