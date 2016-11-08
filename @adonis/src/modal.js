import React, { Component, PropTypes } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalComponent extends Component {
  prepareClose = () => {
    this._time = new Date();
  }
  closeOnClick = () => {
    const { onClose } = this.props;
    const now = new Date();
    const elapsed = now - this._time;
    const tolerance = 1000 * 0.5; // seconds
    if (onClose && elapsed < tolerance) onClose();
  }
  stopPropagation = e => {
    e.stopPropagation();
  }
  render() {
    const { children, title, buttons, onClose, className, bodyStyle, bodyClassName, size } = this.props;
    return (
      <Modal isOpen toggle={onClose} className={className} size={size} backdropo="static">
        {title ? <ModalHeader toggle={onClose}>{title}</ModalHeader> : null}
        <ModalBody style={bodyStyle} className={bodyClassName}>
          {children}
        </ModalBody>
        <ModalFooter>
          {buttons}
        </ModalFooter>
      </Modal>
    );
  }
}
