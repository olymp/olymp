'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Block) {
    var _class, _temp;

    var isVoid = options.isVoid,
        isAtomic = options.isAtomic,
        sidebar = options.sidebar,
        label = options.label,
        category = options.category,
        icon = options.icon,
        defaultNodes = options.defaultNodes,
        props = options.props;


    return _temp = _class = function (_Component) {
      _inherits(BaseDecorator, _Component);

      function BaseDecorator() {
        _classCallCheck(this, BaseDecorator);

        return _possibleConstructorReturn(this, (BaseDecorator.__proto__ || Object.getPrototypeOf(BaseDecorator)).apply(this, arguments));
      }

      _createClass(BaseDecorator, [{
        key: 'render',
        value: function render() {
          var _props = this.props,
              node = _props.node,
              editor = _props.editor,
              state = _props.state;

          var isFocused = !editor.props.readOnly && state.selection.isFocused && state.selection.hasEdgeIn(node);
          var setData = function setData(data) {
            var transform = editor.getState().transform().setNodeByKey(node.key, { data: _extends({}, node.data.toJS(), data) }).apply();
            editor.onChange(transform);
          };
          var getData = function getData(name, defaultValue) {
            return node.data.get(name) || defaultValue;
          };
          var blockProps = (props || []).reduce(function (state, prop) {
            if (getData(prop) !== undefined) state[prop] = getData(prop);
            return state;
          }, {});
          var children = isVoid === false ? [this.props.children] : [];
          // Empty children!!
          return _react2.default.createElement(Block, _extends({}, this.props, { children: children, isFocused: isFocused, getData: getData, setData: setData, readOnly: editor.props.readOnly }, blockProps));
        }
      }]);

      return BaseDecorator;
    }(_react.Component), _class.slate = { isVoid: isVoid !== false, isAtomic: isAtomic !== false, sidebar: sidebar, label: label, category: category, icon: icon, defaultNodes: defaultNodes }, _temp;
  };
};