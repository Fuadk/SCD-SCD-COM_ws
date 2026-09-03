// Service Worker for MyApps Application
// Version: 2.0.2

const CACHE_NAME = 'MyApps-app-v3';
const OFFLINE_URL = '/SCD-SCD-COM/offline.html';
const SCADA_ORIGIN = 'https://starapps.duckdns.org:53531';

const ASSETS_TO_CACHE = [
  '/SCD-SCD-COM/',
  '/SCD-SCD-COM/?c2hhcmU9RUtZQyZTQ1JFRU49cGFsbV9wYWxtX3VzZXJzX2Zvcm1zdGVwcw==',
  '/SCD-SCD-COM/offline.html',
  '/SCD-SCD-COM/manifest.json',
  '/SCD-SCD-COM/icons/icon-192x192.png',
  '/SCD-SCD-COM/icons/icon-512x512.png'
];


// ============================================================
// INSTALL
// ============================================================

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});


// ============================================================
// ACTIVATE
// ============================================================

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
            return undefined;
          })
        );
      })
      .then(() => self.clients.claim())
  );
});


// ============================================================
// FETCH
// ============================================================

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // ----------------------------------------------------------
  // 1. Only handle GET requests
  // ----------------------------------------------------------

  if (event.request.method !== 'GET') {
    return;
  }

  // ----------------------------------------------------------
  // 2. Never intercept external origins
  // ----------------------------------------------------------

  if (url.origin !== self.location.origin) {
    return;
  }

  // ----------------------------------------------------------
  // 3. SCADA API - NEVER CACHE / NEVER INTERCEPT
  // ----------------------------------------------------------

  if (url.origin === SCADA_ORIGIN) {
    return;
  }

  // ----------------------------------------------------------
  // 4. Application API - NETWORK FIRST
  // ----------------------------------------------------------

  if (
    url.pathname === '/api' ||
    url.pathname.startsWith('/api/')
  ) {

    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {

          // Cache only successful responses
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type === 'basic'
          ) {
            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                return cache.put(
                  event.request,
                  responseToCache
                );
              })
              .catch(() => {
                // Cache failure must not affect the network response
              });
          }

          return networkResponse;
        })

        .catch(() => {

          return caches.match(event.request)
            .then(cachedResponse => {

              if (cachedResponse) {
                return cachedResponse;
              }

              return new Response(
                JSON.stringify({
                  status: 'offline',
                  message: 'Unable to reach server.',
                  cached: false,
                  timestamp: new Date().toISOString()
                }),
                {
                  status: 503,
                  statusText: 'Service Unavailable',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }
              );
            });
        })
    );

    return;
  }


  // ----------------------------------------------------------
  // 5. Navigation requests
  // ----------------------------------------------------------

  if (event.request.mode === 'navigate') {

    event.respondWith(
      fetch(event.request)
        .catch(() => {

          return caches.match(OFFLINE_URL)
            .then(offlineResponse => {

              if (offlineResponse) {
                return offlineResponse;
              }

              // Never allow respondWith() to receive undefined
              return new Response(
                'You are offline.',
                {
                  status: 503,
                  statusText: 'Service Unavailable',
                  headers: {
                    'Content-Type': 'text/plain'
                  }
                }
              );
            });
        })
    );

    return;
  }


  // ----------------------------------------------------------
  // 6. CACHE FIRST for everything else
  // ----------------------------------------------------------

  event.respondWith(

    caches.match(event.request)

      .then(cachedResponse => {

        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)

          .then(networkResponse => {

            // Don't cache invalid responses
            if (
              !networkResponse ||
              networkResponse.status !== 200 ||
              networkResponse.type !== 'basic'
            ) {
              return networkResponse;
            }

            const responseToCache =
              networkResponse.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                return cache.put(
                  event.request,
                  responseToCache
                );
              })
              .catch(() => {
                // Cache failure must not affect the response
              });

            return networkResponse;
          });
      })

      .catch(() => {

        // Always return a Response.
        // Never allow respondWith() to resolve to undefined.

        return new Response(
          JSON.stringify({
            status: 'offline',
            message: 'You are offline. Please check your connection.',
            cached: false,
            url: url.href,
            timestamp: new Date().toISOString()
          }),
          {
            status: 503,
            statusText: 'Service Unavailable',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
      })
  );
});


// ============================================================
// BACKGROUND SYNC
// ============================================================

self.addEventListener('sync', event => {

  if (event.tag === 'sync-forms') {
    event.waitUntil(syncPendingForms());
  }

});


// ============================================================
// PUSH NOTIFICATIONS
// ============================================================

self.addEventListener('push', event => {

  const options = {
    body: event.data
      ? event.data.text()
      : 'New update in MyApps system',

    icon: '/SCD-SCD-COM/icons/icon-192x192.png',

    badge: '/SCD-SCD-COM/icons/badge-72x72.png',

    vibrate: [200, 100, 200],

    data: {
      url: '/SCD-SCD-COM/',
      timestamp: Date.now()
    },

    actions: [
      {
        action: 'open',
        title: 'Open App'
      },
      {
        action: 'dismiss',
        title: 'Dismiss'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(
      'MyApps System',
      options
    )
  );

});


// ============================================================
// NOTIFICATION CLICK
// ============================================================

self.addEventListener('notificationclick', event => {

  event.notification.close();

  if (event.action === 'open') {

    event.waitUntil(
      clients.openWindow(
        event.notification.data.url ||
        '/SCD-SCD-COM/'
      )
    );

  }

});


// ============================================================
// BACKGROUND SYNC HELPERS
// ============================================================

async function syncPendingForms() {

  const pendingForms =
    await getPendingFormsFromIndexedDB();

  for (const form of pendingForms) {

    try {

      const response = await fetch(
        '/SCD-SCD-COM/api/sync',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form.data)
        }
      );

      if (response.ok) {
        await removeFormFromIndexedDB(form.id);
      }

    } catch (error) {
      // Background sync failure.
      // The form remains pending for a future retry.
    }

  }
}


// ============================================================
// INDEXEDDB HELPERS
// ============================================================

function getPendingFormsFromIndexedDB() {

  return new Promise(resolve => {

    // Implement your IndexedDB logic here
    resolve([]);

  });

}


function removeFormFromIndexedDB(id) {

  return new Promise(resolve => {

    // Implement your IndexedDB logic here
    resolve();

  });

}


// ============================================================
// PERIODIC CACHE UPDATE
// ============================================================

self.addEventListener('periodicsync', event => {

  if (event.tag === 'update-cache') {
    event.waitUntil(updateCache());
  }

});


async function updateCache() {

  const cache =
    await caches.open(CACHE_NAME);

  const requests =
    await cache.keys();

  for (const request of requests) {

    try {

      const requestUrl =
        new URL(request.url);

      // Never refresh SCADA requests
      if (requestUrl.origin === SCADA_ORIGIN) {
        continue;
      }

      const networkResponse =
        await fetch(request);

      if (networkResponse.ok) {

        await cache.put(
          request,
          networkResponse.clone()
        );

      }

    } catch (error) {
      // Keep the existing cached version
      // if the network update fails.
    }

  }

}