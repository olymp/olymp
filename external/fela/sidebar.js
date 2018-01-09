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
    position: 'relative',
    hasFlex: {
      display: 'flex',
      flexDirection: 'column'
    }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvc2lkZWJhci5lczYiXSwibmFtZXMiOlsiQXNpZGUiLCJ0aGVtZSIsIndpZHRoIiwicmlnaHQiLCJsZWZ0IiwidG9wIiwiY29sbGFwc2VkIiwib3ZlcmxhcCIsInpJbmRleCIsInBvc2l0aW9uIiwicGFkZGluZ1RvcCIsImhlaWdodCIsImJvdHRvbSIsImJveFNoYWRvdyIsInVuZGVmaW5lZCIsInRyYW5zaXRpb24iLCJjaGlsZHJlbiIsInJlc3QiLCJtYXAiLCJjaGlsZCIsImZsZXgiLCJncmlkIiwic2VjdGlvblN0eWxlIiwicCIsIk9iamVjdCIsImtleXMiLCJTZWN0aW9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiaGFzRmxleCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiU2lkZWJhciIsImNsYXNzTmFtZSIsIm1lbnUiLCJBdXRvU2lkZWJhciIsInNldENvbGxhcHNlZCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxRQUFRLGdDQUNuQjtBQUFBLE1BQ0VDLEtBREYsUUFDRUEsS0FERjtBQUFBLHdCQUVFQyxLQUZGO0FBQUEsTUFFRUEsS0FGRiw4QkFFVSxHQUZWO0FBQUEsTUFHRUMsS0FIRixRQUdFQSxLQUhGO0FBQUEsdUJBSUVDLElBSkY7QUFBQSxNQUlFQSxJQUpGLDZCQUlTLENBSlQ7QUFBQSxNQUtFQyxHQUxGLFFBS0VBLEdBTEY7QUFBQSxNQU1FQyxTQU5GLFFBTUVBLFNBTkY7QUFBQSxNQU9FQyxPQVBGLFFBT0VBLE9BUEY7QUFBQSx5QkFRRUMsTUFSRjtBQUFBLE1BUUVBLE1BUkYsK0JBUVcsRUFSWDtBQUFBLFNBU087QUFDTEMsY0FBVSxPQURMO0FBRUxKLFNBQUssQ0FGQTtBQUdMSyxnQkFBWUwsR0FIUDtBQUlMRCxVQUFNLENBQUNELEtBQUQsSUFBVUMsSUFKWDtBQUtMRCxXQUFPQSxTQUFTLENBTFg7QUFNTFEsWUFBUSxN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QTtBQUNFO0FBQUMsV0FBRDtBQUFBO0FBQ0UsbUJBQVd5QixTQURiO0FBRUUsZUFBTzlCLEtBRlQ7QUFHRSxtQkFBV0csU0FIYjtBQUlFLGlCQUFTQyxPQUpYO0FBS0UsZUFBT0wsS0FMVDtBQU1FLGNBQU1FLElBTlI7QUFPRSxnQkFBUUk7QUFQVjtBQVNHMEI7QUFUSCxLQURGO0FBWUU7QUFBQyxhQUFEO0FBQUE7QUFDRSxtQkFBV0QsU0FEYjtBQUVFLGVBQU85QixLQUZUO0FBR0UsbUJBQVdHLFNBSGI7QUFJRSxpQkFBU0MsT0FKWDtBQUtFLGNBQU1MO0FBTFI7QUFPR2M7QUFQSDtBQVpGLEdBWGM7QUFBQSxDQUFoQjs7a0JBbUNlZ0IsTztBQUNSLElBQU1HLGNBQWMsMEJBQVUsV0FBVixFQUF1QixjQUF2QixFQUF1QyxJQUF2QyxFQUN6QjtBQUFBLE1BQUdDLFlBQUgsU0FBR0EsWUFBSDtBQUFBLE1BQW9CQyxLQUFwQjs7QUFBQSxTQUNFLDhCQUFDLE9BQUQsZUFDTUEsS0FETjtBQUVFLGlCQUZGO0FBR0Usa0JBQWM7QUFBQSxhQUFNRCxhQUFhLEtBQWIsQ0FBTjtBQUFBLEtBSGhCO0FBSUUsa0JBQWM7QUFBQSxhQUFNQSxhQUFhLElBQWIsQ0FBTjtBQUFBO0FBSmhCLEtBREY7QUFBQSxDQUR5QixDQUFwQiIsImZpbGUiOiJleHRlcm5hbC9mZWxhL3NpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IHdpdGhTdGF0ZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5cbmV4cG9ydCBjb25zdCBBc2lkZSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHtcbiAgICB0aGVtZSxcbiAgICB3aWR0aCA9IDI0MCxcbiAgICByaWdodCxcbiAgICBsZWZ0ID0gMCxcbiAgICB0b3AsXG4gICAgY29sbGFwc2VkLFxuICAgIG92ZXJsYXAsXG4gICAgekluZGV4ID0gMTBcbiAgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgcGFkZGluZ1RvcDogdG9wLFxuICAgIGxlZnQ6ICFyaWdodCAmJiBsZWZ0LFxuICAgIHJpZ2h0OiByaWdodCAmJiAwLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJvdHRvbTogMCxcbiAgICB3aWR0aDogY29sbGFwc2VkID8gNzIgOiB3aWR0aCxcbiAgICBib3hTaGFkb3c6IG92ZXJsYXAgJiYgIWNvbGxhcHNlZCA/IHRoZW1lLmJveFNoYWRvdyA6IHVuZGVmaW5lZCxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLFxuICAgIHpJbmRleFxuICB9KSxcbiAgKHsgY2hpbGRyZW4sIGNvbGxhcHNlZCwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPGFzaWRlIHsuLi5yZXN0fT5cbiAgICAgIHtDaGlsZHJlbi5tYXAoXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBjaGlsZCA9PlxuICAgICAgICAgIGNoaWxkID8gY2xvbmVFbGVtZW50KGNoaWxkLCB7IGNvbGxhcHNlZCwgd2lkdGg6ICcxMDAlJyB9KSA6IGNoaWxkXG4gICAgICApfVxuICAgIDwvYXNpZGU+XG4gICksXG4gICh7IHRvcCwgbGVmdCwgcmlnaHQsIHpJbmRleCwgZmxleCwgZ3JpZCwgc2VjdGlvblN0eWxlLCBvdmVybGFwLCAuLi5wIH0pID0+XG4gICAgT2JqZWN0LmtleXMocClcbik7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyBsZWZ0ID0gMjQwLCByaWdodCwgY29sbGFwc2VkLCBvdmVybGFwIH0pID0+ICh7XG4gICAgbWFyZ2luTGVmdDogIXJpZ2h0ICYmIChvdmVybGFwIHx8IGNvbGxhcHNlZCA/IDcyIDogbGVmdCksXG4gICAgbWFyZ2luUmlnaHQ6IHJpZ2h0ICYmIChvdmVybGFwIHx8IGNvbGxhcHNlZCA/IDcyIDogbGVmdCksXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBoYXNGbGV4OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgIH1cbiAgfSksXG4gICdzZWN0aW9uJyxcbiAgKHtcbiAgICB0b3AsXG4gICAgbGVmdCxcbiAgICByaWdodCxcbiAgICB6SW5kZXgsXG4gICAgZmxleCxcbiAgICBncmlkLFxuICAgIHNlY3Rpb25TdHlsZSxcbiAgICBvdmVybGFwLFxuICAgIGNvbGxhcHNlZCxcbiAgICAuLi5wXG4gIH0pID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5jb25zdCBTaWRlYmFyID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgbWVudSxcbiAgY29sbGFwc2VkLFxuICByaWdodCxcbiAgb3ZlcmxhcCxcbiAgd2lkdGgsXG4gIGxlZnQsXG4gIHpJbmRleFxufSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPEFzaWRlXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHJpZ2h0PXtyaWdodH1cbiAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgb3ZlcmxhcD17b3ZlcmxhcH1cbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGxlZnQ9e2xlZnR9XG4gICAgICB6SW5kZXg9e3pJbmRleH1cbiAgICA+XG4gICAgICB7bWVudX1cbiAgICA8L0FzaWRlPlxuICAgIDxTZWN0aW9uXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHJpZ2h0PXtyaWdodH1cbiAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgb3ZlcmxhcD17b3ZlcmxhcH1cbiAgICAgIGxlZnQ9e3dpZHRofVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1NlY3Rpb24+XG4gIDwvRnJhZ21lbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuZXhwb3J0IGNvbnN0IEF1dG9TaWRlYmFyID0gd2l0aFN0YXRlKCdjb2xsYXBzZWQnLCAnc2V0Q29sbGFwc2VkJywgdHJ1ZSkoXG4gICh7IHNldENvbGxhcHNlZCwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxTaWRlYmFyXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBvdmVybGFwXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldENvbGxhcHNlZChmYWxzZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldENvbGxhcHNlZCh0cnVlKX1cbiAgICAvPlxuICApXG4pO1xuIl19
