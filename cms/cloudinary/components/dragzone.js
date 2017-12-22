import 'antd/lib/progress/style';
import _Progress from 'antd/lib/progress';
import 'antd/lib/upload/style';
import _Upload from 'antd/lib/upload';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

import { createComponent } from 'olymp-fela';

var Dragger = createComponent(function (_ref) {
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
}, _Upload.Dragger, function (_ref2) {
  var clickable = _ref2.clickable,
      p = _objectWithoutProperties(_ref2, ['clickable']);

  return Object.keys(p);
});

var ProgressWrapper = createComponent(function () {
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

  return React.createElement(
    'div',
    { className: className, onClick: onClick },
    !disabled && React.createElement(Progress, p),
    children
  );
}, function (p) {
  return Object.keys(p);
});

var Progress = createComponent(function () {
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

  return React.createElement(
    'div',
    { className: className },
    React.createElement(_Progress, p)
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

  return React.createElement(
    ProgressWrapper,
    {
      type: 'circle',
      percent: Math.round(progress / size) || 0,
      onClick: function onClick(e) {
        return clickable ? {} : e.preventDefault();
      },
      disabled: !uploading.length
    },
    React.createElement(
      Dragger,
      _extends({ clickable: clickable }, rest),
      children
    )
  );
};
DragZone.propTypes = {
  clickable: PropTypes.bool,
  uploading: PropTypes.array
};
DragZone.defaultProps = {
  clickable: true,
  uploading: []
};
export default DragZone;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvY29tcG9uZW50cy9kcmFnem9uZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJjcmVhdGVDb21wb25lbnQiLCJEcmFnZ2VyIiwiY2xpY2thYmxlIiwiYm9yZGVyIiwiY3Vyc29yIiwidmVydGljYWxBbGlnbiIsInAiLCJPYmplY3QiLCJrZXlzIiwiUHJvZ3Jlc3NXcmFwcGVyIiwicG9zaXRpb24iLCJoZWlnaHQiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsIlByb2dyZXNzIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiRHJhZ1pvbmUiLCJ1cGxvYWRpbmciLCJyZXN0IiwicHJvZ3Jlc3MiLCJyZWR1Y2UiLCJhIiwieCIsInBlcmNlbnQiLCJzaXplIiwiTWF0aCIsInJvdW5kIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwicHJvcFR5cGVzIiwiYm9vbCIsImFycmF5IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0Qjs7QUFFQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDOztBQUVBLElBQU1DLFVBQVVELGdCQUNkO0FBQUEsTUFBR0UsU0FBSCxRQUFHQSxTQUFIO0FBQUEsU0FBb0I7QUFDbEIscUJBQWlCO0FBQ2ZDLGNBQVEsQ0FETztBQUVmQyxjQUFRRixZQUFZLFNBQVosR0FBd0IsU0FGakI7QUFHZjtBQUNBLG9EQUE4QztBQUM1Q0csdUJBQWU7QUFENkI7QUFKL0I7QUFEQyxHQUFwQjtBQUFBLENBRGMsRUFXZCxRQUFPSixPQVhPLEVBWWQ7QUFBQSxNQUFHQyxTQUFILFNBQUdBLFNBQUg7QUFBQSxNQUFpQkksQ0FBakI7O0FBQUEsU0FBeUJDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUF6QjtBQUFBLENBWmMsQ0FBaEI7O0FBZUEsSUFBTUcsa0JBQWtCVCxnQkFDdEI7QUFBQSxTQUFPO0FBQ0xVLGNBQVUsVUFETDtBQUVMQyxZQUFRO0FBRkgsR0FBUDtBQUFBLENBRHNCLEVBS3RCO0FBQUEsTUFBR0MsT0FBSCxTQUFHQSxPQUFIO0FBQUEsTUFBWUMsUUFBWixTQUFZQSxRQUFaO0FBQUEsTUFBc0JDLFNBQXRCLFNBQXNCQSxTQUF0QjtBQUFBLE1BQWlDQyxRQUFqQyxTQUFpQ0EsUUFBakM7QUFBQSxNQUE4Q1QsQ0FBOUM7O0FBQUEsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFXUSxTQUFoQixFQUEyQixTQUFTRixPQUFwQztBQUNHLEtBQUNHLFFBQUQsSUFBYSxvQkFBQyxRQUFELEVBQWNULENBQWQsQ0FEaEI7QUFFR087QUFGSCxHQURGO0FBQUEsQ0FMc0IsRUFXdEI7QUFBQSxTQUFLTixPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBTDtBQUFBLENBWHNCLENBQXhCOztBQWNBLElBQU1VLFdBQVdoQixnQkFDZjtBQUFBLFNBQU87QUFDTGlCLFdBQU8sTUFERjtBQUVMTixZQUFRLE1BRkg7QUFHTE8scUJBQWlCLG1CQUhaO0FBSUxSLGNBQVUsVUFKTDtBQUtMUyxZQUFRLENBTEg7QUFNTCx1QkFBbUI7QUFDakJULGdCQUFVLFVBRE87QUFFakJVLFdBQUssS0FGWTtBQUdqQkMsWUFBTSxLQUhXO0FBSWpCQyxpQkFBVztBQUpNO0FBTmQsR0FBUDtBQUFBLENBRGUsRUFjZjtBQUFBLE1BQUdSLFNBQUgsU0FBR0EsU0FBSDtBQUFBLE1BQWlCUixDQUFqQjs7QUFBQSxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVdRLFNBQWhCO0FBQ0UsbUNBQWlCUixDQUFqQjtBQURGLEdBREY7QUFBQSxDQWRlLEVBbUJmO0FBQUEsU0FBS0MsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBQUw7QUFBQSxDQW5CZSxDQUFqQjs7QUFzQkEsSUFBTWlCLFdBQVcsU0FBWEEsUUFBVyxRQUFpRDtBQUFBLE1BQTlDckIsU0FBOEMsU0FBOUNBLFNBQThDO0FBQUEsTUFBbkNzQixTQUFtQyxTQUFuQ0EsU0FBbUM7QUFBQSxNQUF4QlgsUUFBd0IsU0FBeEJBLFFBQXdCO0FBQUEsTUFBWFksSUFBVzs7QUFDaEUsTUFBTUMsV0FBV0YsVUFBVUcsTUFBVixDQUFpQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVRCxJQUFJQyxFQUFFQyxPQUFGLEdBQVlELEVBQUVFLElBQTVCO0FBQUEsR0FBakIsRUFBbUQsQ0FBbkQsQ0FBakI7QUFDQSxNQUFNQSxPQUFPUCxVQUFVRyxNQUFWLENBQWlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVELElBQUlDLEVBQUVFLElBQWhCO0FBQUEsR0FBakIsRUFBdUMsQ0FBdkMsQ0FBYjs7QUFFQSxTQUNFO0FBQUMsbUJBQUQ7QUFBQTtBQUNFLFlBQUssUUFEUDtBQUVFLGVBQVNDLEtBQUtDLEtBQUwsQ0FBV1AsV0FBV0ssSUFBdEIsS0FBK0IsQ0FGMUM7QUFHRSxlQUFTO0FBQUEsZUFBTTdCLFlBQVksRUFBWixHQUFpQmdDLEVBQUVDLGNBQUYsRUFBdkI7QUFBQSxPQUhYO0FBSUUsZ0JBQVUsQ0FBQ1gsVUFBVVk7QUFKdkI7QUFNRTtBQUFDLGFBQUQ7QUFBQSxpQkFBUyxXQUFXbEMsU0FBcEIsSUFBbUN1QixJQUFuQztBQUNHWjtBQURIO0FBTkYsR0FERjtBQVlELENBaEJEO0FBaUJBVSxTQUFTYyxTQUFULEdBQXFCO0FBQ25CbkMsYUFBV0gsVUFBVXVDLElBREY7QUFFbkJkLGFBQVd6QixVQUFVd0M7QUFGRixDQUFyQjtBQUlBaEIsU0FBU2lCLFlBQVQsR0FBd0I7QUFDdEJ0QyxhQUFXLElBRFc7QUFFdEJzQixhQUFXO0FBRlcsQ0FBeEI7QUFJQSxlQUFlRCxRQUFmIiwiZmlsZSI6InBhY2thZ2VzL2Nsb3VkaW5hcnkvY29tcG9uZW50cy9kcmFnem9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgVXBsb2FkLCBQcm9ncmVzcyBhcyBBbnRQcm9ncmVzcyB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbmNvbnN0IERyYWdnZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IGNsaWNrYWJsZSB9KSA9PiAoe1xuICAgICc+IC5hbnQtdXBsb2FkJzoge1xuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY3Vyc29yOiBjbGlja2FibGUgPyAncG9pbnRlcicgOiAnZGVmYXVsdCcsXG4gICAgICAvLyBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICc+IC5hbnQtdXBsb2FkID4gLmFudC11cGxvYWQtZHJhZy1jb250YWluZXInOiB7XG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdpbmhlcml0JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gIFVwbG9hZC5EcmFnZ2VyLFxuICAoeyBjbGlja2FibGUsIC4uLnAgfSkgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCBQcm9ncmVzc1dyYXBwZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICgpID0+ICh7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gIH0pLFxuICAoeyBvbkNsaWNrLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCBkaXNhYmxlZCwgLi4ucCB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17b25DbGlja30+XG4gICAgICB7IWRpc2FibGVkICYmIDxQcm9ncmVzcyB7Li4ucH0gLz59XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCBQcm9ncmVzcyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKCkgPT4gKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjQpJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB6SW5kZXg6IDEsXG4gICAgJz4gLmFudC1wcm9ncmVzcyc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAnNTAlJyxcbiAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICB9LFxuICB9KSxcbiAgKHsgY2xhc3NOYW1lLCAuLi5wIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxBbnRQcm9ncmVzcyB7Li4ucH0gLz5cbiAgICA8L2Rpdj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IERyYWdab25lID0gKHsgY2xpY2thYmxlLCB1cGxvYWRpbmcsIGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgcHJvZ3Jlc3MgPSB1cGxvYWRpbmcucmVkdWNlKChhLCB4KSA9PiBhICsgeC5wZXJjZW50ICogeC5zaXplLCAwKTtcbiAgY29uc3Qgc2l6ZSA9IHVwbG9hZGluZy5yZWR1Y2UoKGEsIHgpID0+IGEgKyB4LnNpemUsIDApO1xuXG4gIHJldHVybiAoXG4gICAgPFByb2dyZXNzV3JhcHBlclxuICAgICAgdHlwZT1cImNpcmNsZVwiXG4gICAgICBwZXJjZW50PXtNYXRoLnJvdW5kKHByb2dyZXNzIC8gc2l6ZSkgfHwgMH1cbiAgICAgIG9uQ2xpY2s9e2UgPT4gKGNsaWNrYWJsZSA/IHt9IDogZS5wcmV2ZW50RGVmYXVsdCgpKX1cbiAgICAgIGRpc2FibGVkPXshdXBsb2FkaW5nLmxlbmd0aH1cbiAgICA+XG4gICAgICA8RHJhZ2dlciBjbGlja2FibGU9e2NsaWNrYWJsZX0gey4uLnJlc3R9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0RyYWdnZXI+XG4gICAgPC9Qcm9ncmVzc1dyYXBwZXI+XG4gICk7XG59O1xuRHJhZ1pvbmUucHJvcFR5cGVzID0ge1xuICBjbGlja2FibGU6IFByb3BUeXBlcy5ib29sLFxuICB1cGxvYWRpbmc6IFByb3BUeXBlcy5hcnJheSxcbn07XG5EcmFnWm9uZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgdXBsb2FkaW5nOiBbXSxcbn07XG5leHBvcnQgZGVmYXVsdCBEcmFnWm9uZTtcbiJdfQ==
