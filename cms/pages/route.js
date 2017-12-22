var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { compose, withPropsOnChange } from 'recompose';
import { connect } from 'react-redux';
import Error404 from './404';
import Page from './reader';

var filterPublic = function filterPublic(pages) {
  return pages.filter(function (page) {
    return page.state === 'PUBLISHED';
  }).map(function (_ref) {
    var children = _ref.children,
        rest = _objectWithoutProperties(_ref, ['children']);

    return _extends({}, rest, {
      children: filterPublic(children)
    });
  });
};

var enhance = compose(connect(function (_ref2) {
  var location = _ref2.location;
  return {
    pathname: location.pathname
  };
}), withPropsOnChange(['navigation'], function (_ref3) {
  var navigation = _ref3.navigation;
  return {
    publicNavigation: filterPublic(navigation)
  };
}), withPropsOnChange(['flatNavigation', 'pathname'], function (_ref4) {
  var flatNavigation = _ref4.flatNavigation,
      pathname = _ref4.pathname;

  var item = void 0;
  for (var x = 0; x < flatNavigation.length; x++) {
    var page = flatNavigation[x];
    if (decodeURI(page.pathname) === pathname || '/' + page.id === pathname) {
      item = page;
      break;
    }
  }
  return {
    item: item
  };
}));

var _ref5 = React.createElement(Error404, null);

