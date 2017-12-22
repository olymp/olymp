import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { fade } from 'olymp-fela';
import cn from 'classnames';
import Link from './link';
import FaAngleDown from 'olymp-icons/lib/fa-angle-down';
import FaAngleLeft from 'olymp-icons/lib/fa-angle-left';
import FaAngleRight from 'olymp-icons/lib/fa-angle-right';


var Icon = createComponent(function (_ref) {
  var theme = _ref.theme,
      inverse = _ref.inverse;
  return {
    fill: '' + (inverse ? theme.light2 : theme.color)
    // centerY: true,
    // right: theme.space2,
  };
}, function (_ref2) {
  var className = _ref2.className,
      vertically = _ref2.vertically,
      right = _ref2.right;
  return !vertically ? React.createElement(FaAngleDown, { className: className, size: 15 }) : right ? React.createElement(FaAngleLeft, { className: className, size: 15 }) : React.createElement(FaAngleRight, { className: className, size: 15 });
}, function (p) {
  return Object.keys(p);
});

var NavItem = createComponent(function (_ref3) {
  var theme = _ref3.theme,
      fill = _ref3.fill,
      inverse = _ref3.inverse,
      vertically = _ref3.vertically,
      right = _ref3.right,
      pages = _ref3.pages;
  return {
    hasFlex: {
      flex: fill && '1 1 auto',
      display: 'flex',
      alignItems: 'center',
      flexDirection: fill ? 'column' : right && vertically && 'row-reverse'
    },
    width: vertically && '100%',
    float: !vertically && 'left',
    position: 'relative',
    paddingY: theme.space2,
    paddingX: theme.space2,
    onHover: {
      backgroundColor: inverse && fade('#000000', 10),
      '> div': {
        display: 'block'
      }
    },
    ifMini: {
      float: 'none',
      display: 'block',
      width: '100%',
      paddingX: theme.space1
    }
  };
}, function (_ref4) {
  var className = _ref4.className,
      pathname = _ref4.pathname,
      children = _ref4.children,
      title = _ref4.title,
      inverse = _ref4.inverse,
      vertically = _ref4.vertically,
      right = _ref4.right,
      pages = _ref4.pages,
      onClick = _ref4.onClick,
      level = _ref4.level,
      renderItem = _ref4.renderItem,
      mega = _ref4.mega,
      renderNav = _ref4.renderNav,
      isMega = _ref4.isMega,
      Wrapper = _ref4.renderItemWrapper,
      renderItemLink = _ref4.renderItemLink;
  return React.createElement(
    Wrapper,
    { className: cn(className, 'o-nav-item', 'o-nav-item-lvl-' + level) },
    React.createElement(
      Link,
      { to: pathname, onClick: onClick, inverse: inverse, renderItemLink: renderItemLink },
      title,
      pages && !!pages.length && React.createElement(Icon, { vertically: vertically, right: right, inverse: inverse })
    ),
    pages && !!pages.length && renderNav({
      inverse: inverse,
      vertically: vertically,
      right: right,
      renderItem: renderItem,
      renderNav: renderNav,
      renderItemLink: renderItemLink,
      mega: mega,
      isMega: isMega,
      renderItemWrapper: Wrapper,
      level: level + 1,
      pages: pages,
      sub: true
    }),
    Children.map(children, function (child) {
      return cloneElement(child, {
        inverse: inverse,
        vertically: vertically,
        right: right,
        sub: true,
        renderItem: renderItem,
        renderItemWrapper: Wrapper,
        renderItemLink: renderItemLink,
        mega: mega,
        isMega: isMega,
        renderNav: renderNav,
        level: level + 1
      });
    })
  );
}, function (p) {
  return Object.keys(p);
});
NavItem.displayName = 'Navbar.Item';
NavItem.propTypes = {
  /** title/label */
  title: PropTypes.node.isRequired,
  /** path for router or undefined for placeholder */
  to: PropTypes.string,
  /** submenu is mega dropdown menu */
  mega: PropTypes.func,
  /**  */
  onClick: PropTypes.func
};
NavItem.defaultProps = {
  level: 0,
  to: undefined,
  mega: null,
  onClick: undefined,
  renderItemWrapper: function renderItemWrapper(props) {
    return React.createElement('div', props);
  }
};
export default NavItem;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbmF2YmFyL2l0ZW0uZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hpbGRyZW4iLCJjbG9uZUVsZW1lbnQiLCJQcm9wVHlwZXMiLCJjcmVhdGVDb21wb25lbnQiLCJmYWRlIiwiY24iLCJMaW5rIiwiSWNvbiIsInRoZW1lIiwiaW52ZXJzZSIsImZpbGwiLCJsaWdodDIiLCJjb2xvciIsImNsYXNzTmFtZSIsInZlcnRpY2FsbHkiLCJyaWdodCIsIk9iamVjdCIsImtleXMiLCJwIiwiTmF2SXRlbSIsInBhZ2VzIiwiaGFzRmxleCIsImZsZXgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImZsb2F0IiwicG9zaXRpb24iLCJwYWRkaW5nWSIsInNwYWNlMiIsInBhZGRpbmdYIiwib25Ib3ZlciIsImJhY2tncm91bmRDb2xvciIsImlmTWluaSIsInNwYWNlMSIsInBhdGhuYW1lIiwiY2hpbGRyZW4iLCJ0aXRsZSIsIm9uQ2xpY2siLCJsZXZlbCIsInJlbmRlckl0ZW0iLCJtZWdhIiwicmVuZGVyTmF2IiwiaXNNZWdhIiwiV3JhcHBlciIsInJlbmRlckl0ZW1XcmFwcGVyIiwicmVuZGVySXRlbUxpbmsiLCJsZW5ndGgiLCJzdWIiLCJtYXAiLCJjaGlsZCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJ0byIsInN0cmluZyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxJQUFnQkMsUUFBaEIsRUFBMEJDLFlBQTFCLFFBQThDLE9BQTlDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFlBQXJCO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLFlBQWY7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpC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QUNBbkIsV0FBU3JDLFVBQVV3RDtBQVJELENBQXBCO0FBVUF2QyxRQUFRd0MsWUFBUixHQUF1QjtBQUNyQm5CLFNBQU8sQ0FEYztBQUVyQmdCLE1BQUlJLFNBRmlCO0FBR3JCbEIsUUFBTSxJQUhlO0FBSXJCSCxXQUFTcUIsU0FKWTtBQUtyQmQscUJBQW1CO0FBQUEsV0FBUywyQkFBU2UsS0FBVCxDQUFUO0FBQUE7QUFMRSxDQUF2QjtBQU9BLGVBQWUxQyxPQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbmF2YmFyL2l0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IGZhZGUgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluayc7XG5pbXBvcnQgeyBGYUFuZ2xlRG93biwgRmFBbmdsZUxlZnQsIEZhQW5nbGVSaWdodCB9IGZyb20gJ29seW1wLWljb25zJztcblxuY29uc3QgSWNvbiA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGludmVyc2UgfSkgPT4gKHtcbiAgICBmaWxsOiBgJHtpbnZlcnNlID8gdGhlbWUubGlnaHQyIDogdGhlbWUuY29sb3J9YCxcbiAgICAvLyBjZW50ZXJZOiB0cnVlLFxuICAgIC8vIHJpZ2h0OiB0aGVtZS5zcGFjZTIsXG4gIH0pLFxuICAoeyBjbGFzc05hbWUsIHZlcnRpY2FsbHksIHJpZ2h0IH0pID0+XG4gICAgKCF2ZXJ0aWNhbGx5ID8gKFxuICAgICAgPEZhQW5nbGVEb3duIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzaXplPXsxNX0gLz5cbiAgICApIDogcmlnaHQgPyAoXG4gICAgICA8RmFBbmdsZUxlZnQgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHNpemU9ezE1fSAvPlxuICAgICkgOiAoXG4gICAgICA8RmFBbmdsZVJpZ2h0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzaXplPXsxNX0gLz5cbiAgICApKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IE5hdkl0ZW0gPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBmaWxsLCBpbnZlcnNlLCB2ZXJ0aWNhbGx5LCByaWdodCwgcGFnZXMgfSkgPT4gKHtcbiAgICBoYXNGbGV4OiB7XG4gICAgICBmbGV4OiBmaWxsICYmICcxIDEgYXV0bycsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGZsZXhEaXJlY3Rpb246IGZpbGwgPyAnY29sdW1uJyA6IHJpZ2h0ICYmIHZlcnRpY2FsbHkgJiYgJ3Jvdy1yZXZlcnNlJyxcbiAgICB9LFxuICAgIHdpZHRoOiB2ZXJ0aWNhbGx5ICYmICcxMDAlJyxcbiAgICBmbG9hdDogIXZlcnRpY2FsbHkgJiYgJ2xlZnQnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHBhZGRpbmdZOiB0aGVtZS5zcGFjZTIsXG4gICAgcGFkZGluZ1g6IHRoZW1lLnNwYWNlMixcbiAgICBvbkhvdmVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGludmVyc2UgJiYgZmFkZSgnIzAwMDAwMCcsIDEwKSxcbiAgICAgICc+IGRpdic6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpZk1pbmk6IHtcbiAgICAgIGZsb2F0OiAnbm9uZScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHBhZGRpbmdYOiB0aGVtZS5zcGFjZTEsXG4gICAgfSxcbiAgfSksXG4gICh7XG4gICAgY2xhc3NOYW1lLFxuICAgIHBhdGhuYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIHRpdGxlLFxuICAgIGludmVyc2UsXG4gICAgdmVydGljYWxseSxcbiAgICByaWdodCxcbiAgICBwYWdlcyxcbiAgICBvbkNsaWNrLFxuICAgIGxldmVsLFxuICAgIHJlbmRlckl0ZW0sXG4gICAgbWVnYSxcbiAgICByZW5kZXJOYXYsXG4gICAgaXNNZWdhLFxuICAgIHJlbmRlckl0ZW1XcmFwcGVyOiBXcmFwcGVyLFxuICAgIHJlbmRlckl0ZW1MaW5rLFxuICB9KSA9PiAoXG4gICAgPFdyYXBwZXIgY2xhc3NOYW1lPXtjbihjbGFzc05hbWUsICdvLW5hdi1pdGVtJywgYG8tbmF2LWl0ZW0tbHZsLSR7bGV2ZWx9YCl9PlxuICAgICAgPExpbmsgdG89e3BhdGhuYW1lfSBvbkNsaWNrPXtvbkNsaWNrfSBpbnZlcnNlPXtpbnZlcnNlfSByZW5kZXJJdGVtTGluaz17cmVuZGVySXRlbUxpbmt9PlxuICAgICAgICB7dGl0bGV9XG4gICAgICAgIHtwYWdlcyAmJlxuICAgICAgICAhIXBhZ2VzLmxlbmd0aCAmJiA8SWNvbiB2ZXJ0aWNhbGx5PXt2ZXJ0aWNhbGx5fSByaWdodD17cmlnaHR9IGludmVyc2U9e2ludmVyc2V9IC8+fVxuICAgICAgPC9MaW5rPlxuXG4gICAgICB7cGFnZXMgJiZcbiAgICAgICAgISFwYWdlcy5sZW5ndGggJiZcbiAgICAgICAgcmVuZGVyTmF2KHtcbiAgICAgICAgICBpbnZlcnNlLFxuICAgICAgICAgIHZlcnRpY2FsbHksXG4gICAgICAgICAgcmlnaHQsXG4gICAgICAgICAgcmVuZGVySXRlbSxcbiAgICAgICAgICByZW5kZXJOYXYsXG4gICAgICAgICAgcmVuZGVySXRlbUxpbmssXG4gICAgICAgICAgbWVnYSxcbiAgICAgICAgICBpc01lZ2EsXG4gICAgICAgICAgcmVuZGVySXRlbVdyYXBwZXI6IFdyYXBwZXIsXG4gICAgICAgICAgbGV2ZWw6IGxldmVsICsgMSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICBzdWI6IHRydWUsXG4gICAgICAgIH0pfVxuICAgICAge0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT5cbiAgICAgICAgY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgaW52ZXJzZSxcbiAgICAgICAgICB2ZXJ0aWNhbGx5LFxuICAgICAgICAgIHJpZ2h0LFxuICAgICAgICAgIHN1YjogdHJ1ZSxcbiAgICAgICAgICByZW5kZXJJdGVtLFxuICAgICAgICAgIHJlbmRlckl0ZW1XcmFwcGVyOiBXcmFwcGVyLFxuICAgICAgICAgIHJlbmRlckl0ZW1MaW5rLFxuICAgICAgICAgIG1lZ2EsXG4gICAgICAgICAgaXNNZWdhLFxuICAgICAgICAgIHJlbmRlck5hdixcbiAgICAgICAgICBsZXZlbDogbGV2ZWwgKyAxLFxuICAgICAgICB9KSxcbiAgICAgICl9XG4gICAgPC9XcmFwcGVyPlxuICApLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbk5hdkl0ZW0uZGlzcGxheU5hbWUgPSAnTmF2YmFyLkl0ZW0nO1xuTmF2SXRlbS5wcm9wVHlwZXMgPSB7XG4gIC8qKiB0aXRsZS9sYWJlbCAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgLyoqIHBhdGggZm9yIHJvdXRlciBvciB1bmRlZmluZWQgZm9yIHBsYWNlaG9sZGVyICovXG4gIHRvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogc3VibWVudSBpcyBtZWdhIGRyb3Bkb3duIG1lbnUgKi9cbiAgbWVnYTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKiAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG59O1xuTmF2SXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gIGxldmVsOiAwLFxuICB0bzogdW5kZWZpbmVkLFxuICBtZWdhOiBudWxsLFxuICBvbkNsaWNrOiB1bmRlZmluZWQsXG4gIHJlbmRlckl0ZW1XcmFwcGVyOiBwcm9wcyA9PiA8ZGl2IHsuLi5wcm9wc30gLz4sXG59O1xuZXhwb3J0IGRlZmF1bHQgTmF2SXRlbTtcbiJdfQ==
