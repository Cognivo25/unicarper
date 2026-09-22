// Single source of truth for SEO: site constants, per-page metadata and JSON-LD.
export const SITE = {
  url: 'https://unicarper.com',
  name: 'Unicarper Design & Build',
  legalName: 'Triune Business Ventures Pvt. Ltd.',
  tagline: 'Spaces that work harder for you',
  email: 'projects@unicarper.com',
  phone: '+91-9538444564',
  logo: '/unicarper/opt/logo.png',
  ogImage: '/og-image.jpg',
  address: {
    streetAddress: 'Anand Building, #18, Office 1, KG Halli, Jalahalli West',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560015',
    addressCountry: 'IN',
  },
};

export const KEYWORDS = [
  'Unicarper',
  'design and build company Bangalore',
  'design build firm Bengaluru',
  'interior designers in Bangalore',
  'turnkey interiors Bangalore',
  'residential interior design Bengaluru',
  'villament interiors',
  'commercial interior fit-out Bangalore',
  'office interior design Bangalore',
  'industrial design and fit-out',
  'factory and warehouse interiors',
  'MS and SS fabrication Bangalore',
  'custom wood joinery and furniture',
  'FRP swimming pool Bangalore',
  'fiberglass pool installation',
  'smart pool automation',
  'jacuzzi and hot tub Bangalore',
  'prefab modular pods',
  'modular cabins and site office pods',
  'FRP underground sump tank',
  'composite water tank',
  'FRP wall art',
  'FRP planters and furniture',
  'landscape design Bangalore',
  'Kalyan Nagar',
  'Chellikere',
];

export const OG_BASE = {
  type: 'website',
  locale: 'en_IN',
  siteName: SITE.name,
  images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: 'Unicarper Design & Build: Spaces that work harder for you' }],
};

// Metadata for an inner page: canonical URL plus matching Open Graph / Twitter fields.
export function pageMeta({ path, title, description, keywords = [] }) {
  return {
    title,
    description,
    keywords: [...keywords, ...KEYWORDS],
    alternates: { canonical: path },
    // Next replaces (not merges) these objects per page, so repeat the shared base.
    openGraph: { ...OG_BASE, title, description, url: path },
    twitter: { card: 'summary_large_image', title, description, images: [SITE.ogImage] },
  };
}

export const organizationLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'HomeAndConstructionBusiness'],
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      alternateName: 'Unicarper',
      legalName: SITE.legalName,
      slogan: SITE.tagline,
      url: SITE.url,
      logo: `${SITE.url}${SITE.logo}`,
      image: `${SITE.url}${SITE.ogImage}`,
      email: SITE.email,
      telephone: SITE.phone,
      address: { '@type': 'PostalAddress', ...SITE.address },
      areaServed: [{ '@type': 'City', name: 'Bengaluru' }, { '@type': 'Country', name: 'India' }],
      contactPoint: [
        { '@type': 'ContactPoint', contactType: 'customer service', telephone: SITE.phone, email: SITE.email, areaServed: 'IN', availableLanguage: ['en', 'kn', 'hi'] },
      ],
      knowsAbout: ['Interior design', 'Design-build', 'MS and SS fabrication', 'FRP pools', 'Modular pods', 'Composite water infrastructure'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: 'en-IN',
      publisher: { '@id': `${SITE.url}/#organization` },
    },
  ],
};

export function breadcrumbLd(name, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name, item: `${SITE.url}${path}` },
    ],
  };
}

export function JsonLd({ data }) {
  // Escape "<" so content can never close the script tag.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
