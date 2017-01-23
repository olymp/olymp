import React, { Component } from 'react';
import { Modal, Button, Select } from 'antd';
import ReactCrop from 'react-image-crop';
import {cloudinaryUrl} from 'olymp';
import 'react-image-crop/dist/ReactCrop.css';

import MediaModal from '../../views/media/view';

const defaultGetImage = props => props.value;
export default ({ getImage } = {}) => WrappedComponent => class WithImageUpload extends Component {
  state = { };
  show = (value) => {
    this.image = value && typeof value === 'object' && value.url && value.width && value.height ? value : null;
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  onOk = () => {
    const { onChange } = this.props;

    onChange({
      url: this.image.url,
      height: this.image.height,
      width: this.image.width,
      crop: this.image.crop,
      caption: this.image.caption,
      source: this.image.source,
    });
    this.hide();
  };

  onCancel = () => {
    const { onCancel } = this.props;

    if (onCancel) onCancel();
    this.hide();
  };

  onCrop = (p, { width, height, x, y }) => {
    this.image.crop = [width, height, x, y];
  };

  componentWillReceiveProps = (nextProps) => {
    const nextGivenImage = (getImage || defaultGetImage)(nextProps);

    if (!this.image) {
      this.image = { ...nextGivenImage };
    }
  }

  render() {
    const { tags, solution, source, type, sortByState, aspect } = this.state;
    const { disableUpload, readOnly, showMediathek, children, onChange } = this.props;
    const visible = this.state.visible || showMediathek;

    if (disableUpload || readOnly) {
      return <WrappedComponent {...this.props} />;
    }

    const image = this.image;// || (showMediathek && typeof showMediathek === 'object' ? showMediathek : null);
    const crop = image && image.crop ? {
      width: (image.crop[0] / image.width) * 100,
      height: (image.crop[1] / image.height) * 100,
      x: (image.crop[2] / image.width) * 100,
      y: (image.crop[3] / image.height) * 100,
      aspect,
    } : { aspect };

    return (
      <WrappedComponent {...this.props} showMediathek={() => this.show(image)}>
        {children}
        {visible && <MediaModal id={image.id} onChange={onChange} />}
      </WrappedComponent>
    );
  }
};
