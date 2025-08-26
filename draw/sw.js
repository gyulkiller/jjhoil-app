const CACHE_VERSION = 'v1';
const THUMB_CACHE = `thumb-cache-${CACHE_VERSION}`;
const API_CACHE = `api-cache-${CACHE_VERSION}`;

const IK_HOST = 'ik.imagekit.io';
const API_HOST = 'tally-to-d1.gyulkiller.workers.dev';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => ![THUMB_CACHE, API_CACHE].includes(k)).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

// Helper: cache-first for thumbnails
async function handleThumb(request) {
  const cache = await caches.open(THUMB_CACHE);
  const cached = await cache.match(request, { ignoreSearch: false });
  if (cached) return cached;
  const res = await fetch(request);
  if (res.ok) {
    cache.put(request, res.clone());
  }
  return res;
}

// Helper: network-first for API
async function handleApi(request) {
  const cache = await caches.open(API_CACHE);
  try {
    const res = await fetch(request, { cache: 'no-store' });
    if (res.ok) cache.put(request, res.clone());
    return res;
  } catch (e) {
    const fallback = await cache.match(request, { ignoreSearch: false });
    if (fallback) return fallback;
    throw e;
  }
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET') return;
  // ImageKit thumbnails
  if (url.hostname.endsWith(IK_HOST)) {
    event.respondWith(handleThumb(event.request));
    return;
  }
  // API calls
  if (url.hostname.endsWith(API_HOST)) {
    event.respondWith(handleApi(event.request));
    return;
  }
  // Otherwise, pass-through
});


