import PropTypes from 'prop-types';
import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';

import defaults from '../theme';
import { deepMerge } from '../utils';

function Thumbnail(_ref, _ref2) {
  var index = _ref.index,
      src = _ref.src,
      thumbnail = _ref.thumbnail,
      active = _ref.active,
      _onClick = _ref.onClick;
  var theme = _ref2.theme;

  var url = thumbnail || src;
  var classes = StyleSheet.create(deepMerge(defaultStyles, theme));

  return React.createElement('div', {
    className: css(classes.thumbnail, active && classes.thumbnail__active),
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      _onClick(index);
    },
    style: { backgroundImage: 'url("' + url + '")' }
  });
}

Thumbnail.propTypes = {
  active: PropTypes.bool,
  index: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string,
  thumbnail: PropTypes.string
};

Thumbnail.contextTypes = {
  theme: PropTypes.object.isRequired
};

var defaultStyles = {
  thumbnail: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: 2,
    boxShadow: 'inset 0 0 0 1px hsla(0,0%,100%,.2)',
    cursor: 'pointer',
    display: 'inline-block',
    height: defaults.thumbnail.size,
    margin: defaults.thumbnail.gutter,
    overflow: 'hidden',
    width: defaults.thumbnail.size
  },
  thumbnail__active: {
    boxShadow: 'inset 0 0 0 2px ' + defaults.thumbnail.activeBorderColor
  }
};

