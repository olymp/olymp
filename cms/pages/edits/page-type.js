import 'antd/lib/select/style';
import _Select6 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select5 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select4 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select3 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select2 from 'antd/lib/select';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import { layout } from 'olymp-antd';
import getRules from '../get-rules';

var _ref2 = React.createElement(
  _Select2.Option,
  { value: 'PAGE' },
  'Seite'
);

var _ref3 = React.createElement(
  _Select3.Option,
  { value: 'MENU' },
  'Men\xFC'
);

var _ref4 = React.createElement(
  _Select4.Option,
  { value: 'PLACEHOLDER' },
  'Platzhalter'
);

var _ref5 = React.createElement(
  _Select5.Option,
  { value: 'ALIAS' },
  'Alias'
);

var _ref6 = React.createElement(
  _Select6.Option,
  { value: 'LINK' },
  'Externer Link'
);

var PageTypeInput = function PageTypeInput(_ref) {
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
      initialValue: item && item[field] ? item[field] : 'PAGE',
      rules: getRules(rules, label)
    })(React.createElement(
      _Select,
      _extends({ style: { width: '100%' } }, rest),
      _ref2,
      _ref3,
      _ref4,
      _ref5,
      _ref6
    ))
  );
};
PageTypeInput.defaultProps = { layout: layout };
export default PageTypeInput;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9lZGl0cy9wYWdlLXR5cGUuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwibGF5b3V0IiwiZ2V0UnVsZXMiLCJQYWdlVHlwZUlucHV0IiwiaXRlbSIsImZpZWxkIiwibGFiZWwiLCJpbml0aWFsVmFsdWUiLCJydWxlcyIsInBsYWNlaG9sZGVyIiwiZm9ybSIsInJlc3QiLCJnZXRGaWVsZERlY29yYXRvciIsIndpZHRoIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjs7QUFFQSxTQUFTQyxNQUFULFFBQXVCLFlBQXZCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixjQUFyQjs7WUFtQlE7QUFBQSxXQUFRLE1BQVI7QUFBQSxJQUFlLE9BQU0sTUFBckI7QUFBQTtBQUFBLEM7O1lBQ0E7QUFBQSxXQUFRLE1BQVI7QUFBQSxJQUFlLE9BQU0sTUFBckI7QUFBQTtBQUFBLEM7O1lBQ0E7QUFBQSxXQUFRLE1BQVI7QUFBQSxJQUFlLE9BQU0sYUFBckI7QUFBQTtBQUFBLEM7O1lBQ0E7QUFBQSxXQUFRLE1BQVI7QUFBQSxJQUFlLE9BQU0sT0FBckI7QUFBQTtBQUFBLEM7O1lBQ0E7QUFBQSxXQUFRLE1BQVI7QUFBQSxJQUFlLE9BQU0sTUFBckI7QUFBQTtBQUFBLEM7O0FBckJSLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0I7QUFBQSxNQUNwQkMsSUFEb0IsUUFDcEJBLElBRG9CO0FBQUEsTUFFcEJDLEtBRm9CLFFBRXBCQSxLQUZvQjtBQUFBLE1BR3BCQyxLQUhvQixRQUdwQkEsS0FIb0I7QUFBQSxNQUlwQkwsTUFKb0IsUUFJcEJBLE1BSm9CO0FBQUEsTUFLcEJNLFlBTG9CLFFBS3BCQSxZQUxvQjtBQUFBLE1BTXBCQyxLQU5vQixRQU1wQkEsS0FOb0I7QUFBQSxNQU9wQkMsV0FQb0IsUUFPcEJBLFdBUG9CO0FBQUEsTUFRcEJDLElBUm9CLFFBUXBCQSxJQVJvQjtBQUFBLE1BU2pCQyxJQVRpQjs7QUFBQSxTQVdwQjtBQUFBLFVBQU0sSUFBTjtBQUFBLGVBQVcsS0FBS04sS0FBaEIsRUFBdUIsT0FBT0MsS0FBOUIsSUFBeUNMLE1BQXpDO0FBQ0dTLFNBQUtFLGlCQUFMLENBQXVCUCxLQUF2QixFQUE4QjtBQUM3QkUsb0JBQWNILFFBQVFBLEtBQUtDLEtBQUwsQ0FBUixHQUFzQkQsS0FBS0MsS0FBTCxDQUF0QixHQUFvQyxNQURyQjtBQUU3QkcsYUFBT04sU0FBU00sS0FBVCxFQUFnQkYsS0FBaEI7QUFGc0IsS0FBOUIsRUFJQztBQUFBO0FBQUEsaUJBQVEsT0FBTyxFQUFFTyxPQUFPLE1BQVQsRUFBZixJQUFzQ0YsSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKRDtBQURILEdBWG9CO0FBQUEsQ0FBdEI7QUEwQkFSLGNBQWNXLFlBQWQsR0FBNkIsRUFBRWIsY0FBRixFQUE3QjtBQUNBLGVBQWVFLGFBQWYiLCJmaWxlIjoiY21zL3BhZ2VzL2VkaXRzL3BhZ2UtdHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBTZWxlY3QgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGxheW91dCB9IGZyb20gJ29seW1wLWFudGQnO1xuaW1wb3J0IGdldFJ1bGVzIGZyb20gJy4uL2dldC1ydWxlcyc7XG5cbmNvbnN0IFBhZ2VUeXBlSW5wdXQgPSAoe1xuICBpdGVtLFxuICBmaWVsZCxcbiAgbGFiZWwsXG4gIGxheW91dCxcbiAgaW5pdGlhbFZhbHVlLFxuICBydWxlcyxcbiAgcGxhY2Vob2xkZXIsXG4gIGZvcm0sXG4gIC4uLnJlc3Rcbn0pID0+IChcbiAgPEZvcm0uSXRlbSBrZXk9e2ZpZWxkfSBsYWJlbD17bGFiZWx9IHsuLi5sYXlvdXR9PlxuICAgIHtmb3JtLmdldEZpZWxkRGVjb3JhdG9yKGZpZWxkLCB7XG4gICAgICBpbml0aWFsVmFsdWU6IGl0ZW0gJiYgaXRlbVtmaWVsZF0gPyBpdGVtW2ZpZWxkXSA6ICdQQUdFJyxcbiAgICAgIHJ1bGVzOiBnZXRSdWxlcyhydWxlcywgbGFiZWwpLFxuICAgIH0pKFxuICAgICAgPFNlbGVjdCBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHsuLi5yZXN0fT5cbiAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJQQUdFXCI+U2VpdGU8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiTUVOVVwiPk1lbsO8PC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIlBMQUNFSE9MREVSXCI+UGxhdHpoYWx0ZXI8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiQUxJQVNcIj5BbGlhczwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJMSU5LXCI+RXh0ZXJuZXIgTGluazwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgIDwvU2VsZWN0PixcbiAgICApfVxuICA8L0Zvcm0uSXRlbT5cbik7XG5QYWdlVHlwZUlucHV0LmRlZmF1bHRQcm9wcyA9IHsgbGF5b3V0IH07XG5leHBvcnQgZGVmYXVsdCBQYWdlVHlwZUlucHV0O1xuIl19
