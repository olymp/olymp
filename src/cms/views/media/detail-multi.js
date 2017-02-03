import React, { Component } from 'react';
import { Modal, Form, Input, Select, Button, Spin } from 'antd';
import { withCollection } from 'olymp';
import ListMini from './list-mini';
import { TagSelect } from '../../edits';

const FormItemLayout = { labelCol: { span: 8 }, wrapperCol: { span: 16 }, style: { marginBottom: '0' } };

const MediaForm = Form.create()(
  (props) => {
    const { images = [], form, save, remove, onClose } = props;
    const { getFieldDecorator } = form;

    const tags = {};
    let source;
    images.forEach((image) => {
      if (source === undefined) source = image.source;
      source = (image.source === source) && source;

      (image.tags || []).forEach((tag) => {
        if (!tags[tag]) tags[tag] = 0;
        tags[tag] += 1;
      });
    });

    return (
      <div>
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
            <TagSelect {...props} tags searchPlaceholder="Suche ..." style={{ width: '100%' }} />
          )}
        </Form.Item>

        <div style={{ float: 'right' }}>
          <Button onClick={save} type="primary">Speichern</Button>&nbsp;
          <Button onClick={remove}>Löschen</Button>&nbsp;
          <Button onClick={onClose}>Abbrechen</Button>
        </div>

        <div style={{ clear: 'both' }} />
      </div>
    );
  }
);

@withCollection('File')
export default class MultiMediaDetail extends Component {
  state = {
    loading: false,
  };

  remove = () => {
    const { onClose, images, removeCollectionItem } = this.props;
    const setLoading = state => this.setState({ loading: state });

    Modal.confirm({
      title: 'Diese Dateien wirklich löschen?',
      content: `Wollen Sie diese ${images.length} Dateien wirklich löschen?`,
      onOk() {
        setLoading(true);

        Promise.all(images.map(image => removeCollectionItem(image.id))).then(() => {
          onClose();
        }).catch((err) => {
          console.error(err);
        });
      },
      onCancel() {
        onClose();
      },
    });
  };

  save = () => {
    const { onClose, images, saveCollectionItem } = this.props;
    const form = this.form;
    const setLoading = state => this.setState({ loading: state });

    Modal.confirm({
      title: `Änderungen für alle ${images.length} Dateien übernehmen?`,
      content: 'Vorherige Schlagworte oder Quellen werden damit überschrieben!',
      onOk() {
        form.validateFields((err, { tags, source }) => {
          if (err) return;
          setLoading(true);

          Promise.all(images.map(image => saveCollectionItem({
            ...image,
            source,
            tags,
          }))).then(() => {
            onClose();
          }).catch((err) => {
            console.error(err);
          });
        });
      },
      onCancel() {
        onClose();
      },
    });
  };

  render() {
    const { loading } = this.state;

    return (
      <div>
        <div style={{ borderBottom: '1px solid #DDD', padding: '1rem 0', marginBottom: '1rem', minHeight: 400, position: 'relative' }}>
          {loading ? <Spin size="large" /> : (
            <MediaForm
              {...this.props}
              ref={form => this.form = form}
              save={this.save}
              remove={this.remove}
            />
          )}
        </div>

        <ListMini {...this.props} />
      </div>
    );
  }
}
