import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/switch/style';
import _Switch from 'antd/lib/switch';
import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import getRules from '../get-rules';
import layout from '../layout';

var Toggle = function Toggle(_ref) {
  var item = _ref.item,
      field = _ref.field,
      label = _ref.label,
      layout = _ref.layout,
      initialValue = _ref.initialValue,
      rules = _ref.rules,
      placeholder = _ref.placeholder,
      form = _ref.form,
      rest = _objectWithoutProperties(_ref, ['item', 'field', 'label', 'layout', 'initialValue', 'rules', 'placeholder', 'form']);

  return React.createElement(
    _Form.Item,
    _extends({ key: field, label: label }, layout),
    form.getFieldDecorator(field, {
      initialValue: _get(item, field),
      rules: getRules(rules, label)
    })(React.createElement(_Switch, rest))
  );
};
Toggle.defaultProps = { layout: layout };
export default Toggle;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9lZGl0cy90b2dnbGUuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0UnVsZXMiLCJsYXlvdXQiLCJUb2dnbGUiLCJpdGVtIiwiZmllbGQiLCJsYWJlbCIsImluaXRpYWxWYWx1ZSIsInJ1bGVzIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwicmVzdCIsImdldEZpZWxkRGVjb3JhdG9yIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjs7QUFHQSxPQUFPQyxRQUFQLE1BQXFCLGNBQXJCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7QUFFQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUNiQyxJQURhLFFBQ2JBLElBRGE7QUFBQSxNQUViQyxLQUZhLFFBRWJBLEtBRmE7QUFBQSxNQUdiQyxLQUhhLFFBR2JBLEtBSGE7QUFBQSxNQUliSixNQUphLFFBSWJBLE1BSmE7QUFBQSxNQUtiSyxZQUxhLFFBS2JBLFlBTGE7QUFBQSxNQU1iQyxLQU5hLFFBTWJBLEtBTmE7QUFBQSxNQU9iQyxXQVBhLFFBT2JBLFdBUGE7QUFBQSxNQVFiQyxJQVJhLFFBUWJBLElBUmE7QUFBQSxNQVNWQyxJQVRVOztBQUFBLFNBV2I7QUFBQSxVQUFNLElBQU47QUFBQSxlQUFXLEtBQUtOLEtBQWhCLEVBQXVCLE9BQU9DLEtBQTlCLElBQXlDSixNQUF6QztBQUNHUSxTQUFLRSxpQkFBTCxDQUF1QlAsS0FBdkIsRUFBOEI7QUFDN0JFLG9CQUFjLEtBQUlILElBQUosRUFBVUMsS0FBVixDQURlO0FBRTdCRyxhQUFPUCxTQUFTTyxLQUFULEVBQWdCRixLQUFoQjtBQUZzQixLQUE5QixFQUdFLDZCQUFZSyxJQUFaLENBSEY7QUFESCxHQVhhO0FBQUEsQ0FBZjtBQWtCQVIsT0FBT1UsWUFBUCxHQUFzQixFQUFFWCxjQUFGLEVBQXRCO0FBQ0EsZUFBZUMsTUFBZiIsImZpbGUiOiJjbXMvcGFnZXMvZWRpdHMvdG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN3aXRjaCwgRm9ybSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBnZXRSdWxlcyBmcm9tICcuLi9nZXQtcnVsZXMnO1xuaW1wb3J0IGxheW91dCBmcm9tICcuLi9sYXlvdXQnO1xuXG5jb25zdCBUb2dnbGUgPSAoe1xuICBpdGVtLFxuICBmaWVsZCxcbiAgbGFiZWwsXG4gIGxheW91dCxcbiAgaW5pdGlhbFZhbHVlLFxuICBydWxlcyxcbiAgcGxhY2Vob2xkZXIsXG4gIGZvcm0sXG4gIC4uLnJlc3Rcbn0pID0+IChcbiAgPEZvcm0uSXRlbSBrZXk9e2ZpZWxkfSBsYWJlbD17bGFiZWx9IHsuLi5sYXlvdXR9PlxuICAgIHtmb3JtLmdldEZpZWxkRGVjb3JhdG9yKGZpZWxkLCB7XG4gICAgICBpbml0aWFsVmFsdWU6IGdldChpdGVtLCBmaWVsZCksXG4gICAgICBydWxlczogZ2V0UnVsZXMocnVsZXMsIGxhYmVsKSxcbiAgICB9KSg8U3dpdGNoIHsuLi5yZXN0fSAvPil9XG4gIDwvRm9ybS5JdGVtPlxuKTtcblRvZ2dsZS5kZWZhdWx0UHJvcHMgPSB7IGxheW91dCB9O1xuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlO1xuIl19
