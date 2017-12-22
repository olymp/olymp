var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import createComponent from './utils/create-component';
import Portal from './portal';

var ipc = null;
if (process.env.IS_ELECTRON) {
  ipc = require('electron').ipcRenderer;
}

var PrintWindow = function (_Component) {
  _inherits(PrintWindow, _Component);

  function PrintWindow() {
    _classCallCheck(this, PrintWindow);

    return _possibleConstructorReturn(this, (PrintWindow.__proto__ || Object.getPrototypeOf(PrintWindow)).apply(this, arguments));
  }

  _createClass(PrintWindow, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.getElementById('app').style.display = 'initial';
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.getElementById('app').style.display = 'none';
      var _props = this.props,
          onClose = _props.onClose,
          pdf = _props.pdf;

      setTimeout(function () {
        if (ipc && pdf) {
          ipc.send('print-to-pdf', { name: pdf });
        } else {
          window.print();
        }
        setTimeout(onClose, 200);
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className;

      return React.createElement(
        Portal,
        null,
        React.createElement(
          'div',
          { className: className },
          children
        )
      );
    }
  }]);

  return PrintWindow;
}(Component);

var Print = createComponent(function () {
  return {
    backgroundColor: 'white',
    minHeight: '100%',
    width: '100%',
    margin: 0,
    zIndex: 10000
  };
}, function (p) {
  return React.createElement(PrintWindow, p);
}, function (p) {
  return Object.keys(p);
});
export default Print;

