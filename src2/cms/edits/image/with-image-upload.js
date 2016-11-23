import React, { Component } from 'react';
import { Modal } from 'antd';
import ReactCrop from 'react-image-crop';
import { cloudinaryUrl } from 'olymp';
import 'react-image-crop/dist/ReactCrop.css';

import Media from '../../views/media/list';
import Upload from '../../views/media/upload';

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
    });
    this.hide();
  };

  onCrop = (p, { width, height, x, y }) => {
    this.image.crop = [width, height, x, y];
  };

  render() {
    const { tags, solution, source, sortByState } = this.state;

    if (this.props.disableUpload || this.props.readOnly) {
      return <WrappedComponent {...this.props} />;
    }

    const visible = this.state.visible || this.props.showMediathek;
    const image = this.image || (this.props.showMediathek && typeof this.props.showMediathek === 'object' ? this.props.showMediathek : null);
    const value = (getImage || defaultGetImage)(this.props);

    return (
      <WrappedComponent {...this.props} showMediathek={() => this.show(value)}>
        {this.props.children}
        {visible && !image ? <Modal visible onCancel={this.hide} onOk={this.hide} closable={false}>
          <Media
            tags={tags}
            solution={solution}
            source={source}
            sortByState={sortByState}
            onTagsFilterChange={tags => this.setState({ tags })}
            onSolutionFilterChange={solution => this.setState({ solution })}
            onSourceFilterChange={source => this.setState({ source })}
            onSortByChange={sortByState => this.setState({ sortByState })}
            onImageChange={this.show}
          />
          <Upload onClose={this.show} />
        </Modal> : null}
        {visible && image ? <Modal visible onCancel={() => this.show()} onOk={this.onOk} okText="Speichern" cancelText="Mediathek">
          <ReactCrop src={cloudinaryUrl(image.url)} onChange={this.onCrop} />
        </Modal> : null}
      </WrappedComponent>
    );
  }
};
