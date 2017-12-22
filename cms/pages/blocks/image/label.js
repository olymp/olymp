var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { createComponent } from 'olymp-fela';

var component = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    left: 0,
    width: '100%',
    padding: theme.space1 + ' ' + theme.space3,
    backgroundColor: theme.light2,
    color: theme.dark,
    '> p': {
      padding: 0,
      color: theme.dark2
    },
    ifSmallDown: {
      position: 'relative',
      padding: theme.space2,
      backgroundColor: theme.dark5
    }
  };
}, function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      attributes = _ref2.attributes;
  return React.createElement(
    'div',
    _extends({ className: className }, attributes),
    children
  );
}, function (p) {
  return Object.keys(p);
});

export default {
  type: 'imageLabel',
  isVoid: false,
  kind: 'block',
  label: 'Titel',
  defaultNodes: ['paragraph'],
  component: component
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9pbWFnZS9sYWJlbC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb21wb25lbnQiLCJjb21wb25lbnQiLCJ0aGVtZSIsInBvc2l0aW9uIiwiekluZGV4IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwicGFkZGluZyIsInNwYWNlMSIsInNwYWNlMyIsImJhY2tncm91bmRDb2xvciIsImxpZ2h0MiIsImNvbG9yIiwiZGFyayIsImRhcmsyIiwiaWZTbWFsbERvd24iLCJzcGFjZTIiLCJkYXJrNSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiYXR0cmlidXRlcyIsIk9iamVjdCIsImtleXMiLCJwIiwidHlwZSIsImlzVm9pZCIsImtpbmQiLCJsYWJlbCIsImRlZmF1bHROb2RlcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQzs7QUFFQSxJQUFNQyxZQUFZRCxnQkFDaEI7QUFBQSxNQUFHRSxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxjQUFVLFVBREk7QUFFZEMsWUFBUSxDQUZNO0FBR2RDLFlBQVEsQ0FITTtBQUlkQyxVQUFNLENBSlE7QUFLZEMsV0FBTyxNQUxPO0FBTWRDLGFBQVlOLE1BQU1PLE1BQWxCLFNBQTRCUCxNQUFNUSxNQU5wQjtBQU9kQyxxQkFBaUJULE1BQU1VLE1BUFQ7QUFRZEMsV0FBT1gsTUFBTVksSUFSQztBQVNkLFdBQU87QUFDTE4sZUFBUyxDQURKO0FBRUxLLGFBQU9YLE1BQU1hO0FBRlIsS0FUTztBQWFkQyxpQkFBYTtBQUNYYixnQkFBVSxVQURDO0FBRVhLLGVBQVNOLE1BQU1lLE1BRko7QUFHWE4sdUJBQWlCVCxNQUFNZ0I7QUFIWjtBQWJDLEdBQWhCO0FBQUEsQ0FEZ0IsRUFvQmhCO0FBQUEsTUFBR0MsU0FBSCxTQUFHQSxTQUFIO0FBQUEsTUFBY0MsUUFBZCxTQUFjQSxRQUFkO0FBQUEsTUFBd0JDLFVBQXhCLFNBQXdCQSxVQUF4QjtBQUFBLFNBQ0U7QUFBQTtBQUFBLGVBQUssV0FBV0YsU0FBaEIsSUFBK0JFLFVBQS9CO0FBQ0dEO0FBREgsR0FERjtBQUFBLENBcEJnQixFQXlCaEI7QUFBQSxTQUFLRSxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBekJnQixDQUFsQjs7QUE0QkEsZUFBZTtBQUNiQyxRQUFNLFlBRE87QUFFYkMsVUFBUSxLQUZLO0FBR2JDLFFBQU0sT0FITztBQUliQyxTQUFPLE9BSk07QUFLYkMsZ0JBQWMsQ0FBQyxXQUFELENBTEQ7QUFNYjVCO0FBTmEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9wYWdlcy9ibG9ja3MvaW1hZ2UvbGFiZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbmNvbnN0IGNvbXBvbmVudCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB6SW5kZXg6IDEsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjZTF9ICR7dGhlbWUuc3BhY2UzfWAsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5saWdodDIsXG4gICAgY29sb3I6IHRoZW1lLmRhcmssXG4gICAgJz4gcCc6IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBjb2xvcjogdGhlbWUuZGFyazIsXG4gICAgfSxcbiAgICBpZlNtYWxsRG93bjoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjZTIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmRhcms1LFxuICAgIH0sXG4gIH0pLFxuICAoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBhdHRyaWJ1dGVzIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4uYXR0cmlidXRlc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGU6ICdpbWFnZUxhYmVsJyxcbiAgaXNWb2lkOiBmYWxzZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgbGFiZWw6ICdUaXRlbCcsXG4gIGRlZmF1bHROb2RlczogWydwYXJhZ3JhcGgnXSxcbiAgY29tcG9uZW50LFxufTtcbiJdfQ==
