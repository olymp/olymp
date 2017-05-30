import React, { Component } from 'react';
import { Container, Placeholder, SplitView } from 'olymp/ui';
import { upperFirst } from 'lodash';
import { queryPage } from '../../pages';
import ListSidebar from './list';
import SelectionSidebar from './selection';
import Page from '../../pages/page';

const mod = Wrapped => ({ data, item, ...rest }) => (
  <Wrapped pageData={data} page={item} {...rest} />
);

export default (type, collection) => {
  @queryPage
  @mod
  @collection.list
  @collection.query
  @collection.mutation
  class CollectionSidebar extends Component {
    state = { search: '' };

    render() {
      const { id, page, deviceWidth, mutate, handleListClick, onClose, items, render } = this.props;
      const { search } = this.state;
      const item = items.find(item => item.id === id) || {};

      return (
        <SplitView deviceWidth={deviceWidth}>
          <ListSidebar
            id={id}
            onClick={handleListClick}
            onClose={onClose}
            search={search}
            onSearch={search => this.setState({ search })}
            type={upperFirst(type)}
            items={items}
          />

          <Container>
            {render && render(<Page item={item} onChange={this.onChange} readOnly={!item.value} binding={item} />)}
            {!render && <Page item={item} onChange={this.onChange} readOnly={!item.value} binding={item} />}
          </Container>

          <SelectionSidebar item={item} type={upperFirst(type)} mutate={mutate} onCancel={() => handleListClick({ id: null })}>
            <collection.Detail viewType="sidebar" />
          </SelectionSidebar>
        </SplitView>
      );
    }
  } return CollectionSidebar;
};

