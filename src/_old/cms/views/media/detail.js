import React, { Component } from 'react';
import { Modal, Form, Input, Spin, Button } from 'antd';
import { Image } from 'olymp';
import { TagsEditor } from 'olymp-ui';
import moment from 'moment';
import withFile from '../../decorators/file';

const FormItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  style: { marginBottom: '0' },
};

const MediaForm = Form.create()((props) => {
  const { item, form, save, remove, onClose } = props;
  const { getFieldDecorator } = form;

  if (!item) {
    return (
      <div style={{ minHeight: 400 }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      <Form.Item key="id" label="ID" {...FormItemLayout}>
        {getFieldDecorator('id', {
          initialValue: item.id,
        })(<Input disabled placeholder="ID" />)}
      </Form.Item>
      <Form.Item key="caption" label="Bezeichnung" {...FormItemLayout}>
        {getFieldDecorator('caption', {
          initialValue: item.caption,
        })(<Input placeholder="Bezeichnung" />)}
      </Form.Item>
      <Form.Item key="source" label="Quelle" {...FormItemLayout}>
        {getFieldDecorator('source', {
          initialValue: item.source,
        })(<Input placeholder="Quelle" />)}
      </Form.Item>
      <Form.Item key="tags" label="Tags" {...FormItemLayout}>
        {getFieldDecorator('tags', {
          initialValue: item.tags || [],
        })(
          <TagsEditor
            {...props}
            tags
            searchPlaceholder="Suche ..."
            style={{ width: '100%' }}
          />
        )}
      </Form.Item>

      <Image value={{ ...item }} width="100%" lightbox className="my-1" />

      <Form.Item key="size" label="Größe" {...FormItemLayout}>
        <Input
          disabled
          placeholder="Größe"
          defaultValue={`${item.width}x${item.height}`}
        />
      </Form.Item>
      <Form.Item key="date" label="Hinzugefügt" {...FormItemLayout}>
        <Input
          disabled
          placeholder="Hinzugefügt"
          defaultValue={`${moment(item.createdAt).format(
            'DD. MMMM YYYY, HH:mm:ss'
          )} Uhr`}
        />
      </Form.Item>
      <Form.Item key="format" label="Format" {...FormItemLayout}>
        <Input disabled placeholder="Format" defaultValue={item.format} />
      </Form.Item>
      {item.format === 'pdf'
        ? <Form.Item key="pages" label="Seiten" {...FormItemLayout}>
          <Input disabled placeholder="Seiten" defaultValue={item.pages} />
        </Form.Item>
        : undefined}
      <Form.Item key="bytes" label="Dateigröße" {...FormItemLayout}>
        <Input
          disabled
          placeholder="Dateigröße"
          defaultValue={`${item.bytes / 1000} kB`}
        />
      </Form.Item>

      <div style={{ float: 'right' }}>
        <Button onClick={save} type="primary">Speichern</Button>&nbsp;
        <Button onClick={remove}>Löschen</Button>&nbsp;
        <Button onClick={onClose}>Abbrechen</Button>
      </div>

      <div style={{ clear: 'both' }} />
    </div>
  );
});

@withFile
export default class MediaDetail extends Component {
  handleCancel = () => {
    this.props.onClose();
  };

  handleDelete = () => {
    const { id, remove, onClose } = this.props;

    Modal.confirm({
      title: 'Diese Datei wirklich löschen?',
      content: 'Wollen Sie diese Datei wirklich löschen?',
      onOk() {
        remove({ id }).then(onClose);
      },
      onCancel() {},
    });
  };

  handleCreate = () => {
    const { save, onClose } = this.props;

    const form = this.form;
    form.validateFields((err, values) => {
      if (err) { return; }
      save(values, { commit: false }).then(onClose);
    });
  };

  render() {
    return (
      <MediaForm
        {...this.props}
        ref={form => (this.form = form)}
        save={this.handleCreate}
        remove={this.handleDelete}
        onClose={this.handleCancel}
      />
    );
  }
}
