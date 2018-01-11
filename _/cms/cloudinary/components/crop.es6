import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'olymp-fela';
import ReactCrop from './cropper';
import cloudinaryUrl from '../cloudinary-url';

const StyledCrop = createComponent(
  ({ theme }) => ({
    maxHeight: 200,
    '> .ReactCrop--crop-wrapper': {
      backgroundColor: 'white',
    },
  }),
  p => <ReactCrop {...p} />,
  p => Object.keys(p),
);

class Crop extends Component {
  state = {
    isOpen: true,
  };

  onChange = ({ width, height, x, y }) => {
    this.props.onChange([
      Math.floor(this.props.width / 100 * width),
      Math.floor(this.props.height / 100 * height),
      Math.floor(this.props.width / 100 * x),
      Math.floor(this.props.height / 100 * y),
    ]);
  };

  render() {
    const { value } = this.props;
    const crop = value || [this.props.width, this.props.height, 0, 0];
    const aspect = this.props.aspect || (this.state.isSquare && 1);
    const width = crop[0] / this.props.width * 100;
    const height = crop[1] / this.props.height * 100;
    const x = crop[2] / this.props.width * 100;
    const y = crop[3] / this.props.height * 100;

    return (
      <div
        onKeyDown={e => this.setState({ isSquare: e && e.shiftKey })}
        onKeyUp={e => this.setState({ isSquare: false })}
      >
        <StyledCrop
          src={cloudinaryUrl({ ...this.props, crop: undefined })}
          onChange={this.onChange}
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
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  value: PropTypes.arrayOf(PropTypes.number),
  aspect: PropTypes.number,
  onChange: PropTypes.func,
};
Crop.defaultProps = {
  aspect: 0,
  onChange: () => {},
};
export default Crop;
