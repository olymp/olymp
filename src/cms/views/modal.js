import React, { Component } from 'react';
import { Modal } from 'olymp';

export default class ModalView extends Component {
  render() {
    const { children } = this.props;

    return (
      <Modal>
        {children}
      </Modal>
    );
  }
}
