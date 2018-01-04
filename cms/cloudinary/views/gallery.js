'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CellMeasurer = require('react-virtualized/dist/commonjs/CellMeasurer');

var _AutoSizer = require('react-virtualized/dist/commonjs/AutoSizer');

var _AutoSizer2 = _interopRequireDefault(_AutoSizer);

var _WindowScroller = require('react-virtualized/dist/commonjs/WindowScroller');

var _WindowScroller2 = _interopRequireDefault(_WindowScroller);

var _Masonry = require('react-virtualized/dist/commonjs/Masonry');

var _Masonry2 = _interopRequireDefault(_Masonry);

var _thumb = require('../components/thumb');

var _thumb2 = _interopRequireDefault(_thumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var overscanByPixels = 500;
var Item = function Item(_ref) {
  var style = _ref.style,
      item = _ref.item,
      isActive = _ref.isActive,
      onClick = _ref.onClick,
      onRemove = _ref.onRemove,
      width = _ref.width;
  return _react2.default.createElement(
    'div',
    {
      style: _extends({}, style, {
        display: 'flex',
        flexDirection: 'column',
        wordBreak: 'break-all',
        width: width
      })
    },
    _react2.default.createElement(_thumb2.default, {
      item: item,
      width: width,
      onClick: onClick && function (e) {
        return onClick(item, e.altKey || e.shiftKey);
      },
      onRemove: onRemove && function () {
        return onRemove(item);
      },
      isActive: isActive
    }),
    _react2.default.createElement(
      'small',
      {
        style: { textAlign: 'center', maxWidth: width, marginTop: '-0.5rem' }
      },
      _react2.default.createElement(
        'b',
        null,
        item.caption
      )
    )
  );
};

var columnWidth = 200;
var columnHeight = 200;
var gutterSize = 0;
var GridExample = (_temp = _class = function (_PureComponent) {
  _inherits(GridExample, _PureComponent);

  function GridExample(props) {
    _classCallCheck(this, GridExample);

    var _this = _possibleConstructorReturn(this, (GridExample.__proto__ || Object.getPrototypeOf(GridExample)).call(this, props));

    _this.height = 0;

    _this.calculateColumnCount = function () {
      _this.columnCount = Math.floor(_this.width / (columnWidth + gutterSize));
      _this.columnWidth = Math.floor(_this.width / _this.columnCount);
    };

    _this.cellRenderer = function (_ref2) {
      var index = _ref2.index,
          key = _ref2.key,
          parent = _ref2.parent,
          style = _ref2.style;
      var _this$props = _this.props,
          items = _this$props.items,
          onClick = _this$props.onClick,
          onRemove = _this$props.onRemove,
          isActive = _this$props.isActive;


      var item = (items || [])[index];
      if (!item) {
        return null;
      }
      return _react2.default.createElement(
        _CellMeasurer.CellMeasurer,
        { cache: _this.cache, index: index, key: key, parent: parent },
        _react2.default.createElement(Item, {
          isActive: isActive && isActive(item),
          style: style,
          item: item,
          onClick: onClick,
          onRemove: onRemove,
          width: _this.columnWidth
        })
      );
    };

    _this.initCellPositioner = function () {
      if (typeof _this.cellPositioner === 'undefined') {
        _this.cellPositioner = (0, _Masonry.createCellPositioner)({
          cellMeasurerCache: _this.cache,
          columnCount: _this.columnCount,
          columnWidth: _this.columnWidth,
          spacer: gutterSize
        });
      }
    };

    _this.onResize = function (_ref3) {
      var width = _ref3.width,
          height = _ref3.height;
      var useBodyScroll = _this.props.useBodyScroll;

      _this.width = width;
      if (!useBodyScroll) {
        _this.height = height;
      }
      _this.columnHeights = {};
      _this.calculateColumnCount();
      _this.resetCellPositioner();
      if (_this.masonry) {
        _this.masonry.recomputeCellPositions();
      }
    };

    _this.renderMasonry = function (_ref4) {
      var width = _ref4.width,
          height = _ref4.height;
      var _this$props2 = _this.props,
          items = _this$props2.items,
          useBodyScroll = _this$props2.useBodyScroll;

      _this.width = width;
      if (!useBodyScroll) {
        _this.height = height;
      }

      _this.calculateColumnCount();
      _this.initCellPositioner();

      return _react2.default.createElement(_Masonry2.default, {
        selection: _this.props.selection,
        autoHeight: useBodyScroll,
        height: _this.height,
        overscanByPixels: overscanByPixels,
        cellCount: (items || []).length,
        cellMeasurerCache: _this.cache,
        cellPositioner: _this.cellPositioner,
        cellRenderer: _this.cellRenderer,
        ref: _this.setMasonryRef,
        width: width,
        scrollTop: _this.scrollTop,
        style: { outline: 0 }
      });
    };

    _this.resetCellPositioner = function () {
      _this.cellPositioner.reset({
        columnCount: _this.columnCount,
        columnWidth: _this.columnWidth,
        spacer: gutterSize
      });
    };

    _this.setMasonryRef = function (ref) {
      _this.masonry = ref;
    };

    _this.renderAutoSizer = function (_ref5) {
      var height = _ref5.height,
          scrollTop = _ref5.scrollTop;
      var _this$props3 = _this.props,
          selection = _this$props3.selection,
          useBodyScroll = _this$props3.useBodyScroll;

      _this.height = height;
      _this.scrollTop = scrollTop;
      return _react2.default.createElement(
        _AutoSizer2.default,
        {
          selection: selection,
          disableHeight: useBodyScroll,
          height: height,
          overscanByPixels: overscanByPixels,
          onResize: _this.onResize,
          scrollTop: scrollTop
        },
        _this.renderMasonry
      );
    };

    _this.columnCount = 0;
    _this.columnHeights = {};
    _this.cache = new _CellMeasurer.CellMeasurerCache({
      defaultHeight: columnHeight,
      defaultWidth: columnWidth,
      fixedWidth: true
    });
    return _this;
  }

  _createClass(GridExample, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          useBodyScroll = _props.useBodyScroll,
          selection = _props.selection;

      if (!useBodyScroll) {
        return this.renderAutoSizer({ height: this.height });
      }
      return _react2.default.createElement(
        'div',
        {
          style: {
            marginRight: 72
          }
        },
        _react2.default.createElement(
          _WindowScroller2.default,
          {
            selection: selection,
            overscanByPixels: overscanByPixels
          },
          this.renderAutoSizer
        )
      );
    }
  }]);

  return GridExample;
}(_react.PureComponent), _class.defaultProps = {
  useBodyScroll: true
}, _temp);
exports.default = GridExample;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L3ZpZXdzL2dhbGxlcnkuZXM2Il0sIm5hbWVzIjpbIm92ZXJzY2FuQnlQaXhlbHMiLCJJdGVtIiwic3R5bGUiLCJpdGVtIiwiaXNBY3RpdmUiLCJvbkNsaWNrIiwib25SZW1vdmUiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwid29yZEJyZWFrIiwiZSIsImFsdEtleSIsInNoaWZ0S2V5IiwidGV4dEFsaWduIiwibWF4V2lkdGgiLCJtYXJnaW5Ub3AiLCJjYXB0aW9uIiwiY29sdW1uV2lkdGgiLCJjb2x1bW5IZWlnaHQiLCJndXR0ZXJTaXplIiwiR3JpZEV4YW1wbGUiLCJwcm9wcyIsImhlaWdodCIsImNhbGN1bGF0ZUNvbHVtbkNvdW50IiwiY29sdW1uQ291bnQiLCJNYXRoIiwiZmxvb3IiLCJjZWxsUmVuZGVyZXIiLCJpbmRleCIsImtleSIsInBhcmVudCIsIml0ZW1zIiwiY2FjaGUiLCJpbml0Q2VsbFBvc2l0aW9uZXIiLCJjZWxsUG9zaXRpb25lciIsImNlbGxNZWFzdXJlckNhY2hlIiwic3BhY2VyIiwib25SZXNpemUiLCJ1c2VCb2R5U2Nyb2xsIiwiY29sdW1uSGVpZ2h0cyIsInJlc2V0Q2VsbFBvc2l0aW9uZXIiLCJtYXNvbnJ5IiwicmVjb21wdXRlQ2VsbFBvc2l0aW9ucyIsInJlbmRlck1hc29ucnkiLCJzZWxlY3Rpb24iLCJsZW5ndGgiLCJzZXRNYXNvbnJ5UmVmIiwic2Nyb2xsVG9wIiwib3V0bGluZSIsInJlc2V0IiwicmVmIiwicmVuZGVyQXV0b1NpemVyIiwiZGVmYXVsdEhlaWdodCIsImRlZmF1bHRXaWR0aCIsImZpeGVkV2lkdGgiLCJtYXJnaW5SaWdodCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixHQUF6QjtBQUNBLElBQU1DLE9B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QUFyQjtBQUNBLFVBQUtQLEtBQUwsR0FBYSxvQ0FBc0I7QUFDakNvQixxQkFBZWxDLFlBRGtCO0FBRWpDbUMsb0JBQWNwQyxXQUZtQjtBQUdqQ3FDLGtCQUFZO0FBSHFCLEtBQXRCLENBQWI7QUFMaUI7QUFVbEI7Ozs7NkJBK0dRO0FBQUEsbUJBQzhCLEtBQUtqQyxLQURuQztBQUFBLFVBQ0NpQixhQURELFVBQ0NBLGFBREQ7QUFBQSxVQUNnQk0sU0FEaEIsVUFDZ0JBLFNBRGhCOztBQUVQLFVBQUksQ0FBQ04sYUFBTCxFQUFvQjtBQUNsQixlQUFPLEtBQUthLGVBQUwsQ0FBcUIsRUFBRTdCLFFBQVEsS0FBS0EsTUFBZixFQUFyQixDQUFQO0FBQ0Q7QUFDRCxhQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFPO0FBQ0xpQyx5QkFBYTtBQURSO0FBRFQ7QUFLRTtBQUFBO0FBQUE7QUFDRSx1QkFBV1gsU0FEYjtBQUVFLDhCQUFrQjdDO0FBRnBCO0FBSUcsZUFBS29EO0FBSlI7QUFMRixPQURGO0FBY0Q7Ozs7Z0NBaEpNSyxZLEdBQWU7QUFDcEJsQixpQkFBZTtBQURLLEM7a0JBSEhsQixXIiwiZmlsZSI6ImNtcy9jbG91ZGluYXJ5L3ZpZXdzL2dhbGxlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIENlbGxNZWFzdXJlcixcbiAgQ2VsbE1lYXN1cmVyQ2FjaGUsXG59IGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvQ2VsbE1lYXN1cmVyJztcbmltcG9ydCBBdXRvU2l6ZXIgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9BdXRvU2l6ZXInO1xuaW1wb3J0IFdpbmRvd1Njcm9sbGVyIGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvV2luZG93U2Nyb2xsZXInO1xuaW1wb3J0IE1hc29ucnksIHtcbiAgY3JlYXRlQ2VsbFBvc2l0aW9uZXIsXG59IGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvTWFzb25yeSc7XG5pbXBvcnQgVGh1bWIgZnJvbSAnLi4vY29tcG9uZW50cy90aHVtYic7XG5cbmNvbnN0IG92ZXJzY2FuQnlQaXhlbHMgPSA1MDA7XG5jb25zdCBJdGVtID0gKHsgc3R5bGUsIGl0ZW0sIGlzQWN0aXZlLCBvbkNsaWNrLCBvblJlbW92ZSwgd2lkdGggfSkgPT4gKFxuICA8ZGl2XG4gICAgc3R5bGU9e3tcbiAgICAgIC4uLnN0eWxlLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICB3b3JkQnJlYWs6ICdicmVhay1hbGwnLFxuICAgICAgd2lkdGgsXG4gICAgfX1cbiAgPlxuICAgIDxUaHVtYlxuICAgICAgaXRlbT17aXRlbX1cbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2sgJiYgKGUgPT4gb25DbGljayhpdGVtLCBlLmFsdEtleSB8fCBlLnNoaWZ0S2V5KSl9XG4gICAgICBvblJlbW92ZT17b25SZW1vdmUgJiYgKCgpID0+IG9uUmVtb3ZlKGl0ZW0pKX1cbiAgICAgIGlzQWN0aXZlPXtpc0FjdGl2ZX1cbiAgICAvPlxuICAgIDxzbWFsbFxuICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWF4V2lkdGg6IHdpZHRoLCBtYXJnaW5Ub3A6ICctMC41cmVtJyB9fVxuICAgID5cbiAgICAgIDxiPntpdGVtLmNhcHRpb259PC9iPlxuICAgIDwvc21hbGw+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgY29sdW1uV2lkdGggPSAyMDA7XG5jb25zdCBjb2x1bW5IZWlnaHQgPSAyMDA7XG5jb25zdCBndXR0ZXJTaXplID0gMDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWRFeGFtcGxlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGhlaWdodCA9IDA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB1c2VCb2R5U2Nyb2xsOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jb2x1bW5Db3VudCA9IDA7XG4gICAgdGhpcy5jb2x1bW5IZWlnaHRzID0ge307XG4gICAgdGhpcy5jYWNoZSA9IG5ldyBDZWxsTWVhc3VyZXJDYWNoZSh7XG4gICAgICBkZWZhdWx0SGVpZ2h0OiBjb2x1bW5IZWlnaHQsXG4gICAgICBkZWZhdWx0V2lkdGg6IGNvbHVtbldpZHRoLFxuICAgICAgZml4ZWRXaWR0aDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUNvbHVtbkNvdW50ID0gKCkgPT4ge1xuICAgIHRoaXMuY29sdW1uQ291bnQgPSBNYXRoLmZsb29yKHRoaXMud2lkdGggLyAoY29sdW1uV2lkdGggKyBndXR0ZXJTaXplKSk7XG4gICAgdGhpcy5jb2x1bW5XaWR0aCA9IE1hdGguZmxvb3IodGhpcy53aWR0aCAvIHRoaXMuY29sdW1uQ291bnQpO1xuICB9O1xuXG4gIGNlbGxSZW5kZXJlciA9ICh7IGluZGV4LCBrZXksIHBhcmVudCwgc3R5bGUgfSkgPT4ge1xuICAgIGNvbnN0IHsgaXRlbXMsIG9uQ2xpY2ssIG9uUmVtb3ZlLCBpc0FjdGl2ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGl0ZW0gPSAoaXRlbXMgfHwgW10pW2luZGV4XTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPENlbGxNZWFzdXJlciBjYWNoZT17dGhpcy5jYWNoZX0gaW5kZXg9e2luZGV4fSBrZXk9e2tleX0gcGFyZW50PXtwYXJlbnR9PlxuICAgICAgICA8SXRlbVxuICAgICAgICAgIGlzQWN0aXZlPXtpc0FjdGl2ZSAmJiBpc0FjdGl2ZShpdGVtKX1cbiAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgIG9uUmVtb3ZlPXtvblJlbW92ZX1cbiAgICAgICAgICB3aWR0aD17dGhpcy5jb2x1bW5XaWR0aH1cbiAgICAgICAgLz5cbiAgICAgIDwvQ2VsbE1lYXN1cmVyPlxuICAgICk7XG4gIH07XG5cbiAgaW5pdENlbGxQb3NpdGlvbmVyID0gKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5jZWxsUG9zaXRpb25lciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY2VsbFBvc2l0aW9uZXIgPSBjcmVhdGVDZWxsUG9zaXRpb25lcih7XG4gICAgICAgIGNlbGxNZWFzdXJlckNhY2hlOiB0aGlzLmNhY2hlLFxuICAgICAgICBjb2x1bW5Db3VudDogdGhpcy5jb2x1bW5Db3VudCxcbiAgICAgICAgY29sdW1uV2lkdGg6IHRoaXMuY29sdW1uV2lkdGgsXG4gICAgICAgIHNwYWNlcjogZ3V0dGVyU2l6ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBvblJlc2l6ZSA9ICh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICAgIGNvbnN0IHsgdXNlQm9keVNjcm9sbCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgaWYgKCF1c2VCb2R5U2Nyb2xsKSB7XG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgdGhpcy5jb2x1bW5IZWlnaHRzID0ge307XG4gICAgdGhpcy5jYWxjdWxhdGVDb2x1bW5Db3VudCgpO1xuICAgIHRoaXMucmVzZXRDZWxsUG9zaXRpb25lcigpO1xuICAgIGlmICh0aGlzLm1hc29ucnkpIHtcbiAgICAgIHRoaXMubWFzb25yeS5yZWNvbXB1dGVDZWxsUG9zaXRpb25zKCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlck1hc29ucnkgPSAoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcbiAgICBjb25zdCB7IGl0ZW1zLCB1c2VCb2R5U2Nyb2xsIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICBpZiAoIXVzZUJvZHlTY3JvbGwpIHtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIHRoaXMuY2FsY3VsYXRlQ29sdW1uQ291bnQoKTtcbiAgICB0aGlzLmluaXRDZWxsUG9zaXRpb25lcigpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNYXNvbnJ5XG4gICAgICAgIHNlbGVjdGlvbj17dGhpcy5wcm9wcy5zZWxlY3Rpb259XG4gICAgICAgIGF1dG9IZWlnaHQ9e3VzZUJvZHlTY3JvbGx9XG4gICAgICAgIGhlaWdodD17dGhpcy5oZWlnaHR9XG4gICAgICAgIG92ZXJzY2FuQnlQaXhlbHM9e292ZXJzY2FuQnlQaXhlbHN9XG4gICAgICAgIGNlbGxDb3VudD17KGl0ZW1zIHx8IFtdKS5sZW5ndGh9XG4gICAgICAgIGNlbGxNZWFzdXJlckNhY2hlPXt0aGlzLmNhY2hlfVxuICAgICAgICBjZWxsUG9zaXRpb25lcj17dGhpcy5jZWxsUG9zaXRpb25lcn1cbiAgICAgICAgY2VsbFJlbmRlcmVyPXt0aGlzLmNlbGxSZW5kZXJlcn1cbiAgICAgICAgcmVmPXt0aGlzLnNldE1hc29ucnlSZWZ9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgc2Nyb2xsVG9wPXt0aGlzLnNjcm9sbFRvcH1cbiAgICAgICAgc3R5bGU9e3sgb3V0bGluZTogMCB9fVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlc2V0Q2VsbFBvc2l0aW9uZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jZWxsUG9zaXRpb25lci5yZXNldCh7XG4gICAgICBjb2x1bW5Db3VudDogdGhpcy5jb2x1bW5Db3VudCxcbiAgICAgIGNvbHVtbldpZHRoOiB0aGlzLmNvbHVtbldpZHRoLFxuICAgICAgc3BhY2VyOiBndXR0ZXJTaXplLFxuICAgIH0pO1xuICB9O1xuXG4gIHNldE1hc29ucnlSZWYgPSByZWYgPT4ge1xuICAgIHRoaXMubWFzb25yeSA9IHJlZjtcbiAgfTtcblxuICByZW5kZXJBdXRvU2l6ZXIgPSAoeyBoZWlnaHQsIHNjcm9sbFRvcCB9KSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3Rpb24sIHVzZUJvZHlTY3JvbGwgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBdXRvU2l6ZXJcbiAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XG4gICAgICAgIGRpc2FibGVIZWlnaHQ9e3VzZUJvZHlTY3JvbGx9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBvdmVyc2NhbkJ5UGl4ZWxzPXtvdmVyc2NhbkJ5UGl4ZWxzfVxuICAgICAgICBvblJlc2l6ZT17dGhpcy5vblJlc2l6ZX1cbiAgICAgICAgc2Nyb2xsVG9wPXtzY3JvbGxUb3B9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnJlbmRlck1hc29ucnl9XG4gICAgICA8L0F1dG9TaXplcj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZUJvZHlTY3JvbGwsIHNlbGVjdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXVzZUJvZHlTY3JvbGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckF1dG9TaXplcih7IGhlaWdodDogdGhpcy5oZWlnaHQgfSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDcyLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8V2luZG93U2Nyb2xsZXJcbiAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cbiAgICAgICAgICBvdmVyc2NhbkJ5UGl4ZWxzPXtvdmVyc2NhbkJ5UGl4ZWxzfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucmVuZGVyQXV0b1NpemVyfVxuICAgICAgICA8L1dpbmRvd1Njcm9sbGVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19
