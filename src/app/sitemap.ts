import type { MetadataRoute } from 'next'
import { SITE, TREATMENTS } from '../content'

const CAMPAIGN_PATHS = ['/hipro-ribeirao', '/rejuvenescimento-natural-ribeirao']

export default function sitemap(): MetadataRoute.Sitemap {


  return [
    {
      url: SITE.url,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...CAMPAIGN_PATHS.map((path) => ({
      url: `${SITE.url}${path}`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...TREATMENTS.map((treatment) => ({
      url: `${SITE.url}/${treatment.slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
