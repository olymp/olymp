import React, { Component } from 'react';
import { Modal, Button, Select } from 'antd';
import ReactCrop from 'react-image-crop';
import { cloudinaryUrl } from 'olymp';
import { isEqual } from 'lodash';
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
    const { disableUpload, readOnly, showMediathek, children } = this.props;
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
        {visible && !(image && image.url) ? (
          <Modal visible title="Mediathek" onCancel={this.onCancel} onOk={this.hide}>
            <Media
              tags={tags}
              solution={solution}
              source={source}
              type={type}
              sortByState={sortByState}
              onTagsFilterChange={tags => this.setState({ tags })}
              onSolutionFilterChange={solution => this.setState({ solution })}
              onSourceFilterChange={source => this.setState({ source })}
              onTypeFilterChange={type => this.setState({ type })}
              onResetFilters={() => this.setState({ tags: [], solution: [], source: [], type: [] })}
              onSortByChange={sortByState => this.setState({ sortByState })}
              onImageChange={this.show}
            />
            <Upload onClose={this.show} />
          </Modal>
        ) : null}
        {visible && image && image.url ? (
          <Modal
            visible
            title="Bildbereich auswählen"
            onCancel={this.onCancel}
            footer={[
              <Select defaultValue={`${aspect ? aspect.toString() : '0'}`} style={{ width: 150, float: 'left' }} size="large" onChange={option => this.setState({ aspect: parseFloat(option, 10) })}>
                <Select.Option key="0" value="0">Freie Auswahl</Select.Option>
                <Select.Option key="1" value={`${(3 / 2).toString()}`}>Postkarte 3:2</Select.Option>
                <Select.Option key="2" value={`${(2 / 3).toString()}`}>Portrait 2:3</Select.Option>
                <Select.Option key="3" value="1">Quadratisch 1:1</Select.Option>
                <Select.Option key="4" value={`${(19 / 7).toString()}`}>Landschaft 19:7</Select.Option>
                <Select.Option key="5" value={`${(16 / 9).toString()}`}>Kino 16:9</Select.Option>
              </Select>,
              <Button key="back" type="ghost" size="large" onClick={this.show}>
                Mediathek
              </Button>,
              <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.onOk}>
                Speichern
              </Button>,
            ]}
          >
            <ReactCrop src={cloudinaryUrl(image.url)} onChange={this.onCrop} crop={crop} />
          </Modal>
        ) : null}
      </WrappedComponent>
    );
  }
};
