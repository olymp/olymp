import React from 'react';
import { Blocks } from 'olymp-pages';
import { createComponent } from 'olymp-fela';
import { Maps } from 'olymp-google';
import { ImageStyles } from './image/block';

const Label = Blocks.ImageBlockLabel.component;
const MapContainer = createComponent(
  ({ theme }) => ({
    width: '100%',
    height: 300,
    position: 'relative',
    display: 'block',
    '> div > div > div > div': {
      borderBottomRightRadius: 100,
      overflow: 'hidden',
      ifSmallDown: {
        borderBottomRightRadius: 50,
      },
      '> div': {
        // .gm-style
        borderBottomRightRadius: 100,
        overflow: 'hidden',
        ifSmallDown: {
          borderBottomRightRadius: 50,
        },
      },
    },
    ...ImageStyles({ theme }),
    ifSmallDown: {
      ...ImageStyles({ theme }).ifSmallDown,
      height: 150,
    },
  }),
  ({ attributes, className, children }) => (
    <div className={className} {...attributes}>
      <Maps
        center={{ lat: 50.13429468, lng: 8.45419139 }}
        zoom={17}
        options={() => ({
          panControl: false,
          mapTypeControl: false,
          zoomControl: false,
          scrollwheel: false,
          gestureHandling: 'none',
        })}
      >
        <Maps.Marker lat={50.13476404} lng={8.45419139} />
      </Maps>
      <Label>{children}</Label>
    </div>
  ),
  p => Object.keys(p),
);

export default {
  type: 'GZK.Header.MapsBlock',
  label: 'Karte',
  category: 'Kopfleiste',
  isVoid: false,
  kind: 'block',
  component: p => <MapContainer {...p} />,
};
