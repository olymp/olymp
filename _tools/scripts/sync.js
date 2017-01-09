const chokidar = require('chokidar');
const fs = require('fs-extra');
const path = require('path');
const appRootPath = require('app-root-dir').get();

const match = p => {
  if (p.indexOf('/node_modules/') !== -1) return true;
  if (p.indexOf('/.git/') !== -1) return true;
  return false;
};

const SyncEvent = {
  Copy: 0,
  Remove: 1,
  NoDelete: 2,
  Watch: 3,
  Error: 4,
};
function sync(source, target) {
  return chokidar.watch(source, {
    persistent: true,
    depth: Infinity,
    usePolling: false,
    ignoreInitial: false,
    ignored: [match],
    followSymlinks: false,
  })
    .on('ready', () => log(SyncEvent.Watch, source))
    .on('add', copyWatcher(source, target))
    .on('addDir', copyWatcher(source, target))
    .on('change', copyWatcher(source, target))
    .on('unlink', destroyWatcher(source, target))
    .on('unlinkDir', destroyWatcher(source, target))
    .on('error', errorWatcher());
}

function copyWatcher(source, target) {
  return f => copy(f, path.join(target, path.relative(source, f)));
}

function destroyWatcher(source, target) {
  return f => deleteExtra(path.join(target, path.relative(source, f)));
}

function errorWatcher() {
  return err => log(SyncEvent.Error, err);
}

function deleteExtra(fileordir) {
  destroy(fileordir);
  log(SyncEvent.NoDelete, fileordir);
}

function copy(source, target) {
  log(SyncEvent.Copy, [source, target]);
  try {
    fs.copySync(source, target);
  } catch (e) {
    log(SyncEvent.Error, e);
  }
}

function destroy(fileordir) {
  log(SyncEvent.Remove, fileordir);
  try {
    fs.remove(fileordir);
  } catch (e) {
    log(SyncEvent.Error, e);
  }
}

function log(event, data) {
  switch (event) {
    case SyncEvent.Error:
      console.error(data.message || data);
      break;
    case SyncEvent.Copy:
      const from = path.relative(appRootPath, data[0]);
      const to = path.relative(appRootPath, data[1]);
      console.log(`COPIED: ${from} to ${to}`);
      break;
    case SyncEvent.Remove:
      const removed = path.relative(appRootPath, data);
      console.log(`DELETED: ${removed}`);
      break;
    case SyncEvent.Watch:
      const watching = path.relative(appRootPath, data);
      console.log(`WATCHING: ${watching}`);
      break;
    case SyncEvent.NoDelete:
      const noDel = path.relative(appRootPath, data);
      console.log(`IGNORED: ${noDel}`);
      break;
    default:
      break;
  }
}

module.exports = sync;
if (process.env.OLYMP_PATH && process.env.OLYMP_PATH.indexOf('/') === 0) sync(path.resolve(process.env.OLYMP_PATH), path.resolve(appRootPath, 'node_modules', 'olymp'));
else if (process.env.OLYMP_PATH) sync(path.resolve(appRootPath, process.env.OLYMP_PATH), path.resolve(appRootPath, 'node_modules', 'olymp'));
else console.error('Please set OLYMP_PATH environment var!');

setTimeout(() => require('../development'), 3000);
