import React from 'react';
import { SimpleImageEdit } from 'olymp-cloudinary';
import Carousel from 'olymp-ui/carousel';

const CarouselBlock = ({ getData, className, children, attributes }) => (
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
    />
    {children}
  </div>
);

export default {
  type: 'carousel',
  isVoid: true,
  kind: 'block',
  label: 'Bildershow',
  category: 'Bilder',
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
