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
  type: 'Pages.Template.Header',
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvaGVhZGVyLmVzNiJdLCJuYW1lcyI6WyJCcmVhZGNydW1iIiwidGhlbWUiLCJmb250U2l6ZSIsIk9iamVjdCIsImtleXMiLCJwIiwiSGVhZGVyQmxvY2siLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwYXRobmFtZSIsInBhdGgiLCJzcGxpdCIsImZpbHRlciIsInNsdWciLCJtYXAiLCJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImxhYmVsIiwiY2F0ZWdvcnkiLCJjb21wb25lbnQiLCJkZWZhdWx0VGV4dCIsInN0eWxlcyIsImJhY2tncm91bmRDb2xvciIsIm1pbkhlaWdodCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ1kiLCJzcGFjZTMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxnQ0FDakI7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxjQUFVO0FBREksR0FBaEI7QUFBQSxDQURpQixFQUlqQixLQUppQixFQUtqQjtBQUFBLFNBQUtDLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0FMaUIsQ0FBbkI7O1lBaUJ5QjtBQUFBO0FBQUEsSUFBTSxJQUFHLEdBQVQ7QUFBQTtBQUFBLEM7O0FBVHpCLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxRQUFtRDtBQUFBLE1BQWhEQyxVQUFnRCxTQUFoREEsVUFBZ0Q7QUFBQSxNQUFwQ0MsU0FBb0MsU0FBcENBLFNBQW9DO0FBQUEsTUFBekJDLFFBQXlCLFNBQXpCQSxRQUF5QjtBQUFBLE1BQWZDLFFBQWUsU0FBZkEsUUFBZTs7QUFDckUsTUFBTUMsT0FBT0QsU0FBU0UsS0FBVCxDQUFlLEdBQWYsRUFBb0JDLE1BQXBCLENBQTJCO0FBQUEsV0FBS1IsQ0FBTDtBQUFBLEdBQTNCLENBQWI7QUFDQSxNQUFJUyxPQUFPLEVBQVg7O0FBRUEsU0FDRTtBQUFBO0FBQUEsZUFBSyxXQUFXTixTQUFoQixJQUErQkQsVUFBL0I7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBS0U7QUFBTCxPQURGO0FBRUU7QUFBQyxrQkFBRDtBQUFBLFVBQVksaUJBQWlCLEtBQTdCO0FBQUE7QUFBQTtBQUNnRCxXQURoRDtBQUVHRSxhQUFLSSxHQUFMLENBQVMsVUFBQ1YsQ0FBRCxFQUFPO0FBQ2ZTLGlCQUFVQSxJQUFWLFNBQWtCVCxDQUFsQjs7QUFFQSxpQkFDRTtBQUFBO0FBQUEsY0FBTSxLQUFLQSxDQUFYO0FBQUE7QUFDSTtBQUFBO0FBQUEsZ0JBQU0sSUFBSVMsSUFBVjtBQUFpQix3Q0FBV1QsQ0FBWDtBQUFqQjtBQURKLFdBREY7QUFLRCxTQVJBO0FBRkg7QUFGRjtBQURGLEdBREY7QUFtQkQsQ0F2QkQ7O2tCQXlCZTtBQUNiVyxRQUFNLHVCQURPO0FBRWJDLFVBQVEsS0FGSztBQUdiQyxRQUFNLE9BSE87QUFJYkMsU0FBTyxhQUpNO0FBS2JDLFlBQVUsTUFMRztBQU1iQyxhQUFXLDZCQUFXZixXQUFYLENBTkU7QUFPYmdCLGVBQWEsT0FQQTtBQVFiQyxVQUFRO0FBQUEsUUFBR3RCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFdBQWdCO0FBQ3RCdUIsdUJBQWlCLE1BREs7QUFFdEJDLGlCQUFXLEdBRlc7QUFHdEJDLGFBQU8sTUFIZTtBQUl0QkMsb0JBQWMsRUFKUTtBQUt0QkMsZ0JBQVUzQixNQUFNNEI7QUFMTSxLQUFoQjtBQUFBO0FBUkssQyIsImZpbGUiOiJjbXMvcGFnZXMvYmxvY2tzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQsIENvbnRhaW5lciB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciwgTGluayB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICdsb2Rhc2gvdXBwZXJGaXJzdCc7XG5cbmNvbnN0IEJyZWFkY3J1bWIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgZm9udFNpemU6ICdzbWFsbCcsXG4gIH0pLFxuICAnZGl2JyxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IEhlYWRlckJsb2NrID0gKHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBjaGlsZHJlbiwgcGF0aG5hbWUgfSkgPT4ge1xuICBjb25zdCBwYXRoID0gcGF0aG5hbWUuc3BsaXQoJy8nKS5maWx0ZXIocCA9PiBwKTtcbiAgbGV0IHNsdWcgPSAnJztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5hdHRyaWJ1dGVzfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxoMT57Y2hpbGRyZW59PC9oMT5cbiAgICAgICAgPEJyZWFkY3J1bWIgY29udGVudEVkaXRhYmxlPXtmYWxzZX0+XG4gICAgICAgICAgU2llIHNpbmQgaGllcjogPExpbmsgdG89XCIvXCI+U3RhcnRzZWl0ZTwvTGluaz57JyAnfVxuICAgICAgICAgIHtwYXRoLm1hcCgocCkgPT4ge1xuICAgICAgICAgICAgc2x1ZyA9IGAke3NsdWd9LyR7cH1gO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8c3BhbiBrZXk9e3B9PlxuICAgICAgICAgICAgICAgIMK7IDxMaW5rIHRvPXtzbHVnfT57Y2FwaXRhbGl6ZShwKX08L0xpbms+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvQnJlYWRjcnVtYj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlOiAnUGFnZXMuVGVtcGxhdGUuSGVhZGVyJyxcbiAgaXNWb2lkOiBmYWxzZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgbGFiZWw6ICfDnGJlcnNjaHJpZnQnLFxuICBjYXRlZ29yeTogJ0tvcGYnLFxuICBjb21wb25lbnQ6IHdpdGhSb3V0ZXIoSGVhZGVyQmxvY2spLFxuICBkZWZhdWx0VGV4dDogJ1RpdGVsJyxcbiAgc3R5bGVzOiAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNkZGQnLFxuICAgIG1pbkhlaWdodDogMTAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICBwYWRkaW5nWTogdGhlbWUuc3BhY2UzLFxuICB9KSxcbn07XG4iXX0=
