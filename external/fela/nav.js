var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';
import { Link } from 'olymp-router';
import cn from 'classnames';

// Based on http://w3bits.com/labs/css-responsive-nav/
// Nav styles
var styles = function styles(_ref) {
  var theme = _ref.theme;
  return {
    '> ul': {
      display: 'none'
    },
    '& ul': {
      // margin: `0 -0.5em`,
      margin: 0,
      padding: 0
    },
    '> #tm:checked + .o-nav-menu': {
      display: 'block'
    },
    '& input[type="checkbox"]': {
      display: 'none'
    },
    '& ul span.drop-icon': {
      display: 'none'
    },
    '& ul.sub-menu': {
      backgroundColor: theme.light,
      boxShadow: theme.boxShadow,
      display: 'none',
      '& a:hover': {},
      '& li:last-child': {
        borderWidth: 0
      },
      '& a': {
        padding: theme.padding1
      }
    },
    '& li': {
      position: 'relative',
      display: 'block',
      '& label.drop-icon': {
        position: 'absolute',
        right: '1.5em',
        top: '1.25em'
      }
    },
    '& .toggle': {
      position: 'relative',
      display: 'block',
      padding: '1em 1.5em',
      '& span.drop-icon': {
        borderRadius: '50%',
        width: '1em',
        height: '1em',
        textAlign: 'center'
      },
      '& .drop-icon': {
        position: 'absolute',
        right: '1.5em',
        top: '1.25em'
      }
    },
    '& a': {
      position: 'relative',
      display: 'block',
      padding: '1em 0.5em',
      transition: 'all .125s ease-in-out',
      onHover: {}
    },
    '& li.brand > a': {
      padding: 0
    },
    '& input[type="checkbox"]:checked + ul.sub-menu': {
      display: 'block'
    },
    '& label.drop-icon': {
      borderRadius: '50%',
      width: '1em',
      height: '1em',
      textAlign: 'center'
    },
    '& .drop-icon': {
      lineHeight: 1
    },
    ifSmallDown: {
      '& li': {
        width: '33.333%'
      },
      '& ul.sub-menu li': {
        width: 'auto'
      }
    },
    ifMediumUp: {
      '> ul': {
        display: 'block',
        overflow: 'visible'
      },
      '& .toggle': {
        display: 'none'
      },
      '& label.drop-icon': {
        display: 'none'
      },
      '& ul span.drop-icon': {
        display: 'inline-block'
      },
      '& li': {
        float: 'left',
        borderWidth: '0 1px 0 0'
      },
      '& li.right': {
        float: 'right',
        '> ul': {
          left: 'initial',
          right: 0,
          '> li > ul.sub-menu': {
            top: 0,
            left: 'initial',
            right: '100%'
          }
        }
      },
      '& li:hover > ul': {
        display: 'block'
      },
      '& ul.sub-menu': {
        borderWidth: 0,
        margin: 0,
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '15em',
        zIndex: 3000,
        display: 'none',
        '> li > ul.sub-menu': {
          top: 0,
          left: '100%'
        },
        '& li': {
          float: 'none',
          borderWidth: '0 0 1px',
          '> a': {
            padding: '0.3em 0.5em'
          }
        }
      },
      '& input[type="checkbox"]:checked + .sub-menu': {
        display: 'none'
      }
    }
  };
};

// Root navigation

var _ref3 = React.createElement(
  'label',
  { htmlFor: 'tm', className: 'toggle' },
  'Navigation ',
  React.createElement(
    'span',
    { className: 'drop-icon' },
    '\u25BE'
  )
);

var _ref4 = React.createElement('input', { type: 'checkbox', id: 'tm' });

var Nav = createComponent(styles, function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children;
  return React.createElement(
    'nav',
    { className: cn(className, 'o-nav') },
    _ref3,
    _ref4,
    React.createElement(
      'ul',
      { className: 'o-nav-menu clearfix' },
      children
    )
  );
});

// Item Label (MenuItem + Item)
var ItemLabel = function ItemLabel(_ref5) {
  var Render = _ref5.renderLabel,
      props = _objectWithoutProperties(_ref5, ['renderLabel']);

  if (props.href) {
    return React.createElement(
      'a',
      { href: props.href, onClick: props.onClick },
      props.children
    );
  } else if (props.to) {
    return React.createElement(
      Link,
      { to: props.to, onClick: props.onClick },
      props.children
    );
  } else if (Render && typeof renderLabel === 'function') {
    return Render(props);
  } else if (Render) {
    return React.createElement(Render, props);
  }
  return React.createElement(
    'a',
    { onClick: props.onClick },
    props.children
  );
};

