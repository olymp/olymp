/* globals document, window */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './cropper.less';

const EMPTY_GIF =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

function getElementOffset(el) {
  const rect = el.getBoundingClientRect();
  const docEl = document.documentElement;

  const rectTop = rect.top + window.pageYOffset - docEl.clientTop;
  const rectLeft = rect.left + window.pageXOffset - docEl.clientLeft;

  return {
    top: rectTop,
    left: rectLeft,
  };
}

function getClientPos(e) {
  let pageX;
  let pageY;

  if (e.touches) {
    pageX = e.touches[0].pageX;
    pageY = e.touches[0].pageY;
  } else {
    pageX = e.pageX;
    pageY = e.pageY;
  }

  return {
    x: pageX,
    y: pageY,
  };
}

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

function isCropValid(crop) {
  return crop && crop.width && crop.height;
}

function inverseOrd(ord) {
  let inversedOrd;

  if (ord === 'n') inversedOrd = 's';
  else if (ord === 'ne') inversedOrd = 'sw';
  else if (ord === 'e') inversedOrd = 'w';
  else if (ord === 'se') inversedOrd = 'nw';
  else if (ord === 's') inversedOrd = 'n';
  else if (ord === 'sw') inversedOrd = 'ne';
  else if (ord === 'w') inversedOrd = 'e';
  else if (ord === 'nw') inversedOrd = 'se';

  return inversedOrd;
}

class ReactCrop extends PureComponent {
  state = {};

