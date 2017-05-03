import React, { Component } from 'react';
import { withRouter, styled, Prompt } from 'olymp';
import { Button, Form, Popover } from 'antd';
import { Sidebar, onError, onSuccess, List } from 'olymp/ui';
import { upperFirst } from 'lodash';
import { IFrame, Error404, queryPage, Page } from '../../pages';
import { SplitView } from '../../style';
import { lowerFirst } from 'lodash';

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
    state = { search: '' };

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
      const { id, item, page, form, router, pathname, save, query, binding, navigation, flatNavigation, render, deviceWidth } = this.props;
      const value = id;
      const { search } = this.state;
      const items = search ? this.props.items.filter(({ name }) => name && name.toLowerCase().indexOf(search.toLowerCase()) !== -1) : this.props.items;
      const leftButtons = !value ? (
        <Popover content={`${collection.name} schließen`}>
          <Button onClick={() => router.push({pathname, query: { ...query, [`@${type}`]: undefined }})} shape="circle" icon="close" />
        </Popover>
      ) : (
        <Popover content="Zurück zur Übersicht">
          <Button onClick={() => router.push({pathname, query: { ...query, [`@${type}`]: null }})} shape="circle" icon="arrow-left" />
        </Popover>
      );
      const rightButtons = value ? (
        <Popover content={`${collection.name} speichern`}>
          <Sidebar.Button disabled={!form.isFieldsTouched()} onClick={this.ok} shape="circle" icon="save" />
        </Popover>
      ) : (
        <Popover content={`${collection.name} hinzufügen`}>
          <Sidebar.Button onClick={() => router.push({ pathname, query: { ...query, [`@${type}`]: 'new' } })} shape="circle" icon="plus" />
        </Popover>
      );
      const title = Type;
      const description = !value ? `${Type}-Management` : value === 'new' ? `${Type} hinzufügen` : `${Type} bearbeiten`;

      console.log(this.props);

      return (
        <SplitView deviceWidth={deviceWidth}>
          <Prompt when={form.isFieldsTouched()} message={location => `Änderungen verwerfen?`} />
          <Sidebar
            leftButtons={leftButtons}
            rightButtons={rightButtons}
            isOpen
            onClose={() => router.push(pathname)}
            padding={0}
            title={title}
            subtitle={description}
            header={!value && <List.Filter placeholder="Filter ..." onChange={search => this.setState({ search })} value={search} />}
          >
            {!value && items.map(item => <List.Item active={id === item.id} to={{ pathname, query: { [`@${lowerFirst(collection.name)}`]: item.id } }} key={item.id} label={item.name} description={item.isAdmin ? 'Administrator' : 'Benutzer'} />)}
            {value && <collection.Detail key={id} form={form} item={item} viewType="sidebar" />}
          </Sidebar>
          {render && render(<Page item={page} binding={{ ...item, ...form.getFieldsValue() }} />)}
          {!render && <Page item={page} binding={{ ...item, ...form.getFieldsValue() }} />}
        </SplitView>
      );
    }
  } return CollectionSidebar;
}