export default Thumbnail;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9UaHVtYm5haWwuZXM2Il0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIlJlYWN0IiwiY3NzIiwiU3R5bGVTaGVldCIsImRlZmF1bHRzIiwiZGVlcE1lcmdlIiwiVGh1bWJuYWlsIiwiaW5kZXgiLCJzcmMiLCJ0aHVtYm5haWwiLCJhY3RpdmUiLCJvbkNsaWNrIiwidGhlbWUiLCJ1cmwiLCJjbGFzc2VzIiwiY3JlYXRlIiwiZGVmYXVsdFN0eWxlcyIsInRodW1ibmFpbF9fYWN0aXZlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwicHJvcFR5cGVzIiwiYm9vbCIsIm51bWJlciIsImZ1bmMiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiY29udGV4dFR5cGVzIiwib2JqZWN0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJjdXJzb3IiLCJkaXNwbGF5IiwiaGVpZ2h0Iiwic2l6ZSIsIm1hcmdpbiIsImd1dHRlciIsIm92ZXJmbG93Iiwid2lkdGgiLCJhY3RpdmVCb3JkZXJDb2xvciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxHQUFULEVBQWNDLFVBQWQsUUFBZ0Msd0JBQWhDOztBQUVBLE9BQU9DLFFBQVAsTUFBcUIsVUFBckI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLFVBQTFCOztBQUVBLFNBQVNDLFNBQVQsY0FBMEU7QUFBQSxNQUFyREMsS0FBcUQsUUFBckRBLEtBQXFEO0FBQUEsTUFBOUNDLEdBQThDLFFBQTlDQSxHQUE4QztBQUFBLE1BQXpDQyxTQUF5QyxRQUF6Q0EsU0FBeUM7QUFBQSxNQUE5QkMsTUFBOEIsUUFBOUJBLE1BQThCO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxPQUFzQjtBQUFBLE1BQVRDLEtBQVMsU0FBVEEsS0FBUzs7QUFDeEUsTUFBTUMsTUFBTUosYUFBYUQsR0FBekI7QUFDQSxNQUFNTSxVQUFVWCxXQUFXWSxNQUFYLENBQWtCVixVQUFVVyxhQUFWLEVBQXlCSixLQUF6QixDQUFsQixDQUFoQjs7QUFFQSxTQUNFO0FBQ0UsZUFBV1YsSUFBSVksUUFBUUwsU0FBWixFQUF1QkMsVUFBVUksUUFBUUcsaUJBQXpDLENBRGI7QUFFRSxhQUFTLGlCQUFDQyxDQUFELEVBQU87QUFDZEEsUUFBRUMsY0FBRjtBQUNBRCxRQUFFRSxlQUFGO0FBQ0FULGVBQVFKLEtBQVI7QUFDRCxLQU5IO0FBT0UsV0FBTyxFQUFFYywyQkFBeUJSLEdBQXpCLE9BQUY7QUFQVCxJQURGO0FBV0Q7O0FBRURQLFVBQVVnQixTQUFWLEdBQXNCO0FBQ3BCWixVQUFRVixVQUFVdUIsSUFERTtBQUVwQmhCLFNBQU9QLFVBQVV3QixNQUZHO0FBR3BCYixXQUFTWCxVQUFVeUIsSUFBVixDQUFlQyxVQUhKO0FBSXBCbEIsT0FBS1IsVUFBVTJCLE1BSks7QUFLcEJsQixhQUFXVCxVQUFVMkI7QUFMRCxDQUF0Qjs7QUFRQXJCLFVBQVVzQixZQUFWLEdBQXlCO0FBQ3ZCaEIsU0FBT1osVUFBVTZCLE1BQVYsQ0FBaUJIO0FBREQsQ0FBekI7O0FBSUEsSUFBTVYsZ0JBQWdCO0FBQ3BCUCxhQUFXO0FBQ1RxQix3QkFBb0IsUUFEWDtBQUVUQyxvQkFBZ0IsT0FGUDtBQUdUQyxrQkFBYyxDQUhMO0FBSVRDLGVBQVcsb0NBSkY7QUFLVEMsWUFBUSxTQUxDO0FBTVRDLGFBQVMsY0FOQTtBQU9UQyxZQUFRaEMsU0FBU0ssU0FBVCxDQUFtQjRCLElBUGxCO0FBUVRDLFlBQVFsQyxTQUFTSyxTQUFULENBQW1COEIsTUFSbEI7QUFTVEMsY0FBVSxRQVREO0FBVVRDLFdBQU9yQyxTQUFTSyxTQUFULENBQW1CNEI7QUFWakIsR0FEUztBQWFwQnBCLHFCQUFtQjtBQUNqQmdCLG9DQUE4QjdCLFNBQVNLLFNBQVQsQ0FBbUJpQztBQURoQztBQWJDLENBQXRCOztBQWtCQSxlQUFlcEMsU0FBZiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL2xpZ2h0Ym94L2NvbXBvbmVudHMvVGh1bWJuYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIFN0eWxlU2hlZXQgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50JztcblxuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uL3V0aWxzJztcblxuZnVuY3Rpb24gVGh1bWJuYWlsKHsgaW5kZXgsIHNyYywgdGh1bWJuYWlsLCBhY3RpdmUsIG9uQ2xpY2sgfSwgeyB0aGVtZSB9KSB7XG4gIGNvbnN0IHVybCA9IHRodW1ibmFpbCB8fCBzcmM7XG4gIGNvbnN0IGNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZShkZWVwTWVyZ2UoZGVmYXVsdFN0eWxlcywgdGhlbWUpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMudGh1bWJuYWlsLCBhY3RpdmUgJiYgY2xhc3Nlcy50aHVtYm5haWxfX2FjdGl2ZSl9XG4gICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG9uQ2xpY2soaW5kZXgpO1xuICAgICAgfX1cbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7dXJsfVwiKWAgfX1cbiAgICAvPlxuICApO1xufVxuXG5UaHVtYm5haWwucHJvcFR5cGVzID0ge1xuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICBpbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aHVtYm5haWw6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UaHVtYm5haWwuY29udGV4dFR5cGVzID0ge1xuICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgdGh1bWJuYWlsOiB7XG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgYm94U2hhZG93OiAnaW5zZXQgMCAwIDAgMXB4IGhzbGEoMCwwJSwxMDAlLC4yKScsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgaGVpZ2h0OiBkZWZhdWx0cy50aHVtYm5haWwuc2l6ZSxcbiAgICBtYXJnaW46IGRlZmF1bHRzLnRodW1ibmFpbC5ndXR0ZXIsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHdpZHRoOiBkZWZhdWx0cy50aHVtYm5haWwuc2l6ZSxcbiAgfSxcbiAgdGh1bWJuYWlsX19hY3RpdmU6IHtcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAycHggJHtkZWZhdWx0cy50aHVtYm5haWwuYWN0aXZlQm9yZGVyQ29sb3J9YCxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRodW1ibmFpbDtcbiJdfQ==