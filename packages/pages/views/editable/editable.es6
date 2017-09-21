import React, { Component } from 'react';
import { Prompt, withQueryActions, Link } from 'olymp-router';
import { connect } from 'react-redux';
import { Sidebar, SplitView } from 'olymp-ui';
import Actions from 'olymp-ui/actions';
import { withPropsOnChange } from 'recompose';
import { Form, Icon, Button } from 'antd';
import { StatelessSlateMate } from 'olymp-slate';
import Plain from 'slate-plain-serializer';
import { State } from 'slate';
import { queryPage, mutatePage } from '../../gql';
import PageForm from './sidebar';

@queryPage
@Form.create()
@mutatePage
@withQueryActions
@withPropsOnChange(['item', 'flatNavigation'], ({ item, flatNavigation }) => ({
  id: item.id || null,
  item: item || flatNavigation.find(page => page.slug === '/'),
  description: !item.id ? 'Neue Seite erstellen' : 'Seite bearbeiten',
  title: !item.id ? 'Neue Seite' : (item || flatNavigation.find(page => page.slug === '/')).name,
  blocks: item.blocks
    ? State.fromJSON({ document: item.blocks, kind: 'state' })
    : Plain.deserialize(''),
}))
@connect(({ location }) => ({
  tab: location.query['@page'] || '',
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
        <Actions>
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon="save"
            disabled={!form.isFieldsTouched()}
            onClick={save}
          />
          <Button
            shape="circle"
            size="small"
            icon="rollback"
            disabled={!form.getFieldValue('blocks').hasUndos}
            onClick={() =>
              form.setFieldsValue({
                blocks: form
                  .getFieldValue('blocks')
                  .change()
                  .undo().state,
              })}
          />
          <Button
            shape="circle"
            size="small"
            icon="enter"
            disabled={!form.getFieldValue('blocks').hasRedos}
            onClick={() =>
              form.setFieldsValue({
                blocks: form
                  .getFieldValue('blocks')
                  .change()
                  .redo().state,
              })}
          />
          <Link
            className="ant-btn ant-btn-primary ant-btn-circle ant-btn-sm ant-btn-icon-only"
            updateQuery={{ '@page': undefined }}
          >
            <Icon type="close" />
          </Link>
        </Actions>
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
          {render && render(P)}
          {!render && P}
        </div>
      </SplitView>
    );
  }
}
