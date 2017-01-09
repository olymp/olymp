'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slate = require('olymp/slate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainerBlock = (_dec = (0, _slate.useGenericBlock)({
  label: 'Container',
  category: 'Template',
  resize: {
    coverOnResize: true,
    width: '100%',
    stepX: '10%'
  }
}), _dec(_class = function (_Component) {
  _inherits(ContainerBlock, _Component);

  function ContainerBlock() {
    _classCallCheck(this, ContainerBlock);

    return _possibleConstructorReturn(this, (ContainerBlock.__proto__ || Object.getPrototypeOf(ContainerBlock)).apply(this, arguments));
  }

  _createClass(ContainerBlock, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_slate.GenericBlock, _extends({}, this.props, { style: _extends({}, this.props.style, { position: 'relative', minHeight: 30, overflow: 'hidden' }) }));
    }
  }]);

  return ContainerBlock;
}(_react.Component)) || _class);
exports.default = ContainerBlock;