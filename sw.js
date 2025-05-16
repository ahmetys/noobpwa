self.addEventListener('install', event => {
  console.log('Service Worker yüklendi');
});

self.addEventListener('activate', event => {
  console.log('Service Worker aktif');
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
});