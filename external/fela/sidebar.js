var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Children, cloneElement, Fragment } from 'react';
import { createComponent } from 'react-fela';
import { withState } from 'recompose';

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

var Aside = createComponent(function (_ref) {
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

  return React.createElement(
    'aside',
    rest,
    Children.map(children, function (child) {
      return child ? cloneElement(child, { collapsed: collapsed, width: '100%' }) : child;
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

export { Aside };
var Section = createComponent(function (_ref4) {
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

export { Section };
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
  return React.createElement(
    Fragment,
    null,
    React.createElement(
      Aside,
      { className: className, right: right, collapsed: collapsed, overlap: overlap, width: width, left: left, zIndex: zIndex },
      menu
    ),
    React.createElement(
      Section,
      { className: className, right: right, collapsed: collapsed, overlap: overlap, left: width },
      children
    )
  );
};

export default Sidebar;
var AutoSidebar = withState('collapsed', 'setCollapsed', true)(function (_ref7) {
  var setCollapsed = _ref7.setCollapsed,
      props = _objectWithoutProperties(_ref7, ['setCollapsed']);

  return React.createElement(Sidebar, _extends({}, props, {
    overlap: true,
    onMouseEnter: function onMouseEnter() {
      return setCollapsed(false);
    },
    onMouseLeave: function onMouseLeave() {
      return setCollapsed(true);
    }
  }));
});
export { AutoSidebar };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvc2lkZWJhci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDaGlsZHJlbiIsImNsb25lRWxlbWVudCIsIkZyYWdtZW50IiwiY3JlYXRlQ29tcG9uZW50Iiwid2l0aFN0YXRlIiwiQXNpZGUiLCJ0aGVtZSIsIndpZHRoIiwicmlnaHQiLCJsZWZ0IiwidG9wIiwiY29sbGFwc2VkIiwib3ZlcmxhcCIsInpJbmRleCIsInBvc2l0aW9uIiwicGFkZGluZ1RvcCIsImhlaWdodCIsImJvdHRvbSIsImJveFNoYWRvdyIsInVuZGVmaW5lZCIsInRyYW5zaXRpb24iLCJjaGlsZHJlbiIsInJlc3QiLCJtYXAiLCJjaGlsZCIsImZsZXgiLCJncmlkIiwic2VjdGlvblN0eWxlIiwicCIsIk9iamVjdCIsImtleXMiLCJTZWN0aW9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiU2lkZWJhciIsImNsYXNzTmFtZSIsIm1lbnUiLCJBdXRvU2lkZWJhciIsInNldENvbGxhcHNlZCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsUUFBaEIsRUFBMEJDLFlBQTFCLEVBQXdDQyxRQUF4QyxRQUF3RCxPQUF4RDtBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7QUFDQSxTQUFTQyxTQUFULFFBQTBCLFdBQTFCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0R08sSUFBTUMsUUFBUUYsZ0JBQ25CO0FBQUEsTUFDRUcsS0FERixRQUNFQSxLQURGO0FBQUEsd0JBRUVDLEtBRkY7QUFBQSxNQUVFQSxLQUZGLDhCQUVVLEdBRlY7QUFBQSxNQUdFQyxLQUhGLFFBR0VBLEtBSEY7QUFBQSx1QkFJRUMsSUFKRjtBQUFBLE1BSUVBLElBSkYsNkJBSVMsQ0FKVDtBQUFB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eEI7QUFBQSxNQUE4QnpCLFNBQTlCLFNBQThCQSxTQUE5QjtBQUFBLE1BQXlDSCxLQUF6QyxTQUF5Q0EsS0FBekM7QUFBQSxNQUFnREksT0FBaEQsU0FBZ0RBLE9BQWhEO0FBQUEsTUFBeURMLEtBQXpELFNBQXlEQSxLQUF6RDtBQUFBLE1BQWdFRSxJQUFoRSxTQUFnRUEsSUFBaEU7QUFBQSxNQUFzRUksTUFBdEUsU0FBc0VBLE1BQXRFO0FBQUEsU0FDZDtBQUFDLFlBQUQ7QUFBQTtBQUNFO0FBQUMsV0FBRDtBQUFBLFFBQU8sV0FBV3NCLFNBQWxCLEVBQTZCLE9BQU8zQixLQUFwQyxFQUEyQyxXQUFXRyxTQUF0RCxFQUFpRSxTQUFTQyxPQUExRSxFQUFtRixPQUFPTCxLQUExRixFQUFpRyxNQUFNRSxJQUF2RyxFQUE2RyxRQUFRSSxNQUFySDtBQUNHdUI7QUFESCxLQURGO0FBSUU7QUFBQyxhQUFEO0FBQUEsUUFBUyxXQUFXRCxTQUFwQixFQUErQixPQUFPM0IsS0FBdEMsRUFBNkMsV0FBV0csU0FBeEQsRUFBbUUsU0FBU0MsT0FBNUUsRUFBcUYsTUFBTUwsS0FBM0Y7QUFBbUdjO0FBQW5HO0FBSkYsR0FEYztBQUFBLENBQWhCOztBQVNBLGVBQWVhLE9BQWY7QUFDTyxJQUFNRyxjQUFjakMsVUFDekIsV0FEeUIsRUFFekIsY0FGeUIsRUFHekIsSUFIeUIsRUFJekI7QUFBQSxNQUFHa0MsWUFBSCxTQUFHQSxZQUFIO0FBQUEsTUFBb0JDLEtBQXBCOztBQUFBLFNBQ0Esb0JBQUMsT0FBRCxlQUNNQSxLQUROO0FBRUUsaUJBRkY7QUFHRSxrQkFBYztBQUFBLGFBQU1ELGFBQWEsS0FBYixDQUFOO0FBQUEsS0FIaEI7QUFJRSxrQkFBYztBQUFBLGFBQU1BLGFBQWEsSUFBYixDQUFOO0FBQUE7QUFKaEIsS0FEQTtBQUFBLENBSnlCLENBQXBCIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvc2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgY2xvbmVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgd2l0aFN0YXRlIH0gZnJvbSAncmVjb21wb3NlJztcblxuLyogY29uc3QgU2lkZWJhciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHtcbiAgICB0aGVtZSxcbiAgICB3aWR0aCA9IDI0MCxcbiAgICByaWdodCxcbiAgICBsZWZ0ID0gMCxcbiAgICB0b3AsXG4gICAgY29sbGFwc2VkLFxuICAgIG92ZXJsYXAsXG4gICAgekluZGV4ID0gMTAsXG4gICAgZmxleCxcbiAgICBncmlkLFxuICAgIHNlY3Rpb25TdHlsZSA9IHt9LFxuICB9KSA9PiAoe1xuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGV4dGVuZDogW1xuICAgICAge1xuICAgICAgICBjb25kaXRpb246ICEhZmxleCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmbGV4OiAnMScsXG4gICAgICAgICAgbWFyZ2luTGVmdDogbGVmdCxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogcmlnaHQgPyAncm93LXJldmVyc2UnIDogJ3JvdycsXG4gICAgICAgICAgbWluSGVpZ2h0OiAwLFxuICAgICAgICAgICc+IGFzaWRlJzoge1xuICAgICAgICAgICAgbWF4V2lkdGg6IGNvbGxhcHNlZCB8fCBvdmVybGFwID8gNzIgOiB3aWR0aCxcbiAgICAgICAgICAgIG1pbldpZHRoOiBjb2xsYXBzZWQgfHwgb3ZlcmxhcCA/IDcyIDogd2lkdGgsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnbWluLXdpZHRoIDIwMG1zIGVhc2Utb3V0LCBtYXgtd2lkdGggMjAwbXMgZWFzZS1vdXQnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgaWZTbWFsbERvd246IHtcbiAgICAgICAgICAgICAgbWF4V2lkdGg6ICFjb2xsYXBzZWQgPyAnMTAwJScgOiAnMCUnLFxuICAgICAgICAgICAgICBtaW5XaWR0aDogIWNvbGxhcHNlZCA/ICcxMDAlJyA6ICcwJScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gc2VjdGlvbic6IHtcbiAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAuLi5zZWN0aW9uU3R5bGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbmRpdGlvbjogISFncmlkLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBsZWZ0LFxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHJpZ2h0XG4gICAgICAgICAgICA/IGBhdXRvICR7Y29sbGFwc2VkID8gNzIgOiB3aWR0aH1weGBcbiAgICAgICAgICAgIDogYCR7Y29sbGFwc2VkID8gNzIgOiB3aWR0aH1weCBhdXRvYCxcbiAgICAgICAgICAnPiBhc2lkZSc6IHtcbiAgICAgICAgICAgIGdyaWRDb2x1bW46IHJpZ2h0ID8gMiA6IDEsXG4gICAgICAgICAgICB6SW5kZXgsXG4gICAgICAgICAgICBib3hTaGFkb3c6IG92ZXJsYXAgJiYgIWNvbGxhcHNlZCA/IHRoZW1lLmJveFNoYWRvdyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9LFxuICAgICAgICAgICc+IHNlY3Rpb24nOiB7XG4gICAgICAgICAgICBncmlkQ29sdW1uOiByaWdodCA/IDEgOiAyLFxuICAgICAgICAgICAgLi4uc2VjdGlvblN0eWxlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25kaXRpb246ICFmbGV4ICYmICFncmlkLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICc+IGFzaWRlJzoge1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiB0b3AsXG4gICAgICAgICAgICBsZWZ0OiAhcmlnaHQgJiYgbGVmdCxcbiAgICAgICAgICAgIHJpZ2h0OiByaWdodCAmJiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICB3aWR0aDogY29sbGFwc2VkID8gNzIgOiB3aWR0aCxcbiAgICAgICAgICAgIGJveFNoYWRvdzogb3ZlcmxhcCAmJiAhY29sbGFwc2VkID8gdGhlbWUuYm94U2hhZG93IDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBlYXNlLW91dCcsXG4gICAgICAgICAgICB6SW5kZXgsXG4gICAgICAgICAgICBpZlNtYWxsRG93bjoge1xuICAgICAgICAgICAgICB3aWR0aDogIWNvbGxhcHNlZCAmJiAnMTAwJScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gc2VjdGlvbic6IHtcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICFyaWdodCAmJiAob3ZlcmxhcCB8fCBjb2xsYXBzZWQgPyA3MiA6IHdpZHRoKSxcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiByaWdodCAmJiAob3ZlcmxhcCB8fCBjb2xsYXBzZWQgPyA3MiA6IHdpZHRoKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdtYXJnaW4gMjAwbXMgZWFzZS1vdXQnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIC4uLnNlY3Rpb25TdHlsZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9KSxcbiAgKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgbWVudSwgY29sbGFwc2VkLCAuLi5yZXN0IH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxhc2lkZSB7Li4ucmVzdH0+XG4gICAgICAgIHtDaGlsZHJlbi5tYXAoXG4gICAgICAgICAgbWVudSxcbiAgICAgICAgICBjaGlsZCA9PiAoY2hpbGQgPyBjbG9uZUVsZW1lbnQoY2hpbGQsIHsgY29sbGFwc2VkLCB3aWR0aDogJzEwMCUnIH0pIDogY2hpbGQpLFxuICAgICAgICApfVxuICAgICAgPC9hc2lkZT5cbiAgICAgIDxzZWN0aW9uPntjaGlsZHJlbn08L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICksXG4gICh7IHRvcCwgbGVmdCwgcmlnaHQsIHpJbmRleCwgZmxleCwgZ3JpZCwgc2VjdGlvblN0eWxlLCBvdmVybGFwLCAuLi5wIH0pID0+XG4gICAgT2JqZWN0LmtleXMocCksXG4pOyAqL1xuXG5leHBvcnQgY29uc3QgQXNpZGUgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7XG4gICAgdGhlbWUsXG4gICAgd2lkdGggPSAyNDAsXG4gICAgcmlnaHQsXG4gICAgbGVmdCA9IDAsXG4gICAgdG9wLFxuICAgIGNvbGxhcHNlZCxcbiAgICBvdmVybGFwLFxuICAgIHpJbmRleCA9IDEwLFxuICB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBwYWRkaW5nVG9wOiB0b3AsXG4gICAgbGVmdDogIXJpZ2h0ICYmIGxlZnQsXG4gICAgcmlnaHQ6IHJpZ2h0ICYmIDAsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYm90dG9tOiAwLFxuICAgIHdpZHRoOiBjb2xsYXBzZWQgPyA3MiA6IHdpZHRoLFxuICAgIGJveFNoYWRvdzogb3ZlcmxhcCAmJiAhY29sbGFwc2VkID8gdGhlbWUuYm94U2hhZG93IDogdW5kZWZpbmVkLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsXG4gICAgekluZGV4LFxuICAgIC8qIGlmU21hbGxEb3duOiB7XG4gICAgICB3aWR0aDogIWNvbGxhcHNlZCAmJiAnMTAwJScsXG4gICAgfSwgKi9cbiAgfSksXG4gICh7IGNoaWxkcmVuLCBjb2xsYXBzZWQsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxhc2lkZSB7Li4ucmVzdH0+XG4gICAgICB7Q2hpbGRyZW4ubWFwKFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgY2hpbGQgPT4gKGNoaWxkID8gY2xvbmVFbGVtZW50KGNoaWxkLCB7IGNvbGxhcHNlZCwgd2lkdGg6ICcxMDAlJyB9KSA6IGNoaWxkKSxcbiAgICAgICl9XG4gICAgPC9hc2lkZT5cbiAgKSxcbiAgKHsgdG9wLCBsZWZ0LCByaWdodCwgekluZGV4LCBmbGV4LCBncmlkLCBzZWN0aW9uU3R5bGUsIG92ZXJsYXAsIC4uLnAgfSkgPT5cbiAgICBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gY3JlYXRlQ29tcG9uZW50KFxuICAoe1xuICAgIGxlZnQgPSAyNDAsXG4gICAgcmlnaHQsXG4gICAgY29sbGFwc2VkLFxuICAgIG92ZXJsYXAsXG4gIH0pID0+ICh7XG4gICAgbWFyZ2luTGVmdDogIXJpZ2h0ICYmIChvdmVybGFwIHx8IGNvbGxhcHNlZCA/IDcyIDogbGVmdCksXG4gICAgbWFyZ2luUmlnaHQ6IHJpZ2h0ICYmIChvdmVybGFwIHx8IGNvbGxhcHNlZCA/IDcyIDogbGVmdCksXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSksXG4gICdzZWN0aW9uJyxcbiAgKHsgdG9wLCBsZWZ0LCByaWdodCwgekluZGV4LCBmbGV4LCBncmlkLCBzZWN0aW9uU3R5bGUsIG92ZXJsYXAsIC4uLnAgfSkgPT5cbiAgICBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IFNpZGViYXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBtZW51LCBjb2xsYXBzZWQsIHJpZ2h0LCBvdmVybGFwLCB3aWR0aCwgbGVmdCwgekluZGV4IH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxBc2lkZSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gcmlnaHQ9e3JpZ2h0fSBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gb3ZlcmxhcD17b3ZlcmxhcH0gd2lkdGg9e3dpZHRofSBsZWZ0PXtsZWZ0fSB6SW5kZXg9e3pJbmRleH0+XG4gICAgICB7bWVudX1cbiAgICA8L0FzaWRlPlxuICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSByaWdodD17cmlnaHR9IGNvbGxhcHNlZD17Y29sbGFwc2VkfSBvdmVybGFwPXtvdmVybGFwfSBsZWZ0PXt3aWR0aH0+e2NoaWxkcmVufTwvU2VjdGlvbj5cbiAgPC9GcmFnbWVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG5leHBvcnQgY29uc3QgQXV0b1NpZGViYXIgPSB3aXRoU3RhdGUoXG4gICdjb2xsYXBzZWQnLFxuICAnc2V0Q29sbGFwc2VkJyxcbiAgdHJ1ZSxcbikoKHsgc2V0Q29sbGFwc2VkLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxTaWRlYmFyXG4gICAgey4uLnByb3BzfVxuICAgIG92ZXJsYXBcbiAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldENvbGxhcHNlZChmYWxzZSl9XG4gICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRDb2xsYXBzZWQodHJ1ZSl9XG4gIC8+XG4pKTtcbiJdfQ==
