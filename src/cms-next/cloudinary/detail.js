import React, { Component } from 'react';
import { Prompt } from 'olymp';
import { Button, Form, Icon, Input } from 'antd';
import { Sidebar } from 'olymp/ui';
import moment from 'moment';

const FormItemLayout = { labelCol: { span: 8 }, wrapperCol: { span: 16 }, style: { marginBottom: '0' } };

@Form.create()
export default class MediaDetail extends Component {
  render() {
    const { image, form } = this.props;
    const { getFieldDecorator } = form;

    const leftButtons = (
      <div>
        <Button.Group>
          <Button onClick={() => {}}>
            <Icon type="close" />
          </Button>
        </Button.Group>
      </div>
    );
    const rightButtons = (
      <div>
        <Button.Group>
          <Button>
            <Icon type="save" />
          </Button>
          <Button>
            <Icon type="save" />
          </Button>
          <Button>
            <Icon type="save" />
          </Button>
        </Button.Group>
      </div>
    );

    return (
      <Sidebar
        leftButtons={leftButtons}
        rightButtons={rightButtons}
        isOpen
        minWidth={300}
        padding={0}
        title="Mediathek"
        subtitle="Medien sichten und verwalten"
      >
        <Prompt when={form.isFieldsTouched()} message={location => `Änderungen verwerfen?`} />
        Hier kommt das ausgewählte Bild hin
        {/* images.map(image => image.id) */}

        <Form.Item key="id" label="ID" {...FormItemLayout}>
          {getFieldDecorator('id', {
            initialValue: image.id,
          })(
            <Input disabled placeholder="ID" />
          )}
        </Form.Item>
        <Form.Item key="caption" label="Bezeichnung" {...FormItemLayout}>
          {getFieldDecorator('caption', {
            initialValue: image.caption,
          })(
            <Input placeholder="Bezeichnung" />
          )}
        </Form.Item>
        <Form.Item key="source" label="Quelle" {...FormItemLayout}>
          {getFieldDecorator('source', {
            initialValue: image.source,
          })(
            <Input placeholder="Quelle" />
          )}
        </Form.Item>
        <Form.Item key="tags" label="Tags" {...FormItemLayout}>
          {/* getFieldDecorator('tags', {
            initialValue: image.tags || [],
          })(
            <TagsEditor {...props} tags searchPlaceholder="Suche ..." style={{ width: '100%' }} />
          ) */}
        </Form.Item>

        {/* <Image value={{ ...image }} width="100%" lightbox className="my-1" /> */}

        <Form.Item key="size" label="Größe" {...FormItemLayout}>
          <Input disabled placeholder="Größe" defaultValue={`${image.width}x${image.height}`} />
        </Form.Item>
        <Form.Item key="date" label="Hinzugefügt" {...FormItemLayout}>
          <Input disabled placeholder="Hinzugefügt" defaultValue={`${moment(image.createdAt).format('DD. MMMM YYYY, HH:mm:ss')} Uhr`} />
        </Form.Item>
        <Form.Item key="format" label="Format" {...FormItemLayout}>
          <Input disabled placeholder="Format" defaultValue={image.format} />
        </Form.Item>
        { image.format === 'pdf' ? (
          <Form.Item key="pages" label="Seiten" {...FormItemLayout}>
            <Input disabled placeholder="Seiten" defaultValue={image.pages} />
          </Form.Item>
        ) : undefined }
        <Form.Item key="bytes" label="Dateigröße" {...FormItemLayout}>
          <Input disabled placeholder="Dateigröße" defaultValue={`${image.bytes / 1000} kB`} />
        </Form.Item>

        <div style={{ float: 'right' }}>
          <Button onClick={() => {}} type="primary">Speichern</Button>&nbsp;
          <Button onClick={() => {}}>Löschen</Button>&nbsp;
          <Button onClick={() => {}}>Abbrechen</Button>
        </div>

        <div style={{ clear: 'both' }} />
      </Sidebar>
    );
  }
}
