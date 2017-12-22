import 'antd/lib/select/style';
import _Select2 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { toClass } from 'recompose';

import FormItem from './form-item';

var states = {
  PUBLISHED: 'Öffentlich',
  DRAFT: 'Entwurf',
  REMOVED: 'Papierkorb'
};

export default {
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return innerType.kind === 'ENUM' && innerType.enumValues;
  },
  form: toClass(function (_ref2) {
    var innerType = _ref2.innerType,
        specialFields = _ref2.specialFields,
        props = _objectWithoutProperties(_ref2, ['innerType', 'specialFields']);

    return React.createElement(
      FormItem,
      props,
      React.createElement(
        _Select2,
        _extends({}, props, { value: props.value || innerType.enumValues[0].name }),
        innerType.enumValues.map(function (x) {
          return React.createElement(
            _Select.Option,
            { key: x.name, value: x.name },
            innerType.name === 'DOCUMENT_STATE' ? states[x.name] : x.label
          );
        })
      )
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1lbnVtLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInRvQ2xhc3MiLCJGb3JtSXRlbSIsInN0YXRlcyIsIlBVQkxJU0hFRCIsIkRSQUZUIiwiUkVNT1ZFRCIsInJ1bGUiLCJpbm5lclR5cGUiLCJraW5kIiwiZW51bVZhbHVlcyIsImZvcm0iLCJzcGVjaWFsRmllbGRzIiwicHJvcHMiLCJ2YWx1ZSIsIm5hbWUiLCJtYXAiLCJ4IiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLFdBQXhCOztBQUVBLE9BQU9DLFFBQVAsTUFBcUIsYUFBckI7O0FBRUEsSUFBTUMsU0FBUztBQUNiQyxhQUFXLFlBREU7QUFFYkMsU0FBTyxTQUZNO0FBR2JDLFdBQVM7QUFISSxDQUFmOztBQU1BLGVBQWU7QUFDYkMsUUFBTTtBQUFBLFFBQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFdBQW1CQSxVQUFVQyxJQUFWLEtBQW1CLE1BQW5CLElBQTZCRCxVQUFVRSxVQUExRDtBQUFBLEdBRE87QUFFYkMsUUFBTVYsUUFBUTtBQUFBLFFBQUdPLFNBQUgsU0FBR0EsU0FBSDtBQUFBLFFBQWNJLGFBQWQsU0FBY0EsYUFBZDtBQUFBLFFBQWdDQyxLQUFoQzs7QUFBQSxXQUNaO0FBQUMsY0FBRDtBQUFjQSxXQUFkO0FBQ0U7QUFBQTtBQUFBLHFCQUFZQSxLQUFaLElBQW1CLE9BQU9BLE1BQU1DLEtBQU4sSUFBZU4sVUFBVUUsVUFBVixDQUFxQixDQUFyQixFQUF3QkssSUFBakU7QUFDR1Asa0JBQVVFLFVBQVYsQ0FBcUJNLEdBQXJCLENBQXlCO0FBQUEsaUJBQ3hCO0FBQUEsb0JBQVEsTUFBUjtBQUFBLGNBQWUsS0FBS0MsRUFBRUYsSUFBdEIsRUFBNEIsT0FBT0UsRUFBRUYsSUFBckM7QUFDR1Asc0JBQVVPLElBQVYsS0FBbUIsZ0JBQW5CLEdBQXNDWixPQUFPYyxFQUFFRixJQUFULENBQXRDLEdBQXVERSxFQUFFQztBQUQ1RCxXQUR3QjtBQUFBLFNBQXpCO0FBREg7QUFERixLQURZO0FBQUEsR0FBUjtBQUZPLENBQWYiLCJmaWxlIjoicGFja2FnZXMvY29sbGVjdGlvbi9lZGl0LWVudW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9DbGFzcyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdhbnRkJztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuL2Zvcm0taXRlbSc7XG5cbmNvbnN0IHN0YXRlcyA9IHtcbiAgUFVCTElTSEVEOiAnw5ZmZmVudGxpY2gnLFxuICBEUkFGVDogJ0VudHd1cmYnLFxuICBSRU1PVkVEOiAnUGFwaWVya29yYicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJ1bGU6ICh7IGlubmVyVHlwZSB9KSA9PiBpbm5lclR5cGUua2luZCA9PT0gJ0VOVU0nICYmIGlubmVyVHlwZS5lbnVtVmFsdWVzLFxuICBmb3JtOiB0b0NsYXNzKCh7IGlubmVyVHlwZSwgc3BlY2lhbEZpZWxkcywgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxGb3JtSXRlbSB7Li4ucHJvcHN9PlxuICAgICAgPFNlbGVjdCB7Li4ucHJvcHN9IHZhbHVlPXtwcm9wcy52YWx1ZSB8fCBpbm5lclR5cGUuZW51bVZhbHVlc1swXS5uYW1lfT5cbiAgICAgICAge2lubmVyVHlwZS5lbnVtVmFsdWVzLm1hcCh4ID0+IChcbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e3gubmFtZX0gdmFsdWU9e3gubmFtZX0+XG4gICAgICAgICAgICB7aW5uZXJUeXBlLm5hbWUgPT09ICdET0NVTUVOVF9TVEFURScgPyBzdGF0ZXNbeC5uYW1lXSA6IHgubGFiZWx9XG4gICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvU2VsZWN0PlxuICAgIDwvRm9ybUl0ZW0+XG4gICkpLFxufTtcbiJdfQ==
