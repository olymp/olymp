import React from 'react';
import { Image as CloudinaryImage, ImageEdit } from 'olymp-cloudinary';
import { createComponent } from 'olymp-fela';

const ImageContainer = createComponent(({ width, float }) => ({
  width,
  float,
  position: 'relative',
}), ({ className, image, showTitle, attributes }) => (
  <div className={className} {...attributes}>
    <Image contentEditable={false} value={image} alt="" />
    {showTitle && <Label title={image.caption} subtitle={image.source} />}
  </div>
), p => Object.keys(p));

const Image = createComponent(() => ({
  width: '100%',
  display: 'block',
}), p => <CloudinaryImage {...p} />, p => Object.keys(p));

const Label = createComponent(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  padding: `${theme.space1} ${theme.space3}`,
  backgroundColor: theme.light2,
  color: theme.dark,
  '> p': {
    padding: 0,
    color: theme.dark2,
  },
  ifSmallDown: {
    position: 'relative',
    padding: theme.space2,
    backgroundColor: theme.dark5,
  },
}), ({ className, title, subtitle }) => (
  <div className={className}>
    <h3>{title || 'Titel'}</h3>
    <p>{subtitle || 'Untertitel'}</p>
  </div>
), p => Object.keys(p));

export default {
  // Meta-Data
  label: 'Bild',
  category: 'Medien',
  editable: true,
  // Component
  component: ({ getData, ...p }) => (
    <ImageContainer
      {...p}
      image={getData('value', [{ url: 'http://placekitten.com/1000/300' }])[0]}
      showTitle={getData('showTitle')}
      width="100%"
      float="left"
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
  },
  {
    label: 'Bildunterschrift',
    toggle: ({ setData, getData }) => setData({ showTitle: !getData('showTitle') }),
    active: ({ getData }) => getData('showTitle'),
  }],
  Label,
};
