import React, { Component } from 'react';
import { createComponent } from 'olymp-fela';
import { cloudinaryUrl, Image } from 'olymp-cloudinary';
import 'rc-banner-anim/assets/index.css';

let InnerComponent;
if (process.env.IS_WEB) {
  const BannerAnim = require('rc-banner-anim');
  const Element = require('rc-banner-anim').Element;

  InnerComponent = ({ value }) => (
    <BannerAnim prefixCls="custom-arrow-thumb" autoPlay type={['grid', 'gridBar']} duration={800}>
      {value.map(image => (
        <Element prefixCls="banner-user-elem" key={image.url}>
          <Element.BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${cloudinaryUrl(image)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Element>
      ))}
    </BannerAnim>
  );
}

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { mounted: false };
  }
  componentDidMount() {
    this.setState({ mounted: true });
  }
  render() {
    const { value, height, ...atributes } = this.props;
    let inner = null;
    if (this.state.mounted) {
      inner = <InnerComponent key={2} {...this.props} />;
    } else {
      inner =
        value.length > 0 ? (
          <Image
            key={1}
            width="100%"
            value={value[0]}
            maxHeight={height || 220}
            maxResolution={750000}
          />
        ) : null;
    }
    return <div {...atributes}>{inner}</div>;
  }
}
const styles = ({ height }) => ({
  height: height || 220,
  position: 'relative',
  width: '100%',
  '& .custom-arrow-thumb': {
    height: height || 220,
  },
  '& .banner-user-elem': {
    height: height || 220,
    textAlign: 'center',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
  },
  '& .banner-user-title': {
    fontSize: 32,
    top: '40%',
  },
  '& .banner-user-text': {
    top: '40%',
  },
  '& .bg': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  ifMini: {
    height: 180,
    '& .custom-arrow-thumb': {
      height: 180,
    },
    '& .banner-user-elem': {
      height: 180,
    },
  },
});

export default createComponent(styles, Carousel, p => Object.keys(p));
