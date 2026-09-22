import './globals.css';
import { SITE, KEYWORDS, OG_BASE, organizationLd, JsonLd } from './seo';

const title = 'Unicarper | Design & Build Company in Bangalore';
const description = 'Bengaluru design-build firm: residential, commercial and industrial interiors, in-house MS/SS/wood fabrication, FRP pools, jacuzzis, modular pods and FRP sumps.';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: title, template: '%s | Unicarper' },
  description,
  keywords: KEYWORDS,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.legalName,
  category: 'Construction & Interior Design',
  alternates: { canonical: '/' },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: { ...OG_BASE, url: '/', title, description },
  twitter: { card: 'summary_large_image', title, description, images: [SITE.ogImage] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  other: { 'geo.region': 'IN-KA', 'geo.placename': 'Bengaluru' },
};

export const viewport = { themeColor: '#19191a', width: 'device-width', initialScale: 1 };

const css = ['bootstrap', 'animate', 'swiper-bundle', 'slick', 'magnific-popup', 'font-awesome-pro', 'spacing', 'custom-animation', 'main'];

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        {css.map((f) => <link key={f} rel="stylesheet" href={`/assets/css/${f}.css`} />)}
        <JsonLd data={organizationLd} />
        {/* Links are full page loads; Chrome/Edge prerender the page on hover so the click is instant. */}
        <script type="speculationrules" dangerouslySetInnerHTML={{ __html: JSON.stringify({ prerender: [{ where: { href_matches: '/*' }, eagerness: 'moderate' }] }) }} />
      </head>
      <body id="body" className="tp-smooth-scroll">{children}</body>
    </html>
  );
}
