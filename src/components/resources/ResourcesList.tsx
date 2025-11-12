'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Resource } from '@/types/resources'

interface ResourcesListProps {
  resources: Resource[]
}

export default function ResourcesList({ resources }: ResourcesListProps) {
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Filter resources based on search query
  const filteredResources = useMemo(() => {
    if (!searchQuery.trim()) {
      return resources
    }

    const query = searchQuery.toLowerCase().trim()
    return resources.filter(resource => {
      const searchableText = [
        resource.title,
        resource.subtitle,
        resource.description,
        ...resource.features,
      ].join(' ').toLowerCase()
      
      return searchableText.includes(query)
    })
  }, [resources, searchQuery])

  return (
    <>
      {/* Search Input */}
      <div className="mb-12">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:border-transparent"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              aria-label="Clear search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
        {searchQuery && (
          <p className="mt-2 text-sm text-white/60 text-center">
            Found {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'} matching &quot;{searchQuery}&quot;
          </p>
        )}
      </div>

      {/* Resources Grid */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-white/80 mb-2">No resources found</p>
          <p className="text-white/60">
            {searchQuery
              ? 'Try adjusting your search criteria'
              : 'No resources available'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className={`bg-white/95 border-2 ${
                resource.borderColor === 'green'
                  ? 'border-brand-green-accent'
                  : 'border-brand-purple-accent'
              } rounded-3xl p-8 shadow-2xl`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 ${
                    resource.borderColor === 'green'
                      ? 'bg-brand-green-accent/20'
                      : 'bg-brand-purple-accent/20'
                  } rounded-full flex items-center justify-center mr-4`}
                >
                  <span className="text-2xl">{resource.emoji}</span>
                </div>
                <div>
                  <h3
                    className={`text-2xl font-display mb-1 ${
                      resource.borderColor === 'green'
                        ? 'text-brand-green-dark'
                        : 'text-brand-purple-dark'
                    }`}
                  >
                    {resource.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      resource.borderColor === 'green'
                        ? 'text-brand-green-dark/70'
                        : 'text-brand-purple-dark/70'
                    }`}
                  >
                    {resource.subtitle}
                  </p>
                </div>
              </div>
              <p
                className={`mb-6 ${
                  resource.borderColor === 'green'
                    ? 'text-brand-green-dark'
                    : 'text-brand-purple-dark'
                }`}
              >
                {resource.description}
              </p>
              <div className="space-y-3 mb-6">
                {resource.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center text-sm ${
                      resource.borderColor === 'green'
                        ? 'text-brand-green-dark'
                        : 'text-brand-purple-dark'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full mr-2 ${
                        resource.borderColor === 'green'
                          ? 'bg-brand-green-accent'
                          : 'bg-brand-purple-accent'
                      }`}
                    ></span>
                    {feature}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={resource.href}
                  className={`flex-1 text-white text-center px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold ${
                    resource.borderColor === 'green'
                      ? 'bg-brand-green-accent'
                      : 'bg-brand-purple-accent'
                  }`}
                >
                  View Full Resource
                </Link>
                {resource.downloadHref && (
                  <Link
                    href={resource.downloadHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-brand-purple-dark text-white text-center px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                  >
                    {resource.downloadLabel || 'Download PDF'}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

