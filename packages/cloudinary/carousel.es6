import React, { Component } from 'react';
import Image from './image';
// import 'rc-banner-anim/assets/index.css';

let InnerComponent;
/* if (process.env.IS_WEB) {
  const BannerAnim = require('rc-banner-anim');
  const Element = require('rc-banner-anim').Element;

  InnerComponent = ({ value }) => (
    <BannerAnim
      prefixCls="custom-arrow-thumb"
      autoPlay
      type={['grid', 'gridBar']}
      key={1}
      duration={800}
    >
      {value.map((image, index) => (
        <Element prefixCls="banner-user-elem" key={image.id || image.url || index}>
          <Element.BgElement
            key="bg"
            className="bg"
            style={{
              backgroundColor: 'gray',
              backgroundImage: `url(${cloudinaryUrl(image)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Element>
      ))}
    </BannerAnim>
  );
} */

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { mounted: false };
  }
  componentDidMount() {
    // this.setState({ mounted: true });
  }
  render() {
    const {
      value,
      height,
      attributes,
      children,
      style,
      className,
    } = this.props;
    return value.length > 0 ? (
      <Image
        width="100%"
        value={value[0]}
        maxHeight={height || 220}
        className={className}
        attributes={attributes}
        style={style}
      >
        {children}
      </Image>
    ) : null;
    /* let inner = null;
    if (this.state.mounted) {
      inner = <InnerComponent key={2} {...this.props} />;
    } else {
    }
    return <div {...attributes}>{inner}</div>; */
  }
}
const styles = ({ height }) => ({
  height: height || 220,
  overflow: 'hidden',
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

// export default createComponent(styles, Carousel, p => Object.keys(p));
export default Carousel;
