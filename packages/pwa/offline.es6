// window.Perf = require('react-addons-perf');
if (process.env.NODE_ENV === 'production') {
  const offline = require('cd/runtime');
  offline.install({
    onUpdating: () => {
      console.log('SW Event:', 'onUpdating');
    },
    onUpdateReady: () => {
      console.log('SW Event:', 'onUpdateReady');
      offline.applyUpdate();
    },
    onUpdated: () => {
      console.log('SW Event:', 'onUpdated');
      // window.location.reload(); // Only needed with autoUpdates
    },
    onUpdateFailed: () => {
      console.log('SW Event:', 'onUpdateFailed');
    },
  });
} else if (typeof navigator !== 'undefined' && navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (const registration of registrations) {
      registration.unregister();
    }
  });
}
