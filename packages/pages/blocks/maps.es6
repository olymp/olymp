import React from 'react';
import { createComponent } from 'olymp-fela';
import { Icon } from 'antd';
import Maps from 'olymp-google/maps';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';

const MapContainer = createComponent(
  ({ theme }) => ({
    width: '100%',
    height: 300,
    position: 'relative',
    display: 'block',
  }),
  ({ attributes, className, getData, children }) => (
    <div className={className} {...attributes}>
      {children}
      <Maps
        center={{
          lat: getData('lat', 59.724465),
          lng: getData('lng', 30.080121),
        }}
        zoom={15}
        options={() => ({
          panControl: false,
          mapTypeControl: false,
          zoomControl: false,
          scrollwheel: false,
          gestureHandling: 'none',
        })}
      >
        <Maps.Marker
          lat={getData('lat', 59.724465)}
          lng={getData('lng', 30.080121)}
        />
      </Maps>
    </div>
  ),
  p => Object.keys(p),
);

const onClick = (setData, getData, client) => () => {
  const value = prompt('Adresse', '');
  if (value) {
    client
      .query({
        query: gql(`
        query geocode($address: String!) {
          geocode(address: $address, region: "DE", language: "DE") {
            id
            streetNumber
            route
            locality
            administrativeAreaLevel1
            administrativeAreaLevel2
            country
            postalCode
            formattedAddress
            lat
            lng
            locationType
            partialMatch
            types
          }
        }
      `),
        variables: {
          address: value,
        },
      })
      .then(({ data }) => {
        if (data.geocode) {
          if (confirm(`Adresse: ${data.geocode.formattedAddress}`)) {
            setData({ lat: data.geocode.lat, lng: data.geocode.lng });
          }
        }
      });
  }
};
export default {
  type: 'Pages.Media.MapsBlock',
  isVoid: true,
  kind: 'block',
  label: 'Google-Karte',
  category: 'Sonstiges',
  component: MapContainer,
  actions: [
    {
      tooltip: getData => `Bild ${getData('value') ? 'wechseln' : 'wählen'}`,
      component: withApollo(({ setData, getData, client, ...p }) => (
        <span onClick={onClick(setData, getData, client)}>
          <Icon type="flag" />
        </span>
      )),
      toggle: () => {},
    },
  ],
};
