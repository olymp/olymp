import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import { layout } from 'olymp-utils';

import getRules from '../get-rules';

var JsonInput = function (_Component) {
  _inherits(JsonInput, _Component);

  function JsonInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, JsonInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = JsonInput.__proto__ || Object.getPrototypeOf(JsonInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = { text: '' }, _this.componentWillReceiveProps = function (newProps) {
      _this.setState({
        text: newProps.value ? JSON.stringify(newProps.value) : ''
      });
    }, _this.onChange = function (x) {
      _this.setState({ text: x.target.value });
      try {
        _this.props.onChange(JSON.parse(x.target.value));
      } catch (err) {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(JsonInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['onChange', 'value']);

      var newValue = value ? JSON.stringify(value) : '';
      return React.createElement(_Input, _extends({ value: this.state.text, onChange: this.onChange }, rest));
    }
  }]);

  return JsonInput;
}(Component);

var Input = function Input(_ref2) {
  var item = _ref2.item,
      field = _ref2.field,
      label = _ref2.label,
      layout = _ref2.layout,
      initialValue = _ref2.initialValue,
      rules = _ref2.rules,
      placeholder = _ref2.placeholder,
      form = _ref2.form,
      rest = _objectWithoutProperties(_ref2, ['item', 'field', 'label', 'layout', 'initialValue', 'rules', 'placeholder', 'form']);

  return React.createElement(
    _Form.Item,
    _extends({ key: field, label: label }, layout),
    form.getFieldDecorator(field, {
      initialValue: _get(item, field),
      rules: getRules(rules, label)
    })(React.createElement(JsonInput, { placeholder: placeholder, label: label }))
  );
};
Input.defaultProps = { layout: layout };
export default Input;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2VkaXRzL2pzb24taW5wdXQuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwibGF5b3V0IiwiZ2V0UnVsZXMiLCJKc29uSW5wdXQiLCJzdGF0ZSIsInRleHQiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwic2V0U3RhdGUiLCJuZXdQcm9wcyIsInZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uQ2hhbmdlIiwieCIsInRhcmdldCIsInByb3BzIiwicGFyc2UiLCJlcnIiLCJyZXN0IiwibmV3VmFsdWUiLCJJbnB1dCIsIml0ZW0iLCJmaWVsZCIsImxhYmVsIiwiaW5pdGlhbFZhbHVlIiwicnVsZXMiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJnZXRGaWVsZERlY29yYXRvciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7O0FBRUEsU0FBU0MsTUFBVCxRQUF1QixhQUF2Qjs7QUFFQSxPQUFPQyxRQUFQLE1BQXFCLGNBQXJCOztJQUVNQyxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDSkMsSyxHQUFRLEVBQUVDLE1BQU0sRUFBUixFLFFBQ1JDLHlCLEdBQTRCLG9CQUFZO0FBQ3RDLFlBQUtDLFFBQUwsQ0FBYztBQUNaRixjQUFNRyxTQUFTQyxLQUFULEdBQWlCQyxLQUFLQyxTQUFMLENBQWVILFNBQVNDLEtBQXhCLENBQWpCLEdBQWtEO0FBRDVDLE9BQWQ7QUFHRCxLLFFBQ0RHLFEsR0FBVyxhQUFLO0FBQ2QsWUFBS0wsUUFBTCxDQUFjLEVBQUVGLE1BQU1RLEVBQUVDLE1BQUYsQ0FBU0wsS0FBakIsRUFBZDtBQUNBLFVBQUk7QUFDRixjQUFLTSxLQUFMLENBQVdILFFBQVgsQ0FBb0JGLEtBQUtNLEtBQUwsQ0FBV0gsRUFBRUMsTUFBRixDQUFTTCxLQUFwQixDQUFwQjtBQUNELE9BRkQsQ0FFRSxPQUFPUSxHQUFQLEVBQVksQ0FBRTtBQUNqQixLOzs7Ozs2QkFDUTtBQUFBLG1CQUM4QixLQUFLRixLQURuQztBQUFBLFVBQ0NILFFBREQsVUFDQ0EsUUFERDtBQUFBLFVBQ1dILEtBRFgsVUFDV0EsS0FEWDtBQUFBLFVBQ3FCUyxJQURyQjs7QUFFUCxVQUFNQyxXQUFXVixRQUFRQyxLQUFLQyxTQUFMLENBQWVGLEtBQWYsQ0FBUixHQUFnQyxFQUFqRDtBQUNBLGFBQ0UsdUNBQVUsT0FBTyxLQUFLTCxLQUFMLENBQVdDLElBQTVCLEVBQWtDLFVBQVUsS0FBS08sUUFBakQsSUFBK0RNLElBQS9ELEVBREY7QUFHRDs7OztFQW5CcUJsQixTOztBQXNCeEIsSUFBTW9CLFFBQVEsU0FBUkEsS0FBUTtBQUFBLE1BQ1pDLElBRFksU0FDWkEsSUFEWTtBQUFBLE1BRVpDLEtBRlksU0FFWkEsS0FGWTtBQUFBLE1BR1pDLEtBSFksU0FHWkEsS0FIWTtBQUFBLE1BSVp0QixNQUpZLFNBSVpBLE1BSlk7QUFBQSxNQUtadUIsWUFMWSxTQUtaQSxZQUxZO0FBQUEsTUFNWkMsS0FOWSxTQU1aQSxLQU5ZO0FBQUEsTUFPWkMsV0FQWSxTQU9aQSxXQVBZO0FBQUEsTUFRWkMsSUFSWSxTQVFaQSxJQVJZO0FBQUEsTUFTVFQsSUFUUzs7QUFBQSxTQVdaO0FBQUEsVUFBTSxJQUFOO0FBQUEsZUFBVyxLQUFLSSxLQUFoQixFQUF1QixPQUFPQyxLQUE5QixJQUF5Q3RCLE1BQXpDO0FBQ0cwQixTQUFLQyxpQkFBTCxDQUF1Qk4sS0FBdkIsRUFBOEI7QUFDN0JFLG9CQUFjLEtBQUlILElBQUosRUFBVUMsS0FBVixDQURlO0FBRTdCRyxhQUFPdkIsU0FBU3VCLEtBQVQsRUFBZ0JGLEtBQWhCO0FBRnNCLEtBQTlCLEVBR0Usb0JBQUMsU0FBRCxJQUFXLGFBQWFHLFdBQXhCLEVBQXFDLE9BQU9ILEtBQTVDLEdBSEY7QUFESCxHQVhZO0FBQUEsQ0FBZDtBQWtCQUgsTUFBTVMsWUFBTixHQUFxQixFQUFFNUIsY0FBRixFQUFyQjtBQUNBLGVBQWVtQixLQUFmIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL2VkaXRzL2pzb24taW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQgYXMgQW50SW5wdXQsIEZvcm0gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGxheW91dCB9IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZ2V0UnVsZXMgZnJvbSAnLi4vZ2V0LXJ1bGVzJztcblxuY2xhc3MgSnNvbklucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IHRleHQ6ICcnIH07XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBuZXdQcm9wcyA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0ZXh0OiBuZXdQcm9wcy52YWx1ZSA/IEpTT04uc3RyaW5naWZ5KG5ld1Byb3BzLnZhbHVlKSA6ICcnLFxuICAgIH0pO1xuICB9O1xuICBvbkNoYW5nZSA9IHggPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiB4LnRhcmdldC52YWx1ZSB9KTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShKU09OLnBhcnNlKHgudGFyZ2V0LnZhbHVlKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgdmFsdWUsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZSA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6ICcnO1xuICAgIHJldHVybiAoXG4gICAgICA8QW50SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUudGV4dH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHsuLi5yZXN0fSAvPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgSW5wdXQgPSAoe1xuICBpdGVtLFxuICBmaWVsZCxcbiAgbGFiZWwsXG4gIGxheW91dCxcbiAgaW5pdGlhbFZhbHVlLFxuICBydWxlcyxcbiAgcGxhY2Vob2xkZXIsXG4gIGZvcm0sXG4gIC4uLnJlc3Rcbn0pID0+IChcbiAgPEZvcm0uSXRlbSBrZXk9e2ZpZWxkfSBsYWJlbD17bGFiZWx9IHsuLi5sYXlvdXR9PlxuICAgIHtmb3JtLmdldEZpZWxkRGVjb3JhdG9yKGZpZWxkLCB7XG4gICAgICBpbml0aWFsVmFsdWU6IGdldChpdGVtLCBmaWVsZCksXG4gICAgICBydWxlczogZ2V0UnVsZXMocnVsZXMsIGxhYmVsKSxcbiAgICB9KSg8SnNvbklucHV0IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gbGFiZWw9e2xhYmVsfSAvPil9XG4gIDwvRm9ybS5JdGVtPlxuKTtcbklucHV0LmRlZmF1bHRQcm9wcyA9IHsgbGF5b3V0IH07XG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ==
