if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker kaydedildi'))
    .catch(err => console.error('SW hatası:', err));
}

function subscribe() {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      navigator.serviceWorker.getRegistration().then(reg => {
        reg.showNotification('Merhaba!', {
          body: 'Bu bir PWA bildirimidir.',
          icon: 'icon-192.png'
        });
      });
    } else {
      alert('Bildirim izni verilmedi.');
    }
  });
}