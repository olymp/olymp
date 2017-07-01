import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'olymp-fela';
import { cloudinaryUrl } from './image';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const StyledCrop = createComponent(
  ({ theme }) => ({
    '> .ReactCrop--crop-wrapper': {
      backgroundColor: 'white',
    },
  }),
  p => <ReactCrop {...p} />,
  p => Object.keys(p)
);

class Crop extends Component {
  state = {
    isOpen: true,
  };

  render() {
    const { value, onChange } = this.props;
    const crop = value.crop || [value.width, value.height, 0, 0];
    const aspect = this.props.aspect || (this.state.isSquare && 1);
    const width = crop[0] / value.width * 100;
    const height = crop[1] / value.height * 100;
    const x = crop[2] / value.width * 100;
    const y = crop[3] / value.height * 100;

    return (
      <div
        onKeyDown={e => this.setState({ isSquare: e && e.shiftKey })}
        onKeyUp={e => this.setState({ isSquare: false })}
      >
        <StyledCrop
          src={cloudinaryUrl({ ...value, crop: undefined })}
          onChange={(p, { width, height, x, y }) =>
            onChange([width, height, x, y])}
          crop={
            crop
              ? {
                width,
                height,
                x,
                y,
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
  value: PropTypes.shape({
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    crop: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  aspect: PropTypes.number,
  onChange: PropTypes.func,
};
Crop.defaultProps = {
  aspect: 0,
  onChange: () => {},
};
export default Crop;
