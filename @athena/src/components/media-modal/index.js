import React, { Component, PropTypes } from 'react';
import MediaList from '../../views/media/list';
import MediaCrop from './modal-crop';
import { Button, Modal } from '@olymp/adonis';

export default class MediaModal extends Component {
  static propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    format: PropTypes.number,
    close: PropTypes.func.isRequired,
  }
  constructor(props) {
    super();
    this.state = { value: props.value ? JSON.parse(JSON.stringify(props.value)) : null };
  }

  onChange = value => {
    this.setState({ value });
  }

  save = () => {
    const { value } = this.state;
    const { onChange } = this.props;
    onChange(value);
  }

  empty = () => {
    const { onChange } = this.props;
    onChange(null);
  }

  render() {
    const { value } = this.state;
    const { format, onClose } = this.props;

    const inner = value
      ? <MediaCrop format={format} image={value} onChange={this.onChange} />
      : <MediaList onClick={v => this.setState({ value: v })} />;

    const buttons = [
      <Button key="1" color="secondary" onClick={onClose}>Abbruch</Button>,
      <span key="1.5">&nbsp;</span>,
      value ? <Button key="2" color="danger" onClick={this.empty}>Kein Bild</Button> : null,
      value ? <span key="2.5">&nbsp;</span> : null,
      <Button key="3" color="primary" onClick={this.save}>Speichern</Button>,
    ];

    return (
      <Modal buttons={buttons} onClose={onClose}>
        {inner}
      </Modal>
    );
  }
}
