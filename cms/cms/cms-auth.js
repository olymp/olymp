var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Switch, Match, createUpdateQuery, createReplaceQuery } from 'olymp-router';
import withUA from 'olymp-utils/user-agent';
import EditableRoute from 'olymp-pages/editable';
import withLocale from 'olymp-locale/de';
import PageRoute from 'olymp-pages/route';
import { Route as CloudinaryRoute, Lightbox } from 'olymp-cloudinary';
import CollectionRoute from 'olymp-collection/view';
import { withCollections } from 'olymp-collection';
import { createComponent, getAntStyle, TopLoader, Modal } from 'olymp-fela';
import { Hotjar } from 'olymp-ui';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Analytics from 'olymp-google/analytics';
import Navigation from './navigation';
import PrefetchRoutes from './prefetch-routes';
import * as LANG from './lang/de';

var Container = createComponent(function (_ref) {
  var theme = _ref.theme;
  return _extends({}, getAntStyle({ theme: theme }), {
    backgroundColor: '#Cf5f5f5',
    height: '100%',
    '> div': {
      position: 'relative',
      height: '100%'
    }
  });
}, 'div', []);
var Footer = createComponent(function (_ref2) {
  var theme = _ref2.theme;
  return {
    padding: theme.space2,
    backgroundColor: theme.dark,
    color: theme.light,
    textAlign: 'center'
  };
}, 'div', function (p) {
  return Object.keys(p);
});

var Load = connect(function (_ref3) {
  var app = _ref3.app;
  return {
    loading: app.loading
  };
})(TopLoader);

var enhance = compose(withLocale(LANG), withUA, withCollections, connect(function (_ref4) {
  var location = _ref4.location;
  return {
    query: location.query,
    pathname: location.pathname
  };
}, function (dispatch) {
  return {
    updateQuery: createUpdateQuery(dispatch),
    replaceQuery: createReplaceQuery(dispatch)
  };
}));

var _ref6 = React.createElement(Load, null);

var _ref7 = React.createElement(Lightbox, null);

var _ref8 = React.createElement(
  Footer,
  null,
  React.createElement(
    'p',
    null,
    'Wir empfehlen f\xFCr die Verwendung von Olymp (und dar\xFCber hinaus) die Verwendung des Browsers',
    ' ',
    React.createElement(
      'a',
      { href: 'https://www.google.de/chrome', rel: 'noopener noreferrer' },
      'Chrome'
    ),
    '.'
  )
);

var component = enhance(function (props) {
  var query = props.query,
      collectionList = props.collectionList,
      collectionTree = props.collectionTree,
      ua = props.ua,
      flatNavigation = props.flatNavigation,
      updateQuery = props.updateQuery,
      pathname = props.pathname;

  var collection = collectionList.filter(function (_ref5) {
    var name = _ref5.name;
    return query['@' + name.toLowerCase()] !== undefined;
  })[0];
  var collectionName = collection && collection.name;
  var collectionId = collectionName && query && query['@' + collectionName.toLowerCase()];

  return React.createElement(
    Container,
    null,
    React.createElement(PrefetchRoutes, { flatNavigation: flatNavigation }),
    _ref6,
    _ref7,
    React.createElement(Hotjar, { id: process.env.HOTJAR }),
    React.createElement(
      Modal,
      {
        open: !!collection && query.modal === null,
        onClose: function onClose() {
          var _updateQuery;

          return updateQuery((_updateQuery = {}, _defineProperty(_updateQuery, '@' + collectionName.toLowerCase(), undefined), _defineProperty(_updateQuery, 'modal', undefined), _updateQuery));
        }
      },
      React.createElement(CollectionRoute, _extends({}, props, {
        id: collectionId,
        typeName: collectionName
      }))
    ),
    React.createElement(
      Navigation,
      {
        collectionList: collectionList,
        collectionTree: collectionTree
      },
      React.createElement(
        Switch,
        null,
        React.createElement(Match, {
          match: !!collection && query.modal !== null,
          render: function render() {
            return React.createElement(CollectionRoute, _extends({}, props, {
              id: collectionId,
              typeName: collectionName
            }));
          }
        }),
        React.createElement(Match, {
          match: query['@media'] !== undefined,
          render: function render() {
            return React.createElement(CloudinaryRoute, props);
          }
        }),
        React.createElement(Match, {
          match: query['@analytics'] !== undefined,
          render: function render() {
            return React.createElement(Analytics, props);
          }
        }),
        React.createElement(Match, {
          match: query['@page'] !== undefined,
          render: function render(rest) {
            return React.createElement(EditableRoute, _extends({}, rest, props));
          }
        }),
        React.createElement(Match, { render: function render(rest) {
            return React.createElement(PageRoute, _extends({}, rest, props));
          } })
      )
    ),
    ua.getBrowser().name === 'IE' && _ref8
  );
});

