import React, { Component, PropTypes } from 'react';
import { useBlockBase, useBlockResize, useBlockAlign, useBlockToolbar } from 'olymp-slate';
import { Image } from 'olymp-cms';

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

@useBlockBase()
@useBlockAlign()
@useBlockResize({ })
@useBlockToolbar({ actions, remove: true, move: true })
export default class ImageBlock extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    attributes: PropTypes.object,
    getData: PropTypes.func,
  }
  static title = 'Bild';
  static icon = 'image';
  static category = 'Media';

  render() {
    const { style, setData, getData, editor, className, children, isFocused, attributes } = this.props;
    const value = getData('image', { url: defaultImage });
    const { readOnly } = editor.props;
    const height = style.height.replace('-', '');

    const styles = {
      backgroundColor: 'gray',
      position: 'relative',
      zIndex: 2,
      ...style,
      height: 'auto',
    };

    const innerStyle = {
      display: 'block',
    };

    return (
      <figure {...attributes} className={className}>
        <div style={styles} data-block-active={isFocused}>
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
          {children}
        </div>
      </figure>
    );
  }
}
