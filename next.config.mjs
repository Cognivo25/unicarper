// Static theme files and images: cache for a week so full-page navigations don't revalidate ~40 files.
// ponytail: filenames aren't hashed, so edits take up to a week to reach repeat visitors; rename the file to bust.
const week = 'public, max-age=604800, stale-while-revalidate=86400';

export default {
  turbopack: { root: import.meta.dirname },
  async headers() {
    return ['/assets/:path*', '/unicarper/:path*'].map((source) => ({
      source,
      headers: [{ key: 'Cache-Control', value: week }],
    }));
  },
};
