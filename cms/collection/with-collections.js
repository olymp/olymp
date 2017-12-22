import _get from 'lodash/get';
import _sortBy from 'lodash/sortBy';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      query schema {\n        schema: __schema {\n          types {\n            name\n            description\n            interfaces {\n              name\n            }\n            fields {\n              name\n              description\n              type {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n    '], ['\n      query schema {\n        schema: __schema {\n          types {\n            name\n            description\n            interfaces {\n              name\n            }\n            fields {\n              name\n              description\n              type {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n    ']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { compose, withPropsOnChange } from 'recompose';
import { getSpecialFields } from './utils';

var enhance = compose(graphql(gql(_templateObject)), withPropsOnChange(['data'], function (_ref) {
  var data = _ref.data;
  return {
    list: _sortBy(data.schema && data.schema.types ? data.schema.types.filter(function (x) {
      return (x.interfaces || []).filter(function (y) {
        return y.name === 'CollectionType' || y.name === 'CollectionInterface';
      }).length;
    }) : [], ['order', 'name']).map(function (collection) {
      return getSpecialFields(collection);
    })
  };
}), withPropsOnChange(['list'], function (_ref2) {
  var _ref2$list = _ref2.list,
      list = _ref2$list === undefined ? [] : _ref2$list;

  var group = function group() {
    var groups = {};
    list.forEach(function (collection) {
      var group = _get(collection, 'specialFields.group');

      if (!groups[group]) {
        groups[group] = [];
      }
      groups[group].push(collection);
    });

    // Collections innerhalb Gruppe sortieren
    Object.keys(groups).forEach(function (key) {
      groups[key] = _sortBy(groups[key], ['specialFields.order', 'name']);
    });

    // Undefined-Gruppe auflösen
    if (groups.undefined) {
      groups.undefined.forEach(function (collection) {
        var name = _get(collection, _get(collection, 'specialFields.label'), collection.name);

        if (!groups[name]) {
          groups[name] = [];
        }

        groups[name].push(collection);
      });

      delete groups.undefined;
    }

    // Gruppen sortieren
    var orderedGroups = {};
    Object.keys(groups).sort().forEach(function (key) {
      orderedGroups[key] = groups[key];
    });

    return orderedGroups;
  };

  return {
    group: group()
  };
}));

export default (function (WrappedComponent) {
  var _class;

  var WithCollectionsComponent = enhance(_class = function (_Component) {
    _inherits(WithCollectionsComponent, _Component);

    function WithCollectionsComponent() {
      _classCallCheck(this, WithCollectionsComponent);

      return _possibleConstructorReturn(this, (WithCollectionsComponent.__proto__ || Object.getPrototypeOf(WithCollectionsComponent)).apply(this, arguments));
    }

    _createClass(WithCollectionsComponent, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            data = _props.data,
            list = _props.list,
            group = _props.group,
            rest = _objectWithoutProperties(_props, ['data', 'list', 'group']);

        return React.createElement(WrappedComponent, _extends({}, rest, {
          collectionList: list,
          collectionTree: group
        }));
      }
    }]);

    return WithCollectionsComponent;
  }(Component)) || _class;

  return WithCollectionsComponent;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vd2l0aC1jb2xsZWN0aW9ucy5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJncmFwaHFsIiwiZ3FsIiwiY29tcG9zZSIsIndpdGhQcm9wc09uQ2hhbmdlIiwiZ2V0U3BlY2lhbEZpZWxkcyIsImVuaGFuY2UiLCJkYXRhIiwibGlzdCIsInNjaGVtYSIsInR5cGVzIiwiZmlsdGVyIiwieCIsImludGVyZmFjZXMiLCJ5IiwibmFtZSIsImxlbmd0aCIsIm1hcCIsImNvbGxlY3Rpb24iLCJncm91cCIsImdyb3VwcyIsImZvckVhY2giLCJwdXNoIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInVuZGVmaW5lZCIsIm9yZGVyZWRHcm91cHMiLCJzb3J0IiwiV2l0aENvbGxlY3Rpb25zQ29tcG9uZW50IiwicHJvcHMiLCJyZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGNBQXhCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixhQUFoQjs7QUFFQSxTQUFTQyxPQUFULEVBQWtCQyxpQkFBbEIsUUFBMkMsV0FBM0M7QUFDQSxTQUFTQyxnQkFBVCxRQUFpQyxTQUFqQzs7QUFFQSxJQUFNQyxVQUFVSCxRQUNkRixRQUNFQyxHQURGLGtCQURjLEVBd0JkRSxrQkFBa0IsQ0FBQyxNQUFELENBQWxCLEVBQTRCO0FBQUEsTUFBR0csSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBZTtBQUN6Q0MsVUFBTSxRQUNKRCxLQUFLRSxNQUFMLElBQWVGLEtBQUtFLE1BQUwsQ0FBWUMsS0FBM0IsR0FDSUgsS0FBS0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCQyxNQUFsQixDQUNFO0FBQUEsYUFDRSxDQUFDQyxFQUFFQyxVQUFGLElBQWdCLEVBQWpCLEVBQXFCRixNQUFyQixDQUNFO0FBQUEsZUFDRUcsRUFBRUMsSUFBRixLQUFXLGdCQUFYLElBQ0FELEVBQUVDLElBQUYsS0FBVyxxQkFGYjtBQUFBLE9BREYsRUFJRUMsTUFMSjtBQUFBLEtBREYsQ0FESixHQVNJLEVBVkEsRUFXSixDQUFDLE9BQUQsRUFBVSxNQUFWLENBWEksRUFZSkMsR0FaSSxDQVlBO0FBQUEsYUFBY1osaUJBQWlCYSxVQUFqQixDQUFkO0FBQUEsS0FaQTtBQURtQyxHQUFmO0FBQUEsQ0FBNUIsQ0F4QmMsRUF1Q2RkLGtCQUFrQixDQUFDLE1BQUQsQ0FBbEIsRUFBNEIsaUJBQW1CO0FBQUEseUJBQWhCSSxJQUFnQjtBQUFBLE1BQWhCQSxJQUFnQiw4QkFBVCxFQUFTOztBQUM3QyxNQUFNVyxRQUFRLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixRQUFNQyxTQUFTLEVBQWY7QUFDQVosU0FBS2EsT0FBTCxDQUFhLHNCQUFjO0FBQ3pCLFVBQU1GLFFBQVEsS0FBSUQsVUFBSixFQUFnQixxQkFBaEIsQ0FBZDs7QUFFQSxVQUFJLENBQUNFLE9BQU9ELEtBQVAsQ0FBTCxFQUFvQjtBQUNsQkMsZUFBT0QsS0FBUCxJQUFnQixFQUFoQjtBQUNEO0FBQ0RDLGFBQU9ELEtBQVAsRUFBY0csSUFBZCxDQUFtQkosVUFBbkI7QUFDRCxLQVBEOztBQVNBO0FBQ0FLLFdBQU9DLElBQVAsQ0FBWUosTUFBWixFQUFvQkMsT0FBcEIsQ0FBNEIsZUFBTztBQUNqQ0QsYUFBT0ssR0FBUCxJQUFjLFFBQU9MLE9BQU9LLEdBQVAsQ0FBUCxFQUFvQixDQUFDLHFCQUFELEVBQXdCLE1BQXhCLENBQXBCLENBQWQ7QUFDRCxLQUZEOztBQUlBO0FBQ0EsUUFBSUwsT0FBT00sU0FBWCxFQUFzQjtBQUNwQk4sYUFBT00sU0FBUCxDQUFpQkwsT0FBakIsQ0FBeUIsc0JBQWM7QUFDckMsWUFBTU4sT0FBTyxLQUNYRyxVQURXLEVBRVgsS0FBSUEsVUFBSixFQUFnQixxQkFBaEIsQ0FGVyxFQUdYQSxXQUFXSCxJQUhBLENBQWI7O0FBTUEsWUFBSSxDQUFDSyxPQUFPTCxJQUFQLENBQUwsRUFBbUI7QUFDakJLLGlCQUFPTCxJQUFQLElBQWUsRUFBZjtBQUNEOztBQUVESyxlQUFPTCxJQUFQLEVBQWFPLElBQWIsQ0FBa0JKLFVBQWxCO0FBQ0QsT0FaRDs7QUFjQSxhQUFPRSxPQUFPTSxTQUFkO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFNQyxnQkFBZ0IsRUFBdEI7QUFDQUosV0FBT0MsSUFBUCxDQUFZSixNQUFaLEVBQ0dRLElBREgsR0FFR1AsT0FGSCxDQUVXLGVBQU87QUFDZE0sb0JBQWNGLEdBQWQsSUFBcUJMLE9BQU9LLEdBQVAsQ0FBckI7QUFDRCxLQUpIOztBQU1BLFdBQU9FLGFBQVA7QUFDRCxHQTVDRDs7QUE4Q0EsU0FBTztBQUNMUixXQUFPQTtBQURGLEdBQVA7QUFHRCxDQWxERCxDQXZDYyxDQUFoQjs7QUE0RkEsZ0JBQWUsNEJBQW9CO0FBQUE7O0FBQUEsTUFFM0JVLHdCQUYyQixHQUNoQ3ZCLE9BRGdDO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkFHdEI7QUFBQSxxQkFDZ0MsS0FBS3dCLEtBRHJDO0FBQUEsWUFDQ3ZCLElBREQsVUFDQ0EsSUFERDtBQUFBLFlBQ09DLElBRFAsVUFDT0EsSUFEUDtBQUFBLFlBQ2FXLEtBRGIsVUFDYUEsS0FEYjtBQUFBLFlBQ3VCWSxJQUR2Qjs7QUFHUCxlQUNFLG9CQUFDLGdCQUFELGVBQ01BLElBRE47QUFFRSwwQkFBZ0J2QixJQUZsQjtBQUdFLDBCQUFnQlc7QUFIbEIsV0FERjtBQU9EO0FBYjhCOztBQUFBO0FBQUEsSUFFTW5CLFNBRk47O0FBZ0JqQyxTQUFPNkIsd0JBQVA7QUFDRCxDQWpCRCIsImZpbGUiOiJwYWNrYWdlcy9jb2xsZWN0aW9uL3dpdGgtY29sbGVjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHNvcnRCeSwgZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGdldFNwZWNpYWxGaWVsZHMgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIGdyYXBocWwoXG4gICAgZ3FsYFxuICAgICAgcXVlcnkgc2NoZW1hIHtcbiAgICAgICAgc2NoZW1hOiBfX3NjaGVtYSB7XG4gICAgICAgICAgdHlwZXMge1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGludGVyZmFjZXMge1xuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgIHR5cGUge1xuICAgICAgICAgICAgICAgIGtpbmRcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICApLFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ2RhdGEnXSwgKHsgZGF0YSB9KSA9PiAoe1xuICAgIGxpc3Q6IHNvcnRCeShcbiAgICAgIGRhdGEuc2NoZW1hICYmIGRhdGEuc2NoZW1hLnR5cGVzXG4gICAgICAgID8gZGF0YS5zY2hlbWEudHlwZXMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PlxuICAgICAgICAgICAgICAoeC5pbnRlcmZhY2VzIHx8IFtdKS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgeSA9PlxuICAgICAgICAgICAgICAgICAgeS5uYW1lID09PSAnQ29sbGVjdGlvblR5cGUnIHx8XG4gICAgICAgICAgICAgICAgICB5Lm5hbWUgPT09ICdDb2xsZWN0aW9uSW50ZXJmYWNlJyxcbiAgICAgICAgICAgICAgKS5sZW5ndGgsXG4gICAgICAgICAgKVxuICAgICAgICA6IFtdLFxuICAgICAgWydvcmRlcicsICduYW1lJ10sXG4gICAgKS5tYXAoY29sbGVjdGlvbiA9PiBnZXRTcGVjaWFsRmllbGRzKGNvbGxlY3Rpb24pKSxcbiAgfSkpLFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ2xpc3QnXSwgKHsgbGlzdCA9IFtdIH0pID0+IHtcbiAgICBjb25zdCBncm91cCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgICAgbGlzdC5mb3JFYWNoKGNvbGxlY3Rpb24gPT4ge1xuICAgICAgICBjb25zdCBncm91cCA9IGdldChjb2xsZWN0aW9uLCAnc3BlY2lhbEZpZWxkcy5ncm91cCcpO1xuXG4gICAgICAgIGlmICghZ3JvdXBzW2dyb3VwXSkge1xuICAgICAgICAgIGdyb3Vwc1tncm91cF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBncm91cHNbZ3JvdXBdLnB1c2goY29sbGVjdGlvbik7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ29sbGVjdGlvbnMgaW5uZXJoYWxiIEdydXBwZSBzb3J0aWVyZW5cbiAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBncm91cHNba2V5XSA9IHNvcnRCeShncm91cHNba2V5XSwgWydzcGVjaWFsRmllbGRzLm9yZGVyJywgJ25hbWUnXSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gVW5kZWZpbmVkLUdydXBwZSBhdWZsw7ZzZW5cbiAgICAgIGlmIChncm91cHMudW5kZWZpbmVkKSB7XG4gICAgICAgIGdyb3Vwcy51bmRlZmluZWQuZm9yRWFjaChjb2xsZWN0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gZ2V0KFxuICAgICAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgICAgIGdldChjb2xsZWN0aW9uLCAnc3BlY2lhbEZpZWxkcy5sYWJlbCcpLFxuICAgICAgICAgICAgY29sbGVjdGlvbi5uYW1lLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoIWdyb3Vwc1tuYW1lXSkge1xuICAgICAgICAgICAgZ3JvdXBzW25hbWVdID0gW107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZ3JvdXBzW25hbWVdLnB1c2goY29sbGVjdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRlbGV0ZSBncm91cHMudW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICAvLyBHcnVwcGVuIHNvcnRpZXJlblxuICAgICAgY29uc3Qgb3JkZXJlZEdyb3VwcyA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKVxuICAgICAgICAuc29ydCgpXG4gICAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgb3JkZXJlZEdyb3Vwc1trZXldID0gZ3JvdXBzW2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gb3JkZXJlZEdyb3VwcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdyb3VwOiBncm91cCgpLFxuICAgIH07XG4gIH0pLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlZENvbXBvbmVudCA9PiB7XG4gIEBlbmhhbmNlXG4gIGNsYXNzIFdpdGhDb2xsZWN0aW9uc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBkYXRhLCBsaXN0LCBncm91cCwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdyYXBwZWRDb21wb25lbnRcbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICBjb2xsZWN0aW9uTGlzdD17bGlzdH1cbiAgICAgICAgICBjb2xsZWN0aW9uVHJlZT17Z3JvdXB9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBXaXRoQ29sbGVjdGlvbnNDb21wb25lbnQ7XG59O1xuIl19
