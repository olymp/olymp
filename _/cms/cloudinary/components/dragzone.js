'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _progress = require('antd/lib/progress');

var _progress2 = _interopRequireDefault(_progress);

var _upload = require('antd/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/progress/style');

require('antd/lib/upload/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Dragger = (0, _olympFela.createComponent)(function (_ref) {
  var clickable = _ref.clickable;
  return {
    '> .ant-upload': {
      border: 0,
      cursor: clickable ? 'pointer' : 'default',
      // height: '100%',
      '> .ant-upload > .ant-upload-drag-container': {
        verticalAlign: 'inherit'
      }
    }
  };
}, _upload2.default.Dragger, function (_ref2) {
  var clickable = _ref2.clickable,
      p = _objectWithoutProperties(_ref2, ['clickable']);

  return Object.keys(p);
});

var ProgressWrapper = (0, _olympFela.createComponent)(function () {
  return {
    position: 'relative',
    height: '100%'
  };
}, function (_ref3) {
  var onClick = _ref3.onClick,
      children = _ref3.children,
      className = _ref3.className,
      disabled = _ref3.disabled,
      p = _objectWithoutProperties(_ref3, ['onClick', 'children', 'className', 'disabled']);

  return _react2.default.createElement(
    'div',
    { className: className, onClick: onClick },
    !disabled && _react2.default.createElement(Progress, p),
    children
  );
}, function (p) {
  return Object.keys(p);
});

var Progress = (0, _olympFela.createComponent)(function () {
  return {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .4)',
    position: 'absolute',
    zIndex: 1,
    '> .ant-progress': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  };
}, function (_ref4) {
  var className = _ref4.className,
      p = _objectWithoutProperties(_ref4, ['className']);

  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(_progress2.default, p)
  );
}, function (p) {
  return Object.keys(p);
});

