'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFela = require('react-fela');

var _index = require('../index');

var _link = require('./link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Column = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    padding: theme.space3,
    fontFamily: theme.fontFamily
  };
}, 'div', function (p) {
  return Object.keys(p);
});

var Title = (0, _reactFela.createComponent)(function (_ref2) {
  var theme = _ref2.theme,
      inverse = _ref2.inverse;
  return {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: theme.space3,
    padding: theme.space0,
    color: inverse ? theme.light : theme.dark
  };
}, function (p) {
  return _react2.default.createElement(
    'h4',
    null,
    _react2.default.createElement(_link2.default, p)
  );
}, function (p) {
  return Object.keys(p);
});

var PaddingLink = (0, _reactFela.createComponent)(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.space1 + ' ' + theme.space0
  };
}, function (p) {
  return _react2.default.createElement(_link2.default, p);
}, function (p) {
  return Object.keys(p);
});

var Item = (0, _reactFela.createComponent)(function (_ref4) {
  var theme = _ref4.theme;
  return {
    onHover: {
      '> div': {
        display: 'block'
      }
    }
  };
}, 'div', function (p) {
  return Object.keys(p);
});

var SubMenu = (0, _reactFela.createComponent)(function (_ref5) {
  var theme = _ref5.theme;
  return {
    display: 'none',
    paddingLeft: theme.space3,
    paddingY: theme.space1,
    fontSize: theme.fontSizeSmall
  };
}, 'div', function (p) {
  return Object.keys(p);
});

