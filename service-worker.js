self.addEventListener('install', function(event) {
    console.log('Service Worker installed');
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker activated');
});
self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'Default body',
        icon: 'icon.png',
        badge: 'badge.png'
    };
    event.waitUntil(
        self.registration.showNotification('Notification Title', options)
    );
});
