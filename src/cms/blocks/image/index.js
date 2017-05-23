import React, { Component, PropTypes } from 'react';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import Image from '../../edits/image';

const actions = props => [{
  type: 'image-src',
  icon: 'picture-o',
  tooltip: 'Bild und Bildausschnitt auswählen',
  toggle: () => {
    const { setData } = props;
    setData({ showMedia: true });
  },
  active: false,
}, {
  icon: 'quote-right',
  type: 'withCaption',
  toggle: () => {
    const { setData, getData } = props;
    setData({ withCaption: !getData('withCaption') });
  },
  tooltip: 'Bildunterschriften anzeigen',
}, {
  icon: 'code',
  type: 'withSource',
  toggle: () => {
    const { setData, getData } = props;
    setData({ withSource: !getData('withSource') });
  },
  tooltip: 'Quellen anzeigen',
},];

@useGenericBlock({
  label: 'Bild',
  props: ['image', 'showMedia', 'full'],
  category: 'Media',
  editable: false,
  resize: {
    bootstrap: true,
    coverOnResize: true,
    resizeY: false,
  },
  align: true,
  actions,
})
export default class ImageBlock extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    getData: PropTypes.func,
    setData: PropTypes.func,
  }

  render() {
    const { setData, getData, readOnly } = this.props;
    const { style, children, ...rest } = this.props;
    const value = getData('image', undefined);
    const withCaption = this.props.withCaption || getData('withCaption');
    const withSource = this.props.withSource || getData('withSource');

    const styles = {
      backgroundColor: !value ? 'gray' : 'transparent',
      position: 'relative',
      zIndex: 2,
      ...style,
      height: 'auto',
    };

    const innerStyle = {
      display: 'block',
    };

    // const width = !value ? styles.width : (value.crop ? value.crop[0] : value.width);
    // const height = !value ? styles.height : (value.crop ? value.crop[1] : value.height);

    return (
      <GenericBlock {...rest} style={styles}>
        <Image
          asImg
          onChange={image => setData({ showMedia: undefined, image })}
          onCancel={() => setData({ showMedia: false })}
          lightbox
          onImageClick={readOnly ? ({ showLightbox }) => showLightbox() : () => setData({ showMedia: true })}
          showMediathek={getData('showMedia')}
          width={styles.width}
          value={value}
          style={innerStyle}
        />
        {children}
      </GenericBlock>
    );
  }
}