var PageRoute = enhance(function (props) {
  var Wrapped = props.Wrapped,
      publicNavigation = props.publicNavigation,
      pathname = props.pathname,
      item = props.item;

  return React.createElement(
    Wrapped,
    { navigation: publicNavigation },
    item && React.createElement(Page.WithData, {
      pathname: pathname,
      key: item.pageId || item.aliasId || item.id,
      id: item.pageId || item.aliasId || item.id,
      bindingId: item.bindingId,
      binding: item.binding
    }),
    !item && _ref5
  );
});
PageRoute.displayName = 'PageRoute';
export default PageRoute;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL3JvdXRlLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbXBvc2UiLCJ3aXRoUHJvcHNPbkNoYW5nZSIsImNvbm5lY3QiLCJFcnJvcjQwNCIsIlBhZ2UiLCJmaWx0ZXJQdWJsaWMiLCJwYWdlcyIsImZpbHRlciIsInBhZ2UiLCJzdGF0ZSIsIm1hcCIsImNoaWxkcmVuIiwicmVzdCIsImVuaGFuY2UiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwibmF2aWdhdGlvbiIsInB1YmxpY05hdmlnYXRpb24iLCJmbGF0TmF2aWdhdGlvbiIsIml0ZW0iLCJ4IiwibGVuZ3RoIiwiZGVjb2RlVVJJIiwiaWQiLCJQYWdlUm91dGUiLCJXcmFwcGVkIiwicHJvcHMiLCJwYWdlSWQiLCJhbGlhc0lkIiwiYmluZGluZ0lkIiwiYmluZGluZyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLE9BQVQsRUFBa0JDLGlCQUFsQixRQUEyQyxXQUEzQztBQUNBLFNBQVNDLE9BQVQsUUFBd0IsYUFBeEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLE9BQXJCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixVQUFqQjs7QUFFQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUNuQkMsTUFDR0MsTUFESCxDQUNVO0FBQUEsV0FBUUMsS0FBS0MsS0FBTCxLQUFlLFdBQXZCO0FBQUEsR0FEVixFQUVHQyxHQUZILENBRU87QUFBQSxRQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxRQUFnQkMsSUFBaEI7O0FBQUEsd0JBQ0FBLElBREE7QUFFSEQsZ0JBQVVOLGFBQWFNLFFBQWI7QUFGUDtBQUFBLEdBRlAsQ0FEbUI7QUFBQSxDQUFyQjs7QUFRQSxJQUFNRSxVQUFVYixRQUNkRSxRQUFRO0FBQUEsTUFBR1ksUUFBSCxTQUFHQSxRQUFIO0FBQUEsU0FBbUI7QUFDekJDLGNBQVVELFNBQVNDO0FBRE0sR0FBbkI7QUFBQSxDQUFSLENBRGMsRUFJZGQsa0JBQWtCLENBQUMsWUFBRCxDQUFsQixFQUFrQztBQUFBLE1BQUdlLFVBQUgsU0FBR0EsVUFBSDtBQUFBLFNBQXFCO0FBQ3JEQyxzQkFBa0JaLGFBQWFXLFVBQWI7QUFEbUMsR0FBckI7QUFBQSxDQUFsQyxDQUpjLEVBT2RmLGtCQUNFLENBQUMsZ0JBQUQsRUFBbUIsVUFBbkIsQ0FERixFQUVFLGlCQUFrQztBQUFBLE1BQS9CaUIsY0FBK0IsU0FBL0JBLGNBQStCO0FBQUEsTUFBZkgsUUFBZSxTQUFmQSxRQUFlOztBQUNoQyxNQUFJSSxhQUFKO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLGVBQWVHLE1BQW5DLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxRQUFNWixPQUFPVSxlQUFlRSxDQUFmLENBQWI7QUFDQSxRQUNFRSxVQUFVZCxLQUFLTyxRQUFmLE1BQTZCQSxRQUE3QixJQUNBLE1BQUlQLEtBQUtlLEVBQVQsS0FBa0JSLFFBRnBCLEVBR0U7QUFDQUksYUFBT1gsSUFBUDtBQUNBO0FBQ0Q7QUFDRjtBQUNELFNBQU87QUFDTFc7QUFESyxHQUFQO0FBR0QsQ0FqQkgsQ0FQYyxDQUFoQjs7WUF5Q2dCLG9CQUFDLFFBQUQsTzs7QUFiaEIsSUFBTUssWUFBWVgsUUFBUSxpQkFBUztBQUFBLE1BQ3pCWSxPQUR5QixHQUNxQkMsS0FEckIsQ0FDekJELE9BRHlCO0FBQUEsTUFDaEJSLGdCQURnQixHQUNxQlMsS0FEckIsQ0FDaEJULGdCQURnQjtBQUFBLE1BQ0VGLFFBREYsR0FDcUJXLEtBRHJCLENBQ0VYLFFBREY7QUFBQSxNQUNZSSxJQURaLEdBQ3FCTyxLQURyQixDQUNZUCxJQURaOztBQUVqQyxTQUNFO0FBQUMsV0FBRDtBQUFBLE1BQVMsWUFBWUYsZ0JBQXJCO0FBQ0dFLFlBQ0Msb0JBQUMsSUFBRCxDQUFNLFFBQU47QUFDRSxnQkFBVUosUUFEWjtBQUVFLFdBQUtJLEtBQUtRLE1BQUwsSUFBZVIsS0FBS1MsT0FBcEIsSUFBK0JULEtBQUtJLEVBRjNDO0FBR0UsVUFBSUosS0FBS1EsTUFBTCxJQUFlUixLQUFLUyxPQUFwQixJQUErQlQsS0FBS0ksRUFIMUM7QUFJRSxpQkFBV0osS0FBS1UsU0FKbEI7QUFLRSxlQUFTVixLQUFLVztBQUxoQixNQUZKO0FBVUcsS0FBQ1gsSUFBRDtBQVZILEdBREY7QUFjRCxDQWhCaUIsQ0FBbEI7QUFpQkFLLFVBQVVPLFdBQVYsR0FBd0IsV0FBeEI7QUFDQSxlQUFlUCxTQUFmIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL3JvdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRXJyb3I0MDQgZnJvbSAnLi80MDQnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9yZWFkZXInO1xuXG5jb25zdCBmaWx0ZXJQdWJsaWMgPSBwYWdlcyA9PlxuICBwYWdlc1xuICAgIC5maWx0ZXIocGFnZSA9PiBwYWdlLnN0YXRlID09PSAnUFVCTElTSEVEJylcbiAgICAubWFwKCh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+ICh7XG4gICAgICAuLi5yZXN0LFxuICAgICAgY2hpbGRyZW46IGZpbHRlclB1YmxpYyhjaGlsZHJlbiksXG4gICAgfSkpO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgY29ubmVjdCgoeyBsb2NhdGlvbiB9KSA9PiAoe1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgfSkpLFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ25hdmlnYXRpb24nXSwgKHsgbmF2aWdhdGlvbiB9KSA9PiAoe1xuICAgIHB1YmxpY05hdmlnYXRpb246IGZpbHRlclB1YmxpYyhuYXZpZ2F0aW9uKSxcbiAgfSkpLFxuICB3aXRoUHJvcHNPbkNoYW5nZShcbiAgICBbJ2ZsYXROYXZpZ2F0aW9uJywgJ3BhdGhuYW1lJ10sXG4gICAgKHsgZmxhdE5hdmlnYXRpb24sIHBhdGhuYW1lIH0pID0+IHtcbiAgICAgIGxldCBpdGVtO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBmbGF0TmF2aWdhdGlvbi5sZW5ndGg7IHgrKykge1xuICAgICAgICBjb25zdCBwYWdlID0gZmxhdE5hdmlnYXRpb25beF07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBkZWNvZGVVUkkocGFnZS5wYXRobmFtZSkgPT09IHBhdGhuYW1lIHx8XG4gICAgICAgICAgYC8ke3BhZ2UuaWR9YCA9PT0gcGF0aG5hbWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgaXRlbSA9IHBhZ2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW0sXG4gICAgICB9O1xuICAgIH0sXG4gICksXG4pO1xuXG5jb25zdCBQYWdlUm91dGUgPSBlbmhhbmNlKHByb3BzID0+IHtcbiAgY29uc3QgeyBXcmFwcGVkLCBwdWJsaWNOYXZpZ2F0aW9uLCBwYXRobmFtZSwgaXRlbSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWQgbmF2aWdhdGlvbj17cHVibGljTmF2aWdhdGlvbn0+XG4gICAgICB7aXRlbSAmJiAoXG4gICAgICAgIDxQYWdlLldpdGhEYXRhXG4gICAgICAgICAgcGF0aG5hbWU9e3BhdGhuYW1lfVxuICAgICAgICAgIGtleT17aXRlbS5wYWdlSWQgfHwgaXRlbS5hbGlhc0lkIHx8IGl0ZW0uaWR9XG4gICAgICAgICAgaWQ9e2l0ZW0ucGFnZUlkIHx8IGl0ZW0uYWxpYXNJZCB8fCBpdGVtLmlkfVxuICAgICAgICAgIGJpbmRpbmdJZD17aXRlbS5iaW5kaW5nSWR9XG4gICAgICAgICAgYmluZGluZz17aXRlbS5iaW5kaW5nfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHshaXRlbSAmJiA8RXJyb3I0MDQgLz59XG4gICAgPC9XcmFwcGVkPlxuICApO1xufSk7XG5QYWdlUm91dGUuZGlzcGxheU5hbWUgPSAnUGFnZVJvdXRlJztcbmV4cG9ydCBkZWZhdWx0IFBhZ2VSb3V0ZTtcbiJdfQ==
