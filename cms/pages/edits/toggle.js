import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/switch/style';
import _Switch from 'antd/lib/switch';
import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import { layout } from 'olymp-utils';

import getRules from '../get-rules';

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2VkaXRzL3RvZ2dsZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJsYXlvdXQiLCJnZXRSdWxlcyIsIlRvZ2dsZSIsIml0ZW0iLCJmaWVsZCIsImxhYmVsIiwiaW5pdGlhbFZhbHVlIiwicnVsZXMiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJyZXN0IiwiZ2V0RmllbGREZWNvcmF0b3IiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOztBQUVBLFNBQVNDLE1BQVQsUUFBdUIsYUFBdkI7O0FBRUEsT0FBT0MsUUFBUCxNQUFxQixjQUFyQjs7QUFFQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUNiQyxJQURhLFFBQ2JBLElBRGE7QUFBQSxNQUViQyxLQUZhLFFBRWJBLEtBRmE7QUFBQSxNQUdiQyxLQUhhLFFBR2JBLEtBSGE7QUFBQSxNQUliTCxNQUphLFFBSWJBLE1BSmE7QUFBQSxNQUtiTSxZQUxhLFFBS2JBLFlBTGE7QUFBQSxNQU1iQyxLQU5hLFFBTWJBLEtBTmE7QUFBQSxNQU9iQyxXQVBhLFFBT2JBLFdBUGE7QUFBQSxNQVFiQyxJQVJhLFFBUWJBLElBUmE7QUFBQSxNQVNWQyxJQVRVOztBQUFBLFNBV2I7QUFBQSxVQUFNLElBQU47QUFBQSxlQUFXLEtBQUtOLEtBQWhCLEVBQXVCLE9BQU9DLEtBQTlCLElBQXlDTCxNQUF6QztBQUNHUyxTQUFLRSxpQkFBTCxDQUF1QlAsS0FBdkIsRUFBOEI7QUFDN0JFLG9CQUFjLEtBQUlILElBQUosRUFBVUMsS0FBVixDQURlO0FBRTdCRyxhQUFPTixTQUFTTSxLQUFULEVBQWdCRixLQUFoQjtBQUZzQixLQUE5QixFQUdFLDZCQUFZSyxJQUFaLENBSEY7QUFESCxHQVhhO0FBQUEsQ0FBZjtBQWtCQVIsT0FBT1UsWUFBUCxHQUFzQixFQUFFWixjQUFGLEVBQXRCO0FBQ0EsZUFBZUUsTUFBZiIsImZpbGUiOiJwYWNrYWdlcy9wYWdlcy9lZGl0cy90b2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpdGNoLCBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tICdvbHltcC11dGlscyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGdldFJ1bGVzIGZyb20gJy4uL2dldC1ydWxlcyc7XG5cbmNvbnN0IFRvZ2dsZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsYWJlbCxcbiAgbGF5b3V0LFxuICBpbml0aWFsVmFsdWUsXG4gIHJ1bGVzLFxuICBwbGFjZWhvbGRlcixcbiAgZm9ybSxcbiAgLi4ucmVzdFxufSkgPT4gKFxuICA8Rm9ybS5JdGVtIGtleT17ZmllbGR9IGxhYmVsPXtsYWJlbH0gey4uLmxheW91dH0+XG4gICAge2Zvcm0uZ2V0RmllbGREZWNvcmF0b3IoZmllbGQsIHtcbiAgICAgIGluaXRpYWxWYWx1ZTogZ2V0KGl0ZW0sIGZpZWxkKSxcbiAgICAgIHJ1bGVzOiBnZXRSdWxlcyhydWxlcywgbGFiZWwpLFxuICAgIH0pKDxTd2l0Y2ggey4uLnJlc3R9IC8+KX1cbiAgPC9Gb3JtLkl0ZW0+XG4pO1xuVG9nZ2xlLmRlZmF1bHRQcm9wcyA9IHsgbGF5b3V0IH07XG5leHBvcnQgZGVmYXVsdCBUb2dnbGU7XG4iXX0=