  componentDidMount() {
    document.addEventListener('mousemove', this.onDocMouseTouchMove);
    document.addEventListener('touchmove', this.onDocMouseTouchMove);

    document.addEventListener('mouseup', this.onDocMouseTouchEnd);
    document.addEventListener('touchend', this.onDocMouseTouchEnd);
    document.addEventListener('touchcancel', this.onDocMouseTouchEnd);

    if (this.imageRef.complete || this.imageRef.readyState) {
      if (this.imageRef.naturalWidth === 0) {
        // Broken load on iOS, PR #51
        // https://css-tricks.com/snippets/jquery/fixing-load-in-ie-for-cached-images/
        // http://stackoverflow.com/questions/821516/browser-independent-way-to-detect-when-image-has-been-loaded
        const src = this.imageRef.src;
        this.imageRef.src = EMPTY_GIF;
        this.imageRef.src = src;
      } else {
        this.onImageLoad(this.imageRef);
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onDocMouseTouchMove);
    document.removeEventListener('touchmove', this.onDocMouseTouchMove);

    document.removeEventListener('mouseup', this.onDocMouseTouchEnd);
    document.removeEventListener('touchend', this.onDocMouseTouchEnd);
    document.removeEventListener('touchcancel', this.onDocMouseTouchEnd);
  }

  onCropMouseTouchDown = e => {
    const { crop, disabled } = this.props;

    if (disabled) {
      return;
    }

    e.preventDefault(); // Stop drag selection.

    const clientPos = getClientPos(e);

    // Focus for detecting keypress.
    // this.componentRef.focus();

    const ord = e.target.dataset.ord;
    const xInversed = ord === 'nw' || ord === 'w' || ord === 'sw';
    const yInversed = ord === 'nw' || ord === 'n' || ord === 'ne';

    let cropOffset;

    if (crop.aspect) {
      cropOffset = getElementOffset(this.cropSelectRef);
    }

    this.evData = {
      clientStartX: clientPos.x,
      clientStartY: clientPos.y,
      cropStartWidth: crop.width,
      cropStartHeight: crop.height,
      cropStartX: xInversed ? crop.x + crop.width : crop.x,
      cropStartY: yInversed ? crop.y + crop.height : crop.y,
      xInversed,
      yInversed,
      xCrossOver: xInversed,
      yCrossOver: yInversed,
      startXCrossOver: xInversed,
      startYCrossOver: yInversed,
      isResize: e.target !== this.cropSelectRef,
      ord,
      cropOffset,
    };

    this.mouseDownOnCrop = true;
    this.setState({ cropIsActive: true });
  };

  onComponentMouseTouchDown = e => {
    const { crop, disabled, keepSelection, onChange } = this.props;

    if (e.target !== this.imageRef) {
      return;
    }

    if (disabled || (keepSelection && isCropValid(crop))) {
      return;
    }

    e.preventDefault(); // Stop drag selection.

    const clientPos = getClientPos(e);

    // Focus for detecting keypress.
    // this.componentRef.focus();

    const imageOffset = getElementOffset(this.imageRef);
    const xPc = (clientPos.x - imageOffset.left) / this.imageRef.width * 100;
    const yPc = (clientPos.y - imageOffset.top) / this.imageRef.height * 100;

    const nextCrop = {
      aspect: crop.aspect,
      x: xPc,
      y: yPc,
      width: 0,
      height: 0,
    };

    this.evData = {
      clientStartX: clientPos.x,
      clientStartY: clientPos.y,
      cropStartWidth: nextCrop.width,
      cropStartHeight: nextCrop.height,
      cropStartX: nextCrop.x,
      cropStartY: nextCrop.y,
      xInversed: false,
      yInversed: false,
      xCrossOver: false,
      yCrossOver: false,
      startXCrossOver: false,
      startYCrossOver: false,
      isResize: true,
      ord: 'nw',
    };

    this.mouseDownOnCrop = true;
    onChange(nextCrop, this.getPixelCrop(nextCrop));
    this.setState({ cropIsActive: true });
  };

  onDocMouseTouchMove = e => {
    const { crop, disabled, onChange, onDragStart } = this.props;

    onDragStart();

    if (disabled) {
      return;
    }

    if (!this.mouseDownOnCrop) {
      return;
    }

    e.preventDefault(); // Stop drag selection.

    const evData = this.evData;
    const clientPos = getClientPos(e);

    if (evData.isResize && crop.aspect && evData.cropOffset) {
      clientPos.y = this.straightenYPath(clientPos.x);
    }

    const xDiffPx = clientPos.x - evData.clientStartX;
    evData.xDiffPc = xDiffPx / this.imageRef.width * 100;

    const yDiffPx = clientPos.y - evData.clientStartY;
    evData.yDiffPc = yDiffPx / this.imageRef.height * 100;

    let nextCrop;

    if (evData.isResize) {
      nextCrop = this.resizeCrop();
    } else {
      nextCrop = this.dragCrop();
    }

    onChange(nextCrop, this.getPixelCrop(nextCrop));
  };

  onComponentKeyDown = e => {
    const { crop, disabled, onChange, onComplete } = this.props;

    if (disabled) {
      return;
    }

    const keyCode = e.which;
    let nudged = false;

    if (!isCropValid(crop)) {
      return;
    }

    const nextCrop = this.makeNewCrop();

    if (keyCode === ReactCrop.arrowKey.left) {
      nextCrop.x -= ReactCrop.nudgeStep;
      nudged = true;
    } else if (keyCode === ReactCrop.arrowKey.right) {
      nextCrop.x += ReactCrop.nudgeStep;
      nudged = true;
    } else if (keyCode === ReactCrop.arrowKey.up) {
      nextCrop.y -= ReactCrop.nudgeStep;
      nudged = true;
    } else if (keyCode === ReactCrop.arrowKey.down) {
      nextCrop.y += ReactCrop.nudgeStep;
      nudged = true;
    }

    if (nudged) {
      e.preventDefault(); // Stop drag selection.
      nextCrop.x = clamp(nextCrop.x, 0, 100 - nextCrop.width);
      nextCrop.y = clamp(nextCrop.y, 0, 100 - nextCrop.height);

      onChange(nextCrop, this.getPixelCrop(nextCrop));
      onComplete(nextCrop, this.getPixelCrop(nextCrop));
    }
  };

  onDocMouseTouchEnd = () => {
    const { crop, disabled, onComplete, onDragEnd } = this.props;

    onDragEnd();

    if (disabled) {
      return;
    }

    if (this.mouseDownOnCrop) {
      this.mouseDownOnCrop = false;

      onComplete(crop, this.getPixelCrop(crop));
      this.setState({ cropIsActive: false });
    }
  };

  onImageLoad(image) {
    this.props.onImageLoaded(image);
  }

  getPixelCrop(crop) {
    const { imageRef } = this;
    return {
      x: Math.round(imageRef.naturalWidth * (crop.x / 100)),
      y: Math.round(imageRef.naturalHeight * (crop.y / 100)),
      width: Math.round(imageRef.naturalWidth * (crop.width / 100)),
      height: Math.round(imageRef.naturalHeight * (crop.height / 100)),
    };
  }

  getCropStyle() {
    const { crop } = this.props;
    return {
      top: `${crop.y}%`,
      left: `${crop.x}%`,
      width: `${crop.width}%`,
      height: `${crop.height}%`,
    };
  }

  getNewSize() {
    const { crop, minWidth, maxWidth, minHeight, maxHeight } = this.props;
    const evData = this.evData;
    const imageAspect = this.imageRef.width / this.imageRef.height;

    // New width.
    let newWidth = evData.cropStartWidth + evData.xDiffPc;

    if (evData.xCrossOver) {
      newWidth = Math.abs(newWidth);
    }

    newWidth = clamp(newWidth, minWidth, maxWidth);

    // New height.
    let newHeight;

    if (crop.aspect) {
      newHeight = newWidth / crop.aspect * imageAspect;
    } else {
      newHeight = evData.cropStartHeight + evData.yDiffPc;
    }

    if (evData.yCrossOver) {
      // Cap if polarity is inversed and the height fills the y space.
      newHeight = Math.min(Math.abs(newHeight), evData.cropStartY);
    }

    newHeight = clamp(newHeight, minHeight, maxHeight);

    if (crop.aspect) {
      newWidth = clamp(newHeight * crop.aspect / imageAspect, 0, 100);
    }

    return {
      width: newWidth,
      height: newHeight,
    };
  }

  dragCrop() {
    const nextCrop = this.makeNewCrop();
    const evData = this.evData;
    nextCrop.x = clamp(
      evData.cropStartX + evData.xDiffPc,
      0,
      100 - nextCrop.width,
    );
    nextCrop.y = clamp(
      evData.cropStartY + evData.yDiffPc,
      0,
      100 - nextCrop.height,
    );
    return nextCrop;
  }

  resizeCrop() {
    const { crop } = this.props;
    const nextCrop = this.makeNewCrop();
    const evData = this.evData;
    const ord = evData.ord;
    const imageAspect = this.imageRef.width / this.imageRef.height;

    // On the inverse change the diff so it's the same and
    // the same algo applies.
    if (evData.xInversed) {
      evData.xDiffPc -= evData.cropStartWidth * 2;
    }
    if (evData.yInversed) {
      evData.yDiffPc -= evData.cropStartHeight * 2;
    }

    // New size.
    const newSize = this.getNewSize();

    // Adjust x/y to give illusion of 'staticness' as width/height is increased
    // when polarity is inversed.
    let newX = evData.cropStartX;
    let newY = evData.cropStartY;

    if (evData.xCrossOver) {
      newX = nextCrop.x + (nextCrop.width - newSize.width);
    }

    if (evData.yCrossOver) {
      // This not only removes the little "shake" when inverting at a diagonal, but for some
      // reason y was way off at fast speeds moving sw->ne with fixed aspect only, I couldn't
      // figure out why.
      if (evData.lastYCrossover === false) {
        newY = nextCrop.y - newSize.height;
      } else {
        newY = nextCrop.y + (nextCrop.height - newSize.height);
      }
    }

    // Don't let the crop grow on the opposite side when hitting an x image boundary.
    let cropXAdjusted = false;
    if (newX + newSize.width > 100) {
      newSize.width = crop.width + (100 - (crop.x + crop.width));
      newX = crop.x + (100 - (crop.x + newSize.width));
      cropXAdjusted = true;
    } else if (newX < 0) {
      newSize.width = crop.x + crop.width;
      newX = 0;
      cropXAdjusted = true;
    }

    if (cropXAdjusted && crop.aspect) {
      // Adjust height to the resized width to maintain aspect.
      newSize.height = newSize.width / crop.aspect * imageAspect;
      // If sizing in up direction we need to pin Y at the point it
      // would be at the boundary.
      if (newY < crop.y) {
        newY = crop.y + (crop.height - newSize.height);
      }
    }

    // Don't let the crop grow on the opposite side when hitting a y image boundary.
    let cropYAdjusted = false;
    if (newY + newSize.height > 100) {
      newSize.height = crop.height + (100 - (crop.y + crop.height));
      newY = crop.y + (100 - (crop.y + newSize.height));
      cropYAdjusted = true;
    } else if (newY < 0) {
      newSize.height = crop.y + crop.height;
      newY = 0;
      cropYAdjusted = true;
    }

    if (cropYAdjusted && crop.aspect) {
      // Adjust width to the resized height to maintain aspect.
      newSize.width = newSize.height * crop.aspect / imageAspect;
      // If sizing in up direction we need to pin X at the point it
      // would be at the boundary.
      if (newX < crop.x) {
        newX = crop.x + (crop.width - newSize.width);
      }
    }

    // Apply x/y/width/height changes depending on ordinate (fixed aspect always applies both).
    if (nextCrop.aspect || ReactCrop.xyOrds.indexOf(ord) > -1) {
      nextCrop.x = newX;
      nextCrop.y = newY;
      nextCrop.width = newSize.width;
      nextCrop.height = newSize.height;
    } else if (ReactCrop.xOrds.indexOf(ord) > -1) {
      nextCrop.x = newX;
      nextCrop.width = newSize.width;
    } else if (ReactCrop.yOrds.indexOf(ord) > -1) {
      nextCrop.y = newY;
      nextCrop.height = newSize.height;
    }

    evData.lastYCrossover = evData.yCrossOver;
    this.crossOverCheck();
    return nextCrop;
  }

  straightenYPath(clientX) {
    const evData = this.evData;
    const ord = evData.ord;
    const cropOffset = evData.cropOffset;
    const cropStartWidth = evData.cropStartWidth / 100 * this.imageRef.width;
    const cropStartHeight = evData.cropStartHeight / 100 * this.imageRef.height;
    let k;
    let d;

    if (ord === 'nw' || ord === 'se') {
      k = cropStartHeight / cropStartWidth;
      d = cropOffset.top - cropOffset.left * k;
    } else {
      k = -cropStartHeight / cropStartWidth;
      d = cropOffset.top + (cropStartHeight - cropOffset.left * k);
    }

    return k * clientX + d;
  }

  createCropSelection() {
    const { disabled } = this.props;
    const style = this.getCropStyle();

    return (
      <div
        ref={n => {
          this.cropSelectRef = n;
        }}
        style={style}
        className="ReactCrop__crop-selection"
        onMouseDown={this.onCropMouseTouchDown}
        onTouchStart={this.onCropMouseTouchDown}
      >
        {!disabled && (
          <div className="ReactCrop__drag-elements">
            <div className="ReactCrop__drag-bar ord-n" data-ord="n" />
            <div className="ReactCrop__drag-bar ord-e" data-ord="e" />
            <div className="ReactCrop__drag-bar ord-s" data-ord="s" />
            <div className="ReactCrop__drag-bar ord-w" data-ord="w" />

            <div className="ReactCrop__drag-handle ord-nw" data-ord="nw" />
            <div className="ReactCrop__drag-handle ord-n" data-ord="n" />
            <div className="ReactCrop__drag-handle ord-ne" data-ord="ne" />
            <div className="ReactCrop__drag-handle ord-e" data-ord="e" />
            <div className="ReactCrop__drag-handle ord-se" data-ord="se" />
            <div className="ReactCrop__drag-handle ord-s" data-ord="s" />
            <div className="ReactCrop__drag-handle ord-sw" data-ord="sw" />
            <div className="ReactCrop__drag-handle ord-w" data-ord="w" />
          </div>
        )}
      </div>
    );
  }

  makeNewCrop() {
    return {
      ...ReactCrop.defaultCrop,
      ...this.props.crop,
    };
  }

  crossOverCheck() {
    const evData = this.evData;

    if (
      (!evData.xCrossOver &&
        -Math.abs(evData.cropStartWidth) - evData.xDiffPc >= 0) ||
      (evData.xCrossOver &&
        -Math.abs(evData.cropStartWidth) - evData.xDiffPc <= 0)
    ) {
      evData.xCrossOver = !evData.xCrossOver;
    }

    if (
      (!evData.yCrossOver &&
        -Math.abs(evData.cropStartHeight) - evData.yDiffPc >= 0) ||
      (evData.yCrossOver &&
        -Math.abs(evData.cropStartHeight) - evData.yDiffPc <= 0)
    ) {
      evData.yCrossOver = !evData.yCrossOver;
    }

    const swapXOrd = evData.xCrossOver !== evData.startXCrossOver;
    const swapYOrd = evData.yCrossOver !== evData.startYCrossOver;

    evData.inversedXOrd = swapXOrd ? inverseOrd(evData.ord) : false;
    evData.inversedYOrd = swapYOrd ? inverseOrd(evData.ord) : false;
  }

  render() {
    const { children, crossorigin, crop, disabled, imageAlt, src } = this.props;
    const { cropIsActive } = this.state;
    let cropSelection;

    if (isCropValid(crop)) {
      cropSelection = this.createCropSelection();
    }

    const componentClasses = ['ReactCrop'];

    if (cropIsActive) {
      componentClasses.push('ReactCrop--active');
    }

    if (crop) {
      if (crop.aspect) {
        componentClasses.push('ReactCrop--fixed-aspect');
      }

      // In this case we have to shadow the image, since the box-shadow
      // on the crop won't work.
      if (cropIsActive && (!crop.width || !crop.height)) {
        componentClasses.push('ReactCrop--crop-invisible');
      }
    }

    if (disabled) {
      componentClasses.push('ReactCrop--disabled');
    }

    return (
      <div
        ref={n => {
          this.componentRef = n;
        }}
        className={componentClasses.join(' ')}
        onTouchStart={this.onComponentMouseTouchDown}
        onMouseDown={this.onComponentMouseTouchDown}
        tabIndex="1"
        onKeyDown={this.onComponentKeyDown}
      >
        <img
          ref={n => {
            this.imageRef = n;
          }}
          crossOrigin={crossorigin}
          className="ReactCrop__image"
          src={src}
          onLoad={e => this.onImageLoad(e.target)}
          alt={imageAlt}
        />

        {cropSelection}

        {children}
      </div>
    );
  }
}

ReactCrop.xOrds = ['e', 'w'];
ReactCrop.yOrds = ['n', 's'];
ReactCrop.xyOrds = ['nw', 'ne', 'se', 'sw'];

ReactCrop.arrowKey = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};

ReactCrop.nudgeStep = 0.2;

ReactCrop.defaultCrop = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

ReactCrop.propTypes = {
  src: PropTypes.string.isRequired,
  crop: PropTypes.shape({
    aspect: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  imageAlt: PropTypes.string,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  keepSelection: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onComplete: PropTypes.func,
  onImageLoaded: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  disabled: PropTypes.bool,
  crossorigin: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ReactCrop.defaultProps = {
  crop: undefined,
  crossorigin: undefined,
  disabled: false,
  imageAlt: '',
  maxWidth: 100,
  maxHeight: 100,
  minWidth: 0,
  minHeight: 0,
  keepSelection: false,
  onComplete: () => {},
  onImageLoaded: () => {},
  onDragStart: () => {},
  onDragEnd: () => {},
  children: undefined,
};

export default ReactCrop;
