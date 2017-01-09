'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultRect = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultRect = exports.defaultRect = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
var getNodeRect = function getNodeRect(element) {
  if (element) {
    return element.getBoundingClientRect();
  }return defaultRect;
};
var getDocRect = function getDocRect() {
  return getNodeRect(typeof document !== 'undefined' && document.documentElement);
};

exports.default = function (WrappedComponent) {
  return function (_Component) {
    _inherits(WithTrackDoc, _Component);

    function WithTrackDoc(props) {
      _classCallCheck(this, WithTrackDoc);

      var _this = _possibleConstructorReturn(this, (WithTrackDoc.__proto__ || Object.getPrototypeOf(WithTrackDoc)).call(this, props));

      _this.state = {
        rect: null,
        nodeRect: null
      };
      return _this;
    }

    _createClass(WithTrackDoc, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        var cancel = _raf2.default.cancel;

        var rafId = void 0;

        var update = function update() {
          _this2.setState({
            rect: getDocRect(),
            nodeRect: getNodeRect(_reactDom2.default.findDOMNode(_this2.node))
          });
        };

        var handleScroll = function handleScroll(event) {
          cancel(rafId);
          rafId = (0, _raf2.default)(update);
        };

        window.addEventListener('scroll', handleScroll);

        this.removeScrollHandler = function () {
          cancel(rafId);
          window.removeEventListener('scroll', handleScroll);
        };

        update();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.removeScrollHandler();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _state = this.state,
            rect = _state.rect,
            nodeRect = _state.nodeRect;

        var scrollY = rect ? -rect.top : 0;
        var nodeScrollY = nodeRect ? -nodeRect.top : 0;
        var relativeScrollY = scrollY - nodeScrollY;
        var factor = relativeScrollY - scrollY;
        return _react2.default.createElement(WrappedComponent, _extends({ ref: function ref(node) {
            return _this3.node = node;
          } }, this.props, { scrollY: scrollY, nodeScrollY: nodeScrollY, relativeScrollY: relativeScrollY, factor: factor }));
      }
    }]);

    return WithTrackDoc;
  }(_react.Component);
};