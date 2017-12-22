import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  query page($id: String) {\n    page(id: $id) {\n      id\n      slug\n      isMega\n      description\n      order\n      type\n      name\n      binding {\n        type\n        query\n        fields\n      }\n      parentId\n      sorting\n      aliasId\n      href\n      blocks {\n        nodes\n        extract\n        image {\n          url\n          width\n          height\n          caption\n        }\n        title\n      }\n      state\n    }\n  }\n'], ['\n  query page($id: String) {\n    page(id: $id) {\n      id\n      slug\n      isMega\n      description\n      order\n      type\n      name\n      binding {\n        type\n        query\n        fields\n      }\n      parentId\n      sorting\n      aliasId\n      href\n      blocks {\n        nodes\n        extract\n        image {\n          url\n          width\n          height\n          caption\n        }\n        title\n      }\n      state\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  query pageList {\n    pageList(query: { state: { in: [PUBLISHED, DRAFT] } }) {\n      id\n      slug\n      isMega\n      order\n      type\n      name\n      binding {\n        type\n        query\n        fields\n      }\n      parentId\n      aliasId\n      sorting\n      state\n    }\n  }\n'], ['\n  query pageList {\n    pageList(query: { state: { in: [PUBLISHED, DRAFT] } }) {\n      id\n      slug\n      isMega\n      order\n      type\n      name\n      binding {\n        type\n        query\n        fields\n      }\n      parentId\n      aliasId\n      sorting\n      state\n    }\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


var emptyArray = [];
export var page = gql(_templateObject);
export var queryPage = graphql(page, {
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
      parentId: _get(ownProps, 'query.@parentId')
    };

    return _extends({}, ownProps, {
      isLoading: data.loading,
      item: (ownProps.pathname === '/__new' || ownProps.pathname === '__new' ? newPage : data.page) || newPage,
      data: data
    });
  }
});

export var prefetchPage = function prefetchPage(client, id) {
  return client.query({
    query: page,
    variables: { id: id }
  });
};

export var pageList = gql(_templateObject2);
export var queryPages = graphql(pageList, {
  props: function props(_ref3) {
    var ownProps = _ref3.ownProps,
        data = _ref3.data;
    return _extends({}, ownProps, {
      pageList: data.pageList || emptyArray,
      data: data
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2dxbC9xdWVyeS5lczYiXSwibmFtZXMiOlsiZ3FsIiwiZ3JhcGhxbCIsImVtcHR5QXJyYXkiLCJwYWdlIiwicXVlcnlQYWdlIiwib3B0aW9ucyIsImlkIiwicGFnZUlkIiwicGF0aG5hbWUiLCJ2YXJpYWJsZXMiLCJmZXRjaFBvbGljeSIsInVuZGVmaW5lZCIsInByb3BzIiwib3duUHJvcHMiLCJkYXRhIiwibmV3UGFnZSIsInN0YXRlIiwicGFyZW50SWQiLCJpc0xvYWRpbmciLCJsb2FkaW5nIiwiaXRlbSIsInByZWZldGNoUGFnZSIsImNsaWVudCIsInF1ZXJ5IiwicGFnZUxpc3QiLCJxdWVyeVBhZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxHQUFQLE1BQWdCLGFBQWhCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixjQUF4Qjs7O0FBR0EsSUFBTUMsYUFBYSxFQUFuQjtBQUNBLE9BQU8sSUFBTUMsT0FBT0gsR0FBUCxpQkFBTjtBQWtDUCxPQUFPLElBQU1JLFlBQVlILFFBQVFFLElBQVIsRUFBYztBQUNyQ0UsV0FBUztBQUFBLFFBQUdDLEVBQUgsUUFBR0EsRUFBSDtBQUFBLFFBQU9DLE1BQVAsUUFBT0EsTUFBUDtBQUFBLFFBQWVDLFFBQWYsUUFBZUEsUUFBZjtBQUFBLFdBQStCO0FBQ3RDQyxpQkFBVyxFQUFFSCxJQUFJQyxVQUFVRCxFQUFoQixFQUQyQjtBQUV0Q0ksbUJBQWFGLGFBQWEsUUFBYixHQUF3QixZQUF4QixHQUF1Q0c7QUFGZCxLQUEvQjtBQUFBLEdBRDRCO0FBS3JDQyxTQUFPLHNCQUF3QjtBQUFBLFFBQXJCQyxRQUFxQixTQUFyQkEsUUFBcUI7QUFBQSxRQUFYQyxJQUFXLFNBQVhBLElBQVc7O0FBQzdCLFFBQU1DLFVBQVU7QUFDZEMsYUFBTyxXQURPO0FBRWRDLGdCQUFVLEtBQUlKLFFBQUosRUFBYyxpQkFBZDtBQUZJLEtBQWhCOztBQUtBLHdCQUNLQSxRQURMO0FBRUVLLGlCQUFXSixLQUFLSyxPQUZsQjtBQUdFQyxZQUNFLENBQUNQLFNBQVNMLFFBQVQsS0FBc0IsUUFBdEIsSUFBa0NLLFNBQVNMLFFBQVQsS0FBc0IsT0FBeEQsR0FDR08sT0FESCxHQUVHRCxLQUFLWCxJQUZULEtBRWtCWSxPQU50QjtBQU9FRDtBQVBGO0FBU0Q7QUFwQm9DLENBQWQsQ0FBbEI7O0FBdUJQLE9BQU8sSUFBTU8sZUFBZSxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBU2hCLEVBQVQ7QUFBQSxTQUMxQmdCLE9BQU9DLEtBQVAsQ0FBYTtBQUNYQSxXQUFPcEIsSUFESTtBQUVYTSxlQUFXLEVBQUVILE1BQUY7QUFGQSxHQUFiLENBRDBCO0FBQUEsQ0FBckI7O0FBTVAsT0FBTyxJQUFNa0IsV0FBV3hCLEdBQVgsa0JBQU47QUFxQlAsT0FBTyxJQUFNeUIsYUFBYXhCLFFBQVF1QixRQUFSLEVBQWtCO0FBQzFDWixTQUFPO0FBQUEsUUFBR0MsUUFBSCxTQUFHQSxRQUFIO0FBQUEsUUFBYUMsSUFBYixTQUFhQSxJQUFiO0FBQUEsd0JBQ0ZELFFBREU7QUFFTFcsZ0JBQVVWLEtBQUtVLFFBQUwsSUFBaUJ0QixVQUZ0QjtBQUdMWTtBQUhLO0FBQUE7QUFEbUMsQ0FBbEIsQ0FBbkIiLCJmaWxlIjoicGFja2FnZXMvcGFnZXMvZ3FsL3F1ZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IGVtcHR5QXJyYXkgPSBbXTtcbmV4cG9ydCBjb25zdCBwYWdlID0gZ3FsYFxuICBxdWVyeSBwYWdlKCRpZDogU3RyaW5nKSB7XG4gICAgcGFnZShpZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgc2x1Z1xuICAgICAgaXNNZWdhXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgb3JkZXJcbiAgICAgIHR5cGVcbiAgICAgIG5hbWVcbiAgICAgIGJpbmRpbmcge1xuICAgICAgICB0eXBlXG4gICAgICAgIHF1ZXJ5XG4gICAgICAgIGZpZWxkc1xuICAgICAgfVxuICAgICAgcGFyZW50SWRcbiAgICAgIHNvcnRpbmdcbiAgICAgIGFsaWFzSWRcbiAgICAgIGhyZWZcbiAgICAgIGJsb2NrcyB7XG4gICAgICAgIG5vZGVzXG4gICAgICAgIGV4dHJhY3RcbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgY2FwdGlvblxuICAgICAgICB9XG4gICAgICAgIHRpdGxlXG4gICAgICB9XG4gICAgICBzdGF0ZVxuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBxdWVyeVBhZ2UgPSBncmFwaHFsKHBhZ2UsIHtcbiAgb3B0aW9uczogKHsgaWQsIHBhZ2VJZCwgcGF0aG5hbWUgfSkgPT4gKHtcbiAgICB2YXJpYWJsZXM6IHsgaWQ6IHBhZ2VJZCB8fCBpZCB9LFxuICAgIGZldGNoUG9saWN5OiBwYXRobmFtZSA9PT0gJy9fX25ldycgPyAnY2FjaGUtb25seScgOiB1bmRlZmluZWQsXG4gIH0pLFxuICBwcm9wczogKHsgb3duUHJvcHMsIGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IG5ld1BhZ2UgPSB7XG4gICAgICBzdGF0ZTogJ1BVQkxJU0hFRCcsXG4gICAgICBwYXJlbnRJZDogZ2V0KG93blByb3BzLCAncXVlcnkuQHBhcmVudElkJyksXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5vd25Qcm9wcyxcbiAgICAgIGlzTG9hZGluZzogZGF0YS5sb2FkaW5nLFxuICAgICAgaXRlbTpcbiAgICAgICAgKG93blByb3BzLnBhdGhuYW1lID09PSAnL19fbmV3JyB8fCBvd25Qcm9wcy5wYXRobmFtZSA9PT0gJ19fbmV3J1xuICAgICAgICAgID8gbmV3UGFnZVxuICAgICAgICAgIDogZGF0YS5wYWdlKSB8fCBuZXdQYWdlLFxuICAgICAgZGF0YSxcbiAgICB9O1xuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBwcmVmZXRjaFBhZ2UgPSAoY2xpZW50LCBpZCkgPT5cbiAgY2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogcGFnZSxcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBwYWdlTGlzdCA9IGdxbGBcbiAgcXVlcnkgcGFnZUxpc3Qge1xuICAgIHBhZ2VMaXN0KHF1ZXJ5OiB7IHN0YXRlOiB7IGluOiBbUFVCTElTSEVELCBEUkFGVF0gfSB9KSB7XG4gICAgICBpZFxuICAgICAgc2x1Z1xuICAgICAgaXNNZWdhXG4gICAgICBvcmRlclxuICAgICAgdHlwZVxuICAgICAgbmFtZVxuICAgICAgYmluZGluZyB7XG4gICAgICAgIHR5cGVcbiAgICAgICAgcXVlcnlcbiAgICAgICAgZmllbGRzXG4gICAgICB9XG4gICAgICBwYXJlbnRJZFxuICAgICAgYWxpYXNJZFxuICAgICAgc29ydGluZ1xuICAgICAgc3RhdGVcbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgcXVlcnlQYWdlcyA9IGdyYXBocWwocGFnZUxpc3QsIHtcbiAgcHJvcHM6ICh7IG93blByb3BzLCBkYXRhIH0pID0+ICh7XG4gICAgLi4ub3duUHJvcHMsXG4gICAgcGFnZUxpc3Q6IGRhdGEucGFnZUxpc3QgfHwgZW1wdHlBcnJheSxcbiAgICBkYXRhLFxuICB9KSxcbn0pO1xuIl19
