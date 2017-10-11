import React, { Component } from 'react';
import { Prompt, withQueryActions } from 'olymp-router';
import { connect } from 'react-redux';
import { Sidebar, SplitView } from 'olymp-ui';
import { withPropsOnChange, withProps, withState } from 'recompose';
import { ContentLoader } from 'olymp-fela';
import { SlateWriter } from 'olymp-slate';
import { Form } from 'antd';
import { get, debounce } from 'lodash';
import { queryPage } from '../../gql/query';
import { mutatePage } from '../../gql/mutation';
import PageForm from './sidebar';

const Page = ({ children, isLoading, ...props }) => (
  <ContentLoader isLoading={isLoading}>
    <SlateWriter {...props} key={props.id + (props.bindingId || '')}>
      {children}
    </SlateWriter>
  </ContentLoader>
);

const setSignal = (props, v) => !v.blocks && props.setSignal(props.signal + 1);
@queryPage
@withState('signal', 'setSignal', 0)
@Form.create({
  onValuesChange: debounce(setSignal, 800, { trailing: true, leading: false }),
})
@mutatePage
@withQueryActions
@withPropsOnChange(['item', 'flatNavigation'], ({ flatNavigation, form, ...rest }) => {
  const item = rest.item || flatNavigation.find(page => page.slug === '/');

  form.getFieldDecorator('parentId', {
    initialValue: get(rest, 'query.["@parent"]') || item.parentId,
  });
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
export default class PageSidebar extends Component {
  render() {
    const {
      form,
      save,
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
      signal,
    } = this.props;

    const P = (
      <Page
        value={value}
        onChange={onChange}
        style={{ borderBottom: '1px solid #e9e9e9', flex: 1 }}
        readOnly={false}
        binding={form.isFieldsTouched() ? form.getFieldsValue() : item}
        bindingId={bindingId}
        bindingObj={bindingObj}
        signal={signal}
      />
    );

    return (
      <SplitView maxWidth={maxWidth} center>
        <Prompt when={form.isFieldsTouched()} message={() => 'Änderungen verwerfen?'} />

        <Sidebar
          isOpen
          padding={0}
          title={title}
          subtitle={description}
          rightButtons={<Sidebar.Button onClick={save} shape="circle" icon="save" />}
        >
          <PageForm
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
