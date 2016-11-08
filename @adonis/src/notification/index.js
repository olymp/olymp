import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NotificationItem from './notification-item';

import './notification.less';

export default class Notification extends Component {
  id = 0;
  static propTypes = {
    children: PropTypes.element,
  }

  constructor() {
    super();
    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    window.addNotification = (notification) => {
      var state = this.state;
      const newData = state.notifications.slice();
      if (!notification.id) {
        this.id = this.id + 1;
        notification.id = this.id;
      }
      notification.remove = () => window.removeNotification(notification);
      notification.update = message => window.updateNotification({ ...notification, message });
      newData.push(notification);
      this.setState({
        notifications: newData,
      });
      return notification;
    };
    window.removeNotification = (notification) => {
      const state = this.state;
      const newData = state.notifications.filter(x => x.id !== notification.id);
      this.setState({
        notifications: newData,
      });
    };
    window.updateNotification = (notification) => {
      const state = this.state;
      const newData = state.notifications.map(x => x.id === notification.id ? notification : x);
      this._update = true;
      this.setState({
        notifications: newData,
      });
    };
  }

  shouldComponentUpdate(props, state) {
    if (this.state.notifications.length !== state.notifications.length || this._update) {
      this._update = false;
      return true;
    }
    return false;
  }

  removeNotification = notification => {
    window.removeNotification(notification);
  }

  render() {
    const { notifications } = this.state;

    const n = notifications.map((notification) => {
      return (
        <NotificationItem
          key={notification.id}
          onRemove={this.removeNotification}
          {...notification}
        />
      );
    });

    return (
      <div className="notifications-wrapper">
        <div className="notifications-br">
          <ReactCSSTransitionGroup transitionName="anim-slide-left-right" transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {n}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

