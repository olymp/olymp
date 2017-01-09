'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDraggable = require('react-draggable');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cover = function Cover(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return _react2.default.createElement(
    'div',
    { style: { backgroundColor: 'black', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 3 } },
    children
  );
};

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Block) {
    var _class, _temp, _initialiseProps;

    var coverOnResize = options.coverOnResize,
        enable = options.enable,
        resizeX = options.resizeX,
        resizeY = options.resizeY,
        initialWidth = options.width,
        initialHeight = options.height;

    return _temp = _class = function (_Component) {
      _inherits(ResizeableDecorator, _Component);

      function ResizeableDecorator(props) {
        _classCallCheck(this, ResizeableDecorator);

        var _this = _possibleConstructorReturn(this, (ResizeableDecorator.__proto__ || Object.getPrototypeOf(ResizeableDecorator)).call(this, props));

        _initialiseProps.call(_this);

        var getData = props.getData;

        _this.state = {
          resize: false,
          width: getData('width', initialWidth),
          height: getData('height', initialHeight)
        };
        return _this;
      }

      _createClass(ResizeableDecorator, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.element = (0, _reactDom.findDOMNode)(this.block);
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          if (enable === false) return _react2.default.createElement(Block, this.props);
          var _props = this.props,
              editor = _props.editor,
              alignment = _props.alignment,
              style = _props.style;
          var _state = this.state,
              resize = _state.resize,
              height = _state.height,
              width = _state.width;


          var children = editor.props.readOnly ? this.props.children : [].concat(_toConsumableArray(this.props.children), [resize && coverOnResize ? _react2.default.createElement(Cover, { key: 'resizableCover' }) : null, _react2.default.createElement(
            _reactDraggable.DraggableCore,
            { key: 'resizableHandle', onStop: this.onResizeStop, onStart: this.onResizeStart, onDrag: this.onResize },
            _react2.default.createElement('span', { className: (0, _classnames2.default)('react-resizable-handle', alignment === 'right' ? 'handle-left' : 'handle-right') })
          )]);

          return _react2.default.createElement(
            Block,
            _extends({}, this.props, { style: height ? _extends({}, style, { height: height + 'px' }) : style, className: (0, _classnames2.default)(width && 'p-0 col-md-' + width), ref: function ref(e) {
                return _this2.block = e;
              } }),
            children
          );
        }
      }]);

      return ResizeableDecorator;
    }(_react.Component), _class.slate = Block.slate, _class.propTypes = {
      getData: _react.PropTypes.func,
      setData: _react.PropTypes.func,
      editor: _react.PropTypes.object,
      style: _react.PropTypes.object
    }, _class.defaultProps = {
      style: {}
    }, _initialiseProps = function _initialiseProps() {
      var _this3 = this;

      this.onResizeStart = function () {
        _this3.setState({ resize: true });
      };

      this.onResizeStop = function (event, _ref2) {
        var deltaX = _ref2.deltaX,
            deltaY = _ref2.deltaY;
        var setData = _this3.props.setData;

        var newState = {};
        if (_this3.state.width) newState.width = _this3.state.width;
        if (_this3.state.height) newState.height = _this3.state.height;
        setData(newState);
        _this3.setState({ resize: false });
      };

      this.onResize = function (event, _ref3) {
        var deltaX = _ref3.deltaX,
            deltaY = _ref3.deltaY,
            x = _ref3.x,
            y = _ref3.y;
        var _props2 = _this3.props,
            getData = _props2.getData,
            alignment = _props2.alignment;

        var elementDimensions = _this3.element.getBoundingClientRect();

        var newState = {};

        if (resizeX !== false) {
          var width = x ? alignment === 'right' ? elementDimensions.width - x : x : getData('width', initialWidth);
          var relWidth = Math.round(12 / elementDimensions.width * width);

          if (relWidth >= 0) newState.width = relWidth;
        }
        if (resizeY !== false) {
          var height = y || getData('width', initialWidth);
          if (height >= 0) newState.height = height;
        }
        _this3.setState(newState);
      };
    }, _temp;
  };
};