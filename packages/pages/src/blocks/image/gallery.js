import React from 'react';
import Image from './image';
import Mediathek from './mediathek';

export default {
  ...Image,
  label: 'Galerie',
  actions: [{
    label: 'Bilder auswählen',
    component: p => <Mediathek {...p} multi />,
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