// List Item
export { ItemLabel };
var Item = function Item(_ref6) {
  var className = _ref6.className,
      style = _ref6.style,
      children = _ref6.children,
      _ref6$level = _ref6.level,
      level = _ref6$level === undefined ? 0 : _ref6$level,
      rest = _objectWithoutProperties(_ref6, ['className', 'style', 'children', 'level']);

  return React.createElement(
    'li',
    {
      className: cn('o-nav-item', 'o-nav-item-lvl-' + level, className),
      style: style
    },
    React.createElement(
      ItemLabel,
      rest,
      children
    )
  );
};

// Menu Item (Submenu)
export { Item };

var _ref8 = React.createElement(
  'span',
  { className: 'drop-icon' },
  '\u25BE'
);

var _ref9 = React.createElement(
  'label',
  { title: 'Toggle Drop-down', className: 'drop-icon', htmlFor: 'sm2' },
  '\u25BE'
);

var _ref10 = React.createElement('input', { type: 'checkbox', className: 'sm2' });

var MenuItem = function MenuItem(_ref7) {
  var className = _ref7.className,
      style = _ref7.style,
      children = _ref7.children,
      title = _ref7.title,
      _ref7$level = _ref7.level,
      level = _ref7$level === undefined ? 0 : _ref7$level,
      rest = _objectWithoutProperties(_ref7, ['className', 'style', 'children', 'title', 'level']);

  return React.createElement(
    'li',
    { className: cn('o-nav-item', 'o-nav-subitem', 'o-nav-item-lvl-' + level, className), style: style },
    React.createElement(
      ItemLabel,
      rest,
      title,
      _ref8,
      _ref9
    ),
    _ref10,
    React.createElement(
      'ul',
      { className: 'sub-menu' },
      Children.map(children, function (child) {
        return cloneElement(child, { level: level + 1 });
      })
    )
  );
};

// Menu Item (Submenu)
export { MenuItem };
var Right = function Right(_ref11) {
  var children = _ref11.children,
      rest = _objectWithoutProperties(_ref11, ['children']);

  return Children.map(children, function (child, i) {
    return cloneElement(child, _extends({}, rest, { className: 'right', key: i }));
  }).reverse();
};

export { Right };
Nav.Item = Item;
Nav.Menu = MenuItem;
Nav.Right = Right;
Nav.Mega = createComponent(function (_ref12) {
  var columns = _ref12.columns;
  return {
    ifMediumUp: {
      '> ul.sub-menu.sub-menu': {
        width: '45em',
        '> .o-nav-item': {
          display: 'inline-block',
          float: 'left',
          width: Math.floor(100 / (columns || 1)) + '%',
          '> a': {
            fontWeight: 'bold',
            '> .drop-icon': {
              display: 'none'
            }
          },
          '> ul': {
            display: 'block',
            position: 'relative',
            right: 'initial',
            width: 'initial',
            border: 0,
            boxShadow: 'none',
            '& a': {
              padding: '0em 0.5em'
            }
          }
        }
      }
    }
  };
}, function (p) {
  return React.createElement(MenuItem, p);
}, function (p) {
  return Object.keys(p);
});

var _ref13 = React.createElement(
  Nav,
  null,
  React.createElement(
    Nav.Item,
    { href: '#' },
    'Sample'
  ),
  React.createElement(
    Nav.Menu,
    { title: '2-level DD' },
    React.createElement(
      Nav.Item,
      { href: '#' },
      'Sample 2.1'
    ),
    React.createElement(
      Nav.Menu,
      { title: 'Item 2.2' },
      React.createElement(
        Nav.Item,
        { href: '#' },
        'Sample 2.2.1'
      ),
      React.createElement(
        Nav.Item,
        { href: '#' },
        'Sample 2.2.2'
      ),
      React.createElement(
        Nav.Item,
        { href: '#' },
        'Sample 2.2.3'
      )
    ),
    React.createElement(
      Nav.Item,
      { href: '#' },
      'Sample 3.4'
    )
  ),
  React.createElement(
    Nav.Right,
    null,
    React.createElement(
      Nav.Item,
      { href: '#' },
      'Right'
    ),
    React.createElement(
      Nav.Menu,
      { title: 'Right 2' },
      React.createElement(
        Nav.Item,
        { href: '#' },
        'Sample 2.2.1'
      ),
      React.createElement(
        Nav.Item,
        { href: '#' },
        'Sample 2.2.2'
      ),
      React.createElement(
        Nav.Item,
        { href: '#' },
        'Sample 2.2.3'
      )
    )
  )
);

