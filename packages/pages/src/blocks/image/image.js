import React from 'react';
import { Image as CloudinaryImage } from 'olymp-cloudinary';
import { createComponent } from 'olymp-fela';
import Mediathek from './mediathek';

const ImageContainer = createComponent(({ width, float }) => ({
  width,
  float,
  position: 'relative',
}), ({ className, image, showTitle }) => (
  <div className={className}>
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
    test
    {title && <h3>{title}</h3>}
    {subtitle && <p>{subtitle}</p>}
  </div>
), p => Object.keys(p));

export default {
  // Meta-Data
  label: 'Bild',
  category: 'Media',
  editable: false,
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
    component: p => <Mediathek {...p} multi={false} />,
    toggle: () => {},
  },
  {
    label: 'Bildunterschrift',
    toggle: ({ setData, getData }) => setData({ showTitle: !getData('showTitle') }),
    active: ({ getData }) => getData('showTitle'),
  }],
  Label,
};

/* const Gallery = createComponent(() => ({
  width: '100%',
  onAfter: {
    content: '""',
    clear: 'both',
    display: 'block',
    visibility: 'hidden',
    height: 0,
  }
}), ({ className, images, attributes, showTitle, caption, source, columns }) => (
  <div className={className} {...attributes}>
    {images.map((image, i) => (
      <ImageContainer
        image={image}
        showTitle={showTitle}
        title={caption && image.caption}
        subtitle={source && image.source}
        width={`${100 / columns}%`}
        key={image.id || i}
      />
    ))}
  </div>
), p => Object.keys(p)); */
