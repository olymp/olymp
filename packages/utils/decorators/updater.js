var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _this = this;
import { Component } from 'react';
import PropTypes from 'prop-types';
import { notification } from 'antd';
import shortid from 'shortid';
var WebsocketProvider = (function (_super) {
    __extends(WebsocketProvider, _super);
    function WebsocketProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listeners = {};
        _this.state = { connected: false };
        _this.unlisten = function (token) { return function (name) {
            if (!_this.listeners[name]) {
                _this.listeners[name] = {};
            }
            delete _this.listeners[name][token];
        }; };
        _this.on = function (name, fc) {
            if (!_this.listeners[name]) {
                _this.listeners[name] = {};
            }
            var token = shortid.generate();
            _this.listeners[name][token] = fc;
            return _this.unlisten(token);
        };
        _this.emit = function (type, data) {
            _this.ws.send(JSON.stringify(__assign({}, data, { type: type })));
        };
        _this.showNotification = function (message, description, btn) {
            if (!_this.key) {
                _this.key = "open" + Date.now();
            }
            if (!message) {
                notification.close(_this.key);
            }
            else {
                notification.warning({
                    message: message,
                    description: description,
                    btn: btn,
                    key: _this.key,
                    duration: 0,
                });
            }
        };
        _this.connected = function (connected) {
            if (connected === true) {
                _this.showNotification();
            }
            else if (connected === null) {
                _this.showNotification('Offline', 'Sie sind derzeit nicht zum Internet verbunden.');
            }
            else if (connected === false) {
                _this.showNotification('Server Offline', 'Der Server steht zurzeit nicht zur Verfügung.');
            }
            _this.setState({ connected: connected });
        };
        _this.connect = function () {
            var url = (location.href.indexOf('https') === 0
                ? 'wss'
                : 'ws') + "://" + location.host;
            _this.ws = new WebSocket(url);
            var interval;
            var hasPong = true;
            var onPong = function (_a) {
                var version = _a.version, xyz = _a.xyz;
                hasPong = true;
                if (_this.lastVersion && _this.lastVersion !== version) {
                    _this.showNotification('Neues Update verfügbar', 'Möchten Sie die neue Version sofort benutzen?', size, "small", onClick = {}());
                }
            };
            location.reload();
        };
        return _this;
    }
    WebsocketProvider.prototype.getChildContext = function () {
        return {
            socket: {
                on: this.on,
                emit: this.emit,
                unlisten: this.unlisten,
                ws: this.ws,
                connected: this.state.connected,
            },
        };
    };
    WebsocketProvider.childContextTypes = {
        socket: PropTypes.object,
    };
    return WebsocketProvider;
}(Component));
export { WebsocketProvider };
 >
    Ja, Seite;
neu;
laden
    < /Button>;
;
this.lastVersion = version;
;
this.ws.onmessage = function (event) {
    var data = JSON.parse(event.data);
    if (data.type === 'pong') {
        return onPong(data);
    }
    if (_this.listeners[data.type]) {
        _this.listeners[data.type].forEach(function (fc) { return fc(data); });
    }
};
this.ws.onopen = function (event) {
    _this.connected(true);
    interval = setInterval(function () {
        if (!hasPong) {
            _this.connected(null);
        }
        hasPong = false;
        _this.ws.send('ping');
    }, 3000);
};
this.ws.onerror = function (error) {
    console.error('ws error', error);
};
this.ws.onclose = function () {
    _this.connected(false);
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
    setTimeout(_this.connect, 5000);
};
;
componentDidMount();
{
    this.connect();
}
render();
{
    return Children.only(this.props.children);
}
export default function (WrappedComponent) {
    var withWebsocket = function (props, context) {
        return (__assign({}, context));
    }, props = __rest(/>;, []);
    withWebsocket.contextTypes = {
        socket: PropTypes.object,
    };
    return withWebsocket;
};
//# sourceMappingURL=updater.js.map