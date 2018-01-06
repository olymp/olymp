'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoSidebar = exports.Section = exports.Aside = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

var _recompose = require('recompose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Aside = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 240 : _ref$width,
      right = _ref.right,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      top = _ref.top,
      collapsed = _ref.collapsed,
      overlap = _ref.overlap,
      _ref$zIndex = _ref.zIndex,
      zIndex = _ref$zIndex === undefined ? 10 : _ref$zIndex;
  return {
    position: 'fixed',
    top: 0,
    paddingTop: top,
    left: !right && left,
    right: right && 0,
    height: '100%',
    bottom: 0,
    width: collapsed ? 72 : width,
    boxShadow: overlap && !collapsed ? theme.boxShadow : undefined,
    transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
    zIndex: zIndex
  };
}, function (_ref2) {
  var children = _ref2.children,
      collapsed = _ref2.collapsed,
      rest = _objectWithoutProperties(_ref2, ['children', 'collapsed']);

  return _react2.default.createElement(
    'aside',
    rest,
    _react.Children.map(children, function (child) {
      return child ? (0, _react.cloneElement)(child, { collapsed: collapsed, width: '100%' }) : child;
    })
  );
}, function (_ref3) {
  var top = _ref3.top,
      left = _ref3.left,
      right = _ref3.right,
      zIndex = _ref3.zIndex,
      flex = _ref3.flex,
      grid = _ref3.grid,
      sectionStyle = _ref3.sectionStyle,
      overlap = _ref3.overlap,
      p = _objectWithoutProperties(_ref3, ['top', 'left', 'right', 'zIndex', 'flex', 'grid', 'sectionStyle', 'overlap']);

  return Object.keys(p);
});

exports.Aside = Aside;
var Section = (0, _reactFela.createComponent)(function (_ref4) {
  var _ref4$left = _ref4.left,
      left = _ref4$left === undefined ? 240 : _ref4$left,
      right = _ref4.right,
      collapsed = _ref4.collapsed,
      overlap = _ref4.overlap;
  return {
    marginLeft: !right && (overlap || collapsed ? 72 : left),
    marginRight: right && (overlap || collapsed ? 72 : left),
    transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
    height: '100%',
    position: 'relative'
  };
}, 'section', function (_ref5) {
  var top = _ref5.top,
      left = _ref5.left,
      right = _ref5.right,
      zIndex = _ref5.zIndex,
      flex = _ref5.flex,
      grid = _ref5.grid,
      sectionStyle = _ref5.sectionStyle,
      overlap = _ref5.overlap,
      collapsed = _ref5.collapsed,
      p = _objectWithoutProperties(_ref5, ['top', 'left', 'right', 'zIndex', 'flex', 'grid', 'sectionStyle', 'overlap', 'collapsed']);

  return Object.keys(p);
});

exports.Section = Section;
var Sidebar = function Sidebar(_ref6) {
  var children = _ref6.children,
      className = _ref6.className,
      menu = _ref6.menu,
      collapsed = _ref6.collapsed,
      right = _ref6.right,
      overlap = _ref6.overlap,
      width = _ref6.width,
      left = _ref6.left,
      zIndex = _ref6.zIndex;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      Aside,
      {
        className: className,
        right: right,
        collapsed: collapsed,
        overlap: overlap,
        width: width,
        left: left,
        zIndex: zIndex
      },
      menu
    ),
    _react2.default.createElement(
      Section,
      {
        className: className,
        right: right,
        collapsed: collapsed,
        overlap: overlap,
        left: width
      },
      children
    )
  );
};

