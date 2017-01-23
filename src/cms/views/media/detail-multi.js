import React, { Component } from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';
import { Image } from '../../edits';

const FormItemLayout = { labelCol: { span: 8 }, wrapperCol: { span: 16 }, style: { marginBottom: '0' } };

const MediaForm = Form.create()(
  (props) => {
    const { images = [], form, save, remove, deselect, onClose } = props;
    const { getFieldDecorator } = form;

    const tags = {};
    let source;
    images.forEach(image => {
      if (source === undefined) source = image.source;
      source = (image.source === source) && source;

      image.tags.forEach(tag => {
        if (!tags[tag]) tags[tag] = 0;
        tags[tag] += 1;
      });
    });

    return (
      <div>
        <div style={{ borderBottom: '1px solid #DDD', padding: '1rem 0', marginBottom: '1rem' }}>
          <Form.Item key="source" label="Gemeinsame Quelle" {...FormItemLayout}>
            {getFieldDecorator('source', {
              initialValue: source || '',
            })(
              <Input placeholder="Quelle" />
            )}
          </Form.Item>
          <Form.Item key="tags" label="Gemeinsame Schlagworte" {...FormItemLayout}>
            {getFieldDecorator('tags', {
              initialValue: Object.keys(tags).filter(tag => tags[tag] === images.length),
            })(
              <Select {...props} tags searchPlaceholder="Suche ..." style={{ width: '100%' }} />
            )}
          </Form.Item>

          <div style={{ float: 'right' }}>
            <Button onClick={save} type="primary">Speichern</Button>&nbsp;
            <Button onClick={remove}>Löschen</Button>&nbsp;
            <Button onClick={onClose}>Abbrechen</Button>
          </div>

          <div style={{ clear: 'both' }} />
        </div>

        {images.map(image => (
          <div onClick={() => deselect(image.id)} key={image.id} style={{ cursor: 'pointer' }}>
            <Image value={image} width={60} ratio={1} style={{ marginRight: '.5rem', marginBottom: '.5rem', float: 'left' }} />
          </div>
        ))}
      </div>
    );
  }
);

export default class MultiMediaDetail extends Component {
  remove = () => {
    const { remove, onClose, images } = this.props;

    Modal.confirm({
      title: 'Diese Dateien wirklich löschen?',
      content: `Wollen Sie diese ${images.length} Dateien wirklich löschen?`,
      onOk() {
        images.forEach(({ id }) => {
          // remove({ id }).then(onClose);
          console.log(id);
        });
      },
      onCancel() {
        onClose();
      },
    });
  };

  save = () => {
    const { save, onClose, images } = this.props;
    const form = this.form;

    Modal.confirm({
      title: `Änderungen für alle ${images.length} Dateien übernehmen?`,
      content: 'Vorherige Schlageworte oder Quellen werden damit überschrieben!',
      onOk() {
        form.validateFields((err, { tags, source }) => {
          images.forEach((image) => {
            const newImage = {
              ...image,
              source,
              tags,
            };

            if (err) return;
            //save(newImage, { commit: false }).then(onClose);
            console.log(save, newImage);
          });
        });
      },
      onCancel() {
        onClose();
      },
    });
  };

  render() {
    return (
      <MediaForm
        {...this.props}
        ref={form => this.form = form}
        save={this.save}
        remove={this.remove}
      />
    );
  }
}
