import React, { Component, PropTypes } from 'react';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import Image from '../../edits/image';

const actions = props => [{
  type: 'image-src',
  icon: 'picture-o',
  tooltip: 'PDF auswählen',
  toggle: () => {
    const { setData } = props;
    setData({ showMedia: true });
  },
  active: false,
}];

@useGenericBlock({
  label: 'PDF',
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
export default class PdfBlock extends Component {
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
      <GenericBlock {...rest} style={styles}>
        {value ? (
          <a href={value.url} target="_blank" rel="noopener noreferrer">
            <Image
              asImg
              onChange={image => setData({ showMedia: false, image })}
              onCancel={() => setData({ showMedia: false })}
              showMediathek={getData('showMedia')}
              pdfMode
              width={styles.width}
              value={value}
              style={innerStyle}
            />
          </a>
          ) : (
            <Image
              asImg
              onChange={image => setData({ showMedia: false, image })}
              onCancel={() => setData({ showMedia: false })}
              showMediathek={getData('showMedia')}
              pdfMode
              width={styles.width}
              style={innerStyle}
            />
          )}
        {children}
      </GenericBlock>
    );
  }
}
