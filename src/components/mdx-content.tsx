import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote source={source} />;
} 