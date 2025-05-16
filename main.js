if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker kaydedildi'))
    .catch(err => console.error('SW hatası:', err));
}

function subscribe() {
  if (Notification.permission === "granted") {
    navigator.serviceWorker.getRegistration().then(reg => {
      reg.showNotification('Merhaba!', {
        body: 'Bu bir olay sonrası tetiklenen bildirimi!',
        icon: 'icon-192.png'
      });
    });
  }
}

function veriGeldigindeBildirim() {
  console.log("Veri alınıyor...");
  setTimeout(() => {
    console.log("Veri geldi!");
    subscribe();
  }, 3000);
}

function izinIste() {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      alert("Bildirim izni verildi!");
    } else {
      alert("Bildirim izni verilmedi.");
    }
  });
}
