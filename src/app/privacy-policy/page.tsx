import { MDXRemote } from 'next-mdx-remote/rsc'
import { getMDXContent } from '@/lib/mdx'
import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Privacy Policy | Pythoness Programmer',
  description: 'Privacy policy for Pythoness Programmer website and services',
}

export default async function PrivacyPolicy() {
  const { source, frontmatter } = await getMDXContent('legal/privacy-policy.mdx')

  return (
    <LegalLayout title={frontmatter.title} lastUpdated={frontmatter.lastUpdated}>
      <MDXRemote source={source.compiledSource} />
    </LegalLayout>
  )
} 