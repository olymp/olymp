import 'antd/lib/icon/style';
import _Icon3 from 'antd/lib/icon';
import 'antd/lib/icon/style';
import _Icon2 from 'antd/lib/icon';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/select/style';
import _Select4 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select3 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select2 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import getRules from '../get-rules';
import layout from '../layout';

var _ref2 = React.createElement(_Icon, { type: 'inbox' });

var _ref3 = React.createElement(_Icon2, { type: 'check' });

var _ref4 = React.createElement(_Icon3, { type: 'delete' });

var StateInput = function StateInput(_ref) {
  var item = _ref.item,
      field = _ref.field,
      label = _ref.label,
      layout = _ref.layout,
      initialValue = _ref.initialValue,
      _ref$rules = _ref.rules,
      rules = _ref$rules === undefined ? ['required'] : _ref$rules,
      placeholder = _ref.placeholder,
      form = _ref.form,
      rest = _objectWithoutProperties(_ref, ['item', 'field', 'label', 'layout', 'initialValue', 'rules', 'placeholder', 'form']);

  return React.createElement(
    _Form.Item,
    _extends({ key: field, label: label }, layout),
    form.getFieldDecorator(field, {
      initialValue: item ? item[field] : undefined,
      rules: getRules(rules, label)
    })(React.createElement(
      _Select4,
      _extends({ style: { width: '100%' } }, rest),
      React.createElement(
        _Select.Option,
        { value: 'DRAFT' },
        React.createElement(
          'b',
          { style: { color: 'blue' } },
          _ref2
        ),
        ' ',
        'Ablage'
      ),
      React.createElement(
        _Select2.Option,
        { value: 'PUBLISHED' },
        React.createElement(
          'b',
          { style: { color: 'green' } },
          _ref3
        ),
        ' ',
        'Ver\xF6ffentlicht'
      ),
      React.createElement(
        _Select3.Option,
        { value: 'REMOVED' },
        React.createElement(
          'b',
          { style: { color: 'red' } },
          _ref4
        ),
        ' ',
        'Gel\xF6scht'
      )
    ))
  );
};
StateInput.defaultProps = { layout: layout };
export default StateInput;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9lZGl0cy9zdGF0ZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJnZXRSdWxlcyIsImxheW91dCIsIlN0YXRlSW5wdXQiLCJpdGVtIiwiZmllbGQiLCJsYWJlbCIsImluaXRpYWxWYWx1ZSIsInJ1bGVzIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwicmVzdCIsImdldEZpZWxkRGVjb3JhdG9yIiwidW5kZWZpbmVkIiwid2lkdGgiLCJjb2xvciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjs7QUFFQSxPQUFPQyxRQUFQLE1BQXFCLGNBQXJCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFxQlksNkJBQU0sTUFBSyxPQUFYLEc7O1lBTUEsOEJBQU0sTUFBSyxPQUFYLEc7O1lBTUEsOEJBQU0sTUFBSyxRQUFYLEc7O0FBL0JaLElBQU1DLGFBQWEsU0FBYkEsVUFBYTtBQUFBLE1BQ2pCQyxJQURpQixRQUNqQkEsSUFEaUI7QUFBQSxNQUVqQkMsS0FGaUIsUUFFakJBLEtBRmlCO0FBQUEsTUFHakJDLEtBSGlCLFFBR2pCQSxLQUhpQjtBQUFBLE1BSWpCSixNQUppQixRQUlqQkEsTUFKaUI7QUFBQSxNQUtqQkssWUFMaUIsUUFLakJBLFlBTGlCO0FBQUEsd0JBTWpCQyxLQU5pQjtBQUFBLE1BTWpCQSxLQU5pQiw4QkFNVCxDQUFDLFVBQUQsQ0FOUztBQUFBLE1BT2pCQyxXQVBpQixRQU9qQkEsV0FQaUI7QUFBQSxNQVFqQkMsSUFSaUIsUUFRakJBLElBUmlCO0FBQUEsTUFTZEMsSUFUYzs7QUFBQSxTQVdqQjtBQUFBLFVBQU0sSUFBTjtBQUFBLGVBQVcsS0FBS04sS0FBaEIsRUFBdUIsT0FBT0MsS0FBOUIsSUFBeUNKLE1BQXpDO0FBQ0dRLFNBQUtFLGlCQUFMLENBQXVCUCxLQUF2QixFQUE4QjtBQUM3QkUsb0JBQWNILE9BQU9BLEtBQUtDLEtBQUwsQ0FBUCxHQUFxQlEsU0FETjtBQUU3QkwsYUFBT1AsU0FBU08sS0FBVCxFQUFnQkYsS0FBaEI7QUFGc0IsS0FBOUIsRUFJQztBQUFBO0FBQUEsaUJBQVEsT0FBTyxFQUFFUSxPQUFPLE1BQVQsRUFBZixJQUFzQ0gsSUFBdEM7QUFDRTtBQUFBLGdCQUFRLE1BQVI7QUFBQSxVQUFlLE9BQU0sT0FBckI7QUFDRTtBQUFBO0FBQUEsWUFBRyxPQUFPLEVBQUVJLE9BQU8sTUFBVCxFQUFWO0FBQUE7QUFBQSxTQURGO0FBR08sV0FIUDtBQUFBO0FBQUEsT0FERjtBQU9FO0FBQUEsaUJBQVEsTUFBUjtBQUFBLFVBQWUsT0FBTSxXQUFyQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE9BQU8sRUFBRUEsT0FBTyxPQUFULEVBQVY7QUFBQTtBQUFBLFNBREY7QUFHTyxXQUhQO0FBQUE7QUFBQSxPQVBGO0FBYUU7QUFBQSxpQkFBUSxNQUFSO0FBQUEsVUFBZSxPQUFNLFNBQXJCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsT0FBTyxFQUFFQSxPQUFPLEtBQVQsRUFBVjtBQUFBO0FBQUEsU0FERjtBQUdPLFdBSFA7QUFBQTtBQUFBO0FBYkYsS0FKRDtBQURILEdBWGlCO0FBQUEsQ0FBbkI7QUF1Q0FaLFdBQVdhLFlBQVgsR0FBMEIsRUFBRWQsY0FBRixFQUExQjtBQUNBLGVBQWVDLFVBQWYiLCJmaWxlIjoiY21zL3BhZ2VzL2VkaXRzL3N0YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0sIFNlbGVjdCwgSWNvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IGdldFJ1bGVzIGZyb20gJy4uL2dldC1ydWxlcyc7XG5pbXBvcnQgbGF5b3V0IGZyb20gJy4uL2xheW91dCc7XG5cbmNvbnN0IFN0YXRlSW5wdXQgPSAoe1xuICBpdGVtLFxuICBmaWVsZCxcbiAgbGFiZWwsXG4gIGxheW91dCxcbiAgaW5pdGlhbFZhbHVlLFxuICBydWxlcyA9IFsncmVxdWlyZWQnXSxcbiAgcGxhY2Vob2xkZXIsXG4gIGZvcm0sXG4gIC4uLnJlc3Rcbn0pID0+IChcbiAgPEZvcm0uSXRlbSBrZXk9e2ZpZWxkfSBsYWJlbD17bGFiZWx9IHsuLi5sYXlvdXR9PlxuICAgIHtmb3JtLmdldEZpZWxkRGVjb3JhdG9yKGZpZWxkLCB7XG4gICAgICBpbml0aWFsVmFsdWU6IGl0ZW0gPyBpdGVtW2ZpZWxkXSA6IHVuZGVmaW5lZCxcbiAgICAgIHJ1bGVzOiBnZXRSdWxlcyhydWxlcywgbGFiZWwpLFxuICAgIH0pKFxuICAgICAgPFNlbGVjdCBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHsuLi5yZXN0fT5cbiAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJEUkFGVFwiPlxuICAgICAgICAgIDxiIHN0eWxlPXt7IGNvbG9yOiAnYmx1ZScgfX0+XG4gICAgICAgICAgICA8SWNvbiB0eXBlPVwiaW5ib3hcIiAvPlxuICAgICAgICAgIDwvYj57JyAnfVxuICAgICAgICAgIEFibGFnZVxuICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiUFVCTElTSEVEXCI+XG4gICAgICAgICAgPGIgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+XG4gICAgICAgICAgICA8SWNvbiB0eXBlPVwiY2hlY2tcIiAvPlxuICAgICAgICAgIDwvYj57JyAnfVxuICAgICAgICAgIFZlcsO2ZmZlbnRsaWNodFxuICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiUkVNT1ZFRFwiPlxuICAgICAgICAgIDxiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5cbiAgICAgICAgICAgIDxJY29uIHR5cGU9XCJkZWxldGVcIiAvPlxuICAgICAgICAgIDwvYj57JyAnfVxuICAgICAgICAgIEdlbMO2c2NodFxuICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICA8L1NlbGVjdD4sXG4gICAgKX1cbiAgPC9Gb3JtLkl0ZW0+XG4pO1xuU3RhdGVJbnB1dC5kZWZhdWx0UHJvcHMgPSB7IGxheW91dCB9O1xuZXhwb3J0IGRlZmF1bHQgU3RhdGVJbnB1dDtcbiJdfQ==
