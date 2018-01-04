'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFela = require('react-fela');

var _olympFela = require('olymp-fela');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _link = require('./link');

var _link2 = _interopRequireDefault(_link);

var _faAngleDown = require('olymp-icons/lib/fa-angle-down');

var _faAngleDown2 = _interopRequireDefault(_faAngleDown);

var _faAngleLeft = require('olymp-icons/lib/fa-angle-left');

var _faAngleLeft2 = _interopRequireDefault(_faAngleLeft);

var _faAngleRight = require('olymp-icons/lib/fa-angle-right');

var _faAngleRight2 = _interopRequireDefault(_faAngleRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = (0, _reactFela.createComponent)(function (_ref) {
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
  return !vertically ? _react2.default.createElement(_faAngleDown2.default, { className: className, size: 15 }) : right ? _react2.default.createElement(_faAngleLeft2.default, { className: className, size: 15 }) : _react2.default.createElement(_faAngleRight2.default, { className: className, size: 15 });
}, function (p) {
  return Object.keys(p);
});

var NavItem = (0, _reactFela.createComponent)(function (_ref3) {
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
      backgroundColor: inverse && (0, _olympFela.fade)('#000000', 10),
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
  return _react2.default.createElement(
    Wrapper,
    { className: (0, _classnames2.default)(className, 'o-nav-item', 'o-nav-item-lvl-' + level) },
    _react2.default.createElement(
      _link2.default,
      { to: pathname, onClick: onClick, inverse: inverse, renderItemLink: renderItemLink },
      title,
      pages && !!pages.length && _react2.default.createElement(Icon, { vertically: vertically, right: right, inverse: inverse })
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
    _react.Children.map(children, function (child) {
      return (0, _react.cloneElement)(child, {
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
  title: _propTypes2.default.node.isRequired,
  /** path for router or undefined for placeholder */
  to: _propTypes2.default.string,
  /** submenu is mega dropdown menu */
  mega: _propTypes2.default.func,
  /**  */
  onClick: _propTypes2.default.func
};
NavItem.defaultProps = {
  level: 0,
  to: undefined,
  mega: null,
  onClick: undefined,
  renderItemWrapper: function renderItemWrapper(props) {
    return _react2.default.createElement('div', props);
  }
};
exports.default = NavItem;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbmF2YmFyL2l0ZW0uZXM2Il0sIm5hbWVzIjpbIkljb24iLCJ0aGVtZSIsImludmVyc2UiLCJmaWxsIiwibGlnaHQyIiwiY29sb3IiLCJjbGFzc05hbWUiLCJ2ZXJ0aWNhbGx5IiwicmlnaHQiLCJPYmplY3QiLCJrZXlzIiwicCIsIk5hdkl0ZW0iLCJwYWdlcyIsImhhc0ZsZXgiLCJmbGV4IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJmbG9hdCIsInBvc2l0aW9uIiwicGFkZGluZ1kiLCJzcGFjZTIiLCJwYWRkaW5nWCIsIm9uSG92ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpZk1pbmkiLCJzcGFjZTEiLCJwYXRobmFtZSIsImNoaWxkcmVuIiwidGl0bGUiLCJvbkNsaWNrIiwibGV2ZWwiLCJyZW5kZXJJdGVtIiwibWVnYSIsInJlbmRlck5hdiIsImlzTWVnYSIsIldyYXBwZXIiLCJyZW5kZXJJdGVtV3JhcHBlciIsInJlbmRlckl0ZW1MaW5rIiwibGVuZ3RoIiwic3ViIiwibWFwIiwiY2hpbGQiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwidG8iLCJzdHJpbmciLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxPQUFPLGdDQUNYO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsT0FBVixRQUFVQSxPQUFWO0FBQUEsU0FBeUI7QUFDdkJDLGdCQUFTRCxVQUFVRCxNQUFNRyxNQUFoQixHQUF5QkgsTUFBTUksS0FBeEM7QUFDQTtBQUNBO0FBSHVCLEdBQXpCO0FBQUEsQ0FEVyxFQU1YO0FBQUEsTUFBR0MsU0FBSCxTQUFHQSxTQUFIO0FBQUEsTUFB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ZWFjdCwgeyBDaGlsZHJlbiwgY2xvbmVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgZmFkZSB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJztcbmltcG9ydCB7IEZhQW5nbGVEb3duLCBGYUFuZ2xlTGVmdCwgRmFBbmdsZVJpZ2h0IH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuXG5jb25zdCBJY29uID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgaW52ZXJzZSB9KSA9PiAoe1xuICAgIGZpbGw6IGAke2ludmVyc2UgPyB0aGVtZS5saWdodDIgOiB0aGVtZS5jb2xvcn1gLFxuICAgIC8vIGNlbnRlclk6IHRydWUsXG4gICAgLy8gcmlnaHQ6IHRoZW1lLnNwYWNlMixcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgdmVydGljYWxseSwgcmlnaHQgfSkgPT5cbiAgICAoIXZlcnRpY2FsbHkgPyAoXG4gICAgICA8RmFBbmdsZURvd24gY2xhc3NOYW1lPXtjbGFzc05hbWV9IHNpemU9ezE1fSAvPlxuICAgICkgOiByaWdodCA/IChcbiAgICAgIDxGYUFuZ2xlTGVmdCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc2l6ZT17MTV9IC8+XG4gICAgKSA6IChcbiAgICAgIDxGYUFuZ2xlUmlnaHQgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHNpemU9ezE1fSAvPlxuICAgICkpLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgTmF2SXRlbSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGZpbGwsIGludmVyc2UsIHZlcnRpY2FsbHksIHJpZ2h0LCBwYWdlcyB9KSA9PiAoe1xuICAgIGhhc0ZsZXg6IHtcbiAgICAgIGZsZXg6IGZpbGwgJiYgJzEgMSBhdXRvJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgZmxleERpcmVjdGlvbjogZmlsbCA/ICdjb2x1bW4nIDogcmlnaHQgJiYgdmVydGljYWxseSAmJiAncm93LXJldmVyc2UnLFxuICAgIH0sXG4gICAgd2lkdGg6IHZlcnRpY2FsbHkgJiYgJzEwMCUnLFxuICAgIGZsb2F0OiAhdmVydGljYWxseSAmJiAnbGVmdCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZ1k6IHRoZW1lLnNwYWNlMixcbiAgICBwYWRkaW5nWDogdGhlbWUuc3BhY2UyLFxuICAgIG9uSG92ZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogaW52ZXJzZSAmJiBmYWRlKCcjMDAwMDAwJywgMTApLFxuICAgICAgJz4gZGl2Jzoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGlmTWluaToge1xuICAgICAgZmxvYXQ6ICdub25lJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcGFkZGluZ1g6IHRoZW1lLnNwYWNlMSxcbiAgICB9LFxuICB9KSxcbiAgKHtcbiAgICBjbGFzc05hbWUsXG4gICAgcGF0aG5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgdGl0bGUsXG4gICAgaW52ZXJzZSxcbiAgICB2ZXJ0aWNhbGx5LFxuICAgIHJpZ2h0LFxuICAgIHBhZ2VzLFxuICAgIG9uQ2xpY2ssXG4gICAgbGV2ZWwsXG4gICAgcmVuZGVySXRlbSxcbiAgICBtZWdhLFxuICAgIHJlbmRlck5hdixcbiAgICBpc01lZ2EsXG4gICAgcmVuZGVySXRlbVdyYXBwZXI6IFdyYXBwZXIsXG4gICAgcmVuZGVySXRlbUxpbmssXG4gIH0pID0+IChcbiAgICA8V3JhcHBlciBjbGFzc05hbWU9e2NuKGNsYXNzTmFtZSwgJ28tbmF2LWl0ZW0nLCBgby1uYXYtaXRlbS1sdmwtJHtsZXZlbH1gKX0+XG4gICAgICA8TGluayB0bz17cGF0aG5hbWV9IG9uQ2xpY2s9e29uQ2xpY2t9IGludmVyc2U9e2ludmVyc2V9IHJlbmRlckl0ZW1MaW5rPXtyZW5kZXJJdGVtTGlua30+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgICAge3BhZ2VzICYmXG4gICAgICAgICEhcGFnZXMubGVuZ3RoICYmIDxJY29uIHZlcnRpY2FsbHk9e3ZlcnRpY2FsbHl9IHJpZ2h0PXtyaWdodH0gaW52ZXJzZT17aW52ZXJzZX0gLz59XG4gICAgICA8L0xpbms+XG5cbiAgICAgIHtwYWdlcyAmJlxuICAgICAgICAhIXBhZ2VzLmxlbmd0aCAmJlxuICAgICAgICByZW5kZXJOYXYoe1xuICAgICAgICAgIGludmVyc2UsXG4gICAgICAgICAgdmVydGljYWxseSxcbiAgICAgICAgICByaWdodCxcbiAgICAgICAgICByZW5kZXJJdGVtLFxuICAgICAgICAgIHJlbmRlck5hdixcbiAgICAgICAgICByZW5kZXJJdGVtTGluayxcbiAgICAgICAgICBtZWdhLFxuICAgICAgICAgIGlzTWVnYSxcbiAgICAgICAgICByZW5kZXJJdGVtV3JhcHBlcjogV3JhcHBlcixcbiAgICAgICAgICBsZXZlbDogbGV2ZWwgKyAxLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHN1YjogdHJ1ZSxcbiAgICAgICAgfSl9XG4gICAgICB7Q2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PlxuICAgICAgICBjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICBpbnZlcnNlLFxuICAgICAgICAgIHZlcnRpY2FsbHksXG4gICAgICAgICAgcmlnaHQsXG4gICAgICAgICAgc3ViOiB0cnVlLFxuICAgICAgICAgIHJlbmRlckl0ZW0sXG4gICAgICAgICAgcmVuZGVySXRlbVdyYXBwZXI6IFdyYXBwZXIsXG4gICAgICAgICAgcmVuZGVySXRlbUxpbmssXG4gICAgICAgICAgbWVnYSxcbiAgICAgICAgICBpc01lZ2EsXG4gICAgICAgICAgcmVuZGVyTmF2LFxuICAgICAgICAgIGxldmVsOiBsZXZlbCArIDEsXG4gICAgICAgIH0pLFxuICAgICAgKX1cbiAgICA8L1dyYXBwZXI+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuTmF2SXRlbS5kaXNwbGF5TmFtZSA9ICdOYXZiYXIuSXRlbSc7XG5OYXZJdGVtLnByb3BUeXBlcyA9IHtcbiAgLyoqIHRpdGxlL2xhYmVsICovXG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKiogcGF0aCBmb3Igcm91dGVyIG9yIHVuZGVmaW5lZCBmb3IgcGxhY2Vob2xkZXIgKi9cbiAgdG86IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBzdWJtZW51IGlzIG1lZ2EgZHJvcGRvd24gbWVudSAqL1xuICBtZWdhOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5OYXZJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGV2ZWw6IDAsXG4gIHRvOiB1bmRlZmluZWQsXG4gIG1lZ2E6IG51bGwsXG4gIG9uQ2xpY2s6IHVuZGVmaW5lZCxcbiAgcmVuZGVySXRlbVdyYXBwZXI6IHByb3BzID0+IDxkaXYgey4uLnByb3BzfSAvPixcbn07XG5leHBvcnQgZGVmYXVsdCBOYXZJdGVtO1xuIl19
