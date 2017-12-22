var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React from 'react';
import { withPropsOnChange, compose, withProps } from 'recompose';
import { Editor } from 'slate-react';
import Plain from 'slate-plain-serializer';
import getSchema from './get-schema';
import useJsonState from './use-json-state';
import marks from './defaults/marks';
import nodes from './defaults/nodes';
import HeadingId from './plugins/heading-id';

var renderNode = function renderNode(props) {
  var X = nodes[props.node.type];
  if (X) {
    return React.createElement(X, props);
  }
  return null;
};
var renderMark = function renderMark(props) {
  var X = marks[props.mark.type];
  if (X) {
    return React.createElement(X, props);
  }
  return null;
};

var enhance = compose(useJsonState, getSchema, withPropsOnChange('plugins', function (_ref) {
  var _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === undefined ? [] : _ref$plugins;
  return {
    plugins: [].concat(_toConsumableArray(plugins), [HeadingId({}), {
      renderNode: renderNode,
      renderMark: renderMark
    }])
  };
}), withProps(function (_ref2) {
  var _onChange = _ref2.onChange;
  return {
    onChange: function onChange(change) {
      return _onChange(change.value);
    }
  };
}));
var Reader = function Reader(_ref3) {
  var children = _ref3.children,
      schema = _ref3.schema,
      renderNode = _ref3.renderNode,
      className = _ref3.className,
      style = _ref3.style,
      value = _ref3.value,
      rest = _objectWithoutProperties(_ref3, ['children', 'schema', 'renderNode', 'className', 'style', 'value']);

  return React.createElement(
    'div',
    { className: className, style: _extends({ position: 'relative' }, style) },
    children,
    React.createElement(Editor, _extends({}, rest, {
      className: 'slate-editor slate-reader',
      value: value || Plain.deserialize(''),
      spellcheck: false,
      readOnly: true,
      renderNode: renderNode,
      placeholderStyle: { padding: '0 1rem', opacity: 0.33 }
    }))
  );
};

