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

var _upperFirst = require('lodash/upperFirst');

var _upperFirst2 = _interopRequireDefault(_upperFirst);

var _antd = require('antd');

var _olymp = require('olymp');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollectionListSidebar = (_dec = (0, _olymp.withItems)(), _dec(_class = (0, _olymp.withApollo)(_class = (0, _olymp.withRouter)(_class = function (_Component) {
  _inherits(CollectionListSidebar, _Component);

  function CollectionListSidebar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CollectionListSidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CollectionListSidebar.__proto__ || Object.getPrototypeOf(CollectionListSidebar)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var _this$props = _this.props,
          location = _this$props.location,
          router = _this$props.router,
          collection = _this$props.collection;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CollectionListSidebar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClick = _props.onClick,
          collection = _props.collection,
          name = _props.name,
          saveCollectionItem = _props.saveCollectionItem,
          removeCollectionItem = _props.removeCollectionItem,
          location = _props.location,
          items = _props.items;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _antd.Menu,
          { defaultOpenKeys: ['p'], mode: 'inline', onClick: this.handleClick },
          _react2.default.createElement(
            'div',
            { className: 'p-1', style: { textAlign: 'center' } },
            'Test'
          ),
          _react2.default.createElement(
            _antd.Menu.SubMenu,
            { key: 'p', title: 'Ver\xF6ffentlicht' },
            items && items.map(function (item) {
              return _react2.default.createElement(
                _antd.Menu.Item,
                { key: item.id },
                _react2.default.createElement(
                  _olymp.Link,
                  { to: _extends({}, location, { query: _extends({}, location.query, _defineProperty({}, '@' + collection.name, item.id)) }) },
                  item.name
                )
              );
            })
          ),
          _react2.default.createElement(
            _antd.Menu.SubMenu,
            { key: 'd', title: 'Entwurf' },
            _react2.default.createElement(
              _antd.Menu.Item,
              { key: 'd0' },
              'SubMenuItem'
            )
          )
        )
      );
    }
  }]);

  return CollectionListSidebar;
}(_react.Component)) || _class) || _class) || _class);
exports.default = CollectionListSidebar;