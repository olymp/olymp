'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _PropTypes = require('react-router-v4-decode-uri/PropTypes');

var _Broadcasts = require('react-router-v4-decode-uri/Broadcasts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

var withRouter = function withRouter(options) {
  var hoc = function hoc(WrappedComponent) {
    var _class, _temp;

    var withRef = options && options.withRef;

    var WithRouter = (_temp = _class = function (_Component) {
      _inherits(WithRouter, _Component);

      function WithRouter() {
        _classCallCheck(this, WithRouter);

        return _possibleConstructorReturn(this, (WithRouter.__proto__ || Object.getPrototypeOf(WithRouter)).apply(this, arguments));
      }

      _createClass(WithRouter, [{
        key: 'getWrappedInstance',
        value: function getWrappedInstance() {
          (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + '`{ withRef: true }` as an option to withRouter - ' + '@withRouter(opts) OR withRouter(opts)(Component)');

          return this.wrappedInstance;
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var router = this.context.router;

          router.push = router.transitionTo;
          var props = _extends({}, this.props, {
            router: router
          });
          if (withRef) {
            props.ref = function (c) {
              _this2.wrappedInstance = c;
            };
          }

          return _react2.default.createElement(
            _Broadcasts.LocationSubscriber,
            null,
            function (locationContext) {
              return _react2.default.createElement(WrappedComponent, _extends({}, props, {
                location: locationContext
              }));
            }
          );
        }
      }]);

      return WithRouter;
    }(_react.Component), _class.contextTypes = {
      router: _PropTypes.routerContext
    }, _temp);


    WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
    WithRouter.WrappedComponent = WrappedComponent;

    return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
  };

  // Allow using decorator with or without options
  // @withRouter **OR** @withRouter(opts)
  // withRouter(Component) **OR** withRouter(opts)(Component)
  if (typeof options === 'function') {
    // Calling like: withRouter(Component)
    return hoc(options);
  }return hoc;
};

exports.default = withRouter;