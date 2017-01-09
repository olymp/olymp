'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            query ', 'List($state: [DOCUMENT_STATE]) {\n              items: ', 'List(query: {state: {in: $state}}) {\n                ', '\n              }\n            }\n          '], ['\n            query ', 'List($state: [DOCUMENT_STATE]) {\n              items: ', 'List(query: {state: {in: $state}}) {\n                ', '\n              }\n            }\n          ']),
    _templateObject2 = _taggedTemplateLiteral(['\n            query ', 'List {\n              items: ', 'List {\n                ', '\n              }\n            }\n          '], ['\n            query ', 'List {\n              items: ', 'List {\n                ', '\n              }\n            }\n          ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _withCollection = require('./with-collection');

var _withCollection2 = _interopRequireDefault(_withCollection);

var _withRouter = require('./with-router');

var _withRouter2 = _interopRequireDefault(_withRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      attributes = _ref.attributes,
      name = _ref.name;

  return function (WrappedComponent) {
    var _class, _class2, _temp;

    var WithItemsComponent = (0, _withCollection2.default)(_class = (0, _reactApollo.withApollo)(_class = (0, _withRouter2.default)(_class = (_temp = _class2 = function (_Component) {
      _inherits(WithItemsComponent, _Component);

      function WithItemsComponent(props) {
        _classCallCheck(this, WithItemsComponent);

        var _this = _possibleConstructorReturn(this, (WithItemsComponent.__proto__ || Object.getPrototypeOf(WithItemsComponent)).call(this, props));

        _this.update = function (nextProps, lastProps) {
          if (!lastProps || nextProps.collection !== lastProps.collection) {
            if (_this.subscription) _this.subscription.unsubscribe();
            var client = nextProps.client,
                collection = nextProps.collection,
                _attributes = nextProps.attributes,
                location = nextProps.location;

            _this.items = null;

            var query = _attributes.indexOf('state') !== -1 ? client.watchQuery({
              query: (0, _graphqlTag2.default)(_templateObject, collection.name.toLowerCase(), collection.name.toLowerCase(), _attributes),
              variables: {
                state: location.query && location.query.state ? location.query.state.split('-') : ['PUBLISHED']
              }
            }) : client.watchQuery({
              query: (0, _graphqlTag2.default)(_templateObject2, collection.name.toLowerCase(), collection.name.toLowerCase(), _attributes)
            });
            _this.subscription = query.subscribe({
              next: function next(_ref2) {
                var data = _ref2.data;

                if (_this.unmount) return;
                _this.items = data.items;
                _this.setState({});
              },
              error: function error(_error) {
                console.log('there was an error sending the query', _error);
              }
            });
          }
        };

        _this.items = null;
        _this.state = {
          selectedRowKeys: []
        };
        return _this;
      }

      _createClass(WithItemsComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          this.update(this.props);
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
          this.update(props, this.props);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (this.subscription) this.subscription.unsubscribe();
          this.unmount = true;
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { items: this.items }));
        }
      }]);

      return WithItemsComponent;
    }(_react.Component), _class2.propTypes = {
      collection: _react.PropTypes.object, // todo: shape statt object
      client: _react.PropTypes.object, // todo: shape statt object
      onClick: _react.PropTypes.func
    }, _temp)) || _class) || _class) || _class;

    return WithItemsComponent;
  };
};