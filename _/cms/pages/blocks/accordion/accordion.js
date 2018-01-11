'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: 'accordion',
  isVoid: false,
  kind: 'block',
  label: 'Akkordeon',
  category: 'Layout',
  component: function component(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        children = _ref.children;
    return _react2.default.createElement(
      'div',
      _extends({ className: className }, attributes),
      children
    );
  },
  initNode: function initNode(node) {
    node.data = { id: _shortid2.default.generate().substr(0, 4) };
    return node;
  },
  defaultNodes: function defaultNodes() {
    return [_label2.default, _text2.default];
  },
  styles: function styles(_ref2) {
    var theme = _ref2.theme;
    return {
      marginBottom: theme.space3
    };
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvYWNjb3JkaW9uL2FjY29yZGlvbi5lczYiXSwibmFtZXMiOlsidHlwZSIsImlzVm9pZCIsImtpbmQiLCJsYWJlbCIsImNhdGVnb3J5IiwiY29tcG9uZW50IiwiY2xhc3NOYW1lIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwiaW5pdE5vZGUiLCJub2RlIiwiZGF0YSIsImlkIiwiZ2VuZXJhdGUiLCJzdWJzdHIiLCJkZWZhdWx0Tm9kZXMiLCJzdHlsZXMiLCJ0aGVtZSIsIm1hcmdpbkJvdHRvbSIsInNwYWNlMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQ2JBLFFBQU0sV0FETztBQUViQyxVQUFRLEtBRks7QUFHYkMsUUFBTSxPQUhPO0FBSWJDLFNBQU8sV0FKTTtBQUtiQyxZQUFVLFFBTEc7QUFNYkMsYUFBVztBQUFBLFFBQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFFBQWNDLFVBQWQsUUFBY0EsVUFBZDtBQUFBLFFBQTBCQyxRQUExQixRQUEwQkEsUUFBMUI7QUFBQSxXQUNUO0FBQUE7QUFBQSxpQkFBSyxXQUFXRixTQUFoQixJQUErQkMsVUFBL0I7QUFDR0M7QUFESCxLQURTO0FBQUEsR0FORTtBQVdiQyxZQUFVLHdCQUFRO0FBQ2hCQyxTQUFLQyxJQUFMLEdBQVksRUFBRUMsSUFBSSxrQkFBUUMsUUFBUixHQUFtQkMsTUFBbkIsQ0FBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsQ0FBTixFQUFaO0FBQ0EsV0FBT0osSUFBUDtBQUNELEdBZFk7QUFlYkssZ0JBQWM7QUFBQSxXQUFNLGlDQUFOO0FBQUEsR0FmRDtBQWdCYkMsVUFBUTtBQUFBLFFBQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFdBQWdCO0FBQ3RCQyxvQkFBY0QsTUFBTUU7QUFERSxLQUFoQjtBQUFBO0FBaEJLLEMiLCJmaWxlIjoiY21zL3BhZ2VzL2Jsb2Nrcy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaG9ydElEIGZyb20gJ3Nob3J0aWQnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlOiAnYWNjb3JkaW9uJyxcbiAgaXNWb2lkOiBmYWxzZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgbGFiZWw6ICdBa2tvcmRlb24nLFxuICBjYXRlZ29yeTogJ0xheW91dCcsXG4gIGNvbXBvbmVudDogKHsgY2xhc3NOYW1lLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLmF0dHJpYnV0ZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApLFxuICBpbml0Tm9kZTogbm9kZSA9PiB7XG4gICAgbm9kZS5kYXRhID0geyBpZDogU2hvcnRJRC5nZW5lcmF0ZSgpLnN1YnN0cigwLCA0KSB9O1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICBkZWZhdWx0Tm9kZXM6ICgpID0+IFtMYWJlbCwgVGV4dF0sXG4gIHN0eWxlczogKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNlMyxcbiAgfSksXG59O1xuIl19
