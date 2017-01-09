'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getSidebarTypes = function getSidebarTypes(blockTypes) {
  return Object.keys(blockTypes).filter(function (key) {
    var block = blockTypes[key];
    return block.slate && block.slate.sidebar !== false;
  }).map(function (type) {
    return _extends({}, blockTypes[type].slate, { type: type });
  });
};

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var marks = options.marks,
      nodes = options.nodes;
  var blockTypes = options.blockTypes;

  if (!blockTypes) blockTypes = {};
  return function (Editor) {
    var _class, _temp;

    return _temp = _class = function (_Component) {
      _inherits(SlateBlocksDecorator, _Component);

      function SlateBlocksDecorator() {
        _classCallCheck(this, SlateBlocksDecorator);

        return _possibleConstructorReturn(this, (SlateBlocksDecorator.__proto__ || Object.getPrototypeOf(SlateBlocksDecorator)).apply(this, arguments));
      }

      _createClass(SlateBlocksDecorator, [{
        key: 'render',

        /* onDocumentChange = (document, state) => {
          const blocks = document.getBlocks();
          const last = blocks.last();
          const newBlockTypes = { ...blockTypes, ...this.props.blockTypes };
          console.log(newBlockTypes, Object.keys(newBlockTypes).indexOf(last.type), Object.keys(newBlockTypes).indexOf(last.type) === -1);
          if (Object.keys(newBlockTypes).indexOf(last.type) === -1) return undefined;
           const normalized = state
            .transform()
            .collapseToEndOf(last)
            .splitBlock()
            .setBlock({
              type: 'paragraph',
              isVoid: false,
              data: {},
            })
            .apply({
              save: false,
            });
           this.props.onChange(normalized);*/
        /* onBeforeChange = (state) => {
          const { document } = state;
          const newBlockTypes = { ...blockTypes, ...this.props.blockTypes };
          const blocks = document.getBlocks();
          const last = blocks.last();
          if (Object.keys(newBlockTypes).indexOf(last.type) === -1) return undefined;
           const normalized = state
            .transform()
            .collapseToEndOf(last)
            .splitBlock()
            .setBlock({
              type: 'paragraph',
              isVoid: false,
              data: {},
            })
            .apply({
              save: false,
            });
           return normalized;
        }*/
        value: function render() {
          var sidebarTypes = this.props.sidebarTypes;

          var plugins = [].concat(_toConsumableArray(this.props.plugins), [this]);
          var newNodes = _extends({}, nodes || {}, this.props.nodes || {}, this.props.blockTypes, blockTypes);
          var newMarks = _extends({}, marks || {}, this.props.marks || {});
          var newSidebarTypes = [].concat(_toConsumableArray(sidebarTypes || []), _toConsumableArray(getSidebarTypes(blockTypes)), _toConsumableArray(getSidebarTypes(this.props.blockTypes)));

          return _react2.default.createElement(Editor, _extends({}, this.props, {
            plugins: plugins,
            nodes: newNodes,
            marks: newMarks,
            sidebarTypes: newSidebarTypes
          }));
        }
      }]);

      return SlateBlocksDecorator;
    }(_react.Component), _class.propTypes = {
      sidebarTypes: _react.PropTypes.array,
      blockTypes: _react.PropTypes.object,
      marks: _react.PropTypes.object,
      onChange: _react.PropTypes.func,
      nodes: _react.PropTypes.object,
      plugins: _react.PropTypes.array
    }, _class.defaultProps = {
      plugins: [],
      blockTypes: {}
    }, _temp;
  };
};