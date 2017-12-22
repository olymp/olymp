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
  type: 'Pages.Template.Header',
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9oZWFkZXIuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29tcG9uZW50IiwiQ29udGFpbmVyIiwid2l0aFJvdXRlciIsIkxpbmsiLCJjYXBpdGFsaXplIiwiQnJlYWRjcnVtYiIsInRoZW1lIiwiZm9udFNpemUiLCJPYmplY3QiLCJrZXlzIiwicCIsIkhlYWRlckJsb2NrIiwiYXR0cmlidXRlcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicGF0aG5hbWUiLCJwYXRoIiwic3BsaXQiLCJmaWx0ZXIiLCJzbHVnIiwibWFwIiwidHlwZSIsImlzVm9pZCIsImtpbmQiLCJsYWJlbCIsImNhdGVnb3J5IiwiY29tcG9uZW50IiwiZGVmYXVsdFRleHQiLCJzdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdZIiwic3BhY2UzIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxlQUFULEVBQTBCQyxTQUExQixRQUEyQyxZQUEzQztBQUNBLFNBQVNDLFVBQVQsRUFBcUJDLElBQXJCLFFBQWlDLGNBQWpDO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixtQkFBdkI7O0FBRUEsSUFBTUMsYUFBYUwsZ0JBQ2pCO0FBQUEsTUFBR00sS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZ0I7QUFDZEMsY0FBVTtBQURJLEdBQWhCO0FBQUEsQ0FEaUIsRUFJakIsS0FKaUIsRUFLakI7QUFBQSxTQUFLQyxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBTGlCLENBQW5COztZQWlCeUI7QUFBQyxNQUFEO0FBQUEsSUFBTSxJQUFHLEdBQVQ7QUFBQTtBQUFBLEM7O0FBVHpCLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxRQUFtRDtBQUFBLE1BQWhEQyxVQUFnRCxTQUFoREEsVUFBZ0Q7QUFBQSxNQUFwQ0MsU0FBb0MsU0FBcENBLFNBQW9DO0FBQUEsTUFBekJDLFFBQXlCLFNBQXpCQSxRQUF5QjtBQUFBLE1BQWZDLFFBQWUsU0FBZkEsUUFBZTs7QUFDckUsTUFBTUMsT0FBT0QsU0FBU0UsS0FBVCxDQUFlLEdBQWYsRUFBb0JDLE1BQXBCLENBQTJCO0FBQUEsV0FBS1IsQ0FBTDtBQUFBLEdBQTNCLENBQWI7QUFDQSxNQUFJUyxPQUFPLEVBQVg7O0FBRUEsU0FDRTtBQUFBO0FBQUEsZUFBSyxXQUFXTixTQUFoQixJQUErQkQsVUFBL0I7QUFDRTtBQUFDLGVBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLRTtBQUFMLE9BREY7QUFFRTtBQUFDLGtCQUFEO0FBQUEsVUFBWSxpQkFBaUIsS0FBN0I7QUFBQTtBQUFBO0FBQ2dELFdBRGhEO0FBRUdFLGFBQUtJLEdBQUwsQ0FBUyxVQUFDVixDQUFELEVBQU87QUFDZlMsaUJBQVVBLElBQVYsU0FBa0JULENBQWxCOztBQUVBLGlCQUNFO0FBQUE7QUFBQSxjQUFNLEtBQUtBLENBQVg7QUFBQTtBQUNJO0FBQUMsa0JBQUQ7QUFBQSxnQkFBTSxJQUFJUyxJQUFWO0FBQWlCZix5QkFBV00sQ0FBWDtBQUFqQjtBQURKLFdBREY7QUFLRCxTQVJBO0FBRkg7QUFGRjtBQURGLEdBREY7QUFtQkQsQ0F2QkQ7O0FBeUJBLGVBQWU7QUFDYlcsUUFBTSx1QkFETztBQUViQyxVQUFRLEtBRks7QUFHYkMsUUFBTSxPQUhPO0FBSWJDLFNBQU8sYUFKTTtBQUtiQyxZQUFVLE1BTEc7QUFNYkMsYUFBV3hCLFdBQVdTLFdBQVgsQ0FORTtBQU9iZ0IsZUFBYSxPQVBBO0FBUWJDLFVBQVE7QUFBQSxRQUFHdEIsS0FBSCxTQUFHQSxLQUFIO0FBQUEsV0FBZ0I7QUFDdEJ1Qix1QkFBaUIsTUFESztBQUV0QkMsaUJBQVcsR0FGVztBQUd0QkMsYUFBTyxNQUhlO0FBSXRCQyxvQkFBYyxFQUpRO0FBS3RCQyxnQkFBVTNCLE1BQU00QjtBQUxNLEtBQWhCO0FBQUE7QUFSSyxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50LCBDb250YWluZXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIsIExpbmsgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnbG9kYXNoL3VwcGVyRmlyc3QnO1xuXG5jb25zdCBCcmVhZGNydW1iID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGZvbnRTaXplOiAnc21hbGwnLFxuICB9KSxcbiAgJ2RpdicsXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCBIZWFkZXJCbG9jayA9ICh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIHBhdGhuYW1lIH0pID0+IHtcbiAgY29uc3QgcGF0aCA9IHBhdGhuYW1lLnNwbGl0KCcvJykuZmlsdGVyKHAgPT4gcCk7XG4gIGxldCBzbHVnID0gJyc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4uYXR0cmlidXRlc30+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8aDE+e2NoaWxkcmVufTwvaDE+XG4gICAgICAgIDxCcmVhZGNydW1iIGNvbnRlbnRFZGl0YWJsZT17ZmFsc2V9PlxuICAgICAgICAgIFNpZSBzaW5kIGhpZXI6IDxMaW5rIHRvPVwiL1wiPlN0YXJ0c2VpdGU8L0xpbms+eycgJ31cbiAgICAgICAgICB7cGF0aC5tYXAoKHApID0+IHtcbiAgICAgICAgICAgIHNsdWcgPSBgJHtzbHVnfS8ke3B9YDtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHNwYW4ga2V5PXtwfT5cbiAgICAgICAgICAgICAgICDCuyA8TGluayB0bz17c2x1Z30+e2NhcGl0YWxpemUocCl9PC9MaW5rPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0JyZWFkY3J1bWI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ1BhZ2VzLlRlbXBsYXRlLkhlYWRlcicsXG4gIGlzVm9pZDogZmFsc2UsXG4gIGtpbmQ6ICdibG9jaycsXG4gIGxhYmVsOiAnw5xiZXJzY2hyaWZ0JyxcbiAgY2F0ZWdvcnk6ICdLb3BmJyxcbiAgY29tcG9uZW50OiB3aXRoUm91dGVyKEhlYWRlckJsb2NrKSxcbiAgZGVmYXVsdFRleHQ6ICdUaXRlbCcsXG4gIHN0eWxlczogKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZGRkJyxcbiAgICBtaW5IZWlnaHQ6IDEwMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgcGFkZGluZ1k6IHRoZW1lLnNwYWNlMyxcbiAgfSksXG59O1xuIl19
