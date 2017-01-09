'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slate = require('slate');

var _batch = require('../utils/batch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parseValue = function parseValue(value, initialState, terse) {
  (0, _slate.resetKeyGenerator)();
  try {
    return _slate.Raw.deserialize(value, { terse: terse });
  } catch (err) {
    try {
      return _slate.Raw.deserialize(value, { terse: !terse });
    } catch (err) {
      return initialState ? parseValue(initialState, undefined, { terse: terse }) : _slate.Plain.deserialize('');
    }
  }
};
var defaultGetValue = function defaultGetValue(_ref) {
  var value = _ref.value;
  return value;
};
var defaultChangeValue = function defaultChangeValue(_ref2, value) {
  var onChange = _ref2.onChange;
  return onChange ? onChange(value) : null;
};

exports.default = function () {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$getValue = _ref3.getValue,
      getValue = _ref3$getValue === undefined ? defaultGetValue : _ref3$getValue,
      _ref3$changeValue = _ref3.changeValue,
      changeValue = _ref3$changeValue === undefined ? defaultChangeValue : _ref3$changeValue,
      initialState = _ref3.initialState,
      terse = _ref3.terse;

  return function (Editor) {
    var _class, _temp;

    return _temp = _class = function (_Component) {
      _inherits(SlateStateDecorator, _Component);

      function SlateStateDecorator(props) {
        _classCallCheck(this, SlateStateDecorator);

        var _this = _possibleConstructorReturn(this, (SlateStateDecorator.__proto__ || Object.getPrototypeOf(SlateStateDecorator)).call(this));

        _this.isFocused = false;
        _this.batch = (0, _batch.batch)(300);
        _this.rawValue = null;

        _this.changeValue = function (value) {
          _this.value = value;
          _this.forceUpdate();
          if (changeValue) {
            (function () {
              var rawValue = _slate.Raw.serialize(value, { terse: terse });
              if (JSON.stringify(_this.rawValue) !== JSON.stringify(rawValue)) {
                _this.rawValue = rawValue;
                _this.batch(function () {
                  if (rawValue.nodes.length === 1 && rawValue.nodes[0].nodes.length === 1 && !rawValue.nodes[0].nodes[0].text && !rawValue.nodes[0].nodes[0].isVoid) {
                    // if (rawValue.nodes.length === 1 && rawValue.nodes[0].kind === 'text' && !rawValue.nodes[0].text) {
                    changeValue(_this.props, null);
                    // } else if (rawValue.nodes.length === 1 && rawValue.nodes[0].type === 'paragraph' && (!rawValue.nodes.length || (rawValue.nodes[0].nodes[0].kind === 'text' && !rawValue.nodes[0].nodes[0].text))) {
                    //   changeValue(this.props, null);
                  } else {
                    changeValue(_this.props, rawValue);
                  }
                });
              }
            })();
          }
        };

        _this.rawValue = getValue(props);
        _this.value = parseValue(_this.rawValue, initialState, terse);
        return _this;
      }

      _createClass(SlateStateDecorator, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(props) {
          var newValue = getValue(props);
          var oldValue = getValue(this.props);
          if (newValue !== oldValue && this.rawValue !== newValue) {
            this.value = parseValue(newValue, undefined, terse);
            return true;
          }
          if (props.readOnly !== this.props.readOnly) return true;
          return false;
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(Editor, _extends({}, this.props, { value: this.value, onChange: this.changeValue }));
        }
      }]);

      return SlateStateDecorator;
    }(_react.Component), _class.propTypes = {}, _temp;
  };
};