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

import { layout } from 'olymp-utils';
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2VkaXRzL3BhZ2UtdHlwZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJsYXlvdXQiLCJnZXRSdWxlcyIsIlBhZ2VUeXBlSW5wdXQiLCJpdGVtIiwiZmllbGQiLCJsYWJlbCIsImluaXRpYWxWYWx1ZSIsInJ1bGVzIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwicmVzdCIsImdldEZpZWxkRGVjb3JhdG9yIiwid2lkdGgiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOztBQUVBLFNBQVNDLE1BQVQsUUFBdUIsYUFBdkI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGNBQXJCOztZQW1CUTtBQUFBLFdBQVEsTUFBUjtBQUFBLElBQWUsT0FBTSxNQUFyQjtBQUFBO0FBQUEsQzs7WUFDQTtBQUFBLFdBQVEsTUFBUjtBQUFBLElBQWUsT0FBTSxNQUFyQjtBQUFBO0FBQUEsQzs7WUFDQTtBQUFBLFdBQVEsTUFBUjtBQUFBLElBQWUsT0FBTSxhQUFyQjtBQUFBO0FBQUEsQzs7WUFDQTtBQUFBLFdBQVEsTUFBUjtBQUFBLElBQWUsT0FBTSxPQUFyQjtBQUFBO0FBQUEsQzs7WUFDQTtBQUFBLFdBQVEsTUFBUjtBQUFBLElBQWUsT0FBTSxNQUFyQjtBQUFBO0FBQUEsQzs7QUFyQlIsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLE1BQ3BCQyxJQURvQixRQUNwQkEsSUFEb0I7QUFBQSxNQUVwQkMsS0FGb0IsUUFFcEJBLEtBRm9CO0FBQUEsTUFHcEJDLEtBSG9CLFFBR3BCQSxLQUhvQjtBQUFBLE1BSXBCTCxNQUpvQixRQUlwQkEsTUFKb0I7QUFBQSxNQUtwQk0sWUFMb0IsUUFLcEJBLFlBTG9CO0FBQUEsTUFNcEJDLEtBTm9CLFFBTXBCQSxLQU5vQjtBQUFBLE1BT3BCQyxXQVBvQixRQU9wQkEsV0FQb0I7QUFBQSxNQVFwQkMsSUFSb0IsUUFRcEJBLElBUm9CO0FBQUEsTUFTakJDLElBVGlCOztBQUFBLFNBV3BCO0FBQUEsVUFBTSxJQUFOO0FBQUEsZUFBVyxLQUFLTixLQUFoQixFQUF1QixPQUFPQyxLQUE5QixJQUF5Q0wsTUFBekM7QUFDR1MsU0FBS0UsaUJBQUwsQ0FBdUJQLEtBQXZCLEVBQThCO0FBQzdCRSxvQkFBY0gsUUFBUUEsS0FBS0MsS0FBTCxDQUFSLEdBQXNCRCxLQUFLQyxLQUFMLENBQXRCLEdBQW9DLE1BRHJCO0FBRTdCRyxhQUFPTixTQUFTTSxLQUFULEVBQWdCRixLQUFoQjtBQUZzQixLQUE5QixFQUlDO0FBQUE7QUFBQSxpQkFBUSxPQUFPLEVBQUVPLE9BQU8sTUFBVCxFQUFmLElBQXNDRixJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUpEO0FBREgsR0FYb0I7QUFBQSxDQUF0QjtBQTBCQVIsY0FBY1csWUFBZCxHQUE2QixFQUFFYixjQUFGLEVBQTdCO0FBQ0EsZUFBZUUsYUFBZiIsImZpbGUiOiJwYWNrYWdlcy9wYWdlcy9lZGl0cy9wYWdlLXR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgU2VsZWN0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tICdvbHltcC11dGlscyc7XG5pbXBvcnQgZ2V0UnVsZXMgZnJvbSAnLi4vZ2V0LXJ1bGVzJztcblxuY29uc3QgUGFnZVR5cGVJbnB1dCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsYWJlbCxcbiAgbGF5b3V0LFxuICBpbml0aWFsVmFsdWUsXG4gIHJ1bGVzLFxuICBwbGFjZWhvbGRlcixcbiAgZm9ybSxcbiAgLi4ucmVzdFxufSkgPT4gKFxuICA8Rm9ybS5JdGVtIGtleT17ZmllbGR9IGxhYmVsPXtsYWJlbH0gey4uLmxheW91dH0+XG4gICAge2Zvcm0uZ2V0RmllbGREZWNvcmF0b3IoZmllbGQsIHtcbiAgICAgIGluaXRpYWxWYWx1ZTogaXRlbSAmJiBpdGVtW2ZpZWxkXSA/IGl0ZW1bZmllbGRdIDogJ1BBR0UnLFxuICAgICAgcnVsZXM6IGdldFJ1bGVzKHJ1bGVzLCBsYWJlbCksXG4gICAgfSkoXG4gICAgICA8U2VsZWN0IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gey4uLnJlc3R9PlxuICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIlBBR0VcIj5TZWl0ZTwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJNRU5VXCI+TWVuw7w8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiUExBQ0VIT0xERVJcIj5QbGF0emhhbHRlcjwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJBTElBU1wiPkFsaWFzPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIkxJTktcIj5FeHRlcm5lciBMaW5rPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgPC9TZWxlY3Q+LFxuICAgICl9XG4gIDwvRm9ybS5JdGVtPlxuKTtcblBhZ2VUeXBlSW5wdXQuZGVmYXVsdFByb3BzID0geyBsYXlvdXQgfTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2VUeXBlSW5wdXQ7XG4iXX0=
