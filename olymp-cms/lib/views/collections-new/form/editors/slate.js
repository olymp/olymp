'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slate = require('olymp/slate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlateMateExt = function (_Component) {
  _inherits(SlateMateExt, _Component);

  function SlateMateExt() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SlateMateExt);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SlateMateExt.__proto__ || Object.getPrototypeOf(SlateMateExt)).call.apply(_ref, [this].concat(args))), _this), _this.state = { show: false }, _this.onClose = function (e) {
      var onChange = _this.props.onChange;

      _this.setState({ show: false });
      if (e) onChange(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SlateMateExt, [{
    key: 'render',
    value: function render() {
      var show = this.state.show;

      return _react2.default.createElement(
        'div',
        { className: 'frontend' },
        _react2.default.createElement(_slate.SlateMate, _extends({ className: 'frontend-editor form-controlxx' }, this.props))
      );
      // if (show) return <SlateModal className="form-controlxx" {...this.props} onClose={this.onClose} />;
      // return <Button onClick={() => this.setState({ show: true })}>Anzeigen</Button>;
    }
  }]);

  return SlateMateExt;
}(_react.Component);

exports.default = SlateMateExt;