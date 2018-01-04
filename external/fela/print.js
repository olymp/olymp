'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createComponent = require('./utils/create-component');

var _createComponent2 = _interopRequireDefault(_createComponent);

var _portal = require('./portal');

var _portal2 = _interopRequireDefault(_portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

      return _react2.default.createElement(
        _portal2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: className },
          children
        )
      );
    }
  }]);

  return PrintWindow;
}(_react.Component);

var Print = (0, _createComponent2.default)(function () {
  return {
    backgroundColor: 'white',
    minHeight: '100%',
    width: '100%',
    margin: 0,
    zIndex: 10000
  };
}, function (p) {
  return _react2.default.createElement(PrintWindow, p);
}, function (p) {
  return Object.keys(p);
});
exports.default = Print;


Print.Break = (0, _createComponent2.default)(function () {
  return {
    pageBreakBefore: 'always'
  };
}, function (_ref) {
  var _ref$tag = _ref.tag,
      tag = _ref$tag === undefined ? 'div' : _ref$tag,
      rest = _objectWithoutProperties(_ref, ['tag']);

  return _react2.default.createElement(tag, rest);
}, ['tag']);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvcHJpbnQuZXM2Il0sIm5hbWVzIjpbImlwYyIsInByb2Nlc3MiLCJlbnYiLCJJU19FTEVDVFJPTiIsInJlcXVpcmUiLCJpcGNSZW5kZXJlciIsIlByaW50V2luZG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsInByb3BzIiwib25DbG9zZSIsInBkZiIsInNldFRpbWVvdXQiLCJzZW5kIiwibmFtZSIsIndpbmRvdyIsInByaW50IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJQcmludCIsImJhY2tncm91bmRDb2xvciIsIm1pbkhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwiekluZGV4IiwicCIsIk9iamVjdCIsImtleXMiLCJCcmVhayIsInBhZ2VCcmVha0JlZm9yZSIsInRhZyIsInJlc3QiLCJjcmVhdGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxNQUFNLElBQVY7QUFDQSxJQUFJQyxRQUFRQyxHQUFSLENBQVlDLFdBQWhCLEVBQTZCO0FBQzNCSCxRQUFNSSxRQUFRLFVBQVIsRUFBb0JDLFdBQTFCO0FBQ0Q7O0lBRUtDLFc7Ozs7Ozs7Ozs7OzJDQUNtQjtBQUNyQkMsZUFBU0MsY0FBVCxDQUF3QixLQUF4QixFQUErQkMsS0FBL0IsQ0FBcUNDLE9BQXJDLEdBQStDLFNBQS9DO0FBQ0Q7Ozt3Q0FDbUI7QUFDbEJILGVBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0JDLEtBQS9CLENBQXFDQyxPQUFyQyxHQUErQyxNQUEvQztBQURrQixtQkFFTyxLQUFLQyxLQUZaO0FBQUEsVUFFVkMsT0FGVSxVQUVWQSxPQUZVO0FBQUEsVUFFREMsR0FGQyxVQUVEQSxHQUZDOztBQUdsQkMsaUJBQVcsWUFBTTtBQUNmLFlBQUlkLE9BQU9hLEdBQVgsRUFBZ0I7QUFDZGIsY0FBSWUsSUFBSixDQUFTLGNBQVQsRUFBeUIsRUFBRUMsTUFBTUgsR0FBUixFQUF6QjtBQUNELFNBRkQsTUFFTztBQUNMSSxpQkFBT0MsS0FBUDtBQUNEO0FBQ0RKLG1CQUFXRixPQUFYLEVBQW9CLEdBQXBCO0FBQ0QsT0FQRCxFQU9HLElBUEg7QUFRRDs7OzZCQUNRO0FBQUEsb0JBQ3lCLEtBQUtELEtBRDlCO0FBQUEsVUFDQ1EsUUFERCxXQUNDQSxRQUREO0FBQUEsVUFDV0MsU0FEWCxXQUNXQSxTQURYOztBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBV0EsU0FBaEI7QUFBNEJEO0FBQTVCO0FBREYsT0FERjtBQUtEOzs7Ozs7QUFFSCxJQUFNRSxRQUFRLCtCQUNaO0FBQUEsU0FBTztBQUNMQyxxQkFBaUIsT0FEWjtBQUVMQyxlQUFXLE1BRk47QUFHTEMsV0FBTyxNQUhGO0FBSUxDLFlBQVEsQ0FKSDtBQUtMQyxZQUFRO0FBTEgsR0FBUDtBQUFBLENBRFksRUFRWjtBQUFBLFNBQUssOEJBQUMsV0FBRCxFQUFpQkMsQ0FBakIsQ0FBTDtBQUFBLENBUlksRUFTWjtBQUFBLFNBQUtDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUFMO0FBQUEsQ0FUWSxDQUFkO2tCQVdlTixLOzs7QUFFZkEsTUFBTVMsS0FBTixHQUFjLCtCQUNaO0FBQUEsU0FBTztBQUNMQyxxQkFBaUI7QUFEWixHQUFQO0FBQUEsQ0FEWSxFQUlaO0FBQUEsc0JBQUdDLEdBQUg7QUFBQSxNQUFHQSxHQUFILDRCQUFTLEtBQVQ7QUFBQSxNQUFtQkMsSUFBbkI7O0FBQUEsU0FBOEIsZ0JBQU1DLGFBQU4sQ0FBb0JGLEdBQXBCLEVBQXlCQyxJQUF6QixDQUE5QjtBQUFBLENBSlksRUFLWixDQUFDLEtBQUQsQ0FMWSxDQUFkIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvcHJpbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUNvbXBvbmVudCBmcm9tICcuL3V0aWxzL2NyZWF0ZS1jb21wb25lbnQnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICcuL3BvcnRhbCc7XG5cbmxldCBpcGMgPSBudWxsO1xuaWYgKHByb2Nlc3MuZW52LklTX0VMRUNUUk9OKSB7XG4gIGlwYyA9IHJlcXVpcmUoJ2VsZWN0cm9uJykuaXBjUmVuZGVyZXI7XG59XG5cbmNsYXNzIFByaW50V2luZG93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3QgeyBvbkNsb3NlLCBwZGYgfSA9IHRoaXMucHJvcHM7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoaXBjICYmIHBkZikge1xuICAgICAgICBpcGMuc2VuZCgncHJpbnQtdG8tcGRmJywgeyBuYW1lOiBwZGYgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cucHJpbnQoKTtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQob25DbG9zZSwgMjAwKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9XG59XG5jb25zdCBQcmludCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKCkgPT4gKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW46IDAsXG4gICAgekluZGV4OiAxMDAwMCxcbiAgfSksXG4gIHAgPT4gPFByaW50V2luZG93IHsuLi5wfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5leHBvcnQgZGVmYXVsdCBQcmludDtcblxuUHJpbnQuQnJlYWsgPSBjcmVhdGVDb21wb25lbnQoXG4gICgpID0+ICh7XG4gICAgcGFnZUJyZWFrQmVmb3JlOiAnYWx3YXlzJyxcbiAgfSksXG4gICh7IHRhZyA9ICdkaXYnLCAuLi5yZXN0IH0pID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnLCByZXN0KSxcbiAgWyd0YWcnXSxcbik7XG4iXX0=