var MegaNav = (0, _reactFela.createComponent)(function (_ref6) {
  var theme = _ref6.theme;
  return {
    width: 700,
    paddingX: theme.space3,
    paddingY: theme.space1,
    ifMini: {
      padding: 0
    }
  };
}, function (_ref7) {
  var className = _ref7.className,
      pages = _ref7.pages,
      inverse = _ref7.inverse,
      renderItemLink = _ref7.renderItemLink;
  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(
      _index.Grid,
      { size: pages.length },
      pages.map(function (_ref8, i) {
        var id = _ref8.id,
            name = _ref8.name,
            children = _ref8.children,
            pathname = _ref8.pathname,
            onClick = _ref8.onClick;
        return _react2.default.createElement(
          _index.Grid.Item,
          { small: 1, key: id || i },
          _react2.default.createElement(
            Column,
            null,
            _react2.default.createElement(
              Title,
              { to: pathname, inverse: inverse },
              name
            ),
            children.map(function (child, cI) {
              return _react2.default.createElement(
                Item,
                { key: child.id || cI },
                _react2.default.createElement(
                  PaddingLink,
                  { to: child.pathname, inverse: inverse, renderItemLink: renderItemLink },
                  child.name
                ),
                child.children && !!child.children.length && _react2.default.createElement(
                  SubMenu,
                  null,
                  child.children.map(function (c, ccI) {
                    return _react2.default.createElement(
                      PaddingLink,
                      {
                        to: c.pathname,
                        inverse: inverse,
                        key: c.id || ccI,
                        renderItemLink: renderItemLink
                      },
                      c.name
                    );
                  })
                )
              );
            })
          )
        );
      })
    )
  );
}, function (p) {
  return Object.keys(p);
});
MegaNav.displayName = 'Navbar.Mega';
MegaNav.propTypes = {
  /** Array of page-objects */
  pages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string,
    pathname: _propTypes2.default.string,
    children: _propTypes2.default.arrayOf(_propTypes2.default.object)
  })),
  /** aligns mega-submenu right */
  right: _propTypes2.default.bool
};
MegaNav.defaultProps = {
  pages: [],
  right: false
};
exports.default = MegaNav;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbmF2YmFyL21lZ2EuZXM2Il0sIm5hbWVzIjpbIkNvbHVtbiIsInRoZW1lIiwicGFkZGluZyIsInNwYWNlMyIsImZvbnRGYW1pbHkiLCJPYmplY3QiLCJrZXlzIiwicCIsIlRpdGxlIiwiaW52ZXJzZSIsImRpc3BsYXkiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwic3BhY2UwIiwiY29sb3IiLCJsaWdodCIsImRhcmsiLCJQYWRkaW5nTGluayIsInNwYWNlMSIsIkl0ZW0iLCJvbkhvdmVyIiwiU3ViTWVudSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1kiLCJmb250U2l6ZSIsImZvbnRTaXplU21hbGwiLCJNZWdhTmF2Iiwid2lkdGgiLCJwYWRkaW5nWCIsImlmTWluaSIsImNsYXNzTmFtZSIsInBhZ2VzIiwicmVuZGVySXRlbUxpbmsiLCJsZW5ndGgiLCJtYXAiLCJpIiwiaWQiLCJuYW1lIiwiY2hpbGRyZW4iLCJwYXRobmFtZSIsIm9uQ2xpY2siLCJjaGlsZCIsImNJIiwiYyIsImNjSSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwib2JqZWN0IiwicmlnaHQiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsZ0NBQ2I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxhQUFTRCxNQUFNRSxNQUREO0FBRWRDLGdCQUFZSCxNQUFNRztBQUZKLEdBQWhCO0FBQUEsQ0FEYSxFQUtiLEtBTGEsRUFNYjtBQUFBLFNBQUtDLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0FOYSxDQUFmOztBQVNBLElBQU1DLFFBQVEsZ0NBQ1o7QUFBQSxNQUFHUCxLQUFILFNBQUdBLEtBQUg7QUFBQSxNQUFVUSxPQUFWLFNBQVVBLE9B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dGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluayc7XG5cbmNvbnN0IENvbHVtbiA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjZTMsXG4gICAgZm9udEZhbWlseTogdGhlbWUuZm9udEZhbWlseSxcbiAgfSksXG4gICdkaXYnLFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5jb25zdCBUaXRsZSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGludmVyc2UgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNlMyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjZTAsXG4gICAgY29sb3I6IGludmVyc2UgPyB0aGVtZS5saWdodCA6IHRoZW1lLmRhcmssXG4gIH0pLFxuICBwID0+XG4gICAgKDxoND5cbiAgICAgIDxMaW5rIHsuLi5wfSAvPlxuICAgIDwvaDQ+KSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgUGFkZGluZ0xpbmsgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2UxfSAke3RoZW1lLnNwYWNlMH1gLFxuICB9KSxcbiAgcCA9PiA8TGluayB7Li4ucH0gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG5cbmNvbnN0IEl0ZW0gPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgb25Ib3Zlcjoge1xuICAgICAgJz4gZGl2Jzoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG5cbmNvbnN0IFN1Yk1lbnUgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjZTMsXG4gICAgcGFkZGluZ1k6IHRoZW1lLnNwYWNlMSxcbiAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVTbWFsbCxcbiAgfSksXG4gICdkaXYnLFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5jb25zdCBNZWdhTmF2ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHdpZHRoOiA3MDAsXG4gICAgcGFkZGluZ1g6IHRoZW1lLnNwYWNlMyxcbiAgICBwYWRkaW5nWTogdGhlbWUuc3BhY2UxLFxuICAgIGlmTWluaToge1xuICAgICAgcGFkZGluZzogMCxcbiAgICB9LFxuICB9KSxcbiAgKHsgY2xhc3NOYW1lLCBwYWdlcywgaW52ZXJzZSwgcmVuZGVySXRlbUxpbmsgfSkgPT5cbiAgICAoPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8R3JpZCBzaXplPXtwYWdlcy5sZW5ndGh9PlxuICAgICAgICB7cGFnZXMubWFwKCh7IGlkLCBuYW1lLCBjaGlsZHJlbiwgcGF0aG5hbWUsIG9uQ2xpY2sgfSwgaSkgPT5cbiAgICAgICAgICAoPEdyaWQuSXRlbSBzbWFsbD17MX0ga2V5PXtpZCB8fCBpfT5cbiAgICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICAgIDxUaXRsZSB0bz17cGF0aG5hbWV9IGludmVyc2U9e2ludmVyc2V9PlxuICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKChjaGlsZCwgY0kpID0+XG4gICAgICAgICAgICAgICAgKDxJdGVtIGtleT17Y2hpbGQuaWQgfHwgY0l9PlxuICAgICAgICAgICAgICAgICAgPFBhZGRpbmdMaW5rIHRvPXtjaGlsZC5wYXRobmFtZX0gaW52ZXJzZT17aW52ZXJzZX0gcmVuZGVySXRlbUxpbms9e3JlbmRlckl0ZW1MaW5rfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L1BhZGRpbmdMaW5rPlxuICAgICAgICAgICAgICAgICAge2NoaWxkLmNoaWxkcmVuICYmXG4gICAgICAgICAgICAgICAgICAgICEhY2hpbGQuY2hpbGRyZW4ubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgIDxTdWJNZW51PlxuICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZC5jaGlsZHJlbi5tYXAoKGMsIGNjSSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICg8UGFkZGluZ0xpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2MucGF0aG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGludmVyc2U9e2ludmVyc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Yy5pZCB8fCBjY0l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW1MaW5rPXtyZW5kZXJJdGVtTGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2MubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFkZGluZ0xpbms+KVxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvU3ViTWVudT59XG4gICAgICAgICAgICAgICAgPC9JdGVtPilcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZC5JdGVtPilcbiAgICAgICAgKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj4pLFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuTWVnYU5hdi5kaXNwbGF5TmFtZSA9ICdOYXZiYXIuTWVnYSc7XG5NZWdhTmF2LnByb3BUeXBlcyA9IHtcbiAgLyoqIEFycmF5IG9mIHBhZ2Utb2JqZWN0cyAqL1xuICBwYWdlczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBwYXRobmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICB9KVxuICApLFxuICAvKiogYWxpZ25zIG1lZ2Etc3VibWVudSByaWdodCAqL1xuICByaWdodDogUHJvcFR5cGVzLmJvb2wsXG59O1xuTWVnYU5hdi5kZWZhdWx0UHJvcHMgPSB7XG4gIHBhZ2VzOiBbXSxcbiAgcmlnaHQ6IGZhbHNlLFxufTtcbmV4cG9ydCBkZWZhdWx0IE1lZ2FOYXY7XG4iXX0=
