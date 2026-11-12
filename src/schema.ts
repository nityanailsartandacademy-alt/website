import { BUSINESS, COURSE, MENU, NAV, type PageMeta } from './data/site'

/** JSON-LD for Google: NailSalon with address, geo, hours, rating, price list and the academy course. */
export function salonSchema(siteUrl: string) {
  return {
    '@type': 'NailSalon',
    '@id': `${siteUrl}/#salon`,
    name: BUSINESS.name,
    url: `${siteUrl}/`,
    image: `${siteUrl}/images/og-image.jpg`,
    telephone: BUSINESS.phone.tel,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
    hasMap: BUSINESS.googleUrl,
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '11:00', closes: '20:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday'], opens: '11:00', closes: '19:30' },
    ],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: BUSINESS.rating.value, reviewCount: BUSINESS.rating.count, bestRating: 5 },
    sameAs: [BUSINESS.instagram.url, BUSINESS.googleUrl],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Nail services',
      itemListElement: MENU.flatMap((g) =>
        g.items.map((i) => ({
          '@type': 'Offer',
          price: i.price.replace(/[^\d]/g, ''),
          priceCurrency: 'INR',
          itemOffered: { '@type': 'Service', name: i.name },
        })),
      ),
    },
  }
}

function courseSchema(siteUrl: string) {
  return {
    '@type': 'Course',
    name: COURSE.name,
    description: 'Practical nail extension and nail art course with products provided and a certificate on completion.',
    provider: { '@id': `${siteUrl}/#salon` },
    offers: { '@type': 'Offer', price: COURSE.price.replace(/[^\d]/g, ''), priceCurrency: 'INR', category: 'Paid' },
  }
}

/** JSON-LD for one page: the studio, the page itself and (inner pages) a breadcrumb trail. */
export function pageSchema(siteUrl: string, meta: PageMeta) {
  const url = `${siteUrl}${meta.path === '/' ? '/' : meta.path}`
  const graph: object[] = [
    salonSchema(siteUrl),
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: meta.title, description: meta.description, about: { '@id': `${siteUrl}/#salon` } },
  ]
  if (meta.path === '/academy') graph.push(courseSchema(siteUrl))
  if (meta.path !== '/') {
    const label = NAV.find((n) => n.href === meta.path)?.label ?? meta.title
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: label, item: url },
      ],
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}
