import React, { Component } from 'react';
import { Form } from 'antd';
import { withSearch } from 'olymp-utils';
import { withRouter, Prompt } from 'olymp-router';
import { SplitView } from 'olymp-ui';
import { withItems, withCollection } from '../decorators';
import Detail from './detail';
import Sidebar from './sidebar';

@withRouter
@withSearch('search')
@withCollection
@withItems
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
      form,
      id,
    } = this.props;
    const { query, pathname } = location;

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
