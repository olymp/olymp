import React from 'react';
import { Blocks } from 'olymp-pages';
import { createComponent } from 'olymp-fela';
import { ImagePageBlockImage } from '../image';

const Maps = Blocks.Maps.Maps;
const Label = Blocks.ImageBlockLabel.component;
const MapContainer = createComponent(
  ({ theme }) => ({
    width: '100%',
    height: 300,
    position: 'relative',
    display: 'block',
    ...ImagePageBlockImage.styles({ theme }),
  }),
  ({ attributes, className, children }) =>
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
      <Label>{children}</Label>
    </div>),
  p => Object.keys(p)
);

export default {
  key: 'GZK.Pages.MapsBlock.Maps',
  editable: true,
  component: p => <MapContainer {...p} />,
};