Nav.Example = function () {
  return _ref13;
};

export default Nav;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbmF2LmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNoaWxkcmVuIiwiY2xvbmVFbGVtZW50IiwiY3JlYXRlQ29tcG9uZW50IiwiTGluayIsImNuIiwic3R5bGVzIiwidGhlbWUiLCJkaXNwbGF5IiwibWFyZ2luIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImxpZ2h0IiwiYm94U2hhZG93IiwiYm9yZGVyV2lkdGgiLCJwYWRkaW5nMSIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImhlaWdodCIsInRleHRBbGlnbiIsInRyYW5zaXRpb24iLCJvbkhvdmVyIiwibGluZUhlaWdodCIsImlmU21hbGxEb3duIiwiaWZNZWRpdW1VcCIsIm92ZXJmbG93IiwiZmxvYXQiLCJsZWZ0IiwiekluZGV4IiwiTmF2IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJJdGVtTGFiZWwiLCJSZW5kZXIiLCJyZW5kZXJMYWJlbCIsInByb3BzIiwiaHJlZiIsIm9uQ2xpY2siLCJ0byIsIkl0ZW0iLCJzdHlsZSIsImxldmVsIiwicmVzdCIsIk1lbnVJdGVtIiwidGl0bGUiLCJtYXAiLCJjaGlsZCIsIlJpZ2h0IiwiaSIsImtleSIsInJldmVyc2UiLCJNZW51IiwiTWVnYSIsImNvbHVtbnMiLCJNYXRoIiwiZmxvb3IiLCJmb250V2VpZ2h0IiwiYm9yZGVyIiwicCIsIk9iamVjdCIsImtleXMiLCJFeGFtcGxlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsUUFBaEIsRUFBMEJDLFlBQTFCLFFBQThDLE9BQTlDO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjs7QUFFQTtBQUNBO0FBQ0EsSUFBTUMsU0FBUyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FB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QUFLLEdBQWY7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFDLFNBQUQsQ0FBSyxJQUFMO0FBQUEsUUFBVSxPQUFNLFNBQWhCO0FBQ0U7QUFBQyxXQUFELENBQUssSUFBTDtBQUFBLFVBQVUsTUFBSyxHQUFmO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQyxXQUFELENBQUssSUFBTDtBQUFBLFVBQVUsTUFBSyxHQUFmO0FBQUE7QUFBQSxPQUZGO0FBR0U7QUFBQyxXQUFELENBQUssSUFBTDtBQUFBLFVBQVUsTUFBSyxHQUFmO0FBQUE7QUFBQTtBQUhGO0FBRkY7QUFYRixDOztBQURGN0IsSUFBSWdDLE9BQUosR0FBYztBQUFBO0FBQUEsQ0FBZDs7QUF1QkEsZUFBZWhDLEdBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly93M2JpdHMuY29tL2xhYnMvY3NzLXJlc3BvbnNpdmUtbmF2L1xuLy8gTmF2IHN0eWxlc1xuY29uc3Qgc3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gKHtcbiAgJz4gdWwnOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9LFxuICAnJiB1bCc6IHtcbiAgICAvLyBtYXJnaW46IGAwIC0wLjVlbWAsXG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gIH0sXG4gICc+ICN0bTpjaGVja2VkICsgLm8tbmF2LW1lbnUnOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgfSxcbiAgJyYgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJzoge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgfSxcbiAgJyYgdWwgc3Bhbi5kcm9wLWljb24nOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9LFxuICAnJiB1bC5zdWItbWVudSc6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmxpZ2h0LFxuICAgIGJveFNoYWRvdzogdGhlbWUuYm94U2hhZG93LFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAnJiBhOmhvdmVyJzoge30sXG4gICAgJyYgbGk6bGFzdC1jaGlsZCc6IHtcbiAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgIH0sXG4gICAgJyYgYSc6IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnBhZGRpbmcxLFxuICAgIH0sXG4gIH0sXG4gICcmIGxpJzoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgJyYgbGFiZWwuZHJvcC1pY29uJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICByaWdodDogJzEuNWVtJyxcbiAgICAgIHRvcDogJzEuMjVlbScsXG4gICAgfSxcbiAgfSxcbiAgJyYgLnRvZ2dsZSc6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICcxZW0gMS41ZW0nLFxuICAgICcmIHNwYW4uZHJvcC1pY29uJzoge1xuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIHdpZHRoOiAnMWVtJyxcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIH0sXG4gICAgJyYgLmRyb3AtaWNvbic6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcmlnaHQ6ICcxLjVlbScsXG4gICAgICB0b3A6ICcxLjI1ZW0nLFxuICAgIH0sXG4gIH0sXG4gICcmIGEnOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nOiAnMWVtIDAuNWVtJyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIC4xMjVzIGVhc2UtaW4tb3V0JyxcbiAgICBvbkhvdmVyOiB7fSxcbiAgfSxcbiAgJyYgbGkuYnJhbmQgPiBhJzoge1xuICAgIHBhZGRpbmc6IDAsXG4gIH0sXG4gICcmIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgdWwuc3ViLW1lbnUnOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgfSxcbiAgJyYgbGFiZWwuZHJvcC1pY29uJzoge1xuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgd2lkdGg6ICcxZW0nLFxuICAgIGhlaWdodDogJzFlbScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgfSxcbiAgJyYgLmRyb3AtaWNvbic6IHtcbiAgICBsaW5lSGVpZ2h0OiAxLFxuICB9LFxuICBpZlNtYWxsRG93bjoge1xuICAgICcmIGxpJzoge1xuICAgICAgd2lkdGg6ICczMy4zMzMlJyxcbiAgICB9LFxuICAgICcmIHVsLnN1Yi1tZW51IGxpJzoge1xuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICB9LFxuICB9LFxuICBpZk1lZGl1bVVwOiB7XG4gICAgJz4gdWwnOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICd2aXNpYmxlJyxcbiAgICB9LFxuICAgICcmIC50b2dnbGUnOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgICAnJiBsYWJlbC5kcm9wLWljb24nOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgICAnJiB1bCBzcGFuLmRyb3AtaWNvbic6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIH0sXG4gICAgJyYgbGknOiB7XG4gICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgYm9yZGVyV2lkdGg6ICcwIDFweCAwIDAnLFxuICAgIH0sXG4gICAgJyYgbGkucmlnaHQnOiB7XG4gICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICc+IHVsJzoge1xuICAgICAgICBsZWZ0OiAnaW5pdGlhbCcsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAnPiBsaSA+IHVsLnN1Yi1tZW51Jzoge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAnaW5pdGlhbCcsXG4gICAgICAgICAgcmlnaHQ6ICcxMDAlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJiBsaTpob3ZlciA+IHVsJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB9LFxuICAgICcmIHVsLnN1Yi1tZW51Jzoge1xuICAgICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogJzEwMCUnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHdpZHRoOiAnMTVlbScsXG4gICAgICB6SW5kZXg6IDMwMDAsXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAnPiBsaSA+IHVsLnN1Yi1tZW51Jzoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6ICcxMDAlJyxcbiAgICAgIH0sXG4gICAgICAnJiBsaSc6IHtcbiAgICAgICAgZmxvYXQ6ICdub25lJyxcbiAgICAgICAgYm9yZGVyV2lkdGg6ICcwIDAgMXB4JyxcbiAgICAgICAgJz4gYSc6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMC4zZW0gMC41ZW0nLFxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAgJyYgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAuc3ViLW1lbnUnOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG4vLyBSb290IG5hdmlnYXRpb25cbmNvbnN0IE5hdiA9IGNyZWF0ZUNvbXBvbmVudChzdHlsZXMsICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkgPT4gKFxuICA8bmF2IGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCAnby1uYXYnKX0+XG4gICAgPGxhYmVsIGh0bWxGb3I9XCJ0bVwiIGNsYXNzTmFtZT1cInRvZ2dsZVwiPlxuICAgICAgTmF2aWdhdGlvbiA8c3BhbiBjbGFzc05hbWU9XCJkcm9wLWljb25cIj7ilr48L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0bVwiIC8+XG4gICAgPHVsIGNsYXNzTmFtZT1cIm8tbmF2LW1lbnUgY2xlYXJmaXhcIj57Y2hpbGRyZW59PC91bD5cbiAgPC9uYXY+XG4pKTtcblxuLy8gSXRlbSBMYWJlbCAoTWVudUl0ZW0gKyBJdGVtKVxuZXhwb3J0IGNvbnN0IEl0ZW1MYWJlbCA9ICh7IHJlbmRlckxhYmVsOiBSZW5kZXIsIC4uLnByb3BzIH0pID0+IHtcbiAgaWYgKHByb3BzLmhyZWYpIHtcbiAgICByZXR1cm4gPGEgaHJlZj17cHJvcHMuaHJlZn0gb25DbGljaz17cHJvcHMub25DbGlja30+e3Byb3BzLmNoaWxkcmVufTwvYT47XG4gIH0gZWxzZSBpZiAocHJvcHMudG8pIHtcbiAgICByZXR1cm4gPExpbmsgdG89e3Byb3BzLnRvfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT57cHJvcHMuY2hpbGRyZW59PC9MaW5rPjtcbiAgfSBlbHNlIGlmIChSZW5kZXIgJiYgdHlwZW9mIHJlbmRlckxhYmVsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIFJlbmRlcihwcm9wcyk7XG4gIH0gZWxzZSBpZiAoUmVuZGVyKSB7XG4gICAgcmV0dXJuIDxSZW5kZXIgey4uLnByb3BzfSAvPjtcbiAgfVxuICByZXR1cm4gPGEgb25DbGljaz17cHJvcHMub25DbGlja30+e3Byb3BzLmNoaWxkcmVufTwvYT47XG59O1xuXG4vLyBMaXN0IEl0ZW1cbmV4cG9ydCBjb25zdCBJdGVtID0gKHsgY2xhc3NOYW1lLCBzdHlsZSwgY2hpbGRyZW4sIGxldmVsID0gMCwgLi4ucmVzdCB9KSA9PiAoXG4gIDxsaVxuICAgIGNsYXNzTmFtZT17Y24oJ28tbmF2LWl0ZW0nLCBgby1uYXYtaXRlbS1sdmwtJHtsZXZlbH1gLCBjbGFzc05hbWUpfVxuICAgIHN0eWxlPXtzdHlsZX1cbiAgPlxuICAgIDxJdGVtTGFiZWwgey4uLnJlc3R9PntjaGlsZHJlbn08L0l0ZW1MYWJlbD5cbiAgPC9saT5cbik7XG5cbi8vIE1lbnUgSXRlbSAoU3VibWVudSlcbmV4cG9ydCBjb25zdCBNZW51SXRlbSA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgc3R5bGUsXG4gIGNoaWxkcmVuLFxuICB0aXRsZSxcbiAgbGV2ZWwgPSAwLFxuICAuLi5yZXN0XG59KSA9PiAoXG4gIDxsaSBjbGFzc05hbWU9e2NuKCdvLW5hdi1pdGVtJywgJ28tbmF2LXN1Yml0ZW0nLCBgby1uYXYtaXRlbS1sdmwtJHtsZXZlbH1gLCBjbGFzc05hbWUpfSBzdHlsZT17c3R5bGV9PlxuICAgIDxJdGVtTGFiZWwgey4uLnJlc3R9PlxuICAgICAge3RpdGxlfVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHJvcC1pY29uXCI+4pa+PC9zcGFuPlxuICAgICAgPGxhYmVsIHRpdGxlPVwiVG9nZ2xlIERyb3AtZG93blwiIGNsYXNzTmFtZT1cImRyb3AtaWNvblwiIGh0bWxGb3I9XCJzbTJcIj5cbiAgICAgICAg4pa+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvSXRlbUxhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJzbTJcIiAvPlxuICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAge0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT5cbiAgICAgICAgY2xvbmVFbGVtZW50KGNoaWxkLCB7IGxldmVsOiBsZXZlbCArIDEgfSksXG4gICAgICApfVxuICAgIDwvdWw+XG4gIDwvbGk+XG4pO1xuXG4vLyBNZW51IEl0ZW0gKFN1Ym1lbnUpXG5leHBvcnQgY29uc3QgUmlnaHQgPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PlxuICBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT5cbiAgICBjbG9uZUVsZW1lbnQoY2hpbGQsIHsgLi4ucmVzdCwgY2xhc3NOYW1lOiAncmlnaHQnLCBrZXk6IGkgfSksXG4gICkucmV2ZXJzZSgpO1xuXG5OYXYuSXRlbSA9IEl0ZW07XG5OYXYuTWVudSA9IE1lbnVJdGVtO1xuTmF2LlJpZ2h0ID0gUmlnaHQ7XG5OYXYuTWVnYSA9IGNyZWF0ZUNvbXBvbmVudCgoeyBjb2x1bW5zIH0pID0+ICh7XG4gIGlmTWVkaXVtVXA6IHtcbiAgICAnPiB1bC5zdWItbWVudS5zdWItbWVudSc6IHtcbiAgICAgIHdpZHRoOiAnNDVlbScsXG4gICAgICAnPiAuby1uYXYtaXRlbSc6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgICAgIHdpZHRoOiBgJHtNYXRoLmZsb29yKDEwMCAvIChjb2x1bW5zIHx8IDEpKX0lYCxcbiAgICAgICAgJz4gYSc6IHtcbiAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgJz4gLmRyb3AtaWNvbic6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICc+IHVsJzoge1xuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgcmlnaHQ6ICdpbml0aWFsJyxcbiAgICAgICAgICB3aWR0aDogJ2luaXRpYWwnLFxuICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAnJiBhJzoge1xuICAgICAgICAgICAgcGFkZGluZzogJzBlbSAwLjVlbScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSksIHAgPT4gPE1lbnVJdGVtIHsuLi5wfSAvPiwgcCA9PiBPYmplY3Qua2V5cyhwKSk7XG5cbk5hdi5FeGFtcGxlID0gKCkgPT4gKFxuICA8TmF2PlxuICAgIDxOYXYuSXRlbSBocmVmPVwiI1wiPlNhbXBsZTwvTmF2Lkl0ZW0+XG4gICAgPE5hdi5NZW51IHRpdGxlPVwiMi1sZXZlbCBERFwiPlxuICAgICAgPE5hdi5JdGVtIGhyZWY9XCIjXCI+U2FtcGxlIDIuMTwvTmF2Lkl0ZW0+XG4gICAgICA8TmF2Lk1lbnUgdGl0bGU9XCJJdGVtIDIuMlwiPlxuICAgICAgICA8TmF2Lkl0ZW0gaHJlZj1cIiNcIj5TYW1wbGUgMi4yLjE8L05hdi5JdGVtPlxuICAgICAgICA8TmF2Lkl0ZW0gaHJlZj1cIiNcIj5TYW1wbGUgMi4yLjI8L05hdi5JdGVtPlxuICAgICAgICA8TmF2Lkl0ZW0gaHJlZj1cIiNcIj5TYW1wbGUgMi4yLjM8L05hdi5JdGVtPlxuICAgICAgPC9OYXYuTWVudT5cbiAgICAgIDxOYXYuSXRlbSBocmVmPVwiI1wiPlNhbXBsZSAzLjQ8L05hdi5JdGVtPlxuICAgIDwvTmF2Lk1lbnU+XG4gICAgPE5hdi5SaWdodD5cbiAgICAgIDxOYXYuSXRlbSBocmVmPVwiI1wiPlJpZ2h0PC9OYXYuSXRlbT5cbiAgICAgIDxOYXYuTWVudSB0aXRsZT1cIlJpZ2h0IDJcIj5cbiAgICAgICAgPE5hdi5JdGVtIGhyZWY9XCIjXCI+U2FtcGxlIDIuMi4xPC9OYXYuSXRlbT5cbiAgICAgICAgPE5hdi5JdGVtIGhyZWY9XCIjXCI+U2FtcGxlIDIuMi4yPC9OYXYuSXRlbT5cbiAgICAgICAgPE5hdi5JdGVtIGhyZWY9XCIjXCI+U2FtcGxlIDIuMi4zPC9OYXYuSXRlbT5cbiAgICAgIDwvTmF2Lk1lbnU+XG4gICAgPC9OYXYuUmlnaHQ+XG4gIDwvTmF2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl19
