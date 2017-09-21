import React, { Component } from 'react';
import { Prompt, withQueryActions, withQueryParams } from 'olymp-router';
import { Sidebar, SplitView } from 'olymp-ui';
import { withPropsOnChange } from 'recompose';
import { Menu, Form, Icon } from 'antd';
import { StatelessSlateMate, withSlateState } from 'olymp-slate';
import { queryPage, mutatePage } from '../../gql';
import PageForm from './sidebar';

@queryPage
@Form.create()
@mutatePage
@withQueryActions
@withQueryParams(['@page', '@parent'])
@withPropsOnChange(['item', 'flatNavigation'], ({ item, flatNavigation }) => ({
  id: item.id || null,
  item: item || flatNavigation.find(page => page.slug === '/'),
}))
@withPropsOnChange(['@page', 'id', 'item'], ({ '@page': page, id, item }) => ({
  tab: page || '',
  title: !id ? 'Neue Seite' : item.name,
  description: !id ? 'Neue Seite erstellen' : 'Seite bearbeiten',
}))
@withSlateState({
  getValue: ({ form, item }) => {
    form.getFieldDecorator('blocks', { initialValue: item.blocks });
    return form.getFieldValue('blocks') || item.blocks;
  },
  changeValue: ({ form }, blocks) => form.setFieldsValue({ blocks }),
})
export default class PageSidebar extends Component {
  render() {
    const {
      form,
      save,
      binding,
      bindingId,
      bindingObj,
      navigation,
      flatNavigation,
      render,
      maxWidth,
      item,
      replaceQuery,
      value: state,
      onChange,
      title,
      description,
      tab,
    } = this.props;

    form.getFieldDecorator('parent', { initialValue: this.props['@parent'] || item.parent });
    form.getFieldDecorator('type', { initialValue: item.type || 'PAGE' });

    const isPage = (form.getFieldValue('type') || item.type || 'PAGE') === 'PAGE';
    const P = (
      <StatelessSlateMate
        readOnly={!isPage}
        binding={binding}
        bindingId={bindingId}
        bindingObj={bindingObj}
        value={state}
        onChange={onChange}
      />
    );
    return (
      <SplitView maxWidth={maxWidth} center>
        <Prompt when={form.isFieldsTouched()} message={() => 'Änderungen verwerfen?'} />
        <Sidebar isOpen padding={0} title={title} subtitle={description}>
          <PageForm
            form={form}
            item={item}
            navigation={navigation}
            items={flatNavigation}
            tab={tab}
            slateValue={state}
            slateOnChange={onChange}
            onTabClick={key => replaceQuery({ '@page': key || null })}
          />
        </Sidebar>
        <div>
          <Menu mode="horizontal">
            {form.isFieldsTouched() && (
              <Menu.Item key="clone">
                <Icon type="save" onClick={save} />
                <span>Speichern</span>
              </Menu.Item>
            )}
          </Menu>

          {render && render(P)}
          {!render && P}
        </div>
      </SplitView>
    );
  }
}
