import { Component } from 'react';

export default class Websocket extends Component {
  emit = (data) => {
    this.ws.send(JSON.stringify(data));
  };
  open = (type, data) => {
    const {
      onMessage,
      onOpen,
      onClose,
      onError,
      initialData,
      endpoint,
    } = this.props;
    if (this.ws) {
      this.close();
    }
    const url = `${location.href.indexOf('https') === 0
      ? 'wss'
      : 'ws'}://${endpoint || location.host}`;
    this.ws = new WebSocket(url);
    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (onMessage) {
        onMessage(data);
      }
    };
    this.ws.onopen = (event) => {
      if (onOpen) {
        onOpen(event);
      }
      if (initialData) {
        this.emit(initialData);
      }
    };
    this.ws.onerror = (error) => {
      if (onError) {
        onError(error);
      }
    };
    this.ws.onclose = (event) => {
      if (onClose) {
        onClose(event);
      }
    };
  };
  close = (type, data) => {
    this.ws.close();
    this.ws = null;
  };
  componentDidMount() {
    this.open();
    const { onRef } = this.props;
    if (onRef) {
      onRef(this);
    }
  }
  componentDidUpdate() {
    const { onRef } = this.props;
    if (onRef) {
      onRef(this);
    }
  }
  componentWillUnmount() {
    this.close();
  }
  render() {
    return null;
  }
}
