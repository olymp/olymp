import React, { Component } from 'react';
import { withRouter, withAuth, Link } from 'olymp';
import { Pagination } from 'antd';
import capitalize from 'lodash/upperFirst';

import Item from './item';
import ItemPanorama from './panorama';
import ItemCompact from './compact';
import ItemFile from './file';

@withAuth
@withRouter
export default class Items extends Component {
  getItem = (item) => {
    const { identifier = 'item', location, masonry } = this.props;
    const { bild, shortText, text } = item;

    if (bild && !shortText && !text) {
      return (
        <ItemFile
          {...item}
          key={item.id}
        />
      );
    }

    if (masonry) {
      return (
        <ItemCompact
          {...item}
          location={location}
          identifier={identifier}
          key={item.id}
        />
      );
    }

    return (
      <Item
        {...item}
        location={location}
        identifier={identifier}
        key={item.id}
      />
    );
  }

  render() {
    const { items, masonry, router, location, identifier = 'item', selectedId, auth, pageSize = 10, className, style } = this.props;
    const { pathname, query } = location;
    const page = query ? parseInt(query.page || 1, 10) : 1;
    const steps = query ? parseInt(query.steps || 10, 10) : pageSize;
    const queryId = location && location.query ? location.query[capitalize(identifier)] : undefined;
    const selectedItem = selectedId || queryId ?
      items.find(x => x.id === (selectedId || queryId)) :
        undefined;
    if (selectedItem) {
      return selectedItem ? (
        <div className="items">
          <ItemPanorama
            {...selectedItem}
            location={location}
            identifier={identifier}
          />
        </div>
      ) : <div />;
    }

    let leading;
    const itemArr = [];
    items.slice((page - 1) * steps, page * steps).forEach((item, index) => {
      if (item.leading && !index && (!item.bild || (item.bild.width > item.bild.height))) {
        leading = item;
      } else {
        itemArr.push(item);
      }
    });

    return (
      <div className={className} style={style}>
        <div className="items">
          {!!leading && (
            <ItemPanorama
              {...leading}
              location={location}
              identifier={identifier}
              className={!!masonry && 'masonry'}
            />
          )}

          <div className="hidden-sm-down" style={{ marginTop: leading ? '1rem' : 0 }}>
            {!!masonry ? (
              <div className="pt-1">
                <div style={{ width: '50%', float: 'left', paddingRight: '.5rem' }}>
                  {itemArr.map((item, index) => !(index % 2) && this.getItem(item))}
                </div>
                <div style={{ width: '50%', float: 'left', paddingLeft: '.5rem' }}>
                  {itemArr.map((item, index) => !!(index % 2) && this.getItem(item))}
                </div>
                <div style={{ clear: 'both' }} />
              </div>
            ) : itemArr.map(item => this.getItem(item))}
          </div>
          <div className="hidden-md-up">
            {itemArr.map(item => this.getItem(item))}
          </div>

        </div>

        {steps < items.length ? (
          <Pagination
            current={page}
            total={items.length}
            pageSize={steps}
            onChange={current =>
              router.push({ pathname, query: { ...query, page: current } }
            )}
            showSizeChanger
            onShowSizeChange={(current, pageSize) =>
              router.push({ pathname, query: { ...query, page: current, steps: pageSize } }
            )}
            style={{ clear: 'both' }}
          />
        ) : null}
      </div>
    );
  }
}
