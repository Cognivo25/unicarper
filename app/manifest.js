import { SITE } from './seo';

export default function manifest() {
  return {
    name: SITE.name,
    short_name: 'Unicarper',
    description: 'Design, engineering and fabrication, all under one roof in Bengaluru.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#19191a',
    icons: [{ src: '/icon.png', sizes: 'any', type: 'image/png' }],
  };
}
