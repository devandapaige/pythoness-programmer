import Link from 'next/link'

interface ServiceCardProps {
  title: string;
  subtitle?: string;
  price?: string;
  description?: string;
  features?: string[];
  ctaLink: string;
  ctaText: string;
  icon?: string;
  note?: string;
  highlight?: boolean;
  isNew?: boolean;
  className?: string;
  textColor?: string;
}

export default function ServiceCard({
  title,
  subtitle,
  price,
  description,
  features = [],
  ctaLink,
  ctaText,
  icon,
  note,
  highlight = false,
  isNew = false,
  className = "",
  textColor = "text-white"
}: ServiceCardProps) {
  return (
    <div
      className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl transition-all duration-300 animate-fade-in-up ${
        highlight ? 'ring-2 ring-brand-green-accent' : ''
      } ${className}`}
    >
      {/* NEW badge */}
      {isNew && (
        <div className="absolute -top-3 -right-3 z-20">
          <div className="bg-brand-green-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-3">
            NEW
          </div>
        </div>
      )}

      {/* Service icon (if provided) */}
      {icon && (
        <div className="mb-4">
          <span className="text-2xl">{icon}</span>
        </div>
      )}

      {/* Service title */}
      <h3 className={`text-2xl font-display mb-3 ${textColor}`}>
        {title}
      </h3>

      {/* Subtitle */}
      {subtitle && (
        <p className={`${textColor}/80 mb-6`}>
          {subtitle}
        </p>
      )}

      {/* Price */}
      {price && (
        <p className="text-3xl font-display mb-6 text-brand-green-accent">
          {price}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className={`text-sm ${textColor}/70 mb-6`}>
          {description}
        </p>
      )}

      {/* Features list */}
      {features.length > 0 && (
        <ul className="space-y-3 mb-6">
          {features.map((feature: string, featureIndex: number) => (
            <li 
              key={featureIndex} 
              className={`flex items-center space-x-3 ${textColor}/80`}
            >
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-green-accent"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Note */}
      {note && (
        <p className={`text-sm ${textColor}/70 italic mb-6`}>{note}</p>
      )}

      {/* Call to action button */}
      <Link
        href={ctaLink}
        target={ctaLink.startsWith('http') ? '_blank' : undefined}
        className="inline-block w-full text-center bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-white px-6 py-3 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20"
      >
        {ctaText}
      </Link>
    </div>
  )
}
