import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized/dist/commonjs/CellMeasurer';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import Masonry, {
  createCellPositioner,
} from 'react-virtualized/dist/commonjs/Masonry';
import Thumb from '../components/thumb';

const Item = connect(({ cloudinary }, { item }) => ({
  isActive: cloudinary.selectedIds.indexOf(item.id) !== -1,
}))(({ style, item, isActive, onClick, onRemove, width }) => (
  <div
    style={{
      ...style,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f7f7f7',
      wordBreak: 'break-all',
      width,
    }}
  >
    <Thumb
      item={item}
      width={width}
      onClick={e => onClick(item.id, e)}
      onRemove={() => onRemove(item.id)}
      isActive={isActive}
    />
    <small
      style={{ textAlign: 'center', maxWidth: width, marginTop: '-0.5rem' }}
    >
      <b>{item.caption}</b>
    </small>
  </div>
));

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
    const { items, onClick, onRemove } = this.props;

    const item = (items || [])[index];
    return (
      <CellMeasurer cache={this.cache} index={index} key={key} parent={parent}>
        <Item
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

  renderMasonry = ({ width, height }) => {
    const { items } = this.props;
    this.width = width;

    this.calculateColumnCount();
    this.initCellPositioner();

    if (!width || !height) {
      return null;
    }

    return (
      <Masonry
        overscanByPixels={100}
        cellCount={(items || []).length}
        cellMeasurerCache={this.cache}
        cellPositioner={this.cellPositioner}
        cellRenderer={this.cellRenderer}
        height={height}
        ref={this.setMasonryRef}
        width={width}
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
    return <AutoSizer onResize={this.onResize}>{this.renderMasonry}</AutoSizer>;
  }
}
