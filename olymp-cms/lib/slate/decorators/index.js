'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBlockTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (WrappedComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(WithBlockTypes, _Component);

    function WithBlockTypes() {
      _classCallCheck(this, WithBlockTypes);

      return _possibleConstructorReturn(this, (WithBlockTypes.__proto__ || Object.getPrototypeOf(WithBlockTypes)).apply(this, arguments));
    }

    _createClass(WithBlockTypes, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({ blockTypes: this.context.blockTypes }, this.props));
      }
    }]);

    return WithBlockTypes;
  }(_react.Component), _class.contextTypes = {
    blockTypes: _react2.default.PropTypes.object
  }, _temp;
};

var useBlockTypes = exports.useBlockTypes = function useBlockTypes(blockTypes) {
  return function (WrappedComponent) {
    var _class2, _temp2;

    return _temp2 = _class2 = function (_Component2) {
      _inherits(UseBlockTypes, _Component2);

      function UseBlockTypes() {
        _classCallCheck(this, UseBlockTypes);

        return _possibleConstructorReturn(this, (UseBlockTypes.__proto__ || Object.getPrototypeOf(UseBlockTypes)).apply(this, arguments));
      }

      _createClass(UseBlockTypes, [{
        key: 'getChildContext',
        value: function getChildContext() {
          return {
            blockTypes: blockTypes || this.props.blockTypes
          };
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, this.props);
        }
      }]);

      return UseBlockTypes;
    }(_react.Component), _class2.childContextTypes = {
      blockTypes: _react2.default.PropTypes.object
    }, _temp2;
  };
};