var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import ShortID from 'shortid';
import Label from './label';
import Text from './text';

export default {
  type: 'accordion',
  isVoid: false,
  kind: 'block',
  label: 'Akkordeon',
  category: 'Layout',
  component: function component(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        children = _ref.children;
    return React.createElement(
      'div',
      _extends({ className: className }, attributes),
      children
    );
  },
  initNode: function initNode(node) {
    node.data = { id: ShortID.generate().substr(0, 4) };
    return node;
  },
  defaultNodes: function defaultNodes() {
    return [Label, Text];
  },
  styles: function styles(_ref2) {
    var theme = _ref2.theme;
    return {
      marginBottom: theme.space3
    };
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9hY2NvcmRpb24vYWNjb3JkaW9uLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNob3J0SUQiLCJMYWJlbCIsIlRleHQiLCJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImxhYmVsIiwiY2F0ZWdvcnkiLCJjb21wb25lbnQiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJpbml0Tm9kZSIsIm5vZGUiLCJkYXRhIiwiaWQiLCJnZW5lcmF0ZSIsInN1YnN0ciIsImRlZmF1bHROb2RlcyIsInN0eWxlcyIsInRoZW1lIiwibWFyZ2luQm90dG9tIiwic3BhY2UzIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLFNBQXBCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixTQUFsQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7O0FBRUEsZUFBZTtBQUNiQyxRQUFNLFdBRE87QUFFYkMsVUFBUSxLQUZLO0FBR2JDLFFBQU0sT0FITztBQUliQyxTQUFPLFdBSk07QUFLYkMsWUFBVSxRQUxHO0FBTWJDLGFBQVc7QUFBQSxRQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxRQUFjQyxVQUFkLFFBQWNBLFVBQWQ7QUFBQSxRQUEwQkMsUUFBMUIsUUFBMEJBLFFBQTFCO0FBQUEsV0FDVDtBQUFBO0FBQUEsaUJBQUssV0FBV0YsU0FBaEIsSUFBK0JDLFVBQS9CO0FBQ0dDO0FBREgsS0FEUztBQUFBLEdBTkU7QUFXYkMsWUFBVSx3QkFBUTtBQUNoQkMsU0FBS0MsSUFBTCxHQUFZLEVBQUVDLElBQUlmLFFBQVFnQixRQUFSLEdBQW1CQyxNQUFuQixDQUEwQixDQUExQixFQUE2QixDQUE3QixDQUFOLEVBQVo7QUFDQSxXQUFPSixJQUFQO0FBQ0QsR0FkWTtBQWViSyxnQkFBYztBQUFBLFdBQU0sQ0FBQ2pCLEtBQUQsRUFBUUMsSUFBUixDQUFOO0FBQUEsR0FmRDtBQWdCYmlCLFVBQVE7QUFBQSxRQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxXQUFnQjtBQUN0QkMsb0JBQWNELE1BQU1FO0FBREUsS0FBaEI7QUFBQTtBQWhCSyxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaG9ydElEIGZyb20gJ3Nob3J0aWQnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlOiAnYWNjb3JkaW9uJyxcbiAgaXNWb2lkOiBmYWxzZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgbGFiZWw6ICdBa2tvcmRlb24nLFxuICBjYXRlZ29yeTogJ0xheW91dCcsXG4gIGNvbXBvbmVudDogKHsgY2xhc3NOYW1lLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLmF0dHJpYnV0ZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApLFxuICBpbml0Tm9kZTogbm9kZSA9PiB7XG4gICAgbm9kZS5kYXRhID0geyBpZDogU2hvcnRJRC5nZW5lcmF0ZSgpLnN1YnN0cigwLCA0KSB9O1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICBkZWZhdWx0Tm9kZXM6ICgpID0+IFtMYWJlbCwgVGV4dF0sXG4gIHN0eWxlczogKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNlMyxcbiAgfSksXG59O1xuIl19
