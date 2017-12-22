function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent, Grid, border } from 'olymp-fela';

export default createComponent(function (_ref) {
  var theme = _ref.theme,
      bottom = _ref.bottom;
  return {
    flex: 'none !important',
    paddingBottom: !bottom && theme.space2,
    marginBottom: !bottom && theme.space2,
    borderBottom: !bottom && border(theme),
    paddingTop: bottom && theme.space2,
    marginTop: bottom && theme.space2,
    borderTop: bottom && border(theme),
    '> div': {
      '> *': {
        width: '100%'
      },
      '> .ant-radio-group': {
        hasFlex: {
          display: 'flex',
          '> label': {
            flexGrow: 1,
            textAlign: 'center'
          }
        }
      }
    },
    '> *:not(:first-child)': {
      paddingLeft: theme.space2
    }
  };
}, function (_ref2) {
  var bottom = _ref2.bottom,
      p = _objectWithoutProperties(_ref2, ['bottom']);

  return React.createElement(Grid, p);
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3MvY29tcG9uZW50cy90b29sYmFyLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbXBvbmVudCIsIkdyaWQiLCJib3JkZXIiLCJ0aGVtZSIsImJvdHRvbSIsImZsZXgiLCJwYWRkaW5nQm90dG9tIiwic3BhY2UyIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyQm90dG9tIiwicGFkZGluZ1RvcCIsIm1hcmdpblRvcCIsImJvcmRlclRvcCIsIndpZHRoIiwiaGFzRmxleCIsImRpc3BsYXkiLCJmbGV4R3JvdyIsInRleHRBbGlnbiIsInBhZGRpbmdMZWZ0IiwicCIsIk9iamVjdCIsImtleXMiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLGVBQVQsRUFBMEJDLElBQTFCLEVBQWdDQyxNQUFoQyxRQUE4QyxZQUE5Qzs7QUFFQSxlQUFlRixnQkFDYjtBQUFBLE1BQUdHLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLE1BQVYsUUFBVUEsTUFBVjtBQUFBLFNBQXdCO0FBQ3RCQyxVQUFNLGlCQURnQjtBQUV0QkMsbUJBQWUsQ0FBQ0YsTUFBRCxJQUFXRCxNQUFNSSxNQUZWO0FBR3RCQyxrQkFBYyxDQUFDSixNQUFELElBQVdELE1BQU1JLE1BSFQ7QUFJdEJFLGtCQUFjLENBQUNMLE1BQUQsSUFBV0YsT0FBT0MsS0FBUCxDQUpIO0FBS3RCTyxnQkFBWU4sVUFBVUQsTUFBTUksTUFMTjtBQU10QkksZUFBV1AsVUFBVUQsTUFBTUksTUFOTDtBQU90QkssZUFBV1IsVUFBVUYsT0FBT0MsS0FBUCxDQVBDO0FBUXRCLGFBQVM7QUFDUCxhQUFPO0FBQ0xVLGVBQU87QUFERixPQURBO0FBSVAsNEJBQXNCO0FBQ3BCQyxpQkFBUztBQUNQQyxtQkFBUyxNQURGO0FBRVAscUJBQVc7QUFDVEMsc0JBQVUsQ0FERDtBQUVUQyx1QkFBVztBQUZGO0FBRko7QUFEVztBQUpmLEtBUmE7QUFzQnRCLDZCQUF5QjtBQUN2QkMsbUJBQWFmLE1BQU1JO0FBREk7QUF0QkgsR0FBeEI7QUFBQSxDQURhLEVBMkJiO0FBQUEsTUFBR0gsTUFBSCxTQUFHQSxNQUFIO0FBQUEsTUFBY2UsQ0FBZDs7QUFBQSxTQUFzQixvQkFBQyxJQUFELEVBQVVBLENBQVYsQ0FBdEI7QUFBQSxDQTNCYSxFQTRCYjtBQUFBLFNBQUtDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUFMO0FBQUEsQ0E1QmEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9nb29nbGUvYW5hbHl0aWNzL2NvbXBvbmVudHMvdG9vbGJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQsIEdyaWQsIGJvcmRlciB9IGZyb20gJ29seW1wLWZlbGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBib3R0b20gfSkgPT4gKHtcbiAgICBmbGV4OiAnbm9uZSAhaW1wb3J0YW50JyxcbiAgICBwYWRkaW5nQm90dG9tOiAhYm90dG9tICYmIHRoZW1lLnNwYWNlMixcbiAgICBtYXJnaW5Cb3R0b206ICFib3R0b20gJiYgdGhlbWUuc3BhY2UyLFxuICAgIGJvcmRlckJvdHRvbTogIWJvdHRvbSAmJiBib3JkZXIodGhlbWUpLFxuICAgIHBhZGRpbmdUb3A6IGJvdHRvbSAmJiB0aGVtZS5zcGFjZTIsXG4gICAgbWFyZ2luVG9wOiBib3R0b20gJiYgdGhlbWUuc3BhY2UyLFxuICAgIGJvcmRlclRvcDogYm90dG9tICYmIGJvcmRlcih0aGVtZSksXG4gICAgJz4gZGl2Jzoge1xuICAgICAgJz4gKic6IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIH0sXG4gICAgICAnPiAuYW50LXJhZGlvLWdyb3VwJzoge1xuICAgICAgICBoYXNGbGV4OiB7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICc+IGxhYmVsJzoge1xuICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgJz4gKjpub3QoOmZpcnN0LWNoaWxkKSc6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjZTIsXG4gICAgfSxcbiAgfSksXG4gICh7IGJvdHRvbSwgLi4ucCB9KSA9PiA8R3JpZCB7Li4ucH0gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG4iXX0=
