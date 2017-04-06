import React, { Component, Children, PropTypes } from 'react';
import { Button, notification } from 'antd';

export class WebsocketProvider extends Component {
  state = { isOffline: false };
  static childContextTypes = {
    websocket: React.PropTypes.object,
    isOffline: React.PropTypes.bool,
  };
  getChildContext() {
    return {
      websocket: this.ws,
      isOffline: this.state.isOffline,
    };
  }
  showNotification = (message, description, btn) => {
    if (!this.key) this.key = `open${Date.now()}`;
    notification.close(this.key);
    if (!message) return;
    notification.warning({
      message,
      description,
      btn,
      key: this.key,
      duration: 0,
    });
  }
  isOffline = isOffline => {
    if (this.state.isOffline === isOffline) return;
    this.setState({ isOffline });
    if (!isOffline) return this.showNotification();
    this.showNotification(
      'Verbindung verloren',
      'Sie sind offline oder die Website steht zurzeit nicht zur Verfügung.',
    );
  }
  connect = () => {
    const server = this.ws = new WebSocket(`ws://${location.host}`);
    let interval;
    const onPong = ({ version, xyz }) => {
      console.log('Pong', version, xyz);
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
      this.isOffline(false);
      interval = setInterval(() => {
        server.send('ping');
      }, 3000);
    };
    server.onclose = () => {
      this.isOffline(true);
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
