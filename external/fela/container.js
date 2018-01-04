'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactFela = require('react-fela');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      height = _ref.height,
      size = _ref.size,
      marginTop = _ref.marginTop;
  return {
    minHeight: 30,
    height: height,
    marginTop: marginTop,
    position: 'relative',
    marginX: 'auto',
    paddingX: theme.space2,
    onAfter: {
      content: '""',
      clear: 'both',
      display: 'block',
      visibility: 'hidden',
      height: 0
    },
    ifMini: {
      width: '100%'
    },
    ifSmallUp: {
      width: 540,
      maxWidth: '100%'
    },
    ifMediumUp: {
      width: 720,
      maxWidth: '100%'
    },
    ifLargeUp: {
      width: 960,
      maxWidth: '100%'
    },
    ifHugeUp: {
      width: 1140,
      maxWidth: '100%'
    },
    extend: [{
      condition: size === 'small',
      style: {
        onAfter: {
          content: '""',
          clear: 'both',
          display: 'block',
          visibility: 'hidden',
          height: 0
        },
        ifMediumUp: {
          width: 400,
          maxWidth: '100%'
        },
        ifLargeUp: {
          width: 520,
          maxWidth: '100%'
        },
        ifHugeUp: {
          width: 640,
          maxWidth: '100%'
        }
      }
    }]
  };
}, 'div', function (_ref2) {
  var height = _ref2.height,
      marginTop = _ref2.marginTop,
      p = _objectWithoutProperties(_ref2, ['height', 'marginTop']);

  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvY29udGFpbmVyLmVzNiJdLCJuYW1lcyI6WyJ0aGVtZSIsImhlaWdodCIsInNpemUiLCJtYXJnaW5Ub3AiLCJtaW5IZWlnaHQiLCJwb3NpdGlvbiIsIm1hcmdpblgiLCJwYWRkaW5nWCIsInNwYWNlMiIsIm9uQWZ0ZXIiLCJjb250ZW50IiwiY2xlYXIiLCJkaXNwbGF5IiwidmlzaWJpbGl0eSIsImlmTWluaSIsIndpZHRoIiwiaWZTbWFsbFVwIiwibWF4V2lkdGgiLCJpZk1lZGl1bVVwIiwiaWZMYXJnZVVwIiwiaWZIdWdlVXAiLCJleHRlbmQiLCJjb25kaXRpb24iLCJzdHlsZSIsInAiLCJPYmplY3QiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztrQkFFZSxnQ0FDYjtBQUFBLE1BQUdBLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLE1BQVYsUUFBVUEsTUFBVjtBQUFBLE1BQWtCQyxJQUFsQixRQUFrQkEsSUFBbEI7QUFBQSxNQUF3QkMsU0FBeEIsUUFBd0JBLFNBQXhCO0FBQUEsU0FBeUM7QUFDdkNDLGVBQVcsRUFENEI7QUFFdkNILGtCQUZ1QztBQUd2Q0Usd0JBSHVDO0FBSXZDRSxjQUFVLFVBSjZCO0FBS3ZDQyxhQUFTLE1BTDhCO0FBTXZDQyxjQUFVUCxNQUFNUSxNQU51QjtBQU92Q0MsYUFBUztBQUNQQyxlQUFTLElBREY7QUFFUEMsYUFBTyxNQUZBO0FBR1BDLGVBQVMsT0FIRjtBQUlQQyxrQkFBWSxRQUpMO0FBS1BaLGNBQVE7QUFMRCxLQVA4QjtBQWN2Q2EsWUFBUTtBQUNOQyxhQUFPO0FBREQsS0FkK0I7QUFpQnZDQyxlQUFXO0FBQ1RELGFBQU8sR0FERTtBQUVURSxnQkFBVTtBQUZELEtBakI0QjtBQXFCdkNDLGdCQUFZO0FBQ1ZILGFBQU8sR0FERztBQUVWRSxnQkFBVTtBQUZBLEtBckIyQjtBQXlCdkNFLGVBQVc7QUFDVEosYUFBTyxHQURFO0FBRVRFLGdCQUFVO0FBRkQsS0F6QjRCO0FBNkJ2Q0csY0FBVTtBQUNSTCxhQUFPLElBREM7QUFFUkUsZ0JBQVU7QUFGRixLQTdCNkI7QUFpQ3ZDSSxZQUFRLENBQ047QUFDRUMsaUJBQVdwQixTQUFTLE9BRHRCO0FBRUVxQixhQUFPO0FBQ0xkLGlCQUFTO0FBQ1BDLG1CQUFTLElBREY7QUFFUEMsaUJBQU8sTUFGQTtBQUdQQyxtQkFBUyxPQUhGO0FBSVBDLHNCQUFZLFFBSkw7QUFLUFosa0JBQVE7QUFMRCxTQURKO0FBUUxpQixvQkFBWTtBQUNWSCxpQkFBTyxHQURHO0FBRVZFLG9CQUFVO0FBRkEsU0FSUDtBQVlMRSxtQkFBVztBQUNUSixpQkFBTyxHQURFO0FBRVRFLG9CQUFVO0FBRkQsU0FaTjtBQWdCTEcsa0JBQVU7QUFDUkwsaUJBQU8sR0FEQztBQUVSRSxvQkFBVTtBQUZGO0FBaEJMO0FBRlQsS0FETTtBQWpDK0IsR0FBekM7QUFBQSxDQURhLEVBNkRiLEtBN0RhLEVBOERiO0FBQUEsTUFBR2hCLE1BQUgsU0FBR0EsTUFBSDtBQUFBLE1BQVdFLFNBQVgsU0FBV0EsU0FBWDtBQUFBLE1BQXlCcUIsQ0FBekI7O0FBQUEsU0FBaUNDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUFqQztBQUFBLENBOURhLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9jb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgaGVpZ2h0LCBzaXplLCBtYXJnaW5Ub3AgfSkgPT4gKHtcbiAgICBtaW5IZWlnaHQ6IDMwLFxuICAgIGhlaWdodCxcbiAgICBtYXJnaW5Ub3AsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbWFyZ2luWDogJ2F1dG8nLFxuICAgIHBhZGRpbmdYOiB0aGVtZS5zcGFjZTIsXG4gICAgb25BZnRlcjoge1xuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgY2xlYXI6ICdib3RoJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgIGhlaWdodDogMCxcbiAgICB9LFxuICAgIGlmTWluaToge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIGlmU21hbGxVcDoge1xuICAgICAgd2lkdGg6IDU0MCxcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICBpZk1lZGl1bVVwOiB7XG4gICAgICB3aWR0aDogNzIwLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIGlmTGFyZ2VVcDoge1xuICAgICAgd2lkdGg6IDk2MCxcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICBpZkh1Z2VVcDoge1xuICAgICAgd2lkdGg6IDExNDAsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgZXh0ZW5kOiBbXG4gICAgICB7XG4gICAgICAgIGNvbmRpdGlvbjogc2l6ZSA9PT0gJ3NtYWxsJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBvbkFmdGVyOiB7XG4gICAgICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgICAgICBjbGVhcjogJ2JvdGgnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWZNZWRpdW1VcDoge1xuICAgICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpZkxhcmdlVXA6IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MjAsXG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWZIdWdlVXA6IHtcbiAgICAgICAgICAgIHdpZHRoOiA2NDAsXG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0pLFxuICAnZGl2JyxcbiAgKHsgaGVpZ2h0LCBtYXJnaW5Ub3AsIC4uLnAgfSkgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuIl19
