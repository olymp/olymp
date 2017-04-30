import React, { Component } from 'react';
import { withRouter, styled, Prompt } from 'olymp';
import { Button, Form } from 'antd';
import { Sidebar, onError, onSuccess } from 'olymp/ui';
import { upperFirst } from 'lodash';
import { IFrame, Error404, queryPage, Page } from '../../pages';
import { SplitView } from '../../style';

const mod = Wrapped => ({ data, item, ...rest }) => (
  <Wrapped pageData={data} page={item} {...rest} />
);

export default (type, collection) => {
  const Type = upperFirst(type);
  @withRouter
  @queryPage
  @mod
  @collection.list
  @collection.query
  @Form.create()
  @collection.mutation
  class CollectionSidebar extends Component {
    ok = () => {
      const { id, form, item, router, mutate } = this.props;
      form.validateFields((err, input) => {
        if (err) return onError(err);
        mutate({
          variables: {
            id,
            input,
          },
          updateQueries: !id ? {
            [`${type}List`]: (prev, { mutationResult }) => ({
              ...prev,
              items: [...prev.items, mutationResult.data.item],
            }),
          } : undefined,
        }).then(({ data: { item } }) => {
          onSuccess('Gespeichert', 'Der Artikel wurde gespeichert');
          form.resetFields();
        }).catch(onError);
      });
    }
    render() {
      const { id, item, items, page, form, router, pathname, save, query, binding, navigation, flatNavigation, render, deviceWidth } = this.props;
      const value = id;
      const leftButtons = (
        <div>
          {!value && <Button.Group>
            <Button onClick={() => router.push({pathname, query: { ...query, [`@${type}`]: undefined }})} shape="circle" icon="close" />
          </Button.Group>}
          {value && <Button.Group>
            <Button onClick={() => router.push({pathname, query: { ...query, [`@${type}`]: null }})} shape="circle" icon="arrow-left" />
          </Button.Group>}
        </div>
      );
      const rightButtons = (
        <div>
          {value && (
            <Button.Group>
              <Button disabled={!form.isFieldsTouched()} onClick={this.ok} shape="circle" icon="save" />
            </Button.Group>
          )}
          {!value && <Button.Group>
            <Button onClick={() => router.push({ pathname, query: { ...query, [`@${type}`]: 'new' } })} shape="circle" icon="plus" />
          </Button.Group>}
        </div>
      );
      const title = Type;
      const description = !value ? `${Type}-Management` : value === 'new' ? `${Type} hinzufügen` : `${Type} bearbeiten`;

      return (
        <SplitView deviceWidth={deviceWidth}>
          <Prompt when={form.isFieldsTouched()} message={location => `Änderungen verwerfen?`} />
          <Sidebar leftButtons={leftButtons} rightButtons={rightButtons} isOpen onClose={() => router.push(pathname)} padding={0} title={title} subtitle={description}>
            {!value && <collection.List items={items} />}
            {value && <collection.Detail key={id} form={form} item={item} viewType="sidebar" />}
          </Sidebar>
          {render && render(<Page item={page} binding={{ ...item, ...form.getFieldsValue() }} />)}
          {!render && <Page item={page} binding={{ ...item, ...form.getFieldsValue() }} />}
        </SplitView>
      );
    }
  } return CollectionSidebar;
}
