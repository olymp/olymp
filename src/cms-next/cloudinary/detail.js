import React, { Component } from 'react';
import { Prompt } from 'olymp';
import { TagsEditor } from 'olymp/edits';
import { Sidebar } from 'olymp/ui';
import { Button, Form, Icon, Input, Spin, Checkbox } from 'antd';
import moment from 'moment';
import Crop from './crop';

const FormItemLayout = { labelCol: { span: 8 }, wrapperCol: { span: 16 }, style: { marginBottom: 0 } };
const FormForAllLayout = { wrapperCol: { span: 16, offset: 8 }, style: { marginBottom: 0 } };

@Form.create()
class MediaDetail extends Component {
  state = {
    itemFields: [],
  };

  componentWillUpdate = (nextProps, nextState) => {
    const { item: nextItem, form } = nextProps;
    const { item: prevItem } = this.props;
    const { itemFields, source, tags } = this.state;

    if (prevItem !== nextItem || prevItem.id !== nextItem.id) {
      if (prevItem) {
        // delete old prevItem-fields
        const prevItemFieldsIndex = itemFields.findIndex(fields => fields.id === prevItem.id);
        if (prevItemFieldsIndex >= 0) {
          itemFields.splice(prevItemFieldsIndex, 1);
        }

        // save new prevItem-fields in state
        this.setState({ itemFields: [...itemFields, form.getFieldsValue()] });
      }

      // reset form
      form.resetFields();

      if (nextItem) {
        // load nextItem-fields from state
        const nextItemFields = itemFields.find(fields => fields.id === nextItem.id);
        if (nextItemFields && nextItemFields.id) {
          form.setFieldsValue(nextItemFields);
        }

        // load source/tags for all items
        if (source) {
          form.setFieldsValue({ source });
        }
        if (tags) {
          form.setFieldsValue({ tags });
        }
      }
    }
  }

  render() {
    const { item, form, multi } = this.props;
    const { getFieldDecorator } = form;

    if (!item) {
      return <Spin size="large" />;
    } return (
      <div>
        <Prompt when={form.isFieldsTouched()} message={location => `Änderungen verwerfen?`} />

        <div style={{ padding: '1rem' }}>
          <Crop url={item.url} width={item.width} height={item.height} />

          <Form.Item key="id" label="ID" {...FormItemLayout}>
            {getFieldDecorator('id', {
              initialValue: item.id,
            })(
              <Input disabled placeholder="ID" />
            )}
          </Form.Item>
          <Form.Item key="caption" label="Bezeichnung" {...FormItemLayout}>
            {getFieldDecorator('caption', {
              initialValue: item.caption,
            })(
              <Input placeholder="Bezeichnung" />
            )}
          </Form.Item>
          <Form.Item key="source" label="Quelle" {...FormItemLayout}>
            {getFieldDecorator('source', {
              initialValue: item.source,
            })(
              <Input placeholder="Quelle" disabled={!!source} />
            )}
          </Form.Item>
          {multi ? (
            <Form.Item key="sourceForAll" {...FormForAllLayout}>
              <Checkbox onChange={() => this.setState({ source: !source ? item.source : undefined })}>Für Alle übernehmen</Checkbox>
            </Form.Item>
          ) : null}
          <Form.Item key="tags" label="Tags" {...FormItemLayout}>
            {getFieldDecorator('tags', {
              initialValue: item.tags || [],
            })(
              <TagsEditor {...this.props} disabled={!!tags} searchPlaceholder="Suche ..." style={{ width: '100%' }} />
            )}
          </Form.Item>
          {multi ? (
            <Form.Item key="tagsForAll" {...FormForAllLayout}>
              <Checkbox onChange={() => this.setState({ tags: !tags ? item.tags : undefined })}>Für Alle übernehmen</Checkbox>
            </Form.Item>
          ) : null}
          <Form.Item key="size" label="Größe" {...FormItemLayout}>
            <Input disabled placeholder="Größe" defaultValue={`${item.width}x${item.height}`} />
          </Form.Item>
          <Form.Item key="date" label="Hinzugefügt" {...FormItemLayout}>
            <Input disabled placeholder="Hinzugefügt" defaultValue={`${moment(item.createdAt).format('DD. MMMM YYYY, HH:mm:ss')} Uhr`} />
          </Form.Item>
          <Form.Item key="format" label="Format" {...FormItemLayout}>
            <Input disabled placeholder="Format" defaultValue={item.format} />
          </Form.Item>
          { item.format === 'pdf' ? (
            <Form.Item key="pages" label="Seiten" {...FormItemLayout}>
              <Input disabled placeholder="Seiten" defaultValue={item.pages} />
            </Form.Item>
          ) : undefined }
          <Form.Item key="bytes" label="Dateigröße" {...FormItemLayout}>
            <Input disabled placeholder="Dateigröße" defaultValue={`${item.bytes / 1000} kB`} />
          </Form.Item>
        </div>
      </div>
    );
  }
}
export default MediaDetail;
