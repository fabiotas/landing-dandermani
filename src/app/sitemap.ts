import type { MetadataRoute } from 'next'
import { SITE, TREATMENTS } from '../content'

const CAMPAIGN_PATHS = ['/hipro-ribeirao', '/rejuvenescimento-natural-ribeirao']

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...CAMPAIGN_PATHS.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...TREATMENTS.map((treatment) => ({
      url: `${SITE.url}/${treatment.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
