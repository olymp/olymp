'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _sortBy2 = require('lodash/sortBy');

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      query schema {\n        schema: __schema {\n          types {\n            name\n            description\n            interfaces {\n              name\n            }\n            fields {\n              name\n              description\n              type {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n    '], ['\n      query schema {\n        schema: __schema {\n          types {\n            name\n            description\n            interfaces {\n              name\n            }\n            fields {\n              name\n              description\n              type {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _recompose = require('recompose');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var enhance = (0, _recompose.compose)((0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject)), (0, _recompose.withPropsOnChange)(['data'], function (_ref) {
  var data = _ref.data;
  return {
    list: (0, _sortBy3.default)(data.schema && data.schema.types ? data.schema.types.filter(function (x) {
      return (x.interfaces || []).filter(function (y) {
        return y.name === 'CollectionType' || y.name === 'CollectionInterface';
      }).length;
    }) : [], ['order', 'name']).map(function (collection) {
      return (0, _utils.getSpecialFields)(collection);
    })
  };
}), (0, _recompose.withPropsOnChange)(['list'], function (_ref2) {
  var _ref2$list = _ref2.list,
      list = _ref2$list === undefined ? [] : _ref2$list;

  var group = function group() {
    var groups = {};
    list.forEach(function (collection) {
      var group = (0, _get3.default)(collection, 'specialFields.group');

      if (!groups[group]) {
        groups[group] = [];
      }
      groups[group].push(collection);
    });

    // Collections innerhalb Gruppe sortieren
    Object.keys(groups).forEach(function (key) {
      groups[key] = (0, _sortBy3.default)(groups[key], ['specialFields.order', 'name']);
    });

    // Undefined-Gruppe auflösen
    if (groups.undefined) {
      groups.undefined.forEach(function (collection) {
        var name = (0, _get3.default)(collection, (0, _get3.default)(collection, 'specialFields.label'), collection.name);

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

exports.default = function (WrappedComponent) {
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

        return _react2.default.createElement(WrappedComponent, _extends({}, rest, {
          collectionList: list,
          collectionTree: group
        }));
      }
    }]);

    return WithCollectionsComponent;
  }(_react.Component)) || _class;

  return WithCollectionsComponent;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3dpdGgtY29sbGVjdGlvbnMuZXM2Il0sIm5hbWVzIjpbImVuaGFuY2UiLCJkYXRhIiwibGlzdCIsInNjaGVtYSIsInR5cGVzIiwiZmlsdGVyIiwieCIsImludGVyZmFjZXMiLCJ5IiwibmFtZSIsImxlbmd0aCIsIm1hcCIsImNvbGxlY3Rpb24iLCJncm91cCIsImdyb3VwcyIsImZvckVhY2giLCJwdXNoIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInVuZGVmaW5lZCIsIm9yZGVyZWRHcm91cHMiLCJzb3J0IiwiV2l0aENvbGxlY3Rpb25zQ29tcG9uZW50IiwicHJvcHMiLCJyZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLHdCQUNkLHFFQURjLEVBd0JkLGtDQUFrQixDQUFDLE1BQUQsQ0FBbEIsRUFBNEI7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUFlO0FBQ3pDQyxVQUFNLHNCQUNKRCxLQUFLRSxNQUFMLElBQWVGLEtBQUtFLE1BQUwsQ0FBWUMsS0FBM0IsR0FDSUgsS0FBS0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCQyxNQUFsQixDQUNFO0FBQUEsYUFDRSxDQUFDQyxFQUFFQyxVQUFGLElBQWdCLEVBQWpCLEVBQXFCRixNQUFyQixDQUNFO0FBQUEsZUFDRUcsRUFBRUMsSUFBRixLQUFXLGdCQUFYLElBQ0FELEVBQUVDLElBQUYsS0FBVyxxQkFGYjtBQUFBLE9BREYsRUFJRUMsTUFMSjtBQUFBLEtBREYsQ0FESixHQVNJLEVBVkEsRUFXSixDQUFDLE9BQUQsRUFBVSxNQUFWLENBWEksRUFZSkMsR0FaSSxDQVlBO0FBQUEsYUFBYyw2QkFBaUJDLFVBQWpCLENBQWQ7QUFBQSxLQVpBO0FBRG1DLEdBQWY7QUFBQSxDQUE1QixDQXhCYyxFQXVDZCxrQ0FBa0IsQ0FBQyxNQUFELENBQWxCLEVBQTRCLGlCQUFtQjtBQUFBLHlCQUFoQlYsSUFBZ0I7QUFBQSxNQUFoQkEsSUFBZ0IsOEJBQVQsRUFBUzs7QUFDN0MsTUFBTVcsUUFBUSxTQUFSQSxLQUFRLEdBQU07QUFDbEIsUUFBTUMsU0FBUyxFQUFmO0FBQ0FaLFNBQUthLE9BQUwsQ0FBYSxzQkFBYztBQUN6QixVQUFNRixRQUFRLG1CQUFJRCxVQUFKLEVBQWdCLHFCQUFoQixDQUFkOztBQUVBLFVBQUksQ0FBQ0UsT0FBT0QsS0FBUCxDQUFMLEVBQW9CO0FBQ2xCQyxlQUFPRCxLQUFQLElBQWdCLEVBQWhCO0FBQ0Q7QUFDREMsYUFBT0QsS0FBUCxFQUFjRyxJQUFkLENBQW1CSixVQUFuQjtBQUNELEtBUEQ7O0FBU0E7QUFDQUssV0FBT0MsSUFBUCxDQUFZSixNQUFaLEVBQW9CQyxPQUFwQixDQUE0QixlQUFPO0FBQ2pDRCxhQUFPSyxHQUFQLElBQWMsc0JBQU9MLE9BQU9LLEdBQVAsQ0FBUCxFQUFvQixDQUFDLHFCQUFELEVBQXdCLE1BQXhCLENBQXBCLENBQWQ7QUFDRCxLQUZEOztBQUlBO0FBQ0EsUUFBSUwsT0FBT00sU0FBWCxFQUFzQjtBQUNwQk4sYUFBT00sU0FBUCxDQUFpQkwsT0FBakIsQ0FBeUIsc0JBQWM7QUFDckMsWUFBTU4sT0FBTyxtQkFDWEcsVUFEVyxFQUVYLG1CQUFJQSxVQUFKLEVBQWdCLHFCQUFoQixDQUZXLEVBR1hBLFdBQVdILElBSEEsQ0FBYjs7QUFNQSxZQUFJLENBQUNLLE9BQU9MLElBQVAsQ0FBTCxFQUFtQjtBQUNqQkssaUJBQU9MLElBQVAsSUFBZSxFQUFmO0FBQ0Q7O0FBRURLLGVBQU9MLElBQVAsRUFBYU8sSUFBYixDQUFrQkosVUFBbEI7QUFDRCxPQVpEOztBQWNBLGFBQU9FLE9BQU9NLFNBQWQ7QUFDRDs7QUFFRDtBQUNBLFFBQU1DLGdCQUFnQixFQUF0QjtBQUNBSixXQUFPQyxJQUFQLENBQVlKLE1BQVosRUFDR1EsSUFESCxHQUVHUCxPQUZILENBRVcsZUFBTztBQUNkTSxvQkFBY0YsR0FBZCxJQUFxQkwsT0FBT0ssR0FBUCxDQUFyQjtBQUNELEtBSkg7O0FBTUEsV0FBT0UsYUFBUDtBQUNELEdBNUNEOztBQThDQSxTQUFPO0FBQ0xSLFdBQU9BO0FBREYsR0FBUDtBQUdELENBbERELENBdkNjLENBQWhCOztrQkE0RmUsNEJBQW9CO0FBQUE7O0FBQUEsTUFFM0JVLHdCQUYyQixHQUNoQ3ZCLE9BRGdDO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkFHdEI7QUFBQSxxQkFDZ0MsS0FBS3dCLEtBRHJDO0FBQUEsWUFDQ3ZCLElBREQsVUFDQ0EsSUFERDtBQUFBLFlBQ09DLElBRFAsVUFDT0EsSUFEUDtBQUFBLFlBQ2FXLEtBRGIsVUFDYUEsS0FEYjtBQUFBLFlBQ3VCWSxJQUR2Qjs7QUFHUCxlQUNFLDhCQUFDLGdCQUFELGVBQ01BLElBRE47QUFFRSwwQkFBZ0J2QixJQUZsQjtBQUdFLDBCQUFnQlc7QUFIbEIsV0FERjtBQU9EO0FBYjhCOztBQUFBO0FBQUE7O0FBZ0JqQyxTQUFPVSx3QkFBUDtBQUNELEMiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vd2l0aC1jb2xsZWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgc29ydEJ5LCBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFByb3BzT25DaGFuZ2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgZ2V0U3BlY2lhbEZpZWxkcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgZ3JhcGhxbChcbiAgICBncWxgXG4gICAgICBxdWVyeSBzY2hlbWEge1xuICAgICAgICBzY2hlbWE6IF9fc2NoZW1hIHtcbiAgICAgICAgICB0eXBlcyB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgaW50ZXJmYWNlcyB7XG4gICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgdHlwZSB7XG4gICAgICAgICAgICAgICAga2luZFxuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gICksXG4gIHdpdGhQcm9wc09uQ2hhbmdlKFsnZGF0YSddLCAoeyBkYXRhIH0pID0+ICh7XG4gICAgbGlzdDogc29ydEJ5KFxuICAgICAgZGF0YS5zY2hlbWEgJiYgZGF0YS5zY2hlbWEudHlwZXNcbiAgICAgICAgPyBkYXRhLnNjaGVtYS50eXBlcy5maWx0ZXIoXG4gICAgICAgICAgICB4ID0+XG4gICAgICAgICAgICAgICh4LmludGVyZmFjZXMgfHwgW10pLmZpbHRlcihcbiAgICAgICAgICAgICAgICB5ID0+XG4gICAgICAgICAgICAgICAgICB5Lm5hbWUgPT09ICdDb2xsZWN0aW9uVHlwZScgfHxcbiAgICAgICAgICAgICAgICAgIHkubmFtZSA9PT0gJ0NvbGxlY3Rpb25JbnRlcmZhY2UnLFxuICAgICAgICAgICAgICApLmxlbmd0aCxcbiAgICAgICAgICApXG4gICAgICAgIDogW10sXG4gICAgICBbJ29yZGVyJywgJ25hbWUnXSxcbiAgICApLm1hcChjb2xsZWN0aW9uID0+IGdldFNwZWNpYWxGaWVsZHMoY29sbGVjdGlvbikpLFxuICB9KSksXG4gIHdpdGhQcm9wc09uQ2hhbmdlKFsnbGlzdCddLCAoeyBsaXN0ID0gW10gfSkgPT4ge1xuICAgIGNvbnN0IGdyb3VwID0gKCkgPT4ge1xuICAgICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgICBsaXN0LmZvckVhY2goY29sbGVjdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZ2V0KGNvbGxlY3Rpb24sICdzcGVjaWFsRmllbGRzLmdyb3VwJyk7XG5cbiAgICAgICAgaWYgKCFncm91cHNbZ3JvdXBdKSB7XG4gICAgICAgICAgZ3JvdXBzW2dyb3VwXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGdyb3Vwc1tncm91cF0ucHVzaChjb2xsZWN0aW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDb2xsZWN0aW9ucyBpbm5lcmhhbGIgR3J1cHBlIHNvcnRpZXJlblxuICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGdyb3Vwc1trZXldID0gc29ydEJ5KGdyb3Vwc1trZXldLCBbJ3NwZWNpYWxGaWVsZHMub3JkZXInLCAnbmFtZSddKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBVbmRlZmluZWQtR3J1cHBlIGF1ZmzDtnNlblxuICAgICAgaWYgKGdyb3Vwcy51bmRlZmluZWQpIHtcbiAgICAgICAgZ3JvdXBzLnVuZGVmaW5lZC5mb3JFYWNoKGNvbGxlY3Rpb24gPT4ge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBnZXQoXG4gICAgICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgZ2V0KGNvbGxlY3Rpb24sICdzcGVjaWFsRmllbGRzLmxhYmVsJyksXG4gICAgICAgICAgICBjb2xsZWN0aW9uLm5hbWUsXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmICghZ3JvdXBzW25hbWVdKSB7XG4gICAgICAgICAgICBncm91cHNbbmFtZV0gPSBbXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBncm91cHNbbmFtZV0ucHVzaChjb2xsZWN0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGVsZXRlIGdyb3Vwcy51bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIEdydXBwZW4gc29ydGllcmVuXG4gICAgICBjb25zdCBvcmRlcmVkR3JvdXBzID0ge307XG4gICAgICBPYmplY3Qua2V5cyhncm91cHMpXG4gICAgICAgIC5zb3J0KClcbiAgICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICBvcmRlcmVkR3JvdXBzW2tleV0gPSBncm91cHNba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBvcmRlcmVkR3JvdXBzO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ3JvdXA6IGdyb3VwKCksXG4gICAgfTtcbiAgfSksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgQGVuaGFuY2VcbiAgY2xhc3MgV2l0aENvbGxlY3Rpb25zQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGRhdGEsIGxpc3QsIGdyb3VwLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlZENvbXBvbmVudFxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgIGNvbGxlY3Rpb25MaXN0PXtsaXN0fVxuICAgICAgICAgIGNvbGxlY3Rpb25UcmVlPXtncm91cH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFdpdGhDb2xsZWN0aW9uc0NvbXBvbmVudDtcbn07XG4iXX0=
