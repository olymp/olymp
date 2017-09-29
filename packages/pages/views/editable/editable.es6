import React, { Component } from 'react';
import { Prompt, withQueryActions, Link } from 'olymp-router';
import { connect } from 'react-redux';
import { Sidebar, SplitView } from 'olymp-ui';
import Actions from 'olymp-ui/actions';
import { withPropsOnChange, withProps } from 'recompose';
import { Form, Icon, Button } from 'antd';
import { StatelessSlateMate, withJsonState, withDebounceState } from 'olymp-slate';
import { queryPage, mutatePage } from '../../gql';
import PageForm from './sidebar';

const SlateEditor = withDebounceState({ debounce: 800 })(({ label, value, onChange }) => (
  <StatelessSlateMate
    onChange={onChange}
    value={value}
    placeholder={label || 'Hier Text eingeben!'}
    style={{ borderBottom: '1px solid #e9e9e9', flex: 1 }}
  />
));

@queryPage
@Form.create()
@mutatePage
@withQueryActions
@withPropsOnChange(['item', 'flatNavigation'], ({ item, flatNavigation, form, ...rest }) => {
  item = item || flatNavigation.find(page => page.slug === '/');
  form.getFieldDecorator('parent', { initialValue: rest['@parent'] || item.parent });
  form.getFieldDecorator('type', { initialValue: item.type || 'PAGE' });
  form.getFieldDecorator('blocks', { initialValue: item.blocks });
  return {
    id: item.id || null,
    item,
    description: !item.id ? 'Neue Seite erstellen' : 'Seite bearbeiten',
    title: !item.id ? 'Neue Seite' : item.name,
    blocks: item.blocks,
  };
})
@withProps(({ form }) => ({
  onChange: (blocks) => {
    form.setFieldsValue({ blocks });
  },
  value: form.getFieldValue('blocks'),
}))
@connect(({ location }) => ({
  tab: location.query['@page'] || '',
}))
@withJsonState({ debounce: false })
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
      value,
      onChange,
      base64,
    } = this.props;

    const P = (
      <SlateEditor
        value={value}
        onChange={onChange}
        base64={base64}
        style={{ borderBottom: '1px solid #e9e9e9', flex: 1 }}
        readOnly={false}
        binding={binding}
        bindingId={bindingId}
        bindingObj={bindingObj}
      />
    );
    return (
      <SplitView maxWidth={maxWidth} center>
        <Prompt when={form.isFieldsTouched()} message={() => 'Änderungen verwerfen?'} />

        <Sidebar isOpen padding={0} title={title} subtitle={description} 
        rightButtons={
          <Sidebar.Button
            onClick={save}
            shape="circle"
            icon="save"
          />
        }>
          <PageForm
            value={value}
            onChange={onChange}
            base64={base64}
            form={form}
            item={item}
            navigation={navigation}
            items={flatNavigation}
            tab={tab}
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