Print.Break = createComponent(function () {
  return {
    pageBreakBefore: 'always'
  };
}, function (_ref) {
  var _ref$tag = _ref.tag,
      tag = _ref$tag === undefined ? 'div' : _ref$tag,
      rest = _objectWithoutProperties(_ref, ['tag']);

  return React.createElement(tag, rest);
}, ['tag']);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvcHJpbnQuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlQ29tcG9uZW50IiwiUG9ydGFsIiwiaXBjIiwicHJvY2VzcyIsImVudiIsIklTX0VMRUNUUk9OIiwicmVxdWlyZSIsImlwY1JlbmRlcmVyIiwiUHJpbnRXaW5kb3ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwicHJvcHMiLCJvbkNsb3NlIiwicGRmIiwic2V0VGltZW91dCIsInNlbmQiLCJuYW1lIiwid2luZG93IiwicHJpbnQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIlByaW50IiwiYmFja2dyb3VuZENvbG9yIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJ6SW5kZXgiLCJwIiwiT2JqZWN0Iiwia2V5cyIsIkJyZWFrIiwicGFnZUJyZWFrQmVmb3JlIiwidGFnIiwicmVzdCIsImNyZWF0ZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLE9BQU9DLGVBQVAsTUFBNEIsMEJBQTVCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixVQUFuQjs7QUFFQSxJQUFJQyxNQUFNLElBQVY7QUFDQSxJQUFJQyxRQUFRQyxHQUFSLENBQVlDLFdBQWhCLEVBQTZCO0FBQzNCSCxRQUFNSSxRQUFRLFVBQVIsRUFBb0JDLFdBQTFCO0FBQ0Q7O0lBRUtDLFc7Ozs7Ozs7Ozs7OzJDQUNtQjtBQUNyQkMsZUFBU0MsY0FBVCxDQUF3QixLQUF4QixFQUErQkMsS0FBL0IsQ0FBcUNDLE9BQXJDLEdBQStDLFNBQS9DO0FBQ0Q7Ozt3Q0FDbUI7QUFDbEJILGVBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0JDLEtBQS9CLENBQXFDQyxPQUFyQyxHQUErQyxNQUEvQztBQURrQixtQkFFTyxLQUFLQyxLQUZaO0FBQUEsVUFFVkMsT0FGVSxVQUVWQSxPQUZVO0FBQUEsVUFFREMsR0FGQyxVQUVEQSxHQUZDOztBQUdsQkMsaUJBQVcsWUFBTTtBQUNmLFlBQUlkLE9BQU9hLEdBQVgsRUFBZ0I7QUFDZGIsY0FBSWUsSUFBSixDQUFTLGNBQVQsRUFBeUIsRUFBRUMsTUFBTUgsR0FBUixFQUF6QjtBQUNELFNBRkQsTUFFTztBQUNMSSxpQkFBT0MsS0FBUDtBQUNEO0FBQ0RKLG1CQUFXRixPQUFYLEVBQW9CLEdBQXBCO0FBQ0QsT0FQRCxFQU9HLElBUEg7QUFRRDs7OzZCQUNRO0FBQUEsb0JBQ3lCLEtBQUtELEtBRDlCO0FBQUEsVUFDQ1EsUUFERCxXQUNDQSxRQUREO0FBQUEsVUFDV0MsU0FEWCxXQUNXQSxTQURYOztBQUVQLGFBQ0U7QUFBQyxjQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFXQSxTQUFoQjtBQUE0QkQ7QUFBNUI7QUFERixPQURGO0FBS0Q7Ozs7RUF2QnVCdEIsUzs7QUF5QjFCLElBQU13QixRQUFRdkIsZ0JBQ1o7QUFBQSxTQUFPO0FBQ0x3QixxQkFBaUIsT0FEWjtBQUVMQyxlQUFXLE1BRk47QUFHTEMsV0FBTyxNQUhGO0FBSUxDLFlBQVEsQ0FKSDtBQUtMQyxZQUFRO0FBTEgsR0FBUDtBQUFBLENBRFksRUFRWjtBQUFBLFNBQUssb0JBQUMsV0FBRCxFQUFpQkMsQ0FBakIsQ0FBTDtBQUFBLENBUlksRUFTWjtBQUFBLFNBQUtDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUFMO0FBQUEsQ0FUWSxDQUFkO0FBV0EsZUFBZU4sS0FBZjs7QUFFQUEsTUFBTVMsS0FBTixHQUFjaEMsZ0JBQ1o7QUFBQSxTQUFPO0FBQ0xpQyxxQkFBaUI7QUFEWixHQUFQO0FBQUEsQ0FEWSxFQUlaO0FBQUEsc0JBQUdDLEdBQUg7QUFBQSxNQUFHQSxHQUFILDRCQUFTLEtBQVQ7QUFBQSxNQUFtQkMsSUFBbkI7O0FBQUEsU0FBOEJyQyxNQUFNc0MsYUFBTixDQUFvQkYsR0FBcEIsRUFBeUJDLElBQXpCLENBQTlCO0FBQUEsQ0FKWSxFQUtaLENBQUMsS0FBRCxDQUxZLENBQWQiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9wcmludC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlQ29tcG9uZW50IGZyb20gJy4vdXRpbHMvY3JlYXRlLWNvbXBvbmVudCc7XG5pbXBvcnQgUG9ydGFsIGZyb20gJy4vcG9ydGFsJztcblxubGV0IGlwYyA9IG51bGw7XG5pZiAocHJvY2Vzcy5lbnYuSVNfRUxFQ1RST04pIHtcbiAgaXBjID0gcmVxdWlyZSgnZWxlY3Ryb24nKS5pcGNSZW5kZXJlcjtcbn1cblxuY2xhc3MgUHJpbnRXaW5kb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJztcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb25zdCB7IG9uQ2xvc2UsIHBkZiB9ID0gdGhpcy5wcm9wcztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChpcGMgJiYgcGRmKSB7XG4gICAgICAgIGlwYy5zZW5kKCdwcmludC10by1wZGYnLCB7IG5hbWU6IHBkZiB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5wcmludCgpO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dChvbkNsb3NlLCAyMDApO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbn1cbmNvbnN0IFByaW50ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoKSA9PiAoe1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbjogMCxcbiAgICB6SW5kZXg6IDEwMDAwLFxuICB9KSxcbiAgcCA9PiA8UHJpbnRXaW5kb3cgey4uLnB9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbmV4cG9ydCBkZWZhdWx0IFByaW50O1xuXG5QcmludC5CcmVhayA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKCkgPT4gKHtcbiAgICBwYWdlQnJlYWtCZWZvcmU6ICdhbHdheXMnLFxuICB9KSxcbiAgKHsgdGFnID0gJ2RpdicsIC4uLnJlc3QgfSkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWcsIHJlc3QpLFxuICBbJ3RhZyddLFxuKTtcbiJdfQ==
