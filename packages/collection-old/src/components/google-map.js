import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Map from 'google-map-react';

export default class GoogleMap extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  static defaultProps = {
    center: { lat: 59.938043, lng: 30.337157 },
    zoom: 9,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 },
  };
  render() {
    const { children, center, zoom, key, ...rest } = this.props;

    return (
      <Map
        defaultCenter={center}
        center={center}
        defaultZoom={zoom}
        zoom={zoom}
        bootstrapURLKeys={{
          key: key || process.env.GM_KEY,
        }}
        {...rest}
      >
        {children}
      </Map>
    );
  }
}
