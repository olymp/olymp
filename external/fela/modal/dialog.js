var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent } from 'react-fela';
import Layout from '../layout';
import Modal from './modal';

var Inner = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    width: '100%',
    height: '100%',
    backgroundColor: theme.light,
    // boxShadow: theme.boxShadow,
    border: '1px solid ' + theme.dark1,
    borderRadius: theme.borderRadius
  };
}, function (p) {
  return React.createElement(Layout, _extends({ affix: true }, p));
}, []);

export default (function (_ref2) {
  var header = _ref2.header,
      footer = _ref2.footer,
      container = _ref2.container,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ['header', 'footer', 'container', 'children']);

  return React.createElement(
    Modal,
    props,
    React.createElement(
      Inner,
      null,
      header && React.createElement(
        Layout.Header,
        { container: container },
        header
      ),
      React.createElement(
        Layout.Body,
        { container: container },
        children
      ),
      footer && React.createElement(
        Layout.Footer,
        { container: container },
        footer
      )
    )
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbW9kYWwvZGlhbG9nLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbXBvbmVudCIsIkxheW91dCIsIk1vZGFsIiwiSW5uZXIiLCJ0aGVtZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwibGlnaHQiLCJib3JkZXIiLCJkYXJrMSIsImJvcmRlclJhZGl1cyIsInAiLCJoZWFkZXIiLCJmb290ZXIiLCJjb250YWluZXIiLCJjaGlsZHJlbiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFdBQW5CO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixTQUFsQjs7QUFFQSxJQUFNQyxRQUFRSCxnQkFDWjtBQUFBLE1BQUdJLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLFdBQU8sTUFETztBQUVkQyxZQUFRLE1BRk07QUFHZEMscUJBQWlCSCxNQUFNSSxLQUhUO0FBSWQ7QUFDQUMsMkJBQXFCTCxNQUFNTSxLQUxiO0FBTWRDLGtCQUFjUCxNQUFNTztBQU5OLEdBQWhCO0FBQUEsQ0FEWSxFQVNaO0FBQUEsU0FBSyxvQkFBQyxNQUFELGFBQVEsV0FBUixJQUFrQkMsQ0FBbEIsRUFBTDtBQUFBLENBVFksRUFVWixFQVZZLENBQWQ7O0FBYUEsZ0JBQWU7QUFBQSxNQUFHQyxNQUFILFNBQUdBLE1BQUg7QUFBQSxNQUFXQyxNQUFYLFNBQVdBLE1BQVg7QUFBQSxNQUFtQkMsU0FBbkIsU0FBbUJBLFNBQW5CO0FBQUEsTUFBOEJDLFFBQTlCLFNBQThCQSxRQUE5QjtBQUFBLE1BQTJDQyxLQUEzQzs7QUFBQSxTQUNiO0FBQUMsU0FBRDtBQUFXQSxTQUFYO0FBQ0U7QUFBQyxXQUFEO0FBQUE7QUFDR0osZ0JBQVU7QUFBQyxjQUFELENBQVEsTUFBUjtBQUFBLFVBQWUsV0FBV0UsU0FBMUI7QUFBc0NGO0FBQXRDLE9BRGI7QUFFRTtBQUFDLGNBQUQsQ0FBUSxJQUFSO0FBQUEsVUFBYSxXQUFXRSxTQUF4QjtBQUFvQ0M7QUFBcEMsT0FGRjtBQUdHRixnQkFBVTtBQUFDLGNBQUQsQ0FBUSxNQUFSO0FBQUEsVUFBZSxXQUFXQyxTQUExQjtBQUFzQ0Q7QUFBdEM7QUFIYjtBQURGLEdBRGE7QUFBQSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbW9kYWwvZGlhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXQnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuXG5jb25zdCBJbm5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUubGlnaHQsXG4gICAgLy8gYm94U2hhZG93OiB0aGVtZS5ib3hTaGFkb3csXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuZGFyazF9YCxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgfSksXG4gIHAgPT4gPExheW91dCBhZmZpeCB7Li4ucH0gLz4sXG4gIFtdLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgKHsgaGVhZGVyLCBmb290ZXIsIGNvbnRhaW5lciwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPE1vZGFsIHsuLi5wcm9wc30+XG4gICAgPElubmVyPlxuICAgICAge2hlYWRlciAmJiA8TGF5b3V0LkhlYWRlciBjb250YWluZXI9e2NvbnRhaW5lcn0+e2hlYWRlcn08L0xheW91dC5IZWFkZXI+fVxuICAgICAgPExheW91dC5Cb2R5IGNvbnRhaW5lcj17Y29udGFpbmVyfT57Y2hpbGRyZW59PC9MYXlvdXQuQm9keT5cbiAgICAgIHtmb290ZXIgJiYgPExheW91dC5Gb290ZXIgY29udGFpbmVyPXtjb250YWluZXJ9Pntmb290ZXJ9PC9MYXlvdXQuRm9vdGVyPn1cbiAgICA8L0lubmVyPlxuICA8L01vZGFsPlxuKTtcbiJdfQ==
