import React, { Component } from 'react';
import { Container, SplitView } from 'olymp-ui';
import { Form } from 'antd';
import { upperFirst } from 'lodash';
import ListSidebar from './list';
import SelectionSidebar from './selection';
import { Page, queryPage } from 'olymp-pages';

const mod = Wrapped => ({ data, item, ...rest }) =>
  <Wrapped pageData={data} page={item} {...rest} />;

export default (type, collection) => {
  @queryPage
  @mod
  @Form.create()
  @collection.list
  @collection.query
  @collection.mutation
  class CollectionSidebar extends Component {
    state = { search: '' };

    render() {
      const {
        id,
        page,
        deviceWidth,
        mutate,
        handleListClick,
        onClose,
        items,
        render,
        formform,
        form,
      } = this.props;
      const { search } = this.state;
      const item = items.find(item => item.id === id) || {};

      const P = form.getFieldDecorator('blocks', {
        initialValue: item.blocks,
      })(<Page readOnly={false} binding={item} />);

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
            {P}
          </Container>

          <SelectionSidebar
            item={item}
            type={upperFirst(type)}
            mutate={mutate}
            onCancel={() => handleListClick({ id: null })}
          >
            <collection.Detail viewType="sidebar" form={form} />
          </SelectionSidebar>
        </SplitView>
      );
    }
  }
  return CollectionSidebar;
};
