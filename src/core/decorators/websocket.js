import React, { Component, Children, PropTypes } from 'react';
import { Button, notification } from 'antd';

export class WebsocketProvider extends Component {
  state = { connected: true };
  static childContextTypes = {
    websocket: React.PropTypes.object,
    connected: React.PropTypes.bool,
  };
  getChildContext() {
    return {
      websocket: this.ws,
      connected: this.state.connected,
    };
  }
  showNotification = (message, description, btn) => {
    if (!this.key) this.key = `open${Date.now()}`;
    if (!message) {
      notification.close(this.key);
    } else {
      notification.warning({
        message,
        description,
        btn,
        key: this.key,
        duration: 0,
      });
    }
  }
  connected = (connected) => {
    console.log('uws state', connected, this.ws.readyState);
    // if (this.state.connected === connected) return;
    if (connected === true) {
      this.showNotification();
    } else if (connected === null) {
      this.showNotification(
        'Offline',
        'Sie sind derzeit nicht zum Internet verbunden.',
      );
    } else if (connected === false) {
      this.showNotification(
        'Server Offline',
        'Der Server steht zurzeit nicht zur Verfügung.',
      );
    }
    this.setState({ connected });
  }
  connect = () => {
    const url = `${location.href.indexOf('https') === 0 ? 'wss' : 'ws'}://${location.host}`;
    const server = this.ws = new WebSocket(url);
    let interval;
    let hasPong = true;
    const onPong = ({ version, xyz }) => {
      hasPong = true;
      if (this.lastVersion && this.lastVersion !== version) {
        this.showNotification(
          'Neues Update verfügbar',
          'Möchten Sie die neue Version sofort benutzen?',
          (
            <Button size="small" onClick={() => location.reload()}>
              Ja, Seite neu laden
            </Button>
          ),
        );
      } this.lastVersion = version;
    };
    server.onmessage = event => {
      const data = JSON.parse(event.data);
      if (data.type === 'pong') onPong(data);
    };
    server.onopen = event => {
      this.connected(true);
      interval = setInterval(() => {
        if (!hasPong) {
          this.connected(null);
        }
        hasPong = false;
        server.send('ping');
      }, 3000);
    };
    server.onerror = error => {
      console.error('uws error', error);
    };
    server.onclose = () => {
      this.connected(false);
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
      setTimeout(this.connect, 5000);
    };
  }
  componentDidMount() {
    this.connect();
  }
  render() {
    return Children.only(this.props.children);
  }
};

export default (WrappedComponent) => {
  const withWebsocket = (props, context) => (
    <WrappedComponent {...context} {...props} />
  );
  withWebsocket.contextTypes = {
    websocket: React.PropTypes.object,
    isOffline: React.PropTypes.bool,
  };
  return withWebsocket;
};
