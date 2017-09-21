import React, { Component } from 'react';
import { Prompt, withQueryActions } from 'olymp-router';
import { connect } from 'react-redux';
import { Sidebar, SplitView } from 'olymp-ui';
import { withPropsOnChange } from 'recompose';
import { Menu, Form, Icon } from 'antd';
import { StatelessSlateMate } from 'olymp-slate';
import Plain from 'slate-plain-serializer';
import { State } from 'slate';
import { queryPage, mutatePage } from '../../gql';
import PageForm from './sidebar';

@queryPage
@Form.create()
@mutatePage
@withQueryActions
@connect(({ location }) => ({
  tab: location.query['@page'] || '',
}))
@withPropsOnChange(['item', 'flatNavigation'], ({ item, flatNavigation }) => ({
  id: item.id || null,
  item: item || flatNavigation.find(page => page.slug === '/'),
  description: !item.id ? 'Neue Seite erstellen' : 'Seite bearbeiten',
  title: !item.id ? 'Neue Seite' : (item || flatNavigation.find(page => page.slug === '/')).name,
  blocks: item.blocks
    ? State.fromJSON({ document: item.blocks, kind: 'state' })
    : Plain.deserialize(''),
}))
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
      title,
      description,
      tab,
      blocks,
    } = this.props;

    form.getFieldDecorator('parent', { initialValue: this.props['@parent'] || item.parent });
    form.getFieldDecorator('type', { initialValue: item.type || 'PAGE' });

    const isPage = (form.getFieldValue('type') || item.type || 'PAGE') === 'PAGE';
    const P = form.getFieldDecorator('blocks', { initialValue: blocks })(
      <StatelessSlateMate
        readOnly={!isPage}
        binding={binding}
        bindingId={bindingId}
        bindingObj={bindingObj}
      />,
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
            blocks={blocks}
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
