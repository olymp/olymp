import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import Editor from '../editor';

const modalSettings = { visible: true, okText: 'Speichern', cancelText: 'Abbruch', wrapClassName: 'fullscreen-wrap', className: 'fullscreen frontend' };

export default class SlateModal extends Component {
  handleCancel = () => {
    const { onClose } = this.props;
    onClose();
  };

  handleCreate = () => {
    const { onClose } = this.props;
    onClose(this.value);
  };

  onChange = (value) => {
    this.value = value;
  }

  render() {
    return (
      <Modal
        {...modalSettings}
        title="Text"
        onCancel={this.handleCancel}
        onCreate={this.handleCreate}
        footer={[
          <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>
            Abbrechen
          </Button>,
          <Button key="submit" type="primary" size="large" onClick={this.handleCreate}>
            Speichern
          </Button>,
        ]}
      >
        <Editor className="frontend-editor" {...this.props} onChange={this.onChange} />
      </Modal>
    );
  }
}
