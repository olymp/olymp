import React, { Component } from 'react';
import { Form } from 'antd';
import { withRouter, withSearch, Prompt } from 'olymp';
import { SplitView } from 'olymp-ui';
import { withItems, withCollection } from '../decorators';
import Detail from './detail';
import Sidebar from './sidebar';

@withSearch('search')
@withCollection
@withItems
@withRouter
@Form.create()
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
      form
    } = this.props;
    const { query, pathname } = location;
    const id = location.query && location.query[`@${typeName.toLowerCase()}`];

    return (
      <SplitView>
        <Prompt
          when={form.isFieldsTouched()}
          message={() => 'Änderungen verwerfen?'}
        />
        <Sidebar
          id={id}
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
            form={form}
            typeName={typeName}
          />}
      </SplitView>
    );
  }
}
