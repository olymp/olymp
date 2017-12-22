var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { Container } from 'olymp-fela';

var BannerBlock = function BannerBlock(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className,
      children = _ref.children;
  return React.createElement(
    'div',
    _extends({ className: className }, attributes),
    React.createElement(
      Container,
      null,
      React.createElement(
        'h2',
        null,
        children
      )
    )
  );
};

export default {
  type: 'banner',
  isVoid: false,
  kind: 'block',
  label: 'Banner',
  defaultText: 'Titel',
  category: 'Kopf',
  styles: function styles(_ref2) {
    var theme = _ref2.theme;
    return {
      backgroundColor: '#ddd',
      minHeight: 75,
      width: '100%',
      marginBottom: 20,
      paddingY: theme.space3
    };
  },
  component: BannerBlock
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9iYW5uZXIuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiQmFubmVyQmxvY2siLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImxhYmVsIiwiZGVmYXVsdFRleHQiLCJjYXRlZ29yeSIsInN0eWxlcyIsInRoZW1lIiwiYmFja2dyb3VuZENvbG9yIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nWSIsInNwYWNlMyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixZQUExQjs7QUFFQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxVQUFILFFBQUdBLFVBQUg7QUFBQSxNQUFlQyxTQUFmLFFBQWVBLFNBQWY7QUFBQSxNQUEwQkMsUUFBMUIsUUFBMEJBLFFBQTFCO0FBQUEsU0FDbEI7QUFBQTtBQUFBLGVBQUssV0FBV0QsU0FBaEIsSUFBK0JELFVBQS9CO0FBQ0U7QUFBQyxlQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBS0U7QUFBTDtBQURGO0FBREYsR0FEa0I7QUFBQSxDQUFwQjs7QUFRQSxlQUFlO0FBQ2JDLFFBQU0sUUFETztBQUViQyxVQUFRLEtBRks7QUFHYkMsUUFBTSxPQUhPO0FBSWJDLFNBQU8sUUFKTTtBQUtiQyxlQUFhLE9BTEE7QUFNYkMsWUFBVSxNQU5HO0FBT2JDLFVBQVE7QUFBQSxRQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxXQUFnQjtBQUN0QkMsdUJBQWlCLE1BREs7QUFFdEJDLGlCQUFXLEVBRlc7QUFHdEJDLGFBQU8sTUFIZTtBQUl0QkMsb0JBQWMsRUFKUTtBQUt0QkMsZ0JBQVVMLE1BQU1NO0FBTE0sS0FBaEI7QUFBQSxHQVBLO0FBY2JDLGFBQVdsQjtBQWRFLENBQWYiLCJmaWxlIjoicGFja2FnZXMvcGFnZXMvYmxvY2tzL2Jhbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdvbHltcC1mZWxhJztcblxuY29uc3QgQmFubmVyQmxvY2sgPSAoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLmF0dHJpYnV0ZXN9PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8aDI+e2NoaWxkcmVufTwvaDI+XG4gICAgPC9Db250YWluZXI+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlOiAnYmFubmVyJyxcbiAgaXNWb2lkOiBmYWxzZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgbGFiZWw6ICdCYW5uZXInLFxuICBkZWZhdWx0VGV4dDogJ1RpdGVsJyxcbiAgY2F0ZWdvcnk6ICdLb3BmJyxcbiAgc3R5bGVzOiAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNkZGQnLFxuICAgIG1pbkhlaWdodDogNzUsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIHBhZGRpbmdZOiB0aGVtZS5zcGFjZTMsXG4gIH0pLFxuICBjb21wb25lbnQ6IEJhbm5lckJsb2NrLFxufTtcbiJdfQ==
