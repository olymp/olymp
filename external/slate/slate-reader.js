'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _slateReact = require('slate-react');

var _slatePlainSerializer = require('slate-plain-serializer');

var _slatePlainSerializer2 = _interopRequireDefault(_slatePlainSerializer);

var _getSchema = require('./get-schema');

var _getSchema2 = _interopRequireDefault(_getSchema);

var _useJsonState = require('./use-json-state');

var _useJsonState2 = _interopRequireDefault(_useJsonState);

var _marks = require('./defaults/marks');

var _marks2 = _interopRequireDefault(_marks);

var _nodes = require('./defaults/nodes');

var _nodes2 = _interopRequireDefault(_nodes);

var _headingId = require('./plugins/heading-id');

var _headingId2 = _interopRequireDefault(_headingId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var renderNode = function renderNode(props) {
  var X = _nodes2.default[props.node.type];
  if (X) {
    return _react2.default.createElement(X, props);
  }
  return null;
};
var renderMark = function renderMark(props) {
  var X = _marks2.default[props.mark.type];
  if (X) {
    return _react2.default.createElement(X, props);
  }
  return null;
};

var enhance = (0, _recompose.compose)(_useJsonState2.default, _getSchema2.default, (0, _recompose.withPropsOnChange)('plugins', function (_ref) {
  var _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === undefined ? [] : _ref$plugins;
  return {
    plugins: [].concat(_toConsumableArray(plugins), [(0, _headingId2.default)({}), {
      renderNode: renderNode,
      renderMark: renderMark
    }])
  };
}), (0, _recompose.withProps)(function (_ref2) {
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

  return _react2.default.createElement(
    'div',
    { className: className, style: _extends({ position: 'relative' }, style) },
    children,
    _react2.default.createElement(_slateReact.Editor, _extends({}, rest, {
      className: 'slate-editor slate-reader',
      value: value || _slatePlainSerializer2.default.deserialize(''),
      spellcheck: false,
      readOnly: true,
      renderNode: renderNode,
      placeholderStyle: { padding: '0 1rem', opacity: 0.33 }
    }))
  );
};

exports.default = enhance(Reader);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3NsYXRlLXJlYWRlci5lczYiXSwibmFtZXMiOlsicmVuZGVyTm9kZSIsIlgiLCJwcm9wcyIsIm5vZGUiLCJ0eXBlIiwicmVuZGVyTWFyayIsIm1hcmsiLCJlbmhhbmNlIiwicGx1Z2lucyIsIm9uQ2hhbmdlIiwiY2hhbmdlIiwidmFsdWUiLCJSZWFkZXIiLCJjaGlsZHJlbiIsInNjaGVtYSIsImNsYXNzTmFtZSIsInN0eWxlIiwicmVzdCIsInBvc2l0aW9uIiwiZGVzZXJpYWxpemUiLCJwYWRkaW5nIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxRQUFTO0FBQzFCLE1BQU1DLElBQUksZ0JBQU1DLE1BQU1DLElBQU4sQ0FBV0MsSUFBakIsQ0FBVjtBQUNBLE1BQUlILENBQUosRUFBTztBQUNMLFdBQU8sOEJBQUMsQ0FBRCxFQUFPQyxLQUFQLENBQVA7QUFDRDtBQUNELFNBQU8sSUFBUDtBQUNELENBTkQ7QUFPQSxJQUFNRyxhQUFhLFNBQWJBLFVBQWEsUUFBUztBQUMxQixNQUFNSixJQUFJLGdCQUFNQyxNQUFNSSxJQUFOLENBQVdGLElBQWpCLENBQVY7QUFDQSxNQUFJSCxDQUFKLEVBQU87QUFDTCxXQUFPLDhCQUFDLENBQUQsRUFBT0MsS0FBUCxDQUFQO0FBQ0Q7QUFDRCxTQUFPLElBQVA7QUFDRCxDQU5EOztBQVFBLElBQU1LLFVBQVUscUVBR2Qsa0NBQWtCLFNBQWxCLEVBQTZCO0FBQUEsMEJBQUdDLE9BQUg7QUFBQSxNQUFHQSxPQUFILGdDQUFhLEVBQWI7QUFBQSxTQUF1QjtBQUNsREEsMENBQ0tBLE9BREwsSUFFRSx5QkFBVSxFQUFWLENBRkYsRUFHRTtBQUNFUiw0QkFERjtBQUVFSztBQUZGLEtBSEY7QUFEa0QsR0FBdkI7QUFBQSxDQUE3QixDQUhjLEVBYWQsMEJBQVU7QUFBQSxNQUFHSSxTQUFILFNBQUdBLFFBQUg7QUFBQSxTQUFtQjtBQUMzQkEsY0FBVTtBQUFBLGFBQVVBLFVBQVNDLE9BQU9DLEtBQWhCLENBQVY7QUFBQTtBQURpQixHQUFuQjtBQUFBLENBQVYsQ0FiYyxDQUFoQjtBQWlCQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUNiQyxRQURhLFNBQ2JBLFFBRGE7QUFBQSxNQUViQyxNQUZhLFNBRWJBLE1BRmE7QUFBQSxNQUdiZCxVQUhhLFNBR2JBLFVBSGE7QUFBQSxNQUliZSxTQUphLFNBSWJBLFNBSmE7QUFBQSxNQUtiQyxLQUxhLFNBS2JBLEtBTGE7QUFBQSxNQU1iTCxLQU5hLFNBTWJBLEtBTmE7QUFBQSxNQU9WTSxJQVBVOztBQUFBLFNBU2I7QUFBQTtBQUFBLE1BQUssV0FBV0YsU0FBaEIsRUFBMkIsa0JBQVNHLFVBQVUsVUFBbkIsSUFBa0NGLEtBQWxDLENBQTNCO0FBQ0dILFlBREg7QUFFRSxtRUFDTUksSUFETjtBQUVFLGlCQUFVLDJCQUZaO0FBR0UsYUFBT04sU0FBUywrQkFBTVEsV0FBTixDQUFrQixFQUFsQixDQUhsQjtBQUlFLGtCQUFZLEtBSmQ7QUFLRSxvQkFMRjtBQU1FLGtCQUFZbkIsVUFOZDtBQU9FLHdCQUFrQixFQUFFb0IsU0FBUyxRQUFYLEVBQXFCQyxTQUFTLElBQTlCO0FBUHBCO0FBRkYsR0FUYTtBQUFBLENBQWY7O2tCQXVCZWQsUUFBUUssTUFBUixDIiwiZmlsZSI6ImV4dGVybmFsL3NsYXRlL3NsYXRlLXJlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUHJvcHNPbkNoYW5nZSwgY29tcG9zZSwgd2l0aFByb3BzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gJ3NsYXRlLXJlYWN0JztcbmltcG9ydCBQbGFpbiBmcm9tICdzbGF0ZS1wbGFpbi1zZXJpYWxpemVyJztcbmltcG9ydCBnZXRTY2hlbWEgZnJvbSAnLi9nZXQtc2NoZW1hJztcbmltcG9ydCB1c2VKc29uU3RhdGUgZnJvbSAnLi91c2UtanNvbi1zdGF0ZSc7XG5pbXBvcnQgbWFya3MgZnJvbSAnLi9kZWZhdWx0cy9tYXJrcyc7XG5pbXBvcnQgbm9kZXMgZnJvbSAnLi9kZWZhdWx0cy9ub2Rlcyc7XG5pbXBvcnQgSGVhZGluZ0lkIGZyb20gJy4vcGx1Z2lucy9oZWFkaW5nLWlkJztcblxuY29uc3QgcmVuZGVyTm9kZSA9IHByb3BzID0+IHtcbiAgY29uc3QgWCA9IG5vZGVzW3Byb3BzLm5vZGUudHlwZV07XG4gIGlmIChYKSB7XG4gICAgcmV0dXJuIDxYIHsuLi5wcm9wc30gLz47XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuY29uc3QgcmVuZGVyTWFyayA9IHByb3BzID0+IHtcbiAgY29uc3QgWCA9IG1hcmtzW3Byb3BzLm1hcmsudHlwZV07XG4gIGlmIChYKSB7XG4gICAgcmV0dXJuIDxYIHsuLi5wcm9wc30gLz47XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgdXNlSnNvblN0YXRlLFxuICBnZXRTY2hlbWEsXG4gIHdpdGhQcm9wc09uQ2hhbmdlKCdwbHVnaW5zJywgKHsgcGx1Z2lucyA9IFtdIH0pID0+ICh7XG4gICAgcGx1Z2luczogW1xuICAgICAgLi4ucGx1Z2lucyxcbiAgICAgIEhlYWRpbmdJZCh7fSksXG4gICAgICB7XG4gICAgICAgIHJlbmRlck5vZGUsXG4gICAgICAgIHJlbmRlck1hcmssXG4gICAgICB9LFxuICAgIF0sXG4gIH0pKSxcbiAgd2l0aFByb3BzKCh7IG9uQ2hhbmdlIH0pID0+ICh7XG4gICAgb25DaGFuZ2U6IGNoYW5nZSA9PiBvbkNoYW5nZShjaGFuZ2UudmFsdWUpLFxuICB9KSksXG4pO1xuY29uc3QgUmVhZGVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIHNjaGVtYSxcbiAgcmVuZGVyTm9kZSxcbiAgY2xhc3NOYW1lLFxuICBzdHlsZSxcbiAgdmFsdWUsXG4gIC4uLnJlc3Rcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIC4uLnN0eWxlIH19PlxuICAgIHtjaGlsZHJlbn1cbiAgICA8RWRpdG9yXG4gICAgICB7Li4ucmVzdH1cbiAgICAgIGNsYXNzTmFtZT1cInNsYXRlLWVkaXRvciBzbGF0ZS1yZWFkZXJcIlxuICAgICAgdmFsdWU9e3ZhbHVlIHx8IFBsYWluLmRlc2VyaWFsaXplKCcnKX1cbiAgICAgIHNwZWxsY2hlY2s9e2ZhbHNlfVxuICAgICAgcmVhZE9ubHlcbiAgICAgIHJlbmRlck5vZGU9e3JlbmRlck5vZGV9XG4gICAgICBwbGFjZWhvbGRlclN0eWxlPXt7IHBhZGRpbmc6ICcwIDFyZW0nLCBvcGFjaXR5OiAwLjMzIH19XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlKFJlYWRlcik7XG4iXX0=
