'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryPages = exports.pageList = exports.prefetchPage = exports.queryPage = exports.page = undefined;

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  query page($id: String) {\n    page(id: $id) {\n      id\n      slug\n      isMega\n      description\n      order\n      type\n      name\n      binding {\n        type\n        query\n        fields\n      }\n      parentId\n      sorting\n      aliasId\n      href\n      blocks {\n        nodes\n        extract\n        image {\n          url\n          width\n          height\n          caption\n        }\n        title\n      }\n      state\n    }\n  }\n'], ['\n  query page($id: String) {\n    page(id: $id) {\n      id\n      slug\n      isMega\n      description\n      order\n      type\n      name\n      binding {\n        type\n        query\n        fields\n      }\n      parentId\n      sorting\n      aliasId\n      href\n      blocks {\n        nodes\n        extract\n        image {\n          url\n          width\n          height\n          caption\n        }\n        title\n      }\n      state\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  query pageList {\n    pageList(query: { state: { in: [PUBLISHED, DRAFT] } }) {\n      id\n      slug\n      isMega\n      order\n      type\n      name\n      binding {\n        type\n        query\n        fields\n      }\n      parentId\n      aliasId\n      sorting\n      state\n    }\n  }\n'], ['\n  query pageList {\n    pageList(query: { state: { in: [PUBLISHED, DRAFT] } }) {\n      id\n      slug\n      isMega\n      order\n      type\n      name\n      binding {\n        type\n        query\n        fields\n      }\n      parentId\n      aliasId\n      sorting\n      state\n    }\n  }\n']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var emptyArray = [];
var page = exports.page = (0, _graphqlTag2.default)(_templateObject);
var queryPage = exports.queryPage = (0, _reactApollo.graphql)(page, {
  options: function options(_ref) {
    var id = _ref.id,
        pageId = _ref.pageId,
        pathname = _ref.pathname;
    return {
      variables: { id: pageId || id },
      fetchPolicy: pathname === '/__new' ? 'cache-only' : undefined
    };
  },
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        data = _ref2.data;

    var newPage = {
      state: 'PUBLISHED',
      parentId: (0, _get3.default)(ownProps, 'query.@parentId')
    };

    return _extends({}, ownProps, {
      isLoading: data.loading,
      item: (ownProps.pathname === '/__new' || ownProps.pathname === '__new' ? newPage : data.page) || newPage,
      data: data
    });
  }
});

var prefetchPage = exports.prefetchPage = function prefetchPage(client, id) {
  return client.query({
    query: page,
    variables: { id: id }
  });
};

var pageList = exports.pageList = (0, _graphqlTag2.default)(_templateObject2);
var queryPages = exports.queryPages = (0, _reactApollo.graphql)(pageList, {
  props: function props(_ref3) {
    var ownProps = _ref3.ownProps,
        data = _ref3.data;
    return _extends({}, ownProps, {
      pageList: data.pageList || emptyArray,
      data: data
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ncWwvcXVlcnkuZXM2Il0sIm5hbWVzIjpbImVtcHR5QXJyYXkiLCJwYWdlIiwicXVlcnlQYWdlIiwib3B0aW9ucyIsImlkIiwicGFnZUlkIiwicGF0aG5hbWUiLCJ2YXJpYWJsZXMiLCJmZXRjaFBvbGljeSIsInVuZGVmaW5lZCIsInByb3BzIiwib3duUHJvcHMiLCJkYXRhIiwibmV3UGFnZSIsInN0YXRlIiwicGFyZW50SWQiLCJpc0xvYWRpbmciLCJsb2FkaW5nIiwiaXRlbSIsInByZWZldGNoUGFnZSIsImNsaWVudCIsInF1ZXJ5IiwicGFnZUxpc3QiLCJxdWVyeVBhZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTUEsYUFBYSxFQUFuQjtBQUNPLElBQU1DLGdFQUFOO0FBa0NBLElBQU1DLGdDQUFZLDBCQUFRRCxJQUFSLEVBQWM7QUFDckNFLFdBQVM7QUFBQSxRQUFHQyxFQUFILFFBQUdBLEVBQUg7QUFBQSxRQUFPQyxNQUFQLFFBQU9BLE1BQVA7QUFBQSxRQUFlQyxRQUFmLFFBQWVBLFFBQWY7QUFBQSxXQUErQjtBQUN0Q0MsaUJBQVcsRUFBRUgsSUFBSUMsVUFBVUQsRUFBaEIsRUFEMkI7QUFFdENJLG1CQUFhRixhQUFhLFFBQWIsR0FBd0IsWUFBeEIsR0FBdUNHO0FBRmQsS0FBL0I7QUFBQSxHQUQ0QjtBQUtyQ0MsU0FBTyxzQkFBd0I7QUFBQSxRQUFyQkMsUUFBcUIsU0FBckJBLFFBQXFCO0FBQUEsUUFBWEMsSUFBVyxTQUFYQSxJQUFXOztBQUM3QixRQUFNQyxVQUFVO0FBQ2RDLGFBQU8sV0FETztBQUVkQyxnQkFBVSxtQkFBSUosUUFBSixFQUFjLGlCQUFkO0FBRkksS0FBaEI7O0FBS0Esd0JBQ0tBLFFBREw7QUFFRUssaUJBQVdKLEtBQUtLLE9BRmxCO0FBR0VDLFlBQ0UsQ0FBQ1AsU0FBU0wsUUFBVCxLQUFzQixRQUF0QixJQUFrQ0ssU0FBU0wsUUFBVCxLQUFzQixPQUF4RCxHQUNHTyxPQURILEdBRUdELEtBQUtYLElBRlQsS0FFa0JZLE9BTnRCO0FBT0VEO0FBUEY7QUFTRDtBQXBCb0MsQ0FBZCxDQUFsQjs7QUF1QkEsSUFBTU8sc0NBQWUsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQVNoQixFQUFUO0FBQUEsU0FDMUJnQixPQUFPQyxLQUFQLENBQWE7QUFDWEEsV0FBT3BCLElBREk7QUFFWE0sZUFBVyxFQUFFSCxNQUFGO0FBRkEsR0FBYixDQUQwQjtBQUFBLENBQXJCOztBQU1BLElBQU1rQix5RUFBTjtBQXFCQSxJQUFNQyxrQ0FBYSwwQkFBUUQsUUFBUixFQUFrQjtBQUMxQ1osU0FBTztBQUFBLFFBQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFFBQWFDLElBQWIsU0FBYUEsSUFBYjtBQUFBLHdCQUNGRCxRQURFO0FBRUxXLGdCQUFVVixLQUFLVSxRQUFMLElBQWlCdEIsVUFGdEI7QUFHTFk7QUFISztBQUFBO0FBRG1DLENBQWxCLENBQW5CIiwiZmlsZSI6ImNtcy9wYWdlcy9ncWwvcXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgZW1wdHlBcnJheSA9IFtdO1xuZXhwb3J0IGNvbnN0IHBhZ2UgPSBncWxgXG4gIHF1ZXJ5IHBhZ2UoJGlkOiBTdHJpbmcpIHtcbiAgICBwYWdlKGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICBzbHVnXG4gICAgICBpc01lZ2FcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBvcmRlclxuICAgICAgdHlwZVxuICAgICAgbmFtZVxuICAgICAgYmluZGluZyB7XG4gICAgICAgIHR5cGVcbiAgICAgICAgcXVlcnlcbiAgICAgICAgZmllbGRzXG4gICAgICB9XG4gICAgICBwYXJlbnRJZFxuICAgICAgc29ydGluZ1xuICAgICAgYWxpYXNJZFxuICAgICAgaHJlZlxuICAgICAgYmxvY2tzIHtcbiAgICAgICAgbm9kZXNcbiAgICAgICAgZXh0cmFjdFxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBjYXB0aW9uXG4gICAgICAgIH1cbiAgICAgICAgdGl0bGVcbiAgICAgIH1cbiAgICAgIHN0YXRlXG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGNvbnN0IHF1ZXJ5UGFnZSA9IGdyYXBocWwocGFnZSwge1xuICBvcHRpb25zOiAoeyBpZCwgcGFnZUlkLCBwYXRobmFtZSB9KSA9PiAoe1xuICAgIHZhcmlhYmxlczogeyBpZDogcGFnZUlkIHx8IGlkIH0sXG4gICAgZmV0Y2hQb2xpY3k6IHBhdGhuYW1lID09PSAnL19fbmV3JyA/ICdjYWNoZS1vbmx5JyA6IHVuZGVmaW5lZCxcbiAgfSksXG4gIHByb3BzOiAoeyBvd25Qcm9wcywgZGF0YSB9KSA9PiB7XG4gICAgY29uc3QgbmV3UGFnZSA9IHtcbiAgICAgIHN0YXRlOiAnUFVCTElTSEVEJyxcbiAgICAgIHBhcmVudElkOiBnZXQob3duUHJvcHMsICdxdWVyeS5AcGFyZW50SWQnKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm93blByb3BzLFxuICAgICAgaXNMb2FkaW5nOiBkYXRhLmxvYWRpbmcsXG4gICAgICBpdGVtOlxuICAgICAgICAob3duUHJvcHMucGF0aG5hbWUgPT09ICcvX19uZXcnIHx8IG93blByb3BzLnBhdGhuYW1lID09PSAnX19uZXcnXG4gICAgICAgICAgPyBuZXdQYWdlXG4gICAgICAgICAgOiBkYXRhLnBhZ2UpIHx8IG5ld1BhZ2UsXG4gICAgICBkYXRhLFxuICAgIH07XG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHByZWZldGNoUGFnZSA9IChjbGllbnQsIGlkKSA9PlxuICBjbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBwYWdlLFxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHBhZ2VMaXN0ID0gZ3FsYFxuICBxdWVyeSBwYWdlTGlzdCB7XG4gICAgcGFnZUxpc3QocXVlcnk6IHsgc3RhdGU6IHsgaW46IFtQVUJMSVNIRUQsIERSQUZUXSB9IH0pIHtcbiAgICAgIGlkXG4gICAgICBzbHVnXG4gICAgICBpc01lZ2FcbiAgICAgIG9yZGVyXG4gICAgICB0eXBlXG4gICAgICBuYW1lXG4gICAgICBiaW5kaW5nIHtcbiAgICAgICAgdHlwZVxuICAgICAgICBxdWVyeVxuICAgICAgICBmaWVsZHNcbiAgICAgIH1cbiAgICAgIHBhcmVudElkXG4gICAgICBhbGlhc0lkXG4gICAgICBzb3J0aW5nXG4gICAgICBzdGF0ZVxuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBxdWVyeVBhZ2VzID0gZ3JhcGhxbChwYWdlTGlzdCwge1xuICBwcm9wczogKHsgb3duUHJvcHMsIGRhdGEgfSkgPT4gKHtcbiAgICAuLi5vd25Qcm9wcyxcbiAgICBwYWdlTGlzdDogZGF0YS5wYWdlTGlzdCB8fCBlbXB0eUFycmF5LFxuICAgIGRhdGEsXG4gIH0pLFxufSk7XG4iXX0=
