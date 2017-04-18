import React, { Component } from 'react';
import { Link, withRouter, withAuth, styled, Prompt } from 'olymp';
import { Menu, Button, Form, Icon } from 'antd';
import { Panel, Sidebar, onError, onSuccess } from 'olymp/ui';
import { Gateway } from 'react-gateway';
import { queryPage, mutatePage } from '../gql';
import { Pages } from '../pages';
import { PageForm } from '../form';
import { Page } from '../page';
import { upperFirst } from 'lodash';
import { Splitview } from '../styled';

export const mod = Wrapped => ({ data, item, ...rest }) => {
  return (
    <Wrapped pageData={data} page={item} {...rest} />
  );
};

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
            <Button onClick={() => router.push({pathname, query: { ...query, [`@${type}`]: undefined }})}>
              <Icon type="close" />
            </Button>
          </Button.Group>}
          {value && <Button.Group>
            <Button onClick={() => router.push({pathname, query: { ...query, [`@${type}`]: null }})}>
              <Icon type="arrow-left" />
            </Button>
          </Button.Group>}
        </div>
      );
      const rightButtons = (
        <div>
          {value && (
            <Button.Group>
              <Button disabled={!form.isFieldsTouched()} onClick={this.ok}>
                <Icon type="save" />
              </Button>
            </Button.Group>
          )}
          {!value && <Button.Group>
            <Button onClick={() => router.push({ pathname, query: { ...query, [`@${type}`]: 'new' } })}>
              <Icon type="plus" />
            </Button>
          </Button.Group>}
        </div>
      );
      const title = Type;
      const description = !value ? `${Type}-Management` : value === 'new' ? `${Type} hinzufügen` : `${Type} bearbeiten`;

      return (
        <Splitview deviceWidth={deviceWidth}>
          <Prompt when={form.isFieldsTouched()} message={location => `Änderungen verwerfen?`} />
          <Sidebar leftButtons={leftButtons} rightButtons={rightButtons} isOpen onClose={() => router.push(pathname)} minWidth={400} padding={0} title={title} subtitle={description}>
            {!value && <collection.List items={items} />}
            {value && <collection.Detail key={id} form={form} item={item} viewType="sidebar" />}
          </Sidebar>
          {render && render(<Page item={page} binding={{ ...item, ...form.getFieldsValue() }} />)}
          {!render && <Page item={page} binding={{ ...item, ...form.getFieldsValue() }} />}
        </Splitview>
      );
    }
  } return CollectionSidebar;
}
