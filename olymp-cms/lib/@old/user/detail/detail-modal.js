"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _modal = require("../../../components/modal");

var _modal2 = _interopRequireDefault(_modal);

var _detail = require("./detail");

var _detail2 = _interopRequireDefault(_detail);

var _mobxReact = require("mobx-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DetailModal = (_temp = _class = function (_Component) {
  _inherits(DetailModal, _Component);

  function DetailModal() {
    _classCallCheck(this, DetailModal);

    var _this = _possibleConstructorReturn(this, (DetailModal.__proto__ || Object.getPrototypeOf(DetailModal)).call(this));

    _this.patch = function (patch) {
      var user = _this.state.user;


      _this.setState({ user: _extends({}, user, patch) });
    };

    _this.save = function () {
      var user = _this.state.user;


      _this.props.save(user);
    };

    _this.state = {
      user: null
    };
    return _this;
  }

  _createClass(DetailModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var params = this.props.params;
      var store = this.context.store;


      store.auth.loadOne(params && params.id ? params.id : store.auth.user.id).then(function (user) {
        _this2.setState({ user: user });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var user = this.state.user;
      var close = this.props.close;


      return user ? _react2.default.createElement(
        _modal2.default,
        {
          save: this.save,
          close: close,
          blank: false,
          visible: true },
        _react2.default.createElement(_detail2.default, _extends({}, user, { patch: this.patch }))
      ) : _react2.default.createElement("div", null);
    }
  }]);

  return DetailModal;
}(_react.Component), _class.contextTypes = {
  store: _react.PropTypes.object.isRequired,
  router: _react.PropTypes.object.isRequired
}, _temp);
exports.default = (0, _mobxReact.observer)(DetailModal);