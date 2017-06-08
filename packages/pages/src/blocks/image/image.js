import React from 'react';
import { Image as CloudinaryImage } from 'olymp-cloudinary';
import { createComponent } from 'olymp-fela';
import Mediathek from './mediathek';

export default {
  // Meta-Data
  label: 'Bild',
  category: 'Media',
  editable: false,
  // Component
  component: ({ getData, ...p }) => (
    <Gallery
      {...p}
      images={getData('value', [{ url: 'http://placekitten.com/1000/300' }])}
      title={getData('title')}
      subtitle={getData('subtitle')}
      caption={getData('caption')}
      source={getData('source')}
      columns={getData('columns', 1)}
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
    tooltip: 'Bildunterschrift',
    toggle: ({ setData, getData, ...p }) => {
      const image = getData('value', [{}])[0];
      const title = prompt('Titel', getData('title', image.caption));
      const subtitle = prompt('Untertitel', getData('subtitle', image.source));
      setData({ title, subtitle });
    },
  }],
};

const Gallery = createComponent(() => ({
  width: '100%',
  onAfter: {
    content: '""',
    clear: 'both',
    display: 'block',
    visibility: 'hidden',
    height: 0,
  }
}), ({ className, images, attributes, title, subtitle, caption, source, columns }) => (
  <div className={className}>
    {images.map((image, i) => (
      <ImageContainer
        image={image}
        attributes={attributes}
        title={title || (caption && image.caption)}
        subtitle={subtitle || (source && image.source)}
        width={`${100 / columns}%`}
        key={image.id || i}
      />
    ))}
  </div>
), p => Object.keys(p));

const ImageContainer = createComponent(({ width }) => ({
  width,
  position: 'relative',
  float: 'left',
}), ({ className, image, attributes, title, subtitle }) => (
  <div className={className}>
    <Image {...attributes} value={image} alt="" />
    {(title || subtitle) && (
      <Label title={title} subtitle={subtitle} />
    )}
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
    {title && <h3>{title}</h3>}
    {subtitle && <p>{subtitle}</p>}
  </div>
), p => Object.keys(p));
