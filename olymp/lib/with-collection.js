'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    query getType($name: String!) {\n      type: __type(name:$name) {\n        name\n        description\n        fields {\n          description\n          name\n          type {\n            description\n            kind\n            name\n            enumValues {\n              name\n            }\n            fields {\n              description\n              name\n              type {\n                description\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                }\n              }\n            }\n            ofType {\n              description\n              kind\n              name\n              fields {\n                description\n                name\n                type {\n                  description\n                  kind\n                  name\n                  fields {\n                    description\n                    name\n                    type {\n                      description\n                      kind\n                      name\n                      ofType {\n                        kind\n                        name\n                      }\n                    }\n                  }\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  '], ['\n    query getType($name: String!) {\n      type: __type(name:$name) {\n        name\n        description\n        fields {\n          description\n          name\n          type {\n            description\n            kind\n            name\n            enumValues {\n              name\n            }\n            fields {\n              description\n              name\n              type {\n                description\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                }\n              }\n            }\n            ofType {\n              description\n              kind\n              name\n              fields {\n                description\n                name\n                type {\n                  description\n                  kind\n                  name\n                  fields {\n                    description\n                    name\n                    type {\n                      description\n                      kind\n                      name\n                      ofType {\n                        kind\n                        name\n                      }\n                    }\n                  }\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _withItem = require('./with-item');

var _upperFirst = require('lodash/upperFirst');

var _upperFirst2 = _interopRequireDefault(_upperFirst);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var imageFields = '\n  url\n  crop\n  width\n  height\n  caption\n  source\n';
var userFields = '\n  id\n  email\n  token\n  name\n';

exports.default = function (WrappedComponent) {
  var _dec, _class, _class2, _temp2;

  var WithCollectionComponent = (_dec = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), { /* eslint-disable */
    options: function options(_ref) {
      var _ref$routeParams = _ref.routeParams,
          routeParams = _ref$routeParams === undefined ? {} : _ref$routeParams,
          collection = _ref.collection,
          name = _ref.name;
      return {
        skip: !!collection,
        variables: {
          name: (0, _upperFirst2.default)(routeParams.model || name)
        }
      };
    }
  }), (0, _reactApollo.withApollo)(_class = _dec(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(WithCollectionComponent, _Component);

    function WithCollectionComponent() {
      var _ref2;

      var _temp, _this, _ret;

      _classCallCheck(this, WithCollectionComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = WithCollectionComponent.__proto__ || Object.getPrototypeOf(WithCollectionComponent)).call.apply(_ref2, [this].concat(args))), _this), _this.save = function (item) {
        return (0, _withItem.saveItem)(item, _this.props.name, _this.props.client, { id: item.id, attributes: _this.getAttributes() });
      }, _this.remove = function (id) {
        return (0, _withItem.removeItem)(id, _this.props.name, _this.props.client, { attributes: _this.getAttributes() });
      }, _this.getAttributes = function (col) {
        var collection = col || _this.props.data.type || _this.props.collection || null;

        return '' + collection.fields.map(function (field) {
          if (field.type.kind === 'ENUM' || field.type.kind === 'SCALAR') return field.name;else if (field.type.kind === 'LIST' && field.type.ofType && (field.type.ofType.kind === 'ENUM' || field.type.ofType.kind === 'SCALAR')) return field.name;else if (field.type.kind === 'LIST' && field.type.ofType && field.type.ofType.kind === 'OBJECT' && field.type.ofType.fields) return field.name + ' { ' + _this.getAttributes({ fields: field.type.ofType.fields }) + ' }';else if (field.type.kind === 'OBJECT' && field.type.name === 'Image') return field.name + ' { ' + imageFields + ' }';else if (field.type.kind === 'OBJECT' && field.type.name === 'User') return field.name + ' { ' + userFields + ' }';else if (field.type.kind === 'OBJECT' && field.type.fields) return field.name + ' { ' + _this.getAttributes({ fields: field.type.fields }) + ' }';
          return field.name + ' { id, name }';
        }).filter(function (x) {
          return x;
        }).join(', ');
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(WithCollectionComponent, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            data = _props.data,
            rest = _objectWithoutProperties(_props, ['data']);

        var collection = this.props.data.type || this.props.collection || null;
        if (!collection) return null;
        return _react2.default.createElement(WrappedComponent, _extends({}, rest, {
          collectionLoading: data.loading,
          collection: collection,
          saveCollectionItem: this.save,
          removeCollectionItem: this.remove,
          attributes: this.getAttributes()
        }));
      }
    }]);

    return WithCollectionComponent;
  }(_react.Component), _class2.propTypes = {
    client: _react.PropTypes.object,
    attributes: _react.PropTypes.string,
    name: _react.PropTypes.string,
    includeStamps: _react.PropTypes.bool
  }, _temp2)) || _class) || _class);

  return WithCollectionComponent;
};