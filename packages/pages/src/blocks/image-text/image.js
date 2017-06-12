import React from 'react';
import { Image as CloudinaryImage, ImageEdit } from 'olymp-cloudinary';
import { createComponent } from 'olymp-fela';

const Image = createComponent(() => ({
  width: '100%',
  display: 'block',
}), p => <CloudinaryImage {...p} />, p => Object.keys(p));

export default {
  editable: false,
  component: Image,
  actions: [{
    component: ({ setData, getData, ...p }) => <ImageEdit {...p} onChange={value => setData({ value })} value={getData('value', [])} multi={false} />,
    toggle: () => {},
  }],
};

