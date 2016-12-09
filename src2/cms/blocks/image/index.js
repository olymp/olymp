import React, { Component, PropTypes } from 'react';
import { useGenericBlock, GenericBlock } from 'olymp/cms';
import { Image } from 'olymp/cms';

const defaultImage = 'whoa.jpg';
const actions = props => [{
  type: 'image.src',
  icon: 'picture-o',
  toggle: () => {
    const { setData } = props;
    setData({ showMedia: true });
  },
  active: false,
}];

@useGenericBlock({
  label: 'Bild',
  props: ['image'],
  category: 'Media',
  editable: false,
  resize: { coverOnResize: true },
  actions,
})
export default class ImageBlock extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    isFocused: PropTypes.bool,
    attributes: PropTypes.object,
    getData: PropTypes.func,
  }

  render() {
    const { setData, getData, editor, className } = this.props;
    const { style, children, ...rest } = this.props;
    const value = getData('image', { url: defaultImage });
    const { readOnly } = editor.props;
    const height = style.height.replace('-', '');

    const styles = {
      backgroundColor: 'gray',
      position: 'relative',
      zIndex: 2,
      ...style
    };

    const innerStyle = {
      display: 'block',
    };

    return (
      <GenericBlock {...rest} style={{ ...styles, height: 'auto' }}>
        <figure className={className} style={{ margin: 0, ...styles }}>
          <Image
            container="div"
            onChange={image => setData({ showMedia: undefined, image })}
            lightbox
            onImageClick={readOnly ? ({ showLightbox }) => showLightbox() : () => {}}
            showMediathek={getData('showMedia')}
            height={height}
            width="100%"
            value={value}
            style={innerStyle}
          />
        </figure>

        {children}
      </GenericBlock>
    );
  }
}
