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
import { Component } from 'react';
var Websocket = (function (_super) {
    __extends(Websocket, _super);
    function Websocket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.emit = function (data) {
            _this.ws.send(JSON.stringify(data));
        };
        _this.open = function (type, data) {
            var _a = _this.props, onMessage = _a.onMessage, onOpen = _a.onOpen, onClose = _a.onClose, onError = _a.onError, initialData = _a.initialData, endpoint = _a.endpoint;
            if (_this.ws) {
                _this.close();
            }
            var url = (location.href.indexOf('https') === 0
                ? 'wss'
                : 'ws') + "://" + (endpoint || location.host);
            _this.ws = new WebSocket(url);
            _this.ws.onmessage = function (event) {
                var data = JSON.parse(event.data);
                if (onMessage) {
                    onMessage(data);
                }
            };
            _this.ws.onopen = function (event) {
                if (onOpen) {
                    onOpen(event);
                }
                if (initialData) {
                    _this.emit(initialData);
                }
            };
            _this.ws.onerror = function (error) {
                if (onError) {
                    onError(error);
                }
            };
            _this.ws.onclose = function (event) {
                if (onClose) {
                    onClose(event);
                }
            };
        };
        _this.close = function (type, data) {
            _this.ws.close();
            _this.ws = null;
        };
        return _this;
    }
    Websocket.prototype.componentDidMount = function () {
        this.open();
        var onRef = this.props.onRef;
        if (onRef) {
            onRef(this);
        }
    };
    Websocket.prototype.componentDidUpdate = function () {
        var onRef = this.props.onRef;
        if (onRef) {
            onRef(this);
        }
    };
    Websocket.prototype.componentWillUnmount = function () {
        this.close();
    };
    Websocket.prototype.render = function () {
        return null;
    };
    return Websocket;
}(Component));
export default Websocket;
//# sourceMappingURL=websocket.js.map