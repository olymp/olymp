import 'antd/lib/select/style';
import _Select2 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n      query tags {\n        tags {\n          id\n        }\n      }\n    '], ['\n      query tags {\n        tags {\n          id\n        }\n      }\n    ']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import { compose, toClass } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import FormItem from './form-item';

var enhance = compose(graphql(gql(_templateObject), {
  props: function props(_ref) {
    var ownProps = _ref.ownProps,
        data = _ref.data;
    return _extends({}, ownProps, {
      tags: (data.tags || []).map(function (x) {
        return x.id;
      })
    });
  }
}), toClass);

export default {
  rule: function rule(_ref2) {
    var type = _ref2.type,
        name = _ref2.name;
    return name === 'tags' && type.kind === 'LIST' && type.ofType.name === 'String';
  },
  form: enhance(function (_ref3) {
    var _ref3$tags = _ref3.tags,
        tags = _ref3$tags === undefined ? [] : _ref3$tags,
        props = _objectWithoutProperties(_ref3, ['tags']);

    return React.createElement(
      FormItem,
      props,
      React.createElement(
        _Select2,
        _extends({}, props, { mode: 'tags', style: { width: '100%' } }),
        tags.map(function (tag) {
          return React.createElement(
            _Select.Option,
            { key: tag },
            tag
          );
        })
      )
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC10YWdzLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbXBvc2UiLCJ0b0NsYXNzIiwiZ3JhcGhxbCIsImdxbCIsIkZvcm1JdGVtIiwiZW5oYW5jZSIsInByb3BzIiwib3duUHJvcHMiLCJkYXRhIiwidGFncyIsIm1hcCIsIngiLCJpZCIsInJ1bGUiLCJ0eXBlIiwibmFtZSIsImtpbmQiLCJvZlR5cGUiLCJmb3JtIiwid2lkdGgiLCJ0YWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsT0FBbEIsUUFBaUMsV0FBakM7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGNBQXhCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixhQUFoQjs7QUFFQSxPQUFPQyxRQUFQLE1BQXFCLGFBQXJCOztBQUVBLElBQU1DLFVBQVVMLFFBQ2RFLFFBQ0VDLEdBREYsbUJBUUU7QUFDRUcsU0FBTztBQUFBLFFBQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFFBQWFDLElBQWIsUUFBYUEsSUFBYjtBQUFBLHdCQUNGRCxRQURFO0FBRUxFLFlBQU0sQ0FBQ0QsS0FBS0MsSUFBTCxJQUFhLEVBQWQsRUFBa0JDLEdBQWxCLENBQXNCO0FBQUEsZUFBS0MsRUFBRUMsRUFBUDtBQUFBLE9BQXRCO0FBRkQ7QUFBQTtBQURULENBUkYsQ0FEYyxFQWdCZFgsT0FoQmMsQ0FBaEI7O0FBbUJBLGVBQWU7QUFDYlksUUFBTTtBQUFBLFFBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFFBQVNDLElBQVQsU0FBU0EsSUFBVDtBQUFBLFdBQ0pBLFNBQVMsTUFBVCxJQUFtQkQsS0FBS0UsSUFBTCxLQUFjLE1BQWpDLElBQTJDRixLQUFLRyxNQUFMLENBQVlGLElBQVosS0FBcUIsUUFENUQ7QUFBQSxHQURPO0FBR2JHLFFBQU1iLFFBQVE7QUFBQSwyQkFBR0ksSUFBSDtBQUFBLFFBQUdBLElBQUgsOEJBQVUsRUFBVjtBQUFBLFFBQWlCSCxLQUFqQjs7QUFBQSxXQUNaO0FBQUMsY0FBRDtBQUFjQSxXQUFkO0FBQ0U7QUFBQTtBQUFBLHFCQUFZQSxLQUFaLElBQW1CLE1BQUssTUFBeEIsRUFBK0IsT0FBTyxFQUFFYSxPQUFPLE1BQVQsRUFBdEM7QUFDR1YsYUFBS0MsR0FBTCxDQUFTO0FBQUEsaUJBQU87QUFBQSxvQkFBUSxNQUFSO0FBQUEsY0FBZSxLQUFLVSxHQUFwQjtBQUEwQkE7QUFBMUIsV0FBUDtBQUFBLFNBQVQ7QUFESDtBQURGLEtBRFk7QUFBQSxHQUFSO0FBSE8sQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9jb2xsZWN0aW9uL2VkaXQtdGFncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlLCB0b0NsYXNzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdhbnRkJztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuL2Zvcm0taXRlbSc7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICBncmFwaHFsKFxuICAgIGdxbGBcbiAgICAgIHF1ZXJ5IHRhZ3Mge1xuICAgICAgICB0YWdzIHtcbiAgICAgICAgICBpZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICB7XG4gICAgICBwcm9wczogKHsgb3duUHJvcHMsIGRhdGEgfSkgPT4gKHtcbiAgICAgICAgLi4ub3duUHJvcHMsXG4gICAgICAgIHRhZ3M6IChkYXRhLnRhZ3MgfHwgW10pLm1hcCh4ID0+IHguaWQpLFxuICAgICAgfSksXG4gICAgfSxcbiAgKSxcbiAgdG9DbGFzcyxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZTogKHsgdHlwZSwgbmFtZSB9KSA9PlxuICAgIG5hbWUgPT09ICd0YWdzJyAmJiB0eXBlLmtpbmQgPT09ICdMSVNUJyAmJiB0eXBlLm9mVHlwZS5uYW1lID09PSAnU3RyaW5nJyxcbiAgZm9ybTogZW5oYW5jZSgoeyB0YWdzID0gW10sIC4uLnByb3BzIH0pID0+IChcbiAgICA8Rm9ybUl0ZW0gey4uLnByb3BzfT5cbiAgICAgIDxTZWxlY3Qgey4uLnByb3BzfSBtb2RlPVwidGFnc1wiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgIHt0YWdzLm1hcCh0YWcgPT4gPFNlbGVjdC5PcHRpb24ga2V5PXt0YWd9Pnt0YWd9PC9TZWxlY3QuT3B0aW9uPil9XG4gICAgICA8L1NlbGVjdD5cbiAgICA8L0Zvcm1JdGVtPlxuICApKSxcbn07XG4iXX0=
