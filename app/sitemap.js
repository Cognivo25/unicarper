import { SITE } from './seo';

export default function sitemap() {
  return [
    ['/', 1, 'weekly'],
    ['/services', 0.9, 'monthly'],
    ['/about', 0.8, 'monthly'],
    ['/references', 0.8, 'monthly'],
    ['/contact', 0.7, 'yearly'],
  ].map(([path, priority, changeFrequency]) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
