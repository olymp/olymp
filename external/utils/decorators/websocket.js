var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Component } from 'react';

var Websocket = function (_Component) {
  _inherits(Websocket, _Component);

  function Websocket() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Websocket);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Websocket.__proto__ || Object.getPrototypeOf(Websocket)).call.apply(_ref, [this].concat(args))), _this), _this.emit = function (data) {
      _this.ws.send(JSON.stringify(data));
    }, _this.open = function (type, data) {
      var _this$props = _this.props,
          onMessage = _this$props.onMessage,
          onOpen = _this$props.onOpen,
          onClose = _this$props.onClose,
          onError = _this$props.onError,
          initialData = _this$props.initialData,
          endpoint = _this$props.endpoint;

      if (_this.ws) {
        _this.close();
      }
      var url = (location.href.indexOf('https') === 0 ? 'wss' : 'ws') + '://' + (endpoint || location.host);
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
    }, _this.close = function (type, data) {
      _this.ws.close();
      _this.ws = null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Websocket, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.open();
      var onRef = this.props.onRef;

      if (onRef) {
        onRef(this);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var onRef = this.props.onRef;

      if (onRef) {
        onRef(this);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.close();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Websocket;
}(Component);

export { Websocket as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL2RlY29yYXRvcnMvd2Vic29ja2V0LmVzNiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJXZWJzb2NrZXQiLCJlbWl0IiwiZGF0YSIsIndzIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcGVuIiwidHlwZSIsInByb3BzIiwib25NZXNzYWdlIiwib25PcGVuIiwib25DbG9zZSIsIm9uRXJyb3IiLCJpbml0aWFsRGF0YSIsImVuZHBvaW50IiwiY2xvc2UiLCJ1cmwiLCJsb2NhdGlvbiIsImhyZWYiLCJpbmRleE9mIiwiaG9zdCIsIldlYlNvY2tldCIsIm9ubWVzc2FnZSIsImV2ZW50IiwicGFyc2UiLCJvbm9wZW4iLCJvbmVycm9yIiwiZXJyb3IiLCJvbmNsb3NlIiwib25SZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsU0FBU0EsU0FBVCxRQUEwQixPQUExQjs7SUFFcUJDLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSSxHQUFPLFVBQUNDLElBQUQsRUFBVTtBQUNmLFlBQUtDLEVBQUwsQ0FBUUMsSUFBUixDQUFhQyxLQUFLQyxTQUFMLENBQWVKLElBQWYsQ0FBYjtBQUNELEssUUFDREssSSxHQUFPLFVBQUNDLElBQUQsRUFBT04sSUFBUCxFQUFnQjtBQUFBLHdCQVFqQixNQUFLTyxLQVJZO0FBQUEsVUFFbkJDLFNBRm1CLGVBRW5CQSxTQUZtQjtBQUFBLFVBR25CQyxNQUhtQixlQUduQkEsTUFIbUI7QUFBQSxVQUluQkMsT0FKbUIsZUFJbkJBLE9BSm1CO0FBQUEsVUFLbkJDLE9BTG1CLGVBS25CQSxPQUxtQjtBQUFBLFVBTW5CQyxXQU5tQixlQU1uQkEsV0FObUI7QUFBQSxVQU9uQkMsUUFQbUIsZUFPbkJBLFFBUG1COztBQVNyQixVQUFJLE1BQUtaLEVBQVQsRUFBYTtBQUNYLGNBQUthLEtBQUw7QUFDRDtBQUNELFVBQU1DLE9BQVNDLFNBQVNDLElBQVQsQ0FBY0MsT0FBZCxDQUFzQixPQUF0QixNQUFtQyxDQUFuQyxHQUNYLEtBRFcsR0FFWCxJQUZFLGFBRVFMLFlBQVlHLFNBQVNHLElBRjdCLENBQU47QUFHQSxZQUFLbEIsRUFBTCxHQUFVLElBQUltQixTQUFKLENBQWNMLEdBQWQsQ0FBVjtBQUNBLFlBQUtkLEVBQUwsQ0FBUW9CLFNBQVIsR0FBb0IsVUFBQ0MsS0FBRCxFQUFXO0FBQzdCLFlBQU10QixPQUFPRyxLQUFLb0IsS0FBTCxDQUFXRCxNQUFNdEIsSUFBakIsQ0FBYjtBQUNBLFlBQUlRLFNBQUosRUFBZTtBQUNiQSxvQkFBVVIsSUFBVjtBQUNEO0FBQ0YsT0FMRDtBQU1BLFlBQUtDLEVBQUwsQ0FBUXVCLE1BQVIsR0FBaUIsVUFBQ0YsS0FBRCxFQUFXO0FBQzFCLFlBQUliLE1BQUosRUFBWTtBQUNWQSxpQkFBT2EsS0FBUDtBQUNEO0FBQ0QsWUFBSVYsV0FBSixFQUFpQjtBQUNmLGdCQUFLYixJQUFMLENBQVVhLFdBQVY7QUFDRDtBQUNGLE9BUEQ7QUFRQSxZQUFLWCxFQUFMLENBQVF3QixPQUFSLEdBQWtCLFVBQUNDLEtBQUQsRUFBVztBQUMzQixZQUFJZixPQUFKLEVBQWE7QUFDWEEsa0JBQVFlLEtBQVI7QUFDRDtBQUNGLE9BSkQ7QUFLQSxZQUFLekIsRUFBTCxDQUFRMEIsT0FBUixHQUFrQixVQUFDTCxLQUFELEVBQVc7QUFDM0IsWUFBSVosT0FBSixFQUFhO0FBQ1hBLGtCQUFRWSxLQUFSO0FBQ0Q7QUFDRixPQUpEO0FBS0QsSyxRQUNEUixLLEdBQVEsVUFBQ1IsSUFBRCxFQUFPTixJQUFQLEVBQWdCO0FBQ3RCLFlBQUtDLEVBQUwsQ0FBUWEsS0FBUjtBQUNBLFlBQUtiLEVBQUwsR0FBVSxJQUFWO0FBQ0QsSzs7Ozs7d0NBQ21CO0FBQ2xCLFdBQUtJLElBQUw7QUFEa0IsVUFFVnVCLEtBRlUsR0FFQSxLQUFLckIsS0FGTCxDQUVWcUIsS0FGVTs7QUFHbEIsVUFBSUEsS0FBSixFQUFXO0FBQ1RBLGNBQU0sSUFBTjtBQUNEO0FBQ0Y7Ozt5Q0FDb0I7QUFBQSxVQUNYQSxLQURXLEdBQ0QsS0FBS3JCLEtBREosQ0FDWHFCLEtBRFc7O0FBRW5CLFVBQUlBLEtBQUosRUFBVztBQUNUQSxjQUFNLElBQU47QUFDRDtBQUNGOzs7MkNBQ3NCO0FBQ3JCLFdBQUtkLEtBQUw7QUFDRDs7OzZCQUNRO0FBQ1AsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUFuRW9DakIsUzs7U0FBbEJDLFMiLCJmaWxlIjoicGFja2FnZXMvdXRpbHMvZGVjb3JhdG9ycy93ZWJzb2NrZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYnNvY2tldCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGVtaXQgPSAoZGF0YSkgPT4ge1xuICAgIHRoaXMud3Muc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH07XG4gIG9wZW4gPSAodHlwZSwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uTWVzc2FnZSxcbiAgICAgIG9uT3BlbixcbiAgICAgIG9uQ2xvc2UsXG4gICAgICBvbkVycm9yLFxuICAgICAgaW5pdGlhbERhdGEsXG4gICAgICBlbmRwb2ludCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodGhpcy53cykge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSBgJHtsb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2h0dHBzJykgPT09IDBcbiAgICAgID8gJ3dzcydcbiAgICAgIDogJ3dzJ306Ly8ke2VuZHBvaW50IHx8IGxvY2F0aW9uLmhvc3R9YDtcbiAgICB0aGlzLndzID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICAgIHRoaXMud3Mub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgIGlmIChvbk1lc3NhZ2UpIHtcbiAgICAgICAgb25NZXNzYWdlKGRhdGEpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy53cy5vbm9wZW4gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChvbk9wZW4pIHtcbiAgICAgICAgb25PcGVuKGV2ZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbml0aWFsRGF0YSkge1xuICAgICAgICB0aGlzLmVtaXQoaW5pdGlhbERhdGEpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy53cy5vbmVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICBpZiAob25FcnJvcikge1xuICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMud3Mub25jbG9zZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgICAgb25DbG9zZShldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgY2xvc2UgPSAodHlwZSwgZGF0YSkgPT4ge1xuICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgICB0aGlzLndzID0gbnVsbDtcbiAgfTtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5vcGVuKCk7XG4gICAgY29uc3QgeyBvblJlZiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25SZWYpIHtcbiAgICAgIG9uUmVmKHRoaXMpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgY29uc3QgeyBvblJlZiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25SZWYpIHtcbiAgICAgIG9uUmVmKHRoaXMpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=