var DragZone = function DragZone(_ref5) {
  var clickable = _ref5.clickable,
      uploading = _ref5.uploading,
      children = _ref5.children,
      rest = _objectWithoutProperties(_ref5, ['clickable', 'uploading', 'children']);

  var progress = uploading.reduce(function (a, x) {
    return a + x.percent * x.size;
  }, 0);
  var size = uploading.reduce(function (a, x) {
    return a + x.size;
  }, 0);

  return _react2.default.createElement(
    ProgressWrapper,
    {
      type: 'circle',
      percent: Math.round(progress / size) || 0,
      onClick: function onClick(e) {
        return clickable ? {} : e.preventDefault();
      },
      disabled: !uploading.length
    },
    _react2.default.createElement(
      Dragger,
      _extends({ clickable: clickable }, rest),
      children
    )
  );
};
DragZone.propTypes = {
  clickable: _propTypes2.default.bool,
  uploading: _propTypes2.default.array
};
DragZone.defaultProps = {
  clickable: true,
  uploading: []
};
exports.default = DragZone;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2NvbXBvbmVudHMvZHJhZ3pvbmUuZXM2Il0sIm5hbWVzIjpbIkRyYWdnZXIiLCJjbGlja2FibGUiLCJib3JkZXIiLCJjdXJzb3IiLCJ2ZXJ0aWNhbEFsaWduIiwicCIsIk9iamVjdCIsImtleXMiLCJQcm9ncmVzc1dyYXBwZXIiLCJwb3NpdGlvbiIsImhlaWdodCIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwiUHJvZ3Jlc3MiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJEcmFnWm9uZSIsInVwbG9hZGluZyIsInJlc3QiLCJwcm9ncmVzcyIsInJlZHVjZSIsImEiLCJ4IiwicGVyY2VudCIsInNpemUiLCJNYXRoIiwicm91bmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJwcm9wVHlwZXMiLCJib29sIiwiYXJyYXkiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLGdDQUNkO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsU0FBb0I7QUFDbEIscUJBQWlCO0FBQ2ZDLGNBQVEsQ0FETztBQUVmQyxjQUFRRixZQUFZLFNBQVosR0FBd0IsU0FGakI7QUFHZjtBQUNBLG9EQUE4QztBQUM1Q0csdUJBQWU7QUFENkI7QUFKL0I7QUFEQyxHQUFwQjtBQUFBLENBRGMsRUFXZCxpQkFBT0osT0FYTyxFQVlkO0FBQUEsTUFBR0MsU0FBSCxTQUFHQSxTQUFIO0FBQUEsTUFBaUJJLENBQWpCOztBQUFBLFNBQXlCQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBekI7QUFBQSxDQVpjLENBQWhCOztBQWVBLElBQU1HLGtCQUFrQixnQ0FDdEI7QUFBQSxTQUFPO0FBQ0xDLGNBQVUsVUFETDtBQUVMQyxZQUFRO0FBRkgsR0FBUDtBQUFBLENBRHNCLEVBS3RCO0FBQUEsTUFBR0MsT0FBSCxTQUFHQSxPQUFIO0FBQUEsTUFBWUMsUUFBWixTQUFZQSxRQUFaO0FBQUEsTUFBc0JDLFNBQXRCLFNBQXNCQSxTQUF0QjtBQUFBLE1BQWlDQyxRQUFqQyxTQUFpQ0EsUUFBakM7QUFBQSxNQUE4Q1QsQ0FBOUM7O0FBQUEsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFXUSxTQUFoQixFQUEyQixTQUFTRixPQUFwQztBQUNHLEtBQUNHLFFBQUQsSUFBYSw4QkFBQyxRQUFELEVBQWNULENBQWQsQ0FEaEI7QUFFR087QUFGSCxHQURGO0FBQUEsQ0FMc0IsRUFXdEI7QUFBQSxTQUFLTixPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBTDtBQUFBLENBWHNCLENBQXhCOztBQWNBLElBQU1VLFdBQVcsZ0NBQ2Y7QUFBQSxTQUFPO0FBQ0xDLFdBQU8sTUFERjtBQUVMTixZQUFRLE1BRkg7QUFHTE8scUJBQWlCLG1CQUhaO0FBSUxSLGNBQVUsVUFKTDtBQUtMUyxZQUFRLENBTEg7QUFNTCx1QkFBbUI7QUFDakJULGdCQUFVLFVBRE87QUFFakJVLFdBQUssS0FGWTtBQUdqQkMsWUFBTSxLQUhXO0FBSWpCQyxpQkFBVztBQUpNO0FBTmQsR0FBUDtBQUFBLENBRGUsRUFjZjtBQUFBLE1BQUdSLFNBQUgsU0FBR0EsU0FBSDtBQUFBLE1BQWlCUixDQUFqQjs7QUFBQSxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVdRLFNBQWhCO0FBQ0Usc0RBQWlCUixDQUFqQjtBQURGLEdBREY7QUFBQSxDQWRlLEVBbUJmO0FBQUEsU0FBS0MsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBQUw7QUFBQSxDQW5CZSxDQUFqQjs7QUFzQkEsSUFBTWlCLFdBQVcsU0FBWEEsUUFBVyxRQUFpRDtBQUFBLE1BQTlDckIsU0FBOEMsU0FBOUNBLFNBQThDO0FBQUEsTUFBbkNzQixTQUFtQyxTQUFuQ0EsU0FBbUM7QUFBQSxNQUF4QlgsUUFBd0IsU0FBeEJBLFFBQXdCO0FBQUEsTUFBWFksSUFBVzs7QUFDaEUsTUFBTUMsV0FBV0YsVUFBVUcsTUFBVixDQUFpQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVRCxJQUFJQyxFQUFFQyxPQUFGLEdBQVlELEVBQUVFLElBQTVCO0FBQUEsR0FBakIsRUFBbUQsQ0FBbkQsQ0FBakI7QUFDQSxNQUFNQSxPQUFPUCxVQUFVRyxNQUFWLENBQWlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVELElBQUlDLEVBQUVFLElBQWhCO0FBQUEsR0FBakIsRUFBdUMsQ0FBdkMsQ0FBYjs7QUFFQSxTQUNFO0FBQUMsbUJBQUQ7QUFBQTtBQUNFLFlBQUssUUFEUDtBQUVFLGVBQVNDLEtBQUtDLEtBQUwsQ0FBV1AsV0FBV0ssSUFBdEIsS0FBK0IsQ0FGMUM7QUFHRSxlQUFTO0FBQUEsZUFBTTdCLFlBQVksRUFBWixHQUFpQmdDLEVBQUVDLGNBQUYsRUFBdkI7QUFBQSxPQUhYO0FBSUUsZ0JBQVUsQ0FBQ1gsVUFBVVk7QUFKdkI7QUFNRTtBQUFDLGFBQUQ7QUFBQSxpQkFBUyxXQUFXbEMsU0FBcEIsSUFBbUN1QixJQUFuQztBQUNHWjtBQURIO0FBTkYsR0FERjtBQVlELENBaEJEO0FBaUJBVSxTQUFTYyxTQUFULEdBQXFCO0FBQ25CbkMsYUFBVyxvQkFBVW9DLElBREY7QUFFbkJkLGFBQVcsb0JBQVVlO0FBRkYsQ0FBckI7QUFJQWhCLFNBQVNpQixZQUFULEdBQXdCO0FBQ3RCdEMsYUFBVyxJQURXO0FBRXRCc0IsYUFBVztBQUZXLENBQXhCO2tCQUllRCxRIiwiZmlsZSI6ImNtcy9jbG91ZGluYXJ5L2NvbXBvbmVudHMvZHJhZ3pvbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFVwbG9hZCwgUHJvZ3Jlc3MgYXMgQW50UHJvZ3Jlc3MgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuXG5jb25zdCBEcmFnZ2VyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyBjbGlja2FibGUgfSkgPT4gKHtcbiAgICAnPiAuYW50LXVwbG9hZCc6IHtcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGN1cnNvcjogY2xpY2thYmxlID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnLFxuICAgICAgLy8gaGVpZ2h0OiAnMTAwJScsXG4gICAgICAnPiAuYW50LXVwbG9hZCA+IC5hbnQtdXBsb2FkLWRyYWctY29udGFpbmVyJzoge1xuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnaW5oZXJpdCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICBVcGxvYWQuRHJhZ2dlcixcbiAgKHsgY2xpY2thYmxlLCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgUHJvZ3Jlc3NXcmFwcGVyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoKSA9PiAoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9KSxcbiAgKHsgb25DbGljaywgY2hpbGRyZW4sIGNsYXNzTmFtZSwgZGlzYWJsZWQsIC4uLnAgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgeyFkaXNhYmxlZCAmJiA8UHJvZ3Jlc3Mgey4uLnB9IC8+fVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgUHJvZ3Jlc3MgPSBjcmVhdGVDb21wb25lbnQoXG4gICgpID0+ICh7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIC40KScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgekluZGV4OiAxLFxuICAgICc+IC5hbnQtcHJvZ3Jlc3MnOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgfSxcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgLi4ucCB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8QW50UHJvZ3Jlc3Mgey4uLnB9IC8+XG4gICAgPC9kaXY+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCBEcmFnWm9uZSA9ICh7IGNsaWNrYWJsZSwgdXBsb2FkaW5nLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzID0gdXBsb2FkaW5nLnJlZHVjZSgoYSwgeCkgPT4gYSArIHgucGVyY2VudCAqIHguc2l6ZSwgMCk7XG4gIGNvbnN0IHNpemUgPSB1cGxvYWRpbmcucmVkdWNlKChhLCB4KSA9PiBhICsgeC5zaXplLCAwKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm9ncmVzc1dyYXBwZXJcbiAgICAgIHR5cGU9XCJjaXJjbGVcIlxuICAgICAgcGVyY2VudD17TWF0aC5yb3VuZChwcm9ncmVzcyAvIHNpemUpIHx8IDB9XG4gICAgICBvbkNsaWNrPXtlID0+IChjbGlja2FibGUgPyB7fSA6IGUucHJldmVudERlZmF1bHQoKSl9XG4gICAgICBkaXNhYmxlZD17IXVwbG9hZGluZy5sZW5ndGh9XG4gICAgPlxuICAgICAgPERyYWdnZXIgY2xpY2thYmxlPXtjbGlja2FibGV9IHsuLi5yZXN0fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9EcmFnZ2VyPlxuICAgIDwvUHJvZ3Jlc3NXcmFwcGVyPlxuICApO1xufTtcbkRyYWdab25lLnByb3BUeXBlcyA9IHtcbiAgY2xpY2thYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXBsb2FkaW5nOiBQcm9wVHlwZXMuYXJyYXksXG59O1xuRHJhZ1pvbmUuZGVmYXVsdFByb3BzID0ge1xuICBjbGlja2FibGU6IHRydWUsXG4gIHVwbG9hZGluZzogW10sXG59O1xuZXhwb3J0IGRlZmF1bHQgRHJhZ1pvbmU7XG4iXX0=
