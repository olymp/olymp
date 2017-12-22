var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { fade, border } from 'olymp-fela';
import Sub from './sub';
import Mega from './mega';

var Nav = createComponent(function (_ref) {
  var theme = _ref.theme,
      inverse = _ref.inverse,
      vertically = _ref.vertically,
      right = _ref.right,
      sub = _ref.sub;
  return sub && {
    backgroundColor: inverse ? fade(theme.color, 85) : '#FFFFFF',
    border: border(theme, inverse ? theme.color : theme.dark4),
    display: 'none',
    position: 'absolute',
    top: !vertically ? '100%' : -theme.borderWidth,
    left: !right && (vertically ? '100%' : 0),
    right: right && (!vertically ? 0 : '100%'),
    zIndex: 10,
    '> div': {
      textAlign: 'left'
    },
    ifMini: {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      fontSize: theme.fontSizeSmall,
      backgroundColor: inverse && theme.dark5,
      border: 'none'
    }
  };
}, function (_ref2) {
  var mega = _ref2.mega,
      sub = _ref2.sub,
      vertically = _ref2.vertically,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ['mega', 'sub', 'vertically', 'children']);

  return mega && mega(_extends({ mega: mega, sub: sub, vertically: vertically, children: children }, props)) ? React.createElement(Mega, props) : React.createElement(
    Sub,
    _extends({}, props, { vertically: sub || vertically }),
    children
  );
}, function (p) {
  return Object.keys(p);
});
Nav.displayName = 'Navbar.Nav';
Nav.propTypes = {
  /** Array of page-objects */
  pages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    pathname: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object)
  })),
  /** aligns nav-items right */
  right: PropTypes.bool
};
Nav.defaultProps = {
  pages: [],
  right: false
};
export default Nav;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbmF2YmFyL25hdi5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJjcmVhdGVDb21wb25lbnQiLCJmYWRlIiwiYm9yZGVyIiwiU3ViIiwiTWVnYSIsIk5hdiIsInRoZW1lIiwiaW52ZXJzZSIsInZlcnRpY2FsbHkiLCJyaWdodCIsInN1YiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZGFyazQiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ0b3AiLCJib3JkZXJXaWR0aCIsImxlZnQiLCJ6SW5kZXgiLCJ0ZXh0QWxpZ24iLCJpZk1pbmkiLCJmb250U2l6ZSIsImZvbnRTaXplU21hbGwiLCJkYXJrNSIsIm1lZ2EiLCJjaGlsZHJlbiIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsInBhZ2VzIiwiYXJyYXlPZiIsInNoYXBlIiwibmFtZSIsInN0cmluZyIsInBhdGhuYW1lIiwib2JqZWN0IiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLFNBQVNDLElBQVQsRUFBZUMsTUFBZixRQUE2QixZQUE3QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsT0FBaEI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCOztBQUVBLElBQU1DLE1BQU1MLGdCQUNWO0FBQUEsTUFBR00sS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsT0FBVixRQUFVQSxPQUFWO0FBQUEsTUFBbUJDLFVBQW5CLFFBQW1CQSxVQUFuQjtBQUFBLE1BQStCQyxLQUEvQixRQUErQkEsS0FBL0I7QUFBQSxNQUFzQ0MsR0FBdEMsUUFBc0NBLEdBQXRDO0FBQUEsU0FDRUEsT0FBTztBQUNMQyxxQkFBaUJKLFVBQVVOLEtBQUtLLE1BQU1NLEtBQVgsRUFBa0IsRUFBbEIsQ0FBVixHQUFrQyxTQUQ5QztBQUVMVixZQUFRQSxPQUFPSSxLQUFQLEVBQWNDLFVBQVVELE1BQU1NLEtBQWhCLEdBQXdCTixNQUFNTyxLQUE1QyxDQUZIO0FBR0xDLGFBQVMsTUFISjtBQUlMQyxjQUFVLFVBSkw7QUFLTEMsU0FBSyxDQUFDUixVQUFELEdBQWMsTUFBZCxHQUF1QixDQUFDRixNQUFNVyxXQUw5QjtBQU1MQyxVQUFNLENBQUNULEtBQUQsS0FBV0QsYUFBYSxNQUFiLEdBQXNCLENBQWpDLENBTkQ7QUFPTEMsV0FBT0EsVUFBVSxDQUFDRCxVQUFELEdBQWMsQ0FBZCxHQUFrQixNQUE1QixDQVBGO0FBUUxXLFlBQVEsRUFSSDtBQVNMLGFBQVM7QUFDUEMsaUJBQVc7QUFESixLQVRKO0FBWUxDLFlBQVE7QUFDTk4sZ0JBQVUsVUFESjtBQUVOQyxXQUFLLE1BRkM7QUFHTkUsWUFBTSxNQUhBO0FBSU5ULGFBQU8sTUFKRDtBQUtOYSxnQkFBVWhCLE1BQU1pQixhQUxWO0FBTU5aLHVCQUFpQkosV0FBV0QsTUFBTWtCLEtBTjVCO0FBT050QixjQUFRO0FBUEY7QUFaSCxHQURUO0FBQUEsQ0FEVSxFQXdCVjtBQUFBLE1BQUd1QixJQUFILFNBQUdBLElBQUg7QUFBQSxNQUFTZixHQUFULFNBQVNBLEdBQVQ7QUFBQSxNQUFjRixVQUFkLFNBQWNBLFVBQWQ7QUFBQSxNQUEwQmtCLFFBQTFCLFNBQTBCQSxRQUExQjtBQUFBLE1BQXVDQyxLQUF2Qzs7QUFBQSxTQUNFRixRQUFRQSxnQkFBT0EsVUFBUCxFQUFhZixRQUFiLEVBQWtCRixzQkFBbEIsRUFBOEJrQixrQkFBOUIsSUFBMkNDLEtBQTNDLEVBQVIsR0FDSSxvQkFBQyxJQUFELEVBQVVBLEtBQVYsQ0FESixHQUVJO0FBQUMsT0FBRDtBQUFBLGlCQUFTQSxLQUFULElBQWdCLFlBQVlqQixPQUFPRixVQUFuQztBQUNDa0I7QUFERCxHQUhOO0FBQUEsQ0F4QlUsRUE4QlY7QUFBQSxTQUFLRSxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBOUJVLENBQVo7QUFnQ0F6QixJQUFJMEIsV0FBSixHQUFrQixZQUFsQjtBQUNBMUIsSUFBSTJCLFNBQUosR0FBZ0I7QUFDZDtBQUNBQyxTQUFPbEMsVUFBVW1DLE9BQVYsQ0FDTG5DLFVBQVVvQyxLQUFWLENBQWdCO0FBQ2RDLFVBQU1yQyxVQUFVc0MsTUFERjtBQUVkQyxjQUFVdkMsVUFBVXNDLE1BRk47QUFHZFgsY0FBVTNCLFVBQVVtQyxPQUFWLENBQWtCbkMsVUFBVXdDLE1BQTVCO0FBSEksR0FBaEIsQ0FESyxDQUZPO0FBU2Q7QUFDQTlCLFNBQU9WLFVBQVV5QztBQVZILENBQWhCO0FBWUFuQyxJQUFJb0MsWUFBSixHQUFtQjtBQUNqQlIsU0FBTyxFQURVO0FBRWpCeEIsU0FBTztBQUZVLENBQW5CO0FBSUEsZUFBZUosR0FBZiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL25hdmJhci9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgZmFkZSwgYm9yZGVyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgU3ViIGZyb20gJy4vc3ViJztcbmltcG9ydCBNZWdhIGZyb20gJy4vbWVnYSc7XG5cbmNvbnN0IE5hdiA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGludmVyc2UsIHZlcnRpY2FsbHksIHJpZ2h0LCBzdWIgfSkgPT5cbiAgICBzdWIgJiYge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBpbnZlcnNlID8gZmFkZSh0aGVtZS5jb2xvciwgODUpIDogJyNGRkZGRkYnLFxuICAgICAgYm9yZGVyOiBib3JkZXIodGhlbWUsIGludmVyc2UgPyB0aGVtZS5jb2xvciA6IHRoZW1lLmRhcms0KSxcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAhdmVydGljYWxseSA/ICcxMDAlJyA6IC10aGVtZS5ib3JkZXJXaWR0aCxcbiAgICAgIGxlZnQ6ICFyaWdodCAmJiAodmVydGljYWxseSA/ICcxMDAlJyA6IDApLFxuICAgICAgcmlnaHQ6IHJpZ2h0ICYmICghdmVydGljYWxseSA/IDAgOiAnMTAwJScpLFxuICAgICAgekluZGV4OiAxMCxcbiAgICAgICc+IGRpdic6IHtcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICB9LFxuICAgICAgaWZNaW5pOiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0b3A6ICdhdXRvJyxcbiAgICAgICAgbGVmdDogJ2F1dG8nLFxuICAgICAgICByaWdodDogJ2F1dG8nLFxuICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVTbWFsbCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpbnZlcnNlICYmIHRoZW1lLmRhcms1LFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgKHsgbWVnYSwgc3ViLCB2ZXJ0aWNhbGx5LCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT5cbiAgICBtZWdhICYmIG1lZ2EoeyBtZWdhLCBzdWIsIHZlcnRpY2FsbHksIGNoaWxkcmVuLCAuLi5wcm9wcyB9KVxuICAgICAgPyA8TWVnYSB7Li4ucHJvcHN9IC8+XG4gICAgICA6IDxTdWIgey4uLnByb3BzfSB2ZXJ0aWNhbGx5PXtzdWIgfHwgdmVydGljYWxseX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvU3ViPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcbk5hdi5kaXNwbGF5TmFtZSA9ICdOYXZiYXIuTmF2Jztcbk5hdi5wcm9wVHlwZXMgPSB7XG4gIC8qKiBBcnJheSBvZiBwYWdlLW9iamVjdHMgKi9cbiAgcGFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcGF0aG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gICAgfSlcbiAgKSxcbiAgLyoqIGFsaWducyBuYXYtaXRlbXMgcmlnaHQgKi9cbiAgcmlnaHQ6IFByb3BUeXBlcy5ib29sLFxufTtcbk5hdi5kZWZhdWx0UHJvcHMgPSB7XG4gIHBhZ2VzOiBbXSxcbiAgcmlnaHQ6IGZhbHNlLFxufTtcbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdfQ==
