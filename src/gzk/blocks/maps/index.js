import React from 'react';
import { createComponent } from 'olymp-fela';
import GoogleMap from './maps';
import Image from '../image';

export default {
  label: 'Karte',
  category: 'Media',
  editable: false,
  component: ({ getData, ...p }) => (
    <MapContainer
      {...p}
      title={getData('title')}
      subtitle={getData('subtitle')}
    />
  ),
  actions: [{
    label: 'Titel',
    toggle: ({ setData, getData, ...p }) => {
      const image = getData('value', [{}])[0];
      const title = prompt('Titel', getData('title', image.caption));
      const subtitle = prompt('Untertitel', getData('subtitle', image.source));
      setData({ title, subtitle });
    },
  }],
};

const MapContainer = createComponent(({ theme }) => ({
  width: '100%',
  height: 300,
  position: 'relative',
  backgroundColor: 'gray',
  display: 'block',
}), ({ className, title, subtitle }) => (
  <div className={className}>
    <GoogleMap center={{ lat: 59.724465, lng: 30.080121 }} zoom={1}>
      <GoogleMap.Marker lat={59.724465} lng={30.080121} />
    </GoogleMap>
    {(title || subtitle) && (
      <Image.Label title={title} subtitle={subtitle} />
    )}
  </div>
), p => Object.keys(p));
