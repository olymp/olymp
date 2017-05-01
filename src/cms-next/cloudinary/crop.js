import React, { Component, PropTypes } from 'react';
import { styled } from 'olymp';
import { Select } from 'antd';
import { url as optimizeUrl } from './utils';
import ReactCrop from 'react-image-crop';

const StyledCropSelect = styled(({ theme }) => ({
  width: 150,
  float: 'left',
}), Select, p => p);

const StyledCrop = styled(({ theme }) => ({
  '> .ReactCrop--crop-wrapper': {
    backgroundColor: 'white',
  }
}), ReactCrop, p => p);

export const CropSelect = (props) => {
  const { value, onChange, style } = props;

  return (
    <StyledCropSelect defaultValue={`${value || 0}`} size="large" onChange={option => onChange(parseFloat(option, 10))}>
      <Select.Option key="0" value="0">Freie Auswahl</Select.Option>
      <Select.Option key="1" value={`${(3 / 2).toString()}`}>Postkarte 3:2</Select.Option>
      <Select.Option key="2" value={`${(2 / 3).toString()}`}>Portrait 2:3</Select.Option>
      <Select.Option key="3" value="1">Quadratisch 1:1</Select.Option>
      <Select.Option key="4" value={`${(19 / 7).toString()}`}>Landschaft 19:7</Select.Option>
      <Select.Option key="5" value={`${(16 / 9).toString()}`}>Kino 16:9</Select.Option>
    </StyledCropSelect>
  );
};

const Crop = ({ url, aspect, crop, width, height, onChange }) => (
  <StyledCrop
    src={optimizeUrl(url)}
    onChange={(p, { width, height, x, y }) => onChange([width, height, x, y])}
    crop={crop ? {
      width: (crop[0] / width) * 100,
      height: (crop[1] / height) * 100,
      x: (crop[2] / width) * 100,
      y: (crop[3] / height) * 100,
      aspect,
    } : { aspect }}
  />
);
Crop.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  aspect: PropTypes.number,
  crop: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
};
Crop.defaultProps = {
  aspect: 0,
  crop: [0, 0, 0, 0],
  onChange: () => {},
};
export default Crop;
