var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import { CellMeasurer, CellMeasurerCache } from 'react-virtualized/dist/commonjs/CellMeasurer';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import WindowScroller from 'react-virtualized/dist/commonjs/WindowScroller';
import Masonry, { createCellPositioner } from 'react-virtualized/dist/commonjs/Masonry';
import Thumb from '../components/thumb';

var overscanByPixels = 500;
var Item = function Item(_ref) {
  var style = _ref.style,
      item = _ref.item,
      isActive = _ref.isActive,
      onClick = _ref.onClick,
      onRemove = _ref.onRemove,
      width = _ref.width;
  return React.createElement(
    'div',
    {
      style: _extends({}, style, {
        display: 'flex',
        flexDirection: 'column',
        wordBreak: 'break-all',
        width: width
      })
    },
    React.createElement(Thumb, {
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
    React.createElement(
      'small',
      {
        style: { textAlign: 'center', maxWidth: width, marginTop: '-0.5rem' }
      },
      React.createElement(
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
      return React.createElement(
        CellMeasurer,
        { cache: _this.cache, index: index, key: key, parent: parent },
        React.createElement(Item, {
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
        _this.cellPositioner = createCellPositioner({
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

      return React.createElement(Masonry, {
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
      return React.createElement(
        AutoSizer,
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
    _this.cache = new CellMeasurerCache({
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
      return React.createElement(
        'div',
        {
          style: {
            marginRight: 72
          }
        },
        React.createElement(
          WindowScroller,
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
}(PureComponent), _class.defaultProps = {
  useBodyScroll: true
}, _temp);
export { GridExample as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvdmlld3MvZ2FsbGVyeS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiQ2VsbE1lYXN1cmVyIiwiQ2VsbE1lYXN1cmVyQ2FjaGUiLCJBdXRvU2l6ZXIiLCJXaW5kb3dTY3JvbGxlciIsIk1hc29ucnkiLCJjcmVhdGVDZWxsUG9zaXRpb25lciIsIlRodW1iIiwib3ZlcnNjYW5CeVBpeGVscyIsIkl0ZW0iLCJzdHlsZSIsIml0ZW0iLCJpc0FjdGl2ZSIsIm9uQ2xpY2siLCJvblJlbW92ZSIsIndpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ3b3JkQnJlYWsiLCJlIiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJ0ZXh0QWxpZ24iLCJtYXhXaWR0aCIsIm1hcmdpblRvcCIsImNhcHRpb24iLCJjb2x1bW5XaWR0aCIsImNvbHVtbkhlaWdodCIsImd1dHRlclNpemUiLCJHcmlkRXhhbXBsZSIsInByb3BzIiwiaGVpZ2h0IiwiY2FsY3VsYXRlQ29sdW1uQ291bnQiLCJjb2x1bW5Db3VudCIsIk1hdGgiLCJmbG9vciIsImNlbGxSZW5kZXJlciIsImluZGV4Iiwia2V5IiwicGFyZW50IiwiaXRlbXMiLCJjYWNoZSIsImluaXRDZWxsUG9zaXRpb25lciIsImNlbGxQb3NpdGlvbmVyIiwiY2VsbE1lYXN1cmVyQ2FjaGUiLCJzcGFjZXIiLCJvblJlc2l6ZSIsInVzZUJvZHlTY3JvbGwiLCJjb2x1bW5IZWlnaHRzIiwicmVzZXRDZWxsUG9zaXRpb25lciIsIm1hc29ucnkiLCJyZWNvbXB1dGVDZWxsUG9zaXRpb25zIiwicmVuZGVyTWFzb25yeSIsInNlbGVjdGlvbiIsImxlbmd0aCIsInNldE1hc29ucnlSZWYiLCJzY3JvbGxUb3AiLCJvdXRsaW5lIiwicmVzZXQiLCJyZWYiLCJyZW5kZXJBdXRvU2l6ZXIiLCJkZWZhdWx0SGVpZ2h0IiwiZGVmYXVsdFdpZHRoIiwiZml4ZWRXaWR0aCIsIm1hcmdpblJpZ2h0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ZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQ2VsbE1lYXN1cmVyLFxuICBDZWxsTWVhc3VyZXJDYWNoZSxcbn0gZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9DZWxsTWVhc3VyZXInO1xuaW1wb3J0IEF1dG9TaXplciBmcm9tICdyZWFjdC12aXJ0dWFsaXplZC9kaXN0L2NvbW1vbmpzL0F1dG9TaXplcic7XG5pbXBvcnQgV2luZG93U2Nyb2xsZXIgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9XaW5kb3dTY3JvbGxlcic7XG5pbXBvcnQgTWFzb25yeSwge1xuICBjcmVhdGVDZWxsUG9zaXRpb25lcixcbn0gZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9NYXNvbnJ5JztcbmltcG9ydCBUaHVtYiBmcm9tICcuLi9jb21wb25lbnRzL3RodW1iJztcblxuY29uc3Qgb3ZlcnNjYW5CeVBpeGVscyA9IDUwMDtcbmNvbnN0IEl0ZW0gPSAoeyBzdHlsZSwgaXRlbSwgaXNBY3RpdmUsIG9uQ2xpY2ssIG9uUmVtb3ZlLCB3aWR0aCB9KSA9PiAoXG4gIDxkaXZcbiAgICBzdHlsZT17e1xuICAgICAgLi4uc3R5bGUsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIHdvcmRCcmVhazogJ2JyZWFrLWFsbCcsXG4gICAgICB3aWR0aCxcbiAgICB9fVxuICA+XG4gICAgPFRodW1iXG4gICAgICBpdGVtPXtpdGVtfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgb25DbGljaz17b25DbGljayAmJiAoZSA9PiBvbkNsaWNrKGl0ZW0sIGUuYWx0S2V5IHx8IGUuc2hpZnRLZXkpKX1cbiAgICAgIG9uUmVtb3ZlPXtvblJlbW92ZSAmJiAoKCkgPT4gb25SZW1vdmUoaXRlbSkpfVxuICAgICAgaXNBY3RpdmU9e2lzQWN0aXZlfVxuICAgIC8+XG4gICAgPHNtYWxsXG4gICAgICBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXhXaWR0aDogd2lkdGgsIG1hcmdpblRvcDogJy0wLjVyZW0nIH19XG4gICAgPlxuICAgICAgPGI+e2l0ZW0uY2FwdGlvbn08L2I+XG4gICAgPC9zbWFsbD5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBjb2x1bW5XaWR0aCA9IDIwMDtcbmNvbnN0IGNvbHVtbkhlaWdodCA9IDIwMDtcbmNvbnN0IGd1dHRlclNpemUgPSAwO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZEV4YW1wbGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgaGVpZ2h0ID0gMDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHVzZUJvZHlTY3JvbGw6IHRydWUsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNvbHVtbkNvdW50ID0gMDtcbiAgICB0aGlzLmNvbHVtbkhlaWdodHMgPSB7fTtcbiAgICB0aGlzLmNhY2hlID0gbmV3IENlbGxNZWFzdXJlckNhY2hlKHtcbiAgICAgIGRlZmF1bHRIZWlnaHQ6IGNvbHVtbkhlaWdodCxcbiAgICAgIGRlZmF1bHRXaWR0aDogY29sdW1uV2lkdGgsXG4gICAgICBmaXhlZFdpZHRoOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgY2FsY3VsYXRlQ29sdW1uQ291bnQgPSAoKSA9PiB7XG4gICAgdGhpcy5jb2x1bW5Db3VudCA9IE1hdGguZmxvb3IodGhpcy53aWR0aCAvIChjb2x1bW5XaWR0aCArIGd1dHRlclNpemUpKTtcbiAgICB0aGlzLmNvbHVtbldpZHRoID0gTWF0aC5mbG9vcih0aGlzLndpZHRoIC8gdGhpcy5jb2x1bW5Db3VudCk7XG4gIH07XG5cbiAgY2VsbFJlbmRlcmVyID0gKHsgaW5kZXgsIGtleSwgcGFyZW50LCBzdHlsZSB9KSA9PiB7XG4gICAgY29uc3QgeyBpdGVtcywgb25DbGljaywgb25SZW1vdmUsIGlzQWN0aXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaXRlbSA9IChpdGVtcyB8fCBbXSlbaW5kZXhdO1xuICAgIGlmICghaXRlbSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8Q2VsbE1lYXN1cmVyIGNhY2hlPXt0aGlzLmNhY2hlfSBpbmRleD17aW5kZXh9IGtleT17a2V5fSBwYXJlbnQ9e3BhcmVudH0+XG4gICAgICAgIDxJdGVtXG4gICAgICAgICAgaXNBY3RpdmU9e2lzQWN0aXZlICYmIGlzQWN0aXZlKGl0ZW0pfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgb25SZW1vdmU9e29uUmVtb3ZlfVxuICAgICAgICAgIHdpZHRoPXt0aGlzLmNvbHVtbldpZHRofVxuICAgICAgICAvPlxuICAgICAgPC9DZWxsTWVhc3VyZXI+XG4gICAgKTtcbiAgfTtcblxuICBpbml0Q2VsbFBvc2l0aW9uZXIgPSAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNlbGxQb3NpdGlvbmVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jZWxsUG9zaXRpb25lciA9IGNyZWF0ZUNlbGxQb3NpdGlvbmVyKHtcbiAgICAgICAgY2VsbE1lYXN1cmVyQ2FjaGU6IHRoaXMuY2FjaGUsXG4gICAgICAgIGNvbHVtbkNvdW50OiB0aGlzLmNvbHVtbkNvdW50LFxuICAgICAgICBjb2x1bW5XaWR0aDogdGhpcy5jb2x1bW5XaWR0aCxcbiAgICAgICAgc3BhY2VyOiBndXR0ZXJTaXplLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uUmVzaXplID0gKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gICAgY29uc3QgeyB1c2VCb2R5U2Nyb2xsIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICBpZiAoIXVzZUJvZHlTY3JvbGwpIHtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICB0aGlzLmNvbHVtbkhlaWdodHMgPSB7fTtcbiAgICB0aGlzLmNhbGN1bGF0ZUNvbHVtbkNvdW50KCk7XG4gICAgdGhpcy5yZXNldENlbGxQb3NpdGlvbmVyKCk7XG4gICAgaWYgKHRoaXMubWFzb25yeSkge1xuICAgICAgdGhpcy5tYXNvbnJ5LnJlY29tcHV0ZUNlbGxQb3NpdGlvbnMoKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyTWFzb25yeSA9ICh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICAgIGNvbnN0IHsgaXRlbXMsIHVzZUJvZHlTY3JvbGwgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIGlmICghdXNlQm9keVNjcm9sbCkge1xuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgdGhpcy5jYWxjdWxhdGVDb2x1bW5Db3VudCgpO1xuICAgIHRoaXMuaW5pdENlbGxQb3NpdGlvbmVyKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1hc29ucnlcbiAgICAgICAgc2VsZWN0aW9uPXt0aGlzLnByb3BzLnNlbGVjdGlvbn1cbiAgICAgICAgYXV0b0hlaWdodD17dXNlQm9keVNjcm9sbH1cbiAgICAgICAgaGVpZ2h0PXt0aGlzLmhlaWdodH1cbiAgICAgICAgb3ZlcnNjYW5CeVBpeGVscz17b3ZlcnNjYW5CeVBpeGVsc31cbiAgICAgICAgY2VsbENvdW50PXsoaXRlbXMgfHwgW10pLmxlbmd0aH1cbiAgICAgICAgY2VsbE1lYXN1cmVyQ2FjaGU9e3RoaXMuY2FjaGV9XG4gICAgICAgIGNlbGxQb3NpdGlvbmVyPXt0aGlzLmNlbGxQb3NpdGlvbmVyfVxuICAgICAgICBjZWxsUmVuZGVyZXI9e3RoaXMuY2VsbFJlbmRlcmVyfVxuICAgICAgICByZWY9e3RoaXMuc2V0TWFzb25yeVJlZn1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBzY3JvbGxUb3A9e3RoaXMuc2Nyb2xsVG9wfVxuICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiAwIH19XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmVzZXRDZWxsUG9zaXRpb25lciA9ICgpID0+IHtcbiAgICB0aGlzLmNlbGxQb3NpdGlvbmVyLnJlc2V0KHtcbiAgICAgIGNvbHVtbkNvdW50OiB0aGlzLmNvbHVtbkNvdW50LFxuICAgICAgY29sdW1uV2lkdGg6IHRoaXMuY29sdW1uV2lkdGgsXG4gICAgICBzcGFjZXI6IGd1dHRlclNpemUsXG4gICAgfSk7XG4gIH07XG5cbiAgc2V0TWFzb25yeVJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5tYXNvbnJ5ID0gcmVmO1xuICB9O1xuXG4gIHJlbmRlckF1dG9TaXplciA9ICh7IGhlaWdodCwgc2Nyb2xsVG9wIH0pID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGlvbiwgdXNlQm9keVNjcm9sbCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICByZXR1cm4gKFxuICAgICAgPEF1dG9TaXplclxuICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cbiAgICAgICAgZGlzYWJsZUhlaWdodD17dXNlQm9keVNjcm9sbH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIG92ZXJzY2FuQnlQaXhlbHM9e292ZXJzY2FuQnlQaXhlbHN9XG4gICAgICAgIG9uUmVzaXplPXt0aGlzLm9uUmVzaXplfVxuICAgICAgICBzY3JvbGxUb3A9e3Njcm9sbFRvcH1cbiAgICAgID5cbiAgICAgICAge3RoaXMucmVuZGVyTWFzb25yeX1cbiAgICAgIDwvQXV0b1NpemVyPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlQm9keVNjcm9sbCwgc2VsZWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghdXNlQm9keVNjcm9sbCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQXV0b1NpemVyKHsgaGVpZ2h0OiB0aGlzLmhlaWdodCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW5SaWdodDogNzIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxXaW5kb3dTY3JvbGxlclxuICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxuICAgICAgICAgIG92ZXJzY2FuQnlQaXhlbHM9e292ZXJzY2FuQnlQaXhlbHN9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJBdXRvU2l6ZXJ9XG4gICAgICAgIDwvV2luZG93U2Nyb2xsZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=
