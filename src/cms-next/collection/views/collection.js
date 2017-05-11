import React, { Component } from 'react';
import { Container, Placeholder, SplitView } from 'olymp/ui';
import { upperFirst } from 'lodash';
import { queryPage } from '../../pages';
import ListSidebar from './list';
import SelectionSidebar from './selection';

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
      const { id, page, deviceWidth, mutate, handleListClick, onClose, items } = this.props;
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
            <Placeholder>Hier fände ich es cool, wennn man über ein Select einen Block auswählen kann und darin dann quasi ne Vorschau von dem Artikel sieht.</Placeholder>
          </Container>

          <SelectionSidebar item={item} type={upperFirst(type)} mutate={mutate} onCancel={() => handleListClick({ id: null })}>
            <collection.Detail viewType="sidebar" />
          </SelectionSidebar>
        </SplitView>
      );
    }
  } return CollectionSidebar;
};

