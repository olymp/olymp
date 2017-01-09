'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveItem = exports.removeItem = exports.mutateItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    mutation set_', '($id:String, $type:OPERATION_TYPE!, $input:', 'Input!) {\n      ', '(id:$id, input:$input, operationType:$type) {\n        ', '\n      }\n    }\n  '], ['\n    mutation set_', '($id:String, $type:OPERATION_TYPE!, $input:', 'Input!) {\n      ', '(id:$id, input:$input, operationType:$type) {\n        ', '\n      }\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n              query get_', '($id:String!) {\n                item: ', '(query: { id: {eq: $id} }) {\n                  ', '\n                }\n              }\n            '], ['\n              query get_', '($id:String!) {\n                item: ', '(query: { id: {eq: $id} }) {\n                  ', '\n                }\n              }\n            ']),
    _templateObject3 = _taggedTemplateLiteral(['\n              query get_', '($slug:String!) {\n                item: ', '(query: { slug: {eq: $slug} }) {\n                  ', '\n                }\n              }\n            '], ['\n              query get_', '($slug:String!) {\n                item: ', '(query: { slug: {eq: $slug} }) {\n                  ', '\n                }\n              }\n            ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _antd = require('antd');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _upperFirst = require('lodash/upperFirst');

var _upperFirst2 = _interopRequireDefault(_upperFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mutateItem = exports.mutateItem = function mutateItem(client, name, _ref) {
  var attributes = _ref.attributes;
  return function (props) {
    return client.mutate(_extends({
      mutation: (0, _graphqlTag2.default)(_templateObject, name.toLowerCase(), (0, _upperFirst2.default)(name), name.toLowerCase(), attributes || 'id')
    }, props));
  };
};

var removeItem = exports.removeItem = function removeItem(id, name, client, _ref2) {
  var onRemoved = _ref2.onRemoved,
      attributes = _ref2.attributes;
  return mutateItem(client, name, { attributes: attributes })({
    variables: {
      id: id,
      type: 'REMOVE',
      input: {}
    },
    updateQueries: _defineProperty({}, name.toLowerCase() + 'List', function undefined(previousQueryResult) {
      return _extends({}, previousQueryResult, {
        items: previousQueryResult.items.filter(function (x) {
          return x.id !== id;
        })
      });
    })
  }).then(function (_ref3) {
    var data = _ref3.data;

    _antd.notification.success({ message: 'Gelöscht', description: 'Der Eintrag wurde gelöscht!' });
    if (onRemoved) onRemoved(data, undefined.props);
  }).catch(function (err) {
    console.error(err);
    _antd.notification.error({ message: 'Fehler', description: 'Fehler beim Löschen!' });
    throw err;
  });
};

var strip = function strip(obj) {
  if (!obj) return;
  if (Array.isArray(obj)) obj.forEach(function (x) {
    return strip(x);
  });else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
    delete obj.__typename;
    Object.keys(obj).forEach(function (x) {
      return strip(obj[x]);
    });
  }
};
var saveItem = exports.saveItem = function saveItem(body, name, client, _ref4) {
  var onSaved = _ref4.onSaved,
      attributes = _ref4.attributes,
      id = _ref4.id;

  var input = JSON.parse(JSON.stringify(body));
  strip(input);
  return mutateItem(client, name, { attributes: attributes })({
    variables: {
      id: id,
      input: input,
      type: 'PATCH'
    },
    /* optimisticResponse1: {
     [name]: body,
     },*/
    updateQueries: !id ? _defineProperty({}, name.toLowerCase() + 'List', function undefined(previousQueryResult, _ref5) {
      var mutationResult = _ref5.mutationResult;
      return _extends({}, previousQueryResult, {
        items: [].concat(_toConsumableArray(previousQueryResult.items), [mutationResult.data[name]])
      });
    }) : {}
  }).then(function (_ref7) {
    var data = _ref7.data;

    _antd.notification.success({ message: 'Gespeichert', description: 'Änderungen wurden gespeichert!' });
    if (onSaved) onSaved(data, undefined.props);
    return data;
  }).catch(function (err) {
    console.error(err);
    _antd.notification.error({ message: 'Fehler', description: 'Fehler beim Speichern.' });
    throw err;
  });
};

exports.default = function (_ref8) {
  var attributes = _ref8.attributes,
      name = _ref8.name;
  return function (WrappedComponent) {
    var _class, _class2, _temp;

    var WithItemComponent = (0, _reactApollo.withApollo)(_class = (_temp = _class2 = function (_Component) {
      _inherits(WithItemComponent, _Component);

      function WithItemComponent(props) {
        _classCallCheck(this, WithItemComponent);

        var _this = _possibleConstructorReturn(this, (WithItemComponent.__proto__ || Object.getPrototypeOf(WithItemComponent)).call(this));

        _this.state = {
          isDirty: false,
          saving: false
        };

        _this.update = function (nextProps, lastProps) {
          var name = nextProps.name,
              client = nextProps.client,
              attributes = nextProps.attributes,
              initialData = nextProps.initialData,
              id = nextProps.id,
              slug = nextProps.slug;

          if (!lastProps || name !== lastProps.name || attributes !== lastProps.attributes || id !== lastProps.id || slug !== lastProps.slug || nextProps.data && nextProps.data[name] !== lastProps.data[name]) {
            if (!attributes || !name) return;
            var capitalized = (0, _upperFirst2.default)(name);
            if (nextProps.data) {
              _this.patchedItem = {};
              _this.data = nextProps.data[name];
            } else if (id) {
              client.query({
                query: (0, _graphqlTag2.default)(_templateObject2, name.toLowerCase(), name.toLowerCase(), attributes),
                variables: {
                  id: id
                }
              }).then(function (_ref9) {
                var data = _ref9.data;

                _this.data = data.item;
                _this.patchedItem = _extends({}, initialData, _this.data);
                _this.setState({
                  isDirty: false
                });
              });
            } else if (slug) {
              client.query({
                query: (0, _graphqlTag2.default)(_templateObject3, name.toLowerCase(), name.toLowerCase(), attributes),
                variables: {
                  slug: slug
                }
              }).then(function (_ref10) {
                var data = _ref10.data;

                _this.data = data.item;
                _this.patchedItem = _extends({}, initialData, _this.data);
                _this.setState({
                  isDirty: false
                });
              });
            } else {
              _this.patchedItem = _extends({}, initialData);
              _this.data = _extends({}, _this.patchedItem);
            }
          }
        };

        _this.refetch = function (attributes) {
          _this.update(_extends({}, _this.props, { attributes: attributes }), _this.props);
        };

        _this.patch = function (patch) {
          if (_this.unmount) return;
          _this.patchedItem = _extends({}, _this.patchedItem, patch);
          _this.data = _extends({}, _this.data, _this.patchedItem);
          _this.setState({
            isDirty: true
          });
        };

        _this.save = function (data, opt) {
          var _this$props = _this.props,
              onSaved = _this$props.onSaved,
              name = _this$props.name,
              client = _this$props.client,
              attributes = _this$props.attributes;

          _this.setState({ saving: true });
          var then = function then(x) {
            _this.setState({ saving: false });
            return x;
          };
          if (opt && opt.commit === false) {
            return saveItem(data, name, client, {
              id: _this.data.id,
              onSaved: onSaved,
              attributes: attributes
            }).then(then).catch(function (err) {
              _this.setState({ saving: false });
              throw err;
            });
          }
          return saveItem(_this.data, name, client, { id: _this.data.id, onSaved: onSaved, attributes: attributes }).then(then).catch(function (err) {
            _this.setState({ saving: false });
            throw err;
          });
        };

        _this.remove = function () {
          var _this$props2 = _this.props,
              onRemoved = _this$props2.onRemoved,
              name = _this$props2.name,
              client = _this$props2.client,
              attributes = _this$props2.attributes;

          return removeItem(_this.data.id, name, client, { onRemoved: onRemoved, attributes: attributes });
        };

        _this.update(props);
        return _this;
      }

      _createClass(WithItemComponent, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
          this.update(props, this.props);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.unmount = true;
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, _extends({}, this.state, this.props, { saving: this.state.saving, item: this.data, patch: this.patch, save: this.save, remove: this.remove }));
        }
      }]);

      return WithItemComponent;
    }(_react.Component), _class2.defaultProps = {
      name: name,
      attributes: attributes
    }, _temp)) || _class;

    return WithItemComponent;
  };
};