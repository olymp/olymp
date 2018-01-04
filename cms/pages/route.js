'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _reactRedux = require('react-redux');

var _ = require('./404');

var _2 = _interopRequireDefault(_);

var _reader = require('./reader');

var _reader2 = _interopRequireDefault(_reader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

var enhance = (0, _recompose.compose)((0, _reactRedux.connect)(function (_ref2) {
  var location = _ref2.location;
  return {
    pathname: location.pathname
  };
}), (0, _recompose.withPropsOnChange)(['navigation'], function (_ref3) {
  var navigation = _ref3.navigation;
  return {
    publicNavigation: filterPublic(navigation)
  };
}), (0, _recompose.withPropsOnChange)(['flatNavigation', 'pathname'], function (_ref4) {
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

var _ref5 = _react2.default.createElement(_2.default, null);

var PageRoute = enhance(function (props) {
  var Wrapped = props.Wrapped,
      publicNavigation = props.publicNavigation,
      pathname = props.pathname,
      item = props.item;

  return _react2.default.createElement(
    Wrapped,
    { navigation: publicNavigation },
    item && _react2.default.createElement(_reader2.default.WithData, {
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
exports.default = PageRoute;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9yb3V0ZS5lczYiXSwibmFtZXMiOlsiZmlsdGVyUHVibGljIiwicGFnZXMiLCJmaWx0ZXIiLCJwYWdlIiwic3RhdGUiLCJtYXAiLCJjaGlsZHJlbiIsInJlc3QiLCJlbmhhbmNlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsIm5hdmlnYXRpb24iLCJwdWJsaWNOYXZpZ2F0aW9uIiwiZmxhdE5hdmlnYXRpb24iLCJpdGVtIiwieCIsImxlbmd0aCIsImRlY29kZVVSSSIsImlkIiwiUGFnZVJvdXRlIiwiV3JhcHBlZCIsInByb3BzIiwicGFnZUlkIiwiYWxpYXNJZCIsImJpbmRpbmdJZCIsImJpbmRpbmciLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlO0FBQUEsU0FDbkJDLE1BQ0dDLE1BREgsQ0FDVTtBQUFBLFdBQVFDLEtBQUtDLEtBQUwsS0FBZSxXQUF2QjtBQUFBLEdBRFYsRUFFR0MsR0FGSCxDQUVPO0FBQUEsUUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsUUFBZ0JDLElBQWhCOztBQUFBLHdCQUNBQSxJQURBO0FBRUhELGdCQUFVTixhQUFhTSxRQUFiO0FBRlA7QUFBQSxHQUZQLENBRG1CO0FBQUEsQ0FBckI7O0FBUUEsSUFBTUUsVUFBVSx3QkFDZCx5QkFBUTtBQUFBLE1BQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQ3pCQyxjQUFVRCxTQUFTQztBQURNLEdBQW5CO0FBQUEsQ0FBUixDQURjLEVBSWQsa0NBQWtCLENBQUMsWUFBRCxDQUFsQixFQUFrQztBQUFBLE1BQUdDLFVBQUgsU0FBR0EsVUFBSDtBQUFBLFNBQXFCO0FBQ3JEQyxzQkFBa0JaLGFBQWFXLFVBQWI7QUFEbUMsR0FBckI7QUFBQSxDQUFsQyxDQUpjLEVBT2Qsa0NBQ0UsQ0FBQyxnQkFBRCxFQUFtQixVQUFuQixDQURGLEVBRUUsaUJBQWtDO0FBQUEsTUFBL0JFLGNBQStCLFNBQS9CQSxjQUErQjtBQUFBLE1BQWZILFFBQWUsU0FBZkEsUUFBZTs7QUFDaEMsTUFBSUksYUFBSjtBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixlQUFlRyxNQUFuQyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUMsUUFBTVosT0FBT1UsZUFBZUUsQ0FBZixDQUFiO0FBQ0EsUUFDRUUsVUFBVWQsS0FBS08sUUFBZixNQUE2QkEsUUFBN0IsSUFDQSxNQUFJUCxLQUFLZSxFQUFULEtBQWtCUixRQUZwQixFQUdFO0FBQ0FJLGFBQU9YLElBQVA7QUFDQTtBQUNEO0FBQ0Y7QUFDRCxTQUFPO0FBQ0xXO0FBREssR0FBUDtBQUdELENBakJILENBUGMsQ0FBaEI7O1lBeUNnQiwrQzs7QUFiaEIsSUFBTUssWUFBWVgsUUFBUSxpQkFBUztBQUFBLE1BQ3pCWSxPQUR5QixHQUNxQkMsS0FEckIsQ0FDekJELE9BRHlCO0FBQUEsTUFDaEJSLGdCQURnQixHQUNxQlMsS0FEckIsQ0FDaEJULGdCQURnQjtBQUFBLE1BQ0VGLFFBREYsR0FDcUJXLEtBRHJCLENBQ0VYLFFBREY7QUFBQSxNQUNZSSxJQURaLEdBQ3FCTyxLQURyQixDQUNZUCxJQURaOztBQUVqQyxTQUNFO0FBQUMsV0FBRDtBQUFBLE1BQVMsWUFBWUYsZ0JBQXJCO0FBQ0dFLFlBQ0MsK0NBQU0sUUFBTjtBQUNFLGdCQUFVSixRQURaO0FBRUUsV0FBS0ksS0FBS1EsTUFBTCxJQUFlUixLQUFLUyxPQUFwQixJQUErQlQsS0FBS0ksRUFGM0M7QUFHRSxVQUFJSixLQUFLUSxNQUFMLElBQWVSLEtBQUtTLE9BQXBCLElBQStCVCxLQUFLSSxFQUgxQztBQUlFLGlCQUFXSixLQUFLVSxTQUpsQjtBQUtFLGVBQVNWLEtBQUtXO0FBTGhCLE1BRko7QUFVRyxLQUFDWCxJQUFEO0FBVkgsR0FERjtBQWNELENBaEJpQixDQUFsQjtBQWlCQUssVUFBVU8sV0FBVixHQUF3QixXQUF4QjtrQkFDZVAsUyIsImZpbGUiOiJjbXMvcGFnZXMvcm91dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFByb3BzT25DaGFuZ2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBFcnJvcjQwNCBmcm9tICcuLzQwNCc7XG5pbXBvcnQgUGFnZSBmcm9tICcuL3JlYWRlcic7XG5cbmNvbnN0IGZpbHRlclB1YmxpYyA9IHBhZ2VzID0+XG4gIHBhZ2VzXG4gICAgLmZpbHRlcihwYWdlID0+IHBhZ2Uuc3RhdGUgPT09ICdQVUJMSVNIRUQnKVxuICAgIC5tYXAoKHsgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gKHtcbiAgICAgIC4uLnJlc3QsXG4gICAgICBjaGlsZHJlbjogZmlsdGVyUHVibGljKGNoaWxkcmVuKSxcbiAgICB9KSk7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICBjb25uZWN0KCh7IGxvY2F0aW9uIH0pID0+ICh7XG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICB9KSksXG4gIHdpdGhQcm9wc09uQ2hhbmdlKFsnbmF2aWdhdGlvbiddLCAoeyBuYXZpZ2F0aW9uIH0pID0+ICh7XG4gICAgcHVibGljTmF2aWdhdGlvbjogZmlsdGVyUHVibGljKG5hdmlnYXRpb24pLFxuICB9KSksXG4gIHdpdGhQcm9wc09uQ2hhbmdlKFxuICAgIFsnZmxhdE5hdmlnYXRpb24nLCAncGF0aG5hbWUnXSxcbiAgICAoeyBmbGF0TmF2aWdhdGlvbiwgcGF0aG5hbWUgfSkgPT4ge1xuICAgICAgbGV0IGl0ZW07XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGZsYXROYXZpZ2F0aW9uLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSBmbGF0TmF2aWdhdGlvblt4XTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGRlY29kZVVSSShwYWdlLnBhdGhuYW1lKSA9PT0gcGF0aG5hbWUgfHxcbiAgICAgICAgICBgLyR7cGFnZS5pZH1gID09PSBwYXRobmFtZVxuICAgICAgICApIHtcbiAgICAgICAgICBpdGVtID0gcGFnZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbSxcbiAgICAgIH07XG4gICAgfSxcbiAgKSxcbik7XG5cbmNvbnN0IFBhZ2VSb3V0ZSA9IGVuaGFuY2UocHJvcHMgPT4ge1xuICBjb25zdCB7IFdyYXBwZWQsIHB1YmxpY05hdmlnYXRpb24sIHBhdGhuYW1lLCBpdGVtIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZCBuYXZpZ2F0aW9uPXtwdWJsaWNOYXZpZ2F0aW9ufT5cbiAgICAgIHtpdGVtICYmIChcbiAgICAgICAgPFBhZ2UuV2l0aERhdGFcbiAgICAgICAgICBwYXRobmFtZT17cGF0aG5hbWV9XG4gICAgICAgICAga2V5PXtpdGVtLnBhZ2VJZCB8fCBpdGVtLmFsaWFzSWQgfHwgaXRlbS5pZH1cbiAgICAgICAgICBpZD17aXRlbS5wYWdlSWQgfHwgaXRlbS5hbGlhc0lkIHx8IGl0ZW0uaWR9XG4gICAgICAgICAgYmluZGluZ0lkPXtpdGVtLmJpbmRpbmdJZH1cbiAgICAgICAgICBiaW5kaW5nPXtpdGVtLmJpbmRpbmd9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgeyFpdGVtICYmIDxFcnJvcjQwNCAvPn1cbiAgICA8L1dyYXBwZWQ+XG4gICk7XG59KTtcblBhZ2VSb3V0ZS5kaXNwbGF5TmFtZSA9ICdQYWdlUm91dGUnO1xuZXhwb3J0IGRlZmF1bHQgUGFnZVJvdXRlO1xuIl19
