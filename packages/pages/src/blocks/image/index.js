import React from 'react';
import { Image as CloudinaryImage, ImageEdit } from 'olymp-cloudinary';
import { createComponent } from 'olymp-fela';

const ImageContainer = createComponent(({ width, float }) => ({
  width,
  float,
  position: 'relative',
}), ({ className, image, attributes, onMouseDown }) => (
  <div className={className} {...attributes}>
    <Image contentEditable={false} value={image} alt="" onMouseDown={onMouseDown} />
  </div>
), p => Object.keys(p));

const Image = createComponent(() => ({
  width: '100%',
  display: 'block',
}), p => <CloudinaryImage {...p} />, p => Object.keys(p));

export default {
  // Meta-Data
  label: 'Bild',
  category: 'Medien',
  editable: false,
  // Component
  component: ({ getData, setActive, ...p }) => (
    <ImageContainer
      {...p}
      onMouseDown={setActive}
      image={getData('value', [{ url: 'http://placekitten.com/1000/300' }])[0]}
      showTitle={getData('showTitle')}
      width="100%"
    />
  ),
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
  actions: [{
    component: ({ setData, getData, ...p }) => <ImageEdit {...p} onChange={value => setData({ value })} value={getData('value', [])} multi={false} />,
    toggle: () => {},
  }],
};
