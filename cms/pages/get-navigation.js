import _orderBy from 'lodash/orderBy';
import _lowerFirst from 'lodash/lowerFirst';
import _upperFirst from 'lodash/upperFirst';
import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n              query ', 'List(\n                $query: ', 'Query,\n                $sort: ', 'Sort\n              ) {\n                items: ', 'List(query: $query, sort: $sort) {\n                  ', '\n                }\n              }\n            '], ['\n              query ', 'List(\n                $query: ', 'Query,\n                $sort: ', 'Sort\n              ) {\n                items: ', 'List(query: $query, sort: $sort) {\n                  ', '\n                }\n              }\n            ']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose, withPropsOnChange, renderComponent } from 'recompose';
import unflatten from 'olymp-utils/unflatten';

import { queryPages } from './gql/query';

// interpolate a string value using props
var interpolate = function interpolate(value, propsOrFunc) {
  if (typeof value !== 'string') {
    return value;
  }
  if (value.indexOf('{') === -1) {
    return value;
  }
  return value.replace(/\{\{?\:?(.+?)\}?\}/g, function (m, v) {
    return typeof propsOrFunc === 'function' ? propsOrFunc(v, v) : _get(propsOrFunc, v, v);
  });
};

export default (function (Wrapped) {
  var before = compose(queryPages, withPropsOnChange(['pageList'], function (_ref) {
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
  }), withPropsOnChange(['navKey', 'pageList'], function (_ref2) {
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
        return graphql(gql(_templateObject, _lowerFirst(type), _upperFirst(type), _upperFirst(type), _lowerFirst(type), fields || 'id name slug'), {
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

  var after = withPropsOnChange(['isNavigationLoading', 'pageList'], function (_ref4) {
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
    var navigation = unflatten(pageList, {
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
        return _orderBy(newChildren, ['order'], ['asc']);
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

  return compose(before, renderComponent(function (_ref6) {
    var Component = _ref6.Component,
        rest = _objectWithoutProperties(_ref6, ['Component']);

    return React.createElement(Component, rest);
  }))(function () {
    return null;
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2dldC1uYXZpZ2F0aW9uLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImdxbCIsImdyYXBocWwiLCJjb21wb3NlIiwid2l0aFByb3BzT25DaGFuZ2UiLCJyZW5kZXJDb21wb25lbnQiLCJ1bmZsYXR0ZW4iLCJxdWVyeVBhZ2VzIiwiaW50ZXJwb2xhdGUiLCJ2YWx1ZSIsInByb3BzT3JGdW5jIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJtIiwidiIsImJlZm9yZSIsInBhZ2VMaXN0IiwiZGF0YSIsImRlY28iLCJmaWx0ZXIiLCJpdGVtIiwiYmluZGluZyIsImtleSIsIm1hcCIsIngiLCJpZCIsImpvaW4iLCJuYXZLZXkiLCJpc05hdmlnYXRpb25Mb2FkaW5nIiwibG9hZGluZyIsIkNvbXBvbmVudCIsInR5cGUiLCJyZWR1Y2UiLCJjb21wb25lbnQiLCJmaWVsZHMiLCJxdWVyeSIsInNvcnQiLCJzb3J0aW5nIiwicmVzdWx0Iiwic3BsaXQiLCJjIiwicmVzdCIsIm9wdGlvbnMiLCJ2YXJpYWJsZXMiLCJzdGF0ZSIsImVxIiwicHJvcHMiLCJvd25Qcm9wcyIsIm5hdkJpbmRpbmdPYmoiLCJhZnRlciIsIldyYXBwZWQiLCJmbGF0TmF2aWdhdGlvbiIsIm5hdmlnYXRpb24iLCJwYXRoUHJvcCIsImNoaWxkcmVuIiwicGFyZW50IiwibmV3Q2hpbGRyZW4iLCJjaGlsZCIsIml0ZW1zIiwiZm9yRWFjaCIsInNsdWciLCJwdXNoIiwicGFnZUlkIiwiYmluZGluZ0lkIiwiYmluZGluZ09iaiIsIm5hbWUiLCJzZXRQYXRoIiwiY3VycmVudCIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLGFBQWhCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixjQUF4QjtBQUNBLFNBQVNDLE9BQVQsRUFBa0JDLGlCQUFsQixFQUFxQ0MsZUFBckMsUUFBNEQs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R0FBaEIsQ0FGSyxFQUdMO0FBQUEsV0FBTSxJQUFOO0FBQUEsR0FISyxDQUFQO0FBSUQsQ0EvR0QiLCJmaWxlIjoicGFja2FnZXMvcGFnZXMvZ2V0LW5hdmlnYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlLCByZW5kZXJDb21wb25lbnQgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHVuZmxhdHRlbiBmcm9tICdvbHltcC11dGlscy91bmZsYXR0ZW4nO1xuaW1wb3J0IHsgZ2V0LCB1cHBlckZpcnN0LCBsb3dlckZpcnN0LCBvcmRlckJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHF1ZXJ5UGFnZXMgfSBmcm9tICcuL2dxbC9xdWVyeSc7XG5cbi8vIGludGVycG9sYXRlIGEgc3RyaW5nIHZhbHVlIHVzaW5nIHByb3BzXG5jb25zdCBpbnRlcnBvbGF0ZSA9ICh2YWx1ZSwgcHJvcHNPckZ1bmMpID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHZhbHVlLmluZGV4T2YoJ3snKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoXG4gICAgL1xce1xcez9cXDo/KC4rPylcXH0/XFx9L2csXG4gICAgKG0sIHYpID0+XG4gICAgICB0eXBlb2YgcHJvcHNPckZ1bmMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wc09yRnVuYyh2LCB2KVxuICAgICAgICA6IGdldChwcm9wc09yRnVuYywgdiwgdiksXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVkID0+IHtcbiAgY29uc3QgYmVmb3JlID0gY29tcG9zZShcbiAgICBxdWVyeVBhZ2VzLFxuICAgIHdpdGhQcm9wc09uQ2hhbmdlKFsncGFnZUxpc3QnXSwgKHsgcGFnZUxpc3QsIGRhdGEgfSkgPT4ge1xuICAgICAgY29uc3QgZGVjbyA9IHBhZ2VMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uYmluZGluZyk7XG4gICAgICBjb25zdCBrZXkgPSBkZWNvLm1hcCh4ID0+IGAke3guaWR9LSR7eC5iaW5kaW5nfWApLmpvaW4oJ3wnKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hdktleToga2V5LFxuICAgICAgICBwYWdlTGlzdCxcbiAgICAgICAgaXNOYXZpZ2F0aW9uTG9hZGluZzogZGF0YS5sb2FkaW5nLFxuICAgICAgfTtcbiAgICB9KSxcbiAgICB3aXRoUHJvcHNPbkNoYW5nZShbJ25hdktleScsICdwYWdlTGlzdCddLCAoeyBwYWdlTGlzdCB9KSA9PiAoe1xuICAgICAgQ29tcG9uZW50OiBwYWdlTGlzdFxuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5iaW5kaW5nICYmIGl0ZW0uYmluZGluZy50eXBlKVxuICAgICAgICAucmVkdWNlKChjb21wb25lbnQsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyB0eXBlLCBmaWVsZHMsIHF1ZXJ5ID0ge30gfSA9IHZhbHVlLmJpbmRpbmc7XG4gICAgICAgICAgY29uc3Qgc29ydCA9IHZhbHVlLnNvcnRpbmdcbiAgICAgICAgICAgID8gdmFsdWUuc29ydGluZy5yZWR1Y2UoKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtjLCAuLi5yZXN0XSA9IGl0ZW0uc3BsaXQoJycpO1xuICAgICAgICAgICAgICAgIHJlc3VsdFtyZXN0LmpvaW4oJycpXSA9IGMgPT09ICctJyA/ICdERVNDJyA6ICdBU0MnO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgIH0sIHt9KVxuICAgICAgICAgICAgOiB7fTtcbiAgICAgICAgICByZXR1cm4gZ3JhcGhxbChcbiAgICAgICAgICAgIGdxbGBcbiAgICAgICAgICAgICAgcXVlcnkgJHtsb3dlckZpcnN0KHR5cGUpfUxpc3QoXG4gICAgICAgICAgICAgICAgJHF1ZXJ5OiAke3VwcGVyRmlyc3QodHlwZSl9UXVlcnksXG4gICAgICAgICAgICAgICAgJHNvcnQ6ICR7dXBwZXJGaXJzdCh0eXBlKX1Tb3J0XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAke2xvd2VyRmlyc3QodHlwZSl9TGlzdChxdWVyeTogJHF1ZXJ5LCBzb3J0OiAkc29ydCkge1xuICAgICAgICAgICAgICAgICAgJHtmaWVsZHMgfHwgJ2lkIG5hbWUgc2x1Zyd9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvcHRpb25zOiAoKSA9PiAoe1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgLi4ucXVlcnksIC4uLnsgc3RhdGU6IHsgZXE6ICdQVUJMSVNIRUQnIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgcHJvcHM6ICh7IG93blByb3BzLCBkYXRhIH0pID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ub3duUHJvcHMsXG4gICAgICAgICAgICAgICAgbmF2QmluZGluZ09iajoge1xuICAgICAgICAgICAgICAgICAgLi4ub3duUHJvcHMubmF2QmluZGluZ09iaixcbiAgICAgICAgICAgICAgICAgIFt2YWx1ZS5pZF06IGRhdGEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpc05hdmlnYXRpb25Mb2FkaW5nOlxuICAgICAgICAgICAgICAgICAgb3duUHJvcHMuaXNOYXZpZ2F0aW9uTG9hZGluZyB8fCBkYXRhLmxvYWRpbmcsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICApKGNvbXBvbmVudCk7XG4gICAgICAgIH0sIGFmdGVyKFdyYXBwZWQpKSxcbiAgICB9KSksXG4gICk7XG5cbiAgY29uc3QgYWZ0ZXIgPSB3aXRoUHJvcHNPbkNoYW5nZShcbiAgICBbJ2lzTmF2aWdhdGlvbkxvYWRpbmcnLCAncGFnZUxpc3QnXSxcbiAgICAoeyBwYWdlTGlzdCwgaXNOYXZpZ2F0aW9uTG9hZGluZywgbmF2QmluZGluZ09iaiB9KSA9PiB7XG4gICAgICBjb25zdCBmbGF0TmF2aWdhdGlvbiA9IFtdO1xuICAgICAgaWYgKGlzTmF2aWdhdGlvbkxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYXZpZ2F0aW9uOiBbXSxcbiAgICAgICAgICBmbGF0TmF2aWdhdGlvbjogW10sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBjb25zdCBuYXZpZ2F0aW9uID0gdW5mbGF0dGVuKHBhZ2VMaXN0LCB7XG4gICAgICAgIHBhdGhQcm9wOiAncGF0aG5hbWUnLFxuICAgICAgICBzb3J0OiAoY2hpbGRyZW4sIHBhcmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0NoaWxkcmVuID0gY2hpbGRyZW4ucmVkdWNlKChzdGF0ZSwgY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuYXZCaW5kaW5nT2JqICYmIG5hdkJpbmRpbmdPYmpbY2hpbGQuaWRdO1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgKGRhdGEuaXRlbXMgfHwgW10pLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2x1ZyA9IGNoaWxkLnNsdWdcbiAgICAgICAgICAgICAgICAgID8gaW50ZXJwb2xhdGUoY2hpbGQuc2x1ZywgaXRlbSlcbiAgICAgICAgICAgICAgICAgIDogaXRlbS5zbHVnO1xuICAgICAgICAgICAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgLi4uY2hpbGQsXG4gICAgICAgICAgICAgICAgICBwYWdlSWQ6IGNoaWxkLmlkLFxuICAgICAgICAgICAgICAgICAgYmluZGluZ0lkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgYmluZGluZ09iajogaXRlbSxcbiAgICAgICAgICAgICAgICAgIHNsdWcsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICBpZDogYCR7Y2hpbGQuaWR9LS0ke2l0ZW0uaWR9YCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdGF0ZS5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgcmV0dXJuIG9yZGVyQnkobmV3Q2hpbGRyZW4sIFsnb3JkZXInXSwgWydhc2MnXSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFBhdGg6IChjdXJyZW50LCB7IHNsdWcsIC4uLnJlc3QgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gYCR7Y3VycmVudCB8fCAnJ30ke3NsdWcgfHwgJyd9YC5yZXBsYWNlKCcvLycsICcvJyk7XG4gICAgICAgICAgZmxhdE5hdmlnYXRpb24ucHVzaCh7IC4uLnJlc3QsIHNsdWcsIHBhdGhuYW1lIH0pO1xuICAgICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmF2aWdhdGlvbixcbiAgICAgICAgZmxhdE5hdmlnYXRpb24sXG4gICAgICB9O1xuICAgIH0sXG4gICk7XG5cbiAgcmV0dXJuIGNvbXBvc2UoXG4gICAgYmVmb3JlLFxuICAgIHJlbmRlckNvbXBvbmVudCgoeyBDb21wb25lbnQsIC4uLnJlc3QgfSkgPT4gPENvbXBvbmVudCB7Li4ucmVzdH0gLz4pLFxuICApKCgpID0+IG51bGwpO1xufTtcbiJdfQ==
