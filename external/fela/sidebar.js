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

/* const Sidebar = createComponent(
  ({
    theme,
    width = 240,
    right,
    left = 0,
    top,
    collapsed,
    overlap,
    zIndex = 10,
    flex,
    grid,
    sectionStyle = {},
  }) => ({
    height: '100%',
    extend: [
      {
        condition: !!flex,
        style: {
          flex: '1',
          marginLeft: left,
          display: 'flex',
          flexDirection: right ? 'row-reverse' : 'row',
          minHeight: 0,
          '> aside': {
            maxWidth: collapsed || overlap ? 72 : width,
            minWidth: collapsed || overlap ? 72 : width,
            transition: 'min-width 200ms ease-out, max-width 200ms ease-out',
            display: 'flex',
            ifSmallDown: {
              maxWidth: !collapsed ? '100%' : '0%',
              minWidth: !collapsed ? '100%' : '0%',
            },
          },
          '> section': {
            flex: 1,
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
            ...sectionStyle,
          },
        },
      },
      {
        condition: !!grid,
        style: {
          display: 'grid',
          marginLeft: left,
          gridTemplateColumns: right
            ? `auto ${collapsed ? 72 : width}px`
            : `${collapsed ? 72 : width}px auto`,
          '> aside': {
            gridColumn: right ? 2 : 1,
            zIndex,
            boxShadow: overlap && !collapsed ? theme.boxShadow : undefined,
          },
          '> section': {
            gridColumn: right ? 1 : 2,
            ...sectionStyle,
          },
        },
      },
      {
        condition: !flex && !grid,
        style: {
          '> aside': {
            position: 'fixed',
            top: 0,
            paddingTop: top,
            left: !right && left,
            right: right && 0,
            height: '100%',
            bottom: 0,
            width: collapsed ? 72 : width,
            boxShadow: overlap && !collapsed ? theme.boxShadow : undefined,
            transition: 'all 200ms ease-out',
            zIndex,
            ifSmallDown: {
              width: !collapsed && '100%',
            },
          },
          '> section': {
            marginLeft: !right && (overlap || collapsed ? 72 : width),
            marginRight: right && (overlap || collapsed ? 72 : width),
            transition: 'margin 200ms ease-out',
            height: '100%',
            position: 'relative',
            ...sectionStyle,
          },
        },
      },
    ],
  }),
  ({ children, className, menu, collapsed, ...rest }) => (
    <div className={className}>
      <aside {...rest}>
        {Children.map(
          menu,
          child => (child ? cloneElement(child, { collapsed, width: '100%' }) : child),
        )}
      </aside>
      <section>{children}</section>
    </div>
  ),
  ({ top, left, right, zIndex, flex, grid, sectionStyle, overlap, ...p }) =>
    Object.keys(p),
); */

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
    /* ifSmallDown: {
      width: !collapsed && '100%',
    }, */
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
      p = _objectWithoutProperties(_ref5, ['top', 'left', 'right', 'zIndex', 'flex', 'grid', 'sectionStyle', 'overlap']);

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
      { className: className, right: right, collapsed: collapsed, overlap: overlap, width: width, left: left, zIndex: zIndex },
      menu
    ),
    _react2.default.createElement(
      Section,
      { className: className, right: right, collapsed: collapsed, overlap: overlap, left: width },
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvc2lkZWJhci5lczYiXSwibmFtZXMiOlsiQXNpZGUiLCJ0aGVtZSIsIndpZHRoIiwicmlnaHQiLCJsZWZ0IiwidG9wIiwiY29sbGFwc2VkIiwib3ZlcmxhcCIsInpJbmRleCIsInBvc2l0aW9uIiwicGFkZGluZ1RvcCIsImhlaWdodCIsImJvdHRvbSIsImJveFNoYWRvdyIsInVuZGVmaW5lZCIsInRyYW5zaXRpb24iLCJjaGlsZHJlbiIsInJlc3QiLCJtYXAiLCJjaGlsZCIsImZsZXgiLCJncmlkIiwic2VjdGlvblN0eWxlIiwicCIsIk9iamVjdCIsImtleXMiLCJTZWN0aW9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiU2lkZWJhciIsImNsYXNzTmFtZSIsIm1lbnUiLCJBdXRvU2lkZWJhciIsInNldENvbGxhcHNlZCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEdPLElBQU1BLFFBQVEsZ0NBQ25CO0FBQUEsTUFDRUMsS0FERixRQUNFQSxLQURGO0FBQUEsd0JBRUVDLEtBRkY7QUFBQSxNQUVFQSxLQUZGLDhCQUVVLEdBRlY7QUFBQSxNQUdFQyxLQUhGLFFBR0VBLEtBSEY7QUFBQSx1QkFJRUMsSUFKRjtBQUFBLE1BSUVBLElBSkYsNkJBSVMsQ0FKVDtBQUFBLE1BS0VDLEdBTEYsUUFLRUEsR0FMRjtBQUFBLE1BTUVDLFNBTkYsUUFNRUEsU0FORjtBQUFBLE1BT0VDLE9BUEYsUUFPRUEsT0FQRjtBQUFBLHlCQVFFQyxNQVJGO0FBQUEsTUFRRUEsTUFSRiwrQkFRVyxFQVJYO0FBQUEsU0FTTztBQUNMQyxjQUFVLE9BREw7QUFFTEosU0FBSyxDQUZBO0FBR0xLLGdC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LFNBQXNFQSxNQUF0RTtBQUFBLFNBQ2Q7QUFBQTtBQUFBO0FBQ0U7QUFBQyxXQUFEO0FBQUEsUUFBTyxXQUFXc0IsU0FBbEIsRUFBNkIsT0FBTzNCLEtBQXBDLEVBQTJDLFdBQVdHLFNBQXRELEVBQWlFLFNBQVNDLE9BQTFFLEVBQW1GLE9BQU9MLEtBQTFGLEVBQWlHLE1BQU1FLElBQXZHLEVBQTZHLFFBQVFJLE1BQXJIO0FBQ0d1QjtBQURILEtBREY7QUFJRTtBQUFDLGFBQUQ7QUFBQSxRQUFTLFdBQVdELFNBQXBCLEVBQStCLE9BQU8zQixLQUF0QyxFQUE2QyxXQUFXRyxTQUF4RCxFQUFtRSxTQUFTQyxPQUE1RSxFQUFxRixNQUFNTCxLQUEzRjtBQUFtR2M7QUFBbkc7QUFKRixHQURjO0FBQUEsQ0FBaEI7O2tCQVNlYSxPO0FBQ1IsSUFBTUcsY0FBYywwQkFDekIsV0FEeUIsRUFFekIsY0FGeUIsRUFHekIsSUFIeUIsRUFJekI7QUFBQSxNQUFHQyxZQUFILFNBQUdBLFlBQUg7QUFBQSxNQUFvQkMsS0FBcEI7O0FBQUEsU0FDQSw4QkFBQyxPQUFELGVBQ01BLEtBRE47QUFFRSxpQkFGRjtBQUdFLGtCQUFjO0FBQUEsYUFBTUQsYUFBYSxLQUFiLENBQU47QUFBQSxLQUhoQjtBQUlFLGtCQUFjO0FBQUEsYUFBTUEsYUFBYSxJQUFiLENBQU47QUFBQTtBQUpoQixLQURBO0FBQUEsQ0FKeUIsQ0FBcEIiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9zaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBjbG9uZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgeyB3aXRoU3RhdGUgfSBmcm9tICdyZWNvbXBvc2UnO1xuXG4vKiBjb25zdCBTaWRlYmFyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoe1xuICAgIHRoZW1lLFxuICAgIHdpZHRoID0gMjQwLFxuICAgIHJpZ2h0LFxuICAgIGxlZnQgPSAwLFxuICAgIHRvcCxcbiAgICBjb2xsYXBzZWQsXG4gICAgb3ZlcmxhcCxcbiAgICB6SW5kZXggPSAxMCxcbiAgICBmbGV4LFxuICAgIGdyaWQsXG4gICAgc2VjdGlvblN0eWxlID0ge30sXG4gIH0pID0+ICh7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgZXh0ZW5kOiBbXG4gICAgICB7XG4gICAgICAgIGNvbmRpdGlvbjogISFmbGV4LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZsZXg6ICcxJyxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBsZWZ0LFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiByaWdodCA/ICdyb3ctcmV2ZXJzZScgOiAncm93JyxcbiAgICAgICAgICBtaW5IZWlnaHQ6IDAsXG4gICAgICAgICAgJz4gYXNpZGUnOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogY29sbGFwc2VkIHx8IG92ZXJsYXAgPyA3MiA6IHdpZHRoLFxuICAgICAgICAgICAgbWluV2lkdGg6IGNvbGxhcHNlZCB8fCBvdmVybGFwID8gNzIgOiB3aWR0aCxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdtaW4td2lkdGggMjAwbXMgZWFzZS1vdXQsIG1heC13aWR0aCAyMDBtcyBlYXNlLW91dCcsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBpZlNtYWxsRG93bjoge1xuICAgICAgICAgICAgICBtYXhXaWR0aDogIWNvbGxhcHNlZCA/ICcxMDAlJyA6ICcwJScsXG4gICAgICAgICAgICAgIG1pbldpZHRoOiAhY29sbGFwc2VkID8gJzEwMCUnIDogJzAlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiBzZWN0aW9uJzoge1xuICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIC4uLnNlY3Rpb25TdHlsZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uZGl0aW9uOiAhIWdyaWQsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6IGxlZnQsXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogcmlnaHRcbiAgICAgICAgICAgID8gYGF1dG8gJHtjb2xsYXBzZWQgPyA3MiA6IHdpZHRofXB4YFxuICAgICAgICAgICAgOiBgJHtjb2xsYXBzZWQgPyA3MiA6IHdpZHRofXB4IGF1dG9gLFxuICAgICAgICAgICc+IGFzaWRlJzoge1xuICAgICAgICAgICAgZ3JpZENvbHVtbjogcmlnaHQgPyAyIDogMSxcbiAgICAgICAgICAgIHpJbmRleCxcbiAgICAgICAgICAgIGJveFNoYWRvdzogb3ZlcmxhcCAmJiAhY29sbGFwc2VkID8gdGhlbWUuYm94U2hhZG93IDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gc2VjdGlvbic6IHtcbiAgICAgICAgICAgIGdyaWRDb2x1bW46IHJpZ2h0ID8gMSA6IDIsXG4gICAgICAgICAgICAuLi5zZWN0aW9uU3R5bGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbmRpdGlvbjogIWZsZXggJiYgIWdyaWQsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgJz4gYXNpZGUnOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IHRvcCxcbiAgICAgICAgICAgIGxlZnQ6ICFyaWdodCAmJiBsZWZ0LFxuICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0ICYmIDAsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHdpZHRoOiBjb2xsYXBzZWQgPyA3MiA6IHdpZHRoLFxuICAgICAgICAgICAgYm94U2hhZG93OiBvdmVybGFwICYmICFjb2xsYXBzZWQgPyB0aGVtZS5ib3hTaGFkb3cgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDIwMG1zIGVhc2Utb3V0JyxcbiAgICAgICAgICAgIHpJbmRleCxcbiAgICAgICAgICAgIGlmU21hbGxEb3duOiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAhY29sbGFwc2VkICYmICcxMDAlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiBzZWN0aW9uJzoge1xuICAgICAgICAgICAgbWFyZ2luTGVmdDogIXJpZ2h0ICYmIChvdmVybGFwIHx8IGNvbGxhcHNlZCA/IDcyIDogd2lkdGgpLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IHJpZ2h0ICYmIChvdmVybGFwIHx8IGNvbGxhcHNlZCA/IDcyIDogd2lkdGgpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ21hcmdpbiAyMDBtcyBlYXNlLW91dCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgLi4uc2VjdGlvblN0eWxlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0pLFxuICAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBtZW51LCBjb2xsYXBzZWQsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGFzaWRlIHsuLi5yZXN0fT5cbiAgICAgICAge0NoaWxkcmVuLm1hcChcbiAgICAgICAgICBtZW51LFxuICAgICAgICAgIGNoaWxkID0+IChjaGlsZCA/IGNsb25lRWxlbWVudChjaGlsZCwgeyBjb2xsYXBzZWQsIHdpZHRoOiAnMTAwJScgfSkgOiBjaGlsZCksXG4gICAgICAgICl9XG4gICAgICA8L2FzaWRlPlxuICAgICAgPHNlY3Rpb24+e2NoaWxkcmVufTwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKSxcbiAgKHsgdG9wLCBsZWZ0LCByaWdodCwgekluZGV4LCBmbGV4LCBncmlkLCBzZWN0aW9uU3R5bGUsIG92ZXJsYXAsIC4uLnAgfSkgPT5cbiAgICBPYmplY3Qua2V5cyhwKSxcbik7ICovXG5cbmV4cG9ydCBjb25zdCBBc2lkZSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHtcbiAgICB0aGVtZSxcbiAgICB3aWR0aCA9IDI0MCxcbiAgICByaWdodCxcbiAgICBsZWZ0ID0gMCxcbiAgICB0b3AsXG4gICAgY29sbGFwc2VkLFxuICAgIG92ZXJsYXAsXG4gICAgekluZGV4ID0gMTAsXG4gIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIHBhZGRpbmdUb3A6IHRvcCxcbiAgICBsZWZ0OiAhcmlnaHQgJiYgbGVmdCxcbiAgICByaWdodDogcmlnaHQgJiYgMCxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBib3R0b206IDAsXG4gICAgd2lkdGg6IGNvbGxhcHNlZCA/IDcyIDogd2lkdGgsXG4gICAgYm94U2hhZG93OiBvdmVybGFwICYmICFjb2xsYXBzZWQgPyB0aGVtZS5ib3hTaGFkb3cgOiB1bmRlZmluZWQsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJyxcbiAgICB6SW5kZXgsXG4gICAgLyogaWZTbWFsbERvd246IHtcbiAgICAgIHdpZHRoOiAhY29sbGFwc2VkICYmICcxMDAlJyxcbiAgICB9LCAqL1xuICB9KSxcbiAgKHsgY2hpbGRyZW4sIGNvbGxhcHNlZCwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPGFzaWRlIHsuLi5yZXN0fT5cbiAgICAgIHtDaGlsZHJlbi5tYXAoXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBjaGlsZCA9PiAoY2hpbGQgPyBjbG9uZUVsZW1lbnQoY2hpbGQsIHsgY29sbGFwc2VkLCB3aWR0aDogJzEwMCUnIH0pIDogY2hpbGQpLFxuICAgICAgKX1cbiAgICA8L2FzaWRlPlxuICApLFxuICAoeyB0b3AsIGxlZnQsIHJpZ2h0LCB6SW5kZXgsIGZsZXgsIGdyaWQsIHNlY3Rpb25TdHlsZSwgb3ZlcmxhcCwgLi4ucCB9KSA9PlxuICAgIE9iamVjdC5rZXlzKHApLFxuKTtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBjcmVhdGVDb21wb25lbnQoXG4gICh7XG4gICAgbGVmdCA9IDI0MCxcbiAgICByaWdodCxcbiAgICBjb2xsYXBzZWQsXG4gICAgb3ZlcmxhcCxcbiAgfSkgPT4gKHtcbiAgICBtYXJnaW5MZWZ0OiAhcmlnaHQgJiYgKG92ZXJsYXAgfHwgY29sbGFwc2VkID8gNzIgOiBsZWZ0KSxcbiAgICBtYXJnaW5SaWdodDogcmlnaHQgJiYgKG92ZXJsYXAgfHwgY29sbGFwc2VkID8gNzIgOiBsZWZ0KSxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9KSxcbiAgJ3NlY3Rpb24nLFxuICAoeyB0b3AsIGxlZnQsIHJpZ2h0LCB6SW5kZXgsIGZsZXgsIGdyaWQsIHNlY3Rpb25TdHlsZSwgb3ZlcmxhcCwgLi4ucCB9KSA9PlxuICAgIE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgU2lkZWJhciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIG1lbnUsIGNvbGxhcHNlZCwgcmlnaHQsIG92ZXJsYXAsIHdpZHRoLCBsZWZ0LCB6SW5kZXggfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPEFzaWRlIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSByaWdodD17cmlnaHR9IGNvbGxhcHNlZD17Y29sbGFwc2VkfSBvdmVybGFwPXtvdmVybGFwfSB3aWR0aD17d2lkdGh9IGxlZnQ9e2xlZnR9IHpJbmRleD17ekluZGV4fT5cbiAgICAgIHttZW51fVxuICAgIDwvQXNpZGU+XG4gICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWV9IHJpZ2h0PXtyaWdodH0gY29sbGFwc2VkPXtjb2xsYXBzZWR9IG92ZXJsYXA9e292ZXJsYXB9IGxlZnQ9e3dpZHRofT57Y2hpbGRyZW59PC9TZWN0aW9uPlxuICA8L0ZyYWdtZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbmV4cG9ydCBjb25zdCBBdXRvU2lkZWJhciA9IHdpdGhTdGF0ZShcbiAgJ2NvbGxhcHNlZCcsXG4gICdzZXRDb2xsYXBzZWQnLFxuICB0cnVlLFxuKSgoeyBzZXRDb2xsYXBzZWQsIC4uLnByb3BzIH0pID0+IChcbiAgPFNpZGViYXJcbiAgICB7Li4ucHJvcHN9XG4gICAgb3ZlcmxhcFxuICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0Q29sbGFwc2VkKGZhbHNlKX1cbiAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldENvbGxhcHNlZCh0cnVlKX1cbiAgLz5cbikpO1xuIl19
