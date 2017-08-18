import * as offline from 'offline-plugin/runtime';

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
