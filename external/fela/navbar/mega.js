import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { Grid } from '../index';
import Link from './link';

var Column = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    padding: theme.space3,
    fontFamily: theme.fontFamily
  };
}, 'div', function (p) {
  return Object.keys(p);
});

var Title = createComponent(function (_ref2) {
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
  return React.createElement(
    'h4',
    null,
    React.createElement(Link, p)
  );
}, function (p) {
  return Object.keys(p);
});

var PaddingLink = createComponent(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.space1 + ' ' + theme.space0
  };
}, function (p) {
  return React.createElement(Link, p);
}, function (p) {
  return Object.keys(p);
});

var Item = createComponent(function (_ref4) {
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

var SubMenu = createComponent(function (_ref5) {
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

var MegaNav = createComponent(function (_ref6) {
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
  return React.createElement(
    'div',
    { className: className },
    React.createElement(
      Grid,
      { size: pages.length },
      pages.map(function (_ref8, i) {
        var id = _ref8.id,
            name = _ref8.name,
            children = _ref8.children,
            pathname = _ref8.pathname,
            onClick = _ref8.onClick;
        return React.createElement(
          Grid.Item,
          { small: 1, key: id || i },
          React.createElement(
            Column,
            null,
            React.createElement(
              Title,
              { to: pathname, inverse: inverse },
              name
            ),
            children.map(function (child, cI) {
              return React.createElement(
                Item,
                { key: child.id || cI },
                React.createElement(
                  PaddingLink,
                  { to: child.pathname, inverse: inverse, renderItemLink: renderItemLink },
                  child.name
                ),
                child.children && !!child.children.length && React.createElement(
                  SubMenu,
                  null,
                  child.children.map(function (c, ccI) {
                    return React.createElement(
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
  pages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    pathname: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object)
  })),
  /** aligns mega-submenu right */
  right: PropTypes.bool
};
MegaNav.defaultProps = {
  pages: [],
  right: false
};
export default MegaNav;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbmF2YmFyL21lZ2EuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY3JlYXRlQ29tcG9uZW50IiwiR3JpZCIsIkxpbmsiLCJDb2x1bW4iLCJ0aGVtZSIsInBhZGRpbmciLCJzcGFjZTMiLCJmb250RmFtaWx5IiwiT2JqZWN0Iiwia2V5cyIsInAiLCJUaXRsZSIsImludmVyc2UiLCJkaXNwbGF5IiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsInNwYWNlMCIsImNvbG9yIiwibGlnaHQiLCJkYXJrIiwiUGFkZGluZ0xpbmsiLCJzcGFjZTEiLCJJdGVtIiwib25Ib3ZlciIsIlN1Yk1lbnUiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdZIiwiZm9udFNpemUiLCJmb250U2l6ZVNtYWxsIiwiTWVnYU5hdiIsIndpZHRoIiwicGFkZGluZ1giLCJpZk1pbmkiLCJjbGFzc05hbWUiLCJwYWdlcyIsInJlbmRlckl0ZW1MaW5rIiwibGVuZ3RoIiwibWFwIiwiaSIsImlkIiwibmFtZSIsImNoaWxkcmVuIiwicGF0aG5hbWUiLCJvbkNsaWNrIiwiY2hpbGQiLCJjSSIsImMiLCJjY0kiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsInN0cmluZyIsIm9iamVjdCIsInJpZ2h0IiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixVQUFyQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7O0FBRUEsSUFBTUMsU0FBU0gsZ0JBQ2I7QUFBQSxNQUFHSSxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxhQUFTRCxNQUFNRSxNQUREO0FBRWRDLGdCQUFZSCxNQUFNRztBQUZKLEdBQWhCO0FB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QUFVc0QsTUFBNUI7QUFISSxHQUFoQixDQURLLENBRlc7QUFTbEI7QUFDQUMsU0FBT3ZELFVBQVV3RDtBQVZDLENBQXBCO0FBWUExQixRQUFRMkIsWUFBUixHQUF1QjtBQUNyQnRCLFNBQU8sRUFEYztBQUVyQm9CLFNBQU87QUFGYyxDQUF2QjtBQUlBLGVBQWV6QixPQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbmF2YmFyL21lZ2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluayc7XG5cbmNvbnN0IENvbHVtbiA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjZTMsXG4gICAgZm9udEZhbWlseTogdGhlbWUuZm9udEZhbWlseSxcbiAgfSksXG4gICdkaXYnLFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5jb25zdCBUaXRsZSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGludmVyc2UgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNlMyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjZTAsXG4gICAgY29sb3I6IGludmVyc2UgPyB0aGVtZS5saWdodCA6IHRoZW1lLmRhcmssXG4gIH0pLFxuICBwID0+XG4gICAgKDxoND5cbiAgICAgIDxMaW5rIHsuLi5wfSAvPlxuICAgIDwvaDQ+KSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgUGFkZGluZ0xpbmsgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2UxfSAke3RoZW1lLnNwYWNlMH1gLFxuICB9KSxcbiAgcCA9PiA8TGluayB7Li4ucH0gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG5cbmNvbnN0IEl0ZW0gPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgb25Ib3Zlcjoge1xuICAgICAgJz4gZGl2Jzoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG5cbmNvbnN0IFN1Yk1lbnUgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjZTMsXG4gICAgcGFkZGluZ1k6IHRoZW1lLnNwYWNlMSxcbiAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVTbWFsbCxcbiAgfSksXG4gICdkaXYnLFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5jb25zdCBNZWdhTmF2ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHdpZHRoOiA3MDAsXG4gICAgcGFkZGluZ1g6IHRoZW1lLnNwYWNlMyxcbiAgICBwYWRkaW5nWTogdGhlbWUuc3BhY2UxLFxuICAgIGlmTWluaToge1xuICAgICAgcGFkZGluZzogMCxcbiAgICB9LFxuICB9KSxcbiAgKHsgY2xhc3NOYW1lLCBwYWdlcywgaW52ZXJzZSwgcmVuZGVySXRlbUxpbmsgfSkgPT5cbiAgICAoPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8R3JpZCBzaXplPXtwYWdlcy5sZW5ndGh9PlxuICAgICAgICB7cGFnZXMubWFwKCh7IGlkLCBuYW1lLCBjaGlsZHJlbiwgcGF0aG5hbWUsIG9uQ2xpY2sgfSwgaSkgPT5cbiAgICAgICAgICAoPEdyaWQuSXRlbSBzbWFsbD17MX0ga2V5PXtpZCB8fCBpfT5cbiAgICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICAgIDxUaXRsZSB0bz17cGF0aG5hbWV9IGludmVyc2U9e2ludmVyc2V9PlxuICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKChjaGlsZCwgY0kpID0+XG4gICAgICAgICAgICAgICAgKDxJdGVtIGtleT17Y2hpbGQuaWQgfHwgY0l9PlxuICAgICAgICAgICAgICAgICAgPFBhZGRpbmdMaW5rIHRvPXtjaGlsZC5wYXRobmFtZX0gaW52ZXJzZT17aW52ZXJzZX0gcmVuZGVySXRlbUxpbms9e3JlbmRlckl0ZW1MaW5rfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L1BhZGRpbmdMaW5rPlxuICAgICAgICAgICAgICAgICAge2NoaWxkLmNoaWxkcmVuICYmXG4gICAgICAgICAgICAgICAgICAgICEhY2hpbGQuY2hpbGRyZW4ubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgIDxTdWJNZW51PlxuICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZC5jaGlsZHJlbi5tYXAoKGMsIGNjSSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICg8UGFkZGluZ0xpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2MucGF0aG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGludmVyc2U9e2ludmVyc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Yy5pZCB8fCBjY0l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW1MaW5rPXtyZW5kZXJJdGVtTGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2MubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFkZGluZ0xpbms+KVxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvU3ViTWVudT59XG4gICAgICAgICAgICAgICAgPC9JdGVtPilcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZC5JdGVtPilcbiAgICAgICAgKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj4pLFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuTWVnYU5hdi5kaXNwbGF5TmFtZSA9ICdOYXZiYXIuTWVnYSc7XG5NZWdhTmF2LnByb3BUeXBlcyA9IHtcbiAgLyoqIEFycmF5IG9mIHBhZ2Utb2JqZWN0cyAqL1xuICBwYWdlczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBwYXRobmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICB9KVxuICApLFxuICAvKiogYWxpZ25zIG1lZ2Etc3VibWVudSByaWdodCAqL1xuICByaWdodDogUHJvcFR5cGVzLmJvb2wsXG59O1xuTWVnYU5hdi5kZWZhdWx0UHJvcHMgPSB7XG4gIHBhZ2VzOiBbXSxcbiAgcmlnaHQ6IGZhbHNlLFxufTtcbmV4cG9ydCBkZWZhdWx0IE1lZ2FOYXY7XG4iXX0=
