import React, { Component, PropTypes } from 'react';
import { useGenericBlock, GenericBlock } from 'olymp-slate';
import { gql, withApollo } from 'olymp';
import { GoogleMap } from 'olymp-cms-core';

const Marker = ({ lat, lng }) =>
  (<i
    style={{ marginTop: '-20px' }}
    className="fa fa-map-marker fa-2x text-primary"
  />);

const defaultAddress = { lat: 59.724465, lng: 30.080121 };
const actions = props => [
  {
    type: 'gmap.url',
    icon: 'map-marker',
    toggle: () => {
      const { setData, getData, client } = props;
      const current = getData('address');
      const address = window.prompt(
        'Adresse',
        current ? current.formattedAddress : ''
      );

      if (address) {
        client
          .query({
            query: gql`query geocode { item: geocode(address:"${address}") { formattedAddress, lat, lng } }` /* eslint-disable-line no-undef */,
            forceFetch: true,
          })
          .then(x => setData({ address: x.data.item }));
      }
    },
    active: false,
    tooltip: 'Adresse eingeben',
  },
];

@withApollo
@useGenericBlock({
  label: 'GoogleMap',
  category: 'Media',
  props: ['address'],
  editable: false,
  align: true,
  resize: {
    coverOnResize: true,
    ratio: 7 / 4,
  },
  actions,
})
export default class GoogleMapBlock extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    getData: PropTypes.func,
  };
  static defaultProps = {
    zoom: 16,
  };

  render() {
    const { style, getData, children, zoom, ...rest } = this.props;
    const address = getData('address', defaultAddress);

    const styles = {
      backgroundColor: 'gray',
      position: 'relative',
      ...style,
    };

    return (
      <GenericBlock {...rest} style={styles}>
        <GoogleMap center={address} zoom={zoom}>
          <Marker {...address} />
        </GoogleMap>
        {children}
      </GenericBlock>
    );
  }
}
