import 'antd/lib/button/style';
import _Button2 from 'antd/lib/button';
import 'antd/lib/button/style';
import _Button from 'antd/lib/button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { toClass, compose, withState } from 'recompose';
import { createComponent, Modal } from 'olymp-fela';
import { TimeRangesEditor } from 'olymp-ui';

import FormItem from './form-item';

var Footer = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    padding: theme.space2
  };
}, function (_ref2) {
  var onClose = _ref2.onClose,
      className = _ref2.className;
  return React.createElement(
    'div',
    { className: className },
    React.createElement(
      _Button,
      { type: 'primary', onClick: onClose },
      '\xDCbernehmen'
    )
  );
}, function (p) {
  return Object.keys(p);
});

var enhance = compose(withState('isOpen', 'setOpen', false), toClass);

export default {
  rule: function rule(_ref3) {
    var type = _ref3.type;
    return type.kind === 'LIST' && type.ofType.name === 'TimeRange';
  },
  form: enhance(function (_ref4) {
    var isOpen = _ref4.isOpen,
        setOpen = _ref4.setOpen,
        dataField = _ref4['data-__field'],
        dataMeta = _ref4['data-__meta'],
        p = _objectWithoutProperties(_ref4, ['isOpen', 'setOpen', 'data-__field', 'data-__meta']);

    return React.createElement(
      FormItem,
      p,
      React.createElement(
        _Button2,
        {
          onClick: function onClick() {
            return setOpen(true);
          },
          'data-__field': dataField,
          'data-__meta': dataMeta
        },
        'Bearbeiten'
      ),
      React.createElement(
        Modal,
        {
          footer: React.createElement(Footer, { onClose: function onClose() {
              return setOpen(false);
            } }),
          open: isOpen,
          onClose: function onClose() {
            return setOpen(false);
          }
        },
        React.createElement(TimeRangesEditor, _extends({ style: { padding: 20 } }, p))
      )
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1vcGVuaW5ncy5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJ0b0NsYXNzIiwiY29tcG9zZSIsIndpdGhTdGF0ZSIsImNyZWF0ZUNvbXBvbmVudCIsIk1vZGFsIiwiVGltZVJhbmdlc0VkaXRvciIsIkZvcm1JdGVtIiwiRm9vdGVyIiwidGhlbWUiLCJwYWRkaW5nIiwic3BhY2UyIiwib25DbG9zZSIsImNsYXNzTmFtZSIsIk9iamVjdCIsImtleXMiLCJwIiwiZW5oYW5jZSIsInJ1bGUiLCJ0eXBlIiwia2luZCIsIm9mVHlwZSIsIm5hbWUiLCJmb3JtIiwiaXNPcGVuIiwic2V0T3BlbiIsImRhdGFGaWVsZCIsImRhdGFNZXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsT0FBbEIsRUFBMkJDLFNBQTNCLFFBQTRDLFdBQTVDO0FBQ0EsU0FBU0MsZUFBVCxFQUEwQkMsS0FBMUIsUUFBdUMsWUFBdkM7QUFDQSxTQUFTQyxnQkFBVCxRQUFpQyxVQUFqQzs7QUFFQSxPQUFPQyxRQUFQLE1BQXFCLGFBQXJCOztBQUVBLElBQU1DLFNBQVNKLGdCQUNiO0FBQUEsTUFBR0ssS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZ0I7QUFDZEMsYUFBU0QsTUFBTUU7QUFERCxHQUFoQjtBQUFBLENBRGEsRUFJYjtBQUFBLE1BQUdDLE9BQUgsU0FBR0EsT0FBSDtBQUFBLE1BQVlDLFNBQVosU0FBWUEsU0FBWjtBQUFBLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBV0EsU0FBaEI7QUFDRTtBQUFBO0FBQUEsUUFBUSxNQUFLLFNBQWIsRUFBdUIsU0FBU0QsT0FBaEM7QUFBQTtBQUFBO0FBREYsR0FERjtBQUFBLENBSmEsRUFXYjtBQUFBLFNBQUtFLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0FYYSxDQUFmOztBQWNBLElBQU1DLFVBQVVmLFFBQVFDLFVBQVUsUUFBVixFQUFvQixTQUFwQixFQUErQixLQUEvQixDQUFSLEVBQStDRixPQUEvQyxDQUFoQjs7QUFFQSxlQUFlO0FBQ2JpQixRQUFNO0FBQUEsUUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsV0FBY0EsS0FBS0MsSUFBTCxLQUFjLE1BQWQsSUFBd0JELEtBQUtFLE1BQUwsQ0FBWUMsSUFBWixLQUFxQixXQUEzRDtBQUFBLEdBRE87QUFFYkMsUUFBTU4sUUFDSjtBQUFBLFFBQ0VPLE1BREYsU0FDRUEsTUFERjtBQUFBLFFBRUVDLE9BRkYsU0FFRUEsT0FGRjtBQUFBLFFBR2tCQyxTQUhsQixTQUdFLGNBSEY7QUFBQSxRQUlpQkMsUUFKakIsU0FJRSxhQUpGO0FBQUEsUUFLS1gsQ0FMTCx5REFHRSxjQUhGLEVBSUUsYUFKRjs7QUFBQSxXQU9FO0FBQUMsY0FBRDtBQUFjQSxPQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsbUJBQVM7QUFBQSxtQkFBTVMsUUFBUSxJQUFSLENBQU47QUFBQSxXQURYO0FBRUUsMEJBQWNDLFNBRmhCO0FBR0UseUJBQWFDO0FBSGY7QUFBQTtBQUFBLE9BREY7QUFTRTtBQUFDLGFBQUQ7QUFBQTtBQUNFLGtCQUFRLG9CQUFDLE1BQUQsSUFBUSxTQUFTO0FBQUEscUJBQU1GLFFBQVEsS0FBUixDQUFOO0FBQUEsYUFBakIsR0FEVjtBQUVFLGdCQUFNRCxNQUZSO0FBR0UsbUJBQVM7QUFBQSxtQkFBTUMsUUFBUSxLQUFSLENBQU47QUFBQTtBQUhYO0FBS0UsNEJBQUMsZ0JBQUQsYUFBa0IsT0FBTyxFQUFFZixTQUFTLEVBQVgsRUFBekIsSUFBOENNLENBQTlDO0FBTEY7QUFURixLQVBGO0FBQUEsR0FESTtBQUZPLENBQWYiLCJmaWxlIjoicGFja2FnZXMvY29sbGVjdGlvbi9lZGl0LW9wZW5pbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRvQ2xhc3MsIGNvbXBvc2UsIHdpdGhTdGF0ZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQsIE1vZGFsIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBUaW1lUmFuZ2VzRWRpdG9yIH0gZnJvbSAnb2x5bXAtdWknO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgRm9ybUl0ZW0gZnJvbSAnLi9mb3JtLWl0ZW0nO1xuXG5jb25zdCBGb290ZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2UyLFxuICB9KSxcbiAgKHsgb25DbG9zZSwgY2xhc3NOYW1lIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgw5xiZXJuZWhtZW5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2Uod2l0aFN0YXRlKCdpc09wZW4nLCAnc2V0T3BlbicsIGZhbHNlKSwgdG9DbGFzcyk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZTogKHsgdHlwZSB9KSA9PiB0eXBlLmtpbmQgPT09ICdMSVNUJyAmJiB0eXBlLm9mVHlwZS5uYW1lID09PSAnVGltZVJhbmdlJyxcbiAgZm9ybTogZW5oYW5jZShcbiAgICAoe1xuICAgICAgaXNPcGVuLFxuICAgICAgc2V0T3BlbixcbiAgICAgICdkYXRhLV9fZmllbGQnOiBkYXRhRmllbGQsXG4gICAgICAnZGF0YS1fX21ldGEnOiBkYXRhTWV0YSxcbiAgICAgIC4uLnBcbiAgICB9KSA9PiAoXG4gICAgICA8Rm9ybUl0ZW0gey4uLnB9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX1cbiAgICAgICAgICBkYXRhLV9fZmllbGQ9e2RhdGFGaWVsZH1cbiAgICAgICAgICBkYXRhLV9fbWV0YT17ZGF0YU1ldGF9XG4gICAgICAgID5cbiAgICAgICAgICBCZWFyYmVpdGVuXG4gICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGZvb3Rlcj17PEZvb3RlciBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0gLz59XG4gICAgICAgICAgb3Blbj17aXNPcGVufVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgPFRpbWVSYW5nZXNFZGl0b3Igc3R5bGU9e3sgcGFkZGluZzogMjAgfX0gey4uLnB9IC8+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L0Zvcm1JdGVtPlxuICAgICksXG4gICksXG59O1xuIl19
