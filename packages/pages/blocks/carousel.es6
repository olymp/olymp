import React, { Component } from 'react';
import { createComponent, Container } from 'olymp-fela';
import { Image, SimpleImageEdit } from 'olymp-cloudinary';
import { renderHelmet } from 'olymp-utils';
import { Button } from 'antd';

const Carousel = createComponent(
  ({ theme }) => ({
    paddingY: 25,
    width: '100%',
  }),
  'div',
  p => Object.keys(p)
);

const Ctn = createComponent(
  ({ theme }) => ({
    position: 'relative',
  }),
  p => <Container {...p} />,
  p => Object.keys(p)
);

const Btn = createComponent(
  ({ theme, icon }) => ({
    position: 'absolute',
    top: '50%',
    left: icon === 'left' ? 0 : '100%',
    transform: 'translate(-50%, -50%)',
  }),
  p => <Button type="primary" shape="circle" size="large" {...p} />,
  p => Object.keys(p)
);

class CarouselBlock extends Component {
  state = { imageNumber: 0 };

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  start() {
    this.interval = setInterval(this.nextImage, 6000);
  }

  stop() {
    clearInterval(this.interval);
  }

  nextImage = () => {
    const { getData } = this.props;
    const { imageNumber } = this.state;
    const images = getData('value', [
      {
        url: 'https://lorempixel.com/960/300/cats/',
        width: 960,
        height: 300,
      },
    ]);

    this.stop();
    if (imageNumber + 1 < images.length) {
      this.setState({ imageNumber: imageNumber + 1 });
    } else {
      this.setState({ imageNumber: 0 });
    }
    this.start();
  };

  prevImage = () => {
    const { getData } = this.props;
    const { imageNumber } = this.state;
    const images = getData('value', [
      {
        url: 'https://lorempixel.com/960/300/cats/',
        width: 960,
        height: 300,
      },
    ]);

    this.stop();
    if (imageNumber > 0) {
      this.setState({ imageNumber: imageNumber - 1 });
    } else {
      this.setState({ imageNumber: images.length - 1 });
    }
    this.start();
  };

  render() {
    const { getData, setActive, className, attributes } = this.props;
    const { imageNumber } = this.state;
    const image = getData('value', [
      {
        url: 'https://lorempixel.com/960/300/cats/',
        width: 960,
        height: 300,
      },
    ])[imageNumber];

    return (
      <Carousel className={className} {...attributes}>
        <Ctn>
          <Image
            className={className}
            onClick={setActive}
            width="100%"
            maxHeight={300}
            maxResolution={500000}
            value={image}
          >
            {renderHelmet({ image })}
          </Image>
          <Btn icon="left" onClick={this.prevImage} />
          <Btn icon="right" onClick={this.nextImage} />
        </Ctn>
      </Carousel>
    );
  }
}

export default {
  key: 'Pages.Media.Carousel',
  label: 'Bildershow',
  category: 'Medien',
  editable: false,
  component: CarouselBlock,
  actions: [
    {
      component: ({ setData, getData, ...p }) => (
        <SimpleImageEdit
          {...p}
          onChange={value => setData({ value })}
          value={getData('value', [])}
          multi
        />
      ),
      toggle: () => {},
    },
  ],
};
