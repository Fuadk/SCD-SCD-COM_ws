// Service Worker for PALM Application
// Version: 2.0.0

const CACHE_NAME = 'palm-app-v2';
const OFFLINE_URL = '/prj1/offline.html';
const ASSETS_TO_CACHE = [
  '/prj1/',
  '/prj1/?c2hhcmU9RUtZQyZTQ1JFRU49cGFsbV9wYWxtX3VzZXJzX2Zvcm1zdGVwcw==',
  '/prj1/offline.html',
  '/prj1/manifest.json',
  '/prj1/icons/icon-192x192.png',
  '/prj1/icons/icon-512x512.png',
  // Add your main CSS and JS files
  '/prj1/styles/main.css',
  '/prj1/scripts/app.js'
];

// Install Event - Cache important assets
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        console.log('[Service Worker] Skip waiting on install');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[Service Worker] Installation failed:', error);
      })
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      console.log('[Service Worker] Claiming clients');
      return self.clients.claim();
    })
  );
});

// Fetch Event - Serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Skip cross-origin requests and non-GET requests
  if (!url.origin.startsWith('https://starapps.duckdns.org') || event.request.method !== 'GET') {
    return;
  }
  
  // Special handling for navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match(OFFLINE_URL);
        })
    );
    return;
  }
  
  // Cache-first strategy for assets
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response if found
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        // Try network
        return fetch(fetchRequest)
          .then(response => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone response
            const responseToCache = response.clone();
            
            // Cache successful responses
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(error => {
            console.log('[Service Worker] Fetch failed:', error);
            
            // For API requests, return a meaningful offline response
            if (event.request.url.includes('/api/')) {
              return new Response(
                JSON.stringify({
                  status: 'offline',
                  message: 'You are offline. Please check your connection.',
                  cached: false,
                  timestamp: new Date().toISOString()
                }),
                {
                  status: 503,
                  statusText: 'Service Unavailable',
                  headers: { 'Content-Type': 'application/json' }
                }
              );
            }
          });
      })
  );
});

// Background Sync for offline actions
self.addEventListener('sync', event => {
  console.log('[Service Worker] Background sync:', event.tag);
  
  if (event.tag === 'sync-forms') {
    event.waitUntil(syncPendingForms());
  }
});

// Push Notifications
self.addEventListener('push', event => {
  console.log('[Service Worker] Push received:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'New update in PALM system',
    icon: '/prj1/icons/icon-192x192.png',
    badge: '/prj1/icons/badge-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      url: '/prj1/',
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
    self.registration.showNotification('PALM System', options)
  );
});

self.addEventListener('notificationclick', event => {
  console.log('[Service Worker] Notification click:', event);
  
  event.notification.close();
  
  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/prj1/')
    );
  }
});

// Helper function for background sync
async function syncPendingForms() {
  const pendingForms = await getPendingFormsFromIndexedDB();
  
  for (const form of pendingForms) {
    try {
      const response = await fetch('/prj1/api/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form.data)
      });
      
      if (response.ok) {
        await removeFormFromIndexedDB(form.id);
        console.log(`Form ${form.id} synced successfully`);
      }
    } catch (error) {
      console.error(`Failed to sync form ${form.id}:`, error);
    }
  }
}

// IndexedDB helper functions
function getPendingFormsFromIndexedDB() {
  return new Promise((resolve) => {
    // Implement your IndexedDB logic here
    resolve([]);
  });
}

function removeFormFromIndexedDB(id) {
  return new Promise((resolve) => {
    // Implement your IndexedDB logic here
    resolve();
  });
}

// Periodically update cache in background
self.addEventListener('periodicsync', event => {
  if (event.tag === 'update-cache') {
    event.waitUntil(updateCache());
  }
});

async function updateCache() {
  const cache = await caches.open(CACHE_NAME);
  const requests = await cache.keys();
  
  for (const request of requests) {
    try {
      const networkResponse = await fetch(request);
      if (networkResponse.ok) {
        await cache.put(request, networkResponse.clone());
      }
    } catch (error) {
      console.log(`Failed to update ${request.url}:`, error);
    }
  }
}