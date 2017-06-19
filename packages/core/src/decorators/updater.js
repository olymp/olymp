import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { Button, notification } from 'antd';
import shortid from 'shortid';

export class WebsocketProvider extends Component {
  listeners = {};
  state = { connected: false };
  static childContextTypes = {
    socket: PropTypes.object,
  };
  getChildContext() {
    return {
      socket: {
        on: this.on,
        emit: this.emit,
        unlisten: this.unlisten,
        ws: this.ws,
        connected: this.state.connected,
      },
    };
  }
  unlisten = token => (name) => {
    if (!this.listeners[name]) {
      this.listeners[name] = {};
    }
    delete this.listeners[name][token];
  };
  on = (name, fc) => {
    if (!this.listeners[name]) {
      this.listeners[name] = {};
    }
    const token = shortid.generate();
    this.listeners[name][token] = fc;
    return this.unlisten(token);
  };
  emit = (type, data) => {
    this.ws.send(JSON.stringify({ ...data, type }));
  };
  showNotification = (message, description, btn) => {
    if (!this.key) {
      this.key = `open${Date.now()}`;
    }
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
  };
  connected = (connected) => {
    // if (this.state.connected === connected) return;
    if (connected === true) {
      this.showNotification();
    } else if (connected === null) {
      this.showNotification(
        'Offline',
        'Sie sind derzeit nicht zum Internet verbunden.'
      );
    } else if (connected === false) {
      this.showNotification(
        'Server Offline',
        'Der Server steht zurzeit nicht zur Verfügung.'
      );
    }
    this.setState({ connected });
  };
  connect = () => {
    const url = `${location.href.indexOf('https') === 0
      ? 'wss'
      : 'ws'}://${location.host}`;
    this.ws = new WebSocket(url);
    let interval;
    let hasPong = true;
    const onPong = ({ version, xyz }) => {
      hasPong = true;
      if (this.lastVersion && this.lastVersion !== version) {
        this.showNotification(
          'Neues Update verfügbar',
          'Möchten Sie die neue Version sofort benutzen?',
          <Button size="small" onClick={() => location.reload()}>
            Ja, Seite neu laden
          </Button>
        );
      }
      this.lastVersion = version;
    };
    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'pong') {
        return onPong(data);
      }
      if (this.listeners[data.type]) {
        this.listeners[data.type].forEach(fc => fc(data));
      }
    };
    this.ws.onopen = (event) => {
      this.connected(true);
      interval = setInterval(() => {
        if (!hasPong) {
          this.connected(null);
        }
        hasPong = false;
        this.ws.send('ping');
      }, 3000);
    };
    this.ws.onerror = (error) => {
      console.error('uws error', error);
    };
    this.ws.onclose = () => {
      this.connected(false);
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
      setTimeout(this.connect, 5000);
    };
  };
  componentDidMount() {
    this.connect();
  }
  render() {
    return Children.only(this.props.children);
  }
}

export default (WrappedComponent) => {
  const withWebsocket = (props, context) =>
    <WrappedComponent {...context} {...props} />;
  withWebsocket.contextTypes = {
    socket: PropTypes.object,
  };
  return withWebsocket;
};
