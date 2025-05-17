import Image from 'next/image'
import { getMDXContent } from '@/lib/mdx'

interface Photo {
  main: string;
  decorative?: string[];
}

interface Values {
  title: string;
  items: string[];
}

interface AboutFrontmatter {
  id: string;
  title: string;
  description: string;
  pythia: string;
  values: Values;
  photo?: Photo;
}

// Type guard to check if the data matches our AboutFrontmatter interface
function isAboutFrontmatter(data: unknown): data is AboutFrontmatter {
  const d = data as Record<string, unknown>;
  const values = d.values as Record<string, unknown>;
  const photo = d.photo as Record<string, unknown> | undefined;
  
  return (
    typeof d === 'object' &&
    d !== null &&
    typeof d.id === 'string' &&
    typeof d.title === 'string' &&
    typeof d.description === 'string' &&
    typeof d.pythia === 'string' &&
    typeof values === 'object' &&
    values !== null &&
    typeof values.title === 'string' &&
    Array.isArray(values.items) &&
    (photo === undefined || (
      typeof photo === 'object' &&
      photo !== null &&
      typeof photo.main === 'string' &&
      (photo.decorative === undefined || Array.isArray(photo.decorative))
    ))
  );
}

export default async function AboutSection() {
  const { frontmatter } = await getMDXContent('home/about.mdx')
  
  // Validate the frontmatter data
  if (!isAboutFrontmatter(frontmatter)) {
    throw new Error('Invalid frontmatter data structure in about.mdx');
  }

  const { id, title, description, pythia, values, photo } = frontmatter;

  return (
    <section id={id} className="relative py-24 px-4 md:px-6 bg-gradient-to-br from-white via-brand-purple-light/5 to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/pattern.svg')] bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header with glass effect */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-none">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-brand-purple-dark">
              {title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image with decorative elements */}
          <div 
            className="relative animate-fade-in-up order-2 md:order-1"
            style={{ animationDelay: '150ms' }}
          >
            <div className="relative mx-auto max-w-md">
              {/* Decorative elements */}
              <div className="absolute -bottom-24 -left-8 w-48 h-48 rounded-full bg-brand-green-accent/20 backdrop-blur-sm -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-brand-purple-dark/20 backdrop-blur-sm z-0"></div>
              
              {/* Main photo */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {photo?.main ? (
                  <Image
                    src={photo.main}
                    alt="Pythoness Programmer"
                    width={600}
                    height={800}
                    className="w-full h-auto"
                    priority
                    style={{ backgroundColor: 'transparent' }}
                  />
                ) : (
                  <div className="w-full h-[400px] flex items-center justify-center bg-brand-purple-dark/10">
                    <p className="text-brand-purple-dark">Image coming soon</p>
                  </div>
                )}
              </div>
              
              {/* Small decorative photos */}
              {photo?.decorative && photo.decorative.length > 0 && (
                <>
                  {photo.decorative[0] && (
                    <div className="absolute top-1/4 -right-12 w-24 h-24 rounded-lg overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
                      <Image
                        src={photo.decorative[0]}
                        alt="Decorative"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                        style={{ backgroundColor: 'transparent' }}
                      />
                    </div>
                  )}
                  {photo.decorative[1] && (
                    <div className="absolute bottom-1/4 -left-12 w-24 h-24 rounded-lg overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
                      <Image
                        src={photo.decorative[1]}
                        alt="Decorative"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                        style={{ backgroundColor: 'transparent' }}
                      />
                    </div>
                  )}
                </>
              )}
              
              {/* Pythia caption */}
              <div className="mt-6 bg-brand-purple-dark rounded-lg shadow-lg p-4 relative z-10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <p className="text-sm text-white/90 italic leading-relaxed">
                  {pythia}
                </p>
              </div>
            </div>
          </div>

          {/* About text content */}
          <div 
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border-none shadow-xl animate-fade-in-up order-1 md:order-2"
            style={{ animationDelay: '300ms' }}
          >
            <p className="text-xl text-brand-purple-dark mb-8 leading-relaxed">
              {description}
            </p>
            
            <h3 className="text-2xl font-display mb-6 text-brand-green-dark">
              {values.title}
            </h3>
            
            <ul className="space-y-4">
              {values.items.map((item: string, index: number) => (
                <li 
                  key={index} 
                  className="flex items-start group"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent group-hover:scale-150 transition-transform"></span>
                  <span className="ml-4 text-gray-600 group-hover:text-brand-purple-dark transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 