component.displayName = 'CmsAuth';
export default component;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Ntcy9jbXMtYXV0aC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJTd2l0Y2giLCJNYXRjaCIsImNyZWF0ZVVwZGF0ZVF1ZXJ5IiwiY3JlYXRlUmVwbGFjZVF1ZXJ5Iiwid2l0aFVBIiwiRWRpdGFibGVSb3V0ZSIsIndpdGhMb2NhbGUiLCJQYWdlUm91dGUiLCJSb3V0ZSIsIkNsb3VkaW5hcnlSb3V0ZSIsIkxpZ2h0Ym94IiwiQ29sbGVjdGlvblJvdXRlIiwid2l0aENvbGxlY3Rpb25zIiwiY3JlYXRlQ29tcG9uZW50IiwiZ2V0QW50U3R5bGUiLCJUb3BMb2FkZXIiLCJNb2RhbCIsIkhvdGphciIsImNvbm5lY3QiLCJjb21wb3NlIiwiQW5hbHl0aWNzIiwiTmF2aWdhdGlvbiIsIlByZWZldGNoUm91dGVzIiwiTEFORyIsIkNvbnRhaW5lciIsInRoZW1lIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJGb290ZXIiLCJwYWRkaW5nIiwic3BhY2UyIiwiZGFyayIsImNvbG9yIiwibGlnaHQiLCJ0ZXh0QWxpZ24iLCJPYmplY3QiLCJrZXlzIiwicCIsIkxvYWQiLCJhcHAiLCJsb2FkaW5nIiwiZW5oYW5jZSIsImxvY2F0aW9uIiwicXVlcnkiLCJwYXRobmFtZSIsInVwZGF0ZVF1ZXJ5IiwiZGlzcGF0Y2giLCJyZXBsYWNlUXVlcnkiLCJjb21wb25lbnQiLCJwcm9wcyIsImNvbGxlY3Rpb25MaXN0IiwiY29sbGVjdGlvblRyZWUiLCJ1YSIsImZsYXROYXZpZ2F0aW9uIiwiY29sbGVjdGlvbiIsImZpbHRlciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsImNvbGxlY3Rpb25OYW1lIiwiY29sbGVjdGlvbklkIiwicHJvY2VzcyIsImVudiIsIkhPVEpBUiIsIm1vZGFsIiwicmVzdCIsImdldEJyb3dzZXIiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7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UTtBQUFBLG1CQUNOLG9CQUFDLGVBQUQsZUFDTWYsS0FETjtBQUVFLGtCQUFJVyxZQUZOO0FBR0Usd0JBQVVEO0FBSFosZUFETTtBQUFBO0FBRlYsVUFERjtBQVdFLDRCQUFDLEtBQUQ7QUFDRSxpQkFBT2hCLE1BQU0sUUFBTixNQUFvQmUsU0FEN0I7QUFFRSxrQkFBUTtBQUFBLG1CQUFNLG9CQUFDLGVBQUQsRUFBcUJULEtBQXJCLENBQU47QUFBQTtBQUZWLFVBWEY7QUFlRSw0QkFBQyxLQUFEO0FBQ0UsaUJBQU9OLE1BQU0sWUFBTixNQUF3QmUsU0FEakM7QUFFRSxrQkFBUTtBQUFBLG1CQUFNLG9CQUFDLFNBQUQsRUFBZVQsS0FBZixDQUFOO0FBQUE7QUFGVixVQWZGO0FBbUJFLDRCQUFDLEtBQUQ7QUFDRSxpQkFBT04sTUFBTSxPQUFOLE1BQW1CZSxTQUQ1QjtBQUVFLGtCQUFRO0FBQUEsbUJBQVEsb0JBQUMsYUFBRCxlQUFtQk8sSUFBbkIsRUFBNkJoQixLQUE3QixFQUFSO0FBQUE7QUFGVixVQW5CRjtBQXVCRSw0QkFBQyxLQUFELElBQU8sUUFBUTtBQUFBLG1CQUFRLG9CQUFDLFNBQUQsZUFBZWdCLElBQWYsRUFBeUJoQixLQUF6QixFQUFSO0FBQUEsV0FBZjtBQXZCRjtBQUpGLEtBcEJGO0FBa0RHRyxPQUFHYyxVQUFILEdBQWdCVixJQUFoQixLQUF5QixJQUF6QjtBQWxESCxHQURGO0FBZ0VELENBakZpQixDQUFsQjs7QUFtRkFSLFVBQVVtQixXQUFWLEdBQXdCLFNBQXhCO0FBQ0EsZUFBZW5CLFNBQWYiLCJmaWxlIjoicGFja2FnZXMvY21zL2Ntcy1hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFN3aXRjaCxcbiAgTWF0Y2gsXG4gIGNyZWF0ZVVwZGF0ZVF1ZXJ5LFxuICBjcmVhdGVSZXBsYWNlUXVlcnksXG59IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgd2l0aFVBIGZyb20gJ29seW1wLXV0aWxzL3VzZXItYWdlbnQnO1xuaW1wb3J0IEVkaXRhYmxlUm91dGUgZnJvbSAnb2x5bXAtcGFnZXMvZWRpdGFibGUnO1xuaW1wb3J0IHdpdGhMb2NhbGUgZnJvbSAnb2x5bXAtbG9jYWxlL2RlJztcbmltcG9ydCBQYWdlUm91dGUgZnJvbSAnb2x5bXAtcGFnZXMvcm91dGUnO1xuaW1wb3J0IHsgUm91dGUgYXMgQ2xvdWRpbmFyeVJvdXRlLCBMaWdodGJveCB9IGZyb20gJ29seW1wLWNsb3VkaW5hcnknO1xuaW1wb3J0IENvbGxlY3Rpb25Sb3V0ZSBmcm9tICdvbHltcC1jb2xsZWN0aW9uL3ZpZXcnO1xuaW1wb3J0IHsgd2l0aENvbGxlY3Rpb25zIH0gZnJvbSAnb2x5bXAtY29sbGVjdGlvbic7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQsIGdldEFudFN0eWxlLCBUb3BMb2FkZXIsIE1vZGFsIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBIb3RqYXIgfSBmcm9tICdvbHltcC11aSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgQW5hbHl0aWNzIGZyb20gJ29seW1wLWdvb2dsZS9hbmFseXRpY3MnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9uYXZpZ2F0aW9uJztcbmltcG9ydCBQcmVmZXRjaFJvdXRlcyBmcm9tICcuL3ByZWZldGNoLXJvdXRlcyc7XG5pbXBvcnQgKiBhcyBMQU5HIGZyb20gJy4vbGFuZy9kZSc7XG5cbmNvbnN0IENvbnRhaW5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICAuLi5nZXRBbnRTdHlsZSh7IHRoZW1lIH0pLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNDZjVmNWY1JyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAnPiBkaXYnOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgW10sXG4pO1xuY29uc3QgRm9vdGVyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNlMixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmRhcmssXG4gICAgY29sb3I6IHRoZW1lLmxpZ2h0LFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIH0pLFxuICAnZGl2JyxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IExvYWQgPSBjb25uZWN0KCh7IGFwcCB9KSA9PiAoe1xuICBsb2FkaW5nOiBhcHAubG9hZGluZyxcbn0pKShUb3BMb2FkZXIpO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aExvY2FsZShMQU5HKSxcbiAgd2l0aFVBLFxuICB3aXRoQ29sbGVjdGlvbnMsXG4gIGNvbm5lY3QoXG4gICAgKHsgbG9jYXRpb24gfSkgPT4gKHtcbiAgICAgIHF1ZXJ5OiBsb2NhdGlvbi5xdWVyeSxcbiAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICB9KSxcbiAgICBkaXNwYXRjaCA9PiAoe1xuICAgICAgdXBkYXRlUXVlcnk6IGNyZWF0ZVVwZGF0ZVF1ZXJ5KGRpc3BhdGNoKSxcbiAgICAgIHJlcGxhY2VRdWVyeTogY3JlYXRlUmVwbGFjZVF1ZXJ5KGRpc3BhdGNoKSxcbiAgICB9KSxcbiAgKSxcbik7XG5jb25zdCBjb21wb25lbnQgPSBlbmhhbmNlKHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5LFxuICAgIGNvbGxlY3Rpb25MaXN0LFxuICAgIGNvbGxlY3Rpb25UcmVlLFxuICAgIHVhLFxuICAgIGZsYXROYXZpZ2F0aW9uLFxuICAgIHVwZGF0ZVF1ZXJ5LFxuICAgIHBhdGhuYW1lLFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uTGlzdC5maWx0ZXIoXG4gICAgKHsgbmFtZSB9KSA9PiBxdWVyeVtgQCR7bmFtZS50b0xvd2VyQ2FzZSgpfWBdICE9PSB1bmRlZmluZWQsXG4gIClbMF07XG4gIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbiAmJiBjb2xsZWN0aW9uLm5hbWU7XG4gIGNvbnN0IGNvbGxlY3Rpb25JZCA9XG4gICAgY29sbGVjdGlvbk5hbWUgJiYgcXVlcnkgJiYgcXVlcnlbYEAke2NvbGxlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCl9YF07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFByZWZldGNoUm91dGVzIGZsYXROYXZpZ2F0aW9uPXtmbGF0TmF2aWdhdGlvbn0gLz5cbiAgICAgIDxMb2FkIC8+XG4gICAgICA8TGlnaHRib3ggLz5cbiAgICAgIDxIb3RqYXIgaWQ9e3Byb2Nlc3MuZW52LkhPVEpBUn0gLz5cbiAgICAgIDxNb2RhbFxuICAgICAgICBvcGVuPXshIWNvbGxlY3Rpb24gJiYgcXVlcnkubW9kYWwgPT09IG51bGx9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+XG4gICAgICAgICAgdXBkYXRlUXVlcnkoe1xuICAgICAgICAgICAgW2BAJHtjb2xsZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpfWBdOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtb2RhbDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPENvbGxlY3Rpb25Sb3V0ZVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICBpZD17Y29sbGVjdGlvbklkfVxuICAgICAgICAgIHR5cGVOYW1lPXtjb2xsZWN0aW9uTmFtZX1cbiAgICAgICAgLz5cbiAgICAgIDwvTW9kYWw+XG4gICAgICA8TmF2aWdhdGlvblxuICAgICAgICBjb2xsZWN0aW9uTGlzdD17Y29sbGVjdGlvbkxpc3R9XG4gICAgICAgIGNvbGxlY3Rpb25UcmVlPXtjb2xsZWN0aW9uVHJlZX1cbiAgICAgID5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8TWF0Y2hcbiAgICAgICAgICAgIG1hdGNoPXshIWNvbGxlY3Rpb24gJiYgcXVlcnkubW9kYWwgIT09IG51bGx9XG4gICAgICAgICAgICByZW5kZXI9eygpID0+IChcbiAgICAgICAgICAgICAgPENvbGxlY3Rpb25Sb3V0ZVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICBpZD17Y29sbGVjdGlvbklkfVxuICAgICAgICAgICAgICAgIHR5cGVOYW1lPXtjb2xsZWN0aW9uTmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWF0Y2hcbiAgICAgICAgICAgIG1hdGNoPXtxdWVyeVsnQG1lZGlhJ10gIT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHJlbmRlcj17KCkgPT4gPENsb3VkaW5hcnlSb3V0ZSB7Li4ucHJvcHN9IC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1hdGNoXG4gICAgICAgICAgICBtYXRjaD17cXVlcnlbJ0BhbmFseXRpY3MnXSAhPT0gdW5kZWZpbmVkfVxuICAgICAgICAgICAgcmVuZGVyPXsoKSA9PiA8QW5hbHl0aWNzIHsuLi5wcm9wc30gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWF0Y2hcbiAgICAgICAgICAgIG1hdGNoPXtxdWVyeVsnQHBhZ2UnXSAhPT0gdW5kZWZpbmVkfVxuICAgICAgICAgICAgcmVuZGVyPXtyZXN0ID0+IDxFZGl0YWJsZVJvdXRlIHsuLi5yZXN0fSB7Li4ucHJvcHN9IC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1hdGNoIHJlbmRlcj17cmVzdCA9PiA8UGFnZVJvdXRlIHsuLi5yZXN0fSB7Li4ucHJvcHN9IC8+fSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvTmF2aWdhdGlvbj5cbiAgICAgIHt1YS5nZXRCcm93c2VyKCkubmFtZSA9PT0gJ0lFJyAmJiAoXG4gICAgICAgIDxGb290ZXI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXaXIgZW1wZmVobGVuIGbDvHIgZGllIFZlcndlbmR1bmcgdm9uIE9seW1wICh1bmQgZGFyw7xiZXIgaGluYXVzKSBkaWVcbiAgICAgICAgICAgIFZlcndlbmR1bmcgZGVzIEJyb3dzZXJzeycgJ31cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuZGUvY2hyb21lXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICBDaHJvbWVcbiAgICAgICAgICAgIDwvYT4uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgICl9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59KTtcblxuY29tcG9uZW50LmRpc3BsYXlOYW1lID0gJ0Ntc0F1dGgnO1xuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50O1xuIl19
