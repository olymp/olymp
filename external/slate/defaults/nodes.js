var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

export default {
  center: function center(_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        className = _ref.className;
    return React.createElement(
      'center',
      _extends({}, attributes, { className: className }),
      children
    );
  },
  paragraph: function paragraph(_ref2) {
    var children = _ref2.children,
        attributes = _ref2.attributes,
        className = _ref2.className;
    return React.createElement(
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
    return React.createElement(
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
    return React.createElement(
      'blockquote',
      _extends({}, attributes, { className: className }),
      children
    );
  },
  'bulleted-list': function bulletedList(_ref5) {
    var children = _ref5.children,
        attributes = _ref5.attributes,
        className = _ref5.className;
    return React.createElement(
      'ul',
      _extends({}, attributes, { className: className }),
      children
    );
  },
  'numbered-list': function numberedList(_ref6) {
    var children = _ref6.children,
        attributes = _ref6.attributes,
        className = _ref6.className;
    return React.createElement(
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
    return React.createElement(
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
    return React.createElement(
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
    return React.createElement(
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
    return React.createElement(
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
    return React.createElement(
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
    return React.createElement(
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
    return React.createElement(
      'li',
      _extends({}, attributes, { className: className }),
      children
    );
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL2RlZmF1bHRzL25vZGVzLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNlbnRlciIsImNoaWxkcmVuIiwiYXR0cmlidXRlcyIsImNsYXNzTmFtZSIsInBhcmFncmFwaCIsImxpbmsiLCJub2RlIiwiZGF0YSIsImdldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOztBQUVBLGVBQWU7QUFDYkMsVUFBUTtBQUFBLFFBQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFFBQWFDLFVBQWIsUUFBYUEsVUFBYjtBQUFBLFFBQXlCQyxTQUF6QixRQUF5QkEsU0FBekI7QUFBQSxXQUNOO0FBQUE7QUFBQSxtQkFBWUQsVUFBWixJQUF3QixXQUFXQyxTQUFuQztBQUNHRjtBQURILEtBRE07QUFBQSxHQURLO0FBTWJHLGFBQVc7QUFBQSxRQUFHSCxRQUFILFNBQUdBLFFBQUg7QUFBQSxRQUFhQyxVQUFiLFNBQWFBLFVBQWI7QUFBQSxRQUF5QkMsU0FBekIsU0FBeUJBLFNBQXpCO0FBQUEsV0FDVDtBQUFBO0FBQUEsbUJBQVNELFVBQVQsSUFBcUIsV0FBV0MsU0FBaEM7QUFDR0Y7QUFESCxLQURTO0FBQUEsR0FORTtBQVdiSSxRQUFNO0FBQUEsUUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsUUFBU0osVUFBVCxTQUFTQSxVQUFUO0FBQUEsUUFBcUJELFFBQXJCLFNBQXFCQSxRQUFyQjtBQUFBLFFBQStCRSxTQUEvQixTQUErQkEsU0FBL0I7QUFBQSxXQUNKO0FBQUE7QUFBQSxtQkFDTUQsVUFETjtBQUVFLGNBQU1JLEtBQUtDLElBQUwsQ0FBVUMsR0FBVixDQUFjLE1BQWQsQ0FGUjtBQUdFLG1CQUFXTCxTQUhiO0FBSUUsZ0JBQVFHLEtBQUtDLElBQUwsQ0FBVUMsR0FBVixDQUFjLFFBQWQsQ0FKVjtBQUtFLGFBQUk7QUFMTjtBQU9HUDtBQVBILEtBREk7QUFBQSxHQVhPO0FBc0JiLGlCQUFlO0FBQUEsUUFBR0EsUUFB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LEdBQVYsQ0FBYyxJQUFkO0FBSlg7QUFNR1A7QUFOSCxLQURjO0FBQUEsR0E3RUg7QUF1RmIsaUJBQWU7QUFBQSxRQUFHQSxRQUFILFVBQUdBLFFBQUg7QUFBQSxRQUFhQyxVQUFiLFVBQWFBLFVBQWI7QUFBQSxRQUF5QkMsU0FBekIsVUFBeUJBLFNBQXpCO0FBQUEsUUFBb0NHLElBQXBDLFVBQW9DQSxJQUFwQztBQUFBLFdBQ2I7QUFBQTtBQUFBLG1CQUNNSixVQUROO0FBRUUsbUJBQVdDLFNBRmI7QUFHRSx3QkFBYSxHQUhmO0FBSUUsbUJBQVNHLEtBQUtDLElBQUwsQ0FBVUMsR0FBVixDQUFjLElBQWQ7QUFKWDtBQU1HUDtBQU5ILEtBRGE7QUFBQSxHQXZGRjtBQWlHYixlQUFhO0FBQUEsUUFBR0EsUUFBSCxVQUFHQSxRQUFIO0FBQUEsUUFBYUMsVUFBYixVQUFhQSxVQUFiO0FBQUEsUUFBeUJDLFNBQXpCLFVBQXlCQSxTQUF6QjtBQUFBLFdBQ1g7QUFBQTtBQUFBLG1CQUFRRCxVQUFSLElBQW9CLFdBQVdDLFNBQS9CO0FBQ0dGO0FBREgsS0FEVztBQUFBO0FBakdBLENBQWYiLCJmaWxlIjoicGFja2FnZXMvc2xhdGUvZGVmYXVsdHMvbm9kZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNlbnRlcjogKHsgY2hpbGRyZW4sIGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSB9KSA9PiAoXG4gICAgPGNlbnRlciB7Li4uYXR0cmlidXRlc30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvY2VudGVyPlxuICApLFxuICBwYXJhZ3JhcGg6ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzLCBjbGFzc05hbWUgfSkgPT4gKFxuICAgIDxkaXYgey4uLmF0dHJpYnV0ZXN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKSxcbiAgbGluazogKHsgbm9kZSwgYXR0cmlidXRlcywgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiAoXG4gICAgPGFcbiAgICAgIHsuLi5hdHRyaWJ1dGVzfVxuICAgICAgaHJlZj17bm9kZS5kYXRhLmdldCgnaHJlZicpfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB0YXJnZXQ9e25vZGUuZGF0YS5nZXQoJ3RhcmdldCcpfVxuICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYT5cbiAgKSxcbiAgJ2Jsb2NrLXF1b3RlJzogKHsgY2hpbGRyZW4sIGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSB9KSA9PiAoXG4gICAgPGJsb2NrcXVvdGUgey4uLmF0dHJpYnV0ZXN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Jsb2NrcXVvdGU+XG4gICksXG4gICdidWxsZXRlZC1saXN0JzogKHsgY2hpbGRyZW4sIGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSB9KSA9PiAoXG4gICAgPHVsIHsuLi5hdHRyaWJ1dGVzfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC91bD5cbiAgKSxcbiAgJ251bWJlcmVkLWxpc3QnOiAoeyBjaGlsZHJlbiwgYXR0cmlidXRlcywgY2xhc3NOYW1lIH0pID0+IChcbiAgICA8b2wgey4uLmF0dHJpYnV0ZXN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L29sPlxuICApLFxuICAnaGVhZGluZy1vbmUnOiAoeyBjaGlsZHJlbiwgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBub2RlIH0pID0+IChcbiAgICA8aDFcbiAgICAgIHsuLi5hdHRyaWJ1dGVzfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBkYXRhLWhlYWRpbmc9XCIxXCJcbiAgICAgIGRhdGEtaWQ9e25vZGUuZGF0YS5nZXQoJ2lkJyl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvaDE+XG4gICksXG4gICdoZWFkaW5nLXR3byc6ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIG5vZGUgfSkgPT4gKFxuICAgIDxoMlxuICAgICAgey4uLmF0dHJpYnV0ZXN9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGRhdGEtaGVhZGluZz1cIjJcIlxuICAgICAgZGF0YS1pZD17bm9kZS5kYXRhLmdldCgnaWQnKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9oMj5cbiAgKSxcbiAgJ2hlYWRpbmctdGhyZWUnOiAoeyBjaGlsZHJlbiwgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBub2RlIH0pID0+IChcbiAgICA8aDNcbiAgICAgIHsuLi5hdHRyaWJ1dGVzfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBkYXRhLWhlYWRpbmc9XCIzXCJcbiAgICAgIGRhdGEtaWQ9e25vZGUuZGF0YS5nZXQoJ2lkJyl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvaDM+XG4gICksXG4gICdoZWFkaW5nLWZvdXInOiAoeyBjaGlsZHJlbiwgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBub2RlIH0pID0+IChcbiAgICA8aDRcbiAgICAgIHsuLi5hdHRyaWJ1dGVzfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBkYXRhLWhlYWRpbmc9XCI0XCJcbiAgICAgIGRhdGEtaWQ9e25vZGUuZGF0YS5nZXQoJ2lkJyl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvaDQ+XG4gICksXG4gICdoZWFkaW5nLWZpdmUnOiAoeyBjaGlsZHJlbiwgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBub2RlIH0pID0+IChcbiAgICA8aDVcbiAgICAgIHsuLi5hdHRyaWJ1dGVzfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBkYXRhLWhlYWRpbmc9XCI1XCJcbiAgICAgIGRhdGEtaWQ9e25vZGUuZGF0YS5nZXQoJ2lkJyl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvaDU+XG4gICksXG4gICdoZWFkaW5nLXNpeCc6ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIG5vZGUgfSkgPT4gKFxuICAgIDxoNlxuICAgICAgey4uLmF0dHJpYnV0ZXN9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGRhdGEtaGVhZGluZz1cIjZcIlxuICAgICAgZGF0YS1pZD17bm9kZS5kYXRhLmdldCgnaWQnKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9oNj5cbiAgKSxcbiAgJ2xpc3QtaXRlbSc6ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzLCBjbGFzc05hbWUgfSkgPT4gKFxuICAgIDxsaSB7Li4uYXR0cmlidXRlc30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbGk+XG4gICksXG59O1xuIl19
