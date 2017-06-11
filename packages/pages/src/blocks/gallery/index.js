import React from 'react';
import { ImageEdit } from 'olymp-cloudinary';
import Image from '../image';

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

export default {
  ...Image,
  label: 'Galerie',
  actions: [{
    label: 'Bilder auswählen',
    component: p => <ImageEdit {...p} multi />,
    toggle: () => {},
  },
  {
    label: 'Bildbezeichnung',
    toggle: ({ setData, getData }) => {
      setData({ caption: !getData('caption', false) });
    },
  },
  {
    label: 'Bildquelle',
    toggle: ({ setData, getData }) => {
      setData({ source: !getData('source', false) });
    },
  },
  {
    label: '+',
    toggle: ({ setData, getData }) => setData({ columns: getData('columns', 1) + 1 }),
  },
  {
    label: '-',
    toggle: ({ setData, getData }) => {
      const columns = getData('columns', 1);
      setData({ columns: columns > 1 ? columns - 1 : 1 });
    },
  }],
};
