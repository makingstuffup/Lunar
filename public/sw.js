importScripts("./dip/dip.worker.js");

const sw = new DIPServiceWorker("./dip/dip.worker.js");

self.addEventListener("fetch", (event) => {
  if (event.request.url.startsWith(location.origin + "/d/"))
    event.respondWith(sw.fetch(event));
});
