import React, { Component, PropTypes } from 'react';
import Image from '../../components/image-info';
import blockWrapper from '../block-wrapper';
import styles from './style.less';

@blockWrapper({
  resizeable: {
    resizeSteps: 10,
    // ratio: 2/3,
    // vertical: 'absolute',,
    // caption: true,
    handles: true,
  },
})
export default class ImageBlock extends Component {
  static defaultProps = {
    image: null,
    imageSize: 'normal',
    round: false,
    comment: null,
  };
  static title = 'Bild';
  static category = 'Bild';
  static icon = 'picture';

  getImageSize = image => {
    const { embedded, blockProps } = this.props;
    if (image) {
      const width = (blockProps.width ? (960 / 100 * blockProps.width) : 960) / (embedded || 1);
      const ratio = image.params ? (image.params.cropW / image.params.cropH) : (image.width / image.height);
      return {
        height: Math.round(width / ratio),
        width,
      };
    }
    return undefined;
  };

  setEntityData = image => {
    const { setEntityData } = this.props;
    setEntityData({ image });
  };

  render() {
    /* var action = {
     active: false,
     button: <span>BILD</span>,
     toggle: this.showModal,
     label: 'Mediathek'
     };*/
    const { alignmentClassName, focusClassName, style, image, ...other } = this.props;

    // Compose figure classNames
    let className = styles.imageWrapper;
    if (alignmentClassName) className = `${alignmentClassName} ${className}`;
    // Compose image classNames
    let imageClassName = styles.image;
    if (focusClassName) imageClassName += ` ${focusClassName}`;

    return (
      <div className={className} contentEditable={false} style={style}>
        <Image {...other} className={imageClassName} getImageSize={this.getImageSize} updateValue={this.setEntityData}
          value={image} width={'100%'} height={'auto'} lightbox
        />
        {/* this.renderProgress(progress, theme)
         */}
      </div>
    );
  }
}
