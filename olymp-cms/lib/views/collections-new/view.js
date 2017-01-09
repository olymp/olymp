'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGateway = require('react-gateway');

var _antd = require('antd');

var _olymp = require('olymp');

var _detail = require('./detail');

var _detail2 = _interopRequireDefault(_detail);

var _listSidebar = require('./list-sidebar');

var _listSidebar2 = _interopRequireDefault(_listSidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollectionView = (0, _olymp.withRouter)(_class = function (_Component) {
  _inherits(CollectionView, _Component);

  function CollectionView() {
    _classCallCheck(this, CollectionView);

    return _possibleConstructorReturn(this, (CollectionView.__proto__ || Object.getPrototypeOf(CollectionView)).apply(this, arguments));
  }

  _createClass(CollectionView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          collection = _props.collection,
          onClose = _props.onClose,
          saving = _props.saving,
          children = _props.children,
          name = _props.name,
          location = _props.location;
      var query = location.query,
          pathname = location.pathname;


      var id = query && query['@' + collection];
      var to = { pathname: pathname };

      return _react2.default.createElement(
        _olymp.Modal,
        null,
        _react2.default.createElement(
          _reactGateway.Gateway,
          { into: 'close' },
          _react2.default.createElement(
            _olymp.Link,
            { to: to },
            _react2.default.createElement(
              _antd.Button,
              { shape: 'circle', size: 'large' },
              _react2.default.createElement(_antd.Icon, { type: 'close' })
            )
          )
        ),
        _react2.default.createElement(_listSidebar2.default, { name: collection }),
        _react2.default.createElement(
          'div',
          { className: 'container', style: { maxWidth: 600, margin: '30px auto' } },
          id ? _react2.default.createElement(_detail2.default, { name: collection, id: id }) : _react2.default.createElement(
            'span',
            null,
            'NEU'
          )
        )
      );
    }
  }]);

  return CollectionView;
}(_react.Component)) || _class;

exports.default = CollectionView;