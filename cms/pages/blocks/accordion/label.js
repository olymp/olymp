import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent, border } from 'olymp-fela';
import { withQueryParam, Link } from 'olymp-router';


var Label = createComponent(function (_ref) {
  var theme = _ref.theme,
      readOnly = _ref.readOnly;
  return {
    width: '100%',
    display: 'inline-block',
    // color: `${theme.color} !important`,
    borderBottom: border(theme),
    onHover: {
      borderBottom: border(theme, theme.color)
    },
    '> h2': {
      '> span': {
        float: 'left',
        cursor: readOnly && 'pointer',
        marginRight: 5
      },
      '> i': {
        float: 'right',
        cursor: 'pointer'
      }
    },
    clearfix: true
  };
}, function (_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ['children']);

  return React.createElement(
    Link,
    props,
    React.createElement(
      'h2',
      null,
      children
    )
  );
}, function (p) {
  return Object.keys(p);
});

export default {
  type: 'accordionLabel',
  isVoid: false,
  kind: 'block',
  label: 'Überschrift',
  defaultText: 'Titel',
  component: withQueryParam('accordion')(function (_ref3) {
    var attributes = _ref3.attributes,
        className = _ref3.className,
        children = _ref3.children,
        accordion = _ref3.accordion,
        editor = _ref3.editor,
        parent = _ref3.parent;
    return React.createElement(
      Label,
      _extends({
        className: className,
        readOnly: editor.props.readOnly,
        updateQuery: {
          accordion: accordion !== parent.data.get('id') ? parent.data.get('id') : undefined
        }
      }, attributes),
      React.createElement(
        'span',
        {
          onClick: !editor.props.readOnly ? function (x) {
            return x.stopPropagation();
          } : undefined
        },
        children
      ),
      React.createElement(_Icon, {
        contentEditable: false,
        type: accordion === parent.data.get('id') ? 'down-square-o' : 'left-square-o'
      })
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9hY2NvcmRpb24vbGFiZWwuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29tcG9uZW50IiwiYm9yZGVyIiwid2l0aFF1ZXJ5UGFyYW0iLCJMaW5rIiwiTGFiZWwiLCJ0aGVtZSIsInJlYWRPbmx5Iiwid2lkdGgiLCJkaXNwbGF5IiwiYm9yZGVyQm90dG9tIiwib25Ib3ZlciIsImNvbG9yIiwiZmxvYXQiLCJjdXJzb3IiLCJtYXJnaW5SaWdodCIsImNsZWFyZml4IiwiY2hpbGRyZW4iLCJwcm9wcyIsIk9iamVjdCIsImtleXMiLCJwIiwidHlwZSIsImlzVm9pZCIsImtpbmQiLCJsYWJlbCIsImRlZmF1bHRUZXh0IiwiY29tcG9uZW50IiwiYXR0cmlidXRlcyIsImNsYXNzTmFtZSIsImFjY29yZGlvbiIsImVkaXRvciIsInBhcmVudCIsImRhdGEiLCJnZXQiLCJ1bmRlZmluZWQiLCJ4Iiwic3RvcFByb3BhZ2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLGVBQVQsRUFBMEJDLE1BQTFCLFFBQXdDLFlBQXhDO0FBQ0EsU0FBU0MsY0FBVCxFQUF5QkMsSUFBekIsUUFBcUMsY0FBckM7OztBQUdBLElBQU1DLFFBQVFKLGdCQUNaO0FBQUEsTUFBR0ssS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsUUFBVixRQUFVQSxRQUFWO0FBQUEsU0FBMEI7QUFDeEJDLFdBQU8sTUFEaUI7QUFFeEJDLGFBQVMsY0FGZTtBQUd4QjtBQUNBQyxrQkFBY1IsT0FBT0ksS0FBUCxDQUpVO0FBS3hCSyxhQUFTO0FBQ1BELG9CQUFjUixPQUFPSSxLQUFQLEVBQWNBLE1BQU1NLEtBQXBCO0FBRFAsS0FMZTtBQVF4QixZQUFRO0FBQ04sZ0JBQVU7QUFDUkMsZUFBTyxNQURDO0FBRVJDLGdCQUFRUCxZQUFZLFNBRlo7QUFHUlEscUJBQWE7QUFITCxPQURKO0FBTU4sYUFBTztBQUNMRixlQUFPLE9BREY7QUFFTEMsZ0JBQVE7QUFGSDtBQU5ELEtBUmdCO0FBbUJ4QkUsY0FBVTtBQW5CYyxHQUExQjtBQUFBLENBRFksRUFzQlo7QUFBQSxNQUFHQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxNQUFnQkMsS0FBaEI7O0FBQUEsU0FDRTtBQUFDLFFBQUQ7QUFBVUEsU0FBVjtBQUNFO0FBQUE7QUFBQTtBQUFLRDtBQUFMO0FBREYsR0FERjtBQUFBLENBdEJZLEVBMkJaO0FBQUEsU0FBS0UsT0FBT0MsSUFBUCxDQUFZQyxDQUFaLENBQUw7QUFBQSxDQTNCWSxDQUFkOztBQThCQSxlQUFlO0FBQ2JDLFFBQU0sZ0JBRE87QUFFYkMsVUFBUSxLQUZLO0FBR2JDLFFBQU0sT0FITztBQUliQyxTQUFPLGFBSk07QUFLYkMsZUFBYSxPQUxBO0FBTWJDLGFBQVd4QixlQUNULFdBRFMsRUFFVDtBQUFBLFFBQUd5QixVQUFILFNBQUdBLFVBQUg7QUFBQSxRQUFlQyxTQUFmLFNBQWVBLFNBQWY7QUFBQSxRQUEwQlosUUFBMUIsU0FBMEJBLFFBQTFCO0FBQUEsUUFBb0NhLFNBQXBDLFNBQW9DQSxTQUFwQztBQUFBLFFBQStDQyxNQUEvQyxTQUErQ0EsTUFBL0M7QUFBQSxRQUF1REMsTUFBdkQsU0FBdURBLE1BQXZEO0FBQUEsV0FDQTtBQUFDLFdBQUQ7QUFBQTtBQUNFLG1CQUFXSCxTQURiO0FBRUUsa0JBQVVFLE9BQU9iLEtBQVAsQ0FBYVgsUUFGekI7QUFHRSxxQkFBYTtBQUNYdUIscUJBQ0VBLGNBQWNFLE9BQU9DLElBQVAsQ0FBWUMsR0FBWixDQUFnQixJQUFoQixDQUFkLEdBQ0lGLE9BQU9DLElBQVAsQ0FBWUMsR0FBWixDQUFnQixJQUFoQixDQURKLEdBRUlDO0FBSks7QUFIZixTQVNNUCxVQVROO0FBV0U7QUFBQTtBQUFBO0FBQ0UsbUJBQVMsQ0FBQ0csT0FBT2IsS0FBUCxDQUFhWCxRQUFkLEdBQXlCO0FBQUEsbUJBQUs2QixFQUFFQyxlQUFGLEVBQUw7QUFBQSxXQUF6QixHQUFvREY7QUFEL0Q7QUFHR2xCO0FBSEgsT0FYRjtBQWdCRTtBQUNFLHlCQUFpQixLQURuQjtBQUVFLGNBQ0VhLGNBQWNFLE9BQU9DLElBQVAsQ0FBWUMsR0FBWixDQUFnQixJQUFoQixDQUFkLEdBQ0ksZUFESixHQUVJO0FBTFI7QUFoQkYsS0FEQTtBQUFBLEdBRlM7QUFORSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9hY2NvcmRpb24vbGFiZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50LCBib3JkZXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IHdpdGhRdWVyeVBhcmFtLCBMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdhbnRkJztcblxuY29uc3QgTGFiZWwgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCByZWFkT25seSB9KSA9PiAoe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgLy8gY29sb3I6IGAke3RoZW1lLmNvbG9yfSAhaW1wb3J0YW50YCxcbiAgICBib3JkZXJCb3R0b206IGJvcmRlcih0aGVtZSksXG4gICAgb25Ib3Zlcjoge1xuICAgICAgYm9yZGVyQm90dG9tOiBib3JkZXIodGhlbWUsIHRoZW1lLmNvbG9yKSxcbiAgICB9LFxuICAgICc+IGgyJzoge1xuICAgICAgJz4gc3Bhbic6IHtcbiAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICAgY3Vyc29yOiByZWFkT25seSAmJiAncG9pbnRlcicsXG4gICAgICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgICAgfSxcbiAgICAgICc+IGknOiB7XG4gICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjbGVhcmZpeDogdHJ1ZSxcbiAgfSksXG4gICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPExpbmsgey4uLnByb3BzfT5cbiAgICAgIDxoMj57Y2hpbGRyZW59PC9oMj5cbiAgICA8L0xpbms+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGU6ICdhY2NvcmRpb25MYWJlbCcsXG4gIGlzVm9pZDogZmFsc2UsXG4gIGtpbmQ6ICdibG9jaycsXG4gIGxhYmVsOiAnw5xiZXJzY2hyaWZ0JyxcbiAgZGVmYXVsdFRleHQ6ICdUaXRlbCcsXG4gIGNvbXBvbmVudDogd2l0aFF1ZXJ5UGFyYW0oXG4gICAgJ2FjY29yZGlvbicsXG4gICkoKHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBjaGlsZHJlbiwgYWNjb3JkaW9uLCBlZGl0b3IsIHBhcmVudCB9KSA9PiAoXG4gICAgPExhYmVsXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHJlYWRPbmx5PXtlZGl0b3IucHJvcHMucmVhZE9ubHl9XG4gICAgICB1cGRhdGVRdWVyeT17e1xuICAgICAgICBhY2NvcmRpb246XG4gICAgICAgICAgYWNjb3JkaW9uICE9PSBwYXJlbnQuZGF0YS5nZXQoJ2lkJylcbiAgICAgICAgICAgID8gcGFyZW50LmRhdGEuZ2V0KCdpZCcpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIH19XG4gICAgICB7Li4uYXR0cmlidXRlc31cbiAgICA+XG4gICAgICA8c3BhblxuICAgICAgICBvbkNsaWNrPXshZWRpdG9yLnByb3BzLnJlYWRPbmx5ID8geCA9PiB4LnN0b3BQcm9wYWdhdGlvbigpIDogdW5kZWZpbmVkfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3NwYW4+XG4gICAgICA8SWNvblxuICAgICAgICBjb250ZW50RWRpdGFibGU9e2ZhbHNlfVxuICAgICAgICB0eXBlPXtcbiAgICAgICAgICBhY2NvcmRpb24gPT09IHBhcmVudC5kYXRhLmdldCgnaWQnKVxuICAgICAgICAgICAgPyAnZG93bi1zcXVhcmUtbydcbiAgICAgICAgICAgIDogJ2xlZnQtc3F1YXJlLW8nXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9MYWJlbD5cbiAgKSksXG59O1xuIl19
