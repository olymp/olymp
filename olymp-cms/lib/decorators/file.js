'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attributes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    query getFileById($id:String!) {\n      file(id:$id) {\n        ', '\n      }\n    }\n  '], ['\n    query getFileById($id:String!) {\n      file(id:$id) {\n        ', '\n      }\n    }\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olymp = require('olymp');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var attributes = exports.attributes = 'id, height, width, url, type, colors, tags, caption, source, createdAt, format, bytes, pages';

exports.default = function (WrappedComponent) {
  var _dec, _dec2, _class;

  var WithFileComponent = (_dec = (0, _olymp.graphql)((0, _olymp.gql)(_templateObject, attributes), {
    options: function options(_ref) {
      var id = _ref.id,
          routeParams = _ref.routeParams;
      return {
        variables: {
          id: id || routeParams.id
        }
      };
    }
  }), _dec2 = (0, _olymp.withItem)({ name: 'file', attributes: attributes }), (0, _olymp.withApollo)(_class = _dec(_class = _dec2(_class = function (_Component) {
    _inherits(WithFileComponent, _Component);

    function WithFileComponent() {
      _classCallCheck(this, WithFileComponent);

      return _possibleConstructorReturn(this, (WithFileComponent.__proto__ || Object.getPrototypeOf(WithFileComponent)).apply(this, arguments));
    }

    _createClass(WithFileComponent, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return WithFileComponent;
  }(_react.Component)) || _class) || _class) || _class);
  return WithFileComponent;
};