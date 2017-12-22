import React from 'react';

export default {
  bold: function bold(_ref) {
    var children = _ref.children,
        attributes = _ref.attributes;
    return React.createElement(
      'strong',
      attributes,
      children
    );
  },
  code: function code(_ref2) {
    var children = _ref2.children,
        attributes = _ref2.attributes;
    return React.createElement(
      'code',
      attributes,
      children
    );
  },
  italic: function italic(_ref3) {
    var children = _ref3.children,
        attributes = _ref3.attributes;
    return React.createElement(
      'em',
      attributes,
      children
    );
  },
  underlined: function underlined(_ref4) {
    var children = _ref4.children,
        attributes = _ref4.attributes;
    return React.createElement(
      'u',
      attributes,
      children
    );
  }
  // center: ({ children, attributes }) => <center {...attributes}>{children}</center>,
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL2RlZmF1bHRzL21hcmtzLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImJvbGQiLCJjaGlsZHJlbiIsImF0dHJpYnV0ZXMiLCJjb2RlIiwiaXRhbGljIiwidW5kZXJsaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjs7QUFFQSxlQUFlO0FBQ2JDLFFBQU07QUFBQSxRQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxRQUFhQyxVQUFiLFFBQWFBLFVBQWI7QUFBQSxXQUE4QjtBQUFBO0FBQVlBLGdCQUFaO0FBQXlCRDtBQUF6QixLQUE5QjtBQUFBLEdBRE87QUFFYkUsUUFBTTtBQUFBLFFBQUdGLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFFBQWFDLFVBQWIsU0FBYUEsVUFBYjtBQUFBLFdBQThCO0FBQUE7QUFBVUEsZ0JBQVY7QUFBdUJEO0FBQXZCLEtBQTlCO0FBQUEsR0FGTztBQUdiRyxVQUFRO0FBQUEsUUFBR0gsUUFBSCxTQUFHQSxRQUFIO0FBQUEsUUFBYUMsVUFBYixTQUFhQSxVQUFiO0FBQUEsV0FBOEI7QUFBQTtBQUFRQSxnQkFBUjtBQUFxQkQ7QUFBckIsS0FBOUI7QUFBQSxHQUhLO0FBSWJJLGNBQVk7QUFBQSxRQUFHSixRQUFILFNBQUdBLFFBQUg7QUFBQSxRQUFhQyxVQUFiLFNBQWFBLFVBQWI7QUFBQSxXQUE4QjtBQUFBO0FBQU9BLGdCQUFQO0FBQW9CRDtBQUFwQixLQUE5QjtBQUFBO0FBQ1o7QUFMYSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3NsYXRlL2RlZmF1bHRzL21hcmtzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBib2xkOiAoeyBjaGlsZHJlbiwgYXR0cmlidXRlcyB9KSA9PiA8c3Ryb25nIHsuLi5hdHRyaWJ1dGVzfT57Y2hpbGRyZW59PC9zdHJvbmc+LFxuICBjb2RlOiAoeyBjaGlsZHJlbiwgYXR0cmlidXRlcyB9KSA9PiA8Y29kZSB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvY29kZT4sXG4gIGl0YWxpYzogKHsgY2hpbGRyZW4sIGF0dHJpYnV0ZXMgfSkgPT4gPGVtIHsuLi5hdHRyaWJ1dGVzfT57Y2hpbGRyZW59PC9lbT4sXG4gIHVuZGVybGluZWQ6ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzIH0pID0+IDx1IHsuLi5hdHRyaWJ1dGVzfT57Y2hpbGRyZW59PC91PixcbiAgLy8gY2VudGVyOiAoeyBjaGlsZHJlbiwgYXR0cmlidXRlcyB9KSA9PiA8Y2VudGVyIHsuLi5hdHRyaWJ1dGVzfT57Y2hpbGRyZW59PC9jZW50ZXI+LFxufTtcbiJdfQ==
