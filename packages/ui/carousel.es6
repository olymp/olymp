/* import React from 'react';
import { createComponent } from 'olymp-fela';
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'olymp-cloudinary';
import 'rc-banner-anim/assets/index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const component = ({ value, ...atributes }) => (
  <Carousel {...atributes} infiniteLoop autoPlay showStatus={false}>
    {value.map((image, i) => (
      <Image key={image.url} width="100%" maxHeight={300} maxResolution={500000} value={image} />
    ))}
  </Carousel>
);

const styles = ({ height }) => ({
  '& ul.slider.animated': {
    margin: 0,
  },
});

export default createComponent(styles, component, p => Object.keys(p));
*/
import React, { Component } from 'react';
import { createComponent } from 'olymp-fela';
import { cloudinaryUrl, Image } from 'olymp-cloudinary';
import 'rc-banner-anim/assets/index.css';

let InnerComponent;
if (process.env.IS_WEB) {
  const BannerAnim = require('rc-banner-anim');
  const Element = require('rc-banner-anim').Element;
  // const animType = require('rc-banner-anim').animType;
  // const TweenOne = require('rc-tween-one');
  InnerComponent = ({ value, ...atributes }) => (
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
          {/* <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Qualitätskreis Knorpel-Repair & Gelenkerhalt e.V.
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            bestehend aus einer Gruppe von Ärzten und Wissenschaftlern, die sich intensiv mit<br />gelenkerhaltenden
            konservativen und operativen Behandlungen der Gelenke beschäftigen.
          </TweenOne>*/}
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
});

export default createComponent(styles, Carousel, p => Object.keys(p));
