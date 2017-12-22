import 'antd/lib/form/style';
import _Form6 from 'antd/lib/form';
import 'antd/lib/input/style';
import _Input6 from 'antd/lib/input';
import 'antd/lib/form/style';
import _Form5 from 'antd/lib/form';
import 'antd/lib/input/style';
import _Input5 from 'antd/lib/input';
import 'antd/lib/form/style';
import _Form4 from 'antd/lib/form';
import 'antd/lib/input/style';
import _Input4 from 'antd/lib/input';
import 'antd/lib/form/style';
import _Form3 from 'antd/lib/form';
import 'antd/lib/input/style';
import _Input3 from 'antd/lib/input';
import 'antd/lib/form/style';
import _Form2 from 'antd/lib/form';
import 'antd/lib/input/style';
import _Input2 from 'antd/lib/input';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Menu from 'olymp-fela/menu';
import format from 'date-fns/format';


var FormForFullLayout = {
  wrapperCol: { span: 24, offset: 0 },
  style: { marginBottom: 4 }
};

export default (function (item, app) {
  return React.createElement(
    Menu.List,
    { title: 'Meta-Daten', key: '2' },
    React.createElement(
      _Form.Item,
      _extends({ key: 'project', label: 'Projekt' }, FormForFullLayout),
      React.createElement(_Input, { disabled: true, placeholder: 'Projekt', value: app })
    ),
    React.createElement(
      _Form2.Item,
      _extends({ key: 'size', label: 'Gr\xF6\xDFe' }, FormForFullLayout),
      React.createElement(_Input2, {
        disabled: true,
        placeholder: 'Gr\xF6\xDFe',
        value: item.width + 'x' + item.height
      })
    ),
    React.createElement(
      _Form3.Item,
      _extends({ key: 'date', label: 'Hinzugef\xFCgt' }, FormForFullLayout),
      React.createElement(_Input3, {
        disabled: true,
        placeholder: 'Hinzugef\xFCgt',
        value: format(item.createdAt, 'DD. MMMM YYYY, HH:mm:ss') + ' Uhr'
      })
    ),
    React.createElement(
      _Form4.Item,
      _extends({ key: 'format', label: 'Format' }, FormForFullLayout),
      React.createElement(_Input4, { disabled: true, placeholder: 'Format', value: item.format })
    ),
    item.format === 'pdf' ? React.createElement(
      _Form5.Item,
      _extends({ key: 'pages', label: 'Seiten' }, FormForFullLayout),
      React.createElement(_Input5, { disabled: true, placeholder: 'Seiten', value: item.pages })
    ) : undefined,
    React.createElement(
      _Form6.Item,
      _extends({ key: 'bytes', label: 'Dateigr\xF6\xDFe' }, FormForFullLayout),
      React.createElement(_Input6, {
        disabled: true,
        placeholder: 'Dateigr\xF6\xDFe',
        value: item.bytes / 1000 + ' kB'
      })
    )
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvZGV0YWlsL2luZm8uZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIkZvcm1Gb3JGdWxsTGF5b3V0Iiwid3JhcHBlckNvbCIsInNwYW4iLCJvZmZzZXQiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsIml0ZW0iLCJhcHAiLCJ3aWR0aCIsImhlaWdodCIsImZvcm1hdCIsImNyZWF0ZWRBdCIsInBhZ2VzIiwidW5kZWZpbmVkIiwiYnl0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7O0FBRUEsT0FBT0MsSUFBUCxNQUFpQixpQkFBakI7Ozs7QUFHQSxJQUFNQyxvQkFBb0I7QUFDeEJDLGNBQVksRUFBRUMsTUFBTSxFQUFSLEVBQVlDLFFBQVEsQ0FBcEIsRUFEWTtBQUV4QkMsU0FBTyxFQUFFQyxjQUFjLENBQWhCO0FBRmlCLENBQTFCOztBQUtBLGdCQUFlLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLFNBQ2I7QUFBQyxRQUFELENBQU0sSUFBTjtBQUFBLE1BQVcsT0FBTSxZQUFqQixFQUE4QixLQUFJLEdBQWxDO0FBQ0U7QUFBQSxZQUFNLElBQU47QUFBQSxpQkFBVyxLQUFJLFNBQWYsRUFBeUIsT0FBTSxTQUEvQixJQUE2Q1AsaUJBQTdDO0FBQ0Usb0NBQU8sY0FBUCxFQUFnQixhQUFZLFNBQTVCLEVBQXNDLE9BQU9PLEdBQTdDO0FBREYsS0FERjtBQUlFO0FBQUEsYUFBTSxJQUFOO0FBQUEsaUJBQVcsS0FBSSxNQUFmLEVBQXNCLE9BQU0sYUFBNUIsSUFBd0NQLGlCQUF4QztBQUNFO0FBQ0Usc0JBREY7QUFFRSxxQkFBWSxhQUZkO0FBR0UsZUFBVU0sS0FBS0UsS0FBZixTQUF3QkYsS0FBS0c7QUFIL0I7QUFERixLQUpGO0FBV0U7QUFBQSxhQUFNLElBQU47QUFBQSxpQkFBVyxLQUFJLE1BQWYsRUFBc0IsT0FBTSxnQkFBNUIsSUFBOENULGlCQUE5QztBQUNFO0FBQ0Usc0JBREY7QUFFRSxxQkFBWSxnQkFGZDtBQUdFLGVBQVVVLE9BQU9KLEtBQUtLLFNBQVosRUFBdUIseUJBQXZCLENBQVY7QUFIRjtBQURGLEtBWEY7QUFrQkU7QUFBQSxhQUFNLElBQU47QUFBQSxpQkFBVyxLQUFJLFFBQWYsRUFBd0IsT0FBTSxRQUE5QixJQUEyQ1gsaUJBQTNDO0FBQ0UscUNBQU8sY0FBUCxFQUFnQixhQUFZLFFBQTVCLEVBQXFDLE9BQU9NLEtBQUtJLE1BQWpEO0FBREYsS0FsQkY7QUFxQkdKLFNBQUtJLE1BQUwsS0FBZ0IsS0FBaEIsR0FDQztBQUFBLGFBQU0sSUFBTjtBQUFBLGlCQUFXLEtBQUksT0FBZixFQUF1QixPQUFNLFFBQTdCLElBQTBDVixpQkFBMUM7QUFDRSxxQ0FBTyxjQUFQLEVBQWdCLGFBQVksUUFBNUIsRUFBcUMsT0FBT00sS0FBS00sS0FBakQ7QUFERixLQURELEdBS0NDLFNBMUJKO0FBNEJFO0FBQUEsYUFBTSxJQUFOO0FBQUEsaUJBQVcsS0FBSSxPQUFmLEVBQXVCLE9BQU0sa0JBQTdCLElBQThDYixpQkFBOUM7QUFDRTtBQUNFLHNCQURGO0FBRUUscUJBQVksa0JBRmQ7QUFHRSxlQUFVTSxLQUFLUSxLQUFMLEdBQWEsSUFBdkI7QUFIRjtBQURGO0FBNUJGLEdBRGE7QUFBQSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2Nsb3VkaW5hcnkvZGV0YWlsL2luZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCBNZW51IGZyb20gJ29seW1wLWZlbGEvbWVudSc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IEZvcm1Gb3JGdWxsTGF5b3V0ID0ge1xuICB3cmFwcGVyQ29sOiB7IHNwYW46IDI0LCBvZmZzZXQ6IDAgfSxcbiAgc3R5bGU6IHsgbWFyZ2luQm90dG9tOiA0IH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoaXRlbSwgYXBwKSA9PiAoXG4gIDxNZW51Lkxpc3QgdGl0bGU9XCJNZXRhLURhdGVuXCIga2V5PVwiMlwiPlxuICAgIDxGb3JtLkl0ZW0ga2V5PVwicHJvamVjdFwiIGxhYmVsPVwiUHJvamVrdFwiIHsuLi5Gb3JtRm9yRnVsbExheW91dH0+XG4gICAgICA8SW5wdXQgZGlzYWJsZWQgcGxhY2Vob2xkZXI9XCJQcm9qZWt0XCIgdmFsdWU9e2FwcH0gLz5cbiAgICA8L0Zvcm0uSXRlbT5cbiAgICA8Rm9ybS5JdGVtIGtleT1cInNpemVcIiBsYWJlbD1cIkdyw7bDn2VcIiB7Li4uRm9ybUZvckZ1bGxMYXlvdXR9PlxuICAgICAgPElucHV0XG4gICAgICAgIGRpc2FibGVkXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiR3LDtsOfZVwiXG4gICAgICAgIHZhbHVlPXtgJHtpdGVtLndpZHRofXgke2l0ZW0uaGVpZ2h0fWB9XG4gICAgICAvPlxuICAgIDwvRm9ybS5JdGVtPlxuICAgIDxGb3JtLkl0ZW0ga2V5PVwiZGF0ZVwiIGxhYmVsPVwiSGluenVnZWbDvGd0XCIgey4uLkZvcm1Gb3JGdWxsTGF5b3V0fT5cbiAgICAgIDxJbnB1dFxuICAgICAgICBkaXNhYmxlZFxuICAgICAgICBwbGFjZWhvbGRlcj1cIkhpbnp1Z2Vmw7xndFwiXG4gICAgICAgIHZhbHVlPXtgJHtmb3JtYXQoaXRlbS5jcmVhdGVkQXQsICdERC4gTU1NTSBZWVlZLCBISDptbTpzcycpfSBVaHJgfVxuICAgICAgLz5cbiAgICA8L0Zvcm0uSXRlbT5cbiAgICA8Rm9ybS5JdGVtIGtleT1cImZvcm1hdFwiIGxhYmVsPVwiRm9ybWF0XCIgey4uLkZvcm1Gb3JGdWxsTGF5b3V0fT5cbiAgICAgIDxJbnB1dCBkaXNhYmxlZCBwbGFjZWhvbGRlcj1cIkZvcm1hdFwiIHZhbHVlPXtpdGVtLmZvcm1hdH0gLz5cbiAgICA8L0Zvcm0uSXRlbT5cbiAgICB7aXRlbS5mb3JtYXQgPT09ICdwZGYnID8gKFxuICAgICAgPEZvcm0uSXRlbSBrZXk9XCJwYWdlc1wiIGxhYmVsPVwiU2VpdGVuXCIgey4uLkZvcm1Gb3JGdWxsTGF5b3V0fT5cbiAgICAgICAgPElucHV0IGRpc2FibGVkIHBsYWNlaG9sZGVyPVwiU2VpdGVuXCIgdmFsdWU9e2l0ZW0ucGFnZXN9IC8+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICApIDogKFxuICAgICAgdW5kZWZpbmVkXG4gICAgKX1cbiAgICA8Rm9ybS5JdGVtIGtleT1cImJ5dGVzXCIgbGFiZWw9XCJEYXRlaWdyw7bDn2VcIiB7Li4uRm9ybUZvckZ1bGxMYXlvdXR9PlxuICAgICAgPElucHV0XG4gICAgICAgIGRpc2FibGVkXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRGF0ZWlncsO2w59lXCJcbiAgICAgICAgdmFsdWU9e2Ake2l0ZW0uYnl0ZXMgLyAxMDAwfSBrQmB9XG4gICAgICAvPlxuICAgIDwvRm9ybS5JdGVtPlxuICA8L01lbnUuTGlzdD5cbik7XG4iXX0=
