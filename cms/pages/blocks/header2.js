'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _olympRouter = require('olymp-router');

var _upperFirst = require('lodash/upperFirst');

var _upperFirst2 = _interopRequireDefault(_upperFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumb = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    fontSize: 'small'
  };
}, 'div', function (p) {
  return Object.keys(p);
});

var _ref3 = _react2.default.createElement(
  _olympRouter.Link,
  { to: '/' },
  'Startseite'
);

var HeaderBlock = function HeaderBlock(_ref2) {
  var attributes = _ref2.attributes,
      className = _ref2.className,
      children = _ref2.children,
      pathname = _ref2.pathname;

  var path = pathname.split('/').filter(function (p) {
    return p;
  });
  var slug = '';

  return _react2.default.createElement(
    'div',
    _extends({ className: className }, attributes),
    _react2.default.createElement(
      _olympFela.Container,
      null,
      _react2.default.createElement(
        'h1',
        null,
        children
      ),
      _react2.default.createElement(
        Breadcrumb,
        { contentEditable: false },
        'Sie sind hier: ',
        _ref3,
        ' ',
        path.map(function (p) {
          slug = slug + '/' + p;

          return _react2.default.createElement(
            'span',
            { key: p },
            '\xBB ',
            _react2.default.createElement(
              _olympRouter.Link,
              { to: slug },
              (0, _upperFirst2.default)(p)
            )
          );
        })
      )
    )
  );
};

