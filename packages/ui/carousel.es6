import React from 'react';
import { createComponent } from 'olymp-fela';
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'olymp-cloudinary';
import 'rc-banner-anim/assets/index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const component = ({ value, ...atributes }) => (
  <Carousel {...atributes} infiniteLoop autoPlay>
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

/*
import React from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import { createComponent } from 'olymp-fela';
import { cloudinaryUrl } from 'olymp-cloudinary';
import cn from 'classnames';
import tc from 'tinycolor2';
import 'rc-banner-anim/assets/index.css';

const Image = createComponent(
  ({ value }) => ({
    backgroundImage: `url(${cloudinaryUrl(value)})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }),
  Element.BgElement,
  ({ value, ...p }) => Object.keys(p),
);

const component = ({ value, className, ...atributes }) => (
  <BannerAnim prefixCls="banner-user" className={cn('banner-anim', className)} {...atributes}>
    {value.map((image, i) => (
      <Element prefixCls="banner-user-elem" key={i}>
        <Image
          key="bg"
          className="banner-background"
          value={image}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Ant Motion Banner
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
      ))}
    </BannerAnim>
  );

  const styles = ({ height }) => ({
    height: height || 220,
    position: 'relative',
    '& .banner-user-elem': {
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
    '& .banner-background': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      overflow: 'hidden',
    },
  });

  export default createComponent(styles, component, p => Object.keys(p));
*/
