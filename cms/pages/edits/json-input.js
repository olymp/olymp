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

import { layout } from 'olymp-antd';

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9lZGl0cy9qc29uLWlucHV0LmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImxheW91dCIsImdldFJ1bGVzIiwiSnNvbklucHV0Iiwic3RhdGUiLCJ0ZXh0IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInNldFN0YXRlIiwibmV3UHJvcHMiLCJ2YWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvbkNoYW5nZSIsIngiLCJ0YXJnZXQiLCJwcm9wcyIsInBhcnNlIiwiZXJyIiwicmVzdCIsIm5ld1ZhbHVlIiwiSW5wdXQiLCJpdGVtIiwiZmllbGQiLCJsYWJlbCIsImluaXRpYWxWYWx1ZSIsInJ1bGVzIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwiZ2V0RmllbGREZWNvcmF0b3IiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDOztBQUVBLFNBQVNDLE1BQVQsUUFBdUIsWUFBdkI7O0FBRUEsT0FBT0MsUUFBUCxNQUFxQixjQUFyQjs7SUFFTUMsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ0pDLEssR0FBUSxFQUFFQyxNQUFNLEVBQVIsRSxRQUNSQyx5QixHQUE0QixvQkFBWTtBQUN0QyxZQUFLQyxRQUFMLENBQWM7QUFDWkYsY0FBTUcsU0FBU0MsS0FBVCxHQUFpQkMsS0FBS0MsU0FBTCxDQUFlSCxTQUFTQyxLQUF4QixDQUFqQixHQUFrRDtBQUQ1QyxPQUFkO0FBR0QsSyxRQUNERyxRLEdBQVcsYUFBSztBQUNkLFlBQUtMLFFBQUwsQ0FBYyxFQUFFRixNQUFNUSxFQUFFQyxNQUFGLENBQVNMLEtBQWpCLEVBQWQ7QUFDQSxVQUFJO0FBQ0YsY0FBS00sS0FBTCxDQUFXSCxRQUFYLENBQW9CRixLQUFLTSxLQUFMLENBQVdILEVBQUVDLE1BQUYsQ0FBU0wsS0FBcEIsQ0FBcEI7QUFDRCxPQUZELENBRUUsT0FBT1EsR0FBUCxFQUFZLENBQUU7QUFDakIsSzs7Ozs7NkJBQ1E7QUFBQSxtQkFDOEIsS0FBS0YsS0FEbkM7QUFBQSxVQUNDSCxRQURELFVBQ0NBLFFBREQ7QUFBQSxVQUNXSCxLQURYLFVBQ1dBLEtBRFg7QUFBQSxVQUNxQlMsSUFEckI7O0FBRVAsVUFBTUMsV0FBV1YsUUFBUUMsS0FBS0MsU0FBTCxDQUFlRixLQUFmLENBQVIsR0FBZ0MsRUFBakQ7QUFDQSxhQUNFLHVDQUFVLE9BQU8sS0FBS0wsS0FBTCxDQUFXQyxJQUE1QixFQUFrQyxVQUFVLEtBQUtPLFFBQWpELElBQStETSxJQUEvRCxFQURGO0FBR0Q7Ozs7RUFuQnFCbEIsUzs7QUFzQnhCLElBQU1vQixRQUFRLFNBQVJBLEtBQVE7QUFBQSxNQUNaQyxJQURZLFNBQ1pBLElBRFk7QUFBQSxNQUVaQyxLQUZZLFNBRVpBLEtBRlk7QUFBQSxNQUdaQyxLQUhZLFNBR1pBLEtBSFk7QUFBQSxNQUladEIsTUFKWSxTQUlaQSxNQUpZO0FBQUEsTUFLWnVCLFlBTFksU0FLWkEsWUFMWTtBQUFBLE1BTVpDLEtBTlksU0FNWkEsS0FOWTtBQUFBLE1BT1pDLFdBUFksU0FPWkEsV0FQWTtBQUFBLE1BUVpDLElBUlksU0FRWkEsSUFSWTtBQUFBLE1BU1RULElBVFM7O0FBQUEsU0FXWjtBQUFBLFVBQU0sSUFBTjtBQUFBLGVBQVcsS0FBS0ksS0FBaEIsRUFBdUIsT0FBT0MsS0FBOUIsSUFBeUN0QixNQUF6QztBQUNHMEIsU0FBS0MsaUJBQUwsQ0FBdUJOLEtBQXZCLEVBQThCO0FBQzdCRSxvQkFBYyxLQUFJSCxJQUFKLEVBQVVDLEtBQVYsQ0FEZTtBQUU3QkcsYUFBT3ZCLFNBQVN1QixLQUFULEVBQWdCRixLQUFoQjtBQUZzQixLQUE5QixFQUdFLG9CQUFDLFNBQUQsSUFBVyxhQUFhRyxXQUF4QixFQUFxQyxPQUFPSCxLQUE1QyxHQUhGO0FBREgsR0FYWTtBQUFBLENBQWQ7QUFrQkFILE1BQU1TLFlBQU4sR0FBcUIsRUFBRTVCLGNBQUYsRUFBckI7QUFDQSxlQUFlbUIsS0FBZiIsImZpbGUiOiJjbXMvcGFnZXMvZWRpdHMvanNvbi1pbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCBhcyBBbnRJbnB1dCwgRm9ybSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSAnb2x5bXAtYW50ZCc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGdldFJ1bGVzIGZyb20gJy4uL2dldC1ydWxlcyc7XG5cbmNsYXNzIEpzb25JbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0geyB0ZXh0OiAnJyB9O1xuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gbmV3UHJvcHMgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGV4dDogbmV3UHJvcHMudmFsdWUgPyBKU09OLnN0cmluZ2lmeShuZXdQcm9wcy52YWx1ZSkgOiAnJyxcbiAgICB9KTtcbiAgfTtcbiAgb25DaGFuZ2UgPSB4ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dDogeC50YXJnZXQudmFsdWUgfSk7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoSlNPTi5wYXJzZSh4LnRhcmdldC52YWx1ZSkpO1xuICAgIH0gY2F0Y2ggKGVycikge31cbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHZhbHVlLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiAnJztcbiAgICByZXR1cm4gKFxuICAgICAgPEFudElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnRleHR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSB7Li4ucmVzdH0gLz5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IElucHV0ID0gKHtcbiAgaXRlbSxcbiAgZmllbGQsXG4gIGxhYmVsLFxuICBsYXlvdXQsXG4gIGluaXRpYWxWYWx1ZSxcbiAgcnVsZXMsXG4gIHBsYWNlaG9sZGVyLFxuICBmb3JtLFxuICAuLi5yZXN0XG59KSA9PiAoXG4gIDxGb3JtLkl0ZW0ga2V5PXtmaWVsZH0gbGFiZWw9e2xhYmVsfSB7Li4ubGF5b3V0fT5cbiAgICB7Zm9ybS5nZXRGaWVsZERlY29yYXRvcihmaWVsZCwge1xuICAgICAgaW5pdGlhbFZhbHVlOiBnZXQoaXRlbSwgZmllbGQpLFxuICAgICAgcnVsZXM6IGdldFJ1bGVzKHJ1bGVzLCBsYWJlbCksXG4gICAgfSkoPEpzb25JbnB1dCBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IGxhYmVsPXtsYWJlbH0gLz4pfVxuICA8L0Zvcm0uSXRlbT5cbik7XG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7IGxheW91dCB9O1xuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0=
