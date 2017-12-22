var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { createComponent, Container } from 'olymp-fela';
import { withRouter, Link } from 'olymp-router';
import capitalize from 'lodash/upperFirst';

var Breadcrumb = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    fontSize: 'small'
  };
}, 'div', function (p) {
  return Object.keys(p);
});

var _ref3 = React.createElement(
  Link,
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

  return React.createElement(
    'div',
    _extends({ className: className }, attributes),
    React.createElement(
      Container,
      null,
      React.createElement(
        'h1',
        null,
        children
      ),
      React.createElement(
        Breadcrumb,
        { contentEditable: false },
        'Sie sind hier: ',
        _ref3,
        ' ',
        path.map(function (p) {
          slug = slug + '/' + p;

          return React.createElement(
            'span',
            { key: p },
            '\xBB ',
            React.createElement(
              Link,
              { to: slug },
              capitalize(p)
            )
          );
        })
      )
    )
  );
};

export default {
  type: 'pageHeader',
  isVoid: false,
  kind: 'block',
  label: 'Überschrift',
  category: 'Kopf',
  component: withRouter(HeaderBlock),
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9oZWFkZXIyLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbXBvbmVudCIsIkNvbnRhaW5lciIsIndpdGhSb3V0ZXIiLCJMaW5rIiwiY2FwaXRhbGl6ZSIsIkJyZWFkY3J1bWIiLCJ0aGVtZSIsImZvbnRTaXplIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJIZWFkZXJCbG9jayIsImF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInBhdGhuYW1lIiwicGF0aCIsInNwbGl0IiwiZmlsdGVyIiwic2x1ZyIsIm1hcCIsInR5cGUiLCJpc1ZvaWQiLCJraW5kIiwibGFiZWwiLCJjYXRlZ29yeSIsImNvbXBvbmVudCIsImRlZmF1bHRUZXh0Iiwic3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nWSIsInNwYWNlMyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsZUFBVCxFQUEwQkMsU0FBMUIsUUFBMkMsWUFBM0M7QUFDQSxTQUFTQyxVQUFULEVBQXFCQyxJQUFyQixRQUFpQyxjQUFqQztBQUNBLE9BQU9DLFVBQVAsTUFBdUIsbUJBQXZCOztBQUVBLElBQU1DLGFBQWFMLGdCQUNqQjtBQUFBLE1BQUdNLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLGNBQVU7QUFESSxHQUFoQjtBQUFBLENBRGlCLEVBSWpCLEtBSmlCLEVBS2pCO0FBQUEsU0FBS0MsT0FBT0MsSUFBUCxDQUFZQyxDQUFaLENBQUw7QUFBQSxDQUxpQixDQUFuQjs7WUFpQnlCO0FBQUMsTUFBRDtBQUFBLElBQU0sSUFBRyxHQUFUO0FBQUE7QUFBQSxDOztBQVR6QixJQUFNQyxjQUFjLFNBQWRBLFdBQWMsUUFBbUQ7QUFBQSxNQUFoREMsVUFBZ0QsU0FBaERBLFVBQWdEO0FBQUEsTUFBcENDLFNBQW9DLFNBQXBDQSxTQUFvQztBQUFBLE1BQXpCQyxRQUF5QixTQUF6QkEsUUFBeUI7QUFBQSxNQUFmQyxRQUFlLFNBQWZBLFFBQWU7O0FBQ3JFLE1BQU1DLE9BQU9ELFNBQVNFLEtBQVQsQ0FBZSxHQUFmLEVBQW9CQyxNQUFwQixDQUEyQjtBQUFBLFdBQUtSLENBQUw7QUFBQSxHQUEzQixDQUFiO0FBQ0EsTUFBSVMsT0FBTyxFQUFYOztBQUVBLFNBQ0U7QUFBQTtBQUFBLGVBQUssV0FBV04sU0FBaEIsSUFBK0JELFVBQS9CO0FBQ0U7QUFBQyxlQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBS0U7QUFBTCxPQURGO0FBRUU7QUFBQyxrQkFBRDtBQUFBLFVBQVksaUJBQWlCLEtBQTdCO0FBQUE7QUFBQTtBQUNnRCxXQURoRDtBQUVHRSxhQUFLSSxHQUFMLENBQVMsYUFBSztBQUNiRCxpQkFBVUEsSUFBVixTQUFrQlQsQ0FBbEI7O0FBRUEsaUJBQ0U7QUFBQTtBQUFBLGNBQU0sS0FBS0EsQ0FBWDtBQUFBO0FBQ0k7QUFBQyxrQkFBRDtBQUFBLGdCQUFNLElBQUlTLElBQVY7QUFBaUJmLHlCQUFXTSxDQUFYO0FBQWpCO0FBREosV0FERjtBQUtELFNBUkE7QUFGSDtBQUZGO0FBREYsR0FERjtBQW1CRCxDQXZCRDs7QUF5QkEsZUFBZTtBQUNiVyxRQUFNLFlBRE87QUFFYkMsVUFBUSxLQUZLO0FBR2JDLFFBQU0sT0FITztBQUliQyxTQUFPLGFBSk07QUFLYkMsWUFBVSxNQUxHO0FBTWJDLGFBQVd4QixXQUFXUyxXQUFYLENBTkU7QUFPYmdCLGVBQWEsT0FQQTtBQVFiQyxVQUFRO0FBQUEsUUFBR3RCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFdBQWdCO0FBQ3RCdUIsdUJBQWlCLE1BREs7QUFFdEJDLGlCQUFXLEdBRlc7QUFHdEJDLGFBQU8sTUFIZTtBQUl0QkMsb0JBQWMsRUFKUTtBQUt0QkMsZ0JBQVUzQixNQUFNNEI7QUFMTSxLQUFoQjtBQUFBO0FBUkssQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9wYWdlcy9ibG9ja3MvaGVhZGVyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQsIENvbnRhaW5lciB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciwgTGluayB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICdsb2Rhc2gvdXBwZXJGaXJzdCc7XG5cbmNvbnN0IEJyZWFkY3J1bWIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgZm9udFNpemU6ICdzbWFsbCcsXG4gIH0pLFxuICAnZGl2JyxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IEhlYWRlckJsb2NrID0gKHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBjaGlsZHJlbiwgcGF0aG5hbWUgfSkgPT4ge1xuICBjb25zdCBwYXRoID0gcGF0aG5hbWUuc3BsaXQoJy8nKS5maWx0ZXIocCA9PiBwKTtcbiAgbGV0IHNsdWcgPSAnJztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5hdHRyaWJ1dGVzfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxoMT57Y2hpbGRyZW59PC9oMT5cbiAgICAgICAgPEJyZWFkY3J1bWIgY29udGVudEVkaXRhYmxlPXtmYWxzZX0+XG4gICAgICAgICAgU2llIHNpbmQgaGllcjogPExpbmsgdG89XCIvXCI+U3RhcnRzZWl0ZTwvTGluaz57JyAnfVxuICAgICAgICAgIHtwYXRoLm1hcChwID0+IHtcbiAgICAgICAgICAgIHNsdWcgPSBgJHtzbHVnfS8ke3B9YDtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHNwYW4ga2V5PXtwfT5cbiAgICAgICAgICAgICAgICDCuyA8TGluayB0bz17c2x1Z30+e2NhcGl0YWxpemUocCl9PC9MaW5rPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0JyZWFkY3J1bWI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ3BhZ2VIZWFkZXInLFxuICBpc1ZvaWQ6IGZhbHNlLFxuICBraW5kOiAnYmxvY2snLFxuICBsYWJlbDogJ8OcYmVyc2NocmlmdCcsXG4gIGNhdGVnb3J5OiAnS29wZicsXG4gIGNvbXBvbmVudDogd2l0aFJvdXRlcihIZWFkZXJCbG9jayksXG4gIGRlZmF1bHRUZXh0OiAnVGl0ZWwnLFxuICBzdHlsZXM6ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2RkZCcsXG4gICAgbWluSGVpZ2h0OiAxMDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIHBhZGRpbmdZOiB0aGVtZS5zcGFjZTMsXG4gIH0pLFxufTtcbiJdfQ==
