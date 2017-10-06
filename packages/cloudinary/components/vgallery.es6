import React, { PureComponent } from 'react';
import { CellMeasurer, CellMeasurerCache } from 'react-virtualized/dist/commonjs/CellMeasurer';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import Masonry, { createCellPositioner } from 'react-virtualized/dist/commonjs/Masonry';
import Thumb from './thumb';

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

  render() {
    const { items, selectedIds } = this.props;
    return (
      <AutoSizer
        onResize={this.onResize}
        scrollTop={this.scrollTop}
        items={items}
        selectedIds={selectedIds}
      >
        {this.renderMasonry}
      </AutoSizer>
    );
  }

  calculateColumnCount = () => {
    this.columnCount = Math.floor(this.width / (columnWidth + gutterSize));
    this.columnWidth = Math.floor(this.width / this.columnCount);
  };

  cellRenderer = ({ index, key, parent, style }) => {
    const { items, onClick, selectedIds, onRemove } = this.props;

    const item = items[index];

    return (
      <CellMeasurer cache={this.cache} index={index} key={key} parent={parent}>
        <div
          style={{
            ...style,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#f7f7f7',
            wordBreak: 'break-all',
            width: this.columnWidth,
          }}
        >
          {/* <div
            style={{
              backgroundColor: item.color,
              borderRadius: '0.5rem',
              height: item.height,
              marginBottom: '0.5rem',
              width: '100%',
            }}
          /> */}
          <Thumb
            item={item}
            width={this.columnWidth}
            onClick={e => onClick(item.id, e)}
            onRemove={() => onRemove(item.id)}
            isActive={selectedIds.indexOf(item.id) !== -1}
          />
          <small style={{ textAlign: 'center', maxWidth: this.columnWidth, marginTop: '-0.5rem' }}>
            <b>{item.caption}</b>
          </small>
        </div>
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
    this.masonry.recomputeCellPositions();
  };

  renderMasonry = ({ width, height }) => {
    const { items, selectedIds } = this.props;
    this.width = width;

    this.calculateColumnCount();
    this.initCellPositioner();

    return (
      <Masonry
        selectedIds={selectedIds}
        items={items}
        autoHeight={false}
        cellCount={items.length}
        cellMeasurerCache={this.cache}
        cellPositioner={this.cellPositioner}
        cellRenderer={this.cellRenderer}
        height={height}
        ref={this.setMasonryRef}
        scrollTop={this.scrollTop}
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

  setMasonryRef = (ref) => {
    this.masonry = ref;
  };
}
