const CACHE_NAME = "sw-cache-v1"
// The files we want to cache
var urlsToCache = [
  '/',
  '/js/jquery-3.4.1.min.js'
];

// Set the callback for the install step
self.addEventListener('install', function(event) {
  console.log('install')
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('fetch', event.request, event)
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(
        function(response) {
          // Check if we received a valid response
          if(!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // IMPORTANT: Clone the response. A response is a stream
          // and because we want the browser to consume the response
          // as well as the cache consuming the response, we need
          // to clone it so we have 2 stream.
          var responseToCache = response.clone();

          caches.open(CACHE_NAME)
          .then(function(cache) {
            cache.put(event.request, responseToCache);
          });

          return response;
        }
      );
    })
  );

});

