'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Right = exports.MenuItem = exports.Item = exports.ItemLabel = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

var _olympRouter = require('olymp-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

var _ref3 = _react2.default.createElement(
  'label',
  { htmlFor: 'tm', className: 'toggle' },
  'Navigation ',
  _react2.default.createElement(
    'span',
    { className: 'drop-icon' },
    '\u25BE'
  )
);

var _ref4 = _react2.default.createElement('input', { type: 'checkbox', id: 'tm' });

var Nav = (0, _reactFela.createComponent)(styles, function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children;
  return _react2.default.createElement(
    'nav',
    { className: (0, _classnames2.default)(className, 'o-nav') },
    _ref3,
    _ref4,
    _react2.default.createElement(
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
    return _react2.default.createElement(
      'a',
      { href: props.href, onClick: props.onClick },
      props.children
    );
  } else if (props.to) {
    return _react2.default.createElement(
      _olympRouter.Link,
      { to: props.to, onClick: props.onClick },
      props.children
    );
  } else if (Render && typeof renderLabel === 'function') {
    return Render(props);
  } else if (Render) {
    return _react2.default.createElement(Render, props);
  }
  return _react2.default.createElement(
    'a',
    { onClick: props.onClick },
    props.children
  );
};

// List Item
exports.ItemLabel = ItemLabel;
var Item = function Item(_ref6) {
  var className = _ref6.className,
      style = _ref6.style,
      children = _ref6.children,
      _ref6$level = _ref6.level,
      level = _ref6$level === undefined ? 0 : _ref6$level,
      rest = _objectWithoutProperties(_ref6, ['className', 'style', 'children', 'level']);

  return _react2.default.createElement(
    'li',
    {
      className: (0, _classnames2.default)('o-nav-item', 'o-nav-item-lvl-' + level, className),
      style: style
    },
    _react2.default.createElement(
      ItemLabel,
      rest,
      children
    )
  );
};

// Menu Item (Submenu)
exports.Item = Item;

var _ref8 = _react2.default.createElement(
  'span',
  { className: 'drop-icon' },
  '\u25BE'
);

var _ref9 = _react2.default.createElement(
  'label',
  { title: 'Toggle Drop-down', className: 'drop-icon', htmlFor: 'sm2' },
  '\u25BE'
);

var _ref10 = _react2.default.createElement('input', { type: 'checkbox', className: 'sm2' });

var MenuItem = function MenuItem(_ref7) {
  var className = _ref7.className,
      style = _ref7.style,
      children = _ref7.children,
      title = _ref7.title,
      _ref7$level = _ref7.level,
      level = _ref7$level === undefined ? 0 : _ref7$level,
      rest = _objectWithoutProperties(_ref7, ['className', 'style', 'children', 'title', 'level']);

  return _react2.default.createElement(
    'li',
    { className: (0, _classnames2.default)('o-nav-item', 'o-nav-subitem', 'o-nav-item-lvl-' + level, className), style: style },
    _react2.default.createElement(
      ItemLabel,
      rest,
      title,
      _ref8,
      _ref9
    ),
    _ref10,
    _react2.default.createElement(
      'ul',
      { className: 'sub-menu' },
      _react.Children.map(children, function (child) {
        return (0, _react.cloneElement)(child, { level: level + 1 });
      })
    )
  );
};

// Menu Item (Submenu)
exports.MenuItem = MenuItem;
var Right = function Right(_ref11) {
  var children = _ref11.children,
      rest = _objectWithoutProperties(_ref11, ['children']);

  return _react.Children.map(children, function (child, i) {
    return (0, _react.cloneElement)(child, _extends({}, rest, { className: 'right', key: i }));
  }).reverse();
};

exports.Right = Right;
Nav.Item = Item;
Nav.Menu = MenuItem;
Nav.Right = Right;
Nav.Mega = (0, _reactFela.createComponent)(function (_ref12) {
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
  return _react2.default.createElement(MenuItem, p);
}, function (p) {
  return Object.keys(p);
});

var _ref13 = _react2.default.createElement(
  Nav,
  null,
  _react2.default.createElement(
    Nav.Item,
    { href: '#' },
    'Sample'
  ),
  _react2.default.createElement(
    Nav.Menu,
    { title: '2-level DD' },
    _react2.default.createElement(
      Nav.Item,
      { href: '#' },
      'Sample 2.1'
    ),
    _react2.default.createElement(
      Nav.Menu,
      { title: 'Item 2.2' },
      _react2.default.createElement(
        Nav.Item,
        { href: '#' },
        'Sample 2.2.1'
      ),
      _react2.default.createElement(
        Nav.Item,
        { href: '#' },
        'Sample 2.2.2'
      ),
      _react2.default.createElement(
        Nav.Item,
        { href: '#' },
        'Sample 2.2.3'
      )
    ),
    _react2.default.createElement(
      Nav.Item,
      { href: '#' },
      'Sample 3.4'
    )
  ),
  _react2.default.createElement(
    Nav.Right,
    null,
    _react2.default.createElement(
      Nav.Item,
      { href: '#' },
      'Right'
    ),
    _react2.default.createElement(
      Nav.Menu,
      { title: 'Right 2' },
      _react2.default.createElement(
        Nav.Item,
        { href: '#' },
        'Sample 2.2.1'
      ),
      _react2.default.createElement(
        Nav.Item,
        { href: '#' },
        'Sample 2.2.2'
      ),
      _react2.default.createElement(
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

exports.default = Nav;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbmF2LmVzNiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsImRpc3BsYXkiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwibGlnaHQiLCJib3hTaGFkb3ciLCJib3JkZXJXaWR0aCIsInBhZGRpbmcxIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dEFsaWduIiwidHJhbnNpdGlvbiIsIm9uSG92ZXIiLCJsaW5lSGVpZ2h0IiwiaWZTbWFsbERvd24iLCJpZk1lZGl1bVVwIiwib3ZlcmZsb3ciLCJmbG9hdCIsImxlZnQiLCJ6SW5kZXgiLCJOYXYiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsIkl0ZW1MYWJlbCIsIlJlbmRlciIsInJlbmRlckxhYmVsIiwicHJvcHMiLCJocmVmIiwib25DbGljayIsInRvIiwiSXRlbSIsInN0eWxlIiwibGV2ZWwiLCJyZXN0IiwiTWVudUl0ZW0iLCJ0aXRsZSIsIm1hcCIsImNoaWxkIiwiUmlnaHQiLCJpIiwia2V5IiwicmV2ZXJzZSIsIk1lbnUiLCJNZWdhIiwiY29sdW1ucyIsIk1hdGgiLCJmbG9vciIsImZvbnRXZWlnaHQiLCJib3JkZXIiLCJwIiwiT2JqZWN0Iiwia2V5cyIsIkV4YW1wbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBLElBQU1BLFNBQVMsU0FBVEEsTUFBUztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQzdCLFlBQVE7QUFDTkMsZUFBUztBQURILEtBRHFCO0FBSTdCLFlBQVE7QUFDTjtBQUNBQyxjQUFRLENBRkY7QUFHTkMsZUFBUztBQUhILEtBSnFCO0FBUzdCLG1DQUErQjtBQUM3QkYsZUFBUztBQURvQixLQVRGO0FBWTdCLGdDQUE0QjtBQUMxQkEsZUFBUztBQURpQixLQVpDO0FB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RkY7QUFHRTtBQUFDLFdBQUQsQ0FBSyxJQUFMO0FBQUEsVUFBVSxNQUFLLEdBQWY7QUFBQTtBQUFBO0FBSEY7QUFGRjtBQVhGLEM7O0FBREY3QixJQUFJZ0MsT0FBSixHQUFjO0FBQUE7QUFBQSxDQUFkOztrQkF1QmVoQyxHIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vLyBCYXNlZCBvbiBodHRwOi8vdzNiaXRzLmNvbS9sYWJzL2Nzcy1yZXNwb25zaXZlLW5hdi9cbi8vIE5hdiBzdHlsZXNcbmNvbnN0IHN0eWxlcyA9ICh7IHRoZW1lIH0pID0+ICh7XG4gICc+IHVsJzoge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgfSxcbiAgJyYgdWwnOiB7XG4gICAgLy8gbWFyZ2luOiBgMCAtMC41ZW1gLFxuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiAwLFxuICB9LFxuICAnPiAjdG06Y2hlY2tlZCArIC5vLW5hdi1tZW51Jzoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH0sXG4gICcmIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSc6IHtcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gIH0sXG4gICcmIHVsIHNwYW4uZHJvcC1pY29uJzoge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgfSxcbiAgJyYgdWwuc3ViLW1lbnUnOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5saWdodCxcbiAgICBib3hTaGFkb3c6IHRoZW1lLmJveFNoYWRvdyxcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgJyYgYTpob3Zlcic6IHt9LFxuICAgICcmIGxpOmxhc3QtY2hpbGQnOiB7XG4gICAgICBib3JkZXJXaWR0aDogMCxcbiAgICB9LFxuICAgICcmIGEnOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5wYWRkaW5nMSxcbiAgICB9LFxuICB9LFxuICAnJiBsaSc6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICcmIGxhYmVsLmRyb3AtaWNvbic6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcmlnaHQ6ICcxLjVlbScsXG4gICAgICB0b3A6ICcxLjI1ZW0nLFxuICAgIH0sXG4gIH0sXG4gICcmIC50b2dnbGUnOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nOiAnMWVtIDEuNWVtJyxcbiAgICAnJiBzcGFuLmRyb3AtaWNvbic6IHtcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICB9LFxuICAgICcmIC5kcm9wLWljb24nOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiAnMS41ZW0nLFxuICAgICAgdG9wOiAnMS4yNWVtJyxcbiAgICB9LFxuICB9LFxuICAnJiBhJzoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcGFkZGluZzogJzFlbSAwLjVlbScsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAuMTI1cyBlYXNlLWluLW91dCcsXG4gICAgb25Ib3Zlcjoge30sXG4gIH0sXG4gICcmIGxpLmJyYW5kID4gYSc6IHtcbiAgICBwYWRkaW5nOiAwLFxuICB9LFxuICAnJiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIHVsLnN1Yi1tZW51Jzoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH0sXG4gICcmIGxhYmVsLmRyb3AtaWNvbic6IHtcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHdpZHRoOiAnMWVtJyxcbiAgICBoZWlnaHQ6ICcxZW0nLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIH0sXG4gICcmIC5kcm9wLWljb24nOiB7XG4gICAgbGluZUhlaWdodDogMSxcbiAgfSxcbiAgaWZTbWFsbERvd246IHtcbiAgICAnJiBsaSc6IHtcbiAgICAgIHdpZHRoOiAnMzMuMzMzJScsXG4gICAgfSxcbiAgICAnJiB1bC5zdWItbWVudSBsaSc6IHtcbiAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgfSxcbiAgfSxcbiAgaWZNZWRpdW1VcDoge1xuICAgICc+IHVsJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAndmlzaWJsZScsXG4gICAgfSxcbiAgICAnJiAudG9nZ2xlJzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gICAgJyYgbGFiZWwuZHJvcC1pY29uJzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gICAgJyYgdWwgc3Bhbi5kcm9wLWljb24nOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICB9LFxuICAgICcmIGxpJzoge1xuICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgIGJvcmRlcldpZHRoOiAnMCAxcHggMCAwJyxcbiAgICB9LFxuICAgICcmIGxpLnJpZ2h0Jzoge1xuICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAnPiB1bCc6IHtcbiAgICAgICAgbGVmdDogJ2luaXRpYWwnLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgJz4gbGkgPiB1bC5zdWItbWVudSc6IHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogJ2luaXRpYWwnLFxuICAgICAgICAgIHJpZ2h0OiAnMTAwJScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyYgbGk6aG92ZXIgPiB1bCc6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbiAgICAnJiB1bC5zdWItbWVudSc6IHtcbiAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6ICcxMDAlJyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB3aWR0aDogJzE1ZW0nLFxuICAgICAgekluZGV4OiAzMDAwLFxuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgJz4gbGkgPiB1bC5zdWItbWVudSc6IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAnMTAwJScsXG4gICAgICB9LFxuICAgICAgJyYgbGknOiB7XG4gICAgICAgIGZsb2F0OiAnbm9uZScsXG4gICAgICAgIGJvcmRlcldpZHRoOiAnMCAwIDFweCcsXG4gICAgICAgICc+IGEnOiB7XG4gICAgICAgICAgcGFkZGluZzogJzAuM2VtIDAuNWVtJyxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgICcmIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLnN1Yi1tZW51Jzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuLy8gUm9vdCBuYXZpZ2F0aW9uXG5jb25zdCBOYXYgPSBjcmVhdGVDb21wb25lbnQoc3R5bGVzLCAoeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0pID0+IChcbiAgPG5hdiBjbGFzc05hbWU9e2NuKGNsYXNzTmFtZSwgJ28tbmF2Jyl9PlxuICAgIDxsYWJlbCBodG1sRm9yPVwidG1cIiBjbGFzc05hbWU9XCJ0b2dnbGVcIj5cbiAgICAgIE5hdmlnYXRpb24gPHNwYW4gY2xhc3NOYW1lPVwiZHJvcC1pY29uXCI+4pa+PC9zcGFuPlxuICAgIDwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidG1cIiAvPlxuICAgIDx1bCBjbGFzc05hbWU9XCJvLW5hdi1tZW51IGNsZWFyZml4XCI+e2NoaWxkcmVufTwvdWw+XG4gIDwvbmF2PlxuKSk7XG5cbi8vIEl0ZW0gTGFiZWwgKE1lbnVJdGVtICsgSXRlbSlcbmV4cG9ydCBjb25zdCBJdGVtTGFiZWwgPSAoeyByZW5kZXJMYWJlbDogUmVuZGVyLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGlmIChwcm9wcy5ocmVmKSB7XG4gICAgcmV0dXJuIDxhIGhyZWY9e3Byb3BzLmhyZWZ9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9Pntwcm9wcy5jaGlsZHJlbn08L2E+O1xuICB9IGVsc2UgaWYgKHByb3BzLnRvKSB7XG4gICAgcmV0dXJuIDxMaW5rIHRvPXtwcm9wcy50b30gb25DbGljaz17cHJvcHMub25DbGlja30+e3Byb3BzLmNoaWxkcmVufTwvTGluaz47XG4gIH0gZWxzZSBpZiAoUmVuZGVyICYmIHR5cGVvZiByZW5kZXJMYWJlbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBSZW5kZXIocHJvcHMpO1xuICB9IGVsc2UgaWYgKFJlbmRlcikge1xuICAgIHJldHVybiA8UmVuZGVyIHsuLi5wcm9wc30gLz47XG4gIH1cbiAgcmV0dXJuIDxhIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9Pntwcm9wcy5jaGlsZHJlbn08L2E+O1xufTtcblxuLy8gTGlzdCBJdGVtXG5leHBvcnQgY29uc3QgSXRlbSA9ICh7IGNsYXNzTmFtZSwgc3R5bGUsIGNoaWxkcmVuLCBsZXZlbCA9IDAsIC4uLnJlc3QgfSkgPT4gKFxuICA8bGlcbiAgICBjbGFzc05hbWU9e2NuKCdvLW5hdi1pdGVtJywgYG8tbmF2LWl0ZW0tbHZsLSR7bGV2ZWx9YCwgY2xhc3NOYW1lKX1cbiAgICBzdHlsZT17c3R5bGV9XG4gID5cbiAgICA8SXRlbUxhYmVsIHsuLi5yZXN0fT57Y2hpbGRyZW59PC9JdGVtTGFiZWw+XG4gIDwvbGk+XG4pO1xuXG4vLyBNZW51IEl0ZW0gKFN1Ym1lbnUpXG5leHBvcnQgY29uc3QgTWVudUl0ZW0gPSAoe1xuICBjbGFzc05hbWUsXG4gIHN0eWxlLFxuICBjaGlsZHJlbixcbiAgdGl0bGUsXG4gIGxldmVsID0gMCxcbiAgLi4ucmVzdFxufSkgPT4gKFxuICA8bGkgY2xhc3NOYW1lPXtjbignby1uYXYtaXRlbScsICdvLW5hdi1zdWJpdGVtJywgYG8tbmF2LWl0ZW0tbHZsLSR7bGV2ZWx9YCwgY2xhc3NOYW1lKX0gc3R5bGU9e3N0eWxlfT5cbiAgICA8SXRlbUxhYmVsIHsuLi5yZXN0fT5cbiAgICAgIHt0aXRsZX1cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyb3AtaWNvblwiPuKWvjwvc3Bhbj5cbiAgICAgIDxsYWJlbCB0aXRsZT1cIlRvZ2dsZSBEcm9wLWRvd25cIiBjbGFzc05hbWU9XCJkcm9wLWljb25cIiBodG1sRm9yPVwic20yXCI+XG4gICAgICAgIOKWvlxuICAgICAgPC9sYWJlbD5cbiAgICA8L0l0ZW1MYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwic20yXCIgLz5cbiAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgIHtDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+XG4gICAgICAgIGNsb25lRWxlbWVudChjaGlsZCwgeyBsZXZlbDogbGV2ZWwgKyAxIH0pLFxuICAgICAgKX1cbiAgICA8L3VsPlxuICA8L2xpPlxuKTtcblxuLy8gTWVudSBJdGVtIChTdWJtZW51KVxuZXhwb3J0IGNvbnN0IFJpZ2h0ID0gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT5cbiAgQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+XG4gICAgY2xvbmVFbGVtZW50KGNoaWxkLCB7IC4uLnJlc3QsIGNsYXNzTmFtZTogJ3JpZ2h0Jywga2V5OiBpIH0pLFxuICApLnJldmVyc2UoKTtcblxuTmF2Lkl0ZW0gPSBJdGVtO1xuTmF2Lk1lbnUgPSBNZW51SXRlbTtcbk5hdi5SaWdodCA9IFJpZ2h0O1xuTmF2Lk1lZ2EgPSBjcmVhdGVDb21wb25lbnQoKHsgY29sdW1ucyB9KSA9PiAoe1xuICBpZk1lZGl1bVVwOiB7XG4gICAgJz4gdWwuc3ViLW1lbnUuc3ViLW1lbnUnOiB7XG4gICAgICB3aWR0aDogJzQ1ZW0nLFxuICAgICAgJz4gLm8tbmF2LWl0ZW0nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgICB3aWR0aDogYCR7TWF0aC5mbG9vcigxMDAgLyAoY29sdW1ucyB8fCAxKSl9JWAsXG4gICAgICAgICc+IGEnOiB7XG4gICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICc+IC5kcm9wLWljb24nOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnPiB1bCc6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIHJpZ2h0OiAnaW5pdGlhbCcsXG4gICAgICAgICAgd2lkdGg6ICdpbml0aWFsJyxcbiAgICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgICAgJyYgYSc6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6ICcwZW0gMC41ZW0nLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pLCBwID0+IDxNZW51SXRlbSB7Li4ucH0gLz4sIHAgPT4gT2JqZWN0LmtleXMocCkpO1xuXG5OYXYuRXhhbXBsZSA9ICgpID0+IChcbiAgPE5hdj5cbiAgICA8TmF2Lkl0ZW0gaHJlZj1cIiNcIj5TYW1wbGU8L05hdi5JdGVtPlxuICAgIDxOYXYuTWVudSB0aXRsZT1cIjItbGV2ZWwgRERcIj5cbiAgICAgIDxOYXYuSXRlbSBocmVmPVwiI1wiPlNhbXBsZSAyLjE8L05hdi5JdGVtPlxuICAgICAgPE5hdi5NZW51IHRpdGxlPVwiSXRlbSAyLjJcIj5cbiAgICAgICAgPE5hdi5JdGVtIGhyZWY9XCIjXCI+U2FtcGxlIDIuMi4xPC9OYXYuSXRlbT5cbiAgICAgICAgPE5hdi5JdGVtIGhyZWY9XCIjXCI+U2FtcGxlIDIuMi4yPC9OYXYuSXRlbT5cbiAgICAgICAgPE5hdi5JdGVtIGhyZWY9XCIjXCI+U2FtcGxlIDIuMi4zPC9OYXYuSXRlbT5cbiAgICAgIDwvTmF2Lk1lbnU+XG4gICAgICA8TmF2Lkl0ZW0gaHJlZj1cIiNcIj5TYW1wbGUgMy40PC9OYXYuSXRlbT5cbiAgICA8L05hdi5NZW51PlxuICAgIDxOYXYuUmlnaHQ+XG4gICAgICA8TmF2Lkl0ZW0gaHJlZj1cIiNcIj5SaWdodDwvTmF2Lkl0ZW0+XG4gICAgICA8TmF2Lk1lbnUgdGl0bGU9XCJSaWdodCAyXCI+XG4gICAgICAgIDxOYXYuSXRlbSBocmVmPVwiI1wiPlNhbXBsZSAyLjIuMTwvTmF2Lkl0ZW0+XG4gICAgICAgIDxOYXYuSXRlbSBocmVmPVwiI1wiPlNhbXBsZSAyLjIuMjwvTmF2Lkl0ZW0+XG4gICAgICAgIDxOYXYuSXRlbSBocmVmPVwiI1wiPlNhbXBsZSAyLjIuMzwvTmF2Lkl0ZW0+XG4gICAgICA8L05hdi5NZW51PlxuICAgIDwvTmF2LlJpZ2h0PlxuICA8L05hdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdfQ==
