import React from 'react';
import { Image, ImageEdit } from 'olymp-cloudinary';

export default {
  // Meta-Data
  label: 'Bild',
  category: 'Medien',
  editable: false,
  // Component
  component: ({ getData, ...p }) =>
    (<Image
      {...p}
      value={getData('value', [{ url: 'http://placekitten.com/1000/300' }])[0]}
      width="100%"
    />),
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
        (<ImageEdit
          {...p}
          onChange={value => setData({ value })}
          value={getData('value', [])}
          multi={false}
        />),
      toggle: () => {},
    },
  ],
  Image,
};
