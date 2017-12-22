function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'olymp-fela';
import Thumb from './thumb';

var Thumbs = createComponent(function (_ref) {
  var justifyContent = _ref.justifyContent;
  return {
    padding: '.5rem 0',
    borderTop: '1px solid #eee',
    maxHeight: 100,
    maxWidth: '100%',
    overflowY: 'hidden',
    overflowX: 'scroll',
    hasFlex: {
      display: 'flex',
      flexFlow: 'column wrap',
      justifyContent: justifyContent || 'space-between',
      alignContent: 'flex-start',
      alignItems: 'flex-start'
    }
  };
}, 'div', function (_ref2) {
  var justifyContent = _ref2.justifyContent,
      p = _objectWithoutProperties(_ref2, ['justifyContent']);

  return Object.keys(p);
});

var MediaList = function MediaList(_ref3) {
  var items = _ref3.items,
      itemHeight = _ref3.itemHeight,
      selectedIds = _ref3.selectedIds,
      _onClick = _ref3.onClick,
      _onRemove = _ref3.onRemove,
      rest = _objectWithoutProperties(_ref3, ['items', 'itemHeight', 'selectedIds', 'onClick', 'onRemove']);

  return React.createElement(
    Thumbs,
    rest,
    (items || []).map(function (item) {
      return React.createElement(Thumb, {
        item: item,
        onClick: function onClick() {
          return _onClick(item);
        },
        onRemove: function onRemove() {
          return _onRemove(item);
        },
        isActive: selectedIds.indexOf(item.id) !== -1,
        height: itemHeight,
        key: item.id
      });
    })
  );
};
export { MediaList };
MediaList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  itemHeight: PropTypes.number,
  selectedIds: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  onRemove: PropTypes.func
};
MediaList.defaultProps = {
  items: [],
  itemHeight: 80,
  selectedIds: [],
  onClick: function onClick() {},
  onRemove: function onRemove() {}
};
export default MediaList;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvY29tcG9uZW50cy9nYWxsZXJ5LmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImNyZWF0ZUNvbXBvbmVudCIsIlRodW1iIiwiVGh1bWJzIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwiYm9yZGVyVG9wIiwibWF4SGVpZ2h0IiwibWF4V2lkdGgiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJoYXNGbGV4IiwiZGlzcGxheSIsImZsZXhGbG93IiwiYWxpZ25Db250ZW50IiwiYWxpZ25JdGVtcyIsInAiLCJPYmplY3QiLCJrZXlzIiwiTWVkaWFMaXN0IiwiaXRlbXMiLCJpdGVtSGVpZ2h0Iiwic2VsZWN0ZWRJZHMiLCJvbkNsaWNrIiwib25SZW1vdmUiLCJyZXN0IiwibWFwIiwiaXRlbSIsImluZGV4T2YiLCJpZCIsInByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJudW1iZXIiLCJzdHJpbmciLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLE9BQU9DLEtBQVAsTUFBa0IsU0FBbEI7O0FBRUEsSUFBTUMsU0FBU0YsZ0JBQ2I7QUFBQSxNQUFHRyxjQUFILFFBQUdBLGNBQUg7QUFBQSxTQUF5QjtBQUN2QkMsYUFBUyxTQURjO0FBRXZCQyxlQUFXLGdCQUZZO0FBR3ZCQyxlQUFXLEdBSFk7QUFJdkJDLGNBQVUsTUFKYTtBQUt2QkMsZUFBVyxRQUxZO0FBTXZCQyxlQUFXLFFBTlk7QUFPdkJDLGFBQVM7QUFDUEMsZUFBUyxNQURGO0FBRVBDLGdCQUFVLGFBRkg7QUFHUFQsc0JBQWdCQSxrQkFBa0IsZUFIM0I7QUFJUFUsb0JBQWMsWUFKUDtBQUtQQyxrQkFBWTtBQUxMO0FBUGMsR0FBekI7QUFBQSxDQURhLEVBZ0JiLEtBaEJhLEVBaUJiO0FBQUEsTUFBR1gsY0FBSCxTQUFHQSxjQUFIO0FBQUEsTUFBc0JZLENBQXRCOztBQUFBLFNBQThCQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBOUI7QUFBQSxDQWpCYSxDQUFmOztBQW9CTyxJQUFNRyxZQUFZLFNBQVpBLFNBQVk7QUFBQSxNQUN2QkMsS0FEdUIsU0FDdkJBLEtBRHVCO0FBQUEsTUFFdkJDLFVBRnVCLFNBRXZCQSxVQUZ1QjtBQUFBLE1BR3ZCQyxXQUh1QixTQUd2QkEsV0FIdUI7QUFBQSxNQUl2QkMsUUFKdUIsU0FJdkJBLE9BSnVCO0FBQUEsTUFLdkJDLFNBTHVCLFNBS3ZCQSxRQUx1QjtBQUFBLE1BTXBCQyxJQU5vQjs7QUFBQSxTQVF2QjtBQUFDLFVBQUQ7QUFBWUEsUUFBWjtBQUNHLEtBQUNMLFNBQVMsRUFBVixFQUFjTSxHQUFkLENBQWtCO0FBQUEsYUFDakIsb0JBQUMsS0FBRDtBQUNFLGNBQU1DLElBRFI7QUFFRSxpQkFBUztBQUFBLGlCQUFNSixTQUFRSSxJQUFSLENBQU47QUFBQSxTQUZYO0FBR0Usa0JBQVU7QUFBQSxpQkFBTUgsVUFBU0csSUFBVCxDQUFOO0FBQUEsU0FIWjtBQUlFLGtCQUFVTCxZQUFZTSxPQUFaLENBQW9CRCxLQUFLRSxFQUF6QixNQUFpQyxDQUFDLENBSjlDO0FBS0UsZ0JBQVFSLFVBTFY7QUFNRSxhQUFLTSxLQUFLRTtBQU5aLFFBRGlCO0FBQUEsS0FBbEI7QUFESCxHQVJ1QjtBQUFBLENBQWxCOztBQXFCUFYsVUFBVVcsU0FBVixHQUFzQjtBQUNwQlYsU0FBT3BCLFVBQVUrQixPQUFWLENBQWtCL0IsVUFBVWdDLE1BQTVCLENBRGE7QUFFcEJYLGNBQVlyQixVQUFVaUMsTUFGRjtBQUdwQlgsZUFBYXRCLFVBQVUrQixPQUFWLENBQWtCL0IsVUFBVWtDLE1BQTVCLENBSE87QUFJcEJYLFdBQVN2QixVQUFVbUMsSUFKQztBQUtwQlgsWUFBVXhCLFVBQVVtQztBQUxBLENBQXRCO0FBT0FoQixVQUFVaUIsWUFBVixHQUF5QjtBQUN2QmhCLFNBQU8sRUFEZ0I7QUFFdkJDLGNBQVksRUFGVztBQUd2QkMsZUFBYSxFQUhVO0FBSXZCQyxXQUFTLG1CQUFNLENBQUUsQ0FKTTtBQUt2QkMsWUFBVSxvQkFBTSxDQUFFO0FBTEssQ0FBekI7QUFPQSxlQUFlTCxTQUFmIiwiZmlsZSI6InBhY2thZ2VzL2Nsb3VkaW5hcnkvY29tcG9uZW50cy9nYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCBUaHVtYiBmcm9tICcuL3RodW1iJztcblxuY29uc3QgVGh1bWJzID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyBqdXN0aWZ5Q29udGVudCB9KSA9PiAoe1xuICAgIHBhZGRpbmc6ICcuNXJlbSAwJyxcbiAgICBib3JkZXJUb3A6ICcxcHggc29saWQgI2VlZScsXG4gICAgbWF4SGVpZ2h0OiAxMDAsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBvdmVyZmxvd1k6ICdoaWRkZW4nLFxuICAgIG92ZXJmbG93WDogJ3Njcm9sbCcsXG4gICAgaGFzRmxleDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleEZsb3c6ICdjb2x1bW4gd3JhcCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDoganVzdGlmeUNvbnRlbnQgfHwgJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgYWxpZ25Db250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICAoeyBqdXN0aWZ5Q29udGVudCwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBjb25zdCBNZWRpYUxpc3QgPSAoe1xuICBpdGVtcyxcbiAgaXRlbUhlaWdodCxcbiAgc2VsZWN0ZWRJZHMsXG4gIG9uQ2xpY2ssXG4gIG9uUmVtb3ZlLFxuICAuLi5yZXN0XG59KSA9PiAoXG4gIDxUaHVtYnMgey4uLnJlc3R9PlxuICAgIHsoaXRlbXMgfHwgW10pLm1hcChpdGVtID0+IChcbiAgICAgIDxUaHVtYlxuICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGl0ZW0pfVxuICAgICAgICBvblJlbW92ZT17KCkgPT4gb25SZW1vdmUoaXRlbSl9XG4gICAgICAgIGlzQWN0aXZlPXtzZWxlY3RlZElkcy5pbmRleE9mKGl0ZW0uaWQpICE9PSAtMX1cbiAgICAgICAgaGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAvPlxuICAgICkpfVxuICA8L1RodW1icz5cbik7XG5NZWRpYUxpc3QucHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNlbGVjdGVkSWRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5NZWRpYUxpc3QuZGVmYXVsdFByb3BzID0ge1xuICBpdGVtczogW10sXG4gIGl0ZW1IZWlnaHQ6IDgwLFxuICBzZWxlY3RlZElkczogW10sXG4gIG9uQ2xpY2s6ICgpID0+IHt9LFxuICBvblJlbW92ZTogKCkgPT4ge30sXG59O1xuZXhwb3J0IGRlZmF1bHQgTWVkaWFMaXN0O1xuIl19
