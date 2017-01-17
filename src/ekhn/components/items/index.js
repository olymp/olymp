import React, { Component } from 'react';
import { withRouter, withAuth, Link } from 'olymp';
import { Pagination } from 'antd';
import capitalize from 'lodash/upperFirst';
import MasonryLayout from 'react-masonry-component';
import './items.less';

import ItemSmall from './small';
import ItemLarge from './large';

@withAuth
@withRouter
export default class Items extends Component {
  masonryWrapper = (children, isMasonry) => isMasonry ? (
    <MasonryLayout
      className="items masonry"
      options={{ columnWidth: '.item:not(.leading)', itemSelector: '.item', gutter: 16 }}
    >
      {children}
    </MasonryLayout>
  ) : (
    <div className="items">{children}</div>
  );

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
          <ItemLarge
            {...selectedItem}
            location={location}
            identifier={identifier}
            className="item leading"
          />
        </div>
      ) : <div />;
    }

    const content = this.masonryWrapper((
      items.slice((page - 1) * steps, page * steps).map((item, index) => item.leading && !index ?
        <ItemLarge
          {...item}
          location={location}
          identifier={identifier}
          className="item leading"
          key={index}
        /> :
          <ItemSmall
            {...item}
            location={location}
            identifier={identifier}
            className={`item ${item.leading ? 'colored' : ''}`}
            key={index}
          />
      )
    ), masonry);

    return (
      <div className={className} style={style}>
        {content}

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
