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
  customStyling?: {
    backgroundColor?: string;
    textColor?: string;
    accentColor?: string;
    borderColor?: string;
    badgeText?: string;
    badgeColor?: string;
  };
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
  textColor = "text-white",
  customStyling
}: ServiceCardProps) {
  // Determine styling based on customStyling prop
  const cardBg = customStyling?.backgroundColor ? `bg-gradient-to-br ${customStyling.backgroundColor}` : 'bg-white/5 backdrop-blur-sm';
  const cardTextColor = customStyling?.textColor || textColor;
  const cardAccentColor = customStyling?.accentColor || 'brand-green-accent';
  const cardBorderColor = customStyling?.borderColor || '';
  const badgeText = customStyling?.badgeText || 'NEW';
  const badgeColor = customStyling?.badgeColor || 'brand-green-accent';

  return (
    <div
      className={`group relative ${cardBg} rounded-2xl p-8 ${cardBorderColor ? `border-2 ${cardBorderColor}` : 'border-none'} shadow-2xl transition-all duration-300 animate-fade-in-up ${
        highlight ? `ring-2 ring-${cardAccentColor}` : ''
      } ${className}`}
    >
      {/* NEW/ASYNC badge */}
      {isNew && (
        <div className="absolute -top-3 -right-3 z-20">
          <div className={`bg-${badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-3`}>
            {badgeText}
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
      <h3 className={`text-2xl font-display mb-3 ${cardTextColor}`}>
        {title}
      </h3>

      {/* Subtitle */}
      {subtitle && (
        <p className={`${cardTextColor}/80 mb-6`}>
          {subtitle}
        </p>
      )}

      {/* Price */}
      {price && (
        <p className={`text-3xl font-display mb-6 text-${cardAccentColor}`}>
          {price}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className={`text-sm ${cardTextColor}/70 mb-6`}>
          {description}
        </p>
      )}

      {/* Features list */}
      {features.length > 0 && (
        <ul className="space-y-3 mb-6">
          {features.map((feature: string, featureIndex: number) => (
            <li 
              key={featureIndex} 
              className={`flex items-center space-x-3 ${cardTextColor}/80`}
            >
              <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full bg-${cardAccentColor}`}></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Note */}
      {note && (
        <p className={`text-sm ${cardTextColor}/70 italic mb-6`}>{note}</p>
      )}

      {/* Call to action button */}
      <Link
        href={ctaLink}
        target={ctaLink.startsWith('http') ? '_blank' : undefined}
        className={`inline-block w-full text-center bg-gradient-to-r from-${cardAccentColor} to-${cardAccentColor}/90 text-white px-6 py-3 rounded-lg hover:from-${cardAccentColor}/90 hover:to-${cardAccentColor} transition-all duration-300 shadow-${cardAccentColor}/20`}
      >
        {ctaText}
      </Link>
    </div>
  )
}
