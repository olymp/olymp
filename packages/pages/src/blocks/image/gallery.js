import React from 'react';
import Image from './image';
import Mediathek from './mediathek';

export default {
  ...Image,
  label: 'Galerie',
  actions: [{
    tooltip: 'Bilder auswählen',
    component: p => <Mediathek {...p} multi />,
    toggle: () => {},
  },
  {
    tooltip: 'Bildbezeichnung',
    toggle: ({ setData, getData }) => {
      setData({ caption: !getData('caption', false) });
    },
  },
  {
    tooltip: 'Bildquelle',
    toggle: ({ setData, getData }) => {
      setData({ source: !getData('source', false) });
    },
  },
  {
    tooltip: '+',
    toggle: ({ setData, getData }) => setData({ columns: getData('columns', 1) + 1 }),
  },
  {
    tooltip: '-',
    toggle: ({ setData, getData }) => {
      const columns = getData('columns', 1);
      setData({ columns: columns > 1 ? columns - 1 : 1 });
    },
  }],
};
