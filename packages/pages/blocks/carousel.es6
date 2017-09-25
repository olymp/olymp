import React, { Component } from 'react';
import { SimpleImageEdit } from 'olymp-cloudinary';
import Carousel from 'olymp-ui/carousel';

class CarouselBlock extends Component {
  render() {
    const { getData, className, attributes } = this.props;
    /* const image = getData('value', [
      {
        url: 'https://lorempixel.com/960/300/cats/',
        width: 960,
        height: 300,
      },
    ])[imageNumber];*/

    return (
      <div {...attributes} className={className}>
        <Carousel
          height={400}
          value={getData('value', [
            {
              url: 'https://lorempixel.com/960/300/cats/',
              width: 960,
              height: 400,
            },
          ])}
        >
          {/* <Image
        className={className}
        onClick={setActive}
        width="100%"
        maxHeight={300}
        maxResolution={500000}
        value={image}
      >
        {renderHelmet({ image })}
  </Image>*/}
        </Carousel>
      </div>
    );
  }
}

export default {
  type: 'carousel',
  isVoid: true,
  kind: 'block',
  label: 'Bildershow',
  category: 'Medien',
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
