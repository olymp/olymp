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

    this._columnCount = 0;
    this._columnHeights = {};
    this._cache = new CellMeasurerCache({
      defaultHeight: 250,
      defaultWidth: 200,
      fixedWidth: true,
    });
  }

  render() {
    return (
      <AutoSizer onResize={this._onResize} scrollTop={this._scrollTop}>
        {this._renderMasonry}
      </AutoSizer>
    );
  }

  _calculateColumnCount = () => {
    this._columnCount = Math.floor(this._width / (columnWidth + gutterSize));
  };

  _cellRenderer = ({ index, key, parent, style }) => {
    const { items, onClick, selection, onRemove } = this.props;

    const item = items[index];

    return (
      <CellMeasurer cache={this._cache} index={index} key={key} parent={parent}>
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

  _initCellPositioner = () => {
    if (typeof this._cellPositioner === 'undefined') {
      this._cellPositioner = createCellPositioner({
        cellMeasurerCache: this._cache,
        columnCount: this._columnCount,
        columnWidth,
        spacer: gutterSize,
      });
    }
  };

  _onResize = ({ width }) => {
    this._width = width;

    this._columnHeights = {};
    this._calculateColumnCount();
    this._resetCellPositioner();
    this._masonry.recomputeCellPositions();
  };

  _renderMasonry = ({ width, height }) => {
    const { items } = this.props;
    this._width = width;
    console.log(width, height);

    this._calculateColumnCount();
    this._initCellPositioner();

    return (
      <Masonry
        autoHeight={false}
        cellCount={items.length}
        cellMeasurerCache={this._cache}
        cellPositioner={this._cellPositioner}
        cellRenderer={this._cellRenderer}
        height={height}
        ref={this._setMasonryRef}
        scrollTop={this._scrollTop}
        width={width}
      />
    );
  };

  _resetCellPositioner = () => {
    this._cellPositioner.reset({
      columnCount: this._columnCount,
      columnWidth,
      spacer: gutterSize,
    });
  };

  _setMasonryRef = (ref) => {
    this._masonry = ref;
  };
}
