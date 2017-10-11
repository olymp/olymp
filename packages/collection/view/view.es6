import React, { Component } from 'react';
import { withSearch } from 'olymp-utils';
import { withRouter } from 'olymp-router';
import { SplitView } from 'olymp-ui';
import withItems from '../decorators/with-items';
import withCollection from '../decorators/with-collection';
import Detail from './detail';
import Sidebar from './sidebar';

@withRouter
@withSearch('search')
@withCollection
@withItems
export default class CollectionView extends Component {
  render() {
    const {
      collection,
      fieldNames,
      onClose,
      location,
      items,
      typeName,
      router,
      performSearch,
      searchText,
      id,
      refetchQuery,
    } = this.props;
    const { query, pathname } = location;

    return (
      <SplitView>
        <Sidebar
          id={id}
          collection={collection}
          typeName={typeName}
          items={items}
          onClose={onClose}
          filter={[]}
          onFilter={(filter, filteredItems) => this.setState({ filter, filteredItems })}
          searchText={searchText}
          onSearch={performSearch}
          onClick={item =>
            router.push({
              pathname,
              query: {
                ...query,
                [`@${typeName.toLowerCase()}`]: item.id,
              },
            })}
        />
        {id !== undefined && (
          <Detail
            id={id === 'new' ? null : id}
            key={id || 'new'}
            refetchQuery={refetchQuery}
            fieldNames={fieldNames}
            collection={collection}
            typeName={typeName}
          />
        )}
      </SplitView>
    );
  }
}
