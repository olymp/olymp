import React, { Component } from 'react';
import { Button, Select, Spin } from 'antd';
import ReactCrop from 'react-image-crop';
import { cloudinaryUrl } from 'olymp';
import 'react-image-crop/dist/ReactCrop.css';
import withFile from '../../decorators/file';

const defaultGetImage = props => props.value;

export const CropSelect = (props) => {
  const { value, onChange } = props;
  return (
    <Select defaultValue={`${value || 0}`} style={{ width: 150, float: 'left' }} size="large" onChange={option => onChange(parseFloat(option, 10))}>
      <Select.Option key="0" value="0">Freie Auswahl</Select.Option>
      <Select.Option key="1" value={`${(3 / 2).toString()}`}>Postkarte 3:2</Select.Option>
      <Select.Option key="2" value={`${(2 / 3).toString()}`}>Portrait 2:3</Select.Option>
      <Select.Option key="3" value="1">Quadratisch 1:1</Select.Option>
      <Select.Option key="4" value={`${(19 / 7).toString()}`}>Landschaft 19:7</Select.Option>
      <Select.Option key="5" value={`${(16 / 9).toString()}`}>Kino 16:9</Select.Option>
    </Select>
  )
}

@withFile
export default class Crop extends Component {
  state = {};

  onCrop = (p, { width, height, x, y }) => {
    const { onChange, item } = this.props;
    const crop = [width, height, x, y];
    onChange({
      url: item.url,
      height: item.height,
      width: item.width,
      crop,
      caption: item.caption,
      source: item.source,
    });
  };

  render() {
    const { item, onClose, aspect } = this.props;

    const crop = item && item.crop ? {
      width: (item.crop[0] / item.width) * 100,
      height: (item.crop[1] / item.height) * 100,
      x: (item.crop[2] / item.width) * 100,
      y: (item.crop[3] / item.height) * 100,
      aspect,
    } : { aspect };

    if (!item) {
      return (
        <div style={{ minHeight: 400 }}>
          <Spin />
        </div>
      );
    }

    return (
      <ReactCrop src={cloudinaryUrl(item.url)} onChange={this.onCrop} crop={crop} />
    );
  }
}