exports.default = {
  type: 'pageHeader',
  isVoid: false,
  kind: 'block',
  label: 'Überschrift',
  category: 'Kopf',
  component: (0, _olympRouter.withRouter)(HeaderBlock),
  defaultText: 'Titel',
  styles: function styles(_ref4) {
    var theme = _ref4.theme;
    return {
      backgroundColor: '#ddd',
      minHeight: 100,
      width: '100%',
      marginBottom: 20,
      paddingY: theme.space3
    };
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvaGVhZGVyMi5lczYiXSwibmFtZXMiOlsiQnJlYWRjcnVtYiIsInRoZW1lIiwiZm9udFNpemUiLCJPYmplY3QiLCJrZXlzIiwicCIsIkhlYWRlckJsb2NrIiwiYXR0cmlidXRlcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicGF0aG5hbWUiLCJwYXRoIiwic3BsaXQiLCJmaWx0ZXIiLCJzbHVnIiwibWFwIiwidHlwZSIsImlzVm9pZCIsImtpbmQiLCJsYWJlbCIsImNhdGVnb3J5IiwiY29tcG9uZW50IiwiZGVmYXVsdFRleHQiLCJzdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdZIiwic3BhY2UzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsZ0NBQ2pCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZ0I7QUFDZEMsY0FBVTtBQURJLEdBQWhCO0FBQUEsQ0FEaUIsRUFJakIsS0FKaUIsRUFLakI7QUFBQSxTQUFLQyxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBTGlCLENBQW5COztZQWlCeUI7QUFBQTtBQUFBLElBQU0sSUFBRyxHQUFUO0FBQUE7QUFBQSxDOztBQVR6QixJQUFNQyxjQUFjLFNBQWRBLFdBQWMsUUFBbUQ7QUFBQSxNQUFoREMsVUFBZ0QsU0FBaERBLFVBQWdEO0FBQUEsTUFBcENDLFNBQW9DLFNBQXBDQSxTQUFvQztBQUFBLE1BQXpCQyxRQUF5QixTQUF6QkEsUUFBeUI7QUFBQSxNQUFmQyxRQUFlLFNBQWZBLFFBQWU7O0FBQ3JFLE1BQU1DLE9BQU9ELFNBQVNFLEtBQVQsQ0FBZSxHQUFmLEVBQW9CQyxNQUFwQixDQUEyQjtBQUFBLFdBQUtSLENBQUw7QUFBQSxHQUEzQixDQUFiO0FBQ0EsTUFBSVMsT0FBTyxFQUFYOztBQUVBLFNBQ0U7QUFBQTtBQUFBLGVBQUssV0FBV04sU0FBaEIsSUFBK0JELFVBQS9CO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUtFO0FBQUwsT0FERjtBQUVFO0FBQUMsa0JBQUQ7QUFBQSxVQUFZLGlCQUFpQixLQUE3QjtBQUFBO0FBQUE7QUFDZ0QsV0FEaEQ7QUFFR0UsYUFBS0ksR0FBTCxDQUFTLGFBQUs7QUFDYkQsaUJBQVVBLElBQVYsU0FBa0JULENBQWxCOztBQUVBLGlCQUNFO0FBQUE7QUFBQSxjQUFNLEtBQUtBLENBQVg7QUFBQTtBQUNJO0FBQUE7QUFBQSxnQkFBTSxJQUFJUyxJQUFWO0FBQWlCLHdDQUFXVCxDQUFYO0FBQWpCO0FBREosV0FERjtBQUtELFNBUkE7QUFGSDtBQUZGO0FBREYsR0FERjtBQW1CRCxDQXZCRDs7a0JBeUJlO0FBQ2JXLFFBQU0sWUFETztBQUViQyxVQUFRLEtBRks7QUFHYkMsUUFBTSxPQUhPO0FBSWJDLFNBQU8sYUFKTTtBQUtiQyxZQUFVLE1BTEc7QUFNYkMsYUFBVyw2QkFBV2YsV0FBWCxDQU5FO0FBT2JnQixlQUFhLE9BUEE7QUFRYkMsVUFBUTtBQUFBLFFBQUd0QixLQUFILFNBQUdBLEtBQUg7QUFBQSxXQUFnQjtBQUN0QnVCLHVCQUFpQixNQURLO0FBRXRCQyxpQkFBVyxHQUZXO0FBR3RCQyxhQUFPLE1BSGU7QUFJdEJDLG9CQUFjLEVBSlE7QUFLdEJDLGdCQUFVM0IsTUFBTTRCO0FBTE0sS0FBaEI7QUFBQTtBQVJLLEMiLCJmaWxlIjoiY21zL3BhZ2VzL2Jsb2Nrcy9oZWFkZXIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCwgQ29udGFpbmVyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyB3aXRoUm91dGVyLCBMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJ2xvZGFzaC91cHBlckZpcnN0JztcblxuY29uc3QgQnJlYWRjcnVtYiA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBmb250U2l6ZTogJ3NtYWxsJyxcbiAgfSksXG4gICdkaXYnLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgSGVhZGVyQmxvY2sgPSAoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIGNoaWxkcmVuLCBwYXRobmFtZSB9KSA9PiB7XG4gIGNvbnN0IHBhdGggPSBwYXRobmFtZS5zcGxpdCgnLycpLmZpbHRlcihwID0+IHApO1xuICBsZXQgc2x1ZyA9ICcnO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLmF0dHJpYnV0ZXN9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGgxPntjaGlsZHJlbn08L2gxPlxuICAgICAgICA8QnJlYWRjcnVtYiBjb250ZW50RWRpdGFibGU9e2ZhbHNlfT5cbiAgICAgICAgICBTaWUgc2luZCBoaWVyOiA8TGluayB0bz1cIi9cIj5TdGFydHNlaXRlPC9MaW5rPnsnICd9XG4gICAgICAgICAge3BhdGgubWFwKHAgPT4ge1xuICAgICAgICAgICAgc2x1ZyA9IGAke3NsdWd9LyR7cH1gO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8c3BhbiBrZXk9e3B9PlxuICAgICAgICAgICAgICAgIMK7IDxMaW5rIHRvPXtzbHVnfT57Y2FwaXRhbGl6ZShwKX08L0xpbms+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvQnJlYWRjcnVtYj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlOiAncGFnZUhlYWRlcicsXG4gIGlzVm9pZDogZmFsc2UsXG4gIGtpbmQ6ICdibG9jaycsXG4gIGxhYmVsOiAnw5xiZXJzY2hyaWZ0JyxcbiAgY2F0ZWdvcnk6ICdLb3BmJyxcbiAgY29tcG9uZW50OiB3aXRoUm91dGVyKEhlYWRlckJsb2NrKSxcbiAgZGVmYXVsdFRleHQ6ICdUaXRlbCcsXG4gIHN0eWxlczogKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZGRkJyxcbiAgICBtaW5IZWlnaHQ6IDEwMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgcGFkZGluZ1k6IHRoZW1lLnNwYWNlMyxcbiAgfSksXG59O1xuIl19
