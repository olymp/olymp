import React, { PureComponent } from 'react';
import {
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized/dist/commonjs/CellMeasurer';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import WindowScroller from 'react-virtualized/dist/commonjs/WindowScroller';
import Masonry, {
  createCellPositioner,
} from 'react-virtualized/dist/commonjs/Masonry';
import Thumb from '../components/thumb';

const overscanByPixels = 1500;
const Item = ({ style, item, isActive, onClick, onRemove, width }) => (
  <div
    style={{
      ...style,
      display: 'flex',
      flexDirection: 'column',
      wordBreak: 'break-all',
      width,
    }}
  >
    <Thumb
      item={item}
      width={width}
      onClick={e => onClick(item, e.altKey || e.shiftKey)}
      onRemove={() => onRemove(item)}
      isActive={isActive}
    />
    <small
      style={{ textAlign: 'center', maxWidth: width, marginTop: '-0.5rem' }}
    >
      <b>{item.caption}</b>
    </small>
  </div>
);

const columnWidth = 200;
const columnHeight = 200;
const gutterSize = 0;
export default class GridExample extends PureComponent {
  constructor(props) {
    super(props);

    this.columnCount = 0;
    this.columnHeights = {};
    this.cache = new CellMeasurerCache({
      defaultHeight: columnHeight,
      defaultWidth: columnWidth,
      fixedWidth: true,
    });
  }

  calculateColumnCount = () => {
    this.columnCount = Math.floor(this.width / (columnWidth + gutterSize));
    this.columnWidth = Math.floor(this.width / this.columnCount);
  };

  cellRenderer = ({ index, key, parent, style }) => {
    const { items, onClick, onRemove, isActive } = this.props;

    const item = (items || [])[index];
    if (!item) {
      return null;
    }
    return (
      <CellMeasurer cache={this.cache} index={index} key={key} parent={parent}>
        <Item
          isActive={isActive(item)}
          style={style}
          item={item}
          onClick={onClick}
          onRemove={onRemove}
          width={this.columnWidth}
        />
      </CellMeasurer>
    );
  };

  initCellPositioner = () => {
    if (typeof this.cellPositioner === 'undefined') {
      this.cellPositioner = createCellPositioner({
        cellMeasurerCache: this.cache,
        columnCount: this.columnCount,
        columnWidth: this.columnWidth,
        spacer: gutterSize,
      });
    }
  };

  onResize = ({ width }) => {
    this.width = width;
    this.columnHeights = {};
    this.calculateColumnCount();
    this.resetCellPositioner();
    if (this.masonry) {
      this.masonry.recomputeCellPositions();
    }
  };

  renderMasonry = ({ width }) => {
    const { items } = this.props;
    this.width = width;

    this.calculateColumnCount();
    this.initCellPositioner();

    return (
      <Masonry
        selection={this.props.selection}
        autoHeight
        height={this.height}
        overscanByPixels={overscanByPixels}
        cellCount={(items || []).length}
        cellMeasurerCache={this.cache}
        cellPositioner={this.cellPositioner}
        cellRenderer={this.cellRenderer}
        ref={this.setMasonryRef}
        width={width}
        scrollTop={this.scrollTop}
        style={{ outline: 0 }}
      />
    );
  };

  resetCellPositioner = () => {
    this.cellPositioner.reset({
      columnCount: this.columnCount,
      columnWidth: this.columnWidth,
      spacer: gutterSize,
    });
  };

  setMasonryRef = ref => {
    this.masonry = ref;
  };

  render() {
    return (
      <WindowScroller
        selection={this.props.selection}
        overscanByPixels={overscanByPixels}
      >
        {this.renderAutoSizer}
      </WindowScroller>
    );
  }

  renderAutoSizer = ({ height, scrollTop }) => {
    this.height = height;
    this.scrollTop = scrollTop;
    return (
      <AutoSizer
        selection={this.props.selection}
        disableHeight
        height={height}
        overscanByPixels={overscanByPixels}
        onResize={this.onResize}
        scrollTop={scrollTop}
      >
        {this.renderMasonry}
      </AutoSizer>
    );
  };
}
