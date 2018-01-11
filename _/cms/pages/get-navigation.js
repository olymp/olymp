'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _orderBy2 = require('lodash/orderBy');

var _orderBy3 = _interopRequireDefault(_orderBy2);

var _lowerFirst2 = require('lodash/lowerFirst');

var _lowerFirst3 = _interopRequireDefault(_lowerFirst2);

var _upperFirst2 = require('lodash/upperFirst');

var _upperFirst3 = _interopRequireDefault(_upperFirst2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n              query ', 'List(\n                $query: ', 'Query,\n                $sort: ', 'Sort\n              ) {\n                items: ', 'List(query: $query, sort: $sort) {\n                  ', '\n                }\n              }\n            '], ['\n              query ', 'List(\n                $query: ', 'Query,\n                $sort: ', 'Sort\n              ) {\n                items: ', 'List(query: $query, sort: $sort) {\n                  ', '\n                }\n              }\n            ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = require('react-apollo');

var _recompose = require('recompose');

var _unflatten = require('olymp-utils/unflatten');

var _unflatten2 = _interopRequireDefault(_unflatten);

var _query = require('./gql/query');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

// interpolate a string value using props
var interpolate = function interpolate(value, propsOrFunc) {
  if (typeof value !== 'string') {
    return value;
  }
  if (value.indexOf('{') === -1) {
    return value;
  }
  return value.replace(/\{\{?\:?(.+?)\}?\}/g, function (m, v) {
    return typeof propsOrFunc === 'function' ? propsOrFunc(v, v) : (0, _get3.default)(propsOrFunc, v, v);
  });
};

exports.default = function (Wrapped) {
  var before = (0, _recompose.compose)(_query.queryPages, (0, _recompose.withPropsOnChange)(['pageList'], function (_ref) {
    var pageList = _ref.pageList,
        data = _ref.data;

    var deco = pageList.filter(function (item) {
      return item.binding;
    });
    var key = deco.map(function (x) {
      return x.id + '-' + x.binding;
    }).join('|');
    return {
      navKey: key,
      pageList: pageList,
      isNavigationLoading: data.loading
    };
  }), (0, _recompose.withPropsOnChange)(['navKey', 'pageList'], function (_ref2) {
    var pageList = _ref2.pageList;
    return {
      Component: pageList.filter(function (item) {
        return item.binding && item.binding.type;
      }).reduce(function (component, value) {
        var _value$binding = value.binding,
            type = _value$binding.type,
            fields = _value$binding.fields,
            _value$binding$query = _value$binding.query,
            query = _value$binding$query === undefined ? {} : _value$binding$query;

        var sort = value.sorting ? value.sorting.reduce(function (result, item) {
          var _item$split = item.split(''),
              _item$split2 = _toArray(_item$split),
              c = _item$split2[0],
              rest = _item$split2.slice(1);

          result[rest.join('')] = c === '-' ? 'DESC' : 'ASC';
          return result;
        }, {}) : {};
        return (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject, (0, _lowerFirst3.default)(type), (0, _upperFirst3.default)(type), (0, _upperFirst3.default)(type), (0, _lowerFirst3.default)(type), fields || 'id name slug'), {
          options: function options() {
            return {
              variables: {
                query: _extends({}, query, { state: { eq: 'PUBLISHED' } }),
                sort: sort
              }
            };
          },
          props: function props(_ref3) {
            var ownProps = _ref3.ownProps,
                data = _ref3.data;
            return _extends({}, ownProps, {
              navBindingObj: _extends({}, ownProps.navBindingObj, _defineProperty({}, value.id, data)),
              isNavigationLoading: ownProps.isNavigationLoading || data.loading
            });
          }
        })(component);
      }, after(Wrapped))
    };
  }));

  var after = (0, _recompose.withPropsOnChange)(['isNavigationLoading', 'pageList'], function (_ref4) {
    var pageList = _ref4.pageList,
        isNavigationLoading = _ref4.isNavigationLoading,
        navBindingObj = _ref4.navBindingObj;

    var flatNavigation = [];
    if (isNavigationLoading) {
      return {
        navigation: [],
        flatNavigation: []
      };
    }
    var navigation = (0, _unflatten2.default)(pageList, {
      pathProp: 'pathname',
      sort: function sort(children, parent) {
        var newChildren = children.reduce(function (state, child) {
          var data = navBindingObj && navBindingObj[child.id];
          if (data) {
            (data.items || []).forEach(function (item) {
              var slug = child.slug ? interpolate(child.slug, item) : item.slug;
              state.push(_extends({}, child, {
                pageId: child.id,
                bindingId: item.id,
                bindingObj: item,
                slug: slug,
                name: item.name,
                id: child.id + '--' + item.id
              }));
            });
          } else {
            state.push(child);
          }
          return state;
        }, []);
        return (0, _orderBy3.default)(newChildren, ['order'], ['asc']);
      },
      setPath: function setPath(current, _ref5) {
        var slug = _ref5.slug,
            rest = _objectWithoutProperties(_ref5, ['slug']);

        var pathname = ('' + (current || '') + (slug || '')).replace('//', '/');
        flatNavigation.push(_extends({}, rest, { slug: slug, pathname: pathname }));
        return pathname;
      }
    });
    return {
      navigation: navigation,
      flatNavigation: flatNavigation
    };
  });

  return (0, _recompose.compose)(before, (0, _recompose.renderComponent)(function (_ref6) {
    var Component = _ref6.Component,
        rest = _objectWithoutProperties(_ref6, ['Component']);

    return _react2.default.createElement(Component, rest);
  }))(function () {
    return null;
  });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9nZXQtbmF2aWdhdGlvbi5lczYiXSwibmFtZXMiOlsiaW50ZXJwb2xhdGUiLCJ2YWx1ZSIsInByb3BzT3JGdW5jIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJtIiwidiIsImJlZm9yZSIsInBhZ2VMaXN0IiwiZGF0YSIsImRlY28iLCJmaWx0ZXIiLCJpdGVtIiwiYmluZGluZyIsImtleSIsIm1hcCIsIngiLCJpZCIsImpvaW4iLCJuYXZLZXkiLCJpc05hdmlnYXRpb25Mb2FkaW5nIiwibG9hZGluZyIsIkNvbXBvbmVudCIsInR5cGUiLCJyZWR1Y2UiLCJjb21wb25lbnQiLCJmaWVsZHMiLCJxdWVyeSIsInNvcnQiLCJzb3J0aW5nIiwicmVzdWx0Iiwic3BsaXQiLCJjIiwicmVzdCIsIm9wdGlvbnMiLCJ2YXJpYWJsZXMiLCJzdGF0ZSIsImVxIiwicHJvcHMiLCJvd25Qcm9wcyIsIm5hdkJpbmRpbmdPYmoiLCJhZnRlciIsIldyYXBwZWQiLCJmbGF0TmF2aWdhdGlvbiIsIm5hdmlnYXRpb24iLCJwYXRoUHJvcCIsImNoaWxkcmVuIiwicGFyZW50IiwibmV3Q2hpbGRyZW4iLCJjaGlsZCIsIml0ZW1zIiwiZm9yRWFjaCIsInNsdWciLCJwdXNoIiwicGFnZUlkIiwiYmluZGluZ0lkIiwiYmluZGluZ09iaiIsIm5hbWUiLCJzZXRQYXRoIiwiY3VycmVudCIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBLElBQU1BLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVFDLFdBQVIsRUFBd0I7QUFDMUMsTUFBSSxPQUFPRCxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCLFdBQU9BLEtBQVA7QUFDRDtBQUNELE1BQUlBLE1BQU1FLE9BQU4sQ0FBYyxHQUFkLE1BQXVCLENBQUMsQ0FBNUIsRUFB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TztBQUNMbUIsa0JBQU1pQixJQUFOLENBQVdKLEtBQVg7QUFDRDtBQUNELGlCQUFPYixLQUFQO0FBQ0QsU0FyQm1CLEVBcUJqQixFQXJCaUIsQ0FBcEI7QUFzQkEsZUFBTyx1QkFBUVksV0FBUixFQUFxQixDQUFDLE9BQUQsQ0FBckIsRUFBZ0MsQ0FBQyxLQUFELENBQWhDLENBQVA7QUFDRCxPQTFCb0M7QUEyQnJDVSxlQUFTLGlCQUFDQyxPQUFELFNBQWdDO0FBQUEsWUFBcEJQLElBQW9CLFNBQXBCQSxJQUFvQjtBQUFBLFlBQVhuQixJQUFXOztBQUN2QyxZQUFNMkIsV0FBVyxPQUFHRCxXQUFXLEVBQWQsS0FBbUJQLFFBQVEsRUFBM0IsR0FBZ0NoRCxPQUFoQyxDQUF3QyxJQUF4QyxFQUE4QyxHQUE5QyxDQUFqQjtBQUNBdUMsdUJBQWVVLElBQWYsY0FBeUJwQixJQUF6QixJQUErQm1CLFVBQS9CLEVBQXFDUSxrQkFBckM7QUFDQSxlQUFPQSxRQUFQO0FBQ0Q7QUEvQm9DLEtBQXBCLENBQW5CO0FBaUNBLFdBQU87QUFDTGhCLDRCQURLO0FBRUxEO0FBRkssS0FBUDtBQUlELEdBL0NXLENBQWQ7O0FBa0RBLFNBQU8sd0JBQ0xwQyxNQURLLEVBRUwsZ0NBQWdCO0FBQUEsUUFBR2UsU0FBSCxTQUFHQSxTQUFIO0FBQUEsUUFBaUJXLElBQWpCOztBQUFBLFdBQTRCLDhCQUFDLFNBQUQsRUFBZUEsSUFBZixDQUE1QjtBQUFBLEdBQWhCLENBRkssRUFHTDtBQUFBLFdBQU0sSUFBTjtBQUFBLEdBSEssQ0FBUDtBQUlELEMiLCJmaWxlIjoiY21zL3BhZ2VzL2dldC1uYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoUHJvcHNPbkNoYW5nZSwgcmVuZGVyQ29tcG9uZW50IH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB1bmZsYXR0ZW4gZnJvbSAnb2x5bXAtdXRpbHMvdW5mbGF0dGVuJztcbmltcG9ydCB7IGdldCwgdXBwZXJGaXJzdCwgbG93ZXJGaXJzdCwgb3JkZXJCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBxdWVyeVBhZ2VzIH0gZnJvbSAnLi9ncWwvcXVlcnknO1xuXG4vLyBpbnRlcnBvbGF0ZSBhIHN0cmluZyB2YWx1ZSB1c2luZyBwcm9wc1xuY29uc3QgaW50ZXJwb2xhdGUgPSAodmFsdWUsIHByb3BzT3JGdW5jKSA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZS5pbmRleE9mKCd7JykgPT09IC0xKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKFxuICAgIC9cXHtcXHs/XFw6PyguKz8pXFx9P1xcfS9nLFxuICAgIChtLCB2KSA9PlxuICAgICAgdHlwZW9mIHByb3BzT3JGdW5jID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcHNPckZ1bmModiwgdilcbiAgICAgICAgOiBnZXQocHJvcHNPckZ1bmMsIHYsIHYpLFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlZCA9PiB7XG4gIGNvbnN0IGJlZm9yZSA9IGNvbXBvc2UoXG4gICAgcXVlcnlQYWdlcyxcbiAgICB3aXRoUHJvcHNPbkNoYW5nZShbJ3BhZ2VMaXN0J10sICh7IHBhZ2VMaXN0LCBkYXRhIH0pID0+IHtcbiAgICAgIGNvbnN0IGRlY28gPSBwYWdlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmJpbmRpbmcpO1xuICAgICAgY29uc3Qga2V5ID0gZGVjby5tYXAoeCA9PiBgJHt4LmlkfS0ke3guYmluZGluZ31gKS5qb2luKCd8Jyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYXZLZXk6IGtleSxcbiAgICAgICAgcGFnZUxpc3QsXG4gICAgICAgIGlzTmF2aWdhdGlvbkxvYWRpbmc6IGRhdGEubG9hZGluZyxcbiAgICAgIH07XG4gICAgfSksXG4gICAgd2l0aFByb3BzT25DaGFuZ2UoWyduYXZLZXknLCAncGFnZUxpc3QnXSwgKHsgcGFnZUxpc3QgfSkgPT4gKHtcbiAgICAgIENvbXBvbmVudDogcGFnZUxpc3RcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uYmluZGluZyAmJiBpdGVtLmJpbmRpbmcudHlwZSlcbiAgICAgICAgLnJlZHVjZSgoY29tcG9uZW50LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgdHlwZSwgZmllbGRzLCBxdWVyeSA9IHt9IH0gPSB2YWx1ZS5iaW5kaW5nO1xuICAgICAgICAgIGNvbnN0IHNvcnQgPSB2YWx1ZS5zb3J0aW5nXG4gICAgICAgICAgICA/IHZhbHVlLnNvcnRpbmcucmVkdWNlKChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbYywgLi4ucmVzdF0gPSBpdGVtLnNwbGl0KCcnKTtcbiAgICAgICAgICAgICAgICByZXN1bHRbcmVzdC5qb2luKCcnKV0gPSBjID09PSAnLScgPyAnREVTQycgOiAnQVNDJztcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgICAgIDoge307XG4gICAgICAgICAgcmV0dXJuIGdyYXBocWwoXG4gICAgICAgICAgICBncWxgXG4gICAgICAgICAgICAgIHF1ZXJ5ICR7bG93ZXJGaXJzdCh0eXBlKX1MaXN0KFxuICAgICAgICAgICAgICAgICRxdWVyeTogJHt1cHBlckZpcnN0KHR5cGUpfVF1ZXJ5LFxuICAgICAgICAgICAgICAgICRzb3J0OiAke3VwcGVyRmlyc3QodHlwZSl9U29ydFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpdGVtczogJHtsb3dlckZpcnN0KHR5cGUpfUxpc3QocXVlcnk6ICRxdWVyeSwgc29ydDogJHNvcnQpIHtcbiAgICAgICAgICAgICAgICAgICR7ZmllbGRzIHx8ICdpZCBuYW1lIHNsdWcnfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb3B0aW9uczogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IC4uLnF1ZXJ5LCAuLi57IHN0YXRlOiB7IGVxOiAnUFVCTElTSEVEJyB9IH0gfSxcbiAgICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHByb3BzOiAoeyBvd25Qcm9wcywgZGF0YSB9KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLm93blByb3BzLFxuICAgICAgICAgICAgICAgIG5hdkJpbmRpbmdPYmo6IHtcbiAgICAgICAgICAgICAgICAgIC4uLm93blByb3BzLm5hdkJpbmRpbmdPYmosXG4gICAgICAgICAgICAgICAgICBbdmFsdWUuaWRdOiBkYXRhLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaXNOYXZpZ2F0aW9uTG9hZGluZzpcbiAgICAgICAgICAgICAgICAgIG93blByb3BzLmlzTmF2aWdhdGlvbkxvYWRpbmcgfHwgZGF0YS5sb2FkaW5nLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKShjb21wb25lbnQpO1xuICAgICAgICB9LCBhZnRlcihXcmFwcGVkKSksXG4gICAgfSkpLFxuICApO1xuXG4gIGNvbnN0IGFmdGVyID0gd2l0aFByb3BzT25DaGFuZ2UoXG4gICAgWydpc05hdmlnYXRpb25Mb2FkaW5nJywgJ3BhZ2VMaXN0J10sXG4gICAgKHsgcGFnZUxpc3QsIGlzTmF2aWdhdGlvbkxvYWRpbmcsIG5hdkJpbmRpbmdPYmogfSkgPT4ge1xuICAgICAgY29uc3QgZmxhdE5hdmlnYXRpb24gPSBbXTtcbiAgICAgIGlmIChpc05hdmlnYXRpb25Mb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmF2aWdhdGlvbjogW10sXG4gICAgICAgICAgZmxhdE5hdmlnYXRpb246IFtdLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IHVuZmxhdHRlbihwYWdlTGlzdCwge1xuICAgICAgICBwYXRoUHJvcDogJ3BhdGhuYW1lJyxcbiAgICAgICAgc29ydDogKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdDaGlsZHJlbiA9IGNoaWxkcmVuLnJlZHVjZSgoc3RhdGUsIGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbmF2QmluZGluZ09iaiAmJiBuYXZCaW5kaW5nT2JqW2NoaWxkLmlkXTtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgIChkYXRhLml0ZW1zIHx8IFtdKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsdWcgPSBjaGlsZC5zbHVnXG4gICAgICAgICAgICAgICAgICA/IGludGVycG9sYXRlKGNoaWxkLnNsdWcsIGl0ZW0pXG4gICAgICAgICAgICAgICAgICA6IGl0ZW0uc2x1ZztcbiAgICAgICAgICAgICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIC4uLmNoaWxkLFxuICAgICAgICAgICAgICAgICAgcGFnZUlkOiBjaGlsZC5pZCxcbiAgICAgICAgICAgICAgICAgIGJpbmRpbmdJZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgIGJpbmRpbmdPYmo6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICBzbHVnLFxuICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgaWQ6IGAke2NoaWxkLmlkfS0tJHtpdGVtLmlkfWAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3RhdGUucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgfSwgW10pO1xuICAgICAgICAgIHJldHVybiBvcmRlckJ5KG5ld0NoaWxkcmVuLCBbJ29yZGVyJ10sIFsnYXNjJ10pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRQYXRoOiAoY3VycmVudCwgeyBzbHVnLCAuLi5yZXN0IH0pID0+IHtcbiAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IGAke2N1cnJlbnQgfHwgJyd9JHtzbHVnIHx8ICcnfWAucmVwbGFjZSgnLy8nLCAnLycpO1xuICAgICAgICAgIGZsYXROYXZpZ2F0aW9uLnB1c2goeyAuLi5yZXN0LCBzbHVnLCBwYXRobmFtZSB9KTtcbiAgICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hdmlnYXRpb24sXG4gICAgICAgIGZsYXROYXZpZ2F0aW9uLFxuICAgICAgfTtcbiAgICB9LFxuICApO1xuXG4gIHJldHVybiBjb21wb3NlKFxuICAgIGJlZm9yZSxcbiAgICByZW5kZXJDb21wb25lbnQoKHsgQ29tcG9uZW50LCAuLi5yZXN0IH0pID0+IDxDb21wb25lbnQgey4uLnJlc3R9IC8+KSxcbiAgKSgoKSA9PiBudWxsKTtcbn07XG4iXX0=
