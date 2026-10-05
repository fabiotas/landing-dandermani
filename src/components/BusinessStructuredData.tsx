import { INSTAGRAM_URL, PROFESSIONAL, SITE, WHATSAPP_NUMBER } from '../content'

export function BusinessStructuredData() {
  const businessId = `${SITE.url}/#business`
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness', '@id': businessId,
        name: SITE.brand, url: SITE.url,
        description: 'Atendimento de estética avançada em Ribeirão Preto por enfermeira especialista em estética.',
        image: `${SITE.url}/sobre-profissional.jpg`,
        logo: `${SITE.url}/logo.png`,
        telephone: `+${WHATSAPP_NUMBER}`,
        sameAs: [INSTAGRAM_URL],
        hasMap: SITE.mapsUrl,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Metropolitan Business Center - Av. Antônio Diederichsen, 400 - Jardim América',
          addressLocality: 'Ribeirão Preto', addressRegion: 'SP',
          postalCode: '14020-240', addressCountry: 'BR',
        },
        founder: { '@type': 'Person', name: PROFESSIONAL.name, jobTitle: PROFESSIONAL.title },
      },
      { '@type': 'WebSite', '@id': `${SITE.url}/#website`, name: SITE.brand, url: SITE.url, inLanguage: 'pt-BR', publisher: { '@id': businessId } },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}
