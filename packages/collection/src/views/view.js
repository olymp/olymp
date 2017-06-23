import React, { Component } from 'react';
import { withItems, withCollection } from '../decorators';
import { withRouter, withSearch } from 'olymp';
import Detail from './detail';
import Sidebar from './sidebar';
import { SplitView } from 'olymp-ui';

@withSearch('search')
@withCollection
@withItems
@withRouter
export default class CollectionView extends Component {
  render() {
    const {
      collection,
      fieldNames,
      onClose,
      saving,
      children,
      location,
      items,
      refetch,
      collectionLoading,
      typeName,
      data,
      router,
      performSearch,
      searchText,
    } = this.props;
    const { query, pathname } = location;
    const id = location.query && location.query[`@${typeName.toLowerCase()}`];

    return (
      <SplitView>
        <Sidebar
          collection={collection}
          typeName={typeName}
          items={items}
          onClose={onClose}
          filter={[]}
          onFilter={(filter, filteredItems) =>
            this.setState({ filter, filteredItems })}
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
        {id !== undefined &&
          <Detail
            id={id === 'new' ? null : id}
            fieldNames={fieldNames}
            collection={collection}
            typeName={typeName}
          />}
      </SplitView>
    );
  }
}
