import React from 'react';
import { createComponent } from 'olymp-fela';
import GoogleMap from './maps';
import Image from '../image';

export default {
  label: 'Karte',
  category: 'Kopfleiste',
  editable: true,
  component: ({ getData, ...p }) => (
    <MapContainer {...p} showTitle={getData('showTitle', true)} />
  ),
  actions: [{
    label: 'Titel',
    toggle: ({ setData, getData }) => setData({ showTitle: !getData('showTitle', true) }),
    active: ({ getData }) => getData('showTitle', true),
  }],
};

const MapContainer = createComponent(({ theme }) => ({
  width: '100%',
  height: 300,
  position: 'relative',
  display: 'block',
  ...Image.styles({ theme }),
}), ({ attributes, className, showTitle, children }) => (
  <div className={className} {...attributes}>
    <GoogleMap
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
      <GoogleMap.Marker lat={59.724465} lng={30.080121} />
    </GoogleMap>
    {showTitle && <Image.Label>{children}</Image.Label>}
  </div>
), p => Object.keys(p));
