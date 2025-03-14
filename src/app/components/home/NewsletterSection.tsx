import { getMDXContent } from '@/lib/mdx'

export default async function NewsletterSection() {
  const { frontmatter } = await getMDXContent('home/newsletter.mdx')
  const { id, title, description, embedUrl } = frontmatter

  return (
    <section id={id} className="py-24 px-4 md:px-6 bg-brand-green-light/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-brand-green-dark">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            {description}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <iframe
            src={embedUrl}
            className="w-full min-h-[400px]"
            frameBorder="0"
            scrolling="no"
            style={{ background: 'transparent' }}
          ></iframe>
        </div>
      </div>
    </section>
  )
} 