exports.default = Sidebar;
var AutoSidebar = (0, _recompose.withState)('collapsed', 'setCollapsed', true)(function (_ref7) {
  var setCollapsed = _ref7.setCollapsed,
      props = _objectWithoutProperties(_ref7, ['setCollapsed']);

  return _react2.default.createElement(Sidebar, _extends({}, props, {
    overlap: true,
    onMouseEnter: function onMouseEnter() {
      return setCollapsed(false);
    },
    onMouseLeave: function onMouseLeave() {
      return setCollapsed(true);
    }
  }));
});
exports.AutoSidebar = AutoSidebar;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvc2lkZWJhci5lczYiXSwibmFtZXMiOlsiQXNpZGUiLCJ0aGVtZSIsIndpZHRoIiwicmlnaHQiLCJsZWZ0IiwidG9wIiwiY29sbGFwc2VkIiwib3ZlcmxhcCIsInpJbmRleCIsInBvc2l0aW9uIiwicGFkZGluZ1RvcCIsImhlaWdodCIsImJvdHRvbSIsImJveFNoYWRvdyIsInVuZGVmaW5lZCIsInRyYW5zaXRpb24iLCJjaGlsZHJlbiIsInJlc3QiLCJtYXAiLCJjaGlsZCIsImZsZXgiLCJncmlkIiwic2VjdGlvblN0eWxlIiwicCIsIk9iamVjdCIsImtleXMiLCJTZWN0aW9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiU2lkZWJhciIsImNsYXNzTmFtZSIsIm1lbnUiLCJBdXRvU2lkZWJhciIsInNldENvbGxhcHNlZCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxRQUFRLGdDQUNuQjtBQUFBLE1BQ0VDLEtBREYsUUFDRUEsS0FERjtBQUFBLHdCQUVFQyxLQUZGO0FBQUEsTUFFRUEsS0FGRiw4QkFFVSxHQUZWO0FBQUEsTUFHRUMsS0FIRixRQUdFQSxLQUhGO0FBQUEsdUJBSUVDLElBSkY7QUFBQSxNQUlFQSxJQUpGLDZCQUlTLENBSlQ7QUFBQSxNQUtFQyxHQUxGLFFBS0VBLEdBTEY7QUFBQSxNQU1FQyxTQU5GLFFBTUVBLFNBTkY7QUFBQSxNQU9FQyxPQVBGLFFBT0VBLE9BUEY7QUFBQSx5QkFRRUMsTUFSRjtBQUFBLE1BUUVBLE1BUkYsK0JBUVcsRUFSWDtBQUFBLFNBU087QUFDTEMsY0FBVSxPQURMO0FBRUxKLFNBQUssQ0FGQTtBQUdMSyxnQkFBWUwsR0FIUDtBQUlMRCxVQUFNLENBQUNELEtBQUQsSUFBVUMsSUFKWDtBQUtMRCxXQUFPQSxTQUFTLENBTFg7QUFNTFEsWUFBUSxNQU5IO0FBT0xDLFlBQVEsQ0FQSDtBQVFMVixXQUFPSSxZQUFZ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QUFLRSxlQUFPTCxLQUxUO0FBTUUsY0FBTUUsSUFOUjtBQU9FLGdCQUFRSTtBQVBWO0FBU0d1QjtBQVRILEtBREY7QUFZRTtBQUFDLGFBQUQ7QUFBQTtBQUNFLG1CQUFXRCxTQURiO0FBRUUsZUFBTzNCLEtBRlQ7QUFHRSxtQkFBV0csU0FIYjtBQUlFLGlCQUFTQyxPQUpYO0FBS0UsY0FBTUw7QUFMUjtBQU9HYztBQVBIO0FBWkYsR0FYYztBQUFBLENBQWhCOztrQkFtQ2VhLE87QUFDUixJQUFNRyxjQUFjLDBCQUFVLFdBQVYsRUFBdUIsY0FBdkIsRUFBdUMsSUFBdkMsRUFDekI7QUFBQSxNQUFHQyxZQUFILFNBQUdBLFlBQUg7QUFBQSxNQUFvQkMsS0FBcEI7O0FBQUEsU0FDRSw4QkFBQyxPQUFELGVBQ01BLEtBRE47QUFFRSxpQkFGRjtBQUdFLGtCQUFjO0FBQUEsYUFBTUQsYUFBYSxLQUFiLENBQU47QUFBQSxLQUhoQjtBQUlFLGtCQUFjO0FBQUEsYUFBTUEsYUFBYSxJQUFiLENBQU47QUFBQTtBQUpoQixLQURGO0FBQUEsQ0FEeUIsQ0FBcEIiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9zaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBjbG9uZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgeyB3aXRoU3RhdGUgfSBmcm9tICdyZWNvbXBvc2UnO1xuXG5leHBvcnQgY29uc3QgQXNpZGUgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7XG4gICAgdGhlbWUsXG4gICAgd2lkdGggPSAyNDAsXG4gICAgcmlnaHQsXG4gICAgbGVmdCA9IDAsXG4gICAgdG9wLFxuICAgIGNvbGxhcHNlZCxcbiAgICBvdmVybGFwLFxuICAgIHpJbmRleCA9IDEwXG4gIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIHBhZGRpbmdUb3A6IHRvcCxcbiAgICBsZWZ0OiAhcmlnaHQgJiYgbGVmdCxcbiAgICByaWdodDogcmlnaHQgJiYgMCxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBib3R0b206IDAsXG4gICAgd2lkdGg6IGNvbGxhcHNlZCA/IDcyIDogd2lkdGgsXG4gICAgYm94U2hhZG93OiBvdmVybGFwICYmICFjb2xsYXBzZWQgPyB0aGVtZS5ib3hTaGFkb3cgOiB1bmRlZmluZWQsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJyxcbiAgICB6SW5kZXhcbiAgfSksXG4gICh7IGNoaWxkcmVuLCBjb2xsYXBzZWQsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxhc2lkZSB7Li4ucmVzdH0+XG4gICAgICB7Q2hpbGRyZW4ubWFwKFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgY2hpbGQgPT5cbiAgICAgICAgICBjaGlsZCA/IGNsb25lRWxlbWVudChjaGlsZCwgeyBjb2xsYXBzZWQsIHdpZHRoOiAnMTAwJScgfSkgOiBjaGlsZFxuICAgICAgKX1cbiAgICA8L2FzaWRlPlxuICApLFxuICAoeyB0b3AsIGxlZnQsIHJpZ2h0LCB6SW5kZXgsIGZsZXgsIGdyaWQsIHNlY3Rpb25TdHlsZSwgb3ZlcmxhcCwgLi4ucCB9KSA9PlxuICAgIE9iamVjdC5rZXlzKHApXG4pO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgbGVmdCA9IDI0MCwgcmlnaHQsIGNvbGxhcHNlZCwgb3ZlcmxhcCB9KSA9PiAoe1xuICAgIG1hcmdpbkxlZnQ6ICFyaWdodCAmJiAob3ZlcmxhcCB8fCBjb2xsYXBzZWQgPyA3MiA6IGxlZnQpLFxuICAgIG1hcmdpblJpZ2h0OiByaWdodCAmJiAob3ZlcmxhcCB8fCBjb2xsYXBzZWQgPyA3MiA6IGxlZnQpLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSksXG4gICdzZWN0aW9uJyxcbiAgKHtcbiAgICB0b3AsXG4gICAgbGVmdCxcbiAgICByaWdodCxcbiAgICB6SW5kZXgsXG4gICAgZmxleCxcbiAgICBncmlkLFxuICAgIHNlY3Rpb25TdHlsZSxcbiAgICBvdmVybGFwLFxuICAgIGNvbGxhcHNlZCxcbiAgICAuLi5wXG4gIH0pID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5jb25zdCBTaWRlYmFyID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgbWVudSxcbiAgY29sbGFwc2VkLFxuICByaWdodCxcbiAgb3ZlcmxhcCxcbiAgd2lkdGgsXG4gIGxlZnQsXG4gIHpJbmRleFxufSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPEFzaWRlXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHJpZ2h0PXtyaWdodH1cbiAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgb3ZlcmxhcD17b3ZlcmxhcH1cbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGxlZnQ9e2xlZnR9XG4gICAgICB6SW5kZXg9e3pJbmRleH1cbiAgICA+XG4gICAgICB7bWVudX1cbiAgICA8L0FzaWRlPlxuICAgIDxTZWN0aW9uXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHJpZ2h0PXtyaWdodH1cbiAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgb3ZlcmxhcD17b3ZlcmxhcH1cbiAgICAgIGxlZnQ9e3dpZHRofVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1NlY3Rpb24+XG4gIDwvRnJhZ21lbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuZXhwb3J0IGNvbnN0IEF1dG9TaWRlYmFyID0gd2l0aFN0YXRlKCdjb2xsYXBzZWQnLCAnc2V0Q29sbGFwc2VkJywgdHJ1ZSkoXG4gICh7IHNldENvbGxhcHNlZCwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxTaWRlYmFyXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBvdmVybGFwXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldENvbGxhcHNlZChmYWxzZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldENvbGxhcHNlZCh0cnVlKX1cbiAgICAvPlxuICApXG4pO1xuIl19
