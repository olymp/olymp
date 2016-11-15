const { createNotification } = require('../utils');

class ListenerManager {
  constructor(listener, name) {
    this.name = name || 'listener';
    this.lastConnectionKey = 0;
    this.connectionMap = {};
    this.listener = listener;

    // Track all connections to our server so that we can close them when needed.
    this.listener.on('connection', (connection) => {
      // Increment the connection key.
      this.lastConnectionKey += 1;
      // Generate a new key to represent the connection
      const connectionKey = this.lastConnectionKey;
      // Add the connection to our map.
      this.connectionMap[connectionKey] = connection;
      // Remove the connection from our map when it closes.
      connection.on('close', () => {
        delete this.connectionMap[connectionKey];
      });
    });
  }

  killAllConnections() {
    Object.keys(this.connectionMap).forEach((connectionKey) => {
      this.connectionMap[connectionKey].destroy();
    });
  }

  dispose() {
    return new Promise((resolve) => {
      if (this.listener) {
        this.killAllConnections();

        createNotification({
          title: this.name,
          level: 'info',
          message: 'Destroyed all existing connections.',
        });

        this.listener.close(() => {
          createNotification({
            title: this.name,
            level: 'info',
            message: 'Closed listener.',
          });
        });

        resolve();
      } else {
        resolve();
      }
    });
  }
}

module.exports = ListenerManager;
