import React from 'react';
import { Image as CloudinaryImage, ImageEdit } from 'olymp-cloudinary';
import { createComponent } from 'olymp-fela';

const Image = createComponent(
  ({ width }) => ({
    width,
    display: 'block',
  }),
  ({ attributes, value, className }) =>
    <CloudinaryImage className={className} value={value} {...attributes} />,
  p => Object.keys(p)
);

export default {
  // Meta-Data
  label: 'Bild',
  category: 'Medien',
  editable: false,
  // Component
  component: ({ getData, ...p }) =>
    <Image
      {...p}
      value={getData('value', [{ url: 'http://placekitten.com/1000/300' }])[0]}
      width="100%"
    />,
  // Styles
  styles: {
    width: '100%',
    height: 'auto',
  },
  // Editor Plugins like onKeyDown
  plugin: {},
  // Block decorators like resize
  decorators: [],
  // Actions
  actions: [
    {
      component: ({ setData, getData, ...p }) =>
        <ImageEdit
          {...p}
          onChange={value => setData({ value })}
          value={getData('value', [])}
          multi={false}
        />,
      toggle: () => {},
    },
  ],
  Image,
};
