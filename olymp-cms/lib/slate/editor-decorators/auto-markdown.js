'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// State from: 14 Aug

var defaultEmptyFunc = function defaultEmptyFunc() {
  return null;
};

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getMarkdownType = options.getMarkdownType;

  return function (Editor) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
      _inherits(SlateAutoMarkdownDecorator, _Component);

      function SlateAutoMarkdownDecorator() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SlateAutoMarkdownDecorator);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SlateAutoMarkdownDecorator.__proto__ || Object.getPrototypeOf(SlateAutoMarkdownDecorator)).call.apply(_ref, [this].concat(args))), _this), _this.getType = function (chars) {
          if (getMarkdownType && getMarkdownType(chars)) return getMarkdownType(chars);
          if (_this.props.getMarkdownType && _this.props.getMarkdownType(chars)) return _this.props.getMarkdownType(chars);
          switch (chars) {
            case '*':
            case '-':
            case '+':
              return 'list-item';
            case '>':
              return 'block-quote';
            case '#':
              return 'heading-one';
            case '##':
              return 'heading-two';
            case '###':
              return 'heading-three';
            case '####':
              return 'heading-four';
            case '#####':
              return 'heading-five';
            case '######':
              return 'heading-six';
            default:
              return null;
          }
        }, _this.onKeyDown = function (e, data, state) {
          switch (data.key) {
            case 'space':
              return _this.onSpace(e, state);
            case 'backspace':
              return _this.onBackspace(e, state);
            case 'enter':
              return _this.onEnter(e, state);
          }
        }, _this.onSpace = function (e, state) {
          if (state.isExpanded) return undefined;
          var selection = state.selection;
          var startText = state.startText,
              startBlock = state.startBlock,
              startOffset = state.startOffset;

          var chars = startBlock.text.slice(0, startOffset).replace(/\s*/g, '');
          var type = _this.getType(chars);

          if (!type) return undefined;
          if (type === 'list-item' && startBlock.type === 'list-item') return undefined;
          e.preventDefault();

          var transform = state.transform().setBlock(type);

          if (type === 'list-item') transform = transform.wrapBlock('bulleted-list');

          return transform.extendToStartOf(startBlock).delete().apply();
        }, _this.onBackspace = function (e, state) {
          if (state.isExpanded) return undefined;
          if (state.startOffset !== 0) return undefined;
          var startBlock = state.startBlock;


          if (startBlock.type === 'paragraph') return undefined;
          e.preventDefault();

          var transform = state.transform().setBlock('paragraph');

          if (startBlock.type === 'list-item') transform = transform.unwrapBlock('bulleted-list');
          return transform.apply();
        }, _this.onEnter = function (e, state) {
          if (state.isExpanded) return undefined;
          var startBlock = state.startBlock,
              startOffset = state.startOffset,
              endOffset = state.endOffset;

          if (startOffset === 0 && startBlock.length === 0) return _this.onBackspace(e, state);
          if (endOffset !== startBlock.length) return undefined;

          if (startBlock.type !== 'heading-one' && startBlock.type !== 'heading-two' && startBlock.type !== 'heading-three' && startBlock.type !== 'heading-four' && startBlock.type !== 'heading-five' && startBlock.type !== 'heading-six' && startBlock.type !== 'block-quote') {
            return undefined;
          }

          e.preventDefault();
          return state.transform().splitBlock().setBlock('paragraph').apply();
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(SlateAutoMarkdownDecorator, [{
        key: 'render',
        value: function render() {
          var plugins = [].concat(_toConsumableArray(this.props.plugins), [this]);
          return _react2.default.createElement(Editor, _extends({}, this.props, { plugins: plugins }));
        }
      }]);

      return SlateAutoMarkdownDecorator;
    }(_react.Component), _class.propTypes = {
      plugins: _react.PropTypes.array,
      getMarkdownType: _react.PropTypes.func
    }, _class.defaultProps = {
      plugins: []
    }, _temp2;
  };
};