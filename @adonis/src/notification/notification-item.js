import React from 'react';
import ReactDOM from 'react-dom';

class Timer {
  constructor(callback, delay) {
     this.callback = callback;
     this.remaining = delay;
     this.resume();
   }

  pause() {
     clearTimeout(this.id);
     this.remaining -= new Date() - start;
   }

  resume() {
     this.start = new Date();
     clearTimeout(this.id);
     this.id = setTimeout(this.callback, this.remaining);
   }

  clear() {
     clearTimeout(this.id);
   }
}

var NotificationItem = React.createClass({
  propTypes: {
     notification: React.PropTypes.object,
     onRemove: React.PropTypes.func,
     allowHTML: React.PropTypes.bool,
  },

  getDefaultProps () {
    return {
      id: null,
      autoDismiss: 0.5,
      level: 'success',
      allowHTML: false,
      dismissible: true,
      animation: true,
      title: 'Hallo',
      text: 'Der Text',
      action: null,
    };
  },
  shouldComponentUpdate () {
    return true;
  },

  _notificationTimer: null,

  _defaultAction (event) {
     event.stopPropagation();
     this._hideNotification();
     if (this.props.action && this.props.action.callback) {
        this.props.action.callback(this.props);
      }
   },

  _hideNotification () {
     if (this._notificationTimer) {
        this._notificationTimer.clear();
      }
     this._removeNotification();
   },

  _removeNotification () {
     this.props.onRemove(this.props);
   },

  _dismiss () {
    if (!this.props.dismissible) {
      return;
    }
    this._hideNotification();
  },

  componentDidMount () {
    const element = ReactDOM.findDOMNode(this);
    if (this.props.autoDismiss) {
      setTimeout(this._hideNotification, this.props.autoDismiss * 1000);
        /* this._notificationTimer = new Timer(function () {
          self._hideNotification();
        }, this.props.autoDismiss * 1000, this.props.id);

        /*element.addEventListener('mouseenter', function () {
          self._notificationTimer.pause();
        });

        element.addEventListener('mouseleave', function () {
          self._notificationTimer.resume();
        });*/
    }
  },

  _allowHTML (string) {
     if (true) {
        return { __html: string };
      }
     return string;
   },

  render () {
     var className = 'notification notification-' + this.props.level;

     className = className + ' notification-visible';

     if (!this.props.dismissible) {
        className = className + ' notification-not-dismissible';
      }

     var dismiss = null;
     var actionButton = null;
     var title = null;
     var message = null;

     if (this.props.title) {
        title = <h4 className="notification-title">{this.props.title}</h4>;
      }

     if (this.props.message) {
        if (this.props.allowHTML) {
           message = (
               <div className="notification-message"
                 dangerouslySetInnerHTML={this._allowHTML(this.props.message)}
               ></div>
            );
         } else {
           message = (
               <div className="notification-message">{this.props.message}</div>
            );
         }
      }

     if (this.props.dismissible) {
        dismiss = <span className="notification-dismiss">&times;</span>;
      }

     if (this.props.action) {
        className = className + ' notification-with-action';
        actionButton = (
            <div className="notification-action-wrapper">
               <button className="notification-action-button" onClick={this._defaultAction}>{this.props.action.label}</button>
            </div>
         );
      }

     return (
         <div className={className} onClick={this._dismiss}>
            {title}
            {message}
            {dismiss}
            {actionButton}
         </div>
      );
   },
});

export default NotificationItem;
