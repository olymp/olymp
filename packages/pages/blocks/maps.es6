import React from 'react';
import { createComponent } from 'olymp-fela';
import { Icon } from 'antd';
import { Maps } from 'olymp-google';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';

const MapContainer = createComponent(
  ({ theme }) => ({
    width: '100%',
    height: 300,
    position: 'relative',
    display: 'block',
  }),
  ({ attributes, className, getData }) => (
    <div className={className}>
      <Maps
        center={{ lat: getData('lat', 59.724465), lng: getData('lng', 30.080121) }}
        zoom={15}
        options={() => ({
          panControl: false,
          mapTypeControl: false,
          zoomControl: false,
          scrollwheel: false,
          gestureHandling: 'none',
        })}
        {...attributes}
      >
        <Maps.Marker lat={getData('lat', 59.724465)} lng={getData('lng', 30.080121)} />
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
        query geocode($address: String!, $region: String!) {
          geocode(address: $address, region: $region) {
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
          region: 'DE',
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
  label: 'Karte',
  category: 'Medien',
  component: MapContainer,
  actions: [
    {
      type: 'small',
      icon: 'align-left',
      label: 'Stil 1',
      component: withApollo(({ setData, getData, client }) => (
        <span onClick={onClick(setData, getData, client)}>
          <Icon type="flag" />
        </span>
      )),
      toggle: ({ setData }) => setData({ type: 'style2' }),
      active: ({ type }) => false,
    },
  ],
};
