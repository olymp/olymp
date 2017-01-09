'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olymp = require('olymp');

var _antd = require('antd');

var _formEditor = require('../form-editor');

var _formEditor2 = _interopRequireDefault(_formEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stampAttributes = ['createdBy', 'createdAt', 'updatedBy', 'updatedAt', 'updatedById', 'createdById'];

var SubForm = (0, _olymp.withCollection)(_class = function (_Component) {
  _inherits(SubForm, _Component);

  function SubForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SubForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SubForm.__proto__ || Object.getPrototypeOf(SubForm)).call.apply(_ref, [this].concat(args))), _this), _this.removeItem = function (index) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          value = _this$props.value;

      return onChange((value || []).filter(function (x, i) {
        return i !== index;
      }));
    }, _this.createItem = function () {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          value = _this$props2.value;

      return onChange([].concat(_toConsumableArray(value || []), [{}]));
    }, _this.patchItem = function (index, nestedValue) {
      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          value = _this$props3.value;

      return onChange((value || []).map(function (x, i) {
        return i === index ? nestedValue : x;
      }));
    }, _this.mouseDown = function (index) {
      return function (e) {
        e.preventDefault();
        _this.removeItem(index);
      };
    }, _this.getHeader = function (title, index) {
      return _react2.default.createElement(
        'div',
        null,
        title,
        _react2.default.createElement('i', { className: 'fa fa-close pull-right', onMouseDown: _this.mouseDown(index) })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SubForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          collection = _props.collection,
          onChange = _props.onChange,
          rest = _objectWithoutProperties(_props, ['value', 'collection', 'onChange']);

      console.log(this.props);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _antd.Collapse,
          { accordion: true },
          (value || []).map(function (value, i) {
            return _react2.default.createElement(
              _antd.Collapse.Panel,
              { header: _this2.getHeader(value.name || 'Eintrag ' + i, i), key: i },
              _react2.default.createElement(
                'div',
                { className: 'ant-form' },
                collection.fields.filter(function (_ref2) {
                  var name = _ref2.name;
                  return name !== 'id' && stampAttributes.indexOf(name) === -1;
                }).map(function (_ref3) {
                  var type = _ref3.type,
                      name = _ref3.name;
                  return _react2.default.createElement(
                    _antd.Form.Item,
                    { key: name },
                    (0, _formEditor2.default)(type, name, {
                      initialValue: value[name],
                      onChange: function onChange(v) {
                        return _this2.patchItem(i, _extends({}, value, _defineProperty({}, name, v && v.target ? v.target.value : v)));
                      },
                      disabled: name === 'createdAt' || name === 'createdBy' || name === 'updatedAt' || name === 'updatedBy'
                    })
                  );
                })
              )
            );
          })
        ),
        _react2.default.createElement(
          _antd.Button,
          { onClick: this.createItem },
          'Erstellen'
        )
      );
    }
  }]);

  return SubForm;
}(_react.Component)) || _class;

exports.default = SubForm;