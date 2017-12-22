function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent } from 'react-fela';
import Sidebar from './sidebar';
import Button from './button';

Sidebar.Button = Button;
Sidebar.Container = createComponent(function (_ref) {
  var width = _ref.width;
  return {
    height: '100%',
    '> aside': {
      position: 'fixed',
      height: '100%',
      width: width
    },
    '> nav': {
      position: 'fixed',
      width: width
    },
    '> section': {
      marginLeft: width || 350,
      height: '100%',
      position: 'relative'
    }
  };
}, function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      content = _ref2.content,
      rest = _objectWithoutProperties(_ref2, ['children', 'className', 'content']);

  return React.createElement(
    'div',
    { className: className },
    React.createElement(
      Sidebar,
      rest,
      content
    ),
    React.createElement(
      'section',
      null,
      children
    )
  );
}, function (p) {
  return Object.keys(p);
});

export default Sidebar;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL3NpZGViYXIvaW5kZXguZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29tcG9uZW50IiwiU2lkZWJhciIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJtYXJnaW5MZWZ0IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJjb250ZW50IiwicmVzdCIsIk9iamVjdCIsImtleXMiLCJwIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixXQUFwQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsVUFBbkI7O0FBRUFELFFBQVFDLE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0FELFFBQVFFLFNBQVIsR0FBb0JILGdCQUNsQjtBQUFBLE1BQUdJLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLFlBQVEsTUFETTtBQUVkLGVBQVc7QUFDVEMsZ0JBQVUsT0FERDtBQUVURCxjQUFRLE1BRkM7QUFHVEQ7QUFIUyxLQUZHO0FBT2QsYUFBUztBQUNQRSxnQkFBVSxPQURIO0FBRVBGO0FBRk8sS0FQSztBQVdkLGlCQUFhO0FBQ1hHLGtCQUFZSCxTQUFTLEdBRFY7QUFFWEMsY0FBUSxNQUZHO0FBR1hDLGdCQUFVO0FBSEM7QUFYQyxHQUFoQjtBQUFBLENBRGtCLEVBa0JsQjtBQUFBLE1BQUdFLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWFDLFNBQWIsU0FBYUEsU0FBYjtBQUFBLE1BQXdCQyxPQUF4QixTQUF3QkEsT0FBeEI7QUFBQSxNQUFvQ0MsSUFBcEM7O0FBQUEsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFXRixTQUFoQjtBQUNFO0FBQUMsYUFBRDtBQUFhRSxVQUFiO0FBQW9CRDtBQUFwQixLQURGO0FBRUU7QUFBQTtBQUFBO0FBQVVGO0FBQVY7QUFGRixHQURGO0FBQUEsQ0FsQmtCLEVBd0JsQjtBQUFBLFNBQUtJLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0F4QmtCLENBQXBCOztBQTJCQSxlQUFlYixPQUFmIiwiZmlsZSI6InBhY2thZ2VzL3VpL3NpZGViYXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5cblNpZGViYXIuQnV0dG9uID0gQnV0dG9uO1xuU2lkZWJhci5Db250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHdpZHRoIH0pID0+ICh7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgJz4gYXNpZGUnOiB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGgsXG4gICAgfSxcbiAgICAnPiBuYXYnOiB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHdpZHRoLFxuICAgIH0sXG4gICAgJz4gc2VjdGlvbic6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IHdpZHRoIHx8IDM1MCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgfSxcbiAgfSksXG4gICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGNvbnRlbnQsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPFNpZGViYXIgey4uLnJlc3R9Pntjb250ZW50fTwvU2lkZWJhcj5cbiAgICAgIDxzZWN0aW9uPntjaGlsZHJlbn08L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl19
