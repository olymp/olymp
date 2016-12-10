import React, { Component } from 'react';
import { withItem, withRouter, graphql, gql, unflatten, flatten } from 'olymp';
import { Modal, Form, Input, Spin, TreeSelect } from 'antd';
// import { map, groupBy, extend, pick } from 'lodash';

const FormItem = Form.Item;
const modalSettings = { visible: true, style: { top: 20 }, okText: 'Speichern', cancelText: 'Abbruch' };
const formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };

const getInitialValue = ({ item, form }, name) => {
  if (item[name]) {
    // Wenn Item schon existiert, den vorhandenen Wert nehmen
    return item[name];
  } else if (name === 'slug' && form.getFieldValue('name')) {
    // Bei Slug
    return '/' + encodeURIComponent(form.getFieldValue('name').split(' ').join('-').toLowerCase())
      .split('%C3%A4').join('ä')
      .split('%C3%B6').join('ö')
      .split('%C3%BC').join('ü')
      .split('%C3%A4').join('Ä')
      .split('%C3%B6').join('Ö')
      .split('%C3%BC').join('Ü');
  }

  return undefined;
};

const PageForm = Form.create()(
  (props) => {
    const { item, data, form, onCreate, onCancel, saving } = props;
    const { getFieldDecorator } = form;

    if (!item || !data.items) return <Modal {...modalSettings} title="Bearbeiten" onCancel={onCancel} onOk={onCreate}><Spin /></Modal>;

    let items = (data.items || []).map(({ id, name, parentId }) => ({
      value: id,
      label: name,
      parent: parentId,
      children: [],
    }));
    items = unflatten(items, { id: 'value', parentId: 'parent' });

    return (
      <Modal {...modalSettings} confirmLoading={saving} title="Bearbeiten" onCancel={onCancel} onOk={onCreate}>
        <FormItem key="name" label="Name" {...formItemLayout}>
          {getFieldDecorator('name', { initialValue: item.name })(
            <Input />
          )}
        </FormItem>
        <FormItem key="parentId" label="Übergeordnet" {...formItemLayout}>
          {getFieldDecorator('parentId', { initialValue: item.parentId })(
            <TreeSelect
              style={{ width: '100%' }}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              treeData={items}
            />
          )}
        </FormItem>
        <FormItem key="slug" label="Slug" {...formItemLayout}>
          {getFieldDecorator('slug', { initialValue: getInitialValue(props, 'slug') })(
            <Input />
          )}
        </FormItem>
      </Modal>
    );
  }
);

@withRouter()
@withItem({ name: 'page' })
@graphql(gql`
  query pageList {
    items: pageList {
      id,
      slug,
      name,
      parentId
    }
  }
`)
export default class PageSettings extends Component {
  handleCancel = () => {
    this.props.onClose();
  }

  handleCreate = () => {
    const { location, router, item, onClose, save, data } = this.props;
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      // console.log('Received values of form: ', values);
      save(values, { commit: false }).then(({ page }) => {
        // Pfad ermitteln
        const items = flatten(unflatten([...data.items, page], { setPath: (current, { slug }) => `${current}${slug}` }));
        // onClose(item.slug === location.pathname && item.id ? page.slug : null);
        onClose(items.find(x => x.id === page.id).path);
      });
    });
  }

  render() {
    return (
      <PageForm
        {...this.props}
        ref={form => this.form = form}
        onCancel={this.handleCancel}
        onCreate={this.handleCreate}
      />
    );
  }
}
