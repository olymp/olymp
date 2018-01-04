'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  center: function center(_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        className = _ref.className;
    return _react2.default.createElement(
      'center',
      _extends({}, attributes, { className: className }),
      children
    );
  },
  paragraph: function paragraph(_ref2) {
    var children = _ref2.children,
        attributes = _ref2.attributes,
        className = _ref2.className;
    return _react2.default.createElement(
      'div',
      _extends({}, attributes, { className: className }),
      children
    );
  },
  link: function link(_ref3) {
    var node = _ref3.node,
        attributes = _ref3.attributes,
        children = _ref3.children,
        className = _ref3.className;
    return _react2.default.createElement(
      'a',
      _extends({}, attributes, {
        href: node.data.get('href'),
        className: className,
        target: node.data.get('target'),
        rel: 'noopener noreferrer'
      }),
      children
    );
  },
  'block-quote': function blockQuote(_ref4) {
    var children = _ref4.children,
        attributes = _ref4.attributes,
        className = _ref4.className;
    return _react2.default.createElement(
      'blockquote',
      _extends({}, attributes, { className: className }),
      children
    );
  },
  'bulleted-list': function bulletedList(_ref5) {
    var children = _ref5.children,
        attributes = _ref5.attributes,
        className = _ref5.className;
    return _react2.default.createElement(
      'ul',
      _extends({}, attributes, { className: className }),
      children
    );
  },
  'numbered-list': function numberedList(_ref6) {
    var children = _ref6.children,
        attributes = _ref6.attributes,
        className = _ref6.className;
    return _react2.default.createElement(
      'ol',
      _extends({}, attributes, { className: className }),
      children
    );
  },
  'heading-one': function headingOne(_ref7) {
    var children = _ref7.children,
        attributes = _ref7.attributes,
        className = _ref7.className,
        node = _ref7.node;
    return _react2.default.createElement(
      'h1',
      _extends({}, attributes, {
        className: className,
        'data-heading': '1',
        'data-id': node.data.get('id')
      }),
      children
    );
  },
  'heading-two': function headingTwo(_ref8) {
    var children = _ref8.children,
        attributes = _ref8.attributes,
        className = _ref8.className,
        node = _ref8.node;
    return _react2.default.createElement(
      'h2',
      _extends({}, attributes, {
        className: className,
        'data-heading': '2',
        'data-id': node.data.get('id')
      }),
      children
    );
  },
  'heading-three': function headingThree(_ref9) {
    var children = _ref9.children,
        attributes = _ref9.attributes,
        className = _ref9.className,
        node = _ref9.node;
    return _react2.default.createElement(
      'h3',
      _extends({}, attributes, {
        className: className,
        'data-heading': '3',
        'data-id': node.data.get('id')
      }),
      children
    );
  },
  'heading-four': function headingFour(_ref10) {
    var children = _ref10.children,
        attributes = _ref10.attributes,
        className = _ref10.className,
        node = _ref10.node;
    return _react2.default.createElement(
      'h4',
      _extends({}, attributes, {
        className: className,
        'data-heading': '4',
        'data-id': node.data.get('id')
      }),
      children
    );
  },
  'heading-five': function headingFive(_ref11) {
    var children = _ref11.children,
        attributes = _ref11.attributes,
        className = _ref11.className,
        node = _ref11.node;
    return _react2.default.createElement(
      'h5',
      _extends({}, attributes, {
        className: className,
        'data-heading': '5',
        'data-id': node.data.get('id')
      }),
      children
    );
  },
  'heading-six': function headingSix(_ref12) {
    var children = _ref12.children,
        attributes = _ref12.attributes,
        className = _ref12.className,
        node = _ref12.node;
    return _react2.default.createElement(
      'h6',
      _extends({}, attributes, {
        className: className,
        'data-heading': '6',
        'data-id': node.data.get('id')
      }),
      children
    );
  },
  'list-item': function listItem(_ref13) {
    var children = _ref13.children,
        attributes = _ref13.attributes,
        className = _ref13.className;
    return _react2.default.createElement(
      'li',
      _extends({}, attributes, { className: className }),
      children
    );
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL2RlZmF1bHRzL25vZGVzLmVzNiJdLCJuYW1lcyI6WyJjZW50ZXIiLCJjaGlsZHJlbiIsImF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJwYXJhZ3JhcGgiLCJsaW5rIiwibm9kZSIsImRhdGEiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFFZTtBQUNiQSxVQUFRO0FBQUEsUUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsUUFBYUMsVUFBYixRQUFhQSxVQUFiO0FBQUEsUUFBeUJDLFNBQXpCLFFBQXlCQSxTQUF6QjtBQUFBLFdBQ047QUFBQTtBQUFBLG1CQUFZRCxVQUFaLElBQXdCLFdBQVdDLFNBQW5DO0FBQ0dGO0FBREgsS0FETTtBQUFBLEdBREs7QUFNYkcsYUFBVztBQUFBLFFBQUdILFFBQUgsU0FBR0EsUUFBSDtBQUFBLFFBQWFDLFVBQWIsU0FBYUEsVUFBYjtBQUFBLFFBQXlCQyxTQUF6QixTQUF5QkEsU0FBekI7QUFBQSxXQUNUO0FBQUE7QUFBQSxtQkFBU0QsVUFBVCxJQUFxQixXQUFXQyxTQUFoQztBQUNHRjtBQURILEtBRFM7QUFBQSxHQU5FO0FBV2JJLFFBQU07QUFBQSxRQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxRQUFTSixVQUFULFNBQVNBLFVBQVQ7QUFBQSxRQUFxQkQsUUFBckIsU0FBcUJBLFFBQXJCO0FBQUEsUUFBK0JFLFNBQS9CLFNBQStCQSxTQUEvQjtBQUFBLFdBQ0o7QUFBQTtBQUFBLG1CQUNNRCxVQUROO0FBRUUsY0FBTUksS0FBS0MsSUFBTCxDQUFVQyxHQUFWLENBQWMsTUFBZCxDQUZSO0FBR0UsbUJBQVdMLFNBSGI7QUFJRSxnQkFBUUcsS0FBS0MsSUFBTCxDQUFVQyxHQUFWLENBQWMsUUFBZCxDQUpWO0FBS0UsYUFBSTtBQUxOO0FBT0dQO0FBUEgsS0FESTtBQUFBLEdBWE87QUFzQmIsaUJBQWU7QUFBQSxRQUFHQSxRQUFILFNBQUdBLFFBQUg7QUFBQSxRQUFhQyxV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UDtBQU5ILEtBRGM7QUFBQSxHQTdFSDtBQXVGYixpQkFBZTtBQUFBLFFBQUdBLFFBQUgsVUFBR0EsUUFBSDtBQUFBLFFBQWFDLFVBQWIsVUFBYUEsVUFBYjtBQUFBLFFBQXlCQyxTQUF6QixVQUF5QkEsU0FBekI7QUFBQSxRQUFvQ0csSUFBcEMsVUFBb0NBLElBQXBDO0FBQUEsV0FDYjtBQUFBO0FBQUEsbUJBQ01KLFVBRE47QUFFRSxtQkFBV0MsU0FGYjtBQUdFLHdCQUFhLEdBSGY7QUFJRSxtQkFBU0csS0FBS0MsSUFBTCxDQUFVQyxHQUFWLENBQWMsSUFBZDtBQUpYO0FBTUdQO0FBTkgsS0FEYTtBQUFBLEdBdkZGO0FBaUdiLGVBQWE7QUFBQSxRQUFHQSxRQUFILFVBQUdBLFFBQUg7QUFBQSxRQUFhQyxVQUFiLFVBQWFBLFVBQWI7QUFBQSxRQUF5QkMsU0FBekIsVUFBeUJBLFNBQXpCO0FBQUEsV0FDWDtBQUFBO0FBQUEsbUJBQVFELFVBQVIsSUFBb0IsV0FBV0MsU0FBL0I7QUFDR0Y7QUFESCxLQURXO0FBQUE7QUFqR0EsQyIsImZpbGUiOiJleHRlcm5hbC9zbGF0ZS9kZWZhdWx0cy9ub2Rlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2VudGVyOiAoeyBjaGlsZHJlbiwgYXR0cmlidXRlcywgY2xhc3NOYW1lIH0pID0+IChcbiAgICA8Y2VudGVyIHsuLi5hdHRyaWJ1dGVzfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9jZW50ZXI+XG4gICksXG4gIHBhcmFncmFwaDogKHsgY2hpbGRyZW4sIGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSB9KSA9PiAoXG4gICAgPGRpdiB7Li4uYXR0cmlidXRlc30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApLFxuICBsaW5rOiAoeyBub2RlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IChcbiAgICA8YVxuICAgICAgey4uLmF0dHJpYnV0ZXN9XG4gICAgICBocmVmPXtub2RlLmRhdGEuZ2V0KCdocmVmJyl9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHRhcmdldD17bm9kZS5kYXRhLmdldCgndGFyZ2V0Jyl9XG4gICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9hPlxuICApLFxuICAnYmxvY2stcXVvdGUnOiAoeyBjaGlsZHJlbiwgYXR0cmlidXRlcywgY2xhc3NOYW1lIH0pID0+IChcbiAgICA8YmxvY2txdW90ZSB7Li4uYXR0cmlidXRlc30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYmxvY2txdW90ZT5cbiAgKSxcbiAgJ2J1bGxldGVkLWxpc3QnOiAoeyBjaGlsZHJlbiwgYXR0cmlidXRlcywgY2xhc3NOYW1lIH0pID0+IChcbiAgICA8dWwgey4uLmF0dHJpYnV0ZXN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3VsPlxuICApLFxuICAnbnVtYmVyZWQtbGlzdCc6ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzLCBjbGFzc05hbWUgfSkgPT4gKFxuICAgIDxvbCB7Li4uYXR0cmlidXRlc30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvb2w+XG4gICksXG4gICdoZWFkaW5nLW9uZSc6ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIG5vZGUgfSkgPT4gKFxuICAgIDxoMVxuICAgICAgey4uLmF0dHJpYnV0ZXN9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGRhdGEtaGVhZGluZz1cIjFcIlxuICAgICAgZGF0YS1pZD17bm9kZS5kYXRhLmdldCgnaWQnKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9oMT5cbiAgKSxcbiAgJ2hlYWRpbmctdHdvJzogKHsgY2hpbGRyZW4sIGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgbm9kZSB9KSA9PiAoXG4gICAgPGgyXG4gICAgICB7Li4uYXR0cmlidXRlc31cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgZGF0YS1oZWFkaW5nPVwiMlwiXG4gICAgICBkYXRhLWlkPXtub2RlLmRhdGEuZ2V0KCdpZCcpfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2gyPlxuICApLFxuICAnaGVhZGluZy10aHJlZSc6ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIG5vZGUgfSkgPT4gKFxuICAgIDxoM1xuICAgICAgey4uLmF0dHJpYnV0ZXN9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGRhdGEtaGVhZGluZz1cIjNcIlxuICAgICAgZGF0YS1pZD17bm9kZS5kYXRhLmdldCgnaWQnKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9oMz5cbiAgKSxcbiAgJ2hlYWRpbmctZm91cic6ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIG5vZGUgfSkgPT4gKFxuICAgIDxoNFxuICAgICAgey4uLmF0dHJpYnV0ZXN9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGRhdGEtaGVhZGluZz1cIjRcIlxuICAgICAgZGF0YS1pZD17bm9kZS5kYXRhLmdldCgnaWQnKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9oND5cbiAgKSxcbiAgJ2hlYWRpbmctZml2ZSc6ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIG5vZGUgfSkgPT4gKFxuICAgIDxoNVxuICAgICAgey4uLmF0dHJpYnV0ZXN9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGRhdGEtaGVhZGluZz1cIjVcIlxuICAgICAgZGF0YS1pZD17bm9kZS5kYXRhLmdldCgnaWQnKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9oNT5cbiAgKSxcbiAgJ2hlYWRpbmctc2l4JzogKHsgY2hpbGRyZW4sIGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgbm9kZSB9KSA9PiAoXG4gICAgPGg2XG4gICAgICB7Li4uYXR0cmlidXRlc31cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgZGF0YS1oZWFkaW5nPVwiNlwiXG4gICAgICBkYXRhLWlkPXtub2RlLmRhdGEuZ2V0KCdpZCcpfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2g2PlxuICApLFxuICAnbGlzdC1pdGVtJzogKHsgY2hpbGRyZW4sIGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSB9KSA9PiAoXG4gICAgPGxpIHsuLi5hdHRyaWJ1dGVzfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9saT5cbiAgKSxcbn07XG4iXX0=
