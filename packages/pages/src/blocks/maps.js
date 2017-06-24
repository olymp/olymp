import React from 'react';
import { createComponent } from 'olymp-fela';
import { Maps } from 'olymp-google';

const MapContainer = createComponent(
  ({ theme }) => ({
    width: '100%',
    height: 300,
    position: 'relative',
    display: 'block',
  }),
  ({ attributes, className }) =>
    (<div className={className}>
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
        {...attributes}
      >
        <Maps.Marker lat={59.724465} lng={30.080121} />
      </Maps>
    </div>),
  p => Object.keys(p)
);

export default {
  key: 'Pages.Template.MapsBlock',
  label: 'Karte',
  category: 'Medien',
  editable: false,
  component: MapContainer,
  Maps,
};