export default enhance(Reader);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3NsYXRlLXJlYWRlci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJ3aXRoUHJvcHNPbkNoYW5nZSIsImNvbXBvc2UiLCJ3aXRoUHJvcHMiLCJFZGl0b3IiLCJQbGFpbiIsImdldFNjaGVtYSIsInVzZUpzb25TdGF0ZSIsIm1hcmtzIiwibm9kZXMiLCJIZWFkaW5nSWQiLCJyZW5kZXJOb2RlIiwiWCIsInByb3BzIiwibm9kZSIsInR5cGUiLCJyZW5kZXJNYXJrIiwibWFyayIsImVuaGFuY2UiLCJwbHVnaW5zIiwib25DaGFuZ2UiLCJjaGFuZ2UiLCJ2YWx1ZSIsIlJlYWRlciIsImNoaWxkcmVuIiwic2NoZW1hIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJyZXN0IiwicG9zaXRpb24iLCJkZXNlcmlhbGl6ZSIsInBhZGRpbmciLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsaUJBQVQsRUFBNEJDLE9BQTVCLEVBQXFDQyxTQUFyQyxRQUFzRCxXQUF0RDtBQUNBLFNBQVNDLE1BQVQsUUFBdUIsYUFBdkI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLHdCQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsY0FBdEI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGtCQUF6QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0Isa0JBQWxCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixrQkFBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLHNCQUF0Qjs7QUFFQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsUUFBUztBQUMxQixNQUFNQyxJQUFJSCxNQUFNSSxNQUFNQyxJQUFOLENBQVdDLElBQWpCLENBQVY7QUFDQSxNQUFJSCxDQUFKLEVBQU87QUFDTCxXQUFPLG9CQUFDLENBQUQsRUFBT0MsS0FBUCxDQUFQO0FBQ0Q7QUFDRCxTQUFPLElBQVA7QUFDRCxDQU5EO0FBT0EsSUFBTUcsYUFBYSxTQUFiQSxVQUFhLFFBQVM7QUFDMUIsTUFBTUosSUFBSUosTUFBTUssTUFBTUksSUFBTixDQUFXRixJQUFqQixDQUFWO0FBQ0EsTUFBSUgsQ0FBSixFQUFPO0FBQ0wsV0FBTyxvQkFBQyxDQUFELEVBQU9DLEtBQVAsQ0FBUDtBQUNEO0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0FORDs7QUFRQSxJQUFNSyxVQUFVaEIsUUFDZEssWUFEYyxFQUVkRCxTQUZjLEVBR2RMLGtCQUFrQixTQUFsQixFQUE2QjtBQUFBLDBCQUFHa0IsT0FBSDtBQUFBLE1BQUdBLE9BQUgsZ0NBQWEsRUFBYjtBQUFBLFNBQXVCO0FBQ2xEQSwwQ0FDS0EsT0FETCxJQUVFVCxVQUFVLEVBQVYsQ0FGRixFQUdFO0FBQ0VDLDRCQURGO0FBRUVLO0FBRkYsS0FIRjtBQURrRCxHQUF2QjtBQUFBLENBQTdCLENBSGMsRUFhZGIsVUFBVTtBQUFBLE1BQUdpQixTQUFILFNBQUdBLFFBQUg7QUFBQSxTQUFtQjtBQUMzQkEsY0FBVTtBQUFBLGFBQVVBLFVBQVNDLE9BQU9DLEtBQWhCLENBQVY7QUFBQTtBQURpQixHQUFuQjtBQUFBLENBQVYsQ0FiYyxDQUFoQjtBQWlCQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUNiQyxRQURhLFNBQ2JBLFFBRGE7QUFBQSxNQUViQyxNQUZhLFNBRWJBLE1BRmE7QUFBQSxNQUdiZCxVQUhhLFNBR2JBLFVBSGE7QUFBQSxNQUliZSxTQUphLFNBSWJBLFNBSmE7QUFBQSxNQUtiQyxLQUxhLFNBS2JBLEtBTGE7QUFBQSxNQU1iTCxLQU5hLFNBTWJBLEtBTmE7QUFBQSxNQU9WTSxJQVBVOztBQUFBLFNBU2I7QUFBQTtBQUFBLE1BQUssV0FBV0YsU0FBaEIsRUFBMkIsa0JBQVNHLFVBQVUsVUFBbkIsSUFBa0NGLEtBQWxDLENBQTNCO0FBQ0dILFlBREg7QUFFRSx3QkFBQyxNQUFELGVBQ01JLElBRE47QUFFRSxpQkFBVSwyQkFGWjtBQUdFLGFBQU9OLFNBQVNqQixNQUFNeUIsV0FBTixDQUFrQixFQUFsQixDQUhsQjtBQUlFLGtCQUFZLEtBSmQ7QUFLRSxvQkFMRjtBQU1FLGtCQUFZbkIsVUFOZDtBQU9FLHdCQUFrQixFQUFFb0IsU0FBUyxRQUFYLEVBQXFCQyxTQUFTLElBQTlCO0FBUHBCO0FBRkYsR0FUYTtBQUFBLENBQWY7O0FBdUJBLGVBQWVkLFFBQVFLLE1BQVIsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9zbGF0ZS9zbGF0ZS1yZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFByb3BzT25DaGFuZ2UsIGNvbXBvc2UsIHdpdGhQcm9wcyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XG5pbXBvcnQgUGxhaW4gZnJvbSAnc2xhdGUtcGxhaW4tc2VyaWFsaXplcic7XG5pbXBvcnQgZ2V0U2NoZW1hIGZyb20gJy4vZ2V0LXNjaGVtYSc7XG5pbXBvcnQgdXNlSnNvblN0YXRlIGZyb20gJy4vdXNlLWpzb24tc3RhdGUnO1xuaW1wb3J0IG1hcmtzIGZyb20gJy4vZGVmYXVsdHMvbWFya3MnO1xuaW1wb3J0IG5vZGVzIGZyb20gJy4vZGVmYXVsdHMvbm9kZXMnO1xuaW1wb3J0IEhlYWRpbmdJZCBmcm9tICcuL3BsdWdpbnMvaGVhZGluZy1pZCc7XG5cbmNvbnN0IHJlbmRlck5vZGUgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFggPSBub2Rlc1twcm9wcy5ub2RlLnR5cGVdO1xuICBpZiAoWCkge1xuICAgIHJldHVybiA8WCB7Li4ucHJvcHN9IC8+O1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbmNvbnN0IHJlbmRlck1hcmsgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFggPSBtYXJrc1twcm9wcy5tYXJrLnR5cGVdO1xuICBpZiAoWCkge1xuICAgIHJldHVybiA8WCB7Li4ucHJvcHN9IC8+O1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHVzZUpzb25TdGF0ZSxcbiAgZ2V0U2NoZW1hLFxuICB3aXRoUHJvcHNPbkNoYW5nZSgncGx1Z2lucycsICh7IHBsdWdpbnMgPSBbXSB9KSA9PiAoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIC4uLnBsdWdpbnMsXG4gICAgICBIZWFkaW5nSWQoe30pLFxuICAgICAge1xuICAgICAgICByZW5kZXJOb2RlLFxuICAgICAgICByZW5kZXJNYXJrLFxuICAgICAgfSxcbiAgICBdLFxuICB9KSksXG4gIHdpdGhQcm9wcygoeyBvbkNoYW5nZSB9KSA9PiAoe1xuICAgIG9uQ2hhbmdlOiBjaGFuZ2UgPT4gb25DaGFuZ2UoY2hhbmdlLnZhbHVlKSxcbiAgfSkpLFxuKTtcbmNvbnN0IFJlYWRlciA9ICh7XG4gIGNoaWxkcmVuLFxuICBzY2hlbWEsXG4gIHJlbmRlck5vZGUsXG4gIGNsYXNzTmFtZSxcbiAgc3R5bGUsXG4gIHZhbHVlLFxuICAuLi5yZXN0XG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCAuLi5zdHlsZSB9fT5cbiAgICB7Y2hpbGRyZW59XG4gICAgPEVkaXRvclxuICAgICAgey4uLnJlc3R9XG4gICAgICBjbGFzc05hbWU9XCJzbGF0ZS1lZGl0b3Igc2xhdGUtcmVhZGVyXCJcbiAgICAgIHZhbHVlPXt2YWx1ZSB8fCBQbGFpbi5kZXNlcmlhbGl6ZSgnJyl9XG4gICAgICBzcGVsbGNoZWNrPXtmYWxzZX1cbiAgICAgIHJlYWRPbmx5XG4gICAgICByZW5kZXJOb2RlPXtyZW5kZXJOb2RlfVxuICAgICAgcGxhY2Vob2xkZXJTdHlsZT17eyBwYWRkaW5nOiAnMCAxcmVtJywgb3BhY2l0eTogMC4zMyB9fVxuICAgIC8+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZShSZWFkZXIpO1xuIl19
