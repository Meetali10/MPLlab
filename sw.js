self.addEventListener("fetch", function (event) {
    event.respondWith(checkResponse(event.request).catch(function () {
    console.log("Fetch from cache successful!")
    return returnFromCache(event.request);
    }));
    console.log("Fetch successful!")
    event.waitUntil(addToCache(event.request));
    });