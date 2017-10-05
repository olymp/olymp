/*

export const MediaList = ({ items, itemHeight, selection, onClick, onRemove, ...rest }) => (
  <Thumbs {...rest}>
    {(items || []).map((item, index) => (
      <Thumb
        item={item}
        onClick={e => onClick(item.id, index, e)}
        onRemove={() => onRemove(item.id)}
        isActive={selection.findIndex(({ id }) => id === item.id) >= 0}
        height={itemHeight}
        key={item.id}
      />
    ))}
  </Thumbs>
);
MediaList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  itemHeight: PropTypes.number,
  selection: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      crop: PropTypes.arrayOf(PropTypes.number),
    }),
  ),
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
};
MediaList.defaultProps = {
  items: [],
  itemHeight: 80,
  selection: [],
  onClick: () => {},
  onRemove: () => {},
};
export default MediaList;
*/ /** @flow */
import React, { PureComponent } from 'react';
import { CellMeasurer, CellMeasurerCache } from 'react-virtualized/dist/es/CellMeasurer';
import AutoSizer from 'react-virtualized/dist/es/AutoSizer';
import createCellPositioner from 'react-virtualized/dist/es/Masonry/createCellPositioner';
import Masonry from 'react-virtualized/dist/es/Masonry/Masonry';
import Thumb from './thumb';

const columnWidth = 200;
const gutterSize = 10;
export default class GridExample extends PureComponent {
  constructor(props) {
    super(props);

    this.columnCount = 0;
    this.columnHeights = {};
    this.cache = new CellMeasurerCache({
      defaultHeight: 250,
      defaultWidth: 200,
      fixedWidth: true,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.masonry) {
      console.log(this.masonry);
      this.masonry.forceUpdate();
    }
  }

  render() {
    return (
      <AutoSizer onResize={this.onResize} scrollTop={this.scrollTop}>
        {this.renderMasonry}
      </AutoSizer>
    );
  }

  calculateColumnCount = () => {
    this.columnCount = Math.floor(this.width / (columnWidth + gutterSize));
  };

  cellRenderer = ({ index, key, parent, style }) => {
    const { items, onClick, selection, onRemove } = this.props;

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
            width: columnWidth,
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
            width={columnWidth}
            onClick={e => onClick(item.id, index, e)}
            onRemove={() => onRemove(item.id)}
            isActive={selection.findIndex(({ id }) => id === item.id) >= 0}
            key={item.id}
          />
        </div>
      </CellMeasurer>
    );
  };

  initCellPositioner = () => {
    if (typeof this.cellPositioner === 'undefined') {
      this.cellPositioner = createCellPositioner({
        cellMeasurerCache: this.cache,
        columnCount: this.columnCount,
        columnWidth,
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
    const { items, selection } = this.props;
    this.width = width;

    this.calculateColumnCount();
    this.initCellPositioner();

    return (
      <Masonry
        selection={selection}
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
      columnWidth,
      spacer: gutterSize,
    });
  };

  setMasonryRef = (ref) => {
    this.masonry = ref;
  };
}
