'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _olympFela = require('olymp-fela');

var _thumb = require('./thumb');

var _thumb2 = _interopRequireDefault(_thumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Thumbs = (0, _olympFela.createComponent)(function (_ref) {
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

  return _react2.default.createElement(
    Thumbs,
    rest,
    (items || []).map(function (item) {
      return _react2.default.createElement(_thumb2.default, {
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
exports.MediaList = MediaList;
MediaList.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.object),
  itemHeight: _propTypes2.default.number,
  selectedIds: _propTypes2.default.arrayOf(_propTypes2.default.string),
  onClick: _propTypes2.default.func,
  onRemove: _propTypes2.default.func
};
MediaList.defaultProps = {
  items: [],
  itemHeight: 80,
  selectedIds: [],
  onClick: function onClick() {},
  onRemove: function onRemove() {}
};
exports.default = MediaList;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2NvbXBvbmVudHMvZ2FsbGVyeS5lczYiXSwibmFtZXMiOlsiVGh1bWJzIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwiYm9yZGVyVG9wIiwibWF4SGVpZ2h0IiwibWF4V2lkdGgiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJoYXNGbGV4IiwiZGlzcGxheSIsImZsZXhGbG93IiwiYWxpZ25Db250ZW50IiwiYWxpZ25JdGVtcyIsInAiLCJPYmplY3QiLCJrZXlzIiwiTWVkaWFMaXN0IiwiaXRlbXMiLCJpdGVtSGVpZ2h0Iiwic2VsZWN0ZWRJZHMiLCJvbkNsaWNrIiwib25SZW1vdmUiLCJyZXN0IiwibWFwIiwiaXRlbSIsImluZGV4T2YiLCJpZCIsInByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJudW1iZXIiLCJzdHJpbmciLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVMsZ0NBQ2I7QUFBQSxNQUFHQyxjQUFILFFBQUdBLGNBQUg7QUFBQSxTQUF5QjtBQUN2QkMsYUFBUyxTQURjO0FBRXZCQyxlQUFXLGdCQUZZO0FBR3ZCQyxlQUFXLEdBSFk7QUFJdkJDLGNBQVUsTUFKYTtBQUt2QkMsZUFBVyxRQUxZO0FBTXZCQyxlQUFXLFFBTlk7QUFPdkJDLGFBQVM7QUFDUEMsZUFBUyxNQURGO0FBRVBDLGdCQUFVLGFBRkg7QUFHUFQsc0JBQWdCQSxrQkFBa0IsZUFIM0I7QUFJUFUsb0JBQWMsWUFKUDtBQUtQQyxrQkFBWTtBQUxMO0FBUGMsR0FBekI7QUFBQSxDQURhLEVBZ0JiLEtBaEJhLEVBaUJiO0FBQUEsTUFBR1gsY0FBSCxTQUFHQSxjQUFIO0FBQUEsTUFBc0JZLENBQXRCOztBQUFBLFNBQThCQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBOUI7QUFBQSxDQWpCYSxDQUFmOztBQW9CTyxJQUFNRyxZQUFZLFNBQVpBLFNBQVk7QUFBQSxNQUN2QkMsS0FEdUIsU0FDdkJBLEtBRHVCO0FBQUEsTUFFdkJDLFVBRnVCLFNBRXZCQSxVQUZ1QjtBQUFBLE1BR3ZCQyxXQUh1QixTQUd2QkEsV0FIdUI7QUFBQSxNQUl2QkMsUUFKdUIsU0FJdkJBLE9BSnVCO0FBQUEsTUFLdkJDLFNBTHVCLFNBS3ZCQSxRQUx1QjtBQUFBLE1BTXBCQyxJQU5vQjs7QUFBQSxTQVF2QjtBQUFDLFVBQUQ7QUFBWUEsUUFBWjtBQUNHLEtBQUNMLFNBQVMsRUFBVixFQUFjTSxHQUFkLENBQWtCO0FBQUEsYUFDakI7QUFDRSxjQUFNQyxJQURSO0FBRUUsaUJBQVM7QUFBQSxpQkFBTUosU0FBUUksSUFBUixDQUFOO0FBQUEsU0FGWDtBQUdFLGtCQUFVO0FBQUEsaUJBQU1ILFVBQVNHLElBQVQsQ0FBTjtBQUFBLFNBSFo7QUFJRSxrQkFBVUwsWUFBWU0sT0FBWixDQUFvQkQsS0FBS0UsRUFBekIsTUFBaUMsQ0FBQyxDQUo5QztBQUtFLGdCQUFRUixVQUxWO0FBTUUsYUFBS00sS0FBS0U7QUFOWixRQURpQjtBQUFBLEtBQWxCO0FBREgsR0FSdUI7QUFBQSxDQUFsQjs7QUFxQlBWLFVBQVVXLFNBQVYsR0FBc0I7QUFDcEJWLFNBQU8sb0JBQVVXLE9BQVYsQ0FBa0Isb0JBQVVDLE1BQTVCLENBRGE7QUFFcEJYLGNBQVksb0JBQVVZLE1BRkY7QUFHcEJYLGVBQWEsb0JBQVVTLE9BQVYsQ0FBa0Isb0JBQVVHLE1BQTVCLENBSE87QUFJcEJYLFdBQVMsb0JBQVVZLElBSkM7QUFLcEJYLFlBQVUsb0JBQVVXO0FBTEEsQ0FBdEI7QUFPQWhCLFVBQVVpQixZQUFWLEdBQXlCO0FBQ3ZCaEIsU0FBTyxFQURnQjtBQUV2QkMsY0FBWSxFQUZXO0FBR3ZCQyxlQUFhLEVBSFU7QUFJdkJDLFdBQVMsbUJBQU0sQ0FBRSxDQUpNO0FBS3ZCQyxZQUFVLG9CQUFNLENBQUU7QUFMSyxDQUF6QjtrQkFPZUwsUyIsImZpbGUiOiJjbXMvY2xvdWRpbmFyeS9jb21wb25lbnRzL2dhbGxlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IFRodW1iIGZyb20gJy4vdGh1bWInO1xuXG5jb25zdCBUaHVtYnMgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IGp1c3RpZnlDb250ZW50IH0pID0+ICh7XG4gICAgcGFkZGluZzogJy41cmVtIDAnLFxuICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZWVlJyxcbiAgICBtYXhIZWlnaHQ6IDEwMCxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG92ZXJmbG93WTogJ2hpZGRlbicsXG4gICAgb3ZlcmZsb3dYOiAnc2Nyb2xsJyxcbiAgICBoYXNGbGV4OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RmxvdzogJ2NvbHVtbiB3cmFwJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiBqdXN0aWZ5Q29udGVudCB8fCAnc3BhY2UtYmV0d2VlbicsXG4gICAgICBhbGlnbkNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gICh7IGp1c3RpZnlDb250ZW50LCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuZXhwb3J0IGNvbnN0IE1lZGlhTGlzdCA9ICh7XG4gIGl0ZW1zLFxuICBpdGVtSGVpZ2h0LFxuICBzZWxlY3RlZElkcyxcbiAgb25DbGljayxcbiAgb25SZW1vdmUsXG4gIC4uLnJlc3Rcbn0pID0+IChcbiAgPFRodW1icyB7Li4ucmVzdH0+XG4gICAgeyhpdGVtcyB8fCBbXSkubWFwKGl0ZW0gPT4gKFxuICAgICAgPFRodW1iXG4gICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soaXRlbSl9XG4gICAgICAgIG9uUmVtb3ZlPXsoKSA9PiBvblJlbW92ZShpdGVtKX1cbiAgICAgICAgaXNBY3RpdmU9e3NlbGVjdGVkSWRzLmluZGV4T2YoaXRlbS5pZCkgIT09IC0xfVxuICAgICAgICBoZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgIC8+XG4gICAgKSl9XG4gIDwvVGh1bWJzPlxuKTtcbk1lZGlhTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgc2VsZWN0ZWRJZHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25SZW1vdmU6IFByb3BUeXBlcy5mdW5jLFxufTtcbk1lZGlhTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGl0ZW1zOiBbXSxcbiAgaXRlbUhlaWdodDogODAsXG4gIHNlbGVjdGVkSWRzOiBbXSxcbiAgb25DbGljazogKCkgPT4ge30sXG4gIG9uUmVtb3ZlOiAoKSA9PiB7fSxcbn07XG5leHBvcnQgZGVmYXVsdCBNZWRpYUxpc3Q7XG4iXX0=
