import React from 'react';
import { createComponent } from 'olymp-fela';
import GoogleMap from './maps';

const MapContainer = createComponent(({ theme }) => ({
  width: '100%',
  height: 300,
  position: 'relative',
  display: 'block',
}), ({ attributes, className }) => (
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
    className={className}
    {...attributes}
  >
    <GoogleMap.Marker lat={59.724465} lng={30.080121} />
  </GoogleMap>
), p => Object.keys(p));

export default {
  label: 'Karte',
  category: 'Medien',
  editable: false,
  component: MapContainer,
};
