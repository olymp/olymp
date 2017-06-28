import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'olymp-fela';
import { Select } from 'antd';
import { cloudinaryUrl } from './image';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const StyledCropSelect = createComponent(
  ({ theme }) => ({
    width: 150,
    float: 'left',
  }),
  Select,
  p => Object.keys(p)
);

const StyledCrop = createComponent(
  ({ theme }) => ({
    '> .ReactCrop--crop-wrapper': {
      backgroundColor: 'white',
    },
  }),
  ReactCrop,
  p => Object.keys(p)
);

export const CropSelect = (props) => {
  const { value, onChange, style } = props;

  return (
    <StyledCropSelect
      defaultValue={`${value || 0}`}
      size="large"
      onChange={option => onChange(parseFloat(option, 10))}
    >
      <Select.Option key="0" value="0">Freie Auswahl</Select.Option>
      <Select.Option key="1" value={`${(3 / 2).toString()}`}>
        Postkarte 3:2
      </Select.Option>
      <Select.Option key="2" value={`${(2 / 3).toString()}`}>
        Portrait 2:3
      </Select.Option>
      <Select.Option key="3" value="1">Quadratisch 1:1</Select.Option>
      <Select.Option key="4" value={`${(19 / 7).toString()}`}>
        Landschaft 19:7
      </Select.Option>
      <Select.Option key="5" value={`${(16 / 9).toString()}`}>
        Kino 16:9
      </Select.Option>
    </StyledCropSelect>
  );
};

class Crop extends Component {
  state = {
    isOpen: true,
  };

  render() {
    const { value, crop, width, height, onChange } = this.props;
    const aspect = this.props.aspect || (this.state.isSquare && 1);

    return (
      <div
        onKeyDown={e => this.setState({ isSquare: e && e.shiftKey })}
        onKeyUp={e => this.setState({ isSquare: false })}
      >
        <StyledCrop
          src={cloudinaryUrl(value)}
          onChange={(p, { width, height, x, y }) =>
            onChange([width, height, x, y])}
          crop={
            crop
              ? {
                width: crop[0] / width * 100,
                height: crop[1] / height * 100,
                x: crop[2] / width * 100,
                y: crop[3] / height * 100,
                aspect,
              }
              : { aspect }
          }
        />
      </div>
    );
  }
}
Crop.propTypes = {
  value: PropTypes.string.isRequired,
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
