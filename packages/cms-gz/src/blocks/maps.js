import React from 'react';
import { Blocks } from 'olymp-pages';
import { createComponent } from 'olymp-fela';
import Image from './image';

const Maps = Blocks.Maps.Maps;
const Label = Blocks.ImageTextLabel.component;
const MapContainer = createComponent(
  ({ theme }) => ({
    width: '100%',
    height: 300,
    position: 'relative',
    display: 'block',
    ...Image.styles({ theme }),
  }),
  ({ attributes, className, showTitle, children }) =>
    (<div className={className} {...attributes}>
      <Maps
        center={{ lat: 59.724465, lng: 30.080121 }}
        zoom={1}
        options={() => ({
          panControl: false,
          mapTypeControl: false,
          zoomControl: false,
          scrollwheel: false,
          gestureHandling: 'none',
        })}
      >
        <Maps.Marker lat={59.724465} lng={30.080121} />
      </Maps>
      {showTitle && <Label>{children}</Label>}
    </div>),
  p => Object.keys(p)
);

export default {
  label: 'Karte',
  category: 'Kopfleiste',
  editable: true,
  component: ({ getData, ...p }) =>
    <MapContainer {...p} showTitle={getData('showTitle', true)} />,
  actions: [
    {
      label: 'Titel',
      toggle: ({ setData, getData }) =>
        setData({ showTitle: !getData('showTitle', true) }),
      active: ({ getData }) => getData('showTitle', true),
    },
  ],
};
