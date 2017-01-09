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

var getStyle = function getStyle(align) {
  if (align === 'left') {
    return {
      float: 'left',
      marginRight: '10px'
    };
  } else if (align === 'right') {
    return {
      float: 'right',
      marginLeft: '10px'
    };
  }return {
    float: 'initial',
    display: 'block',
    margin: '0px auto'
  };
};

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Block) {
    var _class, _temp2;

    var _options$actions = options.actions,
        actions = _options$actions === undefined ? true : _options$actions,
        enable = options.enable;

    return _temp2 = _class = function (_Component) {
      _inherits(AlignmentDecorator, _Component);

      function AlignmentDecorator() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AlignmentDecorator);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AlignmentDecorator.__proto__ || Object.getPrototypeOf(AlignmentDecorator)).call.apply(_ref, [this].concat(args))), _this), _this.setAlignment = function (align) {
          var setData = _this.props.setData;

          if (align === 'left') setData({ align: align });else if (align === 'right') setData({ align: align });else setData({ align: null });
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(AlignmentDecorator, [{
        key: 'render',
        value: function render() {
          var _this2 = this;

          if (enable === false) return _react2.default.createElement(Block, this.props);
          var getData = this.props.getData;

          var alignment = getData('align');
          var style = _extends({}, this.props.style, getStyle(alignment));

          var alignActions = actions === false ? [] : [{ type: 'align.left', icon: 'align-left', toggle: function toggle() {
              return _this2.setAlignment('left');
            }, active: alignment === 'left' }, { type: 'align.center', icon: 'align-center', toggle: function toggle() {
              return _this2.setAlignment();
            }, active: !alignment }, { type: 'align.right', icon: 'align-right', toggle: function toggle() {
              return _this2.setAlignment('right');
            }, active: alignment === 'right' }];

          return _react2.default.createElement(Block, _extends({}, this.props, { actions: alignActions, style: style, alignment: alignment, setAlignment: this.setAlignment }));
        }
      }]);

      return AlignmentDecorator;
    }(_react.Component), _class.slate = Block.slate, _class.propTypes = {
      getData: _react.PropTypes.func,
      setData: _react.PropTypes.func,
      editor: _react.PropTypes.object,
      style: _react.PropTypes.object
    }, _temp2;
  };
};