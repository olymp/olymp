import React, { Component } from 'react';
// import 'react-image-crop/dist/ReactCrop.css';

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

  onOk = (image) => {
    const { onChange } = this.props;

    onChange(image);
    this.hide();
  };

  onCancel = () => {
    const { onCancel } = this.props;

    if (onCancel) onCancel();
    this.hide();
  };

  componentWillReceiveProps = (nextProps) => {
    const nextGivenImage = (getImage || defaultGetImage)(nextProps);

    if (!this.image) {
      this.image = { ...nextGivenImage };
    }
  }

  render() {
    const { disableUpload, readOnly, showMediathek, children, multi } = this.props;
    const visible = this.state.visible || showMediathek;
    const image = this.image;

    if (disableUpload || readOnly) {
      return <WrappedComponent {...this.props} />;
    }

    return (
      <WrappedComponent {...this.props} showMediathek={() => this.show(image)}>
        {children}
        {visible && (
          <MediaModal
            id={!!image && image.id}
            onChange={this.onOk}
            onClose={this.onCancel}
            multi={multi}
          />
        )}
      </WrappedComponent>
    );
  }
};
