import { SITE } from './seo';